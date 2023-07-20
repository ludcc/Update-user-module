const express = require("express");
const Controller = require("./controller")
const {success, error} = require("../../network")

const router = express.Router();

function addUser(req, res) {
    const { auth } = req;
    const {
        email,
        password,
        displayName
    } = req.body;

    Controller.addUser({
        auth,
        email,
        password,
        displayName
    })
    .then((result) => success(req, res, result, 201))
    .catch((error) => error(req, res, error, 500))

}

function getUser(req, res) {
    const { auth } = req;
    const { email } = req.body;

    Controller.getUser({
        auth,
        email
    })
    .then((result) => success(req, res, result, 201))
    .catch((error) => error(req, res, error, 500))
}

function updateUser(req, res) {
    const { auth } = req;
    const {
        email,
        displayName,
        newPassword
    } = req.body;

    Controller.updateUser({
        auth,
        email,
        displayName,
        newPassword
    })
    .then((result) => success(req, res, result, 201))
    .catch((error) => error(req, res, error, 500))
}

function deleteUser(req, res) {
    const { auth } = req;
    const { email } = req.body;

    Controller.deleteUser({
        auth,
        email
    })
    .then((result) => success(req, res, result, 201))
    .catch((error) => error(req, res, error, 500))
}

// /users post agregar
// /users patch actualizar
// /users delete eliminar
// /users get obtener

router.delete("/", deleteUser)
router.post("/", addUser)
router.get("/get-user", getUser)
router.patch("/", updateUser)

module.exports = router