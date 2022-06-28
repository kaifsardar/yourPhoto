
    function submit() {
        let roll;
   roll=document.getElementById("roll").value; 
   document.querySelector("#img1").setAttribute("src", "http://juadmission.jdvu.ac.in/jums_exam/student_photos/002110501" + roll + ".jpg");
   document.querySelector("#img2").setAttribute("src", "http://juadmission.jdvu.ac.in/jums_exam/student_photos/002110501" + roll + ".jpeg");
   
}
