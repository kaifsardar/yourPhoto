
let obj = {
  "1": "10501",
  "2": "10701",
  "3": "10601",
  "4": "10801",
  "5": "11201",
  "6": " ",
  "7": "10301",
  "8": "10901",
  "9": "11701",




}

function submit() {

  let roll1 = obj[document.getElementById("dept").value];
  let roll2 = document.getElementById("roll").value;
  let roll3="00"+document.getElementById("Year").value;
  
 
  document.querySelector("#img1").setAttribute("src", "http://juadmission.jdvu.ac.in/jums_exam/student_photos/" + roll3+roll1 + roll2 + ".jpg");
  document.querySelector("#img2").setAttribute("src", "http://juadmission.jdvu.ac.in/jums_exam/student_photos/" + roll3+roll1 + roll2 + ".jpeg");


}

document.querySelector("button").addEventListener("click", function () {
  submit();
})

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    submit();
  }
})