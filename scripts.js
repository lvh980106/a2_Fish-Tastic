// JavaScript Document
var ItemCode;
var quantity;
var ttl;
var grandttl;
var result=0;

function resetForm() {
    var resetChoice = confirm('Reset all fields?');
    if (resetChoice) {
        console.log("Resetting form modifications.");
        // note: could do this with an array of required fields
    }
    return resetChoice;
}

function showTotal(){
	ItemCode = document.getElementById("ItemCode");
quantity = document.getElementById("quantity");
ttl = document.getElementById("total");
	grandttl= document.getElementById("grandtotal");
	if (ItemCode[ItemCode.selectedIndex].value !="" && quantity.value !=""){
		var total=(ItemCode[ItemCode.selectedIndex].value * quantity.value).toFixed(2);
		result=parseFloat(result)+parseFloat(total);
	}
		var text=ItemCode[ItemCode.selectedIndex].innerHTML+"   Quantity : "+quantity.value;
		
		ttl.innerHTML+=text+"<br/>";
		grandttl.innerHTML=result;
		quantity.value="";
	}

