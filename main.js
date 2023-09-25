const AbreMenu = () => {
    const menu = document.querySelector(".menu-lateral")

    menu.classList.toggle('menu-lateral--ativo')

    click_botao.classList.toggle('botao-menu--ativo')
}

const click_botao = document.querySelector("#botao")

click_botao.addEventListener("click", AbreMenu)