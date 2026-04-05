import { useEffect, useMemo, useRef, useState } from "react";
import Collapsed from "./Collapsed";
import Comment from "./Comment";
import CommentBlock from "./CommentBlock";

const openOnStart = window.location.hash === "#legal";

export default function Legal() {
  const [collapsed, setCollapsed] = useState(!openOnStart);
  const ref = useRef<HTMLDivElement>(null);

  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    if (openOnStart && ref.current) {
      setTimeout(() => {
        window.scrollTo({ top: ref.current?.offsetTop });
      }, 1750);
    }
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsed((c) => !c);
  };

  return (
    <div ref={ref} className={`legal${collapsed ? " collapsed" : ""}`} onClick={toggle}>
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
