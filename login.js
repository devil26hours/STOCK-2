// var jwt = localStorage.getItem("jwt")
// if (jwt != null){
//     window.location.href ='./HomePage.html'
// }

// function login() {
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const xhttp = new XMLHttpRequest();
//     xhttp.open("POST", "https://www.mecallapi.com/api/login");
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhttp.send(JSON.stringify({
//         "username" : username,
//         "password" : password
//     }));
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//             const object = JSON.parse(this.responseText);
//             console.log(object);
//             if(object['status'] == 'ok') {
//                 localStorage.setItem("jwt", object["accessToken"]);
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: 'Login success!',
//                     showConfirmButton: false,
//                     timer: 1500 
//                   })
//                   window.location.href ='./HomePage.html'
//             } else {
//                 Swal.fire(
//                     object['message'],
//                     'Wrong Email or Password?',
//                     'error'
//                   )
//             }
//         }
//     }
//     return false;
// }

// function logout() {
//     localStorage.removeItem("jwt");
//     window.location.href = "./login.html";
// }