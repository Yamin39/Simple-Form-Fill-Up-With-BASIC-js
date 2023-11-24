alert("Give all of your information we want");

// getting infos via prompt

let $fullName = prompt("Your Full Name:");
let $DateOfBirth = prompt("Your Date of Birth: dd/mm/yyyy");
let $gender = prompt("Your Gender: male/female");
let $nationality = prompt("Your Nationality");
let $address = prompt("Your Address");
let $email = prompt("Your Email:");
let $phoneNumber = prompt("Phone Number");

// printing values in html

let fullName = document.querySelector(".Vname");
let DateOfBirth = document.querySelector(".Vdob");
let gender = document.querySelector(".Vgender");
let nationality = document.querySelector(".Vnationality");
let address = document.querySelector(".Vaddress");
let email = document.querySelector(".Vemail");
let phoneNumber = document.querySelector(".Vphone");

fullName.innerHTML = $fullName;
DateOfBirth.innerHTML = $DateOfBirth;
gender.innerHTML = $gender;
nationality.innerHTML = $nationality;
address.innerHTML = $address;
email.innerHTML = $email;
phoneNumber.innerHTML = $phoneNumber;