const router = require('express').Router();

const homeController = require('../controllers/homePage');
const aboutController = require('../controllers/about');
const contactController = require('../controllers/contactPage');
const arizonaController = require('../controllers/ArizonaPage');
const singleArizonaPageController = require('../controllers/SingleArizonaProject');
const nevadaController = require('../controllers/NevadaPage');
const singleNevadaPageController = require('../controllers/SingleNevadaProject');
const californiaController = require('../controllers/CaliforniaPage');
const singleCaliforniaPageController = require('../controllers/SingleCaliforniaProject');
const hawaiiController = require('../controllers/HawaiiPage');
const singleHawaiiPageController = require('../controllers/SingleHawaiiProject');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);
// Arizona
router.get('/arizona', arizonaController);
router.get('/projectA/:id', singleArizonaPageController);
// Nevada
router.get('/nevada', nevadaController);
router.get('/projectB/:id', singleNevadaPageController);
// California
router.get('/california', californiaController);
router.get('/projectC/:id', singleCaliforniaPageController);
// Hawaii
router.get('/hawaii', hawaiiController);
router.get('/projectH/:id', singleHawaiiPageController);


module.exports = router;