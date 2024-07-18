function storeFunction(){
    car={
        bName:brand.value,
        price:price.value,
        key:key.value
    }
    if(!car.bName||!car.price||!key){
        alert("Please Fill all fields")
    }else if(car.key in localStorage){
        alert("Key already exists")
    }else{
        localStorage.setItem(car.key,JSON.stringify(car));
        alert("Car Details added successfully")
    }
}

function retrieveRecords(){
    let key=retrieveKey.value;
    if(!key){
        alert("Key doesn't Exist")
    }
    else{
        let car=JSON.parse(localStorage.getItem(key));
        result.innerHTML=`
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    Featured
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${car.bName}</li>
                    <li class="list-group-item">${car.price}</li>
                    <li class="list-group-item">${car.key}</li>
                     
                </ul>
                </div>`;
    }
}
function removeRecords (){
    let key=removeKey.value;
    console.log(key);
    if(key in localStorage){
        localStorage.removeItem(key);
        alert("Removed successfully")
        
    }else{
        alert("Key doesn't Exist")
    }
}

function clearAll(){
    localStorage.clear();
    alert("Cleared all data")
}