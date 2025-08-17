function addItem() {
    const name = document.getElementById("itemName").value.trim();
    const qty = document.getElementById("itemQty").value.trim();
    const price = document.getElementById("itemPrice").value.trim();

    if (!name || !qty || !price) {
        alert("Please fill in all fields.");
        return;
    }

    const table = document.getElementById("inventoryTable");

    const row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = qty;
    row.insertCell(2).innerText = price;

    const deleteCell = row.insertCell(3);
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = () => row.remove();
    deleteCell.appendChild(delBtn);

    document.getElementById("itemName").value = "";
    document.getElementById("itemQty").value = "";
    document.getElementById("itemPrice").value = "";

}



