function capturaElemento(el) {
    el.classList.add('disabled')
    el.style = 'color:#9DB2BF !important'
}


function capturaURL() {
    arquivoPage = window.location.pathname
    element = null

    switch (arquivoPage) {
        case '/index.html':
            element = document.getElementById('home')
            capturaElemento(element)
            break;
        case '/pages/aboutme.html':
            element = document.getElementById('sobre')
            capturaElemento(element)
            break;

        default:
            console.log('não deu certo')
            break;
    }

    console.log(arquivoPage)
}

capturaURL()