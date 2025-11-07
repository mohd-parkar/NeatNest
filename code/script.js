

const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});


let form = document.querySelector("form");
let username = document.getElementById("usernamee");
let useremail = document.getElementById("useremail");
let userphone = document.getElementById("phoneno");
let homeSize = document.getElementById("sqft");
let usercity = document.getElementById("usercity");
let userservice = document.getElementById("servicename");



form.addEventListener("submit",function(event){
    event.preventDefault();
    let uname = username.value;
    let uemail = useremail.value;
    let uphone = userphone.value;
    let uhomesize = homeSize.value;
    let uservice = userservice.value;
    let ucity = usercity.value;


    console.log("Data Collected");
    console.log(`username : ${uname} `);
    console.log(`mail : ${uemail} `);
    console.log(`phone no. : ${uphone} `);
    console.log(`city : ${ucity} `);
    console.log(`service : ${uservice} `);
    console.log(`home(sq.ft) : ${uhomesize} `);


    alert(`Reponse Submitted`);
    

    username.value ="";
    useremail.value ="";
    userphone.value ="";
    userphone.value ="";
    homeSize.value ="";
    usercity.value ="";
    userservice.value ="";

    
})

