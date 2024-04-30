function setTheme() {
  const root = document.documentElement
  const currentTheme = root.classList.contains('dark') ? 'dark' : 'light'
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

  root.classList.remove(currentTheme)
  root.classList.add(newTheme)
}

document.addEventListener('DOMContentLoaded', function () {
  setTheme()
})

document.querySelector('.theme-toggle').addEventListener('click', setTheme)