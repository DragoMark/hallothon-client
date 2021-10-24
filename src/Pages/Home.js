import { useState, useEffect } from "react";
import HomeSVG from "../Components/HomeSvg/HomeSVG";
import axios from "axios";

const Home = () => {
	const [buttify, setButtify] = useState(false);
	const [file, setFile] = useState({
		selectedFile: null,
	});

	const handleClick = () => {
		setButtify(true);
		console.log("Trying to change buttify");
		const yeet = document.getElementById("yeet");
		yeet.classList.add("animation__yeetUp");
		console.log(yeet.classList.contains);
		onFileUpload();
	};
	useEffect(() => {
		console.log("Buttify is being changed");
		setButtify(false);
	}, [buttify]);

	const onFileChange = (e) => {
		setFile({ selectedFile: e.target.files[0] });
	};

	const onFileUpload = () => {
		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append("file", File.selectedFile, File.selectedFile.name);

		// Details of the uploaded file
		console.log(File.selectedFile);

		// Request made to the backend api
		// Send formData object
		axios.post("/gettext", formData);
	};
	return (
		<div className="home flex px-6 w-full h-screen bg-buttifyBG">
			<div
				id="yeet"
				className=" w-1/2 flex flex-col ml-12 justify-center "
			>
				<div className="home__title font-noto text-5xl mb-2 text-buttifyblue font-bold">
					Tired of watching
					<br /> Long videos to{" "}
					<span className="text-buttifyGreen">study?</span>
				</div>
				<div className="home__description text-2xl mt-2 mb-2 text-buttifyqna2">
					If you want to turn them to
					<br /> a summarized text and QnA <br />
					then
				</div>
				<div className="home__input mt-2 w-full">
					<form className="w-full max-w">
						<div className="flex py-2 ">
							<input
								className="home__inputShadow flex-1 h-11 appearance-none bg-transparent border-none text-buttifyqna2 py-1 px-4 mr-4 "
								type="file"
								placeholder="Type the video link here"
								aria-label="Full name"
								required
								onChange={onFileChange}
							/>
							<button
								className="flex-0 w-32 h-11 bg-buttifyGreen text-white font-bold text-lg py-1 px-2 rounded-lg"
								type="button"
								onClick={handleClick}
							>
								Summarize
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="w-1/2 svg mt-28">
				<HomeSVG />
			</div>
		</div>
	);
};

export default Home;
