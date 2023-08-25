import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaVimeoV,
} from "react-icons/fa";

const solutions = [
  {
    name: "About Click Motto",
  },
  {
    name: "License",
  },
  {
    name: "Partnership",
  },
  {
    name: "Blog",
  },
  {
    name: "Help",
  },
  {
    name: "Join The Team",
  },
];

export default function SubMenu() {
  return (
    <div className="hidden md:block w-8">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group  text-base font-medium text-gray-400  focus:outline-none mt-2`}
            >
              <span>
                <BsThreeDots size={28}></BsThreeDots>
              </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-2/3  z-10 mt-3 bg-black text-gray-400 -translate-x-1/2 transform px-4 sm:px-0">
                <div className="shadow-lg w-[200px]">
                  <ul className="">
                    {solutions?.map((item, index) => (
                      <li
                        className="px-3 py-1 text-gray-500 cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-300"
                        key={index}
                      >
                        {item?.name}
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 border-t-[1px]">
                    <div className="flex items-center space-x-3">
                      <span className="rounded-full text-black bg-amber-600 p-1 cursor-pointer">
                        <FaFacebookF></FaFacebookF>
                      </span>
                      <span className="rounded-full text-black bg-amber-600 p-1 cursor-pointer">
                        <FaTwitter></FaTwitter>
                      </span>
                      <span className="rounded-full text-black bg-amber-600 p-1 cursor-pointer">
                        <FaInstagram></FaInstagram>
                      </span>
                      <span className="rounded-full text-black bg-amber-600 p-1 cursor-pointer">
                        <FaPinterestP></FaPinterestP>
                      </span>
                      <span className="rounded-full text-black bg-amber-600 p-1 cursor-pointer">
                        <FaVimeoV></FaVimeoV>
                      </span>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
