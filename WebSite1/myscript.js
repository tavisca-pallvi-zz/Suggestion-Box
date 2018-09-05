var student = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya", "Aarushi", "Alien", "Amit", "Aakash", "Arial", "Aeee"];
function cleara() {
    //debugger;
    document.getElementById("ulist").innerHTML = '';
    document.getElementById("main").value = '';
    document.getElementById("cross").style.visibility = 'hidden';

}
function search(event) {
   

    //var listItems=document.getElementById("ulist").innerHTML = " ";
    document.getElementById("cross").style.visibility = 'visible';
    console.log(" ");
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
        document.getElementById("ulist").style.overflowX = 'hidden';
        document.getElementById("ulist").style.overflowY = 'auto';
        for (var i = 0; i < student.length; i++) {
            elem = elem.toLowerCase();
            student[i] = student[i].toLowerCase();
            if (student[i].toLowerCase().includes(elem.toLowerCase())) {
                //var list = document.getElementById("ulist");
                var li=  document.createElement("LI");
                li.setAttribute("class", "list-items");
                var t = document.createTextNode(student[i]);
                li.appendChild(t);
                document.getElementById("ulist").appendChild(li);

                li.addEventListener("click", function () {

                    document.getElementById("main").value = this.innerHTML;
                    document.getElementById("ulist").innerHTML = " ";

                });

                li.addEventListener("onkeyup", function () {

                    document.getElementById("main").value = this.innerHTML;
                    document.getElementById("ulist").innerHTML = " ";
                });
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
    var arrow = 0,prevevent = 0, f = 0;
    this.addEventListener("keyup", function (event) {
        var listitem = document.getElementsByClassName("list-items");
        debugger;
        if (event.which == 38 || event.which == 40 || event.which == 13) {
            if (event.which == 38) {
                listitem[arrow].removeAttribute("id");
                //if (f == 1) {
                //    arrow = prevevent - 2;
                //    f = 0;
                //}
                //    else
                //arrow = prevevent;
                arrow = arrow - 1;
       
                listitem[arrow].setAttribute("id", "bsel");
              
                //arrow--;
                //prevevent = arrow;
            }
            else if (event.which == 40) {
                arrow = prevevent;
                listitem[arrow].setAttribute("id", "sel");
                arrow++;
                f = 1;
                prevevent = arrow;
                val = arrow - 1;
                listitem[val].removeAttribute("id");
            }
            //val = arrow - 1;

            //
        }
        //listitem[arrow - 1].setAttribute("id", "unsel");
    });
   
    }
