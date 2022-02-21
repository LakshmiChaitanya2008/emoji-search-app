import { useEffect, useState } from "react";
import emojiList from "../../emojiList.json";
import EmojiRow from "./EmojiRow";

interface EmojiListProps {
  keyword: string;
}

function EmojiList({ keyword }: EmojiListProps) {
  function filterEmoji(searchText: string) {
    return emojiList.filter((emoji) => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    });
  }

  const emoList = filterEmoji(keyword);

  return (
    <div className="EmojiList">
      {emoList.map((d) => (
        <EmojiRow emojiData={d} key={d.title} />
      ))}
    </div>
  );
}

export default EmojiList;
