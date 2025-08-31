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

function aoe3filterAgeBuilding() {
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

function aoe3filterBuildings() {
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

// Search Ceremonies

function filterCivilizationCeremony() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userCivilizationCeremonyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeceremoniesTable");
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

function aoe3filterAgeCeremony() {
  let input, filter, table, tr, td, td2, i;
  input = document.getElementById("userAgeCeremonyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeceremoniesTable");
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

function aoe3filterCeremony() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userCeremonyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeceremoniesTable");
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

// Search Civilization Bonuses
function filterCivilizationCivBonus() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userCivilizationCivBonusInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoecivBonusTable");
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

// Search Heroes
function filterCivilizationHeroes() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userCivilizationHeroesInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeheroesTable");
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

function aoe1filterHero() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("userHeroInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("aoeheroesTable");
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

// function dow1loadabilities() {
//   $("#abilitiesTableBody").empty();
//   // $.ajax({
//   //   url: "../../../php/DOW1Abilities.php",
//   //   method: "GET",
//   //   dataType: "json",
//   //   success: function (response) {
//   //     if (response.status.code === "200") {
//   //       $("#abilitiesTableBody").empty();
//   //       response.data.forEach((building) => {
//   //         $("#abilitiesTableBody").append(`
//   //           <tr>
//   //             <td class="text-start text-nowrap">${building.Faction}</td>
//   //             <td class="text-start text-nowrap">${building.Building}</td>
//   //             <td class="align-middle text-nowrap d-none d-md-table-cell">${building.HitPoints}</td>
//   //             <td class="align-middle text-nowrap d-none d-md-table-cell">${building.CostRequisition}</td>
//   //             <td class="align-middle text-nowrap d-none d-md-table-cell">${building.CostPower}</td>
//   //             <td class="align-middle text-nowrap d-none d-md-table-cell">${building.CostOrkSupply}</td>
//   //             <td class="align-middle text-nowrap d-none d-md-table-cell">${building.Limit}</td>
//   //             <td class="align-middle text-nowrap d-none d-md-table-cell">${building.CapInfantry}</td>
//   //             <td class="align-middle text-nowrap d-none d-md-table-cell">${building.CapVehicle}</td>
//   //             <td class="text-start text-nowrap">${building.RequiredBuildings1}</td>
//   //             <td class="text-start text-nowrap">${building.RequiredBuildings2}</td>
//   //             <td class="text-start text-nowrap">${building.RequiredTechnologies}</td>
//   //           </tr>
//   //         `);
//   //       });
//   //     }
//   //   },
//   //   error: function (jqXHR, textStatus, errorThrown) {
//   //     console.log("AJAX request failed:", textStatus, errorThrown);
//   //   },
//   // });
// }

// function dow1loadbuildings() {
//   $.ajax({
//     url: "../../../php/DOW1Buildings.php",
//     method: "GET",
//     dataType: "json",
//     success: function (response) {
//       if (response.status.code === "200") {
//         $("#buildingsTableBody").empty();
//         response.data.forEach((building) => {
//           $("#buildingsTableBody").append(`
//             <tr>
//               <td class="text-start text-nowrap">${building.Faction}</td>
//               <td class="text-start text-nowrap">${building.Building}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${building.HitPoints}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${building.CostRequisition}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${building.CostPower}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${building.CostOrkSupply}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${building.Limit}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${building.CapInfantry}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${building.CapVehicle}</td>
//               <td class="text-start text-nowrap">${building.RequiredBuildings1}</td>
//               <td class="text-start text-nowrap">${building.RequiredBuildings2}</td>
//               <td class="text-start text-nowrap">${building.RequiredTechnologies}</td>
//             </tr>
//           `);
//         });
//       }
//     },
//     error: function (jqXHR, textStatus, errorThrown) {
//       console.log("AJAX request failed:", textStatus, errorThrown);
//     },
//   });
// }

// function dow1loadHW() {
//   $.ajax({
//     url: "../../../php/DOW1HW.php",
//     method: "GET",
//     dataType: "json",
//     success: function (response) {
//       if (response.status.code === "200") {
//         $("#heavyweaponsTableBody").empty();
//         response.data.forEach((hw) => {
//           $("#heavyweaponsTableBody").append(`
//             <tr>
//               <td class="text-start text-nowrap">${hw.Faction}</td>
//               <td class="text-start text-nowrap">${hw.HeavyWeapon}</td>
//               <td class="text-start text-nowrap">${hw.Unit1}</td>
//               <td class="text-start text-nowrap">${hw.Unit2}</td>
//               <td class="text-start text-nowrap">${hw.Unit3}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.CostRequisition}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.CostPower}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.DamageMeleeMin}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.DamageMeleeMax}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.DamageRangeMin}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.DamageRangeMax}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.RangeLong}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.RangeMedium}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.RangeShort}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.EffectiveAgainstBuildings}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.EffectiveAgainstHeavyInfantry}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.EffectiveAgainstInfantry}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.EffectiveAgainstMorale}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.EffectiveAgainstVehicles}</td>
//               <td class="text-start text-nowrap">${hw.RequiredBuildings1}</td>
//               <td class="text-start text-nowrap">${hw.RequiredBuildings2}</td>
//               <td class="align-middle text-nowrap d-none d-md-table-cell">${hw.RequiredCostOrkSupply}</td>
//               <td class="text-start text-nowrap">${hw.RequiredTechnologies}</td>
//             </tr>
//           `);
//         });
//       }
//     },
//     error: function (jqXHR, textStatus, errorThrown) {
//       console.log("AJAX request failed:", textStatus, errorThrown);
//     },
//   });
// }

// $("#abilitiesBtn").click(function () {
//   dow1loadabilities();
// });

// $("#buildingBtn").click(function () {
//   dow1loadbuildings();
// });

// $("#heavyweaponsBtn").click(function () {
//   dow1loadHW();
// });


$(document).ready(function () {
  // dow1loadabilities();
  // dow1loadbuildings();
  // dow1loadHW();
  homm1loadArtefacts();
  homm1loadBuildings();
  homm1loadSpells();
  homm1loadUnits();
});

//HOMM1

function homm1loadArtefacts(){
   $.ajax({
    url: "../../../php/HOMM1Artefacts.php",
    method: "GET",
    dataType: "json",
    success: function (response) {
      if (response.status.code === "200") {
        $("#artefactsTableBody").empty();
        response.data.forEach((homm1) => {
          $("#artefactsTableBody").append(`
            <tr>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Artefact}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Attack}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Catapult_Fires_Twice}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Defence}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Knowledge}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Luck}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Morale}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Movement_Land}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Movement_Sea}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Resource_Gold}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Spellpower}</td>
            </tr>
          `);
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("AJAX request failed:", textStatus, errorThrown);
    },
  });
}

function homm1loadBuildings(){
  $.ajax({
    url: "../../../php/HOMM1Buildings.php",
    method: "GET",
    dataType: "json",
    success: function (response) {
      if (response.status.code === "200") {
        $("#buildingsTableBody").empty();
        response.data.forEach((homm1) => {
          $("#buildingsTableBody").append(`
            <tr>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Faction}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Class}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Buildings}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Cost_Gold}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Cost_Wood}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Cost_Ore}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Cost_Crystal}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Cost_Gems}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Cost_Mercury}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Cost_Sulphur}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Reveals_Ancient_Map}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Artefacts}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Experience}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Income_Crystal}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Income_Gems}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Income_Gold}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Income_Mercury}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Income_Sulphur}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Income_Wood}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Luck}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Morale}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Movement_Sea}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Pay_Freedom}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Player_Rankings}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Population}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Required_Buildings1}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Required_Buildings2}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Spells_L1}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Spells_L2}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Spells_L3}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Spells_L4}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Transports_to_Different_Location}</td>
              <td class="align-middle text-nowrap d-none d-md-table-cell">${homm1.Units_Recruitment}</td>
            </tr>
          `);
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("AJAX request failed:", textStatus, errorThrown);
    },
  });
}

function homm1loadSpells(){}

function homm1loadUnits(){}


$("#artefactsBtn").click(function () {
  homm1loadArtefacts();
});

$("#buildingsBtn").click(function () {
  homm1loadBuildings();
});

$("#spellsBtn").click(function () {
  homm1loadSpells();
});

$("#unitsBtn").click(function () {
  homm1loadUnits();
});

