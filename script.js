document.addEventListener('DOMContentLoaded', function() {
    const usernameContainer = document.getElementById('username-container');
    const usernameInput = document.getElementById('username-input');
    const setUsernameButton = document.getElementById('set-username-button');
    const chatContainer = document.getElementById('chat-container');
    const messageContainer = document.getElementById('message-container');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    let username = '';

    setUsernameButton.addEventListener('click', function() {
        const inputUsername = usernameInput.value.trim();
        if (inputUsername !== '') {
            username = inputUsername;
            usernameContainer.style.display = 'none';
            chatContainer.style.display = 'block';
        }
    });

    sendButton.addEventListener('click', function() {
        const message = messageInput.value;
        if (message.trim() !== '') {
            appendMessage('You', message);
            messageInput.value = '';
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        messageContainer.appendChild(messageElement);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
});
