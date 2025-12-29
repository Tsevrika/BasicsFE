document.getElementById("loadBtn").addEventListener("click", loadUser);

function loadUser() {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];

      const picture = user.picture.large;
      const name = `${user.name.first} ${user.name.last}`;
      const city = user.location.city;
      const country = user.location.country;
      const postcode = user.location.postcode;

      document.getElementById("result").innerHTML = `
        <div class="card">
          <img src="${picture}" alt="User photo">
          <p><b>Name:</b> ${name}</p>
          <p><b>City:</b> ${city}</p>
          <p><b>Country:</b> ${country}</p>
          <p><b>Postcode:</b> ${postcode}</p>
        </div>
      `;
    })
    .catch((error) => {
      console.error("Помилка:", error);
    });
}
