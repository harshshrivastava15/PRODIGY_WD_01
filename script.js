const close = document.getElementById('close')
    const open = document.getElementById('open')
    const mobilenavbar = document.querySelector('.navbar')
function showSidebar(){
    
    mobilenavbar.style.display='flex'
    close.style.display='flex'
    open.style.display='none'
    
}
function HideSidebar(){
    
    mobilenavbar.style.display='none'
    close.style.display='none'
    open.style.display='flex'
}


// const observer=new IntersectionObserver((entries)=>{
//     entries.forEach((entry) => {
//         if(entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }
//         else{
//             entry.target.classList.remove('show');
//         }
//     })
// })
// const hiddenElements = documentquerySelectorAll('.hidden');
// hiddenElements.forEach((el)=>observer.observe(el))
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


function loginpg() {
    const login = document.getElementById('login')
    const para = document.getElementById('para')
    
    login.style.display='block';
    para.style.display='none';


}