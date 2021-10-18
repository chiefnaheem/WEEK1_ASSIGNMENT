// function main(){

// }

// module.exports = {main}
const imgs = [
    "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2021%2F01%2FLuke-Skywalker-Return-of-the-Jedi-850x560.jpg",
    "https://media.kidadl.com/601dd218f7e051247985898c_c_3_po_is_an_extremely_popular_character_from_star_wars_a581e9614c.jpeg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/09/29/15/R2D2-and-C3PO-Star-Wars.jpg?width=1200",
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6090f7f251c9c6c605e612fc%2FDarth-Vader%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D3127%26cropY1%3D33%26cropY2%3D1792",
    "data:image/jpeg;base64,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",
    "https://i.ytimg.com/vi/yQqlcNEqNGQ/maxresdefault.jpg",
    "http://www.rebelscum.com/TLC/Basic/45Beru/header.jpg",
    "https://www.sideshow.com/wp/wp-content/uploads/2015/04/preview_R5D4.jpg",
    "http://www.rebelscum.com/Hasbro_Star_Wars/Black-Series-Star-Wars-Hasbro-04-Biggs-Darklighter/header.jpg",
    "https://cdn.mos.cms.futurecdn.net/hrxPKa5MUbRixfxM3UQ9Fo.jpg",
    
]

let rowLog = document.getElementById("row")

fetch("https://swapi.dev/api/people")
    .then(res => res.json())

    .then(data => {
        let dataLog = data["results"];
        for (let i = 0; i < dataLog.length; i++) {
            rowLog.innerHTML += `
            <div class="col-sm-4">
            <div class="card">
            <img src= ${imgs[i]} alt="" class="img">
            
            <div class="card-body">
            <h3 class="card-title">${dataLog[i]['name']}</h3>
            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${i}">
            See Details
            </a>
            </div>
            </div> 
            </div>
            


            
    <!-- Modal -->
    <div class="modal fade" id="exampleModal${i}" tabindex="-1"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${dataLog[i]["name"]}'s Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>Name: ${dataLog[i]["name"]}</p>
      <p>Gender: ${dataLog[i]["gender"][0].toUpperCase()}</p>
      <p>Height: ${dataLog[i]["height"]} cm</p>
      <img src = ${imgs[i]} class="modal-image">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

        `

        }
        console.log(dataLog)
        

})