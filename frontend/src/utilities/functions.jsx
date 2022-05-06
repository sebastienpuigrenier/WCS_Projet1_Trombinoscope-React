import membres from "../assets/membres";

// Réorganisation du tableau contenant les membres pour les avoir dans l'odre alphabétique
function alphaOrder(a, b) {
  if (a.nom.toLowerCase() < b.nom.toLowerCase()) {
    return -1;
  }
  if (a.nom.toLowerCase() > b.nom.toLowerCase()) {
    return 1;
  }
  return 0;
}

// Réorganisation du tableau pour avoir le formateur en première position (Gorski)
function formateurFirst() {
  const index = membres.findIndex((e) => e.nom === "Gorski");
  const formateurInfo = membres[index];
  membres.splice(index, 1);
  membres.unshift(formateurInfo);
}


const generate404 = () => {
  const randomCard = (Math.floor(Math.random() * 15) + 1);

  fetch("./assets/membres.json")
    .then((resp) => resp.json())
    .then(function(data) {
      membreOutsiders = data;
      let memberLastName = membreOutsiders[randomCard].nom[0].toUpperCase() + membreOutsiders[randomCard].nom.slice(1).toLowerCase();
              let memberFirstName = membreOutsiders[randomCard].prenom[0].toUpperCase() + membreOutsiders[randomCard].prenom.slice(1).toLowerCase();
              let generatedHtml = `      
              <div class="carousel">
              <input type="radio" name="position" />
              <input type="radio" name="position" checked/>
              <input type="radio" name="position" />
                <div id="carousel">
                      <!-- première carte-->
                    <div class="item">
                      <div class="descriptif">
                        <h2 id="titre2">Hobbies</h2>
                          <p>${membreOutsiders[randomCard].hobbys}</p>
                        <h2 id="titre2">Pourquoi j'ai voulu être développeur web?</h2>
                          <p>${membreOutsiders[randomCard].why}</p>
                     </div> 
                    </div>
                    <!-- deuxième carte -->
                    <div class="item" id="alibelala">
                      <div class="profil-container">
                        <div class="photo-profil">
                          <img src="${membreOutsiders[randomCard].photo}" alt="photo d'Ali Belala" >
                        </div >
                      </div>
                      <div class="main-profil">
                        <div class="descriptif">
                        <h1 id="identity">${memberLastName}  ${memberFirstName}</h1> 
                        </div>
                      </div>
                    </div>
                    <!-- troisième carte-->
                    <div class="item">
                      <!-- <div class="main-profil">-->
                         <div class="button">
                          <div>
                                  <div>
                                    <a href="${membreOutsiders[randomCard].github}" target="_blank"><i class="fa-brands fa-github"></i></a>
                                  </div>
                                  <div>
                                    <a href="${membreOutsiders[randomCard].linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                  </div>
                                  <div>
                                    <a href="mailto:${membreOutsiders[randomCard].email}"><i class="fas fa-envelope"></i></a>
                                  </div>
                                  <div>
                                    <a href="./index.html"><i class="fa-solid fa-arrow-rotate-left"></i></a>
                                  </div>
                          </div>
                         </div>
                       </div>
                     </div>
                    </div>
              
              </div>
              `;
      const newpage = document.querySelector(".randomCarrousel").innerHTML = generatedHtml;
          

     

  })
  .catch(function(error) {
  console.log(error);
  });

}

export { alphaOrder, formateurFirst, generate404 };
