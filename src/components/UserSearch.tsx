"use client";

import { SearchUser } from "@/model/user";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import GridSpinner from "./ui/GridSpinner";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/debounce";

export default function UserSearch() {
  // 1. 사용자가 키워드를 입력하면 /api/search/${keyword}
  // 2. 검색하는 keyword가 있다면 /api/search/bob -> username, name
  // 3. 검색하는 keyword가 업다면 /api/search  -> 전체 user
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);

  const onSubmit = (e: FormEvent) => {
    // keyword가 변경될때마다 useSWR이 알아서 데이터를 받아와서 업데이트 해줌.
    e.preventDefault();
  };

  return (
    <section className="w-full max-w-2xl my-4 flex flex-col items-center">
      <form className="w-full mb-4" onSubmit={onSubmit}>
        <input
          className="w-full text-xl p-3 outline-none border border-gray-400"
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>무언가가 잘못 되었음😋</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && (
        <p>찾는 사용자가 없음😥</p>
      )}
      <ul className="w-full p-4">
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
