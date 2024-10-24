/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
const formData = document.getElementById("contactForm");

function onFormSubmission(event) {
   
    const formName = document.getElementById("name").value.trim();
    const formEmail = document.getElementById("email").value.trim();
    const formPhone = document.getElementById("number").value.trim();

    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validNumber = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const validFullName = /^(?!\s*$)[a-zA-Z']+([\s-][a-zA-Z']+)*$/;

    let isValid = true;

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("numberError").textContent = "";

    // Check if fields are empty
    if (formName === "") {
        document.getElementById("nameError").textContent = "Name cannot be empty.";
        isValid = false;
    } else if (!validFullName.test(formName)) {
        document.getElementById("nameError").textContent = "Enter a valid name.";
        isValid = false;
    }

    if (formEmail === "") {
        document.getElementById("emailError").textContent = "Email cannot be empty.";
        isValid = false;
    } else if (!validEmail.test(formEmail)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    if (formPhone === "") {
        document.getElementById("numberError").textContent = "Number cannot be empty.";
        isValid = false;
    } else if (!validNumber.test(formPhone)) {
        document.getElementById("numberError").textContent = "Enter a valid 10-digit number.";
        isValid = false;
    }

    // If form is valid, proceed with form submission
    if (isValid) {
        console.log("Form is valid. You can now submit the form.");
        // Here you can submit the form via AJAX or handle the data further
        // For example, you can use fetch to send the data to your server:
        // fetch(formData.action, {
        //     method: "POST",
        //     body: new FormData(formData)
        // });
    } else {
        console.log("Form is invalid. Please fix the errors.");
        event.preventDefault(); // Prevent the default form submission

    }
}

// Attach event listener to the form
formData.addEventListener('submit', onFormSubmission);