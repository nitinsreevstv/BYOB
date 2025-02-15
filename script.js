document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    const data = {
      name: name,
      email: email,
      date: date,
      time: time
    };
  
    fetch('https://script.google.com/macros/s/AKfycbwE1Etqnr7OonhZuGgEQ1iA9yp3ASpYNRyXek2NON0hkTb4JMrrk2jQkGVYnJAX2GMgDw/exec', { // ***REPLACE THIS WITH YOUR ACTUAL URL***
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json' //
      }
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        alert("Booking successful!");
        document.getElementById('booking-form').reset();
      } else {
        alert("Booking failed: " + result.message);
        console.error("Apps Script Error:", result.message);
      }
    })
    .catch(error => {
      console.error("Fetch Error:", error);
      alert("An error occurred. Please try again later.");
    });
  });