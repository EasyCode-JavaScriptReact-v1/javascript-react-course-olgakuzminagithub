/* Задание 1 */

// function  checkActionType(action) {
//     let object = {};
//     switch (action.type) {
//         case "INITIALIZE":
//             object.initialized = true;
//             break;
//         case "INCREMENT":
//             object.salary = '+500$';
//             break;
//         case "DECREMENT":
//             object.salary = '-500$';
//             break;
//         default: console.log('нет такого свойства')
//     }
//     return object;
//
// }
//
// console.log(checkActionType({type: 'INITIALIZE'}));
// console.log(checkActionType({type: 'INCREMENT'}));
// console.log(checkActionType({type: 'DECREMENT'}));


/* Задание 2 */
 //
 // function add() {
 //     let sum = 0;
 //     for (let i = 0; i < arguments.length; i++) {
 //        sum += arguments[i];
 //     }
 //     console.log(sum);
 //     console.log('длина функции', add.arguments);
 //
 // }
 //
 //
 //
 // add(1,2,3);
 // add (10, 20, 30);


/* Задание 3 */


 const user = {
     id: 10,
     country: 'Ukraine',
     email: 'exemple@gmail.com',
     cars: {
         id: 20,
         name: ['one', 'two', 'three'],
         vendors: {
             addresses: ['google', 'yahoo']
         }
     }
 };

/*
скопировать объект */


function copyObject(obj) {
    let newObject = {
        ...obj,
        cars: {
            ... obj.cars,
            name: [... obj.cars.name],
            vendors: {
                ... obj.cars.vendors,
                addresses: [... obj.cars.vendors.addresses]
            }
        }
    };
    return newObject;
}

const newUser = copyObject(user);
newUser.cars.vendors.addresses.push("name");

console.log(user.cars);
console.log(newUser.cars);

