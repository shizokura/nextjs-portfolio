import React from 'react';
import { BsTwitter } from 'react-icons/bs';

const ContactPage = () => {
  return (
    <div className="w-[1024px] m-auto mt-28">
      <div className="text-3xl text-white mb-3 font-semibold"><span className="text-purple-400">/</span>contacts</div>
      <div className="text-base text-white mb-11">Who am i?</div>
      <div className="flex flex-wrap justify-between">
        <div className="font-medium text-gray-400 leading-6 w-[500px]">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</div>
        <div className="flex gap-3">
          <div className="p-4 border-gray-400 border">
            <div className="font-medium text-white mb-2">Support me here</div>
            <div className="text-gray-400">4149500120690030</div>
          </div>
          <div className="p-4 border-gray-400 border">
            <div className="font-medium text-white mb-2">Message me here</div>
            <div className="text-gray-400">edwardguevarra2003@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="mt-14 mb-20">
        <div className="text-white text-3xl font-medium mb-5"><span className="text-purple-400">#</span>all-media</div>
        <div className="mt-5 flex flex-wrap items-center gap-5">
          <div className="flex gap-2 items-center">
            <BsTwitter className="text-gray-400 w-5 h-5" />
            <div className="text-gray-400">@shizokura</div>
          </div>
          <div className="flex gap-2 items-center">
            <BsTwitter className="text-gray-400 w-5 h-5" />
            <div className="text-gray-400">@shizokura</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage