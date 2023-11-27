
function salvarNovoPet() {
    var nome = document.getElementById("petNome").value;
    var especie = document.getElementById("petEspecie").value;
    var idade = document.getElementById("petIdade").value;
    var descricao = document.getElementById("petDescricao").value;
    var imagemInput = document.getElementById("petImagem");
    var imagemUrl = URL.createObjectURL(imagemInput.files[0]); // Obter URL da imagem carregada

    var newCard = document.createElement("div");
    newCard.className = "col";
    newCard.innerHTML = `
        <div class="card">
            <div class="card-body text-center" style="background-color: #F2AA52;">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalPet${nome}">
                    <img src="${imagemUrl}" class="img-thumbnail" style="width: 100%;">
                </a>
                <h5 class="card-title">${nome}</h5>
                <p class="card-text">${descricao}</p>
                <button type="button" class="btn" data-bs-toggle="modal"
                    style="color: white; background-color:#55038C;" data-bs-target="#modalPet${nome}">Mostrar mais</button>
            </div>
        </div>
    `;

    document.querySelector(".row").appendChild(newCard);

    var modalPet = document.createElement("div");
    modalPet.className = "modal fade mx-auto";
    modalPet.id = `modalPet${nome}`;
    modalPet.tabIndex = -1;
    modalPet.setAttribute("aria-labelledby", `modalPet${nome}Label`);
    modalPet.setAttribute("aria-hidden", "true");
    modalPet.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #F2AA52;">
                    <h5 class="modal-title" id="modalPet${nome}Label">Detalhes do Pet</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><strong style="color: #55038C;">Nome:</strong> ${nome}</p>
                    <div class="d-flex justify-content-center">
                        <img src="${imagemUrl}" class="img-thumbnail" style="width: 70%;">
                    </div>
                    <p><strong style="color: #55038C;">Espécie:</strong> ${especie}</p>
                    <p><strong style="color: #55038C;">Idade:</strong> ${idade}</p>
                    <p><strong style="color: #55038C;">Descrição:</strong> ${descricao}</p>
                </div>
                <div class="modal-footer" style="background-color: #F2AA52;">
                    <a href="adocao_detalhes_pet.html" class="btn btn-success mx-auto">Mais Detalhes</a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modalPet);
    imagemInput.value = "";
}
