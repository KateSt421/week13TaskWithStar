function formatName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/^(.)/, (match) => match.toUpperCase());
}

function checkSpam(str) {
  return str.replace(/viagra|xxx/gi, "***");
}

function getRandomAvatar() {
  const avatars = [
    "assets/free-icon-user-848006.png",
    "assets/free-icon-user-166277.png",
    "assets/free-icon-user-2089827.png",
    "assets/free-icon-user-profile-2734847.png",
    "assets/free-icon-user-profile-3795330.png",
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
}

function addComment() {
  const nameInput = document.getElementById("name");
  const avatarInput = document.getElementById("avatar");
  const messageInput = document.getElementById("message");
  const showNameCheckbox = document.getElementById("showName");

  const name = formatName(nameInput.value);
  const avatar = avatarInput.value || getRandomAvatar();
  const message = checkSpam(messageInput.value);
  const username = "username";
  const displayName = showNameCheckbox.checked && name ? name : username;
  const date = new Date().toLocaleString();

  if (message) {
    const commentsDiv = document.getElementById("comments");

    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";

    const avatarImg = document.createElement("img");
    avatarImg.src = avatar;
    avatarImg.alt = "Avatar";
    avatarImg.className = "avatar";
    commentDiv.appendChild(avatarImg);

    const commentText = document.createElement("div");
    commentText.innerHTML = `<strong>${displayName}</strong>: ${message} <br><small>${date}</small>`;
    commentDiv.appendChild(commentText);
    commentsDiv.appendChild(commentDiv);

    nameInput.value = "";
    avatarInput.value = "";
    messageInput.value = "";
  } else {
    alert("Пожалуйста, заполните сообщение.");
  }
}

document.getElementById("submit").addEventListener("click", addComment);
