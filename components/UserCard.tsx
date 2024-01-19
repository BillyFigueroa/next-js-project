import Image from "next/image";
import Link from "next/link";

type UserCardProps = {
  age: number;
  city: string;
  displayBorder: boolean;
  id: string;
  imgUrl: string;
  name: string;
};

const imageStyles = {
  borderColor: "#777777",
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 24,
};

export default function UserCard({ age, city, displayBorder, id, imgUrl, name }: UserCardProps) {
  return (
    <div className="ml-5">
      <div className={`flex gap-4 py-1.5 ${displayBorder ? "border-t border-gray-200" : ""}`}>
        <Image width={48} height={48} src={imgUrl} alt="Profile image" style={imageStyles} />

        <div className="w-fit">
          <p className="text-[10px] text-gray-700 font-semibold">
            <Link href={`/users/${id}`}>{name}</Link>
          </p>

          <p className="text-[10px] text-gray-500 font-extralight">
            <span className="font-normal mr-1">City:</span>
            {city}
          </p>

          <p className="text-[10px] text-gray-500 font-extralight">
            <span className="font-normal mr-1">Age:</span>
            {age}
          </p>
        </div>
      </div>
    </div>
  );
}
