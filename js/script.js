var xhr = new XMLHttpRequest();
var docs = document.getElementById('all-course');
var cont = '';

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        for (i in myObj.all_semester) {
            var cIni = parseInt(myObj.semester_ini[i]);
            cont += '<div class="card"><div class="overlay"><h1>' + myObj.all_semester[i] + '</h1><div class="grid3 cGrid">';

            for (j in myObj.all_course) {
                var cCode = parseInt(myObj.all_course[j].course_code.slice(4));

                if (cCode >= cIni && cCode < cIni + 50) {
                    cont += '<span>' + myObj.all_course[j].course_code + '</span>';
                }
            }

            cont += '</div><button id="' + myObj.semester_ini[i] + '" onclick="goTo(this)">Continue</button></div></div>';
        }
        docs.innerHTML = cont;
    }
};

xhr.open("GET", "json/all course 18-19.json", true);
xhr.send();


function goTo(val) {
    alert(val.id);
}