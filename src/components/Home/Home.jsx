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
import { convertMDTags, stripMDTags } from "@/helpers/string";
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
    image: "https://resume.matiasperrone.com/images/matias_470x470.webp",
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
            <path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          <span className="text-capitalize"> <Translate text="download" /></span>
        </Download>
      </div>
      <div>
        <hgroup>
          <div>
            <Image src="/images/matias_153x153.jpg" srcSet="/images/matias_153x153.webp 153w,/images/matias_470x470.webp 1200w,/images/matias_153x153.jpg 153w" alt={`${work.name}' Picture`} />
          </div>
          <div>
            <h1 className={fontH1.className}>
              {work.name}
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
              <section className="languages">
                <h3 className="d-print-none"><Translate text="languages" /></h3>
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
        <section className="work-experiences">
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
        </section>
      </div >
    </div >
  )
}
