const image = document.getElementById('image');

image.addEventListener('input', (e) => {
	for (let file of image.files) {
		const img = new Image();
		img.src = window.URL.createObjectURL(file);
		document.getElementById('app').appendChild(img);
	}
});
