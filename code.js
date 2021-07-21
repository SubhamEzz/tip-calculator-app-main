




$("#five").click(function(){
  var amount = $("#bill").val();
  var numberOfPeople = $("#npeople").val();
  var payAmount = amount*0.05;
  var perPay = (amount-payAmount)/numberOfPeople;
  $("#tip").text(payAmount+".00");
  $("#mBill").text(perPay+".00");

});
$("#ten").click(function(){
  var amount = $("#bill").val();
  var numberOfPeople = $("#npeople").val();
  var payAmount = amount*0.10;
  var perPay =(amount-payAmount)/numberOfPeople;
  $("#tip").text(payAmount+".00");
  $("#mBill").text(perPay+".00");

});
$("#fif").click(function(){
  var amount = $("#bill").val();
  var numberOfPeople = $("#npeople").val();
  var payAmount = amount*0.15;
  var perPay = (amount-payAmount)/numberOfPeople;
  $("#tip").text(payAmount+".00");
  $("#mBill").text(perPay+".00");

});
$("#twentyfif").click(function(){
  var amount = $("#bill").val();
  var numberOfPeople = $("#npeople").val();
  var payAmount = amount*0.25;
  var perPay = (amount-payAmount)/numberOfPeople;
  $("#tip").text(payAmount+".00");
  $("#mBill").text(perPay+".00");

});
$("#fifty").click(function(){
  var amount = $("#bill").val();
  var numberOfPeople = $("#npeople").val();
  var payAmount = amount*0.50;
  var perPay = (amount-payAmount)/numberOfPeople;
  $("#tip").text(payAmount+".00");
  $("#mBill").text(perPay+".00");

});

$("#custom").click(function(){
  var amount = $("#bill").val();
  var numberOfPeople = $("#npeople").val();
  var payAmount = amount*($("#custom").val())/100;
  var perPay = (amount-payAmount)/numberOfPeople;
  $("#tip").text(payAmount+".00");
  $("#mBill").text(perPay+".00");
});
$("#reset").click(function(){
  $("#tip, #mBill").text("0.00");
  $("#bill , #custom , #npeople").val('');
});
