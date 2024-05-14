// nodespress/client/client.js
async function hashPassword(password) {
  const response = await fetch('/hashPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password })
  });
  
  if (!response.ok) {
    throw new Error('Failed to hash password');
  }

  const data = await response.json();
  return data.hashedPassword;
}

// Usage example
const password = 'password123';
hashPassword(password)
  .then(hashedPassword => {
    console.log('Hashed password:', hashedPassword);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
