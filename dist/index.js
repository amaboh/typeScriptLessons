"use strict";
const reviewTotalDisplay = document.querySelector('#reviews');
const userNameDisplay = document.querySelector('#user');
const returningUserDisplay = document.querySelector('#returning-user');
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
];
function showReviewTotal(value, reviewer, isLoyal) {
    const loyaLCustomer = isLoyal === true ? "⭐️" : "";
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + " " + loyaLCustomer;
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 30,
    stayedAt: ['Douala', 'Bafoussam', 'London', 'New York', 'Abuja']
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.firstName);
