import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source).width(800).url();
}

// https://www.sanity.io/docs/http-api-assets
// https://myProjectId.api.sanity.io/v2021-03-25/assets/images/myDataset

export const assetsURL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-03-25/assets/images/${process.env.SANITY_DATASET}`;
