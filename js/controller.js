
function getInformationForm() {
  var mssv = document.getElementById("txtMaSV").value;
  var fullName = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var passWord = document.getElementById("txtPass").value;
  var mathScores = document.getElementById("txtDiemToan").value;
  var physicsScores = document.getElementById("txtDiemLy").value;
  var chemistryScores = document.getElementById("txtDiemHoa").value;
  var sv = new student(mssv, fullName, email, passWord, mathScores, physicsScores, chemistryScores);
  return sv;
}