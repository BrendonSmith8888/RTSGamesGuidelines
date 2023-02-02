function filterTable() {
  let input, filter, table, tr, td, td1, td2, td3, td4, i;
  input = document.getElementById("userBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoe1buildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[9];
    td3 = tr[i].getElementsByTagName("td")[15];
    td4 = tr[i].getElementsByTagName("td")[21];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td1.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td2.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td3.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td4.innerHTML.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterUnit() {
  let input, filter, table, tr, td, td1, td2, td3, td4, td5, i;
  input = document.getElementById("userUnitInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoe1unitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[12];
    td3 = tr[i].getElementsByTagName("td")[21];
    td4 = tr[i].getElementsByTagName("td")[30];
    td5 = tr[i].getElementsByTagName("td")[38];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td1.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td2.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td3.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td4.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td5.innerHTML.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
