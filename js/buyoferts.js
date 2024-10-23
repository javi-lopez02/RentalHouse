function saveData(divId) {
    var dataDiv = document.getElementById("dataDiv" + (divId-1));
    var data = dataDiv.innerText || dataDiv.textContent;
    localStorage.setItem("contactDescription", data);
    window.location.href = "contact_us_page.html";
}