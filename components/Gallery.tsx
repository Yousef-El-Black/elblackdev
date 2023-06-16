// Next
import Image from "next/image";
import Link from "next/link";

// Images
import ShortlyImg from "@/public/assets/imgs/gallery/shortly.jpg";
import RestCountriesImg from "@/public/assets/imgs/gallery/rest-countries.jpg";
import ProjectTrackingImg from "@/public/assets/imgs/gallery/project-tracking.jpg";
import InsureImg from "@/public/assets/imgs/gallery/insure.jpg";
import BlogrImg from "@/public/assets/imgs/gallery/blogr.jpg";
import BookmarkImg from "@/public/assets/imgs/gallery/bookmark.jpg";
import EasybankImg from "@/public/assets/imgs/gallery/easybank.jpg";
import LoopstudiosImg from "@/public/assets/imgs/gallery/loopstudios.jpg";
import SunnysideAgencyImg from "@/public/assets/imgs/gallery/sunnyside-agency.jpg";

const Gallery = () => {
  const projects = [
    { img: ShortlyImg, title: "Shortly", link: "/gallery/shortly" },
    {
      img: RestCountriesImg,
      title: "Rest Countries",
      link: "/gallery/rest-countries-api",
    },
    {
      img: ProjectTrackingImg,
      title: "Project Tracking",
      link: "/gallery/project-tracking",
    },
    { img: InsureImg, title: "Insure", link: "/gallery/insure" },
    { img: BlogrImg, title: "Blogr", link: "/gallery/blogr" },
    { img: BookmarkImg, title: "Bookmark", link: "/gallery/bookmark" },
    { img: EasybankImg, title: "Easybank", link: "/gallery/easybank" },
    { img: LoopstudiosImg, title: "Loopstudios", link: "/gallery/loopstudios" },
    {
      img: SunnysideAgencyImg,
      title: "Sunnyside Agency",
      link: "/sunnyside-agency",
    },
  ];

  return (
    <div id="gallery" className="min-h-screen py-5 m-0">
      <div className="container mx-auto">
        <h1 className="uppercase text-amber dark:text-blue text-center mx-auto select-none mb-10">
          Gallery
        </h1>
        <div className="items flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:justify-between items-center">
          {projects.map((project, index) => {
            return (
              <Link
                href={project.link}
                key={index}
                className="hover:p-5 w-full relative bg-amber dark:bg-blue aspect-video overflow-hidden flex justify-center items-center duration-300 cursor-pointer hover:before:bg-[#000000] hover:before:opacity-50 hover:before:w-full hover:before:absolute hover:before:h-full hover:before:duration-300 before:opacity-0"
              >
                <Image
                  src={project.img}
                  alt={project.title + "Image"}
                  className="outline-amber aspect-video select-none"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
