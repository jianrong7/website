import Image from "next/image";

type ExperienceProp = {
  imgSrc: string;
  imgAlt: string;
  companyName: string;
  jobTitle: string;
  jobDescription: string;
};

export default function Experience({
  imgSrc,
  imgAlt,
  companyName,
  jobTitle,
  jobDescription,
}: ExperienceProp) {
  return (
    <li className="list-none ml-3">
      <div className="flex flex-col md:items-center gap-7 md:flex-row">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={64}
          height={64}
          className="hidden md:block"
        />
        <div>
          <div className="flex gap-4 mb-2">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={64}
              height={64}
              className="md:hidden"
            />
            <h3 className="font-semibold flex-col flex">
              <a
                href="https://www.thetradedesk.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                {companyName}
              </a>
              <span>{jobTitle}</span>
            </h3>
          </div>
          <p>{jobDescription}</p>
        </div>
      </div>
    </li>
  );
}
