const button = document.getElementById("btnSubmit");
const judul = document.getElementById("judul");
const penerbit = document.getElementById("penerbit");
const genre = document.getElementById("genreBuku");
const harga = document.getElementById("hargaBuku");
const form = document.getElementById("form");

form.addEventListener("submit",async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const jsonData = {};

  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  console.log(jsonData);
  await fetch("http://127.0.0.1:3010/api/v1/buku", {
    method: "POST", //perintah
    crossorigin: true,
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
// button.addEventListener('click', async(e) => {
//   e.preventDefault() // Prevent form submission to avoid page reload
//   fetch("http://127.0.0.1:3010/api/v1/buku", {
//   method: "POST", //perintah
//   crossorigin: true,
//   mode: "no-cors",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body:JSON.stringify( {
//     judul: "req.body.judul",
//     penerbit: "req.body.penerbit",
//     harga: 5000,
//     genre: "req.body.genreBuku",
//   },)
// })
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

// });
// e.preventDefault(); // Prevent form submission to avoid page reload
// try{
//   const response = await fetch("http://127.0.0.1:3010/api/v1/buku", {
//     method: "POST",
//     crossorigin: true,
//     mode: "no-cors",
//   })
//   const result = await response.json()
//   console.log(result)
// }
// catch(err){
//   console.error(err)
// }
