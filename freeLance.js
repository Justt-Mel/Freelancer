const jobs = ["Programmer","Tutor","Artist","Lawyer","Accountant","Photographer","Driver","Gardener"];

const person = ["James","Amy","Sam","Justin","Ethan","Jeff","Frank","Liz","Sophia","Claire"];

const price = Math.floor(Math.random()*(100-30+1))+30;

function randFree(){
    const freeJob = Math.floor(Math.random()* jobs.length);
    const randPer = Math.floor(Math.random()* person.length);
    const freeLancers = {
        per: person[randPer],
        career: jobs[freeJob],
        wage: price
    }
    console.log(freeLancers)
}
randFree()

