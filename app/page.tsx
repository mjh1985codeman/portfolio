import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main id="home" className="flex flex-col pt-14 sm:pt-16">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <section id="contact" className="py-16 px-4 bg-slate-800 border-t border-slate-700">
        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-wrap justify-evenly gap-4 sm:gap-6">
            <li>
              <a
                href="mailto:mj.hodges1985@gmail.com"
                className="flex items-center px-5 py-3 rounded-lg bg-slate-700/60 border border-slate-600 text-slate-200 font-medium hover:bg-slate-700 hover:border-[#2d90eb] hover:text-white transition-all duration-200"
              >
                mj.hodges1985@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+16154060113"
                className="flex items-center px-5 py-3 rounded-lg bg-slate-700/60 border border-slate-600 text-slate-200 font-medium hover:bg-slate-700 hover:border-[#2d90eb] hover:text-white transition-all duration-200"
              >
                615-406-0113
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/michael-h-81b02a305/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-3 rounded-lg bg-slate-700/60 border border-slate-600 text-slate-200 font-medium hover:bg-slate-700 hover:border-[#2d90eb] hover:text-white transition-all duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mjh1985codeman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-3 rounded-lg bg-slate-700/60 border border-slate-600 text-slate-200 font-medium hover:bg-slate-700 hover:border-[#2d90eb] hover:text-white transition-all duration-200"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
