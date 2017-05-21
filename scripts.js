// JavaScript Document


function resetForm() {
    var resetChoice = confirm('Reset all fields?');
    if (resetChoice) {
        console.log("Resetting form modifications.");
        // note: could do this with an array of required fields
    }
    return resetChoice;
}


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
 
