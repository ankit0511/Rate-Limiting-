# Node.js Task Queueing with Rate Limiting

## Overview

This project is a Node.js API designed to handle user tasks with rate limiting and queuing capabilities. It uses Redis for rate limiting and task queue management. The API is set up to run in a cluster with two replica sets to ensure high availability and scalability.

## Features

- **Rate Limiting**: Enforces a limit of 1 task per second and 20 tasks per minute per user ID.
- **Task Queueing**: Queues tasks that exceed the rate limit and processes them accordingly.
- **Logging**: Logs task completions with user IDs and timestamps to a log file.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Redis](https://redis.io/download) (for queueing and rate limiting)
- [PM2](https://pm2.io/) (for process management)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
