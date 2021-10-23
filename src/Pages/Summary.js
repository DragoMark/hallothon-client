import QuestionCard from "../Components/QuestionCard/QuestionCard";
import SummaryCard from "../Components/SummaryCard/SummaryCard";

const Summary = () => {
	return (
		<div className="flex h-screen w-screen ">
			<div className="summary__left w-1/2 flex-col text-center mx-auto ml-24">
				<div className="summary__video flex flex-col items-start mt-10">
					<h2 className="font-noto text-2xl font-bold mb-4">
						Your Video:
					</h2>
					<div
						className="mb-8"
						style={{
							width: "35.5rem",
							height: "11.25rem",
							backgroundColor: "#d9d9d9",
						}}
					></div>
				</div>
				<div
					className=" flex flex-col items-start summary__questions"
					style={{
						width: "35.5rem",
						// height: "28.75rem",
					}}
				>
					<h2 className="font-noto text-2xl font-bold mb-4">
						Questions and Answers:
					</h2>
					<div
						className="flex flex-col questions__shadow w-full items-center py-3"
						style={{
							width: "35.5rem",
							height: "28.75rem",
							overflowY: "scroll",
						}}
					>
						<QuestionCard />
						<QuestionCard />
						<QuestionCard />
						<QuestionCard />
					</div>
				</div>
			</div>
			<div className="summary__right w-1/2 mx-auto mr-24m items-start mt-10">
				<h2 className="font-noto text-2xl font-bold mb-4">
					Your Summary:
				</h2>
				<SummaryCard />
			</div>
		</div>
	);
};

export default Summary;
