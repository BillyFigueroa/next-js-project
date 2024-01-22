import Image from "next/image";
import Link from "next/link";

import { User } from "@/app/types";
import { formatDOB, fullAddress, fullName } from "@/app/utilities";

type UserCardProps = {
  user: User;
  displayBorder: boolean;
};

const imageStyles = {
  borderColor: "#777777",
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 32,
};

export default function UserCard({
  user: {
    dob,
    email,
    location: { city, state, street, postcode },
    login,
    name,
    phone,
    picture,
  },
  displayBorder,
}: UserCardProps) {
  const fullNameStr = fullName(name);
  const addressStr = fullAddress(street, city, state, postcode);

  const profileData = {
    imgUrl: picture.large,
    name: fullNameStr,
    age: dob.age,
    address: addressStr,
    email,
    phone,
    dob: formatDOB(dob),
  };

  return (
    <Link
      href={`/users/${login.uuid}`}
    >
      <div className="ml-5">
        <div
          data-testid="UserCard--border"
          className={`flex gap-6 py-1.5 ${displayBorder ? "border-t border-gray-200" : ""}`}
        >
          <Image
            width={64}
            height={64}
            src={picture.large}
            alt="Profile image"
            style={imageStyles}
          />

          <div className="w-fit">
            <p className="text-sm text-gray-700 font-semibold">{fullNameStr}</p>

            <p className="text-sm text-gray-500 font-extralight">
              <span className="font-normal mr-1">City:</span>
              {city}
            </p>

            <p className="text-sm text-gray-500 font-extralight">
              <span className="font-normal mr-1">Age:</span>
              {dob.age}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
