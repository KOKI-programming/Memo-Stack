import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import { db } from "./db";


export const authOptions: NextAuthOptions = {
    providers: [
      Github({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        allowDangerousEmailAccountLinking: true,
      }),
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        allowDangerousEmailAccountLinking: true,
      }),
    ],
    adapter: PrismaAdapter(db),
    pages: {
      signIn: "/login",
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id; // 新しいログイン時にユーザーIDをトークンに追加
        }
        if (!token.id) {
          token.id = "fallback-id"; // デフォルト値（任意で変更）
        }
        return token;
      },
      async session({ token, session }) {
        if (token) {
            session.user = {
              ...session.user,
              id: token.id, // トークンからセッションにデータを転送
              name: token.name,
              email: token.email,
              image: token.picture,
            };
          }
        return session;
      },
    },
    session: {
      strategy: "jwt",
    },
  };
