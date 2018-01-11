// For this example we're going to use JQuery's Ajax to login to omero

$('#loginForm').submit(function (event) {
    event.preventDefault();

    // Obtain an API CSRF token
    getCSRFToken().then(login).then(function (data) {
        // Fill the OMERO server form element and assume that it's the same as the OMERO web server (it might not be)
        $('#serverUrl').val($('#webServerUrl').val().replace(/(^\w+:|^)\/\//, ''));
        // Fill the UUID form element
        $('#sessionUuid').val(data.eventContext.sessionUuid);
        // Hide the login form
        $('#exportForm').show();
        // Show the export images form
        $('#loginForm').hide();
    });
});

function getCSRFToken() {
    var hostUrl = $('#webServerUrl').val();
    var api = hostUrl + '/api/v0/token/';
    return $.ajax({
        type: 'GET',
        url: api,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("URL: " + api + "\n" + errorThrown);
        }
    });
}

function login(data, textStatus, jqXHR) {
    var csrfToken = data.data;
    var hostUrl = $('#webServerUrl').val();
    var username = $('#username').val();
    var password = $('#password').val();

    var api = hostUrl + '/api/v0/login/';
    var loginData = {
        server: 1,
        username: username,
        password: password
    };

    return $.ajax({
        type: 'POST',
        url: api,
        data: loginData,
        beforeSend: function (request) {
            request.setRequestHeader('x-csrftoken', csrfToken);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("HostURL: " + api + "\n" + errorThrown);
        }
    });
}