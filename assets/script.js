/* eslint-disable no-useless-escape */

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorElement = document.getElementById('error');
const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', (event) => {
  const messages = [];
  if (name.value === '' || name.value == null) {
    messages.push('Name is required!');
  }

  if (name.value.length <= 3) {
    messages.push('Name must be longer than 3 characters!');
  }

  if (name.value.length >= 25) {
    messages.push('Name must be less than 25 characters!');
  }

  if (email.value === '' || name.value == null) {
    messages.push('Email field must not be empty!');
  }

  if (!email.value.match(pattern)) {
    messages.push('Invalid email address!');
  }

  if (message.value === '' || name.value == null) {
    messages.push('Message field must not be empty!');
  }

  if (message.value.length <= 10) {
    messages.push('Message must be longer than 10 characters!');
  }

  if (message.value.length >= 1000) {
    messages.push('Message must be less than 1000 characters!');
  }

  if (messages.length > 0) {
    event.preventDefault();
    errorElement.innerText = messages.join('\n');
  }
});