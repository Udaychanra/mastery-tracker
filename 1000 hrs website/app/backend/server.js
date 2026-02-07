const express = require('express');
const cors = require('cors');
const { differenceInWeeks } = require('date-fns');
const { z } = require('zod');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for subscriptions (replace with database in production)
const subscriptions = [];

// Validation schemas
const calculateSchema = z.object({
  startDate: z.string().datetime() || z.string(),
  hoursPerWeek: z.number().min(0).max(168),
  pivots: z.array(z.string()).optional()
});

const subscribeSchema = z.object({
  email: z.string().email(),
  stage: z.string()
});

// Stage calculation function
function getStage(hours) {
  if (hours < 1000) return 'Explorer';
  if (hours < 3000) return 'Apprentice';
  if (hours < 6000) return 'Builder';
  if (hours < 8000) return 'Professional';
  if (hours < 10000) return 'Elite';
  return 'Mastery';
}

function getStageMessage(stage) {
  const messages = {
    'Explorer': "You're just beginning your journey. Keep exploring!",
    'Apprentice': "You're building foundations. This is where 68% of people quit.",
    'Builder': "You're constructing real skills. Stay consistent!",
    'Professional': "You've reached professional level. Keep pushing!",
    'Elite': "You're among the elite. Mastery is within reach!",
    'Mastery': "You've achieved mastery. Your dedication paid off!"
  };
  return messages[stage] || "Keep going!";
}

// Calculate real hours
function calculateRealHours(startDate, hoursPerWeek) {
  const start = new Date(startDate);
  const today = new Date();
  const weeks = differenceInWeeks(today, start);
  
  if (weeks < 0) return 0;
  
  const realHours = weeks * hoursPerWeek * 0.47;
  return Math.round(realHours);
}

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Calculate endpoint
app.post('/api/calculate', (req, res) => {
  try {
    const validatedData = calculateSchema.parse(req.body);
    const { startDate, hoursPerWeek, pivots = [] } = validatedData;

    const realHours = calculateRealHours(startDate, hoursPerWeek);
    const weeks = differenceInWeeks(new Date(), new Date(startDate));
    const stage = getStage(realHours);
    const message = getStageMessage(stage);

    res.json({
      success: true,
      data: {
        realHours,
        stage,
        weeks,
        message,
        pivotScore: pivots.length
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.errors
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }
});

// Subscribe endpoint
app.post('/api/subscribe', (req, res) => {
  try {
    const validatedData = subscribeSchema.parse(req.body);
    const { email, stage } = validatedData;

    // Check if email already exists
    const existingIndex = subscriptions.findIndex(sub => sub.email === email);
    
    if (existingIndex >= 0) {
      // Update existing subscription
      subscriptions[existingIndex] = {
        ...subscriptions[existingIndex],
        stage,
        updatedAt: new Date().toISOString()
      };
    } else {
      // Create new subscription
      subscriptions.push({
        email,
        stage,
        createdAt: new Date().toISOString()
      });
    }

    res.json({
      success: true,
      message: 'Subscription successful'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.errors
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }
});

// Get all subscriptions (for admin purposes)
app.get('/api/subscriptions', (req, res) => {
  res.json({
    success: true,
    count: subscriptions.length,
    data: subscriptions
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoints:`);
  console.log(`  - POST /api/calculate`);
  console.log(`  - POST /api/subscribe`);
  console.log(`  - GET  /api/health`);
});

module.exports = app;
