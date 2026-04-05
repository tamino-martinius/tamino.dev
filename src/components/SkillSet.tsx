import { useState } from "react";
import type { SkillSet as SkillSetType, Skill as SkillType } from "../data_types";
import CodeLine from "./CodeLine";
import Collapsed from "./Collapsed";
import Comment from "./Comment";
import Skill from "./Skill";

export default function SkillSet({ title, skillset }: { title: string; skillset: SkillSetType }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsed((c) => !c);
  };

  return (
    <div className={`skillset${collapsed ? " collapsed" : ""}`} onClick={toggle}>
      <Comment comment={title}>{collapsed && <Collapsed />}</Comment>
      {!collapsed && (
        <>
          {Array.isArray(skillset.data)
            ? (skillset.data as SkillSetType[]).map((subset) => (
                <SkillSet
                  key={subset.title}
                  title={`${title} / ${subset.title}`}
                  skillset={subset}
                />
              ))
            : Object.entries(skillset.data as { [key: string]: SkillType }).map(([name, skill]) => (
                <Skill key={name} name={name} skill={skill} />
              ))}
          <CodeLine />
        </>
      )}
    </div>
  );
}
