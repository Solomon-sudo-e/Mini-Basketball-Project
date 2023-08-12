
homeScoreEl = document.getElementById("homeScore")
guestScoreEl = document.getElementById("guestScore")

let homeScore = 0
let guestScore = 0

function plusOneH() {
    homeScore++
    homeScoreEl.textContent = homeScore
}

function plusOneG() {
    guestScore++
    guestScoreEl.textContent = guestScore    
}

function plusTwoH() {
    homeScore += 2
    homeScoreEl.textContent = homeScore    
}

function plusTwoG() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function plusThreeH() {
    homeScore += 3
    homeScoreEl.textContent = homeScore  
}

function plusThreeG() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}