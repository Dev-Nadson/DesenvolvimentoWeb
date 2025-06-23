function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector("#profile img") // Mesma tag do css

    html.classList.toggle('light')
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'foto perfil light')
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'foto perfil dark')
    }
}