import mongoose from "mongoose";
//model은 data, schema는 형태

//Video model 데이터 및 타입 정의
const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
//comment의 ref인 Comment는 comment파일에 있는 변수와 같아야 연결됨
//여기서 comment는 오브젝트 아이디만을 담고있음

const model = mongoose.model("Video", VideoSchema);
export default model;