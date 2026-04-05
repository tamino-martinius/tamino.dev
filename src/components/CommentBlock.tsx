import { useMemo } from "react";
import { useAppContext } from "../AppContext";
import { center } from "../util";
import CodeLine from "./CodeLine";
import { formatCodeElements } from "./FormatCode";

export default function CommentBlock({ comment }: { comment: string }) {
  const { languageHelper } = useAppContext();

  const lines = useMemo(() => comment.split("\n"), [comment]);

  const longestLine = useMemo(() => Math.max(...lines.map((str: string) => str.length)), [lines]);

  const comments = useMemo(() => {
    return lines.map((str: string) => {
      const centered = center(str, longestLine);
      return {
        prefix: `${languageHelper.commentChar} `,
        content: centered,
        suffix: ` ${languageHelper.commentChar}`,
      };
    });
  }, [lines, longestLine, languageHelper]);

  const header = useMemo(
    () => languageHelper.commentEnd + new Array(longestLine + 4).join(languageHelper.commentChar),
    [longestLine, languageHelper],
  );

  const footer = useMemo(
    () => new Array(longestLine + 4).join(languageHelper.commentChar) + languageHelper.commentEnd,
    [longestLine, languageHelper],
  );

  return (
    <div className="comment-block">
      <CodeLine>
        <span className="comment">{header}</span>
      </CodeLine>
      {comments.map((c, index) => (
        <CodeLine key={index}>
          <span className="comment">
            {c.prefix}
            {formatCodeElements(c.content)}
            {c.suffix}
          </span>
        </CodeLine>
      ))}
      <CodeLine>
        <span className="comment">{footer}</span>
      </CodeLine>
    </div>
  );
}
