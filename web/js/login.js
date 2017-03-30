/**
 * Created by Anthony on 3/23/2017.
 */
<!-- AJAX Post -->
function invalidateSessionButton() {

    var url = "api/invalidate_session_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling Invalidate Session Servlet (Log Out).");
        console.log(dataFromServer);
        getLogin();
        console.log("Automatically call get login when logged out");
    });
}

function getLogin() {

    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling GetLoginServlet (Getting Login ID Info).");
        console.log(dataFromServer);
        $('#getSessionResult').html(dataFromServer);

        if (dataFromServer.trim() === "null") {
            $("#hideLogout").hide();

            //document.getElementById($("#hideLogout")) = 'block';
            console.log("No one logged in");
        }
        else {

            console.log("Someone is logged in");
            $('#hideLogout').show();
        }
    });
}

function Login() {

    var url = "api/login_servlet";


    var loginID = $("#loginID").val();

    var dataToServer = {loginID : loginID};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished Logging In.");
        console.log(dataFromServer);
        $("#loginID").val("");
        getLogin();
        console.log("Automatically call get login when logged in");

    });

}
button = $('#getLogin');
button.on("click", getLogin);

button = $('#login');
button.on("click", Login);


button = $('#log_Out');
button.on("click", invalidateSessionButton);

getLogin()
