const recorderContainer = document.querySelector("#jsRecorderContainer");
const recordBtn = document.querySelector("#jsRecordBtn");
const videoPreview = document.querySelector("#jsVideoPreview");

const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
  } catch (error) {
    recordBtn.innerHTML = "☹️ Cant record";
    recordBtn.removeEventListener("click", startRecording);
  }
};

function init() {
  recordBtn.addEventListener("click", startRecording);
}

if (recorderContainer) {
  init();
  console.log("asfddsa");
}
