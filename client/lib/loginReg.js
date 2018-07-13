
function login(){
    let serverAddres = 'http://localhost:3000/login/app'
    let tokenName = "regToken"
    let username = $("#username").val()
    let password = $("#password").val()
       
    axios.post(serverAddres, {
        username : username,
        password : password, 
      })
      .then(function (data) {
        console.log("login regular",data);
        localStorage.setItem(tokenName, data.data);
        testAPI();
      })
      .then(function(){
        console.log("setelah login app ")
        window.location.replace("/home.html")
      })
      .catch(function (error) {
        console.log(error);
      });
}