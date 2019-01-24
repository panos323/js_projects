//FOR EACH STUDENT 
function getStudentInfo(elem) {
    var container = document.getElementById("container");
    var student = "<p>" + "Student: " + elem.firstname + " " + elem.lastname + ", Grade: " + elem.grade + ", middle score "  + elem.midterm_score + " and final score: " + elem.final_score + " .He is studying at " + " <b>" + elem.school +  "</b>" + " school." + "</p>";
    container.innerHTML = container.innerHTML + student;
   // console.log(container.innerHTML)
}//function getStudentInfo(elem)
//FOR EACH STUDENT 




function getGradeStudentInfo(elem) {
    var containerGrades = document.getElementById("containerGrades");
        containerGrades.style.border = "2px solid red";
        containerGrades.style.padding = "20px";
        containerGrades.style.marginBottom = "30px";

    var gradeeResuTitle = document.querySelector(".gradeeResuTitle");
        gradeeResuTitle.innerHTML = "Sorted Grades";
        gradeeResuTitle.style.textAlign = "center";
        gradeeResuTitle.style.backgroundColor = "lightblue"; 

    var GradesResults = document.querySelector(".GradesResults").innerHTML;
        GradesResults = "<p>" +  elem.firstname + " " + elem.lastname + " " +  "having grades  " + elem.final_score + "</p>";
        containerGrades.innerHTML = containerGrades.innerHTML + GradesResults;
}



//FIND SCHOOL WITH PROMPT
function searchStudents(item) {
    var person = prompt("Enter school you are looking from");
    item.school = ["Franklin","Thoreau"];
   
    if (person == item.school[0].toLowerCase() || person == item.school[1].toLowerCase()) {
        alert("This school exist");
        return true;
    } else {
        alert("This school doesnt exist")
    }

}//function searchStudents(item)
//FIND SCHOOL WITH PROMPT




//STUDENTS WHO PASS
function getPassing(elem) {
        var passingStd =  (Number(elem.grade));

        var passAndFail = document.getElementById("passAndFail");
        var studentsWhoPassed = document.querySelector(".studentsWhoPassed");
        var studentsWhoFailed = document.querySelector(".studentsWhoFailed");

        if (passingStd  >= 10) {
            studentsWhoPassed = "<p class='passingStd'>" + "Student with passing grade is: "  + elem.firstname + " " + elem.lastname + " with score of " + passingStd + "</p>";
            passAndFail.innerHTML = passAndFail.innerHTML + studentsWhoPassed;
        } else {
            studentsWhoFailed = "<p class='failingStd'>" +  "Student with failed grade is:  "  + elem.firstname + " " + elem.lastname + " with score of " + passingStd + "</p>";
            passAndFail.innerHTML = passAndFail.innerHTML + studentsWhoFailed;
        }
}
//STUDENTS WHO PASS




//SORT STUDENTS BY GRADE
function sortStudentsByGrade(item) {
    return item.final_score;
}
//SORT STUDENTS BY GRADE



//GROUP STUDENTS BY SCHOOL
function groupStudentsBySchool(item) {
    return item.school;
}
//GROUP STUDENTS BY SCHOOL




//ASSIGN STUDENTS GRADES
function assignGradees(item) {
    var gradeABC = (item.midterm_score + item.final_score) / 2;
    var letterGrade;

    if (gradeABC <= 64) {
        letterGrade = "F";
    } else if (gradeABC > 64 && gradeABC <= 69) {
        letterGrade = "D";
    } else if (gradeABC >= 70 && gradeABC <= 79) {
        letterGrade = "C";
    }  else if (gradeABC >= 80 && gradeABC <= 89) {
        letterGrade = "B";
    }  else if (gradeABC >= 90) {
        letterGrade = "A";
    }//if

    
    var containerGradesABC = document.getElementById("containerGradesABC");
    containerGradesABC.innerHTML = containerGradesABC.innerHTML + "<p>" + item.firstname + " "+  item.lastname + " has a grade: " + letterGrade + "</p>";
    containerGradesABC.style.border = "2px solid blue";   
    containerGradesABC.style.padding = "20px";
    containerGradesABC.style.margin = "20px 0";

    var stdMarksTitle = document.querySelector(".stdMarksTitle");
        stdMarksTitle.innerHTML = "Marks of Students";
        stdMarksTitle.style.textAlign = "center";
        stdMarksTitle.style.backgroundColor = "lightgreen";

}//function assignGradees(item)
//ASSIGN STUDENTS GRADES


//FIND AVERAGE SCORE OF ALL STUDENTS
function middleScoreFnc(elem) {
    avg = (elem.midterm_score + elem.final_score) / 2;
    _.extend(elem, {"average_score": avg});
    return "<p>" + avg + "</p>";
}
//FIND AVERAGE SCORE OF ALL STUDENTS
  


window.addEventListener("load", function(e) {
    numOfStudents = document.getElementById("numstudents");
    numOfStudents.addEventListener("mouseenter",function(e) {
        e.target.removeEventListener(e.type, arguments.callee);
        numOfStudents.innerHTML = numOfStudents.innerHTML + _.size(students);
    })
   // var numStdTotal =  numOfStudents.innerHTML;
   // console.log(numStdTotal)
   var eachStudent = _.each(students,getStudentInfo);
   //var elemFind = _.find(students,searchStudents);
   var searchBtn = document.querySelector(".findDetails");
   var elemFind = searchBtn.addEventListener("click",searchStudents)
   var perfectScore =  document.querySelector(".findPerfectStore");
   var findPerfectScore = perfectScore.addEventListener("click",function() {
        var grades = _.pluck(students,"final_score");
        gradesMax = Math.max(...grades);    
        //check if there is score 100 at any student
        if (_.contains(grades,100)) {
                document.querySelector(".AllGrades").innerHTML = "These are the  students grades "   + grades;
                document.querySelector(".AllGrades").style.backgroundColor = "grey";
                document.querySelector(".AllGrades").style.color = "white";
                document.querySelector(".AllGrades").style.textAlign = "center";

                document.querySelector(".ThePerfectGrade").innerHTML = "There is a perfect score!"   + gradesMax;
                document.querySelector(".ThePerfectGrade").style.backgroundColor = "green";
                document.querySelector(".ThePerfectGrade").style.color = "white";
                document.querySelector(".ThePerfectGrade").style.textAlign = "center";

            }//end if
        //check if there is score 100 at any student
   })// on click

   var StudentsSucceced = document.querySelector(".StudentsSucceced");
   var passingScores = StudentsSucceced.addEventListener("click",function() {
        var passingStd =  _.each(students,getPassing);
   })//click

   var sortedBtn = document.querySelector(".SortedBtn");
   var sortScores = sortedBtn.addEventListener("click",function(e) {
        e.target.removeEventListener(e.type, arguments.callee);
       var sortedData = _.sortBy(students,sortStudentsByGrade);
            _.each(sortedData, getGradeStudentInfo)
   })//click



   var SchooldBtn = document.querySelector(".SchooldBtn");
   var clickSchool = SchooldBtn.addEventListener("click", function(e) {
        e.target.removeEventListener(e.type, arguments.callee);
        var groupedSch = _.groupBy(students, groupStudentsBySchool)

       

        for (i in groupedSch) {
            _.each(groupedSch[i],function(elem) {
                var containerGroupSchools =  document.getElementById("containerGroupSchools");
                    containerGroupSchools.style.border = "2px solid green";
                    containerGroupSchools.style.padding = "20px";
                    containerGroupSchools.style.margin = "20px 0";

                var SchoolsGrouping = document.querySelector(".SchoolsGrouping");
                    SchoolsGrouping.innerHTML = "Students By School";
                    SchoolsGrouping.style.textAlign = "center";
                    SchoolsGrouping.style.backgroundColor = "orangered";

                var SchlResylt = document.querySelector(".SchlResylt")
                SchoolsGrouping = "<p>" + "Students that go to " + "<u>" + i + "</u>"  + " school are " + elem.firstname + " " + elem.lastname  +  "</p>";
                containerGroupSchools.innerHTML = containerGroupSchools.innerHTML + SchoolsGrouping;
            });
        }//for

   })//click


   var studentsMarks = document.querySelector(".studentsMarks");
   var studentsMarksBtn = studentsMarks.addEventListener("click", function(e) {
        e.target.removeEventListener(e.type, arguments.callee);
       var finalGradesStd = _.map(students,assignGradees)
   });//click


   var firstLastMark = document.querySelector(".firstLastMark");
       firstLastMark.addEventListener("click",function() {
           var final_scoree = _.pluck(students,"final_score");
           var sortedFinalScore = _.sortBy(final_scoree);
           console.log("Sorted" + sortedFinalScore)
           console.log(final_scoree);

            alert("Last final score is " + _.first(sortedFinalScore));
            alert("First final score is " + _.last(sortedFinalScore));
       });//click

    
    var findKeys = document.querySelector(".findKeys");
        findKeys.addEventListener("click",function() {
            var keysStd = _.keys(students[0]);
            var valuesStd = _.values(students[0]);
            alert("Student object keys: " + keysStd);
            alert("Students object values are in form of: " + valuesStd)

        }); //click

    
    var AverageScore = document.querySelector(".AverageScore");
        AverageScore.addEventListener("click",function(e) {
            e.target.removeEventListener(e.type, arguments.callee);
            var containerAverageScore = document.getElementById("containerAverageScore");
            var detailsAvg = _.each(students,middleScoreFnc)
                console.log(avg);
                containerAverageScore.innerHTML = "<p>" + "Average score of all students is " + avg + "</p>";
                containerAverageScore.style.color = "orangered";
                containerAverageScore.style.textAlign = "center";

        })//click


});//PAGE LOADED















