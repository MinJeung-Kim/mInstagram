import { RiBookmarkLine } from "react-icons/ri";

type Prpos = {
  className?: string;
};

export default function BookmarkIcon({ className }: Prpos) {
  return <RiBookmarkLine className={className || "w-6 h-6"} />;
}
