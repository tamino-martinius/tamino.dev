import { useMemo } from "react";
import { Section as SectionEnum } from "../data_types";
import CodeLine from "./CodeLine";
import Comment from "./Comment";
import Section from "./Section";
import StringValue from "./StringValue";
import Url from "./Url";
import Variable from "./Variable";

interface ProfileData {
  myName: string;
  profession: string;
  emails: string[];
  socialNetworks: { [key: string]: string };
  links: { [key: string]: string };
}

export default function Profile({ data }: { data: ProfileData }) {
  const email = useMemo(() => {
    return data.emails[Math.floor(Math.random() * data.emails.length)];
  }, [data.emails]);

  return (
    <div className="profile">
      <Section section={SectionEnum.Profile} />
      <CodeLine />
      <Variable name="myName">
        <StringValue value={data.myName} />
      </Variable>
      <Variable name="profession">
        <StringValue value={data.profession} />
      </Variable>
      <Variable name="email">
        <StringValue value={email} />
      </Variable>
      <CodeLine />
      <Comment comment="Links" />
      {Object.entries(data.links).map(([name, url]) => (
        <Variable key={name} name={name}>
          <Url value={url} />
        </Variable>
      ))}
      <CodeLine />
      <Comment comment="Social Networks" />
      {Object.entries(data.socialNetworks).map(([name, url]) => (
        <Variable key={name} name={name}>
          <Url value={url} />
        </Variable>
      ))}
    </div>
  );
}
