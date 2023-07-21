 loadArtData =(phoneName) =>{
const url = ` https://openapi.programming-hero.com/api/phones?search=${phoneName}`

    fetch(url)
    .then(res => res.json())
    .then(data => phone(data.data))
}

const phone =(phones)=>{
    
    const phoneContainer = document.getElementById('card-Container');
    phoneContainer.innerHTML = "";

    for(const phone of phones)
    {
        console.log(phone);
        const card_col = document.createElement('div');
        card_col.classList.add('col');
        card_col.innerHTML=`
        <div class="card">
        <img src="${phone.image}" class="card-img-top p-5" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">Brand: ${phone.brand}</p>
          </div>
        </div>
        `
        phoneContainer.appendChild(card_col);
    }
   
}

loadArtData('iphone');

document.getElementById('btn_submit').addEventListener('click', function (){
  const search_field = document.getElementById('phone-input').value;
console.log("im from search field");
  loadArtData(search_field);
})

