
let obj = {
  "1": "002110501",
  "2": "002110701",
  "3": "002110601",
  "4": "002110801",
  "5": "002111201",
  "6": " ",
  "7": "002110301",
  "8": "002110901",
  "9": "002111701",

  
 
 
}

function submit() {

    let roll1=obj[document.getElementById("dept").value];
    let roll2=document.getElementById("roll").value; 
   document.querySelector("#img1").setAttribute("src", "http://juadmission.jdvu.ac.in/jums_exam/student_photos/"+roll1+roll2+ ".jpg");
   document.querySelector("#img2").setAttribute("src", "http://juadmission.jdvu.ac.in/jums_exam/student_photos/"+roll1 +roll2+ ".jpeg");

   
}

document.querySelector("button").addEventListener("click",function () {
    submit();
})

document.addEventListener("keydown",function (e) {
   if (e.key=="Enter") {
       submit();
   }
})
