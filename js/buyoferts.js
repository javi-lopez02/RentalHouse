function saveData(divId) {
    var dataDiv = document.getElementById("dataDiv" + divId);
    var data = dataDiv.innerText || dataDiv.textContent;
    localStorage.setItem("contactDescription", data);
    window.location.href = "contact_us_page.html";
}