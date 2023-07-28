import { SimplePost } from "@/model/post";
import useSWR, { useSWRConfig } from "swr";

// posts를 가지고 오기 위해서 어떤 url 어떤 캐시키를 사용하는지,
// 좋아요가 변경되면 내부에서 어떤일을 해주어야 하는지 캡슐화 해주는 hook
export default function usePosts() {
  // posts를 가지고 오는 로직.
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");
  const { mutate } = useSWRConfig();

  // 어떤 post에 어떤 사용자의 username을 like할건지 ?
  const setLike = (post: SimplePost, username: string, like: boolean) => {
    // 
    fetch("/api/likes", {
      method: "PUT",
      body: JSON.stringify({ id: post.id, like }),
    }).then(() => mutate("/api/posts"));
  };

  return { posts, isLoading, error, setLike };
}
