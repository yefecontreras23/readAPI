//read api
//link
var urlram="https://rickandmortyapi.com/api/character"
var checkmale=document.querySelector("#masculino").value
var checkfemale=document.querySelector("#femenino").value
checkfemale=false
checkmale=false

window.addEventListener("load", async function(){
	var response = await fetch(urlram+"?status=alive")
	var data = await response.json()
	data= data.results

	for (var i = 0; i < data.length; i++) {
		document.querySelector("#cards").innerHTML+=
		`<div class="card">
		<img class="card-img-top" src="${data[i].image}" alt="">
		<div class="card-body">
		<h2 class="card-tittle">${data[i].name}</h2>
		<h3 class="card-text">${data[i].species}</h3>
		<h4 class="card-text">${data[i].gender}</h4>
		<button class="btn btn-info" data-id="${data[i].id}" id="detalles">detalles</button>
		</div>
		</div>`
	}
})

document.addEventListener("click",function(e){
	if (e.target.matches("#detalles")) {
		id=e.target.dataset.id
		detalles(id)
	}else if(e.target.matches("#atras")){
		location.reload()
	}
})

document.addEventListener("keyup",async function(){
	var word=document.querySelector("#search").value
	document.querySelector("#cards").innerHTML=""
	var checkgender
	if(checkmale==true && checkfemale==true) {checkgender="none"}
		else if (checkmale==true) { checkgender="male"} 
			else if(checkfemale==true) { checkgender="female"} 
				else{checkgender="none"}
	if (word=="") {	readapi(checkgender)} else { readapifilter(checkgender,word)}
})




async function detalles(id){
	const response = await fetch(urlram+"/"+id)
	var data = await response.json()

	document.querySelector("#cards").innerHTML=
	`<div class="card">
	<img class="card-img-top" src="${data.image}" alt="">
	<div class="card-body">
	<h2 class="card-tittle">${data.name}</h2>
	<h3 class="card-text">${data.species}</h3>
	<h4 class="card-text">${data.gender}</h4>
	<p class="card-text">${data.origin.name}</p>
	<button class="btn btn-danger" id="atras">regresar</button>
	</div>
	</div>`
}

document.querySelector("#masculino").onclick=()=>{
	if (checkmale==false) {checkmale=true} else {checkmale=false}
	var word=document.querySelector("#search").value
	document.querySelector("#cards").innerHTML=""
	var checkgender
	if(checkmale==true && checkfemale==true) {checkgender="none"}
		else if (checkmale==true) { checkgender="male"} 
			else if(checkfemale==true) { checkgender="female"} 
				else{checkgender="none"}
	if (word=="") {	readapi(checkgender)} else { readapifilter(checkgender,word)}
}

document.querySelector("#femenino").onclick=()=>{
	if (checkfemale==false) {checkfemale=true} else {checkfemale=false}
	var word=document.querySelector("#search").value
	document.querySelector("#cards").innerHTML=""
	var checkgender
	if(checkmale==true && checkfemale==true) {checkgender="none"}
		else if (checkmale==true) { checkgender="male"} 
			else if(checkfemale==true) { checkgender="female"} 
				else{checkgender="none"}
	if (word=="") {	readapi(checkgender)} else { readapifilter(checkgender,word)}
}

async function readapi(checkgender){
	if (checkgender=="none") {
		var response = await fetch(urlram+"?status=alive")
		var data = await response.json()
		data= data.results
	}else{
		var response = await fetch(urlram+"?status=alive&gender="+checkgender)
		var data = await response.json()
		data= data.results
	}
	for (var i = 0; i < data.length; i++) {
		document.querySelector("#cards").innerHTML+=
		`<div class="card">
		<img class="card-img-top" src="${data[i].image}" alt="">
		<div class="card-body">
		<h2 class="card-tittle">${data[i].name}</h2>
		<h3 class="card-text">${data[i].species}</h3>
		<h4 class="card-text">${data[i].gender}</h4>
		<button class="btn btn-info" data-id="${data[i].id}" id="detalles">detalles</button>
		</div>
		</div>`
	}	
}

async function readapifilter(checkgender,word){
	if (checkgender=="none") {
		var response = await fetch(urlram+"?name="+word+"&status=alive")
		var data = await response.json()
		data=data.results
	} else {
		var response = await fetch(urlram+"?name="+word+"&status=alive&gender="+checkgender)
		var data = await response.json()
		data=data.results
	}
	for (var i = 0; i < data.length; i++) {
		document.querySelector("#cards").innerHTML+=
		`<div class="card">
		<img class="card-img-top" src="${data[i].image}" alt="">
		<div class="card-body">
		<h2 class="card-tittle">${data[i].name}</h2>
		<h3 class="card-text">${data[i].species}</h3>
		<h4 class="card-text">${data[i].gender}</h4>
		<button class="btn btn-info" data-id="${data[i].id}" id="detalles">detalles</button>
		</div>
		</div>`
	}
}