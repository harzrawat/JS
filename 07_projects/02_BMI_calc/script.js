let sb = document.querySelector('input[type="submit"]')
// console.log(sb);

// sb.addEventListener('click', (event)=>{
//     console.log(new Number(document.querySelector('[name="height"]').value));
    // const ht = parseInt(document.querySelector('[name="height"]').value)
    // const wt = parseInt(document.querySelector('[name="weight"]').value)
//     const result = document.createElement('p')
//     result.style.color = "white";

//     const trybtn = document.createElement('button')
//     trybtn.className = "try";
    
//     trybtn.appendChild(document.createTextNode('Try Again'))
    
//     let text
//     if (ht && wt){
//         const bmi = wt/(ht/100)**2
        
//         console.log(bmi);
//         text = `Your BMI is ${bmi.toFixed(2)}.`
//     }else{
//         console.log('no');
//         text = "Enter valid inputs"
//     };
//     result.innerText = text
//     document.querySelector('.container').append(result);
//     sb.replaceWith(trybtn)
//     // document.querySelector('.response').append(trybtn)
//     // console.log(document.querySelector('p'));

//     document.querySelector('.try').addEventListener('click', (e)=>{
//         console.log("try clicked");
//         window.location.reload();
//     })
// })

function handleBMI() {
    console.log(new Number(document.querySelector('[name="height"]').value));
    const ht = parseFloat(document.querySelector('[name="height"]').value)
    const wt = parseFloat(document.querySelector('[name="weight"]').value)
    const result = document.createElement('p')
    result.style.color = "white";

    const trybtn = document.createElement('button')
    trybtn.className = "try";
    
    trybtn.appendChild(document.createTextNode('Try Again'))
    
    let text
    if (ht && wt){
        const bmi = wt/(ht/100)**2
        
        console.log(bmi);
        text = `Your BMI is ${bmi.toFixed(2)}.`
    }else{
        console.log('no');
        text = "Enter valid inputs"
    };
    result.innerText = text
    document.querySelector('.container').append(result);
    sb.replaceWith(trybtn)
    // document.querySelector('.response').append(trybtn)
    // console.log(document.querySelector('p'));

    document.querySelector('.try').addEventListener('click', (e)=>{
        console.log("try clicked");
        window.location.reload();
    })
};

sb.addEventListener('click', handleBMI);


// code if there was a form
/* 
document.querySelector('form')addeventListener('submit', bmi_calulator)

function bmi_calculator(e){
    // ===== your code ====
}
*/

