const model = require("../models/users.model");

function getUsers(req, res) {
  res.send(model);
}

function getUser(req, res) {
  const userId = Number(req.params.userId);
  const user = model[userId];
  if (user) {
    res.jsonp(user);
  } else {
    res.sendStatus(404);
  }
}

function postUser(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "no user name",
    });
  }

  const newUser = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newUser);
  res.json(newUser);
}

module.exports = {
  getUser,
  getUsers,
  postUser,
};
