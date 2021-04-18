import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const commentDeleteBtn = document.querySelectorAll("#jsCommentDelete");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  console.log(response);
  addComment(comment);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const handleDeleteComment = async (event) => {
  const target = event.currentTarget;
  const targetLi = target.parentNode;
  const targetSpan = targetLi.querySelector(".commentText");
  const targetComment = targetSpan.innerText;

  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment/delete`,
    method: "POST",
    data: {
      targetComment,
    },
  });
  decreaseNumber();
  if (response.status === 200) {
    commentList.removeChild(targetLi);
  }
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  commentDeleteBtn.forEach((element) => {
    element.addEventListener("click", handleDeleteComment);
  });
}

if (addCommentForm) {
  init();
}
