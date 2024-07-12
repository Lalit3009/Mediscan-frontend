import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const students = [
  {
    name: "Badal Wanjari",
    designation: "Student, YCCE",
    regno: "20011045",
    photo: "/images/blog/author-03.png"
  },
  {
    name: "Sanjana Verma",
    designation: "Student, YCCE",
    regno: "20010795",
    photo: "/images/blog/author-01.png"
  },
  {
    name: "Arya Deshmukh",
    designation: "Student, YCCE",
    regno: "20010704",
    photo: "/images/blog/author-01.png"
  },
  {
    name: "Somesh Mallewar",
    designation: "Student, YCCE",
    regno: "20011071",
    photo: "/images/blog/author-02.png"
  },
];

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {/* <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              /> */}
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three block dark:drop-shadow-none"
              />
            </div>
          </div>

          <div className="w-full gap-4 px-4 lg:w-1/2">
            <SectionTitle
              title="Who are we?"
              paragraph="We are students from the Department of Computer Technology at Yeshwantrao Chavan College of Engineering, Nagpur. This project is part of our final-year major project, identified under Group ID M4."
              mb="44px"
            />
            {students.map((s) => {
              return (
                <div className="mb-5 mt-5 flex w-full items-center">
                  <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={s.photo}
                          alt="author"
                          fill
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 w-[200px] text-sm font-medium text-dark dark:text-white">
                        {s.name}
                      </h4>
                      <p className="text-xs text-body-color">{s.designation}</p>
                    </div>
                  </div>
                  <div className="inline-block">
                    <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                      Registration Number
                    </h4>
                    <p className="text-xs text-body-color">{s.regno}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
