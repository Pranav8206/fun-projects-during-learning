window.addEventListener("keydown", (e) => {
  document.querySelector(".table").innerHTML = `
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>KeyName</th>
            </tr>
            <tr>
                <td>${e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `;
});
