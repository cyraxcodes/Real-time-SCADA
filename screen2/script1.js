// function colourchange() {

//     if (document.getElementById("cbs1").classList.contains("cbs-off"))
//     {
//         document.getElementById("cbs1").classList.toggle("cbs-on")
//         document.getElementById("cbs1").classList.remove("cbs-off")
//     }
//     else
//     {
//         document.getElementById("cbs1").classList.toggle("cbs-off")
//         document.getElementById("cbs1").classList.remove("cbs-on")
//     }
// }

setInterval(function getdata() {
    var xmlhttp1 = new XMLHttpRequest();
    var xmlhttp2 = new XMLHttpRequest();
    var xmlhttp3 = new XMLHttpRequest();
    var xmlhttp4 = new XMLHttpRequest();
    var xmlhttp5 = new XMLHttpRequest();
    var xmlhttp6 = new XMLHttpRequest();

    xmlhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("index1").innerHTML = this.responseText;
        }
    };
    xmlhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("index2").innerHTML = this.responseText;
        }
    };
    xmlhttp3.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("index3").innerHTML = this.responseText;
        }
    };
    xmlhttp4.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("index4").innerHTML = this.responseText;
        }
    };
    xmlhttp5.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("index5").innerHTML = this.responseText;
        }
    };
    xmlhttp6.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("index6").innerHTML = this.responseText;
        }
    };

    xmlhttp1.open("GET", "index1.php", true);
    xmlhttp1.send();
    xmlhttp2.open("GET", "index2.php", true);
    xmlhttp2.send();
    xmlhttp3.open("GET", "index3.php", true);
    xmlhttp3.send();
    xmlhttp4.open("GET", "index4.php", true);
    xmlhttp4.send();
    xmlhttp5.open("GET", "index5.php", true);
    xmlhttp5.send();
    xmlhttp6.open("GET", "index6.php", true);
    xmlhttp6.send();
}, 200)

function showmenu()
{
  if (document.getElementById('menu1').classList.contains('menu-on') == false){
    document.getElementById('menu1').classList.toggle('menu-on');
  }
  else{
    document.getElementById('menu1').classList.remove('menu-on');
  }
}