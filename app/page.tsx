import React from "react";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import projects from "./refs/ref_projects";

const HomePage = () => {
  return (
    <>
      <div className="w-[1024px] h-screen m-auto text-center flex items-center justify-center relative">
        <div>
          <svg className="mb-10 mr-auto ml-auto" width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_64_1298" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 39.75H38.75H77.5V78.5H38.75V117.25H77.5V156H38.75H0V117.25V78.5V39.75Z"/>
            </mask>
            <path d="M0 39.75V38.75H-1V39.75H0ZM77.5 39.75H78.5V38.75H77.5V39.75ZM77.5 78.5V79.5H78.5V78.5H77.5ZM38.75 78.5V77.5H37.75V78.5H38.75ZM38.75 117.25H37.75V118.25H38.75V117.25ZM77.5 117.25H78.5V116.25H77.5V117.25ZM77.5 156V157H78.5V156H77.5ZM0 156H-1V157H0V156ZM38.75 38.75H0V40.75H38.75V38.75ZM77.5 38.75H38.75V40.75H77.5V38.75ZM78.5 78.5V39.75H76.5V78.5H78.5ZM38.75 79.5H77.5V77.5H38.75V79.5ZM39.75 117.25V78.5H37.75V117.25H39.75ZM38.75 118.25H77.5V116.25H38.75V118.25ZM76.5 117.25V156H78.5V117.25H76.5ZM77.5 155H38.75V157H77.5V155ZM0 157H38.75V155H0V157ZM-1 117.25V156H1V117.25H-1ZM-1 78.5V117.25H1V78.5H-1ZM-1 39.75V78.5H1V39.75H-1Z" fill="#C778DD" mask="url(#path-1-inside-1_64_1298)"/>
            <mask id="path-3-outside-2_64_1298" maskUnits="userSpaceOnUse" x="76.5" y="0" width="80" height="119" fill="black">
              <rect fill="white" x="76.5" width="80" height="119"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M77.5 1H116.25H155V39.75V78.5V117.25H116.25H77.5V78.5H116.25V39.75H77.5V1Z"/>
            </mask>
            <path d="M77.5 1V0H76.5V1H77.5ZM155 1H156V0H155V1ZM155 117.25V118.25H156V117.25H155ZM77.5 117.25H76.5V118.25H77.5V117.25ZM77.5 78.5V77.5H76.5V78.5H77.5ZM116.25 78.5V79.5H117.25V78.5H116.25ZM116.25 39.75H117.25V38.75H116.25V39.75ZM77.5 39.75H76.5V40.75H77.5V39.75ZM116.25 0H77.5V2H116.25V0ZM155 0H116.25V2H155V0ZM156 39.75V1H154V39.75H156ZM156 78.5V39.75H154V78.5H156ZM156 117.25V78.5H154V117.25H156ZM116.25 118.25H155V116.25H116.25V118.25ZM116.25 116.25H77.5V118.25H116.25V116.25ZM78.5 117.25V78.5H76.5V117.25H78.5ZM77.5 79.5H116.25V77.5H77.5V79.5ZM115.25 39.75V78.5H117.25V39.75H115.25ZM77.5 40.75H116.25V38.75H77.5V40.75ZM76.5 1V39.75H78.5V1H76.5Z" fill="#C778DD" mask="url(#path-3-outside-2_64_1298)"/>
          </svg>
          <div className="text-white text-3xl font-semibold">I&apos;m a <span className="text-purple-400 text-3xl font-semibold">fullstack web developer</span></div>
          <div className="text-gray-400 text-base font-normal leading-normal">Always learning and improving my skills.</div>
          <div className="px-4 py-2 border border-purple-400 justify-start items-start gap-2.5 inline-flex mt-6">
            <Link href="/contact" className="text-white text-base font-medium cursor-pointer">Contact Me</Link>
          </div>
        </div>
      </div>
      <div className="w-[1024px] m-auto mt-20">
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-4 items-center">
            <div className="text-3xl text-white font-medium"><span className="text-purple-400">#</span>projects</div>
            <div className="bg-purple-400 h-px w-96"></div>
          </div>
          <Link href="/works" className="text-white text-base font-medium cursor-pointer">{ 'View all ~~>' }</Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {projects.map(project => {
            return (
              <div key={project.id} className="border-gray-400 border">
                <Image className="w-full h-auto" src={project.image} width={330} height={200} alt="placeholder" />
                <div className="text-gray-400 p-2 flex gap-2 items-center border-gray-400 border-t border-b flex-wrap">
                  {project.stack.map(text => {
                    return <div key={text} className="text-base">{text}</div>
                  })}
                </div>
                <div className="flex flex-col gap-4 p-4">
                  <div className="text-white text-2xl font-medium">{project.title}</div>
                  <div className="text-gray-400 text-base">{project.description}</div>
                  <div className="flex gap-4">
                    <Link href={project.link} target="_blank" className="py-2 px-4 text-base font-medium text-white border border-purple-400 cursor-pointer hover:bg-purple-400 hover:bg-opacity-25">{ 'Demo <~>' }</Link>
                    <Link href={project.code} target="_blank" className="py-2 px-4 text-base font-medium text-gray-400 border border-gray-400 cursor-pointer hover:bg-gray-400 hover:bg-opacity-25">{ 'Source Code >=' }</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-[1024px] m-auto mt-28">
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-4 items-center">
            <div className="text-3xl text-white font-medium"><span className="text-purple-400">#</span>skills</div>
            <div className="bg-purple-400 h-px w-96"></div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-14">
          <Image className="w-[349px] h-[282px]" src="/skills.png" alt="skills" width={349} height={282} />
          <div className="flex flex-wrap gap-4 justify-end w-[584px]">
            <div className="flex flex-col gap-4">
              <div className="w-44 border-gray-400 border">
                <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Languages</div>
                <div className="p-2 flex gap-2 flex-wrap text-gray-400">
                  <div>PHP</div>
                  <div>Typescript</div>
                  <div>Javascript</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-44 border-gray-400 border">
                <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Databases</div>
                <div className="p-2 flex gap-2 flex-wrap text-gray-400">
                  <div>MongoDB</div>
                  <div>Firestore</div>
                  <div>PostgreSQL</div>
                </div>
              </div>
              <div className="w-44 border-gray-400 border">
                <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Other</div>
                <div className="p-2 flex gap-2 flex-wrap text-gray-400">
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>SCSS</div>
                  <div>Tailwind</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-44 border-gray-400 border">
                <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Tools</div>
                <div className="p-2 flex gap-2 flex-wrap text-gray-400">
                  <div>VSCode</div>
                  <div>Git</div>
                  <div>Node.js</div>
                  <div>Vite</div>
                </div>
              </div>
              <div className="w-44 border-gray-400 border">
                <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Frameworks</div>
                <div className="p-2 flex gap-2 flex-wrap text-gray-400">
                  <div>React</div>
                  <div>Vue</div>
                  <div>Angular</div>
                  <div>Laravel</div>
                  <div>Next.js</div>
                  <div>Capacitor</div>
                  <div>Electron</div>
                  <div>Quasar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1024px] m-auto mt-28">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="text-3xl text-white font-medium"><span className="text-purple-400">#</span>about-me</div>
            <div className="bg-purple-400 h-px w-96"></div>
          </div>
        </div>
        <div className="mt-6 mb-6 text-gray-400 text-base leading-7">
          <p className="mb-6">I&apos;m Edward Guevarra, a seasoned full-stack web developer with nearly a decade of experience in the field. I&apos;ve had the privilege of working on a wide range of web projects. My expertise encompasses both front-end and back-end development, and I specialize in creating robust, user-friendly web applications.</p>
          <p className="mb-6">Throughout my career, I&apos;ve honed my skills and kept up with the ever-evolving web technologies and frameworks. I&apos;m passionate about translating creative ideas into functional websites and applications that not only meet but exceed my clients&apos; expectations.</p>
          <p className="mb-6">I look forward to discussing how I can contribute to your web development needs and create impactful online experiences.</p>
        </div>
        <Link href="/about" className="py-2 px-4 border-purple-400 border text-white text-base font-medium cursor-pointer">{ 'Read More ->' }</Link>
      </div>
      <div className="w-[1024px] m-auto mt-28 mb-36">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="text-3xl text-white font-medium"><span className="text-purple-400">#</span>contacts</div>
            <div className="bg-purple-400 h-px w-96"></div>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="mt-6 mb-6 text-gray-400 text-base w-1/2 leading-7">I’m interested in different opportunities. However, if you have other request or question, don’t hesitate to contact me</div>
          <div className="p-4 border-gray-400 border w-max">
            <div className="text-white text-base font-bold mb-4">Message me here</div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-400 flex items-center gap-3 text-base"><BsDiscord /> shizokura</div>
              <div className="text-gray-400 flex items-center gap-3 text-base"><MdEmail /> edwardguevarra2003@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;