import NextAuth from "next-auth";
import DiscordProvider, { DiscordProfile } from "next-auth/providers/discord";
import prisma from "@/server/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"]
  }
}

const scopes = ['identify'].join(' ');

if (!process.env.DISCORD_CLIENT_ID) {
  throw new Error("Failed to find Discord's client ID");
}

if (!process.env.DISCORD_CLIENT_SECRET) {
  throw new Error("Failed to find Discord's secret");
}

function profile(profile: DiscordProfile) {
  let image_url: string;

  if (profile.avatar === null) {
    const defaultAvatarNumber = parseInt(profile.discriminator, 10) % 5;
    image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
  } else {
    const format = profile.avatar.startsWith('a_') ? 'gif' : 'png';
    image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
  }

  console.log("@fromProfile", profile);

  return {
    id: profile.id,
    discriminator: profile.discriminator,
    avatar: image_url,
    username: profile.username,
    email: profile.email,
  };
}

export const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: {
          scope: scopes
        }
      },
      profile
    })
  ],
  callbacks: {
    async session({ session, user }: any) {
      return {
        ...session,
        user
      }
    }
  }
}

export default NextAuth(options);