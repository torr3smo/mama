document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (title === '' || author === '') {
        alert('Por favor, preencha todos os campos');
        return;
    }

    const bookList = document.getElementById('book-list');

    // Criar um novo elemento de livro
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
        <h3>${title}</h3>
        <p>by ${author}</p>
    `;

    // Adicionar ao DOM
    bookList.appendChild(bookDiv);

    // Limpar o formulário
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
});
