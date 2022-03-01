var xhr = new XMLHttpRequest();
var docs = document.getElementById('all-course');
var cont = '';

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        for (i in myObj.all_course) {
            var icon = myObj.all_course[i].course_code.slice(0, 1);
            if (icon == 'P') {
                icon = 'fas fa-atom';
            } else if (icon == 'C') {
                icon = 'fas fa-flask';
            } else if (icon == 'M') {
                icon = 'fas fa-square-root-variable';
            } else {
                icon = 'fas fa-e'
            }
            cont += '<div class="card2"><div class="overlay"><div class="left"><i class="' + icon + '"></i></div><div class="right"><h1>' + myObj.all_course[i].course_title + '</h1><span>Course Code: ' + myObj.all_course[i].course_code + '</span><span>Credit: ' + myObj.all_course[i].credit + '</span><button id="' + myObj.all_course[i].course_code + '" onclick="goTo(this)">Continue</button></div></div></div>'
        }
        docs.innerHTML = cont;
    }
};

xhr.open("GET", "json/all course 18-19.json", true);
xhr.send();

function goTo(val) {
    alert(val.id);
}