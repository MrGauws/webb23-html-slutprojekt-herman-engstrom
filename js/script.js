// Toggle header On/Off
// Get the Navigation Button by its ID
let NavBtn = document.getElementById('NavBtn')

// Add an event listener to the Navigation Button
NavBtn.addEventListener('click', function(e) {
   // Output the event to the console for readings.
    console.log(e);
    document.querySelector('body').classList.toggle('mobile-nav-active');
    // Toggle the fa-xmark class on the Navigation Button
    this.classList.toggle('fa-xmark')
})

// Auto-type
//This initializes the Typed.js library to create a text animation effect. 
let typed = new Typed('.auto-input',{
    strings: ['Web-Developer...', 'Front-End Developer...', 'UI/UX Designer...', 'Streamer...'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})


// About Links
// Retrieve all tab links and tab contents
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
// Function to open a specific tab
function opentab(tabname){
  // Remove "active" class from all tab links and contents
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  // Add "active" class to clicked tab link and corresponding content
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}