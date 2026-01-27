"use client";
import React, { useRef, useState } from "react";
import Container from "./Container";
import Image from "next/image";

const CareerForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileUpload = () => {
    inputRef.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <section className="w-full my-12 career-form">
      <Container>
        <div className="w-full h-213  flex items-center gap-6 ">
          <div className=" flex-1 h-full ">
            {/* Desktop */}
            <form className=" relative hidden lg:block w-full h-full rounded-[30px] overflow-hidden  text-primary-200 bg-white p-10 border-none ">
              {/* name */}
              <div className="w-full flex items-center gap-6 h-20 mt-2  mb-3">
                <div className=" flex-1 h-full">
                  <h1 className="text-[16px]  py-1">First Name</h1>
                  <div className="h-11 w-full pt-1 ">
                    <input
                      type="text"
                      placeholder="Ex. John"
                      className="w-full h-full p-2  rounded-xl bg-[#F7F6F4] placeholder:text-[#B2B2B2] placeholder:text-[14px]"
                    />
                  </div>
                </div>
                <div className=" flex-1 h-full">
                  <h1 className="text-[16px]  py-1">Last Name</h1>
                  <div className="h-11 w-full pt-1">
                    <input
                      type="text"
                      placeholder="Ex. Alex"
                      className="w-full h-full p-2 rounded-xl bg-[#F7F6F4] placeholder:text-[#B2B2B2] placeholder:text-[14px]"
                    />
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className=" w-full h-20 mb-3">
                <h1 className="text-[16px]  py-1">Email address </h1>
                <div className="h-11 w-full pt-1">
                  <input
                    type="text"
                    placeholder="Ex. john@gmail.com"
                    className="w-full h-full  p-2 rounded-xl bg-[#F7F6F4] placeholder:text-[#B2B2B2] placeholder:text-[14px]"
                  />
                </div>
              </div>
              {/* area of interest */}

              <div className=" w-full mb-3 ">
                <h1 className="text-[16px]  py-1">Area of Interest </h1>
                <div className="h-11 w-full pt-1">
                  <input
                    type="text"
                    placeholder="Ex. Marketing"
                    className="w-full h-full p-2  rounded-xl bg-[#F7F6F4] placeholder:text-[#B2B2B2] placeholder:text-[14px]"
                  />
                </div>
              </div>
              {/* phone number */}
              <div className="py-1 w-full">
                <h1 className="text-[16px] font-medium py-1">Phone Number </h1>
                <div className="h-11 w-full pt-1">
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    className="w-full h-full p-2  rounded-xl bg-[#F7F6F4] placeholder:text-[#B2B2B2] placeholder:text-[14px]"
                  />
                </div>
              </div>
              {/* upload cv */}

              <div className="py-2 pt-5">
                <h1 className="text-[24px] font-medium py-2">Upload CV</h1>
                <div className=" w-full pt-2">
                  <div
                    onClick={handleFileUpload}
                    className="w-full h-61.5 border  border-dashed cursor-pointer flex justify-center items-center rounded-3xl border-primary-100 bg-primary-100/3"
                  >
                    <input
                      type="file"
                      ref={inputRef}
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-12.5 h-12.5 relative flex justify-center">
                        <Image
                          src={"/icons/upload.png"}
                          fill
                          alt="upload_icon"
                        />
                      </div>
                      <div className="flex justify-center">
                        <p className="text-[24px] items-center font-medium text-[#B2B2B2]">
                          {fileName ? (
                            <span className="text-primary-100">{fileName}</span>
                          ) : (
                            <span className="text-base underline font-medium text-[#404040]">
                              Click to Upload
                            </span>
                          )}
                          {!fileName && (
                            <span className="font-normal text-[12px] pl-1">
                              ( Maximum size:5mb)
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-13 mt-6">
                <button className="bg-primary-100 flex justify-center items-center gap-1 text-white text-[20px] font-semibold rounded-4xl w-full h-full cursor-pointer">
                  <span className="">Submit</span>
                  <Image
                    src={"/icons/chevrons-left.png"}
                    width={20}
                    height={20}
                    alt="chevron_left_icon"
                    className="text-white"
                  />
                </button>
              </div>
            </form>
            {/* mobile */}
            <form className="lg:hidden h-full w-full text-primary-200 p-5 rounded-4xl border-none bg-white">
              {/* first name */}
              <div className=" py-2 mt-3">
                <h1 className="text-[13px] font-semibold py-1">First name</h1>
                <div className="h-11 w-full pt-1">
                  <input
                    type="text"
                    placeholder="Ex. John"
                    className="w-full h-full p-2  rounded-xl  placeholder:text-[#B2B2B2] placeholder:text-[12px]"
                  />
                </div>
              </div>
              {/*last name */}
              <div className=" py-2">
                <h1 className="text-[13px] font-semibold py-1">Last name</h1>
                <div className="h-11 w-full pt-1">
                  <input
                    type="text"
                    placeholder="Ex. John"
                    className="w-full h-full p-2  rounded-xl  placeholder:text-[#B2B2B2] placeholder:text-[12px]"
                  />
                </div>
              </div>
              {/* email */}
              <div className="py-2 ">
                <h1 className="text-[13px] font-semibold py-3">
                  Email Address
                </h1>
                <div className="h-11 w-full pt-1">
                  <input
                    type="text"
                    placeholder="Ex. john@gmail.com"
                    className="w-full h-full p-2  rounded-xl  placeholder:text-[#B2B2B2] placeholder:text-[12px]"
                  />
                </div>
              </div>
              {/* area of interest */}
              <div className="py-2 ">
                <h1 className="text-[13px] font-semibold py-1">
                  Area of Interest{" "}
                </h1>
                <div className="h-12.5 w-full pt-1">
                  <input
                    type="text"
                    placeholder="Ex. Marketing"
                    className="w-full h-full p-2  rounded-xl  placeholder:text-[#B2B2B2] placeholder:text-[12px]"
                  />
                </div>
              </div>
              {/* phone number */}
              <div className="my-3 ">
                <h1 className="text-[13px] font-semibold py-1">
                  Phone Number{" "}
                </h1>
                <div className="h-12.5 w-full pt-1">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full h-full p-2  rounded-xl  placeholder:text-[#B2B2B2] placeholder:text-[12px]"
                  />
                </div>
              </div>
              {/* upload */}
              <div className="py-2">
                <h1 className="text-[13px] font-semibold py-1">Upload CV </h1>
                <div className="h-48.5 w-full pt-2">
                  <div
                    onClick={handleFileUpload}
                    className="w-full h-full cursor-pointer border-2  border-dashed flex justify-center items-center rounded-3xl border-primary-100 bg-primary-100/2"
                  >
                    <input
                      type="file"
                      ref={inputRef}
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-8 h-8 relative flex justify-center">
                        <Image
                          src={"/icons/upload.png"}
                          fill
                          alt="upload_icon"
                        />
                      </div>
                      <div className="flex justify-center">
                        <p className="text-[14px] items-center font-medium text-[#B2B2B2]">
                          {fileName ? (
                            <span className="text-primary-100">{fileName}</span>
                          ) : (
                            <span className="font-medium text-base underline text-[#535353]">
                              Click to Upload
                            </span>
                          )}
                          {!fileName && (
                            <span className="font-normal text-[12px]">
                              ( Max size: 5mb)
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-10 mt-6">
                <button className="bg-primary-100 flex items-center justify-center text-white text-[14px] font-semibold rounded-4xl w-full h-full cursor-pointer">
                  <span className="">Submit</span>
                  <Image
                    src={"/icons/chevrons-left.png"}
                    width={20}
                    height={20}
                    alt="chevron_left_icon"
                    className="text-white"
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="flex-1 hidden lg:block h-full rounded-[30px] relative">
            <Image src={"/images/career_img.png"} fill alt="career_image" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareerForm;
