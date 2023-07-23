import reactDom from "react-dom";

type Props = {
  children: React.ReactNode;
};

export default function ModalPotal({ children }: Props) {
  // 브라우저 환경일 때만 실행.
  // 서버사이드 렌더링일 경우에는 실행 X.
  if (typeof window === "undefined") {
    return null;
  }

  // portal div에 연결해주는 역할.
  const node = document.getElementById("portal") as Element;
  return reactDom.createPortal(children, node);
}
