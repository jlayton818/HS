
function ready() {
    console.log("Page Ready")
    let uscap = document.forms.uscap;  // favs is the name of the form
    let capitalEl = uscap.elements.capital;
    let capitalUS = uscap.elements.uscapcheck;
    let alcap = document.forms.alcap;  // favs is the name of the form
    let Alcapital = alcap.elements.alcapital;
    let capitalAl = alcap.elements.alcapcheck;
    // let akcap = document.forms.akcap;
    // let capital = akcap.elements.akcapital;
    // let capitalak = akcap.elements.akcapcheck;
    // let azcap = document.forms.azcap;
    // let azcapital = azcap.elements.capital;
    // let capitalaz = azcap.elements.azcapcheck;      
    // let arcap = document.forms.arcap;
    // let arcapital = arcap.elements.capital;
    // let capitalar = arcap.elements.akcapcheck;   
    // let cacap = document.forms.cacap;
    // let cacapital = cacap.elements.capital;
    // let capitalca = cacap.elements.cacapcheck;   
    // let cocap = document.forms.cocap;
    // let cocapital = cocap.elements.capital;
    // let capitalco = cocap.elements.cocapcheck;   
    // let ctcap = document.forms.ctcap;
    // let ctcapital = ctcap.elements.capital;
    // let capitalct = ctcap.elements.ctcapcheck;   
    // let akcap = document.forms.akcap;
    // let akcapital = akcap.elements.capital;
    // let capitalak = akcap.elements.akcapcheck;   
    // let akcap = document.forms.akcap;
    // let akcapital = akcap.elements.capital;
    // let capitalak = akcap.elements.akcapcheck;   
    // let akcap = document.forms.akcap;
    // let akcapital = akcap.elements.capital;
    // let capitalak = akcap.elements.akcapcheck;   
    // let akcap = document.forms.akcap;
    // let akcapital = akcap.elements.capital;
    // let capitalak = akcap.elements.akcapcheck;   
    // let akcap = document.forms.akcap;
    // let akcapital = akcap.elements.capital;
    // let capitalak = akcap.elements.akcapcheck;   
    // let akcap = document.forms.akcap;
    // let akcapital = akcap.elements.capital;
    // let capitalak = akcap.elements.akcapcheck;   
    // let akcap = document.forms.akcap;
    // let akcapital = akcap.elements.capital;
    // let capitalak = akcap.elements.akcapcheck;   
    // let akcap = document.forms.akcap;
    // let akcapital = akcap.elements.capital;
    // let capitalak = akcap.elements.akcapcheck;   
    // let akcap = document.forms.akcap;
    // let akcapital = akcap.elements.capital;
    // let capitalak = akcap.elements.akcapcheck;   

    // color is one of the input in the favs form
    sub.onclick = function() {
        if (capitalEl.value == "Washington D.C.") {
            console.log("hide id")
            document.getElementById('textInput').className = "hide";
            score = score + 100;
        } else {
            alert("The capital is Washington D.C.");
            score = score - 100;
        }
        console.log("submit button clicked")
        capitalEl.value = ""
    }
    sub.onclick = function() {
        if (Alcapital.value == "Montgomery") {
            console.log("hide id")
            document.getElementById('altextInput').className = "hide";
            score = score + 100;
        } else {
            alert("The capital is Montgomery")
        }
        console.log("submit button clicked")
        AlCapital.value = ""
    }
        
       


    al.onclick = function() {
        console.log("Bama");
        document.getElementById('altextInput').className="show";
    }
    ak.onclick = function() {
        console.log("ALaska");
        document.getElementById('aktextInput').className="show";
    }
    az.onclick = function() {
        console.log("Arizone");
        document.getElementById('aztextInput').className="show";
    }
    ar.onclick = function() {
        console.log("ArKansas");
        document.getElementById('artextInput').className="show";
    }
    ca.onclick = function() {
        console.log("Cali");
        document.getElementById('catextInput').className="show";
    }
    co.onclick = function() {
        console.log("Color");
        document.getElementById('cotextInput').className="show";
    }
    ct.onclick = function() {
        console.log("Connecti");
        document.getElementById('cttextInput').className="show";
    }
    de.onclick = function() {
        console.log("DEla");
        document.getElementById('detextInput').className="show";
    }
    dc.onclick = function() {
        console.log("Cap");
        document.getElementById('textInput').className="show";
        
    }
    fl.onclick = function() {
        console.log("Gators");
        document.getElementById('catextInput').className="show";
    }
    ga.onclick = function() {
        console.log("Georgia");
        document.getElementById('catextInput').className="show";
    }
    hi.onclick = function() {
        console.log("Hawaii");
        document.getElementById('catextInput').className="show";
    }
    id.onclick = function() {
        console.log("Idaho");
        document.getElementById('catextInput').className="show";
    }
    il.onclick = function() {
        console.log("illinouis");
        document.getElementById('catextInput').className="show";
    }
    IN.onclick = function() {
        console.log("Indiana");
        document.getElementById('catextInput').className="show";
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