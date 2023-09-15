import React from 'react';
import { BsTwitter, BsDiscord, BsSteam } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { SiMyanimelist } from 'react-icons/si';

const ContactPage = () => {
  return (
    <div className="w-[1024px] m-auto mt-28">
      <div className="text-3xl text-white mb-3 font-semibold"><span className="text-purple-400">/</span>contacts</div>
      <div className="text-base text-white mb-11">Who am i?</div>
      <div className="flex flex-wrap justify-between">
        <div className="font-medium text-gray-400 leading-6 w-[500px]">I’m interested in different opportunities. However, if you have other request or question, don’t hesitate to contact me</div>
        <div className="flex gap-3">
          {/* <div className="p-4 border-gray-400 border">
            <div className="font-medium text-white mb-2">Support me here</div>
            <div className="text-gray-400">4149500120690030</div>
          </div> */}
          <div className="p-4 border-gray-400 border">
            <div className="font-medium text-white mb-2">Message me here</div>
            <div className="text-gray-400 flex items-center gap-3 text-base"><BsDiscord /> shizokura</div>
            <div className="text-gray-400 flex items-center gap-3 text-base"><MdEmail /> edwardguevarra2003@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="mt-14 mb-20">
        <div className="text-white text-3xl font-medium mb-5"><span className="text-purple-400">#</span>all-media</div>
        <div className="mt-5 flex flex-wrap items-center gap-5">
          <Link href="https://twitter.com/shizokura" target="_blank" className="flex gap-2 items-center cursor-pointer">
            <BsTwitter className="text-gray-400 w-5 h-5" />
            <div className="text-gray-400">@shizokura</div>
          </Link>
          <Link href="https://steamcommunity.com/profiles/76561198810018796" target="_blank" className="flex gap-2 items-center cursor-pointer">
            <BsSteam className="text-gray-400 w-5 h-5" />
            <div className="text-gray-400">shizo</div>
          </Link>
          <Link href="https://myanimelist.net/profile/SadSmiley" target="_blank" className="flex gap-2 items-center cursor-pointer">
            <SiMyanimelist className="text-gray-400 w-5 h-5" />
            <div className="text-gray-400">SadSmiley</div>
          </Link>
          <Link href="https://discord.com/users/204564936729427968" target="_blank" className="flex gap-2 items-center cursor-pointer">
            <BsDiscord className="text-gray-400 w-5 h-5" />
            <div className="text-gray-400">shizokura</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactPage