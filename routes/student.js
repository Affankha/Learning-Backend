const express = require("express");
const router = express.Router();
const student = require("../model/student");

//read data of student model
router.get("/student", async (req, res) => {
  // const {id}= req.params
  try {
    const studentdata = await student.find();
    res.status(200).json({ success: true, data: studentdata });
    // console.log(studentdata);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//create new student data
router.post("/profile", async (req, res) => {
  const { name, email, ph_no, prn_no, adress, createdAt } = req.body;
  const newstudent = new student({
    name,
    email,
    ph_no,
    prn_no,
    adress,
    createdAt,
  });
  await newstudent.save();

  try {
    res.status(201).json({ success: true, student: newstudent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//update a student details
router.put("/updateprofile/:id", async (req, res) => {
  const { id } = req.params;
  res.send(`the id is ${id}`);
  const { name, email, ph_no, prn_no, adress } = req.body;

  try {
    const updateduser = await student.findByIdAndUpdate(id, {
      name,
      email,
      ph_no,
      prn_no,
      adress,
    });

    if (!updateduser) {
      res.json({
        message: "Student not found",
      });
    }
    res.status(201).json({ success: true, student: updateduser });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

//delete a perticular student's
router.delete("/studentdelete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const studentdeleted = await student.findByIdAndDelete(id);
    res.status(201).json({ success: true, note: "this is old data", student: studentdeleted });
  } catch (err) {
    res.status(200).json({ success: false, message: err.message });
  }
});

module.exports = router;
