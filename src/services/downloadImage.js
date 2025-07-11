// code to download the enhanced image
export const downloadEnhancedImage = (imageUrl) => {
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "enhanced_image.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};