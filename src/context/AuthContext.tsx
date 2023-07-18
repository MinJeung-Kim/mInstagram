"use client";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function AuthContext({ children }: Props) {
    // 로그인한 사용자의 상태를 가지고 있는 context
  return <SessionProvider>{children}</SessionProvider>;
}
