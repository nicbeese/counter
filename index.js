let home = document.getElementById("score-home")
let guest = document.getElementById("score-guest")

homeCount = 0
guestCount = 0

function homePlus1() {
    homeCount += 1
    home.textContent = homeCount
}
function homePlus2() {
    homeCount += 2
    home.textContent = homeCount
}
function homePlus3() {
    homeCount += 3
    home.textContent = homeCount
}

function guestPlus1() {
    guestCount += 1
    guest.textContent = guestCount
}
function guestPlus2() {
    guestCount += 2
    guest.textContent = guestCount
}
function guestPlus3() {
    guestCount += 3
    guest.textContent = guestCount
}