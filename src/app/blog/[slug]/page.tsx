import Container from "@/components/Container";
import MoreBlogs from "@/components/MoreBlogs";
import Navbar from "@/components/Navbar";
import { client } from "@/lib/sanity";
import Image from "next/image";

// Fetch blog details
async function getBlogDetails(slug: string) {
  const query = `
*[_type == 'blog' && slug.current == "${slug}"]{
  title,
  publishedAt,
  author,
  firstImage,
  secondImage,
  firstImageDescription,
  secondImageDescription,
  category,
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  firstContent,
  secondContent,
  tags
}[0]
`;

  const data = await client.fetch(query);
  return data;
}
const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const data = await getBlogDetails(slug);
  console.log("Blog details", data);
  return (
    <main className="min-h-screen w-full ">
      <Navbar />
      <Container>
        <div className=" w-full  h-full  mt-35 lg:mt-0 lg:pt-40 ">
          <div className="w-full xl:w-[90%]  flex flex-col  gap-3 h-full">
            {/* Upper div */}
            <div className="w-full flex gap-3 ">
              <div className="hidden xl:block w-[25%] "></div>
              <div className="flex-1 flex  flex-col xl:flex-row xl:items-center  gap-1 text-[22px] font-normal ">
                <p className="text-primary-200/60 ">
                  Articles {">"} Cognitive Wellness {">"}
                </p>
                <p className="text-primary-100">
                  Practicing mindfulness for clarity and focus
                </p>
              </div>
            </div>

            <div className="w-full flex gap-3 ">
              {/* left side (article) */}
              {/* for desktop */}
              <div className="w-[25%]  hidden xl:block ">
                <div className="max-w-60.75 pr-5  text-primary-200 text-lg font-normal">
                  <p className="mb-12">In this article</p>
                  <p className="mb-3">
                    How exactly can these things impact wellness?
                  </p>
                  <p className="mb-3">Do we have to change our habits?</p>
                  <p className="mb-3">Making these steps make sense</p>
                </div>
              </div>
              {/* right with articles */}
              <div className="flex-1 text-[22px] h-full font-normal mb-20">
                <h1 className=" text-[20px] lg:text-[36px] font-bold lg:font-semibold text-primary-100 ">
                  Practicing mindfulness for clarity and focus
                </h1>
                <div className="flex items-center gap-5 my-2">
                  <div className="flex items-center gap-2">
                    <p className="">
                      <Image
                        src={"/icons/person.png"}
                        width={28}
                        height={28}
                        alt="image_placeholder"
                        className=""
                      />
                    </p>
                    <p className="font-medium text-[14px] text-[#535353]">
                      By In-house Mental health Experts
                    </p>
                  </div>
                  <p className="text-[14px] font-normal text-[#535353]">
                    August 20, 2025
                  </p>
                </div>
                {/* for mobile */}
                <div className="w-full xl:hidden  text-primary-200 text-lg font-normal my-10">
                  <p className="mb-3">In this article</p>
                  <p className="mb-3">
                    How exactly can these things impact wellness?
                  </p>
                  <p className="mb-3">Do we have to change our habits?</p>
                  <p className="mb-3">Making these steps make sense</p>
                </div>
                <div className="mt-4">
                  <Image
                    src="/images/mindfulness.png"
                    alt="mind_image"
                    width={462}
                    height={308}
                    className=" h-auto w-full lg:h-77 xl:h-115.5"
                  />
                </div>
                <p className="leading-8 text-[20px] font-normal text-primary-100 mt-3">
                  Dive into hundreds of articles crafted to sharpen your mind
                  and elevate your well-being. Whether you&apos;re seeking
                  enhanced focus, improved memory, or greater mental clarity,
                  our expert resources are here to guide you.
                </p>
                <div className="my-4 ">
                  <h2 className="latoclass text-primary-200 font-semibold my-3">
                    How exactly can these things impact wellness?
                  </h2>
                  <p className=" text-[14px] lg:text-[20px]  my-3  font-medium lg:font-normal  leading-6 lg:leading-8 text-[#535353]">
                    At its core, mindfulness is about cultivating awareness. It
                    involves paying attention to our thoughts, feelings, and
                    sensations as they arise, without getting carried away by
                    them. By observing our mental processes with detachment, we
                    can gain valuable insights into the patterns and habits that
                    shape our thinking. This awareness allows us to break free
                    from unproductive thought loops and make more conscious
                    choices about where to direct our attention.
                  </p>
                  <p className=" text-[14px] lg:text-[20px]  my-3  font-medium lg:font-normal  leading-6 lg:leading-8 text-[#535353]">
                    At its core, mindfulness is about cultivating awareness. It
                    involves paying attention to our thoughts, feelings, and
                    sensations as they arise, without getting carried away by
                    them. By observing our mental processes with detachment, we
                    can gain valuable insights into the patterns and habits that
                    shape our thinking. This awareness allows us to break free
                    from unproductive thought loops and make more conscious
                    choices about where to direct our attention.
                  </p>
                </div>
                <div className="my-4 ">
                  <h2 className="latoclass text-primary-200 font-semibold my-3">
                    How exactly can these things impact wellness?
                  </h2>
                  <p className=" text-[14px] lg:text-[20px]  my-3  font-medium lg:font-normal  leading-6 lg:leading-8 text-[#535353]">
                    At its core, mindfulness is about cultivating awareness. It
                    involves paying attention to our thoughts, feelings, and
                    sensations as they arise, without getting carried away by
                    them. By observing our mental processes with detachment, we
                    can gain valuable insights into the patterns and habits that
                    shape our thinking. This awareness allows us to break free
                    from unproductive thought loops and make more conscious
                    choices about where to direct our attention.
                  </p>
                  <p className=" text-[14px] lg:text-[20px]  my-3  font-medium lg:font-normal  leading-6 lg:leading-8 text-[#535353]">
                    At its core, mindfulness is about cultivating awareness. It
                    involves paying attention to our thoughts, feelings, and
                    sensations as they arise, without getting carried away by
                    them. By observing our mental processes with detachment, we
                    can gain valuable insights into the patterns and habits that
                    shape our thinking. This awareness allows us to break free
                    from unproductive thought loops and make more conscious
                    choices about where to direct our attention.
                  </p>
                </div>
                <p className="p-5 bg-primary-100/10  text-primary-100 rounded-[20px] text-base lg:text-[24px] leadin-8 font-normal my-6">
                  “ Traveling can expose you to new environments and potential
                  health risks, so it&apos;s crucial to take precautions to stay
                  safe and healthy. ”
                </p>

                <div className="mt-4">
                  <Image
                    src="/images/mindfulness.png"
                    alt="mind_image"
                    width={462}
                    height={308}
                    className=" h-auto w-full lg:h-77 xl:h-115.5"
                  />
                </div>
                <div className="my-4 ">
                  <h2 className="latoclass text-primary-200 font-semibold my-3">
                    How exactly can these things impact wellness?
                  </h2>
                  <p className=" text-[14px] leading-6  lg:text-[20px] my-2 font-medium lg:font-normal lg:leading-8 text-[#535353]">
                    In today&apos;s fast-paced world, the ability to maintain
                    clarity and focus is more crucial than ever. Mindfulness,
                    the practice of intentionally focusing on the present moment
                    without judgment, offers a powerful antidote to the
                    distractions and mental clutter that can hinder our
                    cognitive abilities. This article delves into the
                    transformative potential of mindfulness, exploring how it
                    can enhance clarity, sharpen focus, and promote overall
                    cognitive well-being.
                  </p>
                  <p className=" text-[14px] leading-6 lg:text-[20px]  my-3 lg:font-normal font-medium lg:leading-8 text-[#535353]">
                    At its core, mindfulness is about cultivating awareness. It
                    involves paying attention to our thoughts, feelings, and
                    sensations as they arise, without getting carried away by
                    them. By observing our mental processes with detachment, we
                    can gain valuable insights into the patterns and habits that
                    shape our thinking. This awareness allows us to break free
                    from unproductive thought loops and make more conscious
                    choices about where to direct our attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="blog-article">
        <Container>
          <div className="w-full pt-5">
            <MoreBlogs title=" Blog Posts You Might Like" />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default BlogArticle;
