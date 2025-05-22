import AnchorShowHide from "@/components/AnchorShowHide";

const WorkExperience = ({ job, className = "" }) => {
    return (
        <article className={className}>
            <h4>{job.company} - {job.position}</h4>
            <dl>
                <dt className="job-dates">{job.dates}</dt>
                {job.customer && (
                    <dt className="job-subtitle">{job.customer.title ?? "Customer"}: <b>{job.customer.content}</b></dt>
                )}
                {job.techs && typeof job.techs === "string" && (
                    <div><b>Techs:</b> {job.techs}</div>
                )}
                {typeof job.techs === "object" && Object.entries(job.techs ?? {}).map(([name, techs]) => (
                    <div key={"tech-" + name}><b>{name}:</b> {techs}</div>
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
                                            <li key={descriptionKey + "sub-" + ix}>{subParagraphText}</li>
                                        ))}
                                    </ul>
                                ) : errorResult;
                            case "string":
                                return (<div key={descriptionKey}>{paragraph}</div>);
                            default:
                                return errorResult;

                        }
                    })}
                </dd>
                <AnchorShowHide className="show-all" showClassName={false}>See More</AnchorShowHide>
                <AnchorShowHide className="show-all" showClassName={true}>See Less</AnchorShowHide>
            </dl>
        </article>
    );
};

export default WorkExperience;