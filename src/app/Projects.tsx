export default function Projects() {
  return (
    <>
      <h2 className="mt-6 text-xl font-semibold">projects</h2>
      <ul>
        <li className="mb-2">
          <h3 className="font-semibold">
            <a
              href="https://cs2102-checker.streamlit.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Verify 3NF/BCNF for CS2102 (Database Systems).
            </a>
          </h3>
          <p>Probably useful for people taking CS2102 in my school (NUS).</p>
        </li>
        <li className="mb-2">
          <h3 className="font-semibold">
            <a
              href="https://github.com/jianrong7/orbital-23"
              target="_blank"
              rel="noreferrer noopener"
            >
              API Gateway in Golang (External project with TikTok)
            </a>
          </h3>
          <p>
            3-month long project which translates JSON body requests to Thrift
            binary format. This was done using ByteDance&apos;s open-source
            frameworks Hertz and Kitex. We achieved an A grade for this project.
          </p>
        </li>
        <li className="mb-2">
          <h3 className="font-semibold">
            <a
              href="https://github.com/jianrong7/cvwo-fe"
              target="_blank"
              rel="noreferrer noopener"
            >
              Gossip with Go
            </a>
          </h3>
          <p>
            Full-stack web forum clone done in less than 2 weeks. A project to
            learn Golang and all the intricacies of full-stack development.
          </p>
        </li>
        <li className="mb-2">
          <h3 className="font-semibold">
            <a
              href="https://play.google.com/store/apps/details?id=com.jianrong7.drivesg"
              target="_blank"
              rel="noreferrer noopener"
            >
              DriveSG
            </a>
          </h3>
          <p>
            A mobile app built using React Native to help myself pass theory
            tests. I extracted the questions and answers using Optical Character
            Recognition.
          </p>
        </li>
      </ul>
    </>
  );
}
