import { NextApiHandler } from "next";
import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from "@app/prisma";
// import adapter from "@app/lib/adapter";

const scopes = ['identify'].join(' ');

if (!process.env.DISCORD_CLIENT_ID) {
  throw new Error("Failed to find Discord's client ID");
}

if (!process.env.DISCORD_SECRET) {
  throw new Error("Failed to find Discord's secret");
}

const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_SECRET,
      authorization: {
        params: {
          scope: scopes
        }
      },
      profile(profile) {
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
        }
      }
    })
  ],
  callbacks: {
    async session({ session, user }: any) {
      console.log("@invoke session", user);
      return {
        ...session,
        user,
      };
    },
    async signIn({ user }: any) {
      console.log("@invoke signIn", user);
      return user;
    }
  }
};

const authHandler: NextApiHandler = (request, response) => {
  return NextAuth(request, response, options);
}

export default authHandler;