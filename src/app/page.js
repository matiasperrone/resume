import { Image } from "react-bootstrap";
import classes from "./Page.module.scss";
import { Montserrat } from 'next/font/google'
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "@/components/Link";
import Download from "@/components/Download";

const fontH1 = Montserrat({ subsets: ['latin'] });

export default function Home() {
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
        <Image src="/images/matias.jpg" alt="" />
        <div className={classes.leftSideBar}>
          <dl>
            <dt>PROFILE</dt>
            <dd>
              <p>
                My experience goes from designing and develop a system from scratch, documenting the initial requirements to the training courses, and the design of technical and user manuals for a wide variety of methods with different characteristics.
              </p>
              <p>
                I am a &quot;fan&quot; of teamwork, and I consider myself self-taught. My innovative and proactive approach has always been beneficial facing challenges that appeared throughout my career. Many of the technologies I use, I have learned them in a self-taught way, based on knowledge acquired at the National Technological University.
              </p>
            </dd>
          </dl>
          <dl>
            <dt>CONTACT</dt>
            <dd>
              <p>
                MOBILE:<br />
                <Link href={`tel:${process.env.NEXT_PHONE}`} text={process.env.NEXT_PHONE_FORMATED} />
              </p>
              <p>
                WEB SITES:
              </p>
              <ul>
                <li><a href="https://www.linkedin.com/in/matiasperrone/">LinkedIn</a></li>
                <li><a href="https://www.github.com/matiasperrone/">GitHub</a></li>
                <li><a href="https://resume.matiasperrone.com/">Resume</a></li>
              </ul>
              <p>
                EMAIL:<br />
                <Link href={`mailto:${process.env.NEXT_EMAIL}`} text={process.env.NEXT_EMAIL} />
              </p>
            </dd>
          </dl>
          <dl>
            <dt>TECHNOLOGIES</dt>
            <dd>
              <ul>
                <li>NodeJS</li>
                <li>PHP: 5.x, 7.x and 8.x</li>
                <li>Javascript vanilla and ES6</li>
                <li>VueJS and NuxtJS</li>
                <li>ReactJS and NextJS</li>
                <li>C#</li>
                <li>MongoDB, MariaDB, SQL Server, PostgresSQL, Oracle</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>SPOKEN LANGUAGES</dt>
            <dd>
              <ul>
                <li>Spanish: native</li>
                <li>English: fluid (no native)</li>
                <li>Italian: initial</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
      <div>
        <div>
          <div className={classes.ThemeSwitcher}>
            <ThemeSwitcher />
            <Download href="/assets/eng.pdf">
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
            <p>Full Stack Developer, Javascript, PHP, ReactJS and VueJS lover.</p>
          </hgroup>
          <span className={classes.showOnMobile}>
            <section>
              <h3>PROFILE</h3>
              <dl>
                <dd>
                  <p>
                    My experience goes from designing and develop a system from scratch, documenting the initial requirements to the training courses, and the design of technical and user manuals for a wide variety of methods with different characteristics.
                  </p>
                  <p>
                    I am a &quot;fan&quot; of teamwork, and I consider myself self-taught. My innovative and proactive approach has always been beneficial facing challenges that appeared throughout my career. Many of the technologies I use, I have learned them in a self-taught way, based on knowledge acquired at the National Technological University.
                  </p>
                </dd>
              </dl>
            </section>
            <section>
              <h3>CONTACT</h3>
              <dl>
                <dd>
                  <p>
                    MOBILE:<br />
                    <Link href={`tel:${process.env.NEXT_PHONE}`} text={process.env.NEXT_PHONE_FORMATED} />
                  </p>
                  <p>
                    WEB SITES:
                  </p>
                  <ul>
                    <li><a href="https://www.linkedin.com/in/matiasperrone/">LinkedIn</a></li>
                    <li><a href="https://www.github.com/matiasperrone/">GitHub</a></li>
                    <li><a href="https://resume.matiasperrone.com/">Resume</a></li>
                  </ul>
                  <p>
                    EMAIL:<br />
                    <Link href={`mailto:${process.env.NEXT_EMAIL}`} text={process.env.NEXT_EMAIL} />
                  </p>
                </dd>
              </dl>
            </section>
            <section>
              <h3>TECHNOLOGIES</h3>
              <dl>
                <dd>
                  <ul>
                    <li>NodeJS</li>
                    <li>PHP: 5.x, 7.x and 8.x</li>
                    <li>Javascript vanilla and ES6</li>
                    <li>VueJS and NuxtJS</li>
                    <li>ReactJS and NextJS</li>
                    <li>C#</li>
                    <li>MongoDB, MariaDB, SQL Server, PostgresSQL, Oracle</li>
                  </ul>
                </dd>
              </dl>
            </section>
            <section>
              <h3>SPOKEN LANGUAGES</h3>
              <dl>
                <dd>
                  <ul>
                    <li>Spanish: native</li>
                    <li>English: fluid (no native)</li>
                    <li>Italian: initial</li>
                  </ul>
                </dd>
              </dl>
            </section>
          </span>
          <section>
            <h3>EDUCATION</h3>
            <p><b>Systems Analyst - UTN</b></p>
            <p>1997 - 2005</p>
          </section>
          <section>
            <h3>TECHNOLOGIES</h3>
            <div className={classes.technologies}>
              <div className={classes.technology}>
                <div>PHP</div>
                <div>
                  <div className="w-100">100%</div>
                </div>
              </div>
              <div className={classes.technology}>
                <div>Javascript</div>
                <div>
                  <div className="w-100">100%</div>
                </div>
              </div>
              <div className={classes.technology}>
                <div>VueJS</div>
                <div>
                  <div className="w-95">95%</div>
                </div>
              </div>
              <div className={classes.technology}>
                <div>NuxtJS</div>
                <div>
                  <div className="w-90">90%</div>
                </div>
              </div>
              <div className={classes.technology}>
                <div>ReactJS</div>
                <div>
                  <div className="w-85">85%</div>
                </div>
              </div>
              <div className={classes.technology}>
                <div>NextJS</div>
                <div>
                  <div className="w-90">90%</div>
                </div>
              </div>
              <div className={classes.technology}>
                <div>Node</div>
                <div>
                  <div className="w-80">80%</div>
                </div>
              </div>
              <div className={classes.technology}>
                <div>C#</div>
                <div>
                  <div className="w-50">50%</div>
                </div>
              </div>
            </div>
          </section>
          <article>
            <h3>WORK EXPERIENCE</h3>
            <article>
              <h4>Pest Share - Full Stack Developer</h4>
              <dl>
                <dt className="job-dates">March 2023 - September 2023: 6 months</dt>
                <dt className="job-subtitle">Directly: <b>pestshare.com</b></dt>
                <dd>
                  <div>Pest Share is a startup company their goal is to &quot;Remove the confusion and frustration around property manager pest control. Residents report pest problems and local service providers take care of the rest.&quot;.</div>

                  <div>We were in charge of develop the product to integrate, operation management with property managers integration and service providers work.</div>

                  <div>
                    In my time in Pest Share I&apos;ve created:
                    <ul>
                      <li>The integration code to submit pest control request from anywhere.</li>
                      <li>Move part of the project to ReactJS and into a new way of doing software.</li>
                      <li>Fix bugs in the legacy code.</li>
                      <li>Integrate old legacy code with the new ReactJS code.</li>
                      <li>Solve various DB issues in the legacy code.</li>
                    </ul>
                  </div>

                  <div><b>Techs:</b> NextJS, ReactJS, PHP7.4, PHP 8.2, Laravel, Docker, MySQL Server, AWS (S3 and EC2).</div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Mahisoft - Full Stack Developer</h4>
              <dl>
                <dt className="job-dates">November 2021 - January 2023: 1 year, 2 months</dt>
                <dt className="job-subtitle">Customer: <b>BidMyListing.com</b></dt>
                <dd>
                  <div>As a Mahisoft web developer, I worked at BidMyListing.com as a Fullstack developer.</div>

                  <div>
                    BidMyListing is startup company, focused on real estate as a marketplace platform that allows homeowners to choose the best real estate agents in their area who will pay them upfront to list their home.
                  </div>

                  <div>
                    My main task is to implement the features requested by business on the frontend side. I have been with the team since started and prior production site building the foundation of the first versions of the platform and always improving since.
                  </div>

                  <div>
                    We are a dynamic team of very skilled developers, who keep you learning all the time, pushing to the best of your ability, I am happy to be part of if!
                  </div>

                  <div><b>Techs:</b> NodeJS, ReactJS, MongoDB, Jest.</div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>LaCure Villas - Full Stack Developer</h4>
              <dl>
                <dt className="job-dates">March 2021 - November 2021: 9 months</dt>
                <dt className="job-subtitle">Customer: <b>BidMyListing.com</b></dt>
                <dd>
                  <div>
                    LaCure Villas is a luxury temporary rental agency for the more exclusive and demanding customers.
                  </div>

                  <div>
                    My objective in LaCure is to stabilize the old system, so the business can still work and then start design and develop a new system.
                  </div>

                  <div>
                    The new system must handle the calendar synchronization across different providers and connect with several external sources and at the same time improve the response time and reduce the downtime of the internal process, provide with the possibility of online payments, connection with the ERP, and the CRM and a lot of new features that the business needs.
                  </div>

                  <div>
                    I work with a team of developers that help on this task.
                  </div>

                  <div><b>Techs:</b> NodeJS, VueJS, PHP, PostgreSQL, MongoDB.</div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Wortise - Lead Developer</h4>
              <dl>
                <dt className="job-dates">May 2020 - January 2021: 9 months</dt>
                <dd>
                  <div>
                    In Wortise, which is a very young company with a dynamic spirit, I work in the development area, carrying out analysis, participating a lot, contributing my grain of sand and sharing with great minds a job that fills me a lot, I feel a belonging that I do not I felt before and the team&apos;s push allows me and asks me to give my best.
                  </div>
                  <div>
                    In particular, I carry out internal business support software development, changes within the AdServer core and also completely innovative, ambitious and disruptive projects.
                  </div>

                  <div>
                    <b>Techs:</b> NodeJS, VueJS, PHP.<br />
                    <b>Databases:</b> MongoDB, MySQL, PostgreSQL, ElasticSearch, BigQuery.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Global Innovation - Developer and founder</h4>
              <dl>
                <dt className="job-dates">Feb. 2017 - May 2020: 3 years and 4 months</dt>
                <dd>
                  <div>
                    This is my personal brand as developer.
                  </div>
                  <div>
                    In my daily dealings with clients, I make custom requirements, and estimate project scope for trade budget, scope, negotiate the dates of payments and deliverables for each milestone.
                  </div>
                  <div>
                    Once approved the budget, I make a deeper analysis, which is discussed later with the client, making the necessary adjustments before the technical and functional design. In general, projects are focused on web environments and web services depending on needs.
                  </div>
                  <div>
                    <b>Techs:</b> NodeJS, VueJS, PHP, C#.<br />
                    <b>Databases:</b> PostgreSQL, MongoDB, MySQL, Oracle, SQL Server.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>aluGuest.com - Founder, CTO and Senior Developer</h4>
              <dl>
                <dt className="job-dates">Apr. 2012 - Jan. 2017: 4 years and 10 months</dt>
                <dd>
                  <div>
                    Lead teams of designers, developers, oversee operations, manage budgets. It was a big challenge and one of the greatest moments in my carrier.
                  </div>
                  <div>
                    <b>Techs:</b> PHP 7, CodeIgniter, CakePHP, jQuery, Javascript, MariaDB, ReactJS.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Baires Apartments and Welcome2BA - Senior Lead Software Engineer</h4>
              <dl>
                <dt className="job-dates">Feb. 2017 - Jan. 2019: 2 years</dt>
                <dd>
                  <div>
                    BAires Apartments partnered with Welcome2BA in order to become more profitable and, together be, the biggest player on Temporary Rentals in Buenos Aires.
                  </div>
                  <div>
                    My main goal: migration of systems, process integration, change the process and systems smoothly in order to do what each one does better and improve the others.
                  </div>
                  <div>
                    Integration with third parties software, like ZenDesk, Slack, Zoho CRM, Cliengo, aluPays.
                  </div>
                  <div>
                    My main goal: migration of systems, process integration, smoothly changes in the process and systems to do what each do better and improve each other processes and systems.
                  </div>
                  <div>
                    <b>Techs:</b> PHP 5.6 and 7, CodeIgniter, CakePHP, jQuery, Javascript, SQL Server, MariaDB, NuxtJS (VueJS), MongoDB .
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Movistar - Functional Analyst</h4>
              <dl>
                <dt className="job-dates">Dec. 2010 - Apr. 2012: 1 year and 5 months</dt>
                <dd>
                  <div>
                    My task were the Project Management and Functional Analysis, as a link between business analysts and the software factory in addition to managing the setup of the environments for new applications and interact with other areas such as Production Management, Information Security and Application Architecture to reach the best possible solution, both technically and functionally.
                  </div>
                  <div>
                    The area is focused to everything involving applications for client’s self-management, such as www.movistar.com.ar, www.tiendamovistar.com.ar, online.movistar.com.ar (Self-management for individuals), portal-empresas.movistar.com.ar (Self-management for Companies and Organizations) and several others for internal customer management.
                  </div>
                  <div>
                    The company allowed me to grow professionally by finding more formal ways and procedures.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Global Innovation - Functional Analyst / Commercial</h4>
              <dl>
                <dt className="job-dates">May 2007 - Dec. 2010: 3 years and 8 months</dt>
                <dd>
                  <div>
                    This is my personal brand as developer.
                  </div>
                  <div>
                    In my daily dealings with clients, I make custom requirements, and estimate project scope for trade budget, scope, negotiate the dates of payments and deliverables for each milestone.
                  </div>
                  <div>
                    Once approved the budget, I make a deeper analysis, which is discussed later with the client, making the necessary adjustments before the technical and functional design. In general, projects are focused on web environments and web services depending on needs.
                  </div>
                  <div>
                    <b>Clients:</b> Terminales Rio de la Plata (Port Operator), FunArg, ATM (Insurance), Plus Mobile Communications, Welcome2BA.com (ARG +1 year), Striggy.com, GringoReports.com (USA), Bulldog Solutions (USA +2 years), Urge Interactive (USA), Datta Point (USA), among others.
                  </div>
                  <div>
                    <b>Techs:</b> PHP 5.x, Javascript. jQuery, Symfony, CodeIgniter, CakePHP, Zend, MongoDB, SQL Server, Oracle, MariaDB, MySQL.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>RealidadIT.com - Autor and cofounder</h4>
              <dl>
                <dt className="job-dates">Oct. 2009 - Sept. 2013: 4 years</dt>
                <dd>
                  <div>
                    Blog with news about IT in Argentina and around the world.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Striggy.com - Founder and developer</h4>
              <dl>
                <dt className="job-dates">Mar. 2006 - Dec. 2010: 4 years and 10 months</dt>
                <dd>
                  <div>
                    Business Plan. Design and development of the site. Product advertisement.<br />
                    demo: <a href="http://www.matiasperrone.com/striggy" target="_blank">http://www.matiasperrone.com/striggy</a>
                  </div>
                  <div>
                    <b>Techs:</b> PHP 5.x, Javascript. jQuery, MySQL.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Plus Mobile Communications / Audiotel - System Analyst</h4>
              <dl>
                <dt className="job-dates">Nov. 2004 - May 2006: 1 año 7 meses</dt>
                <dd>
                  <div>
                    November of 2004 to March of 2005:
                    I worked as a Systems Analyst, analyzing and designing business support systems for internal and external clients, focusing mainly on the analysis, design and development business management system and billing for VoIP services.
                  </div>
                  <div>
                    And before switching to Plus Mobile, I performed the construction of a system for surveys that integrates human resources with staff supervision area of the Call Center, in order to implement a tracking system of recruitment, compliance tasks and access to the building.

                  </div>
                  <div>
                    April of 2005 to May of 2006:
                    Given a horizontal growth, I changed of company within the enterprise group to Plus Mobile Communications, overseeing and helping to overcome the disadvantages that used to present to programmers and designers in the tasks to be performed.
                  </div>
                  <div>
                    I did the analysis and design of several systems that supported the main core business, that were the SMS services and mobile content for both Argentina and Latin America. The project consisted in web services and server.
                  </div>
                  <div>
                    <b>Techs:</b> PHP 4, 5, Javascript, ASP, jQuery, SQL Server, MySQL.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>IBM - Semi-Senior Analyst Programmer</h4>
              <dl>
                <dt className="job-dates">Jun. 2004 - Nov. 2004: 6 months</dt>
                <dd>
                  <div>
                    <b>November of 2004 to March of 2005:</b>
                  </div>
                  <div>
                    I worked as a Systems Analyst, analyzing and designing business support systems for internal and external clients, focusing mainly on the analysis, design and development business management system and billing for VoIP services.
                  </div>
                  <div>
                    And before switching to Plus Mobile, I performed the construction of a system for surveys that integrates human resources with staff supervision area of the Call Center, in order to implement a tracking system of recruitment, compliance tasks and access to the building.
                  </div>
                  <div>
                    <b>April of 2005 to May of 2006:</b>
                  </div>
                  <div>
                    Given a horizontal growth, I changed of company within the enterprise group to Plus Mobile Communications, overseeing and helping to overcome the disadvantages that used to present to programmers and designers in the tasks to be performed.
                  </div>
                  <div>
                    I did the analysis and design of several systems that supported the main core business, that were the SMS services and mobile content for both Argentina and Latin America. The project consisted in web services and server.
                  </div>
                  <div>
                    <b>Techs:</b> Visual Basic 6, SQL Server, LocalDB.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Physis Informática - Programmer Analyst</h4>
              <dl>
                <dt className="job-dates">March 2004 - May 2004: 3 months</dt>
                <dd>
                  <div>
                    Development of new features to several systems that were commercialized by the company.
                  </div>
                  <div>
                    <b>Techs:</b> Visual Basic 6, SQL Server, LocalDB.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>FunArg - Programmer Analyst</h4>
              <dl>
                <dt className="job-dates">Ago. 2001 - Nov. 2003: 2 years and 4 months</dt>
                <dd>
                  <div>
                    First time as a System Analyst, responsible of several management modules of the ERP of the company. This multinational company dedicates to the area of funeral services and private cemeteries.
                  </div>
                  <div>
                    <b>Techs:</b> Visual Basic 6, SQL Server, Access.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Freelance - Developer</h4>
              <dl>
                <dt className="job-dates">Mar. 2001 - Jul. 2001: 5 months</dt>
                <dd>
                  <div>
                    I worked developing several systems and offering support and technical advising to my clients.
                  </div>
                  <div>
                    <b>Techs:</b> Visual Basic 6, SQL Server.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>Telectronica - Software Developer</h4>
              <dl>
                <dt className="job-dates">Dic. 2000 - Mar. 2001: 4 months</dt>
                <dd>
                  <div>
                    Development of customized systems, mainly systems to collect data in devices like Palm Pilot. This company is Argentine and has branches in Uruguay and Brazil, and also is supplier of the necessary equipment to collect the information.
                  </div>
                  <div>
                    <b>Techs:</b> Visual Basic 6, SQL Server, Access.
                  </div>
                </dd>
              </dl>
            </article>
            <article>
              <h4>DayCom - System Support and Developer</h4>
              <dl>
                <dt className="job-dates">Nov. 1998 - Nov. 2000: 2 years and 1 month</dt>
                <dd>
                  <div>
                    Subsidiary company of Offnet S.p.A. from Italy that changed its trade name to Offnet Argentina S.A., It were dedicated to Telecommunications Businesses. Its main project was the maintenance of the services 112 and 114 of Telecom, among others.
                  </div>
                  <div>
                    Hired as a programmer, but due to a high demand of resources he changed to the Technical Support Department, although still developing systems for internal use that were oriented to maintenance and administration tasks in UNIX (IVRs) and Windows NT 4 servers.
                  </div>
                  <div>
                    <b>Techs:</b> Visual Basic 5, ANSI C, Bash scripting, SQL Server.
                  </div>
                </dd>
              </dl>
            </article>
          </article>
        </div>
      </div>
    </div>
  )
}
