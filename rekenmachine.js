

function telop(){
    console.log('tel op werkt')
    //hierboven stuurt log naar console tabblad in webpagina, rechtermuisknop, inspecteren
    var waarde1 = document.getElementById('invoer1').value;
    var a = Number.parseInt(waarde1)
    var waarde2 = document.getElementById('invoer2').value;
    var b = Number.parseInt(waarde2)
    var waarde3 = a + b

    alert(waarde3);

}


function telaf(){
    console.log('tel af werkt')
    var waarde4 = document.getElementById('invoer1').value;
    var c = Number.parseInt(waarde4)
    var waarde5 = document.getElementById('invoer2').value;
    var d = Number.parseInt(waarde5)
    var waarde6 = c - d

    alert(waarde6);

}

function keer(){
    console.log('keer werkt')
    var waarde7 = document.getElementById('invoer1').value;
    var e = Number.parseInt(waarde7)
    var waarde8 = document.getElementById('invoer2').value;
    var f = Number.parseInt(waarde8)
    var waarde9 = e * f

    alert(waarde9);

}

function delen(){
    console.log('delen werkt')
    var waarde10 = document.getElementById('invoer1').value;
    var g = Number.parseInt(waarde10)
    var waarde11 = document.getElementById('invoer2').value;
    var h = Number.parseInt(waarde11)
    var waarde12 = g / h

    alert(waarde12);

}