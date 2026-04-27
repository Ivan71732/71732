document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const errors = [];
    const namePattern = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż\s-]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstName === "") {
        errors.push("Pole imię jest wymagane.");
    } else if (!namePattern.test(firstName)) {
        errors.push("Imię nie może zawierać cyfr ani znaków specjalnych.");
    }

    if (lastName === "") {
        errors.push("Pole nazwisko jest wymagane.");
    } else if (!namePattern.test(lastName)) {
        errors.push("Nazwisko nie może zawierać cyfr ani znaków specjalnych.");
    }

    if (email === "") {
        errors.push("Pole e-mail jest wymagane.");
    } else if (!emailPattern.test(email)) {
        errors.push("Podaj poprawny adres e-mail.");
    }

    if (message === "") {
        errors.push("Pole wiadomość jest wymagane.");
    }

    const errorsDiv = document.getElementById("errors");
    const successDiv = document.getElementById("success");

    errorsDiv.innerHTML = "";
    successDiv.innerHTML = "";

    if (errors.length > 0) {
        errorsDiv.innerHTML = errors.join("<br>");
    } else {
        successDiv.innerHTML = "Formularz został poprawnie wypełniony.";
        document.getElementById("contactForm").reset();
    }
});
