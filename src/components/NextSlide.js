const NextSlide = ({ href = "#" }) => {
  return (
    <a
      className="rounded-lg bg-blue-900 text-white shadow-ls shadow-inner absolute right-10 bottom-10 text-2xl hover:bg-blue-100 font-semibold hover:text-blue-900 transition cursor-pointer px-6 py-4"
      href={href}
    >
      Next Slide
    </a>
  );
};

export default NextSlide;
