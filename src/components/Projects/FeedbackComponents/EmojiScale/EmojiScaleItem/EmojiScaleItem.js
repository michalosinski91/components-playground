import React from "react";
import "./EmojiScaleItem.scss";

export default function EmojiScaleItem({ name, icon, active, setActiveEmoji }) {
  return (
    <div
      className={
        active
          ? "emoji-scale-item emoji-scale-item--active"
          : "emoji-scale-item"
      }
      onClick={() => setActiveEmoji(name)}
    >
      <img src={icon} alt={name} />
    </div>
  );
}
