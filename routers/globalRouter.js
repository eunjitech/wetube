import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin, postJoin, getLogin, postLogin, logout, githubLogin, postGitLogin, getMe, facebookLogin,
  postFacebookLogin
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.search, search);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

// github
globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, passport.authenticate('github', { failurlRedirect: routes.login }), postGitLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback, passport.authenticate("facebook", { failureRedirect: "/login" }), postFacebookLogin
);

export default globalRouter;
