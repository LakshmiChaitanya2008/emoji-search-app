import { useEffect, useState } from "react";
import EmojiList from "./EmojiList";

function SearchBar() {
  const [input, setInput] = useState("");

  return (
    <div className="SearchBar">
      <form action="">
        <input
          type="search"
          name="search"
          placeholder="Search for any emoji..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <EmojiList keyword={input} />
    </div>
  );
}

export default SearchBar;
