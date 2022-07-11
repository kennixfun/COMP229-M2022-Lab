import express from 'express';
const router = express.Router();

// import the controller module
import { DisplayHomePage } from "../Controllers/index";

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About Us' , page: 'about'});
});

/* GET projects page. */
router.get('/projects', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Our Projects' , page: 'projects'});
});

/* GET services page. */
router.get('/services', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Our Services' , page: 'services'});
});

/* GET contact page. */
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Contact Us' , page: 'contact'});
});

export  default router;
