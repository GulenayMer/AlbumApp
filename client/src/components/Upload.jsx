import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("information", data.information);
    formData.append("category", data.category);

    axios
      .post("http://localhost:3000/images", formData)
      .then((response) => {
        console.log(response.data);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-screen flex-col items-center justify-center bg-stone-400"
    >
      <div>
        <label htmlFor="image" className="mb-2 block">
          Select Image:
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          {...register("image", { required: true })}
          className="w-80 rounded-md border border-gray-800 bg-stone-100 px-4 py-2"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="information" className="mb-2 block">
          Information:
        </label>
        <input
          type="text"
          id="information"
          {...register("information", { required: true })}
          className="w-80 rounded-md border border-gray-800 px-4 py-2"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="category" className="mb-2 block">
          Select Category:
        </label>
        <select
          id="category"
          {...register("category", { required: true })}
          className="w-80 rounded-md border border-gray-800 px-4 py-2"
        >
          <option value="">Select a category</option>
          <option value="family">Family</option>
          <option value="animals">Animals</option>
          <option value="vacation">Vacation</option>
          <option value="party">Party</option>
          <option value="various">Various</option>
        </select>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-80 cursor-pointer rounded-md bg-stone-700 px-4 py-2 text-stone-50 hover:bg-stone-500"
        >
          Upload
        </button>
      </div>
    </form>
  );
};

export default Upload;
