"use client";
import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";
import usePosts from "@/hooks/posts";

export default function PostList() {
  // const { data: posts, isLoading: loading } =
  //   useSWR<SimplePost[]>("/api/posts");
  const { posts, isLoading: loading } = usePosts();

  return (
    <section>
      {loading && (
        <div className="text-center mt-32">
          <GridSpinner color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post, index) => (
              <li key={post.id} className="mb-4">
                {/* 첫번째, 두번째 이미지만 true */}
                <PostListCard post={post} priority={index < 2} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
