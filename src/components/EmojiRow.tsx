import { useState } from "react";

interface EmojiRow {
  emojiData: {
    title: string;
    symbol: string;
  };
}

function EmojiRow({ emojiData }: EmojiRow) {
  const [copymsg, setCopyMsg] = useState("Copy Emoji!");

  return (
    <div
      className="EmojiItem"
      key={emojiData.title}
      onClick={() => {
        navigator.clipboard.writeText(emojiData.symbol);
        setTimeout(() => {
          setCopyMsg("Copy Emoji!");
        }, 5000);
        setCopyMsg("Copied!");
      }}
    >
      <div>
        <span className="symbol">{emojiData.symbol}</span>
        <span>{emojiData.title}</span>
        <span className="copy">{copymsg}</span>
      </div>
    </div>
  );
}

export default EmojiRow;
