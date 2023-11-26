const stars = document.querySelectorAll('.star');
        const commentInput = document.getElementById('comment');
        const usernameInput = document.getElementById('username');
        const submitBtn = document.getElementById('submitBtn');
        const commentsDiv = document.getElementById('comments');

        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = star.getAttribute('data-rating');
                stars.forEach(s => s.classList.remove('rated'));
                for (let i = 0; i < rating; i++) {
                    stars[i].classList.add('rated');
                }
            });
        });

        submitBtn.addEventListener('click', () => {
            const rating = document.querySelector('.rated');
            const comment = commentInput.value;
            const username = usernameInput.value;

            if (rating && comment && username) {
                
                const commentElement = document.createElement('div');
                commentElement.innerHTML = `<strong>Nome do usuário:</strong> ${username}<br><strong>Avaliação:</strong> ${rating.getAttribute('data-rating')} estrela(s)<br><strong>Comentário:</strong> ${comment}`;
                commentsDiv.appendChild(commentElement);

                
                const hr = document.createElement('hr');
                commentsDiv.appendChild(hr);

                
                stars.forEach(star => star.classList.remove('rated'));
                commentInput.value = '';
                usernameInput.value = '';
            } else {
                alert('Por favor, preencha todos os campos: avaliação, comentário e nome do usuário.');
            }
        });