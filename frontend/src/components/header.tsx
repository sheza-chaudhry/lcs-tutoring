"use client";

// import { RiArrowDropDownLine } from "react-icons/ri";
import elephantLogo from "../assets/images/elephant.svg";

export default function Header() {
  return (
    <header className="border-gray-200 border-b flex w-screen py-3 px-20 justify-between items-center">
      <img className="h-12 w-12" src={elephantLogo} alt="Elephant Logo" />
      <ul className="flex flex-row space-x-8">
        <li className="font-interBlack cursor-pointer hover:text-gray-700 border-b-2 border-white hover:border-b-2 hover:border-black">
          Home
        </li>
        <li className="cursor-pointer hover:text-gray-700 border-b-2 border-white hover:border-b-2 hover:border-black">
          Team
        </li>
        <li className="cursor-pointer flex flex-row items-center border-b-2 border-white hover:text-gray-700 hover:border-b-2 hover:border-black">
          Forms
        </li>
      </ul>
    </header>
  );
}
