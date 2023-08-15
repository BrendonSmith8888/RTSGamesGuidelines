//Search Buildings

function filterCivilizationBuilding() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userCivilizationBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterAgeBuilding() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userAgeBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe2filterAgeBuilding() {
  let input, filter, table, tr, td, td2, i;
  input = document.getElementById("userAgeBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    td2 = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterRequirementsBuilding() {
  let input, filter, table, tr, td, td2, i;
  input = document.getElementById("userRequirementsBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[11];
    td2 = tr[i].getElementsByTagName("td")[12];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td2.innerHTML.toUpperCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe2filterRequirementsBuilding() {
  let input, filter, table, tr, td, td2, i;
  input = document.getElementById("userRequirementsBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[16];
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

function aoe1filterBuildings() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userBuildingInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoebuildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe2filterBuildings() {
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
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Search Units

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
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterAgeUnits() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userAgeUnitsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe2filterAgeUnits() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userAgeUnitsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterRequirementsUnits() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userRequirementsUnitsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[14];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe2filterRequirementsUnits() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userRequirementsUnitsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[17];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterUnit() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userUnitInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe2filterUnit() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userUnitInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeunitsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Search Technology

function aoe1filterCivilizationTechnology() {
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

function aoe2filterCivilizationTechnology() {
  let input, filter, table, tr, td, td1, td2, td3, td4, td5, i;
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
    td5 = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td1.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td3.innerHTML.toUpperCase().indexOf(filter) > -1 ||
        td.innerHTML.toUpperCase().indexOf(filter) > -1 ||
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

function aoe1filterAgeTechnology() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userAgeTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoetechnologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe2filterAgeTechnology() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userAgeTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoetechnologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[8];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterRequirementsTechnology() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userRequirementsTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoetechnologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[8];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe2filterRequirementsTechnology() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userRequirementsTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoetechnologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[9];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe1filterTechnology() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoetechnologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[7];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function aoe2filterTechnology() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userTechnologyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoetechnologyTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[7];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
