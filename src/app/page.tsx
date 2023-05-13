import Image from 'next/image';
import profileImg from './images/umar.PNG';
import About from './component/mainPage';
import Card from './component/cards';
import Skill from './component/skills';

export default function Home() {

  return (
    <>
      <div className="container min-h-screen  grid grid-cols-[30rem,1fr]">
        <div className="sidebar flex text-center  flex-col items-center justify-start h-full w-100 bg-black text-white  ">
          <div>
            <Image
              className="rounded-full mb-10 mt-10"
              src={profileImg}
              width={350}
              height={300} alt='Profile Picture'
            />
          </div>
          <div className="mx-3 text-center font-serif">
            <h1 className="text-4xl font-bold text-yellow-400">
              Haffiz Muhammad Umar
            </h1>
            <h1 className="my-10 text-3xl">Software Engineer</h1>
          </div>
          <div className="mx-10 text-left text-lg font-serif">
            <p>
              Bachelor of Science in Computer Science, University of
              Oxford(2015-2019)
            </p>
            <br />
            <p>
              Master of Science in Artificial Intelligence, Imperial College
              London (2019-2021)
            </p>
          </div>
          {/* Contact us  */}
          <div>
            <h1 className="uppercase text-4xl font-serif mt-7">Contact Us</h1>
            <div className="flex justify-between mt-4">
              <a href="www.gmail.com">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 20 20"
                  >
                    <g fill="currentColor">
                      <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"></path>
                      <path d="m19 8.839l-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"></path>
                    </g>
                  </svg>
                </span>
              </a>
              <a href="http://linkdin.com">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 1000 1000"
                  >
                    <path
                      fill="currentColor"
                      d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25H196.064zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854V384.193z"
                    ></path>
                  </svg>
                </span>
              </a>
              <a href="www.medium.com">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236c-1.246 0-2.256-1.897-2.256-4.236c0-2.34 1.01-4.236 2.256-4.236c1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795c-.438 0-.793-1.7-.793-3.795c0-2.096.355-3.795.794-3.795c.438 0 .793 1.699.793 3.795z"
                    ></path>
                  </svg>
                </span>
              </a>
              <a href="www.twitter.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 1231.051 1000"
                >
                  <path
                    fill="currentColor"
                    d="M1231.051 118.453q-51.422 76.487-126.173 130.403q.738 14.46.738 32.687q0 101.273-29.53 202.791q-29.53 101.519-90.215 194.343q-60.685 92.824-144.574 164.468q-83.889 71.644-201.677 114.25q-117.788 42.606-252.474 42.606q-210.2 0-387.147-113.493q31.406 3.495 60.242 3.495q175.605 0 313.687-108.177q-81.877-1.501-146.654-50.409q-64.777-48.907-89.156-124.988q24.097 4.59 47.566 4.59q33.782 0 66.482-8.812q-87.378-17.5-144.975-87.04q-57.595-69.539-57.595-160.523v-3.126q53.633 29.696 114.416 31.592q-51.762-34.508-82.079-89.999q-30.319-55.491-30.319-120.102q0-68.143 34.151-126.908q95.022 116.607 230.278 186.392q135.258 69.786 290.212 77.514q-6.609-27.543-6.621-57.485q0-104.546 73.994-178.534Q747.623 0 852.169 0q109.456 0 184.392 79.711q85.618-16.959 160.333-61.349q-28.785 90.59-110.933 139.768q75.502-8.972 145.088-39.677z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      {/* About Section */}
        <div className="main flex flex-col mt-10 ml-24 mr-5  w-full">
          <About />

        {/* Skills */}
          <div>
            <h1 className='text-4xl font-bold mt-6  font-serif'> Skills</h1>
            <Skill/>
           </div> 
           {/* Profession Experience */}
          <div className="mt-12">
            <h1 className="font-serif text-4xl font-black">
              Professional Experience
            </h1>
            <Card
              title="Machine Learning Engineer, ABX Corp. (2020-2021)
              "
              description="Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. Built and maintained scalable machine learning infrastructure using cloud computing platforms. Conducted data exploratory analysis to identify potential use cases and opportunities. Participated in regular code reviews to maintain high quality standards.

              lorem ipsum is the best wor suggestion for every exaple"
            />
            <Card
              title="Data Scientist, Acme Inc. (2021-Present)
              "
              description="Design and implement machine learning models to analyze large datasets and drive business decisions. Collaborate with cross-functional teams to develop and launch new products and features. Provide technical guidance and mentorship to junior data scientists. Conduct regular presentations to stakeholders on the findings and insights generated from data analysis.
              "
            />
            <Card
              title="Machine Learning Engineer, XYZ Corp. (2019-2021)
              "
              description="Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. Built and maintained scalable machine learning infrastructure using cloud computing platforms. Conducted data exploratory analysis to identify potential use cases and opportunities. Participated in regular code reviews to maintain high quality standards.

              "
            />
          </div>
        </div>
      </div>
    </>
  );
}
