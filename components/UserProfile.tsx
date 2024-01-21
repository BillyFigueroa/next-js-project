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
  const [street, locale] = address.split("-");

  const displayDob = () => {
    const dobParts = dob.split("-");

    return `${dobParts[1]}/${dobParts[2]}/${dobParts[0]}`;
  };

  return (
    <div className="flex flex-col bg-gray-100 border-y border-slate-100 py-3 rounded-b-md min-h-screen text-black">
      <div className="flex bg-white mt-6 mx-auto w-8/12 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-8 px-6">
        <div className="flex items-center mr-10">
          <Image src={imgUrl} height={200} width={200} alt="Profile Image" style={imageStyles} />
        </div>

        <div className="flex flex-col text-lg">
          <h1 className="text-5xl mb-3">{name}</h1>

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
            {street}
          </p>

          <p className="flex items-center text-gray-500 mb-0.5 ml-10">{locale}</p>
        </div>
      </div>
    </div>
  );
}
