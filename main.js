function getcomputerchoice()
{
    return Math.floor(Math.random()*3);
}



function gethumanchoice()
{
    return prompt("enter you choice");
}





function playround(hc,cc,hs,cs) {


    switch(hc) {
        case 0:
            switch(cc){
                case "rock":
                    console.log("it is tie");
                    break;
                case "paper":
                    console.log("you win,paper beats rock");
                    hs+=1;
                    break;
                case "scissor":
                    console.log("you lose,rock beats scissor");
                    cs+=1;
                    break;
                default:
                    console.log("invalid input");
                    break;  
            }
            break;
        case 1:
                switch(cc){
                    case "rock":
                        console.log("you lose, paper beats rock");
                        cs+=1;
                        break;
                    case "paper":
                        console.log("tie");
                        break;
                    case "scissor":
                        console.log("you win, scissor beats paper");
                        hs+=1;
                        break;
                    default:
                        console.log("invalid input");
                        break;  
                }
            break;
        case 2:
            switch(cc){
                case "rock":
                    console.log("you win, rock beats scissor");
                    hs+=1;
                    break;
                case "paper":
                    console.log("you lose, scissor beats paper");
                    cs+=1;
                    break;
                case "scissor":
                    console.log("tie");
                    break;
                default:
                    console.log("invalid input");
                    break;  
            }
            break;
    }


    return [hs,cs];
}


function playgame(humanscore,computerscore)
{
    let a = getcomputerchoice();
    let b=gethumanchoice();
    let new_b=b.toLowerCase();

    const arr=playround(a,new_b,humanscore,computerscore);
    
    return arr;
}

let humanscore=0;
let computerscore=0;

const arr =[0,0];
let new_arr = playgame(humanscore,computerscore);
arr[0]+=new_arr[0];
arr[1]+=new_arr[1];

new_arr = playgame(humanscore,computerscore);
arr[0]+=new_arr[0];
arr[1]+=new_arr[1];

new_arr = playgame(humanscore,computerscore);
arr[0]+=new_arr[0];
arr[1]+=new_arr[1];

new_arr = playgame(humanscore,computerscore);
arr[0]+=new_arr[0];
arr[1]+=new_arr[1];

new_arr = playgame(humanscore,computerscore);
arr[0]+=new_arr[0];
arr[1]+=new_arr[1];

console.log("final human",arr[0]);
console.log("final computer",arr[1])