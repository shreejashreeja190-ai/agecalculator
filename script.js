function calculateAge() {
    let dob = document.getElementById("dob").value;

    if (dob === "") {
        document.getElementById("result").innerHTML = "Please select your date of birth.";
        return;
    }

    let dobDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    // Adjust months and days if needed
    if (days < 0) {
        months--;
        let previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days = previousMonthDays + days;
    }

    if (months < 0) {
        years--;
        months = 12 + months;
    }

    document.getElementById("result").innerHTML =
        `Your Age is: <br> <strong>${years}</strong> years, <strong>${months}</strong> months, <strong>${days}</strong> days`;
}
