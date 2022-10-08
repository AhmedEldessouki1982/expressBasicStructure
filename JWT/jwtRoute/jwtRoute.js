import express from 'express';
import { login, superSecureResource } from '../jwtController/jwtController.js';

//following route controllers are for JWT auth testing
export const authRoute = express.Router();
authRoute.route("/super-secure-resource").get(superSecureResource)
authRoute.route("/login").post(login)