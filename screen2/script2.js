let a = setInterval(function hello1(){
    if(document.getElementById('status1').innerHTML == 'Status:2'){
        document.getElementById('cbs1').classList.add('cbs-on');
        document.getElementById('cbs1').classList.remove('cbs-off');
    }
    else if(document.getElementById('status1').innerHTML == 'Status:1'){
        document.getElementById('cbs1').classList.add('cbs-off');
        document.getElementById('cbs1').classList.remove('cbs-on');
    }
}, 300)

let b = setInterval(function hello2(){
    if(document.getElementById('status2').innerHTML == 'Status:2'){
        document.getElementById('cbs2').classList.add('cbs-on');
        document.getElementById('cbs2').classList.remove('cbs-off');
    }
    else if(document.getElementById('status1').innerHTML == 'Status:1'){
        document.getElementById('cbs2').classList.add('cbs-off');
        document.getElementById('cbs2').classList.remove('cbs-on');
    }
}, 300)

let c = setInterval(function hello3(){
    if(document.getElementById('status3').innerHTML == 'Status:2'){
        document.getElementById('cbs3').classList.add('cbs-on');
        document.getElementById('cbs3').classList.remove('cbs-off');
    }
    else if(document.getElementById('status3').innerHTML == 'Status:1'){
        document.getElementById('cbs3').classList.add('cbs-off');
        document.getElementById('cbs3').classList.remove('cbs-on');
    }
}, 300)

let d = setInterval(function hello4(){
    if(document.getElementById('status4').innerHTML == 'Status:2'){
        document.getElementById('cbs4').classList.add('cbs-on');
        document.getElementById('cbs4').classList.remove('cbs-off');
    }
    else if(document.getElementById('status4').innerHTML == 'Status:1'){
        document.getElementById('cbs4').classList.add('cbs-off');
        document.getElementById('cbs4').classList.remove('cbs-on');
    }
}, 300)

let e = setInterval(function hello5(){
    if(document.getElementById('status5').innerHTML == 'Status:2'){
        document.getElementById('cbs5').classList.add('cbs-on');
        document.getElementById('cbs5').classList.remove('cbs-off');
    }
    else if(document.getElementById('status5').innerHTML == 'Status:1'){
        document.getElementById('cbs5').classList.add('cbs-off');
        document.getElementById('cbs5').classList.remove('cbs-on');
    }
}, 300)

let f = setInterval(function hello6(){
    if(document.getElementById('status6').innerHTML == 'Status:2'){
        document.getElementById('cbs6').classList.add('cbs-on');
        document.getElementById('cbs6').classList.remove('cbs-off');
    }
    else if(document.getElementById('status6').innerHTML == 'Status:1'){
        document.getElementById('cbs6').classList.add('cbs-off');
        document.getElementById('cbs6').classList.remove('cbs-on');
    }
}, 300)