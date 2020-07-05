import React from "react"

import Header from "../components/header"

const Page = ({ data, location }) => {
  return (
    <>
      <Header />
      <main className="font-firago hyphens-manual">
        <div className="p-6 mx-auto max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 print:p-4 bg-white">
          <header className="flex items-center mb-5 md:mb-7 flex-col">
            <h1 className="text-2xl font-semibold text-gray-750 pb-px">
              Sanket Dasgupta
            </h1>
            <p className="mt-1 text-md text-gray-700 leading-normal">
              snkt.xyz ↗ • sanketdasgupta@gmail.com • github.com/SanketDG ↗
            </p>
          </header>

          <div className="md:col-count-2 print:col-count-2 col-gap-md print:h-letter-col col-fill-auto">
            <section className="mt-5 first:mt-0">
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-xl text-gray-550 print:font-normal">
                  EXPERIENCE
                </h2>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      Persistent Systems
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Aug 2018 – Present • Full Stack Developer • Pune, India
                    </p>
                  </header>
                  <ul className="">
                    <li className="mt-2.1 text-md text-gray-700 leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Developed and tested a Chrome extension that bought a
                      archaic email encryption product to the cloud, on modern
                      web technologies. Webpack, ES6, HTML/CSS.
                    </li>
                    <li className="mt-2.1 text-md text-gray-700 leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Integrated a Python/Django application that was
                      responsible for creating API endpoints that is consumed by
                      the Chrome extension.
                    </li>
                    <li className="mt-2.1 text-md text-gray-700 leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Refactored I/O intensive code in the Django application to
                      be processed by an asynchronous worker queue which uses
                      Redis that resulted in 17x improvement over response
                      times.
                    </li>
                    <li className="mt-2.1 text-md text-gray-700 leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Separated a monolithic Django codebase into two smaller
                      microservices and containerized them using Docker.
                    </li>
                    <li className="mt-2.1 text-md text-gray-700 leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Implemented centralized logging for all web services by
                      writing an intermediary web service in Go that publishes
                      all logs to ElasticSearch and visualized important data
                      points using Kibana.
                    </li>
                    <li className="mt-2.1 text-md text-gray-700 leading-normal">
                      <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                        ›
                      </span>
                      Developed, tested and migrated an legacy application to
                      modern web technologies and maintained full compatibility
                      with the legacy application. TypeScript and OpenUI5.
                    </li>
                  </ul>
                </section>
              </div>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Google Summer of Code
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Apr 2016 - Aug 2016 • Open Source Contract Developer
                  </p>
                </header>
                <ul className="">
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Participated with the Python Software Foundation under coala
                    (https://coala.io)
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Created a language independent documentation extraction
                    system.
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Wrote a language independent plugin that automatically fixes
                    inline code comments and documentation.
                  </li>
                  <li className="mt-2.1 text-md text-gray-700 leading-normal">
                    <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                      ›
                    </span>
                    Gained maintainer access for contribution to the project.
                  </li>
                </ul>
              </section>
            </section>

            <section className="mt-5 first:mt-0">
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-xl text-gray-550 print:font-normal">
                  ACHIEVEMENTS
                </h2>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish uppercase">
                      Runner up at HackerEarth IndiaHacks Open Source Hackathon
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Contributed to various open source projects to reach the
                      leaderboard on the basis of difficulty of issues triaged.
                    </p>
                  </header>
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish uppercase mt-3">
                      Mentor for Google Summer of Code 2017 and 2020.
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Mentored a GSoC student for the coala and Anita-B
                      organization in respective years to attain the milestones
                      for the given project.
                    </p>
                  </header>
                </section>
              </div>
            </section>

            <section className="mt-5 first:mt-0">
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-xl text-gray-550 print:font-normal">
                  PROJECTS
                </h2>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      <a
                        href="https://github.com/WebPraktikos/universal-resume"
                        className="group"
                      >
                        Universal Resume
                        <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Since 2019 | HTML CSS
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    Good design is as little design as possible. Less, but
                    better — because it concentrates on the essential aspects,
                    and the pro&shy;ducts are not burdened with non-essentials.
                  </p>
                </section>
              </div>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    <a
                      href="https://github.com/WebPraktikos/tailwindcss-rich-docs"
                      className="group"
                    >
                      tailwindcss-rich-docs
                      <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2017 | JavaScript
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is long-lasting. It avoids being fashionable and
                  therefore never appears antiquated.
                  <br />
                  Good design is honest. It does not make a product more
                  innovative, powerful or valuable than it really is.
                </p>
              </section>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Third One
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2013 – 2014 | Vue
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Good design is innovative. Technological development is always
                  offering new opportunities for innovative design.
                </p>
              </section>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Fantastic Project
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    2012 | JavaScript
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  Strip steak tail capicola alcatra ground round tenderloin ar.
                  Venison tri-tip porchetta, brisket tenderloin pig beef.
                </p>
              </section>
            </section>

            <section className="mt-5 first:mt-0">
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-xl text-gray-550 print:font-normal">
                  SKILLS
                </h2>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      Proficient In
                    </h3>
                  </header>
                  <div className="my-3.2 last:pb-1.5">
                    <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        CSS
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Rust
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Git
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Go
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Linux Server
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        UI Design
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Photoshop
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Illustrator
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Figma
                      </li>
                      <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                        Typography
                      </li>
                    </ul>
                  </div>
                </section>
              </div>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                    Other
                  </h3>
                </header>
                <div className="my-3.2 last:pb-1.5">
                  <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      CSS
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Rust
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Git
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Go
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Linux Server
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      UI Design
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Photoshop
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Illustrator
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Figma
                    </li>
                    <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                      Typography
                    </li>
                  </ul>
                </div>
              </section>
            </section>

            <section className="mt-5 first:mt-0">
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-xl text-gray-550 print:font-normal">
                  EDUCATION
                </h2>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                      Academy of Technology
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2014 – 2018 • Computer Science • Kolkata, India
                    </p>
                  </header>
                </section>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
