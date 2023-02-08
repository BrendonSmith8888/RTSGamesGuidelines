function filterTable() {
  let input, filter, table, tr, td, td1, td2, td3, td4, td5, td6, td7, td8, i;
  input = document.getElementById("userBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoe1buildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[10];
    td4 = tr[i].getElementsByTagName("td")[11];
    td5 = tr[i].getElementsByTagName("td")[17];
    td6 = tr[i].getElementsByTagName("td")[18];
    td7 = tr[i].getElementsByTagName("td")[24];
    td8 = tr[i].getElementsByTagName("td")[25];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td1.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td2.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td3.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td4.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td5.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td6.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td7.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td8.innerHTML.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterUnit() {
  let input, filter, table, tr, td, td1, td2, td3, td4, td5, td6, td7, td8, td9, i;
  input = document.getElementById("userUnitInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoe1unitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[13];
    td4 = tr[i].getElementsByTagName("td")[14];
    td5 = tr[i].getElementsByTagName("td")[23];
    td6 = tr[i].getElementsByTagName("td")[24];
    td7 = tr[i].getElementsByTagName("td")[33];
    td8 = tr[i].getElementsByTagName("td")[34];
    td9 = tr[i].getElementsByTagName("td")[42];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td1.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td2.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td3.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td4.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td5.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td6.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td7.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td8.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td9.innerHTML.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterTechnology() {
  let input, filter, table, tr, td, td1, td2, td3, i;
  input = document.getElementById("userTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoe1technologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[3];
    td3 = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td1.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td2.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td3.innerHTML.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
