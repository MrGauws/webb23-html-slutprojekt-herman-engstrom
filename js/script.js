// Toggle header On/Off
let NavBtn = document.getElementById('NavBtn')

NavBtn.addEventListener('click', function(e) {
    console.log(e);
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Auto-type

let typed = new Typed('.auto-input',{
    strings: ['Web-Developer...', 'Front-End Developer...', 'UI/UX Designer...', 'Streamer...'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})


// About Links
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}