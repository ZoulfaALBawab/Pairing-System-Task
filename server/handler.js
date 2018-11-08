var db = require('../database-mongo/index.js');

/////////// New Student //////////

exports.newStudent = function (req, res) {
  var studentName = req.body.studentName;
  var studentLevel = req.body.studentLevel;

  var student = new db.studentSchema ({
    studentName,
    studentLevel
  })
  student.save (function (err, date) {
    if (err){
      console.log (err)
    }
    res.send (data);
  })
}

/////////// Get Student //////////

exports.findStudent = function (req, res) {
  db.studentSchema.find({}, function (err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  })
}

/////////// Update Student //////////
//Not Sure !!//
//https://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
exports.editStudent = function (req, res) {
  var id = req.body._id;
  var editStudentLevel = req.body.studentLevel;
  db.studentSchema.update({_id:id}, {$set: {studentLevel}},
    function (req, res {
      if (err){
        console.log(err);
      }
      res.send(data);

  }))

}

/////////// Delete Student //////////

exports.deleteStudent = function (req,res){
  var id = req.body._id;
  db.studentSchema.remove({_id: id}, function (err,data) {
    if (err){
      console.log(err);
    }
    res.send(data);
  })
}

///////////////////////////////////////////////////////
