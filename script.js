// დავალება 1 -  ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

// let numbers = 5;

// while (numbers <= 100) {
// console.log(numbers);
// numbers++;
// }






// დავალება 2 - მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე


// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// for (let items of array1) {
//   if (items > 0 && items < 10){
//     console.log(items);
//   }
// }






// დავალება 3 -  მოცემულია მასივი:
// let array2= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

// let array2= [1, 2, 3, 4, 5];
// let sum = 0
// for(let i = 0; i < array2.length; i++){
//   sum += array2[i]
// }
// console.log(sum);
  




//დავალება 4 - let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამიგავყოთ ელემნტების რაოდენობაზე)

// let array3= [1, 2, 3, 4, 5];


// let sum = 0
// let jami = 0
// for (let i = 0; i < array3.length; i++) {
//     sum += array3[i]  

// }
// jami += sum / array3.length
// console.log(jami)






//დავალება 5  - ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

// let user = {
//   firstname: "giorgi",
//   lastname: "smith",
//   age: 25,  
//   studentstatus: "active"
// };
// console.log(user.studentstatus);4






//დავალება 6 - მოცემულია ობიექტი: თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

// ეს ამოცანა უდნა შეასრულოთ ორივე if- ის ჩანაწერით;

// let user2 = {
//   name: 'anna',
//   age:  20,
//   studentstatus: 'active'
// }
// if(user2.age < 18 && user2.studentstatus == 'active'){
//   console.log('hello user')
// }
// if(user2.name == 'levani'){
//   console.log('hello levani')
// }
// if(user2.studentstatus == 'active' || user2.age < 25){
//   console.log('hello anna')
// }







// დავალება 7 - მოცემულია მასივი:
// let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
// ამოიღეთ მხოლოდ ლუწი რიცხვები

// for(let i = 0; i < array6.length; i++){
//   if(array6[i] % 2 == 0){
//     console.log(array6[i])
//   }
// }









// დავალება 8 - მოცემულია მასივი
// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]
// for(let i = 0; i < users.length; i++){
//   console.log(users[i])
// }










// დავალება 9 - Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:


// let array7 = [32, 14, null, '40', 50];



// for (let items of array7){
//   if(array7[i] % 5 == 0){
//     console.log(array7[i]);
//   }
// }



//დავალება 10 - Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

// let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

// console.log(array8[0][0]);

 





