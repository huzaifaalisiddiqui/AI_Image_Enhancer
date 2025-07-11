import axios from "axios";

const API_KEY = "wx4bpvxn1cvcvhxxx";
const BASE_URL = "https://techhk.aoscdn.com/";
const MAX_RETRIES = 10; // Maximum number of retries for polling

export const enhancedImageAPI = async (file) => {
  // code to call the API to enhance the image

  try {
    // code to upload the image to the server
    const taskId = await uploadImage(file);
    console.log("Image uploaded successfully, Task ID:", taskId);
    
    const enhancedImageData = await pollForEnhancedImage(taskId);
    console.log("Enhanced image fetched successfully:", enhancedImageData);

    return enhancedImageData;

    } catch (error) {
        console.error("Error enhancing image:", error.message);
    }

};

// code to upload the image to the server
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  console.log("Upload response:", data);

  const taskId = data?.data?.task_id;

  if (!taskId) {
    throw new Error("Failed to upload image, no task ID returned");
  }

  return taskId;
};

// concept of polling for the enhanced image
// Polling is a technique where the client repeatedly requests the server for updates at regular intervals until the desired state is achieved (in this case, the enhanced image is ready).
// This is useful when the server takes some time to process the request and return the result, allowing the client to check back later without blocking the user interface.
// In this case, we will poll the server every 3 seconds to check if the enhanced
const pollForEnhancedImage = async (taskId, retries = 0) => {
    
    const response = await fetchEnhancedImage(taskId);
    
    // Here no need of response.data.data.state === 4 -- because previous function already returns the data.data
    if (response.state === 4 ) {
        console.log("processing image...");  
        
        if(retries >= MAX_RETRIES) {
            throw new Error("Failed to fetch enhanced image. Max retries limit reached, Try again Later.");
        }
        
        // Wait for 3 seconds before polling again
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        return pollForEnhancedImage(taskId, retries + 1); // recursively poll until the image is ready
    }
    
    return response; // Return the enhanced image data
}

// code to fetch the enhanced image from the server
// /api/tasks/visual/scale/{task_id}

const fetchEnhancedImage = async (taskId) => {
    const { data } = await axios.get(
        `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers: {
                "X-API-KEY": API_KEY,
            },
        }
    );
    if (!data?.data) {
        throw new Error("Failed to fetch enhanced image! Image not found.");
    }

    console.log("Fetch response:", data);

    return data.data;
};

