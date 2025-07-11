import React from "react";
import Loading from "./Loading";

const ImagePreview = ({ uploaded, enhanced, loading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 w-full max-w-5xl">
      {/* Original image */}
      <div className="m-2 bg-white rounded-2xl shadow-md text-center h-70 overflow-hidden">
        <h2 className="text-white text-xl rounded-t-2xl font-semibold bg-blue-950 p-2">
          Original Image
        </h2>
        {uploaded ? (
          <img
            src={uploaded}
            alt="Original"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-gray-700 mt-25">No image uploaded yet.</p>
        )}
      </div>

      {/* Enhanced image */}
      <div className="m-2 bg-white rounded-2xl shadow-md text-center h-70 overflow-hidden">
        <h2 className="text-white text-xl rounded-t-2xl font-semibold bg-blue-950 p-2">
          Enhanced Image
        </h2>
        {loading ? (
          <Loading />
        ) : enhanced ? (
          <img
            src={enhanced}
            alt="Enhanced"
            className="w-full h-full object-cover mb-2"
          />
        ) : (
          <p className="text-gray-700 mt-25">Upload image to start enhancing</p>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
