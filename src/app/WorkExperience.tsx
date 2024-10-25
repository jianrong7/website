import Experience from "./components/Experience";

export default function WorkExperience() {
  return (
    <>
      <h2 className="mt-6 text-xl font-semibold">work</h2>
      <ul className="flex flex-col gap-8 p-0 md:gap-6">
        <Experience
          imgSrc={"/ttd-logo.png"}
          imgAlt={"The Trade Desk Logo"}
          companyName={"The Trade Desk"}
          jobTitle={"Software Engineer Intern"}
          jobDescription="This is a 12-week summer internship with the Core Experiences
                team at The Trade Desk's Singapore office. I got to mingle
                with lots of new technologies. They include TypeScript (React),
                C# (.NET), GraphQL, Kubernetes, AWS, Azure, MSSQL, Grafana.
                Perhaps the first internship where I felt that the knowledge I
                learnt in school was useful. I also had to think about scale,
                reliability and performance, an opportunity which I greatly
                appreciated."
        />
        <Experience
          imgSrc={"/lseg.jpeg"}
          imgAlt={"LSEG Logo"}
          companyName={"London Stock Exchange Group"}
          jobTitle={"Software Engineer Intern"}
          jobDescription="This is a 12-week summer internship with the Sustainable Finance
          team at LSEG's Singapore office, and I worked mostly using
          JavaScript (React), Python (FastAPI), and Terraform. My
          responsibilities include building SaaS products for clients to
          track their carbon emissions."
        />
        <Experience
          imgSrc={"/99co.jpeg"}
          imgAlt={"99co Logo"}
          companyName={"99 Group"}
          jobTitle={"Software Engineer Intern"}
          jobDescription="This is a 7-month internship and 5-month part-time role with the
                organic growth team at 99 Group's Singapore office, and I
                worked mostly using JavaScript (React). My responsibilities
                include building new features for the marketplace as well as
                optimising them for Google."
        />
      </ul>
    </>
  );
}
