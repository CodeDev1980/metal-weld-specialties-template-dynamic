const router = require('express').Router();

const homeController = require('../controllers/homePage');
const aboutController = require('../controllers/about');
const contactController = require('../controllers/contactPage');
// Arizona DB
const newArizonaProjectController = require('../controllers/StoreArizonaProject');
const arizonaController = require('../controllers/ArizonaPage');
const singleArizonaPageController = require('../controllers/SingleArizonaProject');
const deleteArizonaProjectController = require('../controllers/deleteArizonaProject');
// Nevada DB
const newNevadaProjectController = require('../controllers/StoreNevadaProject');
const nevadaController = require('../controllers/NevadaPage');
const singleNevadaPageController = require('../controllers/SingleNevadaProject');
const deleteNevadaProjectController = require('../controllers/deleteNevadaProject');
// California DB
const newCaliforniaProjectController = require('../controllers/StoreCaliforniaProject');
const californiaController = require('../controllers/CaliforniaPage');
const singleCaliforniaPageController = require('../controllers/SingleCaliforniaProject');
const deleteCaliforniaProjectController = require('../controllers/deleteCaliforniaProject');
// Hawaii DB
const newHawaiiProjectController = require('../controllers/StoreHawaiiProject');
const hawaiiController = require('../controllers/HawaiiPage');
const singleHawaiiPageController = require('../controllers/SingleHawaiiProject');
const deleteHawaiiProjectController = require('../controllers/deleteHawaiiProject');
// Staff DB
const registerStaffController = require('../controllers/registerStaff');
const newAdminMember = require('../controllers/StoreStaffMember');
const loginController = require('../controllers/loginStaff');
const staffLoginController = require('../controllers/StaffLoginDB');
const adminController = require('../controllers/AdminPanelPage');
const createProjectsController = require('../controllers/AdminInterface');
const logoutStaffController = require('../controllers/logoutStaff');

// middleware
const authorized = require('../middlewares/authorizedStaff');
const redirect = require('../middlewares/redirectIfLoggedIn');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);
// Arizona
router.post('/store/arizonaProject', newArizonaProjectController);
router.get('/arizona', arizonaController);
router.get('/projectA/:id', singleArizonaPageController);
router.get('/delete/arizonaProject/:id', authorized, deleteArizonaProjectController);
// Nevada
router.post('/store/nevadaProject', newNevadaProjectController);
router.get('/nevada', nevadaController);
router.get('/projectB/:id', singleNevadaPageController);
router.get('/delete/nevadaProject/:id', authorized, deleteNevadaProjectController);
// California
router.post('/store/californiaProject', newCaliforniaProjectController);
router.get('/california', californiaController);
router.get('/projectC/:id', singleCaliforniaPageController);
router.get('/delete/californiaProject/:id', authorized, deleteCaliforniaProjectController);
// Hawaii
router.post('/store/hawaiiProject', newHawaiiProjectController);
router.get('/hawaii', hawaiiController);
router.get('/projectH/:id', singleHawaiiPageController);
router.get('/delete/hawaiiProject/:id', authorized, deleteHawaiiProjectController);
// Admin control
router.get('/registerStaff', registerStaffController);
router.post('/store/staff', newAdminMember)
router.get('/staffAccount', loginController);
router.post('/staff/login', redirect, staffLoginController);
router.get('/admin', authorized, adminController);
router.get('/createProjects', authorized, createProjectsController);
router.get('/staff/logout', logoutStaffController);

module.exports = router;