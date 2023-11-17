//Store
function storeBtn(){
    let store={
        brand: brandin.value,
        price: pricein.value,
        key: keyin.value
    }

if (brandin.value==''|| pricein.value==''|| keyin.value==''){
    alert("Please fill all the fields.")
}else{
    if (store.key in localStorage){
        alert("Given key already exists")
    }else{
        localStorage.setItem(store.key, JSON.stringify(store))
        alert("Car brand added successfully")
    }
}
}

//Retrieve
function retrieveBtn(){
    let retrieve=rkey.value;
    
    if (retrieve in localStorage){
      getcar=JSON.parse(localStorage.getItem(retrieve))
      console.log(getcar);
     display.innerHTML=`<div class="card" style="width:18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Car Brand:${ getcar.brand}</li>
        <li class="list-group-item">Price: ${ getcar.brand}</li>
        <li class="list-group-item">Key: ${ getcar.brand}</li>
      </ul>
      </div>`;
    }else{
        alert("Key does not exist")
    }
}

//Remove
function removeBtn(){
    let remove=remkey.value
    if (remove in localStorage){
       localStorage.removeItem(remkey.value)
    }else
    {
        alert("Key doesnt exist")
    }
}

//clear all
function fullClear(){
    localStorage.clear()
}