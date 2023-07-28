import { SimplePost } from "@/model/post";
import useSWR from "swr";

async function updateLike(id: string, like: boolean) {
  return fetch("/api/likes", {
    method: "PUT",
    body: JSON.stringify({ id, like }),
  }).then((res) => res.json());
}

export default function usePosts() {
  const {
    data: posts,
    isLoading,
    error,
    mutate,
  } = useSWR<SimplePost[]>("/api/posts");

  // local상으로 update할 변경될 posts 배열 생성.
  const setLike = (post: SimplePost, username: string, like: boolean) => {
    // 기존 post를 그대로 가지고 가면서 likes배열을 업데이트해줌.
    // like = true : 기존 likes를 그대로 가져가면서 username를 추가.
    // like = false : likes배열에서 username를 제거.
    const newPost = {
      ...post,
      likes: like
        ? [...post.likes, username]
        : post.likes.filter((item) => item !== username),
    };

    // "/api/posts"를 업데이트해주기 위한 배열
    // 배열안의 post(p.id)를 업데이트하고자하는 post(post.id)와 같으면 업데이트
    const newPosts = posts?.map((p) => (p.id === post.id ? newPost : p));

    // 바운드된 mutate함수 호출 
    // param 1 => updateLike(post.id, like) : 반환된 값으로 api post 데이터를 덮음.
    return mutate(updateLike(post.id, like), {
      optimisticData: newPosts,
      // populateCache: false: param 1로 반환된 값으로 덮지않겠다.
      populateCache: false,
      // updateLike가 성공하면 server에서 다시 데이터를 가져오지 않겠다.
      revalidate: false,
      // 네트워크 문제가 발생해서 server에 제대로 업데이트가 되지않았다면rollback하겠다. 
      rollbackOnError: true,
    });
  };

  return { posts, isLoading, error, setLike };
}
