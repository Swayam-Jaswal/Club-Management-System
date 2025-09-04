const Club = require("../models/club");

const createClub = async (req, res) => {
  try {
    const { name, description, category } = req.body;
    if (!name) return res.status(400).json({ message: "Club name is required" });

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized: no user found" });
    }

    const club = new Club({
      name,
      description,
      category,
      createdBy: req.user.id,
    });

    await club.save();

    return res.status(201).json({ message: "Club created successfully", club });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't create club", error });
  }
};

const getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find()
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    return res.status(200).json({ message: "Fetched all clubs", clubs });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't fetch clubs", error });
  }
};

const getClubById = async (req, res) => {
  try {
    const { id } = req.params;
    const club = await Club.findById(id).populate("createdBy", "name email role");
    if (!club) return res.status(404).json({ message: "Club not found" });

    return res.status(200).json({ club });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't fetch club", error });
  }
};

const updateClub = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category } = req.body;

    const club = await Club.findById(id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    if (club.createdBy.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "You cannot update this club" });
    }

    club.name = name || club.name;
    club.description = description || club.description;
    club.category = category || club.category;

    await club.save();

    return res.status(200).json({ message: "Club updated successfully", club });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't update club", error });
  }
};

const deleteClub = async (req, res) => {
  try {
    const { id } = req.params;

    const club = await Club.findById(id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    if (club.createdBy.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "You cannot delete this club" });
    }

    await Club.findByIdAndDelete(id);

    return res.status(200).json({ message: "Club deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't delete club", error });
  }
};

module.exports = {
  createClub,
  getAllClubs,
  getClubById,
  updateClub,
  deleteClub,
};
