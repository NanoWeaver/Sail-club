// Реализация задачи переключения темы страницы и её шрифта
let buttonsTheme = document.querySelectorAll('.theme-switcher button');
let buttonsFonts = document.querySelectorAll('.fonts button');


for (let buttonTheme of buttonsTheme ) {
    buttonTheme.onclick = function() {
        let buttonActive = document.querySelector('.theme-switcher .active');
        buttonActive.classList.remove('active');
        buttonTheme.classList.add('active');
        if (buttonTheme.classList.contains('theme-button-dark')) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }
}

for (let buttonFonts of buttonsFonts ) {
    buttonFonts.onclick = function() {
        let buttonActive = document.querySelector('.fonts .active');
        buttonActive.classList.remove('active');
        buttonFonts.classList.add('active');
        if (buttonFonts.classList.contains('font-button-serif')) {
            document.body.classList.add('serif')
        } else {
            document.body.classList.remove('serif')
        }
    }
}


// Реализация разворота текстого болока 
let moreButtons = document.querySelectorAll('.more')


for (const moreButton of moreButtons) {
    moreButton.onclick = function() {
        moreButton.parentElement.parentElement.classList.remove('short')
    }
}


// Реализация переключения раскладки 
let viewButtons = document.querySelectorAll('.card-view-buttons button')


for (const viewButton of viewButtons) {
    viewButton.onclick = function() {
        let buttonActive = document.querySelector('.card-view-buttons .active');
        buttonActive.classList.remove('active')
        viewButton.classList.add('active')
        if (viewButton.classList.contains('card-view-button-list')) {
            document.querySelector('.cards').classList.add('list')
        } else {
            document.querySelector('.cards').classList.remove('list')
        }
    }
}


//Реализация галереи
let mainImage = document.querySelector('.active-photo')
let listImages = document.querySelectorAll('.preview-list a')


for (const listImage of listImages) {
    listImage.onclick = function(evt) {
        evt.preventDefault()
        document.querySelector('.preview-list .active-item').classList.remove('active-item')
        listImage.classList.add('active-item')
        mainImage.src = listImage.href
    }
}