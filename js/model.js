
function student(mssv, fullName, email, passWord, mathScores, physicsScores, chemistryScores){
  this.mssv = mssv;
  this.fullName = fullName;
  this.email = email;
  this.passWord = passWord;
  this.mathScores = mathScores;
  this.physicsScores = physicsScores;
  this.chemistryScores = chemistryScores;
  this.average = function () {
    return (this.mathScores + this.physicsScores + this.chemistryScores) / 3;
  }
}