import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ '_id': -1 });
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};

//Search
export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy });
};

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });

//Upload
export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    res.redirect(routes.videoDetail(newVideo.id));
};

//video를 통째로 주었기 때문에 videoDatil에서 video.id 를 받을 수 있음
//Video Detail
export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        res.redirect(routes.home)
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home)
    }
};

export const deleteVideo = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        await Video.findOneAndRemove({ _id: id })
    } catch (error) {
        console.log(error);
     }
    res.redirect(routes.home);
};