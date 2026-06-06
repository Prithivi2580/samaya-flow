# server

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.13. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

🗄️ BEST DATABASE DESIGN (Prisma)

1. User Model (basic)
   model User {
   id String @id @default(cuid())
   name String
   email String @unique
   username String @unique
   onboardingDone Boolean @default(false)

availability Availability[]
createdAt DateTime @default(now())
} 2. Availability Model (Main)

This stores weekly structure.

model Availability {
id String @id @default(cuid())
userId String
user User @relation(fields: [userId], references: [id])

day DayOfWeek
slots TimeSlot[]

createdAt DateTime @default(now())
} 3. Time Slots (IMPORTANT)

This allows multiple slots per day:

model TimeSlot {
id String @id @default(cuid())
availabilityId String
availability Availability @relation(fields: [availabilityId], references: [id])

startTime String // "09:00"
endTime String // "17:00"
} 4. Enum for Days
enum DayOfWeek {
MONDAY
TUESDAY
WEDNESDAY
THURSDAY
FRIDAY
SATURDAY
SUNDAY
}

model User {
id String @id @default(cuid())
email String
name String

role UserRole? // <-- from onboarding step 1
}
🧾 Enum example
enum UserRole {
SALES
RECRUITING
CONSULTING
EDUCATION
PERSONAL
TEAM
}
