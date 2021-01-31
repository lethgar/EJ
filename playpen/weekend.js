// define user object
let user = {
  // add some properties of data known about user
  instruments: [
    { name: 'Strat', type: 'guitar', strings: 6 },
    { name: 'Jazz', type: 'bass', strings: 4 },
    { name: 'Wal', type: 'bass', strings:  4 },
    { name: 'Fedora', type: 'bass', strings:  6 },
  ],
  name: 'Ariel Sharon',
  age: 30,
  interests: ['hockey', 'backpacking', 'reading', 'music'],
  loc: '221B Baker Street',
  login: function() {
    console.log('user is logged in');
  },
  logout: function() {
      console.log('the user is logged out');
    }
};
user.logout();
console.log(user.instruments[0].name);
