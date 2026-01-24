interface BlogCategoryTagProps {
  text: string;
  bg: string;
  textColor: string;
}

const BlogCategoryTag = ({ text, bg, textColor }: BlogCategoryTagProps) => {
  return (
    <span className={`px-2.5 py-0.5 ${bg} ${textColor} text-[12px] lg:text-[14px] font-medium rounded-2xl`}>
      {text}
    </span>
  );
};

export default BlogCategoryTag;