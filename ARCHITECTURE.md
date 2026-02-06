# Architecture Documentation

System design and architecture decisions for FineDine SaaS Platform.

---

## 🏗️ System Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         EDGE LAYER                           │
│                     (Cloudflare + Vercel)                    │
├─────────────────────────────────────────────────────────────┤
│                       FRONTEND LAYER                         │
│                   Next.js 14 (App Router)                    │
│  - Server Components (70% of UI)                            │
│  - Client Components (Interactivity)                        │
│  - RTL Support (Arabic-first)                               │
├─────────────────────────────────────────────────────────────┤
│                         API LAYER                            │
│                      Fastify (Node.js)                       │
│  - JWT Authentication                                       │
│  - Rate Limiting                                            │
│  - Swagger Documentation                                    │
├─────────────────────────────────────────────────────────────┤
│                    APPLICATION LAYER                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │   Auth   │  │   Menu   │  │  Order   │  │ Payment  │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │  Tenant  │  │Real-time │  │    AI    │                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
├─────────────────────────────────────────────────────────────┤
│                        DATA LAYER                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  PostgreSQL  │  │    Redis     │  │   S3/R2      │      │
│  │  (Primary)   │  │  (Cache)     │  │  (Storage)   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

---

## 📐 Architecture Decisions

### ADR-001: Monorepo with Turborepo

**Decision:** Use Turborepo with pnpm workspaces

**Rationale:**
- Single repository for frontend, backend, and shared packages
- Unified CI/CD pipeline
- Code sharing between applications
- Dependency management

**Trade-offs:**
- Learning curve for new developers
- Requires more disk space

---

### ADR-002: PostgreSQL with Row-Level Security

**Decision:** PostgreSQL 15 with multi-tenancy via RLS

**Rationale:**
- ACID compliance for financial transactions
- JSONB for flexible menu structures
- Row-Level Security for tenant isolation
- Proven at scale

**Trade-offs:**
- More complex than NoSQL for some use cases
- Requires careful schema design

---

### ADR-003: Fastify over Express

**Decision:** Fastify as backend framework

**Rationale:**
- 3x faster than Express
- Built-in schema validation
- Better TypeScript support
- Lower memory footprint

**Trade-offs:**
- Smaller ecosystem than Express
- Learning curve for Express developers

---

### ADR-004: Next.js 14 App Router

**Decision:** Next.js 14 with App Router

**Rationale:**
- Server Components reduce JS bundle by 70%
- Native RTL support
- Excellent SEO capabilities
- Vercel deployment optimized

**Trade-offs:**
- Still evolving (some features experimental)
- Different paradigm from Pages Router

---

### ADR-005: Multi-Tenancy Architecture

**Decision:** Row-Level Security (RLS) approach

**Implementation:**
- Single database, shared schema
- `restaurant_id` column on all tables
- Database-level tenant isolation
- Query automatically filtered by tenant

**Alternative Rejected:**
- Schema-per-tenant: Complex migrations
- Database-per-tenant: Resource overhead

---

## 🗄️ Database Schema

### Entity Relationship Diagram

```
Restaurant 1--* User
Restaurant 1--* StaffMember
Restaurant 1--* Menu
Restaurant 1--* Order

Menu 1--* Category
Category 1--* Dish

Order 1--* OrderItem
```

### Key Models

#### Restaurant (Tenant)
- `id`: UUID (Primary Key)
- `name`: String
- `slug`: String (Unique)
- `subscriptionTier`: Enum (free, growth, pro, enterprise)
- `subscriptionStatus`: Enum (trial, active, cancelled)

#### User
- `id`: UUID
- `email`: String (Unique)
- `passwordHash`: String
- `role`: Enum (owner, manager, staff)
- `restaurantId`: Foreign Key

#### Menu
- `id`: UUID
- `restaurantId`: Foreign Key
- `name`: String
- `isActive`: Boolean
- `qrCodeUrl`: String

#### Order
- `id`: UUID
- `restaurantId`: Foreign Key
- `orderNumber`: String (Unique)
- `status`: Enum (pending, preparing, ready, served, cancelled)
- `totalAmount`: Decimal
- `paymentStatus`: Enum (pending, paid, refunded)

---

## 🔐 Security Architecture

### Authentication
- JWT tokens with 15-minute expiry
- Refresh tokens with 7-day expiry
- HttpOnly cookies for token storage
- Argon2 for password hashing

### Authorization
- Role-Based Access Control (RBAC)
- Permissions matrix per role
- Resource-level authorization

### Multi-Tenancy Isolation
```sql
-- Example RLS Policy
CREATE POLICY tenant_isolation ON dishes
FOR ALL
TO application
USING (restaurant_id = current_setting('app.current_restaurant')::UUID);
```

---

## 🚀 Scalability Strategy

### Horizontal Scaling
- Stateless API servers
- External session storage (Redis)
- Read replicas for database

### Caching Strategy
- Redis for sessions
- Application-level caching for menus
- CDN for static assets
- Browser caching for API responses

### Database Optimization
- Indexing on `restaurant_id` for all tables
- Query optimization with EXPLAIN ANALYZE
- Connection pooling (PgBouncer)

---

## 🔄 Real-Time Architecture

### WebSocket Implementation
- Socket.io for real-time communication
- Room-based connections (per restaurant)
- Event types:
  - `order:update`
  - `menu:update`
  - `notification`

### Event Flow
```
Order Update → WebSocket Server → Restaurant Room → All Connected Clients
```

---

## 📊 Monitoring & Observability

### Application Monitoring
- Structured logging (JSON format)
- Request tracing
- Error tracking
- Performance metrics

### Infrastructure Monitoring
- Database query performance
- API response times
- Cache hit rates
- WebSocket connection counts

---

## 🎯 Performance Budgets

### Frontend
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Bundle size: < 200KB (initial)

### Backend
- API response time (p95): < 200ms
- Database query time (p95): < 50ms
- WebSocket latency: < 100ms

---

## 🔮 Future Considerations

### Phase 2: AI Integration
- Separate Python microservice
- GPU scaling independent from API
- Image generation pipeline
- Arabic NLP processing

### Phase 3: Advanced Features
- Multi-location support
- Franchise management
- Advanced analytics
- Machine learning recommendations

---

## 📚 References

- [Next.js Documentation](https://nextjs.org/docs)
- [Fastify Documentation](https://www.fastify.io/docs/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Last Updated:** 2026-02-06
**Version:** 1.0.0
