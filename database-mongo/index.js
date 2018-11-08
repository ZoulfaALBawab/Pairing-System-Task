var mongoose = require ('mongoose');

//var databaseConnect = "" || ''
mongoose.connect('mongodb://localhost/test')
var db = mongoose.connection ;

db.on('error', function(){
  console.log('Error in mongoose connection ')
});

db.once('open', function(){
  console.log('Hey , u , db is working')
});

///////////////////////// Students's Schema /////////////////////////

var studentSchema = mongoose.Schema ({
  studentName : String,
  studentLevel: String
});

var Student = mongoose.model('Student', studentSchema);

///////////////////////// History Schema /////////////////////////

var historySchema = mongoose.Schema ({
  student1: String,
  student2: String
});

var Data = mongoose.model('Data', historySchema);

///////////////////////////////////////////////////////////////////////////

module.exports.Student = Student;
module.exports.History = Data;
