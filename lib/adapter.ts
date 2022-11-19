import type { PrismaClient, Prisma } from "@prisma/client";

export default function PrismaAdapter(prisma: PrismaClient) {

  function createUser(data: any) {
    console.log({createUser: data});
    return prisma.user.create({
      data
    });
  }
  
  function getUser(id: string) {
    console.log({getUser: id});
    return prisma.user.findUnique({
      where: {
        id
      }
    });
  }

  function getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email
      }
    });
  }

  async function getUserByAccount(provider_providerAccountId: any) {
    const account = await prisma.account.findUnique({
      where: {
        provider_providerAccountId
      },
      select: {
        user: true
      }
    });

    return account?.user ?? null;
  }

  function updateUser({ id, ...data}: any) {
    return prisma.user.update({
      where: {
        id
      },
      data
    });
  }

  function deleteUser(id: any) {
    return prisma.user.delete({
      where: {
        id
      }
    });
  }

  function linkAccount(data: any) {
    return prisma.account.create({
      data
    });
  }

  function unlinkAccount(provider_providerAccountId: any) {
    return prisma.account.delete({
      where: {
        provider_providerAccountId
      }
    });
  }

  async function getSessionAndUser(sessionToken) {
    const userAndSession = await prisma.session.findUnique({
      where: { 
        sessionToken 
      },
      include: { 
        user: true 
      },
    });

    if (!userAndSession) return null;

    const { user, ...session } = userAndSession;

    return { 
      user, 
      session 
    };
  }

  function createSession(data: any) {
    return prisma.session.create({ data });
  }

  function updateSession(data: any) {
    return prisma.session.update({
      where: {
        sessionToken: data.sessionToken
      },
      data
    });
  }

  function deleteSession(sessionToken: any) {
    return prisma.session.delete({
      where: {
        sessionToken
      }
    });
  }

  async function createVerificationToken(data: any) {
    const verificationToken = await prisma.verificationToken.create({ data });

    if (verificationToken.id) {
      delete verificationToken.id
    } 

    return verificationToken;
  }

  async function useVerificationToken(identifier_token: any) {
    try {
      const verificationToken = await prisma.verificationToken.delete({
        where: {
          identifier_token
        }
      });

      if (verificationToken.id) {
        delete verificationToken.id
      } 

      return verificationToken
    } catch(error) {
      if ((error as Prisma.PrismaClientKnownRequestError).code === "P2025") {{
        return null;
      }}
      throw error;
    }
  }

  return {
    createUser,
    getUser,
    getUserByEmail,
    getUserByAccount,
    updateUser,
    deleteUser,
    linkAccount,
    unlinkAccount,
    getSessionAndUser,
    createSession,
    updateSession,
    deleteSession,
    createVerificationToken,
    useVerificationToken
  }
}