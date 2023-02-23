import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const scopes = ['identify'].join(' ');

if (!process.env.DISCORD_CLIENT_ID) {
  throw new Error("Failed to find Discord's client ID");
}

if (!process.env.DISCORD_CLIENT_SECRET) {
  throw new Error("Failed to find Discord's secret");
}

export const options = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: {
          scope: scopes
        }
      }
    })
  ]
}

export default NextAuth(options);