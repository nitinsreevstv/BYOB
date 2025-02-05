document.getElementById("booking-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const bookingData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value
    };

    const googleScriptURL = "https://script.google.com/macros/s/AKfycbwANlfzqBW-oD6AbdwHVSNiIsAEN4wDEaMzqY6o2V1cOFk-NSQ4rFaFDMAzHALPXNjnXA/exec";

    const response = await fetch(googleScriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
    });

    if (response.ok) {
        alert("Booking saved successfully!");
        this.reset();
    } else {
        alert("Error saving booking.");
    }
});
