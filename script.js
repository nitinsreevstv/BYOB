document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("booking-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get form values
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            date: document.getElementById("date").value,
            time: document.getElementById("time").value
        };

        // Google Apps Script Web App URL
        const scriptURL = "https://script.google.com/macros/s/AKfycbwjhAwq28W0_0t2aBMe_-Md0i4toV6d-bGwea3za3ovIIdm3kgkZh4VkiX0jIeiEU8Iiw/exec";

        // Send data using Fetch API
        fetch(scriptURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())  // Parse JSON response
        .then(data => {
            if (data.status === "Success") {
                alert("Booking Successful! ✅");
                document.getElementById("booking-form").reset(); // Clear form
            } else {
                alert("Error: Booking failed ❌");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong. Check the console for details.");
        });
    });
});
