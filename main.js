// SCI(profit and loss)
// revenue
// event listner of reveanue
document
  .getElementById("grossprofit")
  .addEventListener("click", calculateProfit);

//   Event Function
function calculateProfit() {
  // input
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;

  // process
  let grosspro = rev - cost;

  // output
  document.getElementById("profit").innerHTML = grosspro;
  document.getElementById("gro").innerHTML = grosspro;
}

// Operating Profit
// event Listner of revenue
document
  .getElementById("operatingprofit")
  .addEventListener("click", calculateOprofit);

//   Event Function
function calculateOprofit() {
  // input
  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;
  //
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;

  // process
  let expenses = expense1 + expense2;
  let grosspro = rev - cost;
  let operatingprofit = grosspro - expenses;

  // output
  document.getElementById("OProfit").innerHTML = operatingprofit;
  document.getElementById("oper").innerHTML = operatingprofit;
}

// Profit of the year before tax
// Event Listner
document
  .getElementById("profitbeforetax")
  .addEventListener("click", calculateprofitbeforetax);

//   Event Function
function calculateprofitbeforetax() {
  // input

  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;
  //
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;
  //

  let financecost = +document.getElementById("financecost").value;
  let financeincome = +document.getElementById("financeincome").value;

  //   process
  let expenses = expense1 + expense2;
  let grosspro = rev - cost;
  let operatingprofit = grosspro - expenses;
  let finance = operatingprofit + financeincome;
  let probeforetax = finance - financecost;

  // output
  document.getElementById("pretax").innerHTML = probeforetax;
  document.getElementById("prob").innerHTML = probeforetax;
}

// Profit of the year after tax
// Event Listner
document
  .getElementById("profitaftertax")
  .addEventListener("click", calculateprofitaftertax);

//   Event Function
function calculateprofitaftertax() {
  // input

  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;
  //
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;
  //

  let financecost = +document.getElementById("financecost").value;
  let financeincome = +document.getElementById("financeincome").value;
  //
  let numberoftax = +document.getElementById("tax").value;
  //   process
  let expenses = expense1 + expense2;
  let grosspro = rev - cost;
  let operatingprofit = grosspro - expenses;
  let finance = operatingprofit + financeincome;
  let probeforetax = finance - financecost;
  let proaftertax = probeforetax - numberoftax;
  // output
  document.getElementById("aftertax").innerHTML = proaftertax;
  document.getElementById("proa").innerHTML = proaftertax;
}

// The information table
// group 1
// Event listner
document
  .getElementById("grossprofit")
  .addEventListener("click", calculateProfit2);

// event function
function calculateProfit2() {
  // input
  let rev = +document.getElementById("revenue").value;
  let cost = +document.getElementById("cost").value;

  // output
  document.getElementById("reve").innerHTML = rev;
  document.getElementById("cos").innerHTML = cost;
}

// group 2
// Event listner
document
  .getElementById("operatingprofit")
  .addEventListener("click", calculateOprofit2);

// event function
function calculateOprofit2() {
  // input
  let expense1 = +document.getElementById("expense1").value;
  let expense2 = +document.getElementById("expense2").value;

  // output
  document.getElementById("adm").innerHTML = expense1;
  document.getElementById("exp").innerHTML = expense2;
}

// group 3
// Event listner
document
  .getElementById("profitbeforetax")
  .addEventListener("click", calculateprofitbeforetax2);

// event function
function calculateprofitbeforetax2() {
  // input

  let financecost = +document.getElementById("financecost").value;
  let financeincome = +document.getElementById("financeincome").value;

  // output
  document.getElementById("fc").innerHTML = financecost;
  document.getElementById("fi").innerHTML = financeincome;
}

// group 4
// Event listner
document
  .getElementById("profitaftertax")
  .addEventListener("click", calculateprofitaftertax2);

// event function
function calculateprofitaftertax2() {
  // input
  let numberoftax = +document.getElementById("tax").value;

  // output
  document.getElementById("tx").innerHTML = numberoftax;
}

// This didn't work because I put the = sign where it was supposed to be "."
// var reset = document.getElementById("reload");
// reset = addEventListener("click", rload);
// // event function
// function rload() {
//   location.reload;
// }

// Reload button
// event listner

var reload = document.getElementById("reload");
reload.addEventListener("click", rload);
// event function
function rload() {
  location.reload();
}
