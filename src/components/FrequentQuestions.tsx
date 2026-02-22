import React from "react";
import Container from "./Container";
import Image from "next/image";
import Questions from "./Questions";
import { questionAndAnswer } from "@/utils/frequentQuestions";

const FrequentQuestions = () => {
  return (
    <section className="pb-20 w-full h-full">
      <Container>
        <div className="w-full min-h-full lg:min-h-218.25 flex flex-col lg:flex-row  items-start mt-20">
          {/* left */}
          <div className=" flex flex-col w-full lg:w-124.75 text-primary-100">
            <div className=" flex-1 w-full  ">
              <h3 className="uppercase text-center lg:text-start text-[12px] lg:text-sm font-medium pb-3 ">
                Need support
              </h3>
              <h1 className=" text-center lg:text-start text-xl lg:text-[52px] w-full font-semibold leading-tight lg:font-bold pb-5">
                Frequently Asked Questions
              </h1>
              <p className="text-[12px] md:text-lg text-center lg:text-start lg:text-[22px] pb-5 px-5 lg:px-0 lg:pr-10 leading-tight">
                Get clear answers to frequently asked questions regarding our
                services and mental health support.
              </p>
            </div>
            <div className="hidden lg:block w-full  lg:h-130 relative lg:mt-12">
              <Image
                src={"/icons/question_icon.svg"}
                fill
                alt="question_image"
              />
            </div>
          </div>
          <div className=" w-full flex-1 flex justify-start lg:justify-end">
            <div className="w-full lg:w-[90%]  ">
              <div className=" h-0 lg:h-53.75"></div>
              <div className="h-full flex flex-col gap-4">
                {questionAndAnswer.map((q, index) => (
                  <Questions
                    key={index}
                    question={q.question}
                    answer={q.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FrequentQuestions;
