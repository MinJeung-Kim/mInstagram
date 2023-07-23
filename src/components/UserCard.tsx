import { ProfileUSer } from "@/model/user";
import Link from "next/link";
import Avatar from "./Avatar";

type Props = { user: ProfileUSer };

export default function UserCard({
  user: { name, username, image, following, followers },
}: Props) {
  // Link태그를 사용하면 사용자가 클릭할 확률이 높기때문에 NextJS에서 미리 클릭할 페이지를 프리패칭해 온다.
  return (
    <Link
      href={`/user/${username}`}
      className="flex items-center w-full rounded-sm border vorder-neutral-300 mb-2 p-4 bg-white hober:bg-neutral-50"
    >
      <Avatar image={image} />
      <div className="text-neutral-500">
        <p className="text-black font-bold leading-4">{username}</p>
        <p>{name}</p>
        <p className="text-sm leading-4">{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
}
