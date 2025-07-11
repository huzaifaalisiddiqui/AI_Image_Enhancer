import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../services/enhanceImageAPI";
import Download from "./Download";
import { downloadEnhancedImage } from "../services/downloadImage";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file) => {
    if (!file) {
      alert("Please upload an image file.");
      return;
    }
    // to make a file url instead of a base64 string
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    // calling the API to enhance the image
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL.image);
      setLoading(false);
    } catch (error) {
      console.error("Error enhancing image:", error);
      setLoading(false);
      alert("Failed to enhance image. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-5 w-full min-h-screen bg-amber-50">
      <h1 className="text-4xl font-bold text-center mb-4">AI Image Enhancer</h1>
      <p className="text-gray-600 font-semibold text-xl text-center mb-4">
        Enhance your images automatically without any hassle. No signup or login required!  
      </p>

      <ImageUpload handleImageUpload={handleImageUpload} />

      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />

      {enhancedImage && (
        <Download downloadable={enhancedImage} />
      )}

    </div>
  );
};

export default Home;
