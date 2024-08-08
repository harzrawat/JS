const sb = document.querySelector('.submit')
const hidden_num = Math.round(Math.random()*100+1)
const input = document.querySelector('input')
const response_array = new Array()
let count = 0
// let input_num

function checkguess(e){
    sb.style.transform = "translate(-50%) scale(0.9)"
    setTimeout(()=>{
        sb.style.transform = "translate(-50%)"
    },100)
    // e.preventDefault();
    let input_num = document.querySelector('input').value
    // if (e.type === 'keypress' && e.key !== 'Enter') return;
    response_array.push(input_num)
    if ( input_num==hidden_num ){
        
        popup("That's Correct*","yellow","green")
        // break;
        
    }else if(count<9){
        count++;
        update_counter(response_array)

        popup('Try Again...',"red","white")

    }else{
        popup('Game Over!!!',"white","red")
        // break;
    }
};

function popup(messege,color1,color2){
    input.removeEventListener('keypress',handlekeypress)

    const popup = document.createElement('div')
    popup.className = 'popup'
    popup.style.backgroundColor = color2

    const txt = document.createElement('h1')
    txt.id = "alert-text"
    txt.style.color = color1
    txt.appendChild(document.createTextNode(messege))
    
    
    popup.append(txt)
    document.querySelector('.container').append(popup)
    
    const cover = document.createElement('div')
    cover.className = "cover"
    document.body.append(cover)
    setTimeout(()=>{
        popup.remove()
        cover.remove()
        if (messege ==="Game Over!!!" || messege ==="That's Correct*"){
            window.location.reload()
        }else{
            input.addEventListener('keypress',handlekeypress)
        }
        
    },600)
}


function update_counter(input1){
    const para = document.querySelectorAll('p')
    console.log(input1)
    para[0].querySelector('span').innerText = `${input1}`
    para[1].querySelector('span').innerText = 10-count
}

sb.addEventListener('click', checkguess)
const handlekeypress = (e)=>{
    if(e.key==='Enter'){
        checkguess(e);
    }
}
input.addEventListener('keypress',handlekeypress)

// checkguess();

// Learnings : 
/* 
input fields in form are submitted hence refreshed on ENTER press, BUTTON tag click
-- we can add disable attribute to input field when guess remaining value is 0
 */





