

document.querySelectorAll('.button').forEach((btn)=>{
    btn.addEventListener('click', function changecolor(){
        this.classList.add('clicked');
        setTimeout(()=>{
            this.classList.remove('clicked');
            const bg = document.querySelector('.canvas')
            const id = this.id
            console.log(this.id)
            switch (id){
                case "red":
                    bg.style.backgroundColor = "red";
                    break;
                case "blue":
                    bg.style.backgroundColor = "blue";
                    break;
                case "gray":
                    bg.style.backgroundColor = "gray";
                    break;
                case "yellow":
                    bg.style.backgroundColor = "yellow";
                    break;
                default:
                    break;
            };
        },300);
    })
})


// ========================== chaiaurcode solution ==================================

// this can be one way 

// const btns = document.querySelectorAll('.button')
// const body = document.querySelector('body')

// btns.forEach((btn)=>{
//     console.log(btn);
//     btn.addEventListener('click', function(e){
//         console.log(e);
//         console.log(e.target);
//         if(e.target.id==='gray'){
//             body.style.backgroundColor = "gray";
//         }
//     })
// })





