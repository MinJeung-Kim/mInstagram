## [mInstagram](https://m-instagram.vercel.app/)
 

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fm-instagram.vercel.app&count_bg=%2379C83D&title_bg=%235B5E66&icon=&icon_color=%23E7E7E7&title=Visit&edge_flat=false)](https://hits.seeyoufarm.com) 

 
[![mInstagram](https://github.com/MinJeung-Kim/mInstagram/assets/79193369/3e2c8d73-2c89-4ae2-9345-47f1a7a69727)](https://m-instagram.vercel.app/)


## mInstagram Web Page v1.0
> **개발기간 : *23.07.01 ~ 23.08.15***
## 배포주소
> [https://m-instagram.vercel.app/](https://m-instagram.vercel.app/)
## 프로젝트 소개
> 인스타그램 클론코딩 
## 시작 가이드
### Requirements
For building and running the application you need:
- [Node.js 18.16.0](https://nodejs.org/ca/blog/release/v18.16.0)
- [Npm 9.5.1](https://www.npmjs.com/package/npm/v/9.5.1)
- [NextJS 13.4.9](https://nextjs.org/)
- [ReactJS 18.2.15](https://react.dev/)
### Installation
```shell
$ git clone https://github.com/MinJeung-Kim/mInstagram.git
$ cd mInstagram

$ npm install
$ npm run dev
```
___
## Stacks 🔧
### Environment
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white">

### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white">

### Development
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/Serverless-FD5750?style=flat-square&logo=Serverless&logoColor=white"> <img src="https://img.shields.io/badge/Strapi-2F2E8B?style=flat-square&logo=Strapi&logoColor=white"> <img src="https://img.shields.io/badge/Sanity-F03E2F?style=flat-square&logo=Sanity&logoColor=white">
<img src="https://img.shields.io/badge/Google Cloud-4285F4?style=flat-square&logo=Google Cloud&logoColor=white"> <img src="https://img.shields.io/badge/Tailwindcss-06B6D4?style=flat-square&logo=Tailwindcss&logoColor=white">

___
## 주요기능 🤹
https://github.com/MinJeung-Kim/mInstagram/wiki
___
## 아키텍쳐
### 디렉토리 구조
```
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂signin
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂[...nextauth]
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂bookmarks
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂comments
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂follow
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂likes
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂me
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂posts
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┣ 📂[keyword]
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📂users
 ┃ ┃ ┃ ┗ 📂[...slug]
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂new
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂search
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂user
 ┃ ┃ ┗ 📂[username]
 ┃ ┃ ┃ ┣ 📜not-found.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┣ 📜BookmarkFillIcon.tsx
 ┃ ┃ ┃ ┣ 📜BookmarkIcon.tsx
 ┃ ┃ ┃ ┣ 📜CloseIcon.tsx
 ┃ ┃ ┃ ┣ 📜FilesIcon.tsx
 ┃ ┃ ┃ ┣ 📜HeartFillIcon.tsx
 ┃ ┃ ┃ ┣ 📜HeartIcon.tsx
 ┃ ┃ ┃ ┣ 📜HomeFillIcon.tsx
 ┃ ┃ ┃ ┣ 📜HomeICon.tsx
 ┃ ┃ ┃ ┣ 📜NewFillIcon.tsx
 ┃ ┃ ┃ ┣ 📜NewIcon.tsx
 ┃ ┃ ┃ ┣ 📜PostIcon.tsx
 ┃ ┃ ┃ ┣ 📜SearchFillIcon.tsx
 ┃ ┃ ┃ ┣ 📜SearchIcon.tsx
 ┃ ┃ ┃ ┗ 📜SmileIcon.tsx
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜ColorButton.tsx
 ┃ ┃ ┣ 📜GridSpinner.tsx
 ┃ ┃ ┣ 📜ModalPotal.tsx
 ┃ ┃ ┣ 📜ScrollableBar.tsx
 ┃ ┃ ┗ 📜ToggleButton.tsx
 ┃ ┣ 📜ActionBar.tsx
 ┃ ┣ 📜Avatar.tsx
 ┃ ┣ 📜CommentForm.tsx
 ┃ ┣ 📜FollowButton.tsx
 ┃ ┣ 📜FollowingBar.tsx
 ┃ ┣ 📜Navbar.tsx
 ┃ ┣ 📜NewPost.tsx
 ┃ ┣ 📜PostDetail.tsx
 ┃ ┣ 📜PostGrid.tsx
 ┃ ┣ 📜PostGridCard.tsx
 ┃ ┣ 📜PostList.tsx
 ┃ ┣ 📜PostListCard.tsx
 ┃ ┣ 📜PostModal.tsx
 ┃ ┣ 📜PostUserAvatar.tsx
 ┃ ┣ 📜SideBar.tsx
 ┃ ┣ 📜Signin.tsx
 ┃ ┣ 📜UserCard.tsx
 ┃ ┣ 📜UserPosts.tsx
 ┃ ┣ 📜UserProfile.tsx
 ┃ ┗ 📜UserSearch.tsx
 ┣ 📂context
 ┃ ┣ 📜AuthContext.tsx
 ┃ ┣ 📜CacheKeysContext.tsx
 ┃ ┗ 📜SWRConfigContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜debounce.ts
 ┃ ┣ 📜me.ts
 ┃ ┣ 📜post.ts
 ┃ ┗ 📜posts.ts
 ┣ 📂model
 ┃ ┣ 📜post.ts
 ┃ ┗ 📜user.ts
 ┣ 📂service
 ┃ ┣ 📜posts.ts
 ┃ ┣ 📜sanity.ts
 ┃ ┗ 📜user.ts
 ┣ 📂types
 ┃ ┗ 📜next-auth.d.ts
 ┣ 📂util
 ┃ ┣ 📜date.ts
 ┃ ┗ 📜session.ts
 ┗ 📜middleware.ts
```
