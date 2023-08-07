"use client";
import { AuthUser } from "@/model/user";
import PostUserAvatar from "./PostUserAvatar";
import FilesIcon from "./ui/icons/FilesIcon";
import Button from "./ui/Button";
import { DragEvent, useState } from "react";

type Props = {
  user: AuthUser;
};

export default function NewPost({ user: { username, image } }: Props) {
  // drag가 되고 있는지(drag 상태)
  const [dragging, setDragging] = useState(false);
  const handleChange = () => {};
  const handleDrag = (e: DragEvent) => {
    if (e.type === "dragenter") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };

  const handleDragOver = () => {};

  const handleDrop = () => {};

  return (
    <section>
      <PostUserAvatar username={username} image={image ?? ""} />
      <form action="">
        <input
          className="hidden"
          name="input"
          id="input-upload"
          type="file"
          accept="imate/*"
          onChange={handleChange}
        />
        <label
          htmlFor="input-upload"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDragOver}
          onDrag={handleDrop}
        >
          <FilesIcon />
          <p>Drag and Drop your image here or click</p>
          <textarea
            name="text"
            id="input-text"
            required
            rows={10}
            placeholder={"Write a caption"}
          />
          <Button text="Publish" onClick={() => {}} />
        </label>
      </form>
    </section>
  );
}
