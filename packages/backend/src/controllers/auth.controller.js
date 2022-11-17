const usersDB = {
  'test@test.com': {
    name: 'Rohit',
    role: 'admin',
    email: 'test@test.com',
  },
};

const sessionsDB = {}

const login = (request, response) => {
  if (request.body?.email === 'test@test.com') {
    const token = 'abcd'
    sessionsDB[token] = request.body.email;

    response.cookie('token', token, {
      httpOnly: true,
    });
    response.status(200).send({
      isAuthorized: true,
    });
  } else {
    response.sendStatus(404);
  }
};

const logout = () => {};
const status = (request, response) => {
  const tokenInCookie = request.cookies?.token;

  if(tokenInCookie && sessionsDB[tokenInCookie]) {
    const userEmail = sessionsDB[tokenInCookie]
    const userDetails = usersDB[userEmail]

    response.status(200).send({
      isAuthorized: true,
      ...userDetails
    })
  } else {
    response.status(200).send({
      isAuthorized: false,
      name: null,
      email: null,
      role: null
    })
  }
};

module.exports = {
  login,
  logout,
  status,
};
