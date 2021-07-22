
function discount(per){
  var amount = $("#bill").val();
  var numberOfPeople = $("#npeople").val();
  var payAmount = (amount*per).toFixed(2);
  var perPay = ((amount-payAmount)/numberOfPeople).toFixed(2);
  $("#tip").text(payAmount);
  $("#mBill").text(perPay);
}
$("#five").click(function(){

 discount(0.05);

});
$("#ten").click(function(){
   discount(0.10);

});
$("#fif").click(function(){
 discount(0.15);

});
$("#twentyfif").click(function(){
 discount(0.25);

});
$("#fifty").click(function(){
 discount(0.50);

});

$("#custom").click(function(){
discount($("#custom").val());
});


$("#reset").click(function(){
  $("#tip, #mBill").text("0.00");
  $("#bill , #custom , #npeople").val('');
});
