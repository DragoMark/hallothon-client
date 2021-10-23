// const handleCopy = () => {
// 	// let copyText = document.getElementById("summary");
// 	// copyText.select();
// 	// copyText.setSelectionRange(0, 99999);
// 	// navigator.clipboard.writeText(copyText.value);
// 	// alert("Copied the text: " + copyText.value);
// 	var copyTextarea = document.getElementById("summary");
// 	copyTextarea.select(); //select the text area
// 	document.execCommand("copy"); //copy to clipboard
// };

const SummaryCard = () => {
	return (
		<div
			className="flex flex-col items-start rounded-2xl questions__shadow mb-2 px-6 pt-6 justify-between"
			style={{
				width: "37.5rem",
				height: "40rem",
			}}
		>
			<p
				className="font-noto font-normal text-lg text-buttifyqna text-left bg-buttifyBG"
				id="summary"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
				ab, nam dolor neque id deserunt suscipit nobis beatae repellat
				ratione obcaecati temporibus asperiores voluptatibus voluptas
				excepturi quae magni tenetur voluptates, reiciendis numquam!
				Laudantium odio doloribus ducimus hic quibusdam consequuntur
				incidunt molestiae, odit consectetur quod laborum ut fugit nobis
				cupiditate. Nobis?
			</p>
			<div className="flex flex-row w-full justify-end">
				<button
					className="mr-6 mb-4 bg-buttifyGreen w-20 h-12 rounded-3xl"
					onClick={() =>
						navigator.clipboard.writeText(
							document.getElementById("summary").innerText
						)
					}
				>
					Copy
				</button>
			</div>
		</div>
	);
};

export default SummaryCard;
