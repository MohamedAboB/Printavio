let open_username = document.getElementById('Username-Shopname');
let open_user_designer =document.querySelector('.designer-user');
let open_user_customer =document.querySelector('.customer-user');


open_user_designer.addEventListener('click', function(){
    let user = document.getElementById('name-kind');
    user.innerText = 'Shopname';
    let placeholder = document.getElementById('name-placeholder');
    placeholder.placeholder = 'Shopname';
})
open_user_customer.addEventListener('click', function(){
    let user = document.getElementById('name-kind');
    user.innerText = 'Username';
    let placeholder = document.getElementById('name-placeholder');
    placeholder.placeholder = 'Username';
})























// // script.js
// const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//  event.preventDefault();

//  // Get form data
//  const email = document.querySelector('#email').value;
//  const username = document.querySelector('#username').value;
//  const password = document.querySelector('#password').value;

//  // Validate form data
//  if (!email || !username || !password) {
//  alert('Please fill out all fields.');
//  return;
//  }

//  // Submit form data
//  console.log(`Email: ${email}, Username: ${username}, Password: ${password}`);
// });