import express from 'express';
const router = express.Router();

// import the controller module
import { DisplayHomePage, DisplayProjectsPage, DisplayServicesPage, DisplayContactPage, DisplayAboutPage } from "../Controllers/index";

// another method - import * as IndexController from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

export  default router;
