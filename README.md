# Multi-Service Docker Setup with Firewall Rules

## Overview
This repository demonstrates how to set up three services (Web, Application, and Database) in Docker, configured for isolated communication using Aqua Services.

## Services
1. **Service W (Web Application):** An Nginx-based static web server.
2. **Service A (Application Server):** A Node.js Express application.
3. **Service D (Database Server):** A PostgreSQL database with preloaded data.

## How to Use
### Prerequisites
- Basic understanding of Docker networking
- Understanding of Aqua Services and Firewall policies.

1. Install **Docker** on your system.
   - [Docker Installation Guide](https://docs.docker.com/get-docker/)
2. Ensure you have a working **Docker Compose** (optional but useful for extending setups).
3. Create a Docker network for all services to communicate:
   ```bash
   docker network create shared_network

## Running

`cd ../service-w && docker build -t service-w . && docker run -d --network shared_network -p 80:80 service-w`

`cd ../service-a && docker build -t service-a . && docker run -d --network shared_network -p 3000:3000 service-a`

`cd ../service-d && docker build -t service-d . && docker run -d --network shared_network -p 5433:5432 -e POSTGRES_PASSWORD=<your-secret-password> service-d`
