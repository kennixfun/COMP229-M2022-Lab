import express from 'express';
const router = express.Router();

// import the controller module
import { DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage, ProcessLogoutPage, DisplayRegisterPage } from "../Controllers/auth";

// another method - import * as IndexController from '../Controllers/index';

/* Display Login page. */
router.get('/login', DisplayLoginPage);

/* Display Register page. */
router.get('/register', DisplayRegisterPage);



/* Process Login page. */
router.post('/login', ProcessLoginPage);

/* Process Register page. */
router.post('/register', ProcessRegisterPage);

/* Process Logout page. */
router.post('/login', ProcessLogoutPage);

export  default router;