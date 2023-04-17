let btnSubmit = document.getElementById('btn-submit')
let eleName   = document.getElementById('name');
let eleEmail   = document.getElementById('email')
let eleJob   = document.getElementById('job')




// btnSubmit.addEventListener('click', (e) => {
//     localStorage.setItem('Name', JSON.stringify(eleName.value));
//     localStorage.setItem('Email', JSON.stringify(eleEmail.value));
//     localStorage.setItem('Job', JSON.stringify(eleJob.value));
// })


btnSubmit.onclick = function(){
   let fullName = eleName.value 
    let mail = eleEmail.value 
    let cv = eleJob.value 
   console.log(fullName, mail, cv);
}