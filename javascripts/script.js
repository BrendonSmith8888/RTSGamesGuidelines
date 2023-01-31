function filterText()
{
    input = document.getElementById("userInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("buildingsTable");
  tr = table.getElementsByTagName("egyptBuildings");

  for (i = 0; i < tr.length; i++) {
    let firstCol = tds[0].innerHTML.toUpperCase();
    let secondCol = tds[1].innerHTML.toUpperCase();
    if (
      firstCol.indexOf(filter) > -1 ||
      secondCol.indexOf(filter) > -1
    ) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

document.querySelector("userInput").addEventListener("keyup", buildingsTable, false);
