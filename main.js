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

function img_dragHandler(e) {
	//e.preventDefault();
	let img = new Image();
	img.src = e.target.src;
	//img.width = 40;
	//img.height = 40;
	e.dataTransfer.setDragImage(img, 10, 10);
	console.log('dragging started');
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.dropEffect = 'move';
}

function dropHandler(e) {
	e.preventDefault();
	console.log('dropped');

	for (let item of e.dataTransfer.items) {
		const data = item.getAsFile();
		const img = new Image();
		img.setAttribute('draggable', 'true');
		img.addEventListener('dragstart', img_dragHandler);
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

const dragEnterHandler = (e) => {
	e.preventDefault();
	const dialog = document.createElement('dialog');
	document.body.appendChild(dialog);
	dialog.show();
	console.log('something');
};

const dragLeaveHandler = (e) => {
	e.preventDefault();
	console.log('leaving');
};

document.body.addEventListener('dragenter', dragEnterHandler);
document.body.addEventListener('dragleave', dragLeaveHandler);
