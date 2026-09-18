const zipInput = document.getElementById("zip");

const zipPattern = /^\d{5}$/;

zipInput.addEventListener("input", function () {
    const isValidZip = zipPattern.test(zipInput.value);
    console.log("ZIP:", zipInput.value, "Valid:", isValidZip);
});