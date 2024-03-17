// Script.js
// Add your JavaScript code here if needed
// Example:
document.addEventListener('DOMContentLoaded', function() {
    console.log('INSURED website loaded.');
});

document.addEventListener('DOMContentLoaded', function() {
    const healthInsuranceBtn = document.getElementById("healthInsuranceBtn");
    const carInsuranceBtn = document.getElementById("carInsuranceBtn");
    const claimForm = document.getElementById("claimForm");

    healthInsuranceBtn.addEventListener("click", function() {
        showInsuranceInfo("Health Insurance", "Comprehensive health coverage with various benefits.");
    });

    carInsuranceBtn.addEventListener("click", function() {
        showInsuranceInfo("Car Insurance", "Protect your vehicle with our customizable car insurance plans.");
    });

    claimForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const claimType = document.getElementById("claimType").value;
        const claimDetails = document.getElementById("claimDetails").value;
        // Handle claim submission based on type
        console.log("Claim Type:", claimType);
        console.log("Claim Details:", claimDetails);
        // You can make AJAX requests here to submit the claim to the backend
        // Reset form fields after submission
        this.reset();
    });

    function showInsuranceInfo(type, description) {
        const infoSection = document.getElementById("infoSection");
        const infoHTML = `
            <h2>${type}</h2>
            <p>${description}</p>
            <h3>Benefits:</h3>
            <ul>
                <li>24/7 customer support</li>
                <li>Flexible payment options</li>
                <li>Fast claims processing</li>
            </ul>
            <h3>Request a Quote:</h3>
            <form class="quote-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" required>
                </div>
                <button type="submit">Get Quote</button>
            </form>
        `;
        infoSection.innerHTML = infoHTML;

        const quoteForm = document.querySelector(".quote-form");
        quoteForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            // Validate form inputs
            if (validateForm(name, email)) {
                // Handle quote request submission
                console.log(`Quote requested for ${type} by ${name} (${email})`);
                // You can make AJAX requests here to submit the quote request to the backend
                // Reset form fields after submission
                this.reset();
            }
        });
    }

    function validateForm(name, email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (name.trim() === '') {
            alert("Please enter your name.");
            return false;
        } else if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    }
});
