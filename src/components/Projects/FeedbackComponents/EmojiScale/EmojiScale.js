import React, { useState } from "react";
import "./EmojiScale.scss";
import EmojiScaleItem from "./EmojiScaleItem/EmojiScaleItem";

import SadEmoji from "../../../../assets/images/emojis/sad.png";
import NeutralEmoji from "../../../../assets/images/emojis/indifferent.png";
import HappyEmoji from "../../../../assets/images/emojis/happy.png";

export default function EmojiScale() {
  const [activeEmoji, setActiveEmoji] = useState("happy");

  const emojis = [
    {
      id: 1,
      name: "sad",
      icon: SadEmoji,
    },
    {
      id: 2,
      name: "neutral",
      icon: NeutralEmoji,
    },
    {
      id: 3,
      name: "happy",
      icon: HappyEmoji,
    },
  ];
  return (
    <div className="emoji-scale">
      {emojis.map((emoji) => (
        <EmojiScaleItem
          key={emoji.id}
          name={emoji.name}
          icon={emoji.icon}
          active={emoji.name == activeEmoji ? true : false}
          setActiveEmoji={setActiveEmoji}
        />
      ))}
    </div>
  );
}
