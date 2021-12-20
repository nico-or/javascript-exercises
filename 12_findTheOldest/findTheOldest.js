const findTheOldest = function(people) {
    let oldest = people[0];
    for (person of people) {
        if (getAge(person) > getAge(oldest)) {
            oldest = person;
        }
    }
    return oldest;
};

function getAge(person) {
    if (!person.yearOfDeath){ 
        let date = new Date;
        return date.getFullYear() - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
