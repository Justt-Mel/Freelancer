const table = document.getElementById('.info')
const table1 = document.getElementById('.avg')
//bin of random Jobs to generate from 
const jobs = ["Programmer","Tutor","Artist","Lawyer","Accountant","Photographer","Driver","Gardener"];
//bin of random names to generate from
const person = ["James","Amy","Sam","Justin","Ethan","Jeff","Frank","Liz","Sophia","Claire"];

//function to generate freelancer data 
function randFree(){
    const freeJob = Math.floor(Math.random()* jobs.length);
    const randPer = Math.floor(Math.random()* person.length);
    const freeLancers = {
        per: person[randPer],
        career: jobs[freeJob],
        //random price generator where 30 is the lowest
        wage: Math.floor(Math.random()*(100-30+1))+30
    };
    return freeLancers;
}
//a console log to see if randFree works
console.log(randFree());
//created an array to store freelancers
const freeLan = [randFree()];
// render function to minipulate the table in the HTML
function render(){
    const html = freeLan.map((free) => {
        return `<tbody>
                     <td>${free.per}</td>
                     <td>${free.career}</td>
                     <td>${free.wage}</td>
                </tbody>`
    })
        info.innerHTML = html.join("")
}
// gets the sum of all freelancers prices 
function sumPrice(num){
    const addPrice = num.reduce((accumulator,current)=>{
     return accumulator += current.wage},0) 
     return addPrice; 
 }
 // average function 
 function averagePay(x)
 {
    return sumPrice(x)/ freeLan.length;
 }
 console.log(averagePay(freeLan))
 //this render was to check if it worked
render();
//created the interval of which frelancers are added
const i = setInterval(() => {
    freeLan.push(randFree());
    // shows the sum of all the freelancers pay
    console.log(sumPrice(freeLan));
    // shows the avg of all the freelancers pay 
    console.log(averagePay(freeLan));
    //updates the HTML with the current average
    avg.innerHTML = averagePay(freeLan);
    render();
    
    if (freeLan.length === 18)
    {
        clearInterval(i)
    }
}, 100);


