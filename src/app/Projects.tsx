export default function Projects() {
  return (
    <>
      <h2 className="mt-6 text-xl font-semibold">Projects</h2>
      <ul>
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
            This is a 3-month long project where my partner and I worked on
            building an API Gateway which translates JSON body requests to
            Thrift binary format. This was done using ByteDance&apos;s
            open-source frameworks Hertz and Kitex.
          </p>
        </li>
        <li className="mb-2">
          <h3 className="font-semibold">
            <a
              href="https://github.com/source-academy"
              target="_blank"
              rel="noreferrer noopener"
            >
              Source Academy
            </a>
          </h3>
          <p>
            This is a semester long project where my partner and I worked on the
            open-source platform NUS uses to teach freshmen foundational
            programming concepts.
          </p>
          <p>
            We integrated the latest WebGPU standard into Source to parallelize
            audio processing using the GPU, resulting in performance
            improvements by up to 20 times.
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
            Full-stack web forum clone. I built the frontend using React and
            TypeScript. I build the backend using Go and Gin. The project is
            also dockerized with its own CI/CD pipeline.
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
            A mobile app that helps learner drivers in Singapore to pass their
            driving theory tests. I extracted the questions and answers using
            Optical Character Recognition and hosted the data on Firebase. The
            app UI is built using React Native.
          </p>
        </li>
      </ul>
    </>
  );
}
