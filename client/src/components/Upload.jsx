import { useState } from "react";

const Upload = () => {

const [selectedImage, setSelectedImage] = useState(null);
const [information, setInformation] = useState('');
const [selectedCategory, setSelectedCategory] = useState('');

const handleImageChange = (e) => {
	const file = e.target.files[0];
	setSelectedImage(file);
};

const handleInformationChange = (e) => {
	setInformation(e.target.value);
};

const handleCategoryChange = (e) => {
	setSelectedCategory(e.target.value);
};

const handleSubmit = (e) => {
	e.preventDefault();
	setSelectedImage(null);
	setInformation('');
	setSelectedCategory('');
};

return (
<form onSubmit={handleSubmit}>
	<div>
		<label htmlFor="image" className="block mb-2">
			Select Image:
		</label>
		<input
			type="file"
			id="image"
			accept="image/*"
			onChange={handleImageChange}
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
			value={information}
			onChange={handleInformationChange}
			className="border border-gray-300 px-4 py-2 rounded-md w-80"/>
	</div>
	<div className="mt-4">
		<label htmlFor="category" className="block mb-2">
		Select Category:
		</label>
		<select
			id="category"
			value={selectedCategory}
			onChange={handleCategoryChange}
			className="border border-gray-300 px-4 py-2 rounded-md w-80"
		>
			<option  className="text-slate"  value="">Select a category</option>
			<option  className="text-slate"  value="category1">Animals</option>
			<option  className="text-slate"  value="category2">Vacation</option>
			<option  className="text-slate"  value="category3">Party</option>
			<option  className="text-slate"  value="category4">Family</option>
		</select>
	</div>
	<div className="mt-4">
		<button
			type="submit"
			className="bg-blue text-white px-4 py-2 w-80 rounded-md">
		Upload
		</button>
	</div>
</form>
	);
}

export default Upload