let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let mulText = document.querySelector('.multiple-text');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// let text = mulText.textContent;
// let arr = text.split('');

// mulText.textContent = '';
// arr.forEach(char => {
//     console.log(char);

//     let span = `<span class="split-char" >${char}</span>`;
//     mulText.insertAdjacentHTML('beforeend', span);
// });

 // handle form submission
 const form = document.getElementById('contactForm');
 
 form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;

    // Create data object to send in request
    const data = {
        fullName: fullName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        emailSubject: emailSubject,
        message: message
    };
     
     try {
         const response = await fetch('http://localhost:3000/send', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
         });

         if (response.ok) {
             alert('Message sent successfully!');
         } else {
             alert('Error sending message.');
         }
     } catch (error) {
         alert('Error sending message. Please try again later.');
     }
 });