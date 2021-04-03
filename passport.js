import passport from "passport";
import User from "./models/User";

// passport 설정(Strategy)
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
