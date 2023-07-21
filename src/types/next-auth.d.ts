// next-auth에 기본적으로 정의되어 있는 파일 (next-auth.d.ts)
import { User } from "@/model/user";
// import NextAuth, { DefaultSession } from "next-auth";

// next-auth에서 사용하는 모듈 이름에 타입 재 정의
declare module "next-auth" {
  interface Session {
    // user: {
    //   username: string;
    // } & DefaultSession["user"];
    user: User;
  }
}
