import NewPost from "@/components/NewPost";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "New Post",
  description: "Creat a new post",
};

export default async function NewPostPage() {
  // ServerSession을 사용할때는 꼭 옵션을 전달!!
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/api/auth/signin");
  }
  return <NewPost user={session.user} />;
}
