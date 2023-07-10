import { useState } from "react";
import axios, { Axios } from "axios";
import { useForm } from "react-hook-form";
const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [information, setInformation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    register,
    handleSubmit,
    watch,
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
      className="flex flex-col justify-center items-center"
    >
      <div>
        <label htmlFor="image" className="block mb-2">
          Select Image:
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          {...register("image", { required: true })}
          className="border border-gray-300 px-4 py-2 rounded-md w-80"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="information" className="block mb-2">
          Information:
        </label>
        <input
          type="text"
          id="information"
          {...register("information", { required: true })}
          //   value={information}
          //   onChange={handleInformationChange}
          className="border border-gray-300 px-4 py-2 rounded-md w-80"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="category" className="block mb-2">
          Select Category:
        </label>
        <select
          id="category"
          //   value={selectedCategory}
          {...register("category", { required: true })}
          //   onChange={handleCategoryChange}
          className="border border-gray-300 px-4 py-2 rounded-md w-80"
        >
          <option className="text-slate" value="">
            Select a category
          </option>
          <option className="text-slate" value={"family"}>
            family
          </option>
          <option className="text-slate" value={"animals"}>
            animals
          </option>
          <option className="text-slate" value={"vacation"}>
            Vacation
          </option>
          <option className="text-slate" value={"party"}>
            Party
          </option>
          <option className="text-slate" value={"various"}>
            Various
          </option>
        </select>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-800 text-white px-4 py-2 w-80 rounded-md"
        >
          Upload
        </button>
      </div>
    </form>
  );
};

export default Upload;
