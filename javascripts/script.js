/* const filter = () => 
{
  let input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("userInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("buildingsTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++)
    {
        cell = tr[i].getElementsByTagName("td")[j];
        if (cell) 
        {
            if(cell.innerHTML.toUpperCase().indexOf(filter)>-1)
            {
                tr[i].style.display="";
                break;
            }
        }
    }
  }
} */
