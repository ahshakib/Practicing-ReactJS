const incrementBtn = document.getElementById('increment-btn')
const displayCount = document.getElementById('display-count')
const decrementBtn = document.getElementById('decrement-btn')

let currentCount = 0
incrementBtn.addEventListener('click',() => {
    currentCount++
    currentCount = currentCount < 0 ? 0: currentCount
    displayCount.innerText = currentCount
})
decrementBtn.addEventListener('click', () => {

    currentCount--
    currentCount = currentCount < 0 ? 0: currentCount
    displayCount.innerText = currentCount
})