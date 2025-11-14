const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((maxAgePerson,currPerson)=>{
        if (!maxAgePerson) {
            return currPerson;
        };
        let age = (currPerson.yearOfDeath - currPerson.yearOfBirth)
        let maxAge = (maxAgePerson.yearOfDeath-maxAgePerson.yearOfBirth)
        if (age > maxAge) {
            return currPerson;
        } else {
            return maxAgePerson;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
