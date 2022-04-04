//DOM selector
const result = document.querySelector("h1");
const buttons = Array.from(document.querySelectorAll(".button"));


buttons.map((button) => {
    button.addEventListener("click",calc);
});

function calc(e){
    let val = e.target.innerText;
    switch(val){
        case 'AC' : result.innerText = '';
                    break;
        case '←' : result.innerText = result.innerText.slice(0,-1);
                    break;
        case '=' : try{
                        if(result.innerText  === ''){
                            result.innerText = '';
                        }
                        else{
                            result.innerText  = eval(result.innerText);
                        }
                        break;
                    }catch(e){
                        result.innerText = "Error!!";
                        break;
                    }

        default : result.innerText += val;
    }

}