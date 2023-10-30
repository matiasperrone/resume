/* eslint-disable @next/next/no-img-element */
import { Image } from "react-bootstrap";
import classes from "./Page.module.scss";
import { Montserrat } from 'next/font/google'
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "@/components/Link";
import Download from "@/components/Download";
import workInfo from "@/data/work.json";
import JobExperience from "@/components/JobExperience";
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
    <li key={`website-${name}`}><a href={href}>{name}</a></li>
  ));
  const spokenLanguages = Object.entries(work.languages).map(([name, level]) => (
    <li key={`language-${name}`}>{name}: {level}</li>
  ));

  return (
    <div className={classes.layout}>
      <div>
        <div className={classes.art1}>
          <div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
        <Image src="/images/matias.jpg" alt="Matias' Picture" />
        <div className={classes.leftSideBar}>
          <dl>
            <dt>CONTACT</dt>
            <dd>
              <p>
                MOBILE:
              </p>
              <ul>
                <li><Link href={`tel:${process.env.NEXT_PHONE}`} text={process.env.NEXT_PHONE_FORMATED} /></li>
              </ul>
              <p>
                WEB SITES:
              </p>
              <ul>
                {webSites}
              </ul>
              <p>
                EMAIL:
              </p>
              <ul>
                <li><Link href={`mailto:${process.env.NEXT_EMAIL}`} text={process.env.NEXT_EMAIL} /></li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>SPOKEN LANGUAGES</dt>
            <dd>
              <ul>
                {spokenLanguages}
              </ul>
            </dd>
          </dl>
        </div>
      </div>
      <div>
        <div>
          <div className={classes.ThemeSwitcher}>
            <ThemeSwitcher />
            <Download href={`/assets/${work.download.file}`} name={work.download.name}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z" />
              </svg>
              {" Download"}
            </Download>
          </div>
          <hgroup>
            <h1 className={fontH1.className}>
              Matias Perrone
            </h1>
            <p>{work.title}</p>
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
          <span className={classes.showOnMobile}>
            <section>
              <h3>CONTACT</h3>
              <dl>
                <dd>
                  <p>
                    MOBILE:<br />
                    <span>&nbsp;<Link href={`tel:${process.env.NEXT_PHONE}`} text={process.env.NEXT_PHONE_FORMATED} /></span>
                  </p>
                  <p>
                    WEB SITES:
                  </p>
                  <ul>
                    {webSites}
                  </ul>
                  <p>
                    EMAIL:<br />
                    <span>&nbsp;<Link href={`mailto:${process.env.NEXT_EMAIL}`} text={process.env.NEXT_EMAIL} /></span>
                  </p>
                </dd>
              </dl>
            </section>
            <section>
              <h3>SPOKEN LANGUAGES</h3>
              <dl>
                <dd>
                  <ul>
                    {spokenLanguages}
                  </ul>
                </dd>
              </dl>
            </section>
          </span>
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
          <article>
            <h3>WORK EXPERIENCE</h3>
            {work.jobs.map(job => <JobExperience key={job.company + job.dates + job.position} job={job} />)}
            <ShowHide show={false}>
              <div>
                {work.oldjobs.map(job => <JobExperience key={job.company + job.dates + job.position} job={job} />)}
              </div>
            </ShowHide>
          </article>
        </div>
      </div>
    </div>
  )
}
