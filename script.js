const $profileButton = document.querySelector(".profile-button")
const $profile = document.querySelector(".profile")
const $sharePanel = document.querySelector(".share-panel")
const $share=document.querySelector(".share")

$profileButton.addEventListener("click",function(){
    $sharePanel.classList.toggle("hidden")
    $profile.classList.toggle("dark")
    $share.classList.toggle("dark-share")
    $profileButton.classList.toggle("share-click")
})


    