/* Nav that appears on scroll up */

const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // scrolled down -- header hide
        header.classList.add("scroll-down");
        header.classList.remove("scroll-up");
    } else {
        // scrolled up -- header show
        header.classList.add("scroll-up");
        header.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
})

/* Menu btn click */

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen = true;
    document.getElementById("mySidenav").style.width = "100%";
    document.body.style.overflow = 'hidden';
    document.getElementsByClassName('menu-btn').style.display = flex;
  }else{
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.overflow = 'auto';
  }
})


const email = document.getElementById("email");
const tooltip = document.createElement("span");
tooltip.classList.add("tooltip");
email.appendChild(tooltip);

email.onclick = function() {
    const emailText = email.textContent.split('Copy')[0].trim();
    navigator.clipboard.writeText(emailText);
    tooltip.textContent = "Copied!";
    setTimeout(function() {
        tooltip.textContent = "Copy";
    }, 1000); 
};


/* flipping projects */

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', () => {
        project.classList.toggle('project-clicked');
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const projects = document.querySelectorAll('.project');

  projects.forEach(function(project) {
    const projectContainer = project.closest('.project-container');
    const projectInner = project.querySelector('.project-inner');
    const projectFront = project.querySelector('.project-front');
    const projectBack = project.querySelector('.project-back');

    let isFrontFacing = true;

    project.addEventListener('click', function() {
      if (isFrontFacing) {
        projectInner.style.transform = 'rotateY(180deg)';
        projectFront.style.display = 'none';
        projectBack.style.display = 'block';
      } else {
        projectInner.style.transform = 'rotateY(0deg)';
        projectFront.style.display = 'block';
        projectBack.style.display = 'none';
      }
      
      isFrontFacing = !isFrontFacing;
    });
  });
});