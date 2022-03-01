

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
    for (const phone of phones){
      console.log(phone);
        const div = document.createElement('div'); // create div and append
        div.classList.add('col-md-6')
        div.classList.add('col-sm-12')
        div.innerHTML = `<div class="card text-center mb-3" style="width: 18rem;">
        <img class="w-75 mx-auto p-3" src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4>Brand :${phone.brand}</h4>
          <h5 >Name : ${phone.phone_name} </h5>
          <a href="#" class="btn btn-primary" onClick="getPhoneDetails('${phone.slug}')">See Details</a>
        </div>
      </div>`;
      containerDiv.appendChild(div);
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
    div.innerHTML = `<div class="card text-center mb-3 w-100 mx-auto">
    <img class="w-75 mx-auto p-3" src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5>Name :${phone.name}</h5>
      <h5>Storages : ${phone.mainFeatures.storage} </h5>
      <h6> ${phone.slug}</h6>
      <h6> ${phone.releaseDate}</h6>
      <button onClick ="showMoreDetails('${phone.slug}')" class="btn btn-primary">Show More...</button>
    </div>
  </div>`;
  phoneDetails.appendChild(div)

  }

  // show more Details about Single phone

  const showMoreDetails = (moreDetails) =>{
    console.log(moreDetails);

  }

