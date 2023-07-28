function filterTable() {
  let input, filter, table, tr, td, td1, td2, td3, td4, td5, td6, td7, td8, i;
  input = document.getElementById("userBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("buildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[3];
    td3 = tr[i].getElementsByTagName("td")[11];
    td4 = tr[i].getElementsByTagName("td")[13];
    td5 = tr[i].getElementsByTagName("td")[19];
    td6 = tr[i].getElementsByTagName("td")[21];
    td7 = tr[i].getElementsByTagName("td")[27];
    td8 = tr[i].getElementsByTagName("td")[29];

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
    td2 = tr[i].getElementsByTagName("td")[3];
    td3 = tr[i].getElementsByTagName("td")[14];
    td4 = tr[i].getElementsByTagName("td")[16];
    td5 = tr[i].getElementsByTagName("td")[25];
    td6 = tr[i].getElementsByTagName("td")[27];
    td7 = tr[i].getElementsByTagName("td")[36];
    td8 = tr[i].getElementsByTagName("td")[38];
    td9 = tr[i].getElementsByTagName("td")[46];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1  ||
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
  let input, filter, table, tr, td, td1, td2, td3, td4, td5, td6, td7, i;
  input = document.getElementById("userTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoe1technologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    td4 = tr[i].getElementsByTagName("td")[4];
    td5 = tr[i].getElementsByTagName("td")[5];
    td6 = tr[i].getElementsByTagName("td")[7];
    td7 = tr[i].getElementsByTagName("td")[8];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td1.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td2.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td3.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td4.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td5.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td6.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td7.innerHTML.toUpperCase().indexOf(filter) > -1 
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
