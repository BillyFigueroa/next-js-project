import Image from "next/image";
import {
  IoMailOpenOutline,
  IoMegaphoneOutline,
  IoTimeOutline,
  IoLocationOutline,
} from "react-icons/io5";

import { UserProfileProps } from "@/app/users/user/page";

const imageStyles = {
  borderColor: "#ededed",
  borderStyle: "solid",
  borderWidth: 10,
  borderRadius: 100
};

export default async function UserProfile({
  imgUrl,
  name,
  age,
  address,
  email,
  phone,
  dob,
}: UserProfileProps) {
  const addressParts = address?.split("-");

  const displayDob = () => {
    const dobParts = dob?.split("-");

    return `${dobParts?.[1]}/${dobParts?.[2]}/${dobParts?.[0]}`;
  };

  return (
    <div className="bg-gray-100 border-y border-slate-100 py-3 rounded-b-md min-h-screen text-black">
      <div className="flex flex-col md:flex-row md:items-start bg-white mt-6 mx-auto w-10/12 max-w-[1200px] rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-8 px-6">
        <div className="flex h-full justify-center mb-6 md:mx-5 lg:mx-10">
          <Image
            className="w-[200px] h-[200px]"
            src={imgUrl}
            height={200}
            width={200}
            alt="Profile Image"
            style={imageStyles}
          />
        </div>

        <div className="flex flex-col items-center text-md sm:text-xl md:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 text-center">{name}</h1>

          <p className="flex items-center ml-1 text-gray-500 mb-0.5">
            <IoMailOpenOutline size={20} className="mr-3 text-[#016FD0]" />
            {email}
          </p>

          <p className="flex items-center text-gray-500 ml-1">
            <IoTimeOutline size={20} className="mr-3 text-[#016FD0]" />
            Born {displayDob()} &mdash; (age: {age})
          </p>

          <p className="flex items-center ml-1 text-gray-500 mb-0.5">
            <IoMegaphoneOutline size={20} className="mr-3 text-[#016FD0]" />
            {phone}
          </p>

          <p className="flex items-center ml-1 text-gray-500 mb-0.5">
            <IoLocationOutline size={20} className="mr-3 text-[#016FD0]" />
            {addressParts?.[0]}
          </p>

          <p className="text-gray-500 mb-0.5 ml-10 text-center">{addressParts?.[1]}</p>
        </div>
      </div>
    </div>
  );
}
