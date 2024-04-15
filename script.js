/*

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
*/

// Function to change background color when clicked
function changeBackgroundColor() {
    var color = getRandomColor();
    var aboutMe = document.getElementById('about-me');
    aboutMe.style.backgroundColor = color;
}

// Event listener to change background color on click
document.addEventListener('click', changeBackgroundColor);

function toggleMenu() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}


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

function dropDownNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}


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
    }, 1500); // Reset tooltip text after 1.5 seconds
};

const projects = document.querySelectorAll('.project');

// Add click event listener to each project
projects.forEach(project => {
    project.addEventListener('click', () => {
        // Toggle the 'project-clicked' class to trigger the flip animation
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