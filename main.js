const image = document.getElementById('image');

function createPreviews(files) {
	for (let file of files) {
		const img = new Image();
		img.src = window.URL.createObjectURL(file);
		document.getElementById('app').appendChild(img);
	}
}

image.addEventListener('input', (e) => {
	createPreviews(file.files);
});

const dropzone = document.querySelector('.dropzone_main');

function dropHandler(e) {
	e.preventDefault();
	console.log('dropped');

	for (let item of e.dataTransfer.items) {
		const data = item.getAsFile();
		const img = new Image();
		img.src = window.URL.createObjectURL(data);
		document.getElementById('app').appendChild(img);
	}
}

function dragOverHandler(e) {
	e.preventDefault();
	console.log('dragged over');
}

dropzone.addEventListener('drop', dropHandler);
dropzone.addEventListener('dragover', dragOverHandler);
