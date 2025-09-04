const express = require("express");
const router = express.Router();
const {
  createClub,
  getAllClubs,
  getClubById,
  updateClub,
  deleteClub,
} = require("../controllers/club.controller");

const { verifyToken } = require("../middlewares/auth.middleware");

// Create
router.post("/create", verifyToken, createClub);

// Read
router.get("/", getAllClubs);
router.get("/:id", getClubById);

// Update
router.put("/:id", verifyToken, updateClub);

// Delete
router.delete("/:id", verifyToken, deleteClub);

module.exports = router;
