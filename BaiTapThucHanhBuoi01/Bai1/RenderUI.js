const lbla = document.createElement("label");
lbla.innerText = "a";
document.body.appendChild(lbla);
var nhapa = document.createElement("input");
document.body.appendChild(nhapa);

document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

const lblb = document.createElement("label");
lblb.innerText = "b";
document.body.appendChild(lblb);
var nhapb = document.createElement("input");
document.body.appendChild(nhapb);

document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));


const lblkq = document.createElement("label");
lblkq.innerText = "ket qua";
document.body.appendChild(lblkq);

var kq = document.createElement("input");
document.body.appendChild(kq);

document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

const btn = document.createElement("button");
btn.innerHTML = "tinh tong";
document.body.appendChild(btn);

btn.onclick = function() {
    var avalue = parseInt(nhapa.value);
    var bvalue = parseInt(nhapb.value);
    kq.setAttribute('value', avalue + bvalue);
}