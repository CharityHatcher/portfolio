
// Show or hide featured work
const toggleButton = document.querySelector("#toggle-work");
const featuredWork = document.querySelector("#featured-work");

if (toggleButton && featuredWork) {
    toggleButton.addEventListener("click", function() {
        featuredWork.hidden = !featuredWork.hidden;

        toggleButton.textContent = featuredWork.hidden
            ? "Show Featured Work"
            : "Hide Featured Work";

        toggleButton.setAttribute(
            "aria-expanded",
            String(!featuredWork.hidden)
        );
    });
}

// Contact form validation
const form = document.querySelector("#contact-form");
const fields = ["name", "email", "subject", "message"];

if (form) {
    const status = document.querySelector("#form-status");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let hasErrors = false;
        let firstInvalid = null;

        fields.forEach(function(fieldName) {
            const field = document.getElementById(fieldName);
            const error = document.getElementById(fieldName + "-error");
            const value = field.value.trim();
            let message = "";

            if (!value) {
                message = "Please complete this field.";
            } else if (
                fieldName === "email" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ) {
                message = "Please enter a valid email address.";
            }

            error.textContent = message;
            field.setAttribute("aria-invalid", message ? "true" : "false");

            if (message) {
                hasErrors = true;
                if (!firstInvalid) firstInvalid = field;
            }
        });

        if (hasErrors) {
            status.textContent = "Please correct the errors in the form.";
            firstInvalid.focus();
        } else {
            status.textContent =
                "Form validated successfully. This demo does not send messages.";
        }
    });

    // Clear errors as users edit their answers
    fields.forEach(function(fieldName) {
        const field = document.getElementById(fieldName);
        const error = document.getElementById(fieldName + "-error");

        field.addEventListener("input", function() {
            error.textContent = "";
            field.removeAttribute("aria-invalid");
            status.textContent = "";
        });
    });
}
