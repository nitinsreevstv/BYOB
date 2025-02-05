// Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    alert(`Thank you, ${name}! Your booking for ${date} at ${time} has been received. We will confirm via email at ${email}.`);
});
