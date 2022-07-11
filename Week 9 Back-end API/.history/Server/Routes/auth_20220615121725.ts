import express from 'express';
const router = express.Router();

// import the controller module
import { DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage, ProcessLogoutPage, DisplayRegisterPage } from "../Controllers/auth";

// another method - import * as IndexController from '../Controllers/index';

/* Display Login page. */
router.get('/login', DisplayLoginPage);

/* Display Register page. */
router.get('/register', DisplayRegisterPage);



/* Processing Login page. */
router.post('/login', ProcessLoginPage);

/* Processing Register page. */
router.post('/register', ProcessRegisterPage);

/* Processing Logout page. */
router.post('/logout', ProcessLogoutPage);

export  default router;