const passwordbox = document.querySelector("#Password");
const length = 8; 

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
// const symbol = "~,`";

const allchar = upperCase + lowerCase + num;

function createpassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];

    while(length > password.length){

        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passwordbox.value = password;

}

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");
}