import { NextRequest, NextResponse } from "next/server";
import { getPosts } from "@/service/posts";
import { withSessionUser } from "@/util/session";

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  return withSessionUser(async () =>
    getPosts(context.params.id).then((data) => NextResponse.json(data))
  );
}
