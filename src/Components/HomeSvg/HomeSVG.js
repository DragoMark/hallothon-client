import landing from "../../assets/landing.png";

const HomeSVG = () => {
	return (
		<div className="w-1/2 m-auto flex justify-around">
			<img
				src={landing}
				alt="landing-svg"
				className="object-contain w-2/3"
			/>
		</div>
	);
};

export default HomeSVG;
