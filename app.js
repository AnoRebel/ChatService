window.addEventListener('load', function() {
  var content = document.querySelector('.content');
  var loadingSpinner = document.getElementById('loading');
  content.style.display = 'block';
  loadingSpinner.style.display = 'none';

  var lock = new Auth0Lock('FsAbcVtZwTUmYkHsWDK3mHF3ZAD6k9Nh', 'anorebel.auth0.com', {
    autoclose: true,
    auth: {
      redirectUrl: 'http://localhost:5001/main.html',
      responseType: 'token id_token',
      audience: 'https://' + 'anorebel.auth0.com' + '/userinfo',
      params: {
        scope: 'openid'
      }
    }
  });

  lock.on('authenticated', function(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      /*lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          console.log("Something went wrong:", error);
        }
        if (!error) {
          alert(profile);
        }
        
      })*/
    setSession(authResult);
    }
    displayButtons();
  });

  lock.on('authorization_error', function(err) {
    console.log(err);
    alert('Error: ' + err.error + '. Check the console for further details.');
    displayButtons();
  });

  // buttons and event listeners
  var loginBtn = document.getElementById('btn-login');
  var logoutBtn = document.getElementById('btn-logout');

  loginBtn.addEventListener('click', login);
  logoutBtn.addEventListener('click', logout);

  function login() {
    lock.show();
  }

  function setSession(authResult) {
    // Set the time that the access token will expire at
    var expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    // localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  function logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    displayButtons();
  }

  function isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  function displayButtons() {
    var loginStatus = document.querySelector('.container p');
    if (isAuthenticated()) {
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'inline-block';
      loginStatus.innerHTML = 'You are logged in! <input type="button" onClick="enableVideo();" class="btn btn-outline-dark" value="Start Video"> ';
    } else {
      loginBtn.style.display = 'inline-block';
      logoutBtn.style.display = 'none';
      loginStatus.innerHTML =
        'You are not logged in! Please log in to continue.';
    }
  }

  displayButtons();
});
