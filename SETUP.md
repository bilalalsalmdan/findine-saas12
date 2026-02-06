# Setup Guide

Complete installation and setup instructions for FineDine SaaS Platform.

---

## 📋 Prerequisites

- **Docker** (20.10+)
- **Docker Compose** (2.0+)
- **Node.js** (18+) - for local development
- **Git**

---

## 🚀 Quick Start (Recommended)

### Option 1: Docker Compose (One Command)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/findine-saas12.git
cd findine-saas12

# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

**Access Points:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- API Documentation: http://localhost:4000/documentation
- Database: localhost:5432 (user: postgres, pass: postgres)
- Redis: localhost:6379

### Option 2: Manual Setup

#### 1. Database

```bash
# Start PostgreSQL and Redis
docker-compose up -d postgres redis
```

#### 2. Backend

```bash
cd apps/api

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your settings

# Run migrations
npx prisma migrate dev

# Seed database
npx prisma db seed

# Start server
npm run dev
```

#### 3. Frontend

```bash
cd apps/web

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your settings

# Start development server
npm run dev
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/finedine?schema=public"

# JWT
JWT_SECRET="your-super-secret-key-change-in-production"

# Frontend URL
FRONTEND_URL="http://localhost:3000"

# Server
PORT=4000
HOST=0.0.0.0
```

### Frontend (.env.local)

```env
# API URL
NEXT_PUBLIC_API_URL="http://localhost:4000"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## 🧪 Testing

```bash
# Backend tests
cd apps/api
npm test

# Frontend tests
cd apps/web
npm test

# E2E tests
npm run test:e2e
```

---

## 📦 Database Operations

```bash
cd apps/api

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio

# Seed data
npx prisma db seed
```

---

## 🐳 Docker Commands

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# Rebuild images
docker-compose up -d --build

# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f web
docker-compose logs -f api

# Execute command in container
docker-compose exec api sh
docker-compose exec web sh
```

---

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Database Connection Issues

```bash
# Reset database container
docker-compose down -v
docker-compose up -d postgres

# Wait for database to be ready
sleep 5

# Run migrations
cd apps/api && npx prisma migrate dev
```

### Node Modules Issues

```bash
# Clean and reinstall
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
npm install
```

---

## 📞 Support

For issues or questions:
1. Check logs: `docker-compose logs -f`
2. Review documentation: [ARCHITECTURE.md](./ARCHITECTURE.md)
3. Check API docs: http://localhost:4000/documentation

---

**Next Steps:** See [ARCHITECTURE.md](./ARCHITECTURE.md) for system design details.
