import { BrandWhatsapp } from "tabler-icons-react";

function Support() {
  return (
    <a
      href="https://wa.me/989023330802"
      target="_blank"
      className="bg-green-500 text-white  fixed left-0 right-0 py-3 bottom-0 flex justify-center items-center"
    >
      <span>استعلام قیمت</span>
      <BrandWhatsapp className="ml-2" />
    </a>
  );
}

export default Support;
