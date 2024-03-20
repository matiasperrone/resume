/* eslint-disable @next/next/no-img-element */
import { Image } from "react-bootstrap";
import classes from "./Page.module.scss";
import { Montserrat } from 'next/font/google'
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "@/components/Link";
import Download from "@/components/Download";
import workInfo from "@/data/work.json";
import WorkExperience from "@/components/WorkExperience";
import ShowHide from "@/components/ShowHide";
import SVG from 'react-inlinesvg';

const fontH1 = Montserrat({ subsets: ['latin'] });

export default function Home({ language = "en" }) {
  const work = workInfo[language];

  const technologiesLogosList = work.technologies.map(technology => {
    return (
      <div className={classes.technology} key={technology.name}>
        <div title={technology.name} alt={technology.name} >
          <SVG src={`/images/logos/${technology.logo}`} />
        </div>
        <div>{technology.name}</div>
      </div>
    )
  });
  const webSites = Object.entries(work.websites).map(([name, href]) => (
    <li key={`website-${name}`}>
      <a href={href}>
        {name}<span className="d-print-inline d-none">:&nbsp;{href}</span>
      </a>
    </li>
  ));
  const spokenLanguages = Object.entries(work.languages).map(([name, level]) => (
    <li key={`language-${name}`}>{name}: {level}</li>
  ));

  return (
    <div className={classes.layout}>
      <div className={classes.ThemeSwitcher}>
        <ThemeSwitcher />
        <Download href={`/assets/${work.download.file}`} name={work.download.name}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z" />
          </svg>
          {" Download"}
        </Download>
      </div>
      <div>
        <hgroup>
          <div>
            <Image src="/images/matias.jpg" alt="Matias' Picture" />
          </div>
          <div>
            <h1 className={fontH1.className}>
              Matias Perrone
            </h1>
            <p>{work.title}</p>
            <div className={classes.otherInfo}>
              <section>
                  <h3 className="d-print-none">Contact Info</h3>
                  <p>
                    Mobile: <span>&nbsp;<Link href={`tel:${process.env.NEXT_PHONE}`} text={process.env.NEXT_PHONE_FORMATED} /></span><br/>
                    Email: <span>&nbsp;<Link href={`mailto:${process.env.NEXT_EMAIL}`} text={process.env.NEXT_EMAIL} /></span>
                  </p>
              </section>
              <section className="d-print-none">
                <h3>Languages</h3>
                <dl>
                  <dd>
                    <ul>
                      {spokenLanguages}
                    </ul>
                  </dd>
                </dl>
              </section>
              <section className="d-sm-none d-xs-none d-print-none">
                <h3>Sites</h3>
                <dl>
                  <dd>
                    <ul>
                      {webSites}
                    </ul>
                  </dd>
                </dl>
              </section>
            </div>
          </div>
        </hgroup>
        <section>
          <h3>SUMMARY</h3>
          <dl>
            <dd>
              {work.summary.map((paragraph, ix) => (
                <p key={`paragraph-${ix}`}>{paragraph}</p>
              ))}
            </dd>
          </dl>
        </section>
        <section>
          <h3>EDUCATION</h3>
          {work.education.map(educationItem => (
            <div key={educationItem.institution + educationItem.degree}>
              <p><b>{educationItem.degree} - {educationItem.institution}</b></p>
              <p>{educationItem.dates}</p>
              <p>{educationItem.address}</p>
            </div>
          ))}
        </section>
        <section>
          <h3>TECHNOLOGIES</h3>
          <div className={classes.technologies}>
            {technologiesLogosList}
          </div>
          <div className="text-center">{work.technologies.map(technology => technology.name).join(", ")}</div>
        </section>
        <article className="work-experiences">
          <h3>WORK EXPERIENCE</h3>
          {work.jobs.map(job => <WorkExperience key={job.company + job.dates + job.position} job={job} className="work-experience" />)}
          <ShowHide show={false} text="older job experiences">
            <div>
              {work.oldjobs.map(job => <WorkExperience key={job.company + job.dates + job.position} job={job} />)}
            </div>
          </ShowHide>
        </article>
      </div>
    </div>
  )
}
