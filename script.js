let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);
  let duration = document.getElementById("duration").value;
  let simpleInterest =
    duration == "year" ? (p * r * t) / 100 : (p * r * t) / 1200;
  let amount = p + simpleInterest;
  // let compoundInterest =(p*[((1+r/100)**t)-1])

  result.innerHTML = `<div>Principal Amount: <span>ksh ${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>ksh ${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>ksh ${amount.toFixed(2)}</span></div> `
  // <div>Compound Interest:<span>${compoundInterest.toFixed(2)}</span></div>`;
  
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);
