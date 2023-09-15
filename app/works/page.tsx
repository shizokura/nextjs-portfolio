import React from 'react';
import Image from 'next/image';
import projects from '../refs/ref_projects';
import Link from 'next/link';

const WorksPage = () => {
  return (
    <div className="w-[1024px] m-auto mt-28">
      <div className="text-3xl text-white mb-3 font-semibold"><span className="text-purple-400">/</span>projects</div>
      <div className="text-base text-white">List of my projects</div>
      <div className="mt-16 text-white text-3xl font-medium mb-12"><span className="text-purple-400">#</span>websites</div>
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
      {/* <div className="mt-16 text-white text-3xl font-medium mb-12"><span className="text-purple-400">#</span>small-projects</div>
      <div className="grid grid-cols-3 gap-4 mb-48">
        <div className="border-gray-400 border">
          <div className="text-gray-400 p-2 flex gap-2 items-center border-gray-400 border-t border-b">
            <div className="text-base">HTML</div>
            <div className="text-base">SCSS</div>
            <div className="text-base">Python</div>
            <div className="text-base">Flask</div>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <div className="text-white text-2xl font-medium">Chert Nodes</div>
            <div className="text-gray-400 text-base">Minecraft servers hosting</div>
            <div className="flex gap-4">
              <button className="py-2 px-4 text-base font-medium text-white border border-purple-400">{ 'Live <~>' }</button>
              <button className="py-2 px-4 text-base font-medium text-gray-400 border border-gray-400">{ 'Cached >=' }</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default WorksPage