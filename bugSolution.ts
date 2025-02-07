function printName(person: {firstName: string; lastName?: string}): void {
  console.log(person.firstName + ' ' + person.lastName);
}

const user = { firstName: 'John' };
printName(user); // This will work fine

const user2 = { firstName: 'Jane', age: 30 };
printName(user2); // This will also work fine because age is optional

const user3 = { lastName: 'Doe' };
// printName(user3); // This will cause a compile-time error because firstName is required

// Solution 1: Provide default values
function printNameWithDefault(person: {firstName: string; lastName?: string}): void {
  console.log(person.firstName + ' ' + (person.lastName || ''));
}
printNameWithDefault(user3);

//Solution 2: Use union types
function printNameWithUnion(person: {firstName: string; lastName?: string} | {lastName?: string}): void {
    console.log(person.firstName || '' + ' ' + (person.lastName || ''));
}
printNameWithUnion(user3); 
