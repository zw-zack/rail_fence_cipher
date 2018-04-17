



// var string = "WEAREDISCOVEREDFLEEATONCERUNRUNRUN"


function encode (string) {
	var dot = "."
	var lineOne = []
	var lineTwo = []
	var lineThree = []
	var encodedString = []

	for (var i = 0; i < string.length; i ++){
		lineOne.push(dot);
	}

	for (var i = 0; i < string.length; i ++){
		lineTwo.push(dot);
	}

	for (var i = 0; i < string.length; i ++){
		lineThree.push(dot);
	}

	for (var i = 0; i < string.length; i += 4){
		lineOne[i]= string[i]
	}

	for (var i = 1; i < string.length; i += 2){
		lineTwo[i]= string[i]
	}

	for (var i = 2; i < string.length; i += 4){
		lineThree[i]= string[i]
	}



	console.log(lineOne.join(""))
	console.log(lineTwo.join(""))
	console.log(lineThree.join(""))

	removeDots(lineOne);
	removeDots(lineTwo);
	removeDots(lineThree);


	encodedString.push(lineOne.join(""))
	encodedString.push(lineTwo.join(""))
	encodedString.push(lineThree.join(""))
	console.log(encodedString.join(""));
}


function removeDots(array){
	for(var i = 0; i < array.length; i++){
		if(array[i]==".") {
			array.splice(i,1);
            i--; // Prevent skipping an item
        }
    }
}










