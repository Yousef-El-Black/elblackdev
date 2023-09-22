// Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Ethan Johnson",
      text: "Working with Youssef Aboalata has been a great experience. Their attention to detail and problem-solving skills are second to none. They were able to take our business requirements and turn them into a fully functional application that exceeded our expectations. Their expertise in both front-end and back-end development allowed for a seamless integration of our systems, resulting in a better user experience for our customers.",
      rating: 5,
    },
    {
      name: "Samantha Williams",
      text: "I had the pleasure of working with Youssef Aboalata on a recent project, and I must say, they are one of the most dedicated and reliable full-stack engineers I've ever worked with. They were able to quickly understand our project requirements, offer creative solutions, and deliver high-quality code within the agreed timelines. Their communication skills were also top-notch, which made collaborating with them a breeze.",
      rating: 4,
    },
    {
      name: "Jacob Davis",
      text: "We hired Youssef Aboalata to develop a custom web application for our business, and we couldn't be happier with the results. Their technical skills are exceptional, and they were able to create a robust and scalable application that met all of our requirements. They were also able to provide valuable insights and suggestions that helped improve the overall performance and user experience of the application. We highly recommend Youssef Aboalata to anyone in need of a reliable and skilled full-stack engineer.",
      rating: 5,
    },
    {
      name: "Natalie Parker",
      text: "I've had the pleasure of working with Youssef Aboalata on multiple projects, and I'm always impressed with their level of professionalism and expertise. They have a deep understanding of both front-end and back-end technologies, and they always deliver high-quality code that meets our project requirements. They're also great at communicating complex technical concepts to non-technical stakeholders, which is a valuable skill in today's business environment.",
      rating: 4.5,
    },
    {
      name: "Tyler Miller",
      text: "We hired Youssef Aboalata to develop a new e-commerce platform for our business, and we were blown away by their level of dedication and commitment to the project. They were able to work independently, proactively identifying potential issues and finding solutions before they became problems. Their attention to detail and quality of work were exceptional, and we couldn't be happier with the end result. We would highly recommend Youssef Aboalata to anyone in need of a skilled and reliable full-stack engineer.",
      rating: 5,
    },
  ];

  return (
    <div
      id="testimonials"
      className="w-screen overflow-hidden border-amber dark:border-blue border-t-[1px] border-b-[1px] my-5 py-5"
    >
      <h1 className="uppercase text-center text-amber dark:text-blue">
        Testimonials
      </h1>
      <div className="flex w-[500%] lg:w-[166.6%] flex-nowrap justify-center px-5 items-start py-5 my-4 animate-phoneMove lg:animate-move gap-5 relative">
        {testimonialsData.map((testimonial, index) => {
          return (
            <div
              key={index}
              className="bg-amber dark:bg-blue w-full lg:w-1/3 relative p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center pb-4">
                <div className="acc flex justify-center items-center gap-3">
                  <AccountCircleIcon /> <span>{testimonial.name}</span>
                </div>
                <div className="stars">
                  {testimonial.rating > 0.5 ? (
                    <StarIcon />
                  ) : testimonial.rating === 0.5 ? (
                    <StarHalfIcon />
                  ) : (
                    <StarOutlineIcon />
                  )}
                  {testimonial.rating > 1.5 ? (
                    <StarIcon />
                  ) : testimonial.rating === 1.5 ? (
                    <StarHalfIcon />
                  ) : (
                    <StarOutlineIcon />
                  )}
                  {testimonial.rating > 2.5 ? (
                    <StarIcon />
                  ) : testimonial.rating === 2.5 ? (
                    <StarHalfIcon />
                  ) : (
                    <StarOutlineIcon />
                  )}
                  {testimonial.rating > 3.5 ? (
                    <StarIcon />
                  ) : testimonial.rating === 3.5 ? (
                    <StarHalfIcon />
                  ) : (
                    <StarOutlineIcon />
                  )}
                  {testimonial.rating > 4.5 ? (
                    <StarIcon />
                  ) : testimonial.rating === 4.5 ? (
                    <StarHalfIcon />
                  ) : (
                    <StarOutlineIcon />
                  )}
                </div>
              </div>
              <p>{'"' + testimonial.text + '"'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
