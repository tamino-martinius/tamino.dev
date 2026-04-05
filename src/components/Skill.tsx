import { useAppContext } from "../AppContext";
import type { Skill as SkillType } from "../data_types";
import NumberValue from "./NumberValue";
import StringValue from "./StringValue";
import Variable from "./Variable";

export default function Skill({ name, skill }: { name: string; skill: SkillType }) {
  const { isRuby } = useAppContext();

  return (
    <Variable name={name} type="Skill" length={16}>
      <span className="expression">{"{"}</span>
      <span className="white-space space"></span>
      <span className="variable">level</span>
      <span className="expression">:</span>
      <span className="white-space space"></span>
      <NumberValue value={skill.level.toFixed(1)} className="progress" />
      <span className="expression">,</span>
      <span className="white-space space"></span>
      <span className="variable">name</span>
      <span className="expression">:</span>
      <span className="white-space space"></span>
      <StringValue value={skill.name} />
      <span className="white-space space"></span>
      <span className="expression">{"}"}</span>
      {isRuby && <span className="variable">.with_indifferent_access</span>}
    </Variable>
  );
}
