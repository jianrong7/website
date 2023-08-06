export default function WorkExperience() {
  return (
    <>
      <h2 className="mt-6 text-xl font-semibold">Work Experience</h2>
      <ul>
        <li className="mb-2">
          <h3 className="font-semibold">
            <a
              href="https://www.lseg.com/en/labs"
              target="_blank"
              rel="noreferrer noopener"
            >
              London Stock Exchange Group
            </a>
            , Singapore - Software Engineer Intern
          </h3>
          <p>
            This is a 12-week summer internship with the sustainable finance
            team at LSEG&apos;s Singapore office, and I worked mostly using
            JavaScript (React), Python (FastAPI), and Terraform. My
            responsibilities include building SaaS products for clients to track
            their carbon emissions.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">
            <a
              href="https://www.99.co"
              target="_blank"
              rel="noreferrer noopener"
            >
              99 Group
            </a>
            , Singapore- Software Engineer Intern
          </h3>
          <p>
            This is a 7-month internship with the organic growth team at 99
            Group&apos;s Singapore office, and I worked mostly using JavaScript
            (React). My responsibilities include building new features for the
            marketplace as well as optimising them for Google.
          </p>
        </li>
      </ul>
    </>
  );
}
