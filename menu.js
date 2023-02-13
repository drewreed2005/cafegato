async function fillTable(url, table) {
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

fillTable("http://localhost:5000/", document.querySelector("table"));