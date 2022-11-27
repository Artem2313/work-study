const session = {
  isValidAccessToken() {
    const accessTokenExpires = new Date(); // getToken;
    // ...

    return Boolean(Math.round(Math.random()))
  },

  logout() {},
  relogin() {
    if (refreshIsExpired) return false;
    if (cannotGetNewAccess) return false;
    return true;
  }
}

class Api {
  request(
    ...args
  ) {
    const [
      path,
      body,
      method
    ] = args;
    return fetch(
      path,
      {
        method,
        body
      }
    ).then(
      response => response.status === 401 ? session.relogin().then(this.request(...args)) : response.json()
    ).catch(
      e => {
        switch (e.error) {
          case 'logout':
            session.logout();
            break;
          default:
            throw e;
        }
      }
    );
  }

  async request2(
    path,
    body,
    method
  ) {
    const canCall = await this.checkRequest();
    if (!canCall) return session.logout();
    return fetch(
      path,
      {
        method,
        body
      }
    );
  }

  async checkRequest() {
    let isValid = true;

    if (!session.isValidAccessToken()) {)
      isValid = await session.relogin();
    }

    return isValid
  }
}