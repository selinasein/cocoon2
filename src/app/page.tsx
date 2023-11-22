import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <div>
        <div>
          <Image
            src="/assets/AdobeStock_621566683.jpeg"
            alt="Cocoon Landing Page Photo"
            layout="fill"
            objectFit="cover"
            className="filter brightness-50"
          />
        </div>
        <div className="grid mx-14 lg:mx-1 md:p-10 h-96	lg:grid-cols-[2fr_2fr] ">
          <h1 className=" text-white font-bold max-w-[40rem] leading-[90%] tracking-[-2px] pb-3 self-start animate-fade-up animate-duration-[2000ms] animate-normal animate-fill-forwards">
            <span className="text-6xl md:text-8xl underline decoration-sky-500 ">
              Cocoon
            </span>
            <span className="text-5xl md:text-6xl">
              {" "}
              guides you to a brighter tomorrow.
            </span>
          </h1>

          <div className="text-base text-white leading-[150%] self-end animate-fade-left animate-duration-[2000ms]  animate-normal animate-fill-forwards grid  xl:relative xl:bottom-28">
            <div className="pb-8 w-full p-10 transition-transform transform justify-center items-center animate-fade">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                src="/assets/Ai-generatedCocoonIntro.mp4"
              ></video>
            </div>
            <div className="h-24">
              {/* <Link
                href="/dashboard"
                className="inline-flex relative
                lg:right-32
                px-10 py-7
                md:px-6 md:py-4
                text-center items-center justify-center
                text-lg font-medium lg:text-white text-black
                bg-[#6DB8C5] lg:bg-transparent
                rounded-full hover:bg-blue-800
                focus:ring-4 focus:outline-none focus:ring-blue-300
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                m-8 md:m-3
                border"
              >
                Start Now
                <svg
                  className="w-3.5 h-3.5 ml-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>

        <div className="lg:w-6/7 flex flex-col md:p-5 lg:p-10 transition-transform transform justify-center md:justify-between items-center pt-72 lg:pt-40 drop-shadow-[0_35px_35px_rgba(0,0,0,0.30)]">
          <div className="animate-fade-left p-7 w-4/5 bg-[#494949] min-h-auto md:h-80 relative bottom-40 sm:bottom-32 md:bottom-12 lg:bottom-11 rounded-2xl">
            <h3 className="text-white font-semibold text-xl">About Cocoon</h3>
            <div>
              <img
                height={450}
                width={250}
                className="float-right relative rounded-lg bottom-20 ml-4 drop-shadow-xl hidden lg:block"
                src="/assets/about-cocoon.jpg"
              />
              <p className="text-gray-200 text-sm">
                Cocoon, a pioneering AI-driven company, is revolutionizing the
                job search and recruitment landscape by harnessing the power of
                artificial intelligence. By meticulously scanning resumes and
                extracting essential skills, Cocoon is empowering individuals to
                find their dream jobs while assisting companies in discovering
                the ideal candidates. This innovative platform efficiently
                matches job seekers with career opportunities that align with
                their expertise, experience, and aspirations. By using AI to
                bridge the gap between job seekers and employers, Cocoon not
                only streamlines the job hunt process but also enhances the
                chances of a perfect fit for both parties. In an era where job
                markets are rapidly evolving, Cocoon&apos;s AI-driven approach
                ensures that individuals can seamlessly transition into new
                roles and contribute their skills to companies seeking top
                talent.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
