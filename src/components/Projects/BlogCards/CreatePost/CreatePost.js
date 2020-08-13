import React from "react";
import "./CreatePost.scss";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

export default function CreatePost() {
  return (
    <div className="create-post">
      <Heading text="Post" />
      <Paragraph text="The best posts from all. Come here to see new posts rising and be part of the conversation" />
      <Button text="Create Post" type="dark" />
      <Button text="Create Community" />
    </div>
  );
}
