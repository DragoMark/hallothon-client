const QuestionCard = () => {
	return (
		<div
			className="flex flex-col items-start rounded-2xl questions__shadow mb-2 px-4 py-2"
			style={{
				width: "90%",
				// height: "1.25rem",
			}}
		>
			<h2 className="font-noto font-bold text-lg text-buttifyqna">
				1. What is Life
			</h2>
			<p className="font-noto font-normal text-lg text-buttifyqna text-left">
				A: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Iure dolore non, quibusdam deserunt natus tempora ex sit
				officia. Dolor ad numquam nihil accusamus commodi dolorum!
			</p>
		</div>
	);
};

export default QuestionCard;
