import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { imgbbAPI } from "../../config/config";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    console.log("handleUploadImage ~ file:", file[0]);
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    console.log("handleUploadImage ~ bodyFormData", bodyFormData);
    const response = await axios({
      method: "post",
      url: `${imgbbAPI}`,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("handleUploadImage ~ response:", response.data.data);
    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Can not upload images");
      return;
    }
    const imageObj = {
      thumb: imageData.thumb.url,
      url: imageData.url,
    };
    onChange(name, imageObj);
  };
  return (
    <label
      className="block w-full border border-gray-200 border-dashed rounded-xl h-[200px] cursor-pointer
    flex items-center justify-center"
    >
      <input type="file" className="hidden" onChange={handleUploadImage} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
        />
      </svg>
    </label>
  );
};

export default ImageUpload;
