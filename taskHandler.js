const fs = require('fs');
const path = require('path');

const taskHandler = async (req, res) => {
  const { user_id } = req.body;

  await task(user_id);

  res.status(200).json({ message: 'Task completed successfully' });
};

async function task(user_id) {
  const logMessage = `${user_id}-task completed at-${Date.now()}\n`;
  const logFilePath = path.join(__dirname, 'task.log');

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) console.error('Failed to log task:', err);
  });
}

module.exports = taskHandler;
