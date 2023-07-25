import UserPost from "@/components/UserPost";
import UserProfile from "@/components/UserProfile";
import { getUserForProfile } from "@/service/user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

type Props = { params: { username: string } };

// username이 변경되지 않으면 동일한 사용자에 한에 cache된 데이터를 사용.
const getUser = cache(async (username: string) => getUserForProfile(username));

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUser(username);

  if (!user) {
    notFound();
  }

  return (
    <section className="w-full">
      {/* 상단 : 사용자의 프로필 이미지와 정보(username, name, 숫자) */}
      <UserProfile user={user} />
      {/* 하단 : 3개의 탭 (posts, liked, bookmarks) */}
      <UserPost user={user} />
    </section>
  );
}

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title: `${user?.name}(@${user?.username}) • mInstagram Photos`,
    description: `${user?.name}'s all mInstagram posts`,
  };
}
