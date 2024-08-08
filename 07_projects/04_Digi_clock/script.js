const box = document.querySelector('.box')


setInterval(()=>{
    let time = new Date()
    time = time.toLocaleTimeString()
    box.textContent = time
},1000)
