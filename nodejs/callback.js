console.log('Before');

getUser(5, (user) => {
  console.log(user);
});

console.log('After');

function getUser(id, cb) {
  setTimeout(() => {
    console.log('Calling DB...');
    const user = { id: id, username: 'UserName' };
    // console.log("Result :", user);
    // return user;
    cb(user);
  }, 3000);
}
