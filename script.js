const $profileButton = document.querySelector(".profile-button")
const $sharingButton = document.querySelector(".sharing-button")
const $profile = document.querySelector(".profile")
const $sharePanel = document.querySelector(".share-panel")

$profileButton.addEventListener("click",function(){
    $profile.classList.toggle("hidden")
    $sharePanel.classList.toggle("hidden")
})

$sharingButton.addEventListener("click",function(){
    $profile.classList.toggle("hidden")
    $sharePanel.classList.toggle("hidden")
})

