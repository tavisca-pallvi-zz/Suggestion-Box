var student = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya", "Aarushi", "Alien", "Amit", "Aakash", "Arial", "Aeee"];    

function search() {
    student.sort();
    var f = 0;
    var c = 1;
   
    document.addEventListener("click", function (e) {
        document.getElementById("ulist").innerHTML = '';
    });
    var elem = document.getElementById("main").value;
    console.log(elem);
    document.getElementById("ulist").innerHTML = '';
    if (elem == "") {
        document.getElementById("ulist").innerHTML = '';
    }
    else {
        for (var i = 0; i < student.length; i++) {
            elem = elem.toLowerCase();
            student[i] = student[i].toLowerCase();
            if (student[i].substr(0, elem.length).toLowerCase() == elem.toLowerCase()) {
                //if (c <= 5) {
                    var list = document.getElementById("ulist");
                    var li = document.createElement("LI");
                    document.createElement("LI");
                    var t = document.createTextNode(student[i]);
                    li.appendChild(t);
                    c++;
                    document.getElementById("ulist").appendChild(li);
                    li.addEventListener("click", function () {
                      
                        document.getElementById("main").value = this.innerHTML;
                        document.getElementById("ulist").innerHTML = " ";
                    });
                //}
                
                f = 1;
            }
        }
        
        if (f == 0) {
            var list = document.getElementById("ulist");
            var li = document.createElement("LI");
            var t = document.createTextNode("No Record Found");
            li.appendChild(t);
            document.getElementById("ulist").appendChild(li);
            li.addEventListener("click", function () {
                document.getElementById("main").value = this.innerHTML;
                document.getElementById("ulist").innerHTML = " ";
            });
        }
    }
   }
