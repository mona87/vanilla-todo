var input = document.getElementById('usrInput');
var button = document.getElementById('btn');
var section = document.getElementById('sect');
var clear = document.getElementById('clear');
var array = [];
var myStorage = localStorage;
//console.log(localStorage);
section.style.fontStyle = 'italic';
//shows the string stored from the previous list/last session
section.innerHTML = localStorage.getItem(0);

btn.addEventListener('click', output);
clear.addEventListener('click', clearList);

//displays old string on refresh and grabs count from last session
var oldlist = section.innerHTML;
var count = localStorage.getItem(1);

function output(event){
	//updates count and in localstorage
	count++
	localStorage.setItem(1, count);

	//adds new items to array 
	array.push('<div>'+count+') '+input.value+'</div>');
	render();
}

function render(){
	//clears input in the box (but also erases the list)
	input.value ='';
	//shows the oldlist again
	section.innerHTML = oldlist;

	for(var i = 0; i <array.length; i++){
		//appends new item to displaylist
		section.innerHTML += array[i];			
	}	

	var list = section.innerHTML;
	console.log(list);
	console.log(localStorage.getItem(1));
	myStorage.setItem(0, list);
}

function clearList(event){
	//resets everything
	section.innerHTML = '';
	oldlist = '';
	count = 0;
	myStorage.setItem(0, '');
	myStorage.setItem(1, 0);
	array = [];

}


	