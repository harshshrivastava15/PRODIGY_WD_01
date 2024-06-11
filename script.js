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