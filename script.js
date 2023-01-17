const imageRow = document.getElementById('imageRow');
const loadImg = document.getElementById('loadImg');
const loadImg2 = document.getElementById('loadImg2');
const alertContainer = document.getElementsByClassName('alertContainer')[0];
const carouselContainer = document.getElementsByClassName('carouselContainer')[0];


loadImg.addEventListener('click', function(){
    loadRealDate('animals')
    alertContainer.innerHTML += `     <div class="alert alert-success" role="alert">
Nine animal images loaded
</div>`
setTimeout(removeAlert, 5000);
})

loadImg2.addEventListener('click', function(){
    loadRealDate('cars')
    alertContainer.innerHTML += `     <div class="alert alert-success" role="alert">
    Nine car images loaded
</div>`
setTimeout(removeAlert, 5000);
})


function searchImage(){
    let userInput = document.getElementById('user-input').value;
    loadRealDate(userInput)
    alertContainer.innerHTML += `     <div class="alert alert-success" role="alert">
    Nine ${userInput} images loaded
</div>`
setTimeout(removeAlert, 5000);
}

function imgAlert(){
    
}




function loadRealDate(query){
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        method: 'GET',
        headers: {
            Authorization:'563492ad6f917000010000010a8b00a7a2c349ee9a74d34e45d83eb1', 
        }
    })
    .then((response) =>  response.json())
    .then((data) => {
        console.log(data)
        imageRow.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            imageRow.innerHTML += `   <div class="col-md-4">
            <div class="card mb-4 shadow-sm collapse show" id="collapseImg${i}">
            <img src="${data.photos[i].src.original}" alt="" class="photo-images">
              <div class="card-body">
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      data-toggle="modal" 
                      data-target="#exampleModalLong${i}"
                      onclick="imgAlert(${data.photos[i].src.original})"
                    >
                      View
                    </button>
                    <button class="btn btn-sm btn-outline-secondary" type="button" data-toggle="collapse" data-target="#collapseImg${i}" aria-expanded="false" aria-controls="collapseImg${i}" onclick="alertImageHidden(${data.photos[i].id})">
                    Hide
                  </button>
                  </div>
                  <small class="text-muted">${data.photos[i].id}</small>
                </div>
              </div>
            </div>
          </div>
          
          
          <div class="modal fade bd-example-modal-xl" id="exampleModalLong${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-xl">" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">${data.photos[i].alt}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body d-flex justify-content-center">
            <img src="${data.photos[i].src.original}" alt="" class="photo-images">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
          
          
          `
          
        }
    
    })
        .catch((err => console.log(err)))
}

window.onload = function loadDummyData(){
    loadForestCarusel()
for (let i = 0; i < 9; i++) {
    imageRow.innerHTML += `   <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Thumbnail"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg>
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Edit
            </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>`
}
}

window.onload = function loadDummyData(){
for (let i = 0; i < 9; i++) {
    imageRow.innerHTML += `   <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Thumbnail"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg>
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Edit
            </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>`
}
fetch(`https://api.pexels.com/v1/search?query=forest`, {
        method: 'GET',
        headers: {
            Authorization:'563492ad6f917000010000010a8b00a7a2c349ee9a74d34e45d83eb1', 
        }
    })
    .then((response) =>  response.json())
    .then((data) => {
        carouselContainer.innerHTML = 
        `
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${data.photos[0].src.original}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data.photos[1].src.original}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data.photos[2].src.original}" class="d-block w-100" alt="...">
    </div>
  </div>
 <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
        `
    })
    .catch((err => console.log(err)))

}


    










function alertImageHidden(id){
alertContainer.innerHTML += `     <div class="alert alert-warning" role="alert">
The Image with the ID:${id} is hidden now.
</div>`
setTimeout(removeAlert, 5000);
}

function removeAlert(){
    alertContainer.innerHTML = '';
}




