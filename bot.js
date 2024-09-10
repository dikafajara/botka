const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")


let init = 0

const botSay = (data) => {
    return [
        "Hallo saya botka bolehkah kita kenalan, siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Ohh ${data?.usia}, hobi kamu apa btw?`,
        `waw kamu suka ${data?.hobi}, btw punya pacar ga?`,
        `Ohhh ${data?.pacar},ya udah ya gitu aja, Thank u`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []


function botStart () {  
    init++
    if(init ===1) {
       botDelay({ nama : jawaban.value})

    } else if(init === 2) {
       botDelay({ usia : jawaban.value})
    } else if (init === 3) {
       botDelay({ hobi : jawaban.value})
    }else if (init === 4) {
       botDelay({ pacar : jawaban.value})
    }else if (init === 5) {
        finishing()
    }   else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log({ usersData : usersData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser) [init] 
    }, [250])
    usersData.push(jawaban.value)
    jawaban.value=""
}

function finishing () {
    pertanyaan.innerHTML=`Thank u ya ${usersData[0]} udah meluangkan waktunya, semoga sehat selalu😊`
    jawaban.value = "Thanks juga"
}

function botEnd () {
     window.location.reload()
}