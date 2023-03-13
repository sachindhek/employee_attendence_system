import { Request, Response } from "express";
const queries = require("../service/queries");

const loginEmployee = async (req: Request, res: Response) => {
  const { emp_email, emp_password } = req.body;

  const user = await queries.employeeLogin(emp_email, emp_password);

  if (user.emp_email !== emp_email && user.emp_password !== emp_password) {
    res.json({
      message: "wrong user authenticated, please check your email or password",
    });
  } else {
    res.json({ message: "success" });
  }
};

const postEmployee = async (req: Request, res: Response) => {
  const { emp_id, emp_name, emp_email, emp_phone, emp_address, emp_password } =
    req.body;
  if (
    emp_id === "" &&
    emp_email === "" &&
    emp_name === "" &&
    emp_phone === "" &&
    emp_address === "" &&
    emp_password === ""
  ) {
    res.json({ message: "all field are required" });
  }
  if (emp_id === "") {
    res.json({ emp_id: "emp_id is empty" });
  }
  if (emp_name === "") {
    res.json({ emp_name: "emp_name is empty" });
  }
  if (emp_email === "") {
    res.json({ emp_email: "emp_name is empty" });
  }
  if (emp_phone === "") {
    res.json({ emp_phone: "emp_phone is empty" });
  }
  if (emp_address === "") {
    res.json({ emp_address: "emp_address is empty" });
  }
  if (emp_password === "") {
    res.json({ emp_address: "emp_password is empty" });
  } else {
    const employeeData = await queries.insertEmployee(
      emp_id,
      emp_name,
      emp_email,
      emp_phone,
      emp_address,
      emp_password + Math.floor(Math.random() * 100 + 1)
    );
    res.status(200).json(employeeData);
  }
};

module.exports = { loginEmployee, postEmployee };

// else if (emp_password !== userPassword) {
//   res.json({ message: "password is not matched" });
// }
