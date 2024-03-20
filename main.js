    let userI = +prompt('0) Quduq \n1) Qaychi \n2) Qogoz')
let userBot = Math.floor(Math.random() * 3)

if (userBot == 0) {
    alert('Bot quduqni talang')
}

else if (userBot == 1) {
    alert('Bot qaychini tanladi')
}

else if (userBot == 2) {
    alert('Bot qogozni tanlashdi')
}


if (userBot == userI) {
    alert('Durrang!!!')
}

else if (userBot == 0 && userI === 2) {
    alert('Siz yutiz')
}

else if (userBot == 2 && userI === 0) {
    alert('bot yutdi')
}

else if (userBot == 2 && userI === 1) {
    alert('Siz yutiz')
}

else if (userBot == 1 && userI === 2) {
    alert('Bot yutdi')
}

else if (userBot == 1 && userI == 0) {
    alert('Siz yutiz')
}

else if (userBot == 0 && userI == 1) {
    alert('Bot yutidi')
}

