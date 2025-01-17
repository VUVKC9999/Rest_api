const express = require("express");
const router = express.Router()

const employeeControllers = require('../controllers/employee_controller')
const employee= require('../Models/Employee')

router.post('/add-emp', employeeControllers.createEmployee);

router.get('/all-employees', employeeControllers.getEmployee)

router.get('/emp/:id', employeeControllers.singleEmployee)

router.put('/emp-update/:id', employeeControllers.updateEmployee)

router.delete('/emp-delete/:id', employeeControllers.deleteEmployee)

// router.post('/add', (req, res) => {
//     res.send(`Employee added ${req.body.name}`);
//     res.write((req.body))
// });

module.exports = router

