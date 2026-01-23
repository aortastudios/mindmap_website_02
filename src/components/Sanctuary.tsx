import Container from "./Container";
import SanctuaryCards from "./SanctuaryCards";


const Sanctuary = () => {
  return (
    <section className="w-full h-full lg:mt-20 pt-10">
      <Container>
        <div className="w-full h-full">
          <div className="w-full flex flex-col lg:flex-row h-31 ">
            <div className="flex-1">
              <h1 className=" font-bold lg:font-semibold text-[24px] lg:text-[52px] text-center lg:text-start leading-tight capitalize text-primary-100 bricolage">
                A sanctuary for your thoughts
              </h1>
            </div>
            <div className="flex-1 font-medium text-[14px] lg:text-[22px] text-primary-100 leading-tight  pt-5">
              <p className="text-center lg:text-end">In a world of constant noise,</p>
              <p className="text-center lg:text-end">
                we offer a gentle space for reflection and growth
              </p>
            </div>
          </div>
          <SanctuaryCards />
        </div>
      </Container>
    </section>
  );
};

export default Sanctuary;
