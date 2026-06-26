/* eslint-disable @next/next/no-img-element */
"use client";
import { Image } from "react-bootstrap";
import classes from "./Home.module.scss";
import { Montserrat } from 'next/font/google'
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Download from "@/components/Download";
import WorkExperience from "@/components/WorkExperience";
import ShowHide from "@/components/ShowHide";
import SVG from 'react-inlinesvg';
import { convertMDTags, stripMDTags, t } from "@/helpers/string";
import { useWorkContext } from "@/contexts/WorkContext";
import LanguageSelector from "@/components/LanguageSelector";
import Translate from "@/components/Translate";
import { DataRender } from "../DataRender/DataRender";

const fontH1 = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const { work, language } = useWorkContext();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matias Perrone",
    jobTitle: work.title,
    description: stripMDTags(work.summary[0]),
    url: "https://resume.matiasperrone.com",
    image: "https://resume.matiasperrone.com/images/matias_1200x1200.webp",
    inLanguage: language,
    sameAs: Object.values(work.websites),
    knowsAbout: work.technologies.map((technology) => technology.name),
    alumniOf: work.education.map((educationItem) => ({
      "@type": "CollegeOrUniversity",
      name: educationItem.institution,
    })),
  };

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

  const jobMapping = (job, index) => (
    <WorkExperience
      key={job.company + job.position + job.dates.from + (job.dates.to ?? "present") + index}
      job={job}
      className="work-experience"
    />
  );

  return (
    <div className={classes.layout}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className={classes.ThemeSwitcher}>
        <LanguageSelector />
        <ThemeSwitcher />
        <Download href={`/assets/${work.download.file}`} name={work.download.name}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z" />
          </svg>
          <span className="text-capitalize"> <Translate text="download" /></span>
        </Download>
      </div>
      <div>
        <hgroup>
          <div>
            <Image src="/images/matias_153x153.jpg" srcSet="/images/matias_153x153.webp 153w,/images/matias_1200x1200.webp 1200w,/images/matias_153x153.jpg 153w" alt="Matias' Picture" />
          </div>
          <div>
            <h1 className={fontH1.className}>
              Matias Perrone
            </h1>
            <p>{work.title}</p>
            <div className={classes.otherInfo}>
              <section>
                <h3 className="d-print-none"><Translate text="contact info" /></h3>
                <dl>
                  <dd>
                    <ul>
                      <li><span className="text-capitalize"><Translate text="mobile" /></span>: <span>&nbsp;<DataRender render="phone" /></span></li>
                      <li><span className="text-capitalize"><Translate text="email" /></span>: <span>&nbsp;<DataRender render="email" /></span></li>
                    </ul>
                  </dd>
                </dl>
              </section>
              <section className="d-print-none">
                <h3><Translate text="languages" /></h3>
                <dl>
                  <dd>
                    <ul>
                      {spokenLanguages}
                    </ul>
                  </dd>
                </dl>
              </section>
              <section className="d-sm-none d-xs-none d-print-none">
                <h3><Translate text="sites" /></h3>
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
        <section className="summary">
          <h3><Translate text="summary" /></h3>
          <dl>
            <dd>
              {work.summary.map((paragraph, ix) => (
                <p key={`paragraph-${ix}`} dangerouslySetInnerHTML={{ __html: convertMDTags(paragraph) }} />
              ))}
            </dd>
          </dl>
        </section>
        <section className="education">
          <h3><Translate text="education" /></h3>
          {work.education.map(educationItem => (
            <div key={educationItem.institution + educationItem.degree}>
              <p><b>{educationItem.degree} - {educationItem.institution}</b></p>
              <p>{educationItem.dates}</p>
              <p>{educationItem.address}</p>
            </div>
          ))}
        </section>
        <section className="technologies">
          <h3><Translate text="technologies" /></h3>
          <div className={classes.technologies}>
            {technologiesLogosList}
          </div>
          <div className="text-center">{work.technologies.map(technology => technology.name).join(", ")}</div>
        </section>
        <article className="work-experiences">
          <div className="work-experiences-print-header">
            <h3><Translate text="work experience" /></h3>
          </div>
          <div className="work-experiences-print-content">
            {work.jobs.map(jobMapping)}
            <ShowHide show={false} text={<Translate text="older job experiences" />}>
              <div>
                {work.oldjobs.map(jobMapping)}
              </div>
            </ShowHide>
          </div>
        </article>
      </div >
    </div >
  )
}
