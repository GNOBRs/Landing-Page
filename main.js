const AbreMenu = () => {
    const menu = document.querySelector(".menu-lateral")

    menu.classList.toggle('menu-lateral--ativo')

    click_botao.classList.toggle('botao-menu--ativo')
}

const click_botao = document.querySelector("#botao")

click_botao.addEventListener("click", AbreMenu)

const musica = document.querySelector("#audio")

musica.volume = 0.5
musica.play()

const TocarMusica = () => {
    if (document.querySelector("#audio").paused == true) {
        document.querySelector("#audio").play()
        botao.classList.toggle("fa-pause")
        botao.classList.toggle("fa-play")
    } else {
        document.querySelector("#audio").pause()
        botao.classList.toggle("fa-pause")
        botao.classList.toggle("fa-play")
    }
}

const botao = document.querySelector("[data-botao-audio]")

botao.addEventListener("click", TocarMusica)