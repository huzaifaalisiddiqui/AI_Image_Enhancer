import React from 'react'

const ImageUpload = (props) => {

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.handleImageUpload(file);
    }
  }

  return (
    <div className="m-1 p-2 w-full max-w-md bg-white rounded-2xl shadow-md text-center">
      <label
        htmlFor="fileInput"
        className="flex flex-col items-center justify-center h-34 cursor-pointer border-2 border-gray-300 border-dashed rounded-2xl hover:border-blue-700 transition-all"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
        />
        <p className="text-gray-600 text-lg px-4 py-8 hover:text-blue-800 transition-all">
          <span className="font-semibold">Click to upload</span> or drag and drop an image here
        </p>
      </label>
    </div>
  )
}

export default ImageUpload;