"use client";

import { useState } from "react";
import useSWR from "swr";

export default function UserSearch() {
  // 1. 사용자가 키워드를 입력하면 /api/search/${keyword}
  // 2. 검색하는 keyword가 있다면 /api/search/bob -> username, name
  // 3. 검색하는 keyword가 업다면 /api/search  -> 전체 user
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, error } = useSWR(`/api/search/${keyword}`);
  console.log(data);
  
  return <></>;
}
