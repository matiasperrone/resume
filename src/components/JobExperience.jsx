const JobExperience = ({job}) => {
    return (              
        <article>
            <h4>{job.company} - {job.position}</h4>
            <dl>
            <dt className="job-dates">{job.dates}</dt>
            {job.customer && (
                <dt className="job-subtitle">{job.customer.title ?? "Customer"}: <b>{job.customer.content}</b></dt>
            )}
            <dd>
                {job.description.map((paragraph, ix) => {
                const descriptionKey = "paragraph" + ix;
                const errorResult = `typeof paragraph: ${typeof paragraph}`;
                switch (typeof paragraph)
                {
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
                {job.techs && typeof job.techs === "string" && (
                <div><b>Techs:</b> {job.techs}</div>
                )}
                {typeof job.techs === "object" && Object.entries(job.techs ?? {}).map(([name, techs]) => (
                    <div key={"tech-" + name}><b>{name}:</b> {techs}</div>
                ))}
            </dd>
            </dl>
        </article>
        );
};
    
export default JobExperience;