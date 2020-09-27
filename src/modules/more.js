const more = () => {
	const moreBtn = document.querySelector('button.add-sentence-btn');
	moreBtn.addEventListener('click', () => {
		const otherBlocks = document.querySelectorAll('.col-xs-12.col-sm-6.col-md-4');
		otherBlocks.forEach((item) => {
			item.classList.remove('hidden', 'visible-sm-block');
		});
		moreBtn.style.display = 'none';
	});
};
export default more;