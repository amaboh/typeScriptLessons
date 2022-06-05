const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;
const userNameDisplay = document.querySelector('#user') as HTMLElement;
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement;


const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andre',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },

]

function showReviewTotal (value: number, reviewer:string, isLoyal: boolean){

    const loyaLCustomer = isLoyal === true ? "⭐️" : "";
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + " " + loyaLCustomer;
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you :{
    firstName : string, 
    lastName : string, 
    isReturning: boolean, 
    age: number,
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 30,
    stayedAt: [ 'Douala','Bafoussam', 'London', 'New York', 'Abuja']

}

function populateUser (isReturning: boolean, userName: string){
    if(isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.firstName)