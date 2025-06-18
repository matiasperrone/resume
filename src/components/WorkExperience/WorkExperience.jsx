import AnchorShowHide from "@/components/AnchorShowHide";
import { useWorkContext } from "@/contexts/WorkContext";
import { convertMDTags, t } from "@/helpers/string";
import Translate from "@/components/Translate";
import { formatDateYYYYMMToMMMYYYY } from "@/helpers/date";

const WorkExperience = ({ job, className = "" }) => {
  const { language } = useWorkContext();
  return (
    <article className={className}>
      <h4>{job.company} - {job.position}</h4>
      <dl>
        <dt className="job-dates">
          From: <time dateTime={job.dates.from}>{formatDateYYYYMMToMMMYYYY(job.dates.from)}</time>
          To: {job.dates.to ? (<time dateTime={job.dates.to}>{formatDateYYYYMMToMMMYYYY(job.dates.to)}</time>) : "Present"}
        </dt>
        {job.customer && (
          <dt className="job-subtitle">
            {job.customer.title ?
              <>{job.customer.title}</> :
              <Translate text="customer" />
            }: <b>{job.customer.content}</b>
          </dt>
        )}
        {job.techs && typeof job.techs === "string" && (
          <div><b className="text-capitalize"><Translate text="technologies used" />:</b> {job.techs}</div>
        )}
        {typeof job.techs === "object" && Object.entries(job.techs ?? {}).map(([name, techs]) => (
          <dd key={"tech-" + name}><b>{name}:</b> {techs}</dd>
        ))}
        <dd>
          {job.description.map((paragraph, ix) => {
            const descriptionKey = "paragraph" + ix;
            const errorResult = `typeof paragraph: ${typeof paragraph}`;
            switch (typeof paragraph) {
            case "object":
              return Array.isArray(paragraph) ? (
                <ul key={descriptionKey}>
                  {paragraph.map((subParagraphText, ix) => (
                    <li key={descriptionKey + "sub-" + ix} dangerouslySetInnerHTML={{ __html: convertMDTags(subParagraphText) }} />
                  ))}
                </ul>
              ) : errorResult;
            case "string":
              return (
                <div key={descriptionKey} dangerouslySetInnerHTML={{ __html: convertMDTags(paragraph) }} />
              );
            default:
              return errorResult;

            }
          })}
        </dd>
        <AnchorShowHide showClassName={false}><Translate text="see more" /></AnchorShowHide>
        <AnchorShowHide showClassName={true}><Translate text="see less" /></AnchorShowHide>
      </dl>
    </article>
  );
};

export default WorkExperience;