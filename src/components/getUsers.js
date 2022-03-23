function getUsers(n) {
    const users = [];
    for (let i = 1; i <= n; i++) {
      users.push({ id: i, name: `User ${i}`, icon:"delete-icon" });
    }
    return users;
  }
  
  export {
    getUsers
  };