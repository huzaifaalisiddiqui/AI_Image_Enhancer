import React from "react";
import { FaDownload } from "react-icons/fa6";
import { downloadEnhancedImage } from "../services/downloadImage";

const Download = ({ downloadable: imageURL }) => (
  <button
    onClick={() => {
      downloadEnhancedImage(imageURL);
    }}
    className="flex items-center text-xl gap-2 px-4 py-3 mt-6 bg-blue-950 text-white rounded-2xl font-semibold shadow-2xl cursor-pointer hover:bg-blue-900 transition-colors duration-200"
  >
    <FaDownload size={22} />
    Download Image
  </button>
);

export default Download;
