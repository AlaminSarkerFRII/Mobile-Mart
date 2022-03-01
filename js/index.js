

// declare container globally 
const containerDiv = document.getElementById('displayAll');

const loadPhone = () => {
    const input = document.getElementById('input-field');
    const inputValue = input.value;
    input.value = "";
// get all mobile phone 
     containerDiv.innerHTML = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then((res)=>res.json())
    .then((data) => displayPhone(data.data))
}

const displayPhone = (phones) =>{
    for (const phone of phones){
        // console.log(phone);
        const div = document.createElement('div'); // create div and append
        div.classList.add('col-md-6')
        div.classList.add('col-sm-12')
        div.innerHTML = `<div class="card m-4 text-center mb-3" style="width: 18rem;">
        <img class="w-75 mx-auto p-3" src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4>Brand :${phone.brand}</h4>
          <h5 class="card-title">Name : ${phone.phone_name} </h5>
          <a href="#" class="btn btn-primary" onClick="phoneDetails('${phone.slug}')">See Details</a>
        </div>
      </div>`;
      containerDiv.appendChild(div);
      
    }
}

const phoneDetails = id =>{
fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
.then((res) => res.json())
.then((data) => displayPhoneDetails(data.data));

}
    // const allPhones = (data.data)
  //   // console.log(allPhones);
  //   const singlePhone = allPhones.find(phone =>phone.id===id )
  //   const div = document.createElement('div');
  //   containerDiv.innerHTML = "";
  //   div.innerHTML = `<div class="card text-center mb-3" style="width: 18rem;">
  //   <img class="w-75 mx-auto p-3" src="${singlePhone.image}" class="card-img-top" alt="...">
  //   <div class="card-body">
  //       <h4>Brand :${singlePhone.brand}</h4>
  //     <h5 class="card-title">Name : ${singlePhone.memory} </h5>
  //   </div>
  // </div>`; 

  // details.appendChild(div);

  const displayPhoneDetails = (phone) =>{
    console.log(phone);
    const phoneDetails =document.getElementById('phone-Details')
    const div = document.createElement('div');
   div.classList.add('card')
    div.innerHTML = `<div class="card text-center mb-3" style="width: 18rem;">
    <img class="w-75 mx-auto p-3" src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4>Brand :${phone.brand}</h4>
      <h5 class="card-title">Storages : ${phone.mainFeatures.storage} </h5>
      <p> ${phone.others}</p>
    </div>
  </div>`

  phoneDetails.appendChild(div)

  }

  