/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

    function addContact() {
      var name = document.getElementById('name').value;
      var phone = document.getElementById('phone').value;
      
      if (name.trim() === '' || phone.trim() === '') {
      alert('Por favor, preencha todos os campos antes de adicionar.');
      return;
  }

      var table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      cell1.innerHTML = name;
      cell2.innerHTML = phone;

      // Limpar campos após adicionar
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
    }

    function searchContact() {
      var searchValue = document.getElementById('search').value.toLowerCase();
      var table = document.getElementById('contactTable');
      var tbody = table.getElementsByTagName('tbody')[0];
      var rows = tbody.getElementsByTagName('tr');

      var resultContainer = document.getElementById('resultContainer');
      resultContainer.innerHTML = '';

      var resultCount = 0;

      for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        var name = cells[0].innerText.toLowerCase();
        var phone = cells[1].innerText.toLowerCase();

        if (name.includes(searchValue) || phone.includes(searchValue)) {
          var resultItem = document.createElement('div');
          resultItem.innerHTML = `<p><strong>Nome:</strong> ${cells[0].innerText}</p><p><strong>Telefone:</strong> ${cells[1].innerText}</p>`;
          resultContainer.appendChild(resultItem);
          resultCount++;
        }
      }

      if (resultCount > 0) {
        showSearchResult();
      } else {
        alert('Nenhum resultado encontrado.');
      }
    }

    function showSearchResult() {
      document.getElementById('tableContainer').style.display = 'none';
      document.getElementById('searchResult').style.display = 'block';
    }

    function showTable() {
      document.getElementById('tableContainer').style.display = 'block';
      document.getElementById('searchResult').style.display = 'none';
    }
