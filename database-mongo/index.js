var mongoose = require ('mongoose');

//var databaseConnect = "" || ''
mongoose.connect('mongodb://localhost/test')
var db = mongoose.connection ;

db.on('error', function(){
  console.log('Error in mongoose connection ')
});

db.once('open', function(){
  console.log('mongoose connected successfully')
});

///////////////////////// Students's Schema /////////////////////////

var studentSchema = mongoose.Schema ({
  studentName : string,
  studentLevel: string
});

var Student = mongoose.model('Student', studentSchema);

///////////////////////// History Schema /////////////////////////

var historySchema = mongoose.Schema ({
  student1: string,
  student2: string
});

var History = mongoose.model('History', historySchema);

///////////////////////////////////////////////////////////////////////////

module.exports.Student = Student;
module.exports.History = History;
