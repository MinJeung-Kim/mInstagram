"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";
import { ProfileUser } from "@/model/user";
import useMe from "@/hooks/me";
import Button from "./ui/Button";

type Props = { user: ProfileUser };

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedInUser, toggleFollow } = useMe();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  // 네트워크 요청을 감지하는 State
  const [isFetching, setIsFetching] = useState(false);
  // 현제 업데이트가 발생하고 있는지 
  const isUpdating = isPending || isFetching;

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);
  const text = following ? "Unfollow" : "Follow";

  const handleFollow = async () => {
    setIsFetching(true);
    await toggleFollow(user.id, !following);
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <>
      {showButton && (
        <div className="relative">
          {isUpdating && (
            <div className="absolute z-20 inset-0 flex justify-center items-center">
              <PulseLoader size={6} />
            </div>
          )}
          <Button
            disabled={isUpdating}
            text={text}
            onClick={handleFollow}
            red={text === "Unfollow"}
          />
        </div>
      )}
    </>
  );
}
