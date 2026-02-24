import Image from "next/image";
import DOMPurify from "isomorphic-dompurify"; // works on server + client
import { redirect } from "next/navigation";

// Utility to convert text into a slug
function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // collapse multiple hyphens
}

const BlogSearchForm = () => {
  // Server Action
  async function handleSearch(formData: FormData) {
    "use server"; // 

    const raw = formData.get("search") as string;

    // Sanitize input
    const safe = DOMPurify.sanitize(raw);

    // Convert to slug
    const safeSlug = slugify(safe);

    // Redirect to blog details page
    redirect(`/blog/${safeSlug}`);
  }

  return (
    <form
      action={handleSearch}
      className="w-full h-16 flex items-center border border-primary-100 rounded-full overflow-hidden"
    >
      {/* Icon */}
      <div className="flex justify-center items-center w-10 h-5 lg:w-15 lg:h-10">
        <Image
          src="/icons/search.png"
          alt="Search_icon"
          width={18}
          height={18}
        />
      </div>

      {/* Input */}
      <div className="w-full h-full flex-1">
        <input
          type="text"
          name="search" // 
          className="w-full h-full outline-none placeholder:text-primary-100 placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-base"
          placeholder="search for articles by title"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="h-full w-[25%] lg:w-[13%] flex items-center justify-center bg-primary-100 text-white text-[14px] lg:text-[20px] font-medium"
      >
        Search
      </button>
    </form>
  );
};

export default BlogSearchForm;
