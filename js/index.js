var DSSV = [];
var data = localStorage.getItem("DSSV_JSON");
var svArr = JSON.parse(data);

for (var i = 0; i < svArr.length; i++) {
  var data = svArr[i];
  var sv = new student(
    data.mssv,
    data.fullName,
    data.email,
    data.passWord,
    data.mathScores,
    data.physicsScores,
    data.chemistryScores
  );
  DSSV.push(sv);
}
function renderDSSV() {
  // hiển thị DSSV ra layout
  // table => tr > td

  var contentHTML = "";
  for (var index = 0; index < DSSV.length; index++) {
    var sv = DSSV[index];
    var trString = `<tr>
                          <td>${sv.mssv}</td>
                          <td>${DSSV[index].fullName}</td>
                          <td>${sv.email}</td>
                          <td>${sv.average()}</td>
                          <td>
                                <button
                                onclick="xoaSv('${sv.mssv}')"
                                class="btn btn-danger">Xoá</button>
                                <button
                                onclick="suaSv('${sv.mssv}')"
                                class="btn btn-warning">Sửa</button>
                          </td>
                      </tr>`;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function addStudent() {
  var sv = getInformationForm();
  DSSV.push(sv);
  var jsonDSSV = JSON.stringify(DSSV);
  localStorage.setItem("DSSV_JSON", jsonDSSV);
  renderDSSV();
}

function xoaSv(maSv) {
  var viTri = -1;
  for (i = 0; i < DSSV.length; i++) {
    if (DSSV[i].mssv == maSv) {
      viTri = i;
    }
  }
  if (viTri != -1) {
    DSSV.splice(viTri, 1);
    renderDSSV();
  }
}

function suaSv(maSv) {
  var viTri = DSSV.findIndex(function (item) {
    return item.mssv == maSv;
  });
  if (viTri != -1) {
    var sv = DSSV[viTri];
    document.getElementById("txtMaSV").value = sv.mssv;
    document.getElementById("txtTenSV").value = sv.fullName;
    document.getElementById("txtEmail").value = sv.email;
    document.getElementById("txtPass").value = sv.passWord;
    document.getElementById("txtDiemToan").value = sv.mathScores;
    document.getElementById("txtDiemLy").value = sv.physicsScores;
    document.getElementById("txtDiemHoa").value = sv.chemistryScores;
    document.getElementById("txtMaSV").setAttribute("readonly", true);
  }
}
function updateStudent() {
  var sv = getInformationForm();
  var viTri = DSSV.findIndex(function (item) {
    return item.mssv == sv.mssv;
  });
  DSSV[viTri] = sv;
  renderDSSV();
}
