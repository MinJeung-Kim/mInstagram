import { createContext, useContext } from "react";

type CacheKeysValue = {
  postsKey: string;
};

export const CacheKeysContext = createContext<CacheKeysValue>({
  postsKey: "/api/posts",
});

// 외부에서 사용하기 편하도록 useCacheKeys 생성.
export const useCacheKeys = () => useContext(CacheKeysContext);
