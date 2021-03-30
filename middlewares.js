import routes from "./routes";
import multer from "multer";

const multerVideo = multer({dest: "videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes;
    //가짜 user 데이터 생성(테스트용)
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadVideo = multerVideo.single("videoFile");