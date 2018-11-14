export function login(payload) {
  return dispatch => {
    return dispatch({
      type: "LOGIN",
      payload: Promise.resolve({
        username: payload.username,
        token: "dmasjkfndsfjskmlndjasnfk"
      })
    })
      .then(response => {
        setItem("token", response.value.token);
        setItem("auth", true);
        return;
      })
      .catch(error => {
        console.error(error);
        return;
      });
  };
}

export function logout() {
  deleteItem("token");
  setItem("auth", false);
}

export function isLoggedIn() {
  return getItem("auth") || false;
}

function setItem(key, value) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(key, value);
  } else {
    alert("LocalStorage not supported by your browser!");
  }
}

function getItem(key) {
  if (typeof Storage !== "undefined") {
    return localStorage.getItem(key);
  } else {
    alert("LocalStorage not supported by your browser!");
  }
}

function deleteItem(key) {
  if (typeof Storage !== "undefined") {
    localStorage.removeItem(key);
  } else {
    alert("LocalStorage not supported by your browser!");
  }
}
