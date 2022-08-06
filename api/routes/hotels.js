import express from "express";
import { 
  createHotel, 
  deleteHotel, 
  getHotel, 
  getHotels, 
  updateHotel } from "../controllers/hotel.js";
  
const router    = express.Router();

// Create
router.post("/", createHotel)

// Update
router.put("/:id", updateHotel)

// Delete
router.delete("/:id", deleteHotel);

// Get All
router.get("/", getHotels)

// Get one hotel
router.get("/:id", getHotel)

export default router;