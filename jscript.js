// JavaScript Document
 function myCalc()
 {
	var ItemCode = document.getElementById("ItemCode");
	var quantity = document.getElementById("quantity");
	var ttl = document.getElementById("total");
	
	if (ItemCode[ItemCode.selectedIndex].value !="" && quantity[quantity.selectedIndex].value !="")
	{
		ttl.value = (ItemCode[ItemCode.selectedIndex].value * quantity[quantity.selectedIndex].value);
	}
 }