var input = document.getElementById('usrInput');
var button = document.getElementById('btn');
var section = document.getElementById('sect');
var clear = document.getElementById('clear');
var array = [];
var myStorage = localStorage;
console.log(localStorage)
section.style.fontStyle = 'italic';
section.innerHTML = localStorage.getItem(0);

btn.addEventListener('click', output);
// clear.addEventListener('click', clearList);
var oldlist = section.innerHTML;
var count = 0;
function output(event){


	count++
	array.push('<div>'+count+') '+input.value+'</div>');
	
	render();
}

function render(){
	//clears input and section
	input.value ='';


		section.innerHTML = '';

		for(var i = 0; i <array.length; i++){
			
			section.innerHTML += array[i];			
		}	

		var list = array.join('')
		console.log(list);

			myStorage.setItem(0, list);
	
			//console.log(myStorage.getItem(0));
			//console.log(Array.isArray(myStorage.getItem(0)));
}

// function clearList(){

// 	section.innerHTML = '';
// 	count = 0;
// 	myStorage.setItem(0, '');
// 	myStorage.setItem(1, 0);

// }


	