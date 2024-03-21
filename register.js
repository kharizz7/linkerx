
        const form = document.getElementById('registrationForm');
        const registrationDetails = document.getElementById('registrationDetails');

        form.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            // Get form data
            const formData = new FormData(form);

            // Create an object to hold registration details
            const details = {};

            // Populate the details object with form data
            formData.forEach((value, key) => {
                details[key] = value;
            });

            // Display registration details
            registrationDetails.innerHTML = `
                <h2>Registration Details</h2>
                <p>First Name: ${details.first_name}</p>
                <p>Last Name: ${details.last_name}</p>
                <p>Phone Number: ${details.phone}</p>
                <p>Email Address: ${details.email}</p>
                <!-- Add more details as needed -->
            `;
        });
 console.log(details.first_name.value)