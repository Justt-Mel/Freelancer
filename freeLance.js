const table = document.getElementById('.info')
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
render();
//created the interval of which frelancers are added
const i = setInterval(() => {
    freeLan.push(randFree())
    render();
    if (freeLan.length === 18)
    {
        clearInterval(i)
    }
}, 2000);