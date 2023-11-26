function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const posts = [];

function renderPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post', 'p-3', 'bg-light');

        const userAvatar = post.avatar ? `<img src="${post.avatar}" alt="Avatar" class="user-avatar" onclick="showPopup('${post.avatar}')">` : '';
        
        postElement.innerHTML = `
            ${userAvatar}
            <strong>${post.username}</strong>: ${post.message}
        `;
        postList.appendChild(postElement);
    });
}

function showPopup(avatarUrl) {
    const popup = document.getElementById('user-popup');
    const carousel = popup.querySelector('.carousel');
    carousel.innerHTML = ''; // Limpa qualquer imagem existente no carrossel

    // Adiciona uma imagem ao carrossel para cada post com avatar
    posts.forEach(post => {
        if (post.avatar) {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');

            const img = document.createElement('img');
            img.src = post.avatar;
            img.alt = 'Avatar';
            img.classList.add('d-block', 'w-100');

            carouselItem.appendChild(img);
            carousel.appendChild(carouselItem);
        }
    });

    popup.style.display = 'block';
}

function hidePopup() {
    const popup = document.getElementById('user-popup');
    popup.style.display = 'none';
}

function renderCommentsCarousel() {
    const carouselInner = document.querySelector('#comment-carousel .carousel-inner');
    carouselInner.innerHTML = '';

    // Adiciona cada comentário como um item de carrossel
    posts.forEach((post, index) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('carousel-item', index === 0 ? 'active' : '');
        commentElement.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.message}</p>
        `;
        carouselInner.appendChild(commentElement);
    });
}

function renderUserSidebar() {
    const userSidebar = document.querySelector('.user-sidebar');
    // Adicione o código para exibir a foto do usuário e outras informações relevantes aqui
}

function renderMainComments() {
    const mainCommentsList = document.getElementById('main-comments-list');
    // Adicione o código para exibir os principais comentários dinamicamente aqui
}

document.getElementById('post-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const message = document.getElementById('post-content').value;
    const avatarNumber = getRandomNumber(1, 5); // Gera um número aleatório entre 1 e 5 para escolher a imagem do avatar
    const avatar = `https://i.pravatar.cc/150?img=${avatarNumber}`; // Usa o serviço Pravatar para imagens de avatar aleatórias
    posts.push({ username, message, avatar });
    renderPosts();
    renderCommentsCarousel();
    document.getElementById('username').value = '';
    document.getElementById('post-content').value = '';
});

// Chame as funções de renderização adicionais conforme necessário
renderPosts();
renderCommentsCarousel();
renderUserSidebar();
renderMainComments();