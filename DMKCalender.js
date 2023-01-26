const monthE = document.querySelector(".date h1");
const fullDateE = document.querySelector(".date p");
const monthIndex =new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(),monthIndex+1,0).getDate();
const daysE = document.querySelector(".days");
const firstDay = new Date(new Date().getFullYear(),monthIndex,1).getDay()+6;




const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

monthE.innerHTML= months[monthIndex];
fullDateE.innerHTML=new Date().toDateString();

let days = "";

for(let i=firstDay;i>0;i--){
    days+=`<div class"empty></div>`;

}

for(let i=1;i<=lastDay;i++){
    if(i== new Date().getDate()){
        days+=`<div class"today">${i}</div>`;

    }else{
    days+=`<div>${i}</div>`;
    }
}

daysE.innerHTML=days;
console.log(firstDay);
