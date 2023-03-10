// import express from "express";
const express = require("express");
const router = express.Router();
const { loginEmployee, postEmployee } = require("../controller/apicontroller");

router.post("/api/login", loginEmployee);
router.post("/addEmployee", postEmployee);

module.exports = router;
