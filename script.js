const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg () {
	let content = messageIn.value;
	//console.log(content);
	if (content === '') {
		alert('Please write something')
	} else {
		messageOut.innerHTML = content;
		messageIn.value = '';
	}
}