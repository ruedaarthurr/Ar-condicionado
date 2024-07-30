document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mensagemEnviada').style.display = 'block';
    this.reset();
});