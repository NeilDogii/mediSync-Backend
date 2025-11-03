# MediSync — Backend

MediSync is the backend service for an appointment and telemedicine platform that connects patients with doctors. It provides APIs and services for scheduling meetings, live conferencing, user authentication, role-based dashboards (doctor/admin/patient), notifications, and basic management features required by a telehealth application.

## Key features
- User management (patients, doctors, admins)
- Appointment scheduling and calendar integration
- Real-time video/audio conferencing integration (WebRTC / signaling)
- Role-specific dashboards and access control
- Patient records and basic medical metadata
- Audit logs and admin management tools

## Architecture & Tech stack
- Framework: NestJS (TypeScript)
- Runtime: Node.js
- Database: PostgreSQL
- Realtime: WebSockets / WebRTC signaling server
- Auth: JWT / OAuth2 (pluggable)

## Getting started (development)
Prerequisites:
- Node.js (18+ recommended)
- npm or yarn
- Database (Postgres) 

Clone the repo and install:
```bash
git clone https://github.com/NeilDogii/mediSync-Backend.git
cd medi-sync
npm install
# or
# yarn
```

Environment
- Copy the example env file and set values:
```bash
cp .env.example .env
```
Common env keys:
- PORT=5050
- DATABASE_URL=postgresql://user:pass@host:5432/dbname
- JWT_SECRET=someSecret

Run in development (hot reload):
```bash
npm run start:dev
```

Build and run production:
```bash
npm run build
npm run start:prod
```

Other useful scripts
- Install dependencies: `npm install`
- Run tests: `npm run test`
- Run lint: `npm run lint`

Contributing
- Use feature branches and open PRs
- Run tests and lint before opening PRs
