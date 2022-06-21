function getTheme() {
    const theme = localStorage?.getItem('theme') ?? 'light'
    switchTheme(theme)
    return theme
}

function switchTheme(theme: string) {
    localStorage.theme = theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

export { getTheme, switchTheme }