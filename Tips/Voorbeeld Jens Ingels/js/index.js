toEuro = function(value){
	if (value === 0) {
		return "€ ?,??";
	} else {
		value = value.toLocaleString('sgn-BE-NL', {minimumFractionDigits: 2});
		return "€ " + value;
	}
};
getData = function() {
	if(typeof(Storage) !== "undefined") {
		if (typeof data === 'undefined' || data === null) {
			if (localStorage.getItem("data") === null) {
				console.log("No local data");
			} else {
				data = JSON.parse(localStorage.getItem("data"));
			}
		} else {
			localStorage.setItem("data", JSON.stringify(data));
		}
	} else {
		console.log("error");
	}
};
removeData = function(){
	localStorage.removeItem("data");
};
loadData = function(){
	var drankvdmaand="", bier="", frisdrank="", overige="";
	sortdata = data.drankenlijst.datum["2015-12"].slice(0);
	sortdata.sort(function(a,b) {
		return a.prijs - b.prijs;
	});
	$.each( sortdata, function( key, value ) {
		if (value.categorie === "drankvdmaand") {
			drankvdmaand += "<p id='" + key + "'><span>" + value.drank + "</span><span>" + toEuro(value.prijs) + "</span></p>";
		}
		if (value.categorie === "bier") {
			bier += "<p id='" + key + "'><span>" + value.drank + "</span><span>" + toEuro(value.prijs) + "</span></p>";
		}
		if (value.categorie === "frisdrank") {
			frisdrank += "<p id='" + key + "'><span>" + value.drank + "</span><span>" + toEuro(value.prijs) + "</span></p>";
		}
		if (value.categorie === "overige") {
			overige += "<p id='" + key + "'><span>" + value.drank + "</span><span>" + toEuro(value.prijs) + "</span></p>";
		}
	});
	$('[data-role="menu-content"]').eq(0).html(drankvdmaand);
	$('[data-role="menu-content"]').eq(1).html(bier);
	$('[data-role="menu-content"]').eq(2).html(frisdrank);
	$('[data-role="menu-content"]').eq(3).html(overige);		
};

$( document ).ready(function(){
	getData();
	if (typeof data === 'undefined' || data === null) {
	
	} else {
		loadData();
	}
});