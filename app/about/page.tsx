import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="w-[1024px] m-auto mt-28">
      <div className="text-3xl text-white mb-3 font-semibold"><span className="text-purple-400">/</span>about-me</div>
      <div className="text-base text-white">Who am i?</div>
      <div className="mt-10 text-gray-400 text-base leading-6">
        <p className="mb-6">I&apos;m Edward Guevarra, a seasoned full-stack web developer with nearly a decade of experience in the field. I&apos;ve had the privilege of working on a wide range of web projects. My expertise encompasses both front-end and back-end development, and I specialize in creating robust, user-friendly web applications.</p>
          <p className="mb-6">Throughout my career, I&apos;ve honed my skills and kept up with the ever-evolving web technologies and frameworks. I&apos;m passionate about translating creative ideas into functional websites and applications that not only meet but exceed my clients&apos; expectations.</p>
          <p className="mb-6">I look forward to discussing how I can contribute to your web development needs and create impactful online experiences.</p>
      </div>
      <div className="mt-16">
        <div className="text-white text-3xl font-medium mb-12"><span className="text-purple-400">#</span>skills</div>
        <div className="flex flex-wrap gap-4 w-full">
          <div>
            <div className="w-44 border-gray-400 border">
              <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Languages</div>
              <div className="p-2 text-gray-400">
              <div>PHP</div>
              <div>Typescript</div>
              <div>Javascript</div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-44 border-gray-400 border">
              <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Databases</div>
              <div className="p-2 text-gray-400">
                <div>MongoDB</div>
                <div>Firestore</div>
                <div>PostgreSQL</div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-44 border-gray-400 border">
              <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Other</div>
              <div className="p-2 text-gray-400">
                <div>HTML</div>
                <div>CSS</div>
                <div>SCSS</div>
                <div>Tailwind</div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-44 border-gray-400 border">
              <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Tools</div>
              <div className="p-2 text-gray-400">
                <div>VSCode</div>
                <div>Git</div>
                <div>Node.js</div>
                <div>Vite</div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-44 border-gray-400 border">
              <div className="p-2 text-white font-base font-semibold border-gray-400 border-b">Frameworks</div>
              <div className="p-2 text-gray-400">
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
      <div className="mt-16 mb-40">
        <div className="text-white text-3xl font-medium mb-12"><span className="text-purple-400">#</span>hobbies</div>
        <div className="flex justify-between items-start">
          <div className="flex gap-4 flex-wrap">
            <div className="text-gray-400 border-gray-400 border p-2">playing <span className="text-white">games</span></div>
            <div className="text-gray-400 border-gray-400 border p-2">learning to play <span className="text-white">piano</span></div>
            <div className="text-gray-400 border-gray-400 border p-2">watching <span className="text-white">vtubers</span></div>
            <div className="text-gray-400 border-gray-400 border p-2">riding <span className="text-white">motorcycle</span></div>
            <div className="text-gray-400 border-gray-400 border p-2">watching <span className="text-white">anime</span></div>
            <div className="text-gray-400 border-gray-400 border p-2">reading <span className="text-white">manga</span></div>
          </div>
          <Image className="w-[178px] h-[169px]" src="/facts.png" alt="skills" width={178} height={169} />
        </div>
      </div>
    </div>
  )
}

export default AboutPage