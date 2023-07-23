import dynamic from "next/dynamic";

const GridLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.GridLoader),
  {
    // 서버에서 미리 렌더링하지마!
    ssr: false,
  }
);
type Props = {
  color?: string;
};

export default function GridSpinner({ color = "red" }: Props) {
  return <GridLoader color={color} />;
}
