import landing from "../../assets/landing.png";

const HomeSVG = () => {
	return (
		<div className=" m-auto flex justify-around">
			<img
				src={landing}
				alt="landing-svg"
				className="object-contain w-full"
			/>
		</div>
	);
};

export default HomeSVG;
