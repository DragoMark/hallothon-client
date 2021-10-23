import HomeSVG from "../Components/HomeSvg/HomeSVG";

const Home = () => {
	return (
		<div className="home flex items-center justify-between px-6 w-auto h-screen bg-buttifyBG">
			<div className="flex justify-between flex-col">
				<div className="home__title font-noto text-3xl font-bold mb-2">
					Tired of watching
					<br /> Long videos to{" "}
					<span className="text-buttifyGreen">study?</span>
				</div>
				<div className="home__description mt-2 mb-2">
					If you want to turn them to
					<br /> a summarized text and QnA <br />
					then
				</div>
				<div className="home__input mt-2">
					<form className="w-full max-w-sm">
						<div className="flex items-center border-b border-teal-500 py-2">
							<input
								className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
								type="text"
								placeholder="Enter URL here"
								aria-label="Full name"
							/>
							<button
								className="flex-shrink-0 bg-buttifyGreen  hover:bg-buttifyGreen border-teal-500 hover:border-teal-700 text-sm border-4 text-black py-1 px-2 rounded"
								type="button"
							>
								Summarize
							</button>
						</div>
					</form>
				</div>
			</div>
			<HomeSVG />
		</div>
	);
};

export default Home;
