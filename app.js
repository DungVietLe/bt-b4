// // sử dụng vòng lặp while.
// // tạo 1 chương trình cho người dùng nhập thêm bớt sửa và đọc phone number
// // khi hoàn thành 1 chức năng sẽ quay lại menu CRUD để người dùng chọn 
// // nếu người dùng  nhập "C" => tạo mới 1 element ==> quay lại menu
// // nếu người dùng  nhập "R" => Cho người dùng nhập chỉ số INDEX, in ra nó. ==> quay lại menu
// // nếu người dùng  nhập "U" => cập nhật 1 phần tử do người dùng nhập index ==> quay lại menu
// // nếu người dùng  nhập "D" => hỏi người dùng chỉ số index muốn xóa => xoa no ==> quay lại menu 



// let newArray = [1, 2, 4, 5];

// let isLoop = true;

// while (isLoop) {
//     let input = prompt('Chose the function C/R/U/D:');
//     if (input === 'C' || input === 'c') {
//         let add = Number(prompt('add Phone number :'));
//         newArray.push(add);
//         alert(newArray);

//     } else if (input === 'R' || input === 'r') {
//         let inputIndex = Number(prompt('Enter ur index :'));
//         if (inputIndex < 0 || inputIndex > newArray.length) {
//             alert('pls  other number ');
//         } else {
//             alert(newArray[inputIndex]);
//         }

//     } else if (input === 'U' || input === 'u') {
//         let inputIndex2 = Number(prompt('Enter ur index :'));
//         let getValue = Number(prompt('enter the new phone :'));
//         if (inputIndex2 < 0 || inputIndex2 > newArray.length) {
//             alert('pls other number');
//         } else {
//             newArray[inputIndex2] = getValue;
//             alert(newArray);
//         }
//     } else if (input === 'D' || input === 'd') {
//         let del = Number(prompt('enter ur index for delete :'));
//         if (del < 0 || del > newArray) {
//             alert('pls other number ');

//         }else {
//             newArray.splice(del , 1 );
//             alert(newArray);
//         }
//     }else {
//         alert('something wrong , pls press C/U/R/D');
//     }

// }


/**Bai1 : Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
 // let inputNumber = prompt('enter a number , separated by commas (,)');
 
 // let cleanInput = [];
 
 // cleanInput = inputNumber.split(',');
 // let sum = 0;
 // for (let i = 0; i < cleanInput.length; i++) {
 //     console.log(parseInt(cleanInput[i]));
 //     sum += parseInt(cleanInput[i])
 // }
 // alert('the sum of them is ' + sum);
 */



/**BAI 2 
 // let inputNumber = prompt('Enter a squence of number , separated by ","');
 // let cleanInput = [];
 
 // cleanInput = inputNumber.split(',');
 
 // let newArray = [];
 
 // for (let i = 0; i < cleanInput.length; i++) {
 
 //     newArray.push(parseInt(cleanInput[i]))
 // }
 
 // console.log(newArray);
 
 // let min = Math.min.apply(Math, newArray);
 // alert('so nho nhat la :' + min);
 * 
 */

/**Bai 3 
 * 
 //  const arr = [3, 4, 6, -9, 10, -88, 2];
 
 
 //  let inputNumber = Number(prompt('Enter the numbers:'));
 
 // console.log(arr.indexOf(inputNumber));
 // if (arr.indexOf(inputNumber) != -1 ) {
 //     alert(inputNumber + 'is found in array at index ' + arr.indexOf(inputNumber));
 // }else {
 //     alert('not found')
 // }
*/



/** BAI 4
 let inputArray = [5, 7, 300, 90, 24, 50, 75];
 
 
 console.log(`Hello , my name is Phuong Nam anhd here is my sheep sizes : `);
 console.log(...inputArray);
 let max = Math.max(...inputArray);
 console.log(`Now my biggest sheep has size ${max}, let's shave it`);
 
 
 console.log('After shearing, here is my flock ');
 const index = inputArray.indexOf(Math.max(...inputArray));
 inputArray[index] = 8;
 console.log(...inputArray);
 
 console.log('MONTH 1');
 for (let i = 0; i < inputArray.length; i++) {
     inputArray[i] += 50;
 }
 console.log(...inputArray);
 let max2 = Math.max(...inputArray);
 console.log(`Now my biggest sheep has size ${max2}, let's shave it`);
 const index2 = inputArray.indexOf(Math.max(...inputArray))
 inputArray[index2] = 8;
 console.log(...inputArray);
 
 console.log('MONTH 2 ');
 for (let i = 0; i < inputArray.length; i++) {
     inputArray[i] += 50;
 
 
 }
 console.log(...inputArray);
 let max3 = Math.max(...inputArray);
 console.log(`Now my biggest sheep has size ${max3}, let's shave it`);
 const index3 = inputArray.indexOf(Math.max(...inputArray))
 inputArray[index3] = 8;
 console.log(...inputArray);
 console.log('MONTH 3');
 for (let i = 0; i < inputArray.length; i++) {
     inputArray[i] += 50;
     
 }
 console.log(...inputArray);
 
 console.log(`My flock has size in total: ${1010}`);
 let total = 0;
 for(let i = 0 ; i < inputArray.length; i++) {
  total += inputArray[i];
 
 }
 let value = 2;
 let mutiply = total * value;
 console.log(`I would get: ${total} * ${value}$ = ${mutiply}`);
 
 * 
*/


/**Bai 5
 * 
 // let getName = prompt('Enter a sequence of names , commas (,)');
 
 // let cleanName = getName.split(',');
 // alert(`${getName} => <${cleanName.join('> ,<')}>`);
 */

/**Bai 6
 * 
 let getNumber = prompt('Enter a number :');
 
 let cleanNumber = getNumber.split(',');
 let newArray = [];
 
 for (let i = 0 ; i < cleanNumber.length ; i++){
     if(cleanNumber[i] %2 != 0 ) {
         let result = cleanNumber[i];
        
         newArray.push(result);
     }
 }
 
 
 alert(`${getNumber} => ${newArray}`);
 */

