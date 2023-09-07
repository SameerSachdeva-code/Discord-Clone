const form = document.querySelector("form");
const chatMessages = document.querySelector(".chat__messages");
const input = document.querySelector(".sendMessage");

form.addEventListener("submit", sendMessage);

function sendMessage(e) {
  e.preventDefault();

  if (input.value !== "") {
    var messageDiv = document.createElement("div");
    messageDiv.className = "message";

    var avatar = document.createElement("img");
    avatar.src = "assets/user4.jpg";

    var messageInfo = document.createElement("div");
    messageInfo.className = "message__info";

    var userInfo = document.createElement("h4");
    userInfo.innerHTML = "Gamer";

    var messageTimestamp = document.createElement("span");
    messageTimestamp.className = "message__timestamp";

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    messageTimestamp.innerHTML = `${month}/${day}/${year}`;

    const message = document.createElement("p");
    message.innerHTML = input.value;
    input.value = "";

    userInfo.appendChild(messageTimestamp);
    messageInfo.appendChild(userInfo);
    messageInfo.appendChild(message);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageInfo);

    // Add an edit button to the message div
    var editButton = document.createElement("button");
    editButton.className = "editButton";
    editButton.innerHTML = "Edit";

    editButton.addEventListener("click", function () {
      editMessage(message);
    });

    messageDiv.appendChild(editButton);

    // Add a delete button to the message div
    var deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener("click", function () {
      deleteMessage(messageDiv);
    });

    messageDiv.appendChild(deleteButton);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollBy(0, 10000);
  }
}

function deleteMessage(messageDiv) {
  chatMessages.removeChild(messageDiv);
}

function editMessage(messageElement) {
  const messageText = messageElement.innerHTML;
  messageElement.innerHTML = ''; // Clear the message content

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = messageText;

  const saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";

  saveButton.addEventListener("click", function () {
    messageElement.innerHTML = editInput.value;
    // Cleanup: Remove the input and save button
    messageElement.removeChild(editInput);
    messageElement.removeChild(saveButton);
    messageElement.removeChild(cancelButton);
  });

  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Cancel";

  cancelButton.addEventListener("click", function () {
    messageElement.innerHTML = messageText;
    // Cleanup: Remove the input and cancel button
    messageElement.removeChild(editInput);
    messageElement.removeChild(saveButton);
    messageElement.removeChild(cancelButton);
  });

  messageElement.appendChild(editInput);
  messageElement.appendChild(saveButton);
  messageElement.appendChild(cancelButton);
}
