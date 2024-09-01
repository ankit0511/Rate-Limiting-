const Redis = require('ioredis');

const redis = new Redis({
  host: '127.0.0.1', // Default Redis host
  port: 6379,        // Default Redis port
});

redis.on('connect', () => {
  console.log('Connected to Redis');
});

redis.on('error', (err) => {
  console.error('Redis error:', err);
});


const rateLimiter = async (req, res, next) => {
  const { user_id } = req.body;
  const currentTime = Math.floor(Date.now() / 1000);

  const userKey = `user:${user_id}`;
  const [taskCount, firstTaskTime] = await redis.multi()
    .get(`${userKey}:taskCount`)
    .get(`${userKey}:firstTaskTime`)
    .exec();

  if (!taskCount) {
    await redis.set(`${userKey}:taskCount`, 1);
    await redis.set(`${userKey}:firstTaskTime`, currentTime);
    return next();
  }

  const timeSinceFirstTask = currentTime - firstTaskTime;
  
  if (taskCount < 20 || timeSinceFirstTask > 60) {
    await redis.incr(`${userKey}:taskCount`);
    return next();
  }

  res.status(429).json({ message: 'Rate limit exceeded. Task queued.' });
  // Here, you would add the task to the user's queue to be processed later
};

module.exports = rateLimiter;
