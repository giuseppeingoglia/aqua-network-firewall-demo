# Multi-Service Docker Setup with Firewall Rules

## Overview
This repository demonstrates how to set up three services (Web, Application, and Database) in Docker, configured for isolated communication using Aqua Services.

## Services
1. **Service W (Web Application):** An Nginx-based static web server.
2. **Service A (Application Server):** A Node.js Express application.
3. **Service D (Database Server):** A PostgreSQL database with preloaded data.

## How to Use
### Prerequisites
- Docker installed
- Basic understanding of Docker networking
- Understanding of Aqua Services and Firewall policies.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/docker-network-firewall-demo.git
   cd docker-network-firewall-demo
