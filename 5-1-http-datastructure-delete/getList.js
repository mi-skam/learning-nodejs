function createRow(address) {
  return `<tr>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
    <td><a href="/delete/${address.id}">l&ouml;schen</a></td>
  </tr>`;
}

module.exports = (addresses) => {
  return `<!DOCTYPE html>
    <html>
      <head>
        <title>Addressbuch</title>
      </head>
      <body>
        <h1>Addressbuch</h1>
        <table>
          <tr>
            <td>Id</td><td>Vorname</td><td>Nachname</td>
            <td>l&ouml;schen</td>
          </tr>
          ${addresses.map(createRow).join('')}
        </table>
      </body>
    </html>`;
};
