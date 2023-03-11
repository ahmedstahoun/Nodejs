let msgContainer = document.getElementById("msgContainer");
let msgsControl = document.getElementById("msgsControl");
let msgInput = document.getElementById("msgInput");
let sendMsg = document.getElementById("sendMsg");

const sender = prompt("please enter your Name");

const data = {
  sender,
};

const socket = io("http://localhost:7007");

socket.emit("newUser", sender);

socket.on("connected", (name) => {
  createMsg("connected", "reciever", name);
});
socket.on("recivingMsg", (data) => {
  createMsg(data.msg, "reciever", data.sender);
});
socket.on("loggedOut", (name) => {
  createMsg("disconnected", "reciever", name);
});

msgsControl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (msgInput.value != "") {
    createMsg(msgInput.value, "sender");

    data.msg = msgInput.value;

    socket.emit("sendingMsg", data);

    msgInput.value = "";
  }
});

function createMsg(text, classSet, senderName = "") {
  let div = document.createElement("div");
  div.classList.add(classSet);
  let psender = document.createElement("p");
  psender.innerText = senderName;
  psender.classList.add("senderName");
  div.appendChild(psender);
  let pmsg = document.createElement("p");
  pmsg.innerText = text;
  div.appendChild(pmsg);
  msgContainer.appendChild(div);
}
