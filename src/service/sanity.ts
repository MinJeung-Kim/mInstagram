import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    // 동적 데이터이기때문에 false로 설정.
    useCdn: false,
    // 최신 API를 사용하기 위해서 현재 날짜 설정.
    apiVersion: "2023-07-20",
    // 데이터를 수정하기 위해서 token 설정.
    token: process.env.SANITY_SECRET_TOKEN,
  });