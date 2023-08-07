"use client";
import { useState } from "react";
import Image from "next/image";
import { SimplePost } from "@/model/post";
import ModalPotal from "./ui/ModalPotal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";
import { signIn, useSession } from "next-auth/react";

type Props = { post: SimplePost; priority: boolean };

export default function PostGridCard({ post, priority = false }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const { image, username } = post;
  const { data: session } = useSession();

  const handleOpenPost = () => {
    if (!session?.user) {
      return signIn();
    }
    setOpenModal(true);
  };

  return (
    <div className="relative w-full aspect-square">
      <Image
        className="object-cover"
        src={image}
        alt={`photo by ${username}`}
        fill
        sizes="650px"
        priority={priority}
        onClick={handleOpenPost}
      />
      {openModal && (
        <ModalPotal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPotal>
      )}
    </div>
  );
}
