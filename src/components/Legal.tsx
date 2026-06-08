import { useMemo, useState } from "react";
import Collapsed from "./Collapsed";
import Comment from "./Comment";
import CommentBlock from "./CommentBlock";

// Auto-expand when deep-linked via tamino.dev/#legal. The scroll itself is
// handled by App's shared deep-link logic, which keys off `data-entry`.
const openOnStart = decodeURIComponent(window.location.hash.slice(1)) === "legal";

export default function Legal() {
  const [collapsed, setCollapsed] = useState(!openOnStart);

  const year = useMemo(() => new Date().getFullYear(), []);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsed((c) => !c);
  };

  return (
    <div className={`legal${collapsed ? " collapsed" : ""}`} data-entry="legal" onClick={toggle}>
      {collapsed ? (
        <Comment comment={`(c) ${year} Tamino Martinius`}>
          <Collapsed />
        </Comment>
      ) : (
        <CommentBlock
          comment={`(c) ${year}\n\nTamino Martinius\nLehdenstr.  21\n06847 Dessau\n\nlawyer@zaku.eu`}
        />
      )}
    </div>
  );
}
