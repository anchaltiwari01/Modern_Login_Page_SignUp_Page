const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signUpMobile = document.getElementById('signUpMobile');
const signInMobile = document.getElementById('signInMobile');
const container = document.getElementById('container');

// Panel Swapping Logic
const toggleRight = (e) => {
    e.preventDefault();
    container.classList.add("right-panel-active");
};

const toggleLeft = (e) => {
    e.preventDefault();
    container.classList.remove("right-panel-active");
};

signUpButton.addEventListener('click', toggleRight);
signInButton.addEventListener('click', toggleLeft);
signUpMobile.addEventListener('click', toggleRight);
signInMobile.addEventListener('click', toggleLeft);

// Form Validation Logic
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        
        const inputs = form.querySelectorAll('input');
        
        inputs.forEach(input => {
            const errorPopup = input.nextElementSibling;
            if (input.value.trim() === "") {
                errorPopup.classList.add('show');
                isValid = false;
                
                // Hide error after 2.5 seconds
                setTimeout(() => {
                    errorPopup.classList.remove('show');
                }, 2500);
            } else {
                errorPopup.classList.remove('show');
            }
        });

        if (isValid) {
            console.log("Form submitted successfully!");
            // Add your login/registration logic here
        }
    });
});