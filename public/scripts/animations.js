// search animation;

const searchButton = document.querySelector('.search-button')
const closeSearchButton = document.querySelector('.close-search-button')
const searchBox = document.querySelector('.search-box')
const searchInput = document.querySelector('input')


searchButton.addEventListener('click', () => {
    searchBox.classList.add('active')
    searchInput.classList.add('active')
    searchButton.classList.add('active')
    closeSearchButton.classList.add('active')
})

closeSearchButton.addEventListener('click', () => {
    searchBox.classList.remove('active')
    searchInput.classList.remove('active')
    searchButton.classList.remove('active')
    closeSearchButton.classList.remove('active')
    searchInput.value = ''
})


