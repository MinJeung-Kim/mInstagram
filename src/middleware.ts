// 중재자 역할(로그인한 사용자 인지 ?)

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    if (req.nextUrl.pathname.startsWith("/api")) {
      return new NextResponse("Authentication Error", { status: 401 });
    }
    // 특정한 페이지를 전달 받는다면
    const { pathname, search, origin, basePath } = req.nextUrl;
    const signInUrl = new URL(`${basePath}/auth/signin`, origin);
    // 현재 사용자가 원하는 URL 지정
    signInUrl.searchParams.append(
      "callbackUrl",
      `${basePath}${pathname}${search}`
    );
    return NextResponse.redirect(signInUrl);
  }
  return NextResponse.next();
}

// 페이지와 미들웨어로 검사하길 원하는 페이지를 명시.
export const config = {
  matcher: [
    "/new",
    "/",
    "/api/bookmarks",
    "/api/comments",
    "/api/likes",
    "/api/follow",
    "/api/me",
    "/api/posts/:path*",
  ],
};
