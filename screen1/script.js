function showUser(str) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementsByClassName("table")[0].innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "index.php?q=" + str, true);
  xmlhttp.send();
}

let a = setInterval(function showUser() {
  let substation=document.getElementById('substation').value;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementsByClassName("table")[0].innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "index.php?q=" + substation, true);
  xmlhttp.send();
}, 2000);

function showmenu()
{
  if (document.getElementById('menu1').classList.contains('menu-on') == false){
    document.getElementById('menu1').classList.toggle('menu-on');
  }
  else{
    document.getElementById('menu1').classList.remove('menu-on');
  }
}

function showoptions()
{
  if(document.getElementById('download-items').classList.contains('download-options-on') == false){
    document.getElementById('download-items').classList.toggle('download-options-on');
  }
  else{
    document.getElementById('download-items').classList.remove('download-options-on');
  }
}