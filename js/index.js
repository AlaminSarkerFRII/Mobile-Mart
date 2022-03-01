

// declare both container globally 
let phoneDetails =document.getElementById('phone-Details');
const containerDiv = document.getElementById('displayAll');
const loadPhone = () => {
    const input = document.getElementById('input-field');
    const errorMessage = document.getElementById('error-message'); // error sms id 
    containerDiv.innerHTML = "";//clear main div
    phoneDetails.innerHTML = "";//clear phoneDetails
    const inputValue = input.value;
    input.value = "";
    // error message
if(inputValue == ""){
  errorMessage.innerText = "please give a Phone Name";
  input.value = "" //field clear
  containerDiv.innerHTML = "" // main div clear hobe

} else{
  // get all mobile phone 
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
  fetch(url)
  .then((res)=>res.json())
  .then((data) => displayPhone(data.data.slice(0,20)))
  input.value = "";
  errorMessage.innerText = "" // error sms por empty hobe
}

}

const displayPhone = (phones) =>{
  //optinal Chaining
  if(phones.length=== '0'){
    alert(' oh! phone not found');
  } else{
    phones.forEach(phone => {
      // console.log(phone);
        const div = document.createElement('div'); // create div and appen
        div.classList.add('col-sm-12')
        div.innerHTML = `<div class="card text-center mb-3" style="width: 18rem;">
        <img class="w-75 mx-auto p-3" src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4>${phone.phone_name} </h4>
            <h6>Brand :${phone.brand}</h6>
          <a href="#" class="btn btn-primary" onClick="getPhoneDetails('${phone.slug}')">See Details</a>
        </div>
      </div>`;
      containerDiv.appendChild(div);
  });
  }
}

//get phone details 

const getPhoneDetails = id =>{
fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
.then((res) => res.json())
.then((data) => displayPhoneDetails(data.data));

}

// phone details display
  const displayPhoneDetails = (phone) =>{
    console.log(phone);
    containerDiv.innerHTML = ""; // cleard main div
    phoneDetails.innerHTML = "";
    const div = document.createElement('div');
    div.innerHTML = `<div class="card mb-3 mx-auto">
    <img class="w-50 mx-auto p-3" src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="text-center fw-bold">${phone.name}</h3>
      <h4>Main Features</h4>
      <p> <span class="fw-bold">Brand:</span> ${phone.brand}</p>
      <p> <span class="fw-bold">Storages:</span> ${phone.mainFeatures.storage} </p>
      <p> <span class="fw-bold">display Size:</span> ${phone.mainFeatures.displaySize} </p>
      <p> <span class="fw-bold">release Date:</span> ${phone.releaseDate ? phone.releaseDate : "release Date not found" } </p>
      <div>
      <h4 class="fw-bold"> Others Information</h3>
      <p> <span class="fw-bold">Bluetooth:</span> ${phone.others.Bluetooth} </p>
      <p> <span class="fw-bold">GPS:</span> ${phone.others.GPS} </p>
      <p> <span class="fw-bold">Radio:</span> ${phone.others.Radio} </p>
      <p> <span class="fw-bold">USB:</span> ${phone.others.USB} </p>
      <p> <span class="fw-bold">WLAN:</span> ${phone.others.WLAN} </p>
      <small><span class="fw-bold">Sensors:</span> ${phone.mainFeatures.sensors}</small>
    </div>
  </div>`;
  phoneDetails.appendChild(div)

  }

  
