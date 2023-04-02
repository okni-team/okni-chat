const form = document.getElementById('message-form');
const input = document.getElementById('message-input');
const messageList = document.getElementById('message-list');
const otherMessageList = document.getElementById('other-message-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = input.value;
    if (message) {
        sendMessage(message);
    }
});

function sendMessage(message) {
    const li = document.createElement('li');
    li.innerText = message;
    messageList.appendChild(li);
    input.value = '';
}

function receiveMessage(message) {
    const li = document.createElement('li');
    li.innerText = message;
    otherMessageList.appendChild(li);
}