module.exports.user = (req, res) => {
  return res.render("user", {
    name: "kritica",
    email: "xyz@gmail.com",
  });
};

module.exports.userList = (req, res) => {
  const users = ["test", "test1", "test2"];
  return res.render("list", {
    users: users,
  });
};
