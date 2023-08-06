function filterCivilization() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userCivilizationInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterCivilizationUnits() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userCivilizationUnitsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterCivilizationTechnology() {
  let input, filter, table, tr, td, td1, td2, td3, td4, i;
  input = document.getElementById("userCivilizationTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoetechnologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    td4 = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td1.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td3.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td4.innerHTML.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterBuildings() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterBuildings() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("aoe1userBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterAge() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userAgeInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterAge() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("aoe1userAgeInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterAgeUnits() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("aoe1userAgeUnitsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterAgeTechnology() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("aoe1userAgeTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoetechnologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterRequirements() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userRequirementsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[16];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterRequirementsUnits() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("aoe1userRequirementsUnitsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[14];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterRequirementsTechnology() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("aoe1userRequirementsTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoetechnologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[8];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterUnit() {
  let input, filter, table, tr, td, td1, td2, td3, td4, td5, td6, td7, td8, td9, i;
  input = document.getElementById("userUnitInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
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

function aoe1filterUnit() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("aoe1userUnitInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1  
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
  table = document.getElementById("aoetechnologyTable");
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

function aoe1filterTechnology() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("aoe1userTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoetechnologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[7];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1  
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
