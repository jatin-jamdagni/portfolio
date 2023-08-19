import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [{
  id: 1,
  img: "linkedin.svg",
  alt: "Linkedin",
  link: "https://www.linkedin.com/in/jatinjamdagni",
},

{
  id: 2,
  img: "github.svg",
  alt: "Github",
  link: "https://github.com/jatin-jamdagni/",
},
{
  id: 3,
  img: "whatsapp.svg",
  alt: "Whatsapp",
  link: "https://wa.me/+919896434478",
},
{
  id: 4,
  img: "instagram.svg",
  alt: "Instagram",
  link: "https://www.instagram.com/jjd_jamdagni/",
},
]

const Links = () => {

  return (
    <div className="flex justify-center items-center gap-10">
      {data.map((obj) => (
        <Link href={obj.link} key={obj.id}>
          <Image
            src={obj.img}
            alt={obj.alt}
            // className="hover:shadow-xl duration-200 hover:shadow-[#023434] "
            className="hover:drop-shadow-3xl duration-500"
            width={50}
            height={50}
          />
        </Link>
      ))}
    </div>
  );
};

export default Links;
