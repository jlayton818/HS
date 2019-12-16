
function ready() {
    console.log("Page Ready")
    let uscap = document.forms.uscap;  // favs is the name of the form
    let capitalEl = uscap.elements.capital;
    let capitalUS = uscap.elements.uscapcheck;
    let alcap = document.forms.alcap;  // favs is the name of the form
    let Alcapital = alcap.elements.alcapital;
    let capitalAl = alcap.elements.alcapcheck;
    let akcap = document.forms.akcap;
    let capital = akcap.elements.akcapital;
    let capitalak = akcap.elements.akcapcheck;
    let azcap = document.forms.azcap;
    let azcapital = azcap.elements.capital;
    let capitalaz = azcap.elements.azcapcheck;      
    let arcap = document.forms.arcap;
    let arcapital = arcap.elements.capital;
    let capitalar = arcap.elements.akcapcheck;   
    let cacap = document.forms.cacap;
    let cacapital = cacap.elements.capital;
    let capitalca = cacap.elements.cacapcheck;   
    let cocap = document.forms.cocap;
    let cocapital = cocap.elements.capital;
    let capitalco = cocap.elements.cocapcheck;   
    let ctcap = document.forms.ctcap;
    let ctcapital = ctcap.elements.capital;
    let capitalct = ctcap.elements.ctcapcheck;   
    let decap = document.forms.decap;
    let decapital = decap.elements.capital;
    let capitalde = decap.elements.decapcheck;   
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
        } 
        if (capitalEl.value !== "Washington D.C.") {
            console.log("submit button clicked")
            capitalEl.value = ""
            alert("The Capital is Washington D.C.")
        }
        if (Alcapital.value == "Montgomery") {
            console.log("hide id")
            document.getElementById('altextInput').className = "hide";
            score = score + 100;
        } 
        if (Alcapital.value !== "Montgomery") {
            console.log("submit button clicked")
            Alcapital.value = ""
            alert("The Capital is Montgomery")
        }
        // if (capitalEl.value == "Washington D.C.") {
        //     console.log("hide id")
        //     document.getElementById('textInput').className = "hide";
        //     score = score + 100;
        // } 
        // if (capitalEl.value !== "Washington D.C.") {
        //     console.log("submit button clicked")
        //     capitalEl.value = ""
        //     alert("The Capital is Washington D.C.")
        // }
        // if (capitalEl.value == "Washington D.C.") {
        //     console.log("hide id")
        //     document.getElementById('textInput').className = "hide";
        //     score = score + 100;
        // } 
        // if (capitalEl.value !== "Washington D.C.") {
        //     console.log("submit button clicked")
        //     capitalEl.value = ""
        //     alert("The Capital is Washington D.C.")
        // }
        // if (capitalEl.value == "Washington D.C.") {
        //     console.log("hide id")
        //     document.getElementById('textInput').className = "hide";
        //     score = score + 100;
        // } 
        // if (capitalEl.value !== "Washington D.C.") {
        //     console.log("submit button clicked")
        //     capitalEl.value = ""
        //     alert("The Capital is Washington D.C.")
        // }
        // if (capitalEl.value == "Washington D.C.") {
        //     console.log("hide id")
        //     document.getElementById('textInput').className = "hide";
        //     score = score + 100;
        // } 
        // if (capitalEl.value !== "Washington D.C.") {
        //     console.log("submit button clicked")
        //     capitalEl.value = ""
        //     alert("The Capital is Washington D.C.")
        // }
        // if (capitalEl.value == "Washington D.C.") {
        //     console.log("hide id")
        //     document.getElementById('textInput').className = "hide";
        //     score = score + 100;
        // } 
        // if (capitalEl.value !== "Washington D.C.") {
        //     console.log("submit button clicked")
        //     capitalEl.value = ""
        //     alert("The Capital is Washington D.C.")
        // }
        // if (capitalEl.value == "Washington D.C.") {
        //     console.log("hide id")
        //     document.getElementById('textInput').className = "hide";
        //     score = score + 100;
        // } 
        // if (capitalEl.value !== "Washington D.C.") {
        //     console.log("submit button clicked")
        //     capitalEl.value = ""
        //     alert("The Capital is Washington D.C.")
        // }
        // if (capitalEl.value == "Washington D.C.") {
        //     console.log("hide id")
        //     document.getElementById('textInput').className = "hide";
        //     score = score + 100;
        // } 
        // if (capitalEl.value !== "Washington D.C.") {
        //     console.log("submit button clicked")
        //     capitalEl.value = ""
        //     alert("The Capital is Washington D.C.")
        // }
        // if (capitalEl.value == "Washington D.C.") {
        //     console.log("hide id")
        //     document.getElementById('textInput').className = "hide";
        //     score = score + 100;
        // } 
        // if (capitalEl.value !== "Washington D.C.") {
        //     console.log("submit button clicked")
        //     capitalEl.value = ""
        //     alert("The Capital is Washington D.C.")
        // }
        // if (capitalEl.value == "Washington D.C.") {
        //     console.log("hide id")
        //     document.getElementById('textInput').className = "hide";
        //     score = score + 100;
        // } 
        // if (capitalEl.value !== "Washington D.C.") {
        //     console.log("submit button clicked")
        //     capitalEl.value = ""
        //     alert("The Capital is Washington D.C.")
        // }
        // if (capitalEl.value == "Washington D.C.") {
        //     console.log("hide id")
        //     document.getElementById('textInput').className = "hide";
        //     score = score + 100;
        // } 
        // if (capitalEl.value !== "Washington D.C.") {
        //     console.log("submit button clicked")
        //     capitalEl.value = ""
        //     alert("The Capital is Washington D.C.")
        // }
        

    }
    // sub.onclick = function() {
    //     if (Alcapital.value == "Montgomery") {
    //         console.log("hide id")
    //         document.getElementById('altextInput').className = "hide";
    //         score = score + 100;
    //     } else {
    //         alert("The capital is Montgomery")
    //     }
    //     console.log("submit button clicked")
    //     AlCapital.value = ""
    // }
        
       


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
        document.getElementById('fltextInput').className="show";
    }
    ga.onclick = function() {
        console.log("Georgia");
        document.getElementById('gatextInput').className="show";
    }
    hi.onclick = function() {
        console.log("Hawaii");
        document.getElementById('hitextInput').className="show";
    }
    id.onclick = function() {
        console.log("Idaho");
        document.getElementById('idtextInput').className="show";
    }
    il.onclick = function() {
        console.log("illinouis");
        document.getElementById('iltextInput').className="show";
    }
    IN.onclick = function() {
        console.log("Indiana");
        document.getElementById('INtextInput').className="show";
    }
    ia.onclick = function() {
        console.log("iowa");
        document.getElementById('iatextInput').className="show";
    }
    ks.onclick = function() {
        console.log("knasas");
        document.getElementById('kstextInput').className="show";
    }
    ky.onclick = function() {
        console.log("kentucky");
        document.getElementById('kytextInput').className="show";
    }
    la.onclick = function() {
        console.log("louisnia");
        document.getElementById('latextInput').className="show";
    }
    me.onclick = function() {
        console.log("miane");
        document.getElementById('metextInput').className="show";
    }
    md.onclick = function() {
        console.log("maryland");
        document.getElementById('mdtextInput').className="show";
    }
    ma.onclick = function() {
        console.log("mass");
        document.getElementById('matextInput').className="show";
    }
    mi.onclick = function() {
        console.log("michigan");
        document.getElementById('mitextInput').className="show";
    }
    mn.onclick = function() {
        console.log("minnisota");
        document.getElementById('mntextInput').className="show";
    }
    ms.onclick = function() {
        console.log("Ole miss");
        document.getElementById('mstextInput').className="show";
    }
    mo.onclick = function() {
        console.log("mizzou");
        document.getElementById('motextInput').className="show";
    }
    mt.onclick = function() {
        console.log("montant");
        document.getElementById('mttextInput').className="show";
    }
    ne.onclick = function() {
        console.log("nebraska");
        document.getElementById('netextInput').className="show";
    }
    nv.onclick = function() {
        console.log("nevada");
        document.getElementById('nvtextInput').className="show";
    }
    nh.onclick = function() {
        console.log("new hamp");
        document.getElementById('nhtextInput').className="show";
    }
    nj.onclick = function() {
        console.log("new jersey");
        document.getElementById('njtextInput').className="show";
    }
    nm.onclick = function() {
        console.log("new mex");
        document.getElementById('nmtextInput').className="show";
    }
    ny.onclick = function() {
        console.log("new yoek");
        document.getElementById('nytextInput').className="show";
    }
    nc.onclick = function() {
        console.log("north carolina");
        document.getElementById('nctextInput').className="show";
    }
    nd.onclick = function() {
        console.log("north dakota");
        document.getElementById('ndtextInput').className="show";
    }
    oh.onclick = function() {
        console.log("OHio");
        document.getElementById('ohtextInput').className="show";
    }
    ok.onclick = function() {
        console.log("Oklahoma");
        document.getElementById('oktextInput').className="show";
    }
    or.onclick = function() {
        console.log("Oregon");
        document.getElementById('ortextInput').className="show";
    }
    pa.onclick = function() {
        console.log("penn");
        document.getElementById('patextInput').className="show";
    }
    ri.onclick = function() {
        console.log("Small");
        document.getElementById('ritextInput').className="show";
    }
    sc.onclick = function() {
        console.log("South Carolina");
        document.getElementById('sctextInput').className="show";
    }
    sd.onclick = function() {
        console.log("South Dakota");
        document.getElementById('sdtextInput').className="show";
    }
    tn.onclick = function() {
        console.log("Tenn");
        document.getElementById('tntextInput').className="show";
    }
    tx.onclick = function() {
        console.log("yee haw");
        document.getElementById('txtextInput').className="show";
    }
    ut.onclick = function() {
        console.log("utah");
        document.getElementById('uttextInput').className="show";
    }
    vt.onclick = function() {
        console.log("vermont");
        document.getElementById('vttextInput').className="show";
    }
    va.onclick = function() {
        console.log("virginia");
        document.getElementById('vatextInput').className="show";
    }
    wa.onclick = function() {
        console.log("wash");
        document.getElementById('watextInput').className="show";
    }
    wv.onclick = function() {
        console.log("west virgiina");
        document.getElementById('wvtextInput').className="show";
    }
    wi.onclick = function() {
        console.log("wisconsin");
        document.getElementById('witextInput').className="show";
    }
    wy.onclick = function() {
        console.log("wyoming");
        document.getElementById('wytextInput').className="show";
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