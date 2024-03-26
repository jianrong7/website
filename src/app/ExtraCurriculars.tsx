export default function ExtraCurriculars() {
  return (
    <>
      <h2 className="mt-6 text-xl font-semibold">extra-curriculars</h2>
      <ul>
        <li className="mb-2">
          <h3 className="font-semibold">
            <a
              href="https://dsc.comp.nus.edu.sg/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Google Developer Students&apos; Club
            </a>
          </h3>
          <p>
            Originally, I was working as a software engineer on a stakeholder
            management platform for Diabetes Singapore. I liked the experience a
            lot. So, I decided to lead a team to build a donation platform for
            Caregivers Alliance. These opportunities taught me how to engineer
            good products while minimizing costs.
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
      </ul>
    </>
  );
}
