// Toggle header On/Off
let NavBtn = document.getElementById('NavBtn')

NavBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})