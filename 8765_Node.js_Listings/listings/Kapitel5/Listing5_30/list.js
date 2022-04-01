export function getList(addresses) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <title>Adressbuch</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Adressbuch</h1>
        <table>
          <thead>
            <tr>
              <th>Bild</th>
              <th>Id</th>
              <th>Vorname</th>
              <th>Nachname</th>
              <th>löschen</th>
              <th>bearbeiten</th>
            </tr>
          <thead>
          <tbody>
            ${addresses.map(createRow).join('')}
          </tbody>
        </table>
        <a href="/new">neuen Datensatz anlegen</a>
      </body>
    </html>`;
}

function createRow(address) {
  const img = address.file
    ? `<img src="${address.file}" height="20" width="20">`
    : '';

  return `<tr>
    <td>${img}</td>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
    <td><a href="/delete/${address.id}">löschen</a></td>
    <td><a href="/edit/${address.id}">bearbeiten</a></td>
  </tr>`;
}
