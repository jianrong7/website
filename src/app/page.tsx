import Header from "./Header";
import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperience";
import ExtraCurriculars from "./ExtraCurriculars";
import Projects from "./Projects";
import TechnicalStuff from "./TechnicalStuff";
import Teaching from "./Teaching";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col px-12 pb-12">
        <AboutMe />
        <WorkExperience />
        <ExtraCurriculars />
        <Projects />
        <TechnicalStuff />
        <Teaching />
      </main>
    </>
  );
}
