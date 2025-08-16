const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "Student",
    maxlength: 40,
  },

  email: {
    type: String,
    required: true,
    unique: true, //unique emails no dubplicate
    trim: true, //no spacess
    match: [/^\S+@\S+\.\S+$/, "please enter a valid email"],    //regex validation
  },

  ph_no: {
    type: Number,
  },

  prn_no: {
    type: Number,
    unique: true,
    required: true,
    maxlength: 30,
  },

  adress: {
    type: String,
    maxlength: 100,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const StudentModel =model('studentData', StudentSchema)
module.exports = StudentModel;