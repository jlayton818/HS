let form = document.getElementById("DCCap");

function ready() {


    al.onclick = function() {
        console.log("Bama");
    }
    ak.onclick = function() {
        console.log("ALaska");
    }
    az.onclick = function() {
        console.log("Arizone");
    }
    ar.onclick = function() {
        console.log("ArKansas");
    }
    ca.onclick = function() {
        console.log("Cali");
    }
    co.onclick = function() {
        console.log("Color");
    }
    ct.onclick = function() {
        console.log("Connecti");
    }
    de.onclick = function() {
        console.log("DEla");
    }
    dc.onclick = function() {
        console.log("Cap");
        document.getElementById('textInput').className="show";
        if (form.inputfield.value == document.getElementById("DCCap")) {
            score = score + 100;
        }
    }
    fl.onclick = function() {
        console.log("Gators");
    }
    ga.onclick = function() {
        console.log("Georgia");
    }
    hi.onclick = function() {
        console.log("Hawaii");
    }
    id.onclick = function() {
        console.log("Idaho");
    }
    il.onclick = function() {
        console.log("illinouis");
    }
    IN.onclick = function() {
        console.log("Indiana");
    }
    ia.onclick = function() {
        console.log("iowa");
    }
    ks.onclick = function() {
        console.log("knasas");
    }
    ky.onclick = function() {
        console.log("kentucky");
    }
    la.onclick = function() {
        console.log("louisnia");
    }
    me.onclick = function() {
        console.log("miane");
    }
    md.onclick = function() {
        console.log("maryland");
    }
    ma.onclick = function() {
        console.log("mass");
    }
    mi.onclick = function() {
        console.log("michigan");
    }
    mn.onclick = function() {
        console.log("minnisota");
    }
    ms.onclick = function() {
        console.log("Ole miss");
    }
    mo.onclick = function() {
        console.log("mizzou");
    }
    mt.onclick = function() {
        console.log("montant");
    }
    ne.onclick = function() {
        console.log("nebraska");
    }
    nv.onclick = function() {
        console.log("nevada");
    }
    nh.onclick = function() {
        console.log("new hamp");
    }
    nj.onclick = function() {
        console.log("new jersey");
    }
    nm.onclick = function() {
        console.log("new mex");
    }
    ny.onclick = function() {
        console.log("new yoek");
    }
    nc.onclick = function() {
        console.log("north carolina");
    }
    nd.onclick = function() {
        console.log("north dakota");
    }
    oh.onclick = function() {
        console.log("OHio");
    }
    ok.onclick = function() {
        console.log("Oklahoma");
    }
    or.onclick = function() {
        console.log("Oregon");
    }
    pa.onclick = function() {
        console.log("penn");
    }
    ri.onclick = function() {
        console.log("Small");
    }
    sc.onclick = function() {
        console.log("South Carolina");
    }
    sd.onclick = function() {
        console.log("South Dakota");
    }
    tn.onclick = function() {
        console.log("Tenn");
    }
    tx.onclick = function() {
        console.log("yee haw");
    }
    ut.onclick = function() {
        console.log("utah");
    }
    vt.onclick = function() {
        console.log("vermont");
    }
    va.onclick = function() {
        console.log("virginia");
    }
    wa.onclick = function() {
        console.log("wash");
    }
    wv.onclick = function() {
        console.log("west virgiina");
    }
    wi.onclick = function() {
        console.log("wisconsin");
    }
    wy.onclick = function() {
        console.log("wyoming");
    }    
}
// function onButtonClick(){
//     document.getElementById('textInput').className="show";
//   } 

let score = 0
function Score(){
    score++;
}


document.addEventListener("DOMContentLoaded", ready);