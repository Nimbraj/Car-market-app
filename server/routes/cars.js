import express from 'express';
import { db } from '../../Configs/index.js';
import { CarListing } from '../../Configs/schema.js';
import { eq, and, like, or, sql } from 'drizzle-orm';

const router = express.Router();

// GET all cars with optional filters
router.get('/', async (req, res) => {
  try {
    const { category, make, condition, price, search } = req.query;
    let query = db.select().from(CarListing);

    const conditions = [];
    if (category) conditions.push(eq(CarListing.category, category));
    if (make) conditions.push(eq(CarListing.make, make));
    if (condition) conditions.push(eq(CarListing.condition, condition));
    if (search) {
      conditions.push(
        or(
          like(CarListing.listingTitle, `%${search}%`),
          like(CarListing.make, `%${search}%`),
          like(CarListing.model, `%${search}%`)
        )
      );
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const cars = await query;
    res.json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
});

// GET single car by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const car = await db.select().from(CarListing).where(eq(CarListing.id, id));
    if (car.length === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json(car[0]);
  } catch (error) {
    console.error('Error fetching car:', error);
    res.status(500).json({ error: 'Failed to fetch car' });
  }
});

// GET cars by userId
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const cars = await db.select().from(CarListing).where(eq(CarListing.userId, userId));
    res.json(cars);
  } catch (error) {
    console.error('Error fetching user cars:', error);
    res.status(500).json({ error: 'Failed to fetch user cars' });
  }
});

// POST create new car listing
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    if (!data.userId) {
      return res.status(400).json({ error: 'userId is required' });
    }

    const newCar = await db.insert(CarListing).values(data).returning();
    res.status(201).json(newCar[0]);
  } catch (error) {
    console.error('Error creating car listing:', error);
    res.status(500).json({ error: 'Failed to create car listing' });
  }
});

// PUT update car listing
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updated = await db.update(CarListing).set(data).where(eq(CarListing.id, id)).returning();
    if (updated.length === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json(updated[0]);
  } catch (error) {
    console.error('Error updating car listing:', error);
    res.status(500).json({ error: 'Failed to update car listing' });
  }
});

// DELETE car listing
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await db.delete(CarListing).where(eq(CarListing.id, id)).returning();
    if (deleted.length === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json({ message: 'Car listing deleted successfully' });
  } catch (error) {
    console.error('Error deleting car listing:', error);
    res.status(500).json({ error: 'Failed to delete car listing' });
  }
});

export default router;

