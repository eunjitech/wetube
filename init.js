import "./db";
import app from "./app"
import dotenv from "dotenv";
dotenv.config();
//어떠한 바인딩 없이 사이드 이펙트만 들고옴
//model을 실행파일에서 인식하기 위해 import함
import "./models/Video";
import "./models/Comment";

//PORT가 존재하면 그대로 사용, 존재하지 않으면 4000을 사용
const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ Hello nodeJS world! with port number ${PORT}`);

app.listen(PORT, handleListening);