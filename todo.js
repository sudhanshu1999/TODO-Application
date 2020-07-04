var ul=document.getElementById('list')
var li;



var addbutton=document.getElementById('add');
addbutton.addEventListener('click',addItem);

var removebutton=document.getElementById("remove");
removebutton.addEventListener('click',removeItem);

var resetbutton=document.getElementById('reset');
resetbutton.addEventListener('click',deleteAllItems);


function addItem(){
	var input=document.getElementById('input');
	var item=input.value;
	ul=document.getElementById('list');
	var textnode=document.createTextNode(item);
	if(item ==='')
	{
		return false;
	}
	else{
		//create li
		li=document.createElement('li');
		li.setAttribute('id' , 'mycheck');
		//create checkbox
		var box=document.createElement('input');
		box.type='checkbox';
		box.setAttribute('id' , 'check')
		console.log(box.id)
		//create label
		var label=document.createElement('label');
		//label.setAttribute('for','item')

		//add these elements on webpage

		ul.appendChild(label);
		li.appendChild(box);
		label.appendChild(textnode);
		li.appendChild(label);
		ul.insertBefore(li,ul.childNodes[0]);
		//li.className='visual';
		setTimeout(()=>{
			li.className ='visual';

		},10000000);
		
		input.value='';


	}

}

function removeItem(){
	li=ul.children;
	for(let index=0 ;index<li.length ;index++)
	{
		while(li[index] && li[index].children[0].checked)
		{
			ul.removeChild(li[index]);
		}
	}
}

function deleteAllItems(){
	li=ul.children;
	for(let index=0 ;index<li.length ;index++)
	{
		while(li[index] && li[index].children[0].checked || !li[index].children[0].checked)
		{
			ul.removeChild(li[index]);
		}
	}
}