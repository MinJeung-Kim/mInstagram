import { AiOutlineHeart } from "react-icons/ai";

type Prpos = {
  className?: string;
};
export default function HeartIcon({ className }: Prpos) {
  return <AiOutlineHeart className={className || "w-7 h-7"} />;
}
