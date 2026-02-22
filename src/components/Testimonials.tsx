import { dummyTestimonial1, dummyTestimonial2 } from "@/utils/dummyTestimonial";
import TestimonialSlider from "./TestimonialSlider";
import Container from "./Container";
import TestimonialCard from "./TestimonialCard";
import ReflectingButton from "./ReflectingButton";

const Testimonials = () => {
  const combinedTestimonials = [...dummyTestimonial1, ...dummyTestimonial2];
  return (
    <section className=" w-full lg:max-w-360  min-h-199.5 mx-auto  lg:my-20 pt-10 ">
      <div className="w-full lg:w-236.5  mx-auto">
        <h1 className="px-10 lg:px-0 text-center lg:text-start text-primary-100 font-bold lg:font-semibold text-[24px] lg:text-[44px] leading-tight">
          What our community members are saying
        </h1>
        <p className="font-[400px] text-[14px] md:text-base lg:text-[22px]  lg:px-30 text-center text-primary-100 mt-2 px-5 ">
          Explore inspiring feedback from individuals who transformed their
          lives through therapy and holistic wellness.
        </p>
      </div>
     
        <div className="w-full h-full mt-20 hidden lg:block  ">
          <TestimonialSlider testimonials={dummyTestimonial1} />
          <TestimonialSlider testimonials={dummyTestimonial2} />
        </div>
         <Container>
        <div className="lg:hidden block mt-10">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {combinedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="mb-6">
                <TestimonialCard
                  src={testimonial.src}
                  name={testimonial.name}
                  content={testimonial.content}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="w-full flex justify-center ">
        <ReflectingButton
          path="/testimonials"
          name="Read More Testimonials"
          className2="bg-primary-100/5 group:hover:bg-[#FFFFFF]/8 p-1 lg:p-2 rounded-full"
          className="latoclass group lg:mt-10 flex items-center justify-center gap-2 w-56 lg:w-66.5 h-12 lg:h-16  z-10 bg-white border border-primary-100 hover:text-white hover:bg-primary-100 text-primary-100  text-[14px] lg:text-[16px] font-medium rounded-[60px] lg:rounded-full"
        />
      </div>
    </section>
  );
};

export default Testimonials;
