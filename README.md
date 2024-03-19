# EchoVerse - Real-time Messaging and Communication Web Application

EchoVerse is a cutting-edge web application designed for real-time messaging, multimedia sharing, and interactive communication. With a user-friendly interface and advanced features, EchoVerse enhances collaboration and connectivity among users. Below is an overview of the project, its features, and the technology stack employed.

https://github.com/DhruvSharma19/EchoVerse/assets/112254552/2907e378-e008-4fa9-972f-c7efffe103a8

🌐 **Website Link:** [EchoVerse](https://discord-zeta-black.vercel.app/)

## Features

### 1. Real-time Messaging using Socket.io
- 🚀 Instantly exchange messages with other users in real time.

### 2. Send Attachments as Messages using UploadThing
- 📎 Share files, images, and multimedia seamlessly within the conversation.

### 3. Edit and Delete Messages in Real Time
- ✏️ Modify or remove messages with updates reflected to all users in real time.

### 4. Create Text, Audio, and Video Call Channels
- 🎤 Establish various communication channels, including text, audio, and video calls.

### 5. 1:1 Conversation Between Members
- 👥 Engage in private one-on-one conversations with other members.

### 6. 1:1 Video Calls Between Members
- 📹 Make video calls with other members, enhancing visual communication.

### 7. Member Management
- 👮 Administer the community by managing members, including kicking users and changing roles from guest to moderator.

### 8. Unique Invite Link Generation & Invite System
- 🔗 Generate unique invite links for users and establish a comprehensive invite system for user onboarding.

### 9. Infinite Loading for Messages
- 🔄 Enjoy a seamless experience with infinite message loading in batches of 10 using Tanstack/Query.

### 10. Server Creation and Customization
- ⚙️ Set up and customize servers to meet your specific requirements.

### 11. Beautiful UI
- 🎨 EchoVerse boasts a visually appealing user interface crafted using TailwindCSS and ShadcnUI.

### 12. Full Responsivity and Mobile UI
- 📱 Access EchoVerse from various devices, thanks to its responsive design.

### 13. Light/Dark Mode
- 🌓 Choose between light and dark modes to suit your preferences.

### 14. Websocket Fallback: Polling with Alerts
- ⚠️ Ensure robust connectivity with a WebSocket fallback mechanism and receive alerts for any disruptions.

### 15. ORM using Prisma
- 🛠️ Employ Prisma for seamless interaction with databases and managing application data.

### 16. NoSQL Database using MongoDB
- 📊 Store and manage data efficiently using MongoDB as the NoSQL database.

### 17. Authentication with Clerk
- 🔐 Implement secure user authentication using Clerk to safeguard user data.


![Web capture_18-12-2023_142321_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/9d6772d7-da4f-4b26-b210-3d24ab0f3833)
![Web capture_18-12-2023_142259_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/5af345d1-3654-4841-b5af-fb0f3df1e8ea)
![Web capture_18-12-2023_142245_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/5f7a1752-9497-4899-8c06-a5813e506e06)
![Web capture_18-12-2023_142235_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/6b5b372c-ccaa-4156-8ea4-101ff5ad005a)
![Web capture_18-12-2023_142218_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/6d87cb23-4fc5-4f5e-ae32-ff73d0f251a8)
![Web capture_18-12-2023_142132_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/3a5c70cc-32af-4670-9518-7b0cf4edcdd7)
![Web capture_18-12-2023_142116_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/b57d6a87-7aab-4127-9892-7af74e1bb9c4)
![Web capture_18-12-2023_142053_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/4700c8ca-9f16-4a50-8c94-c60a05d6b0d0)
![Web capture_18-12-2023_141942_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/1dc4f5cf-e1b2-421c-a7ae-6598d30c84df)
![Web capture_18-12-2023_141933_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/19841f00-f6fd-45b6-860e-b646987df3db)
![Web capture_18-12-2023_141917_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/0894db82-9e04-4d28-914d-daeba9ccafb3)
![Web capture_18-12-2023_141859_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/afc81491-4ce2-4567-877b-367da0c4db1c)
![Web capture_18-12-2023_141548_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/a4e41f4f-0576-4a47-9687-317eeb09ef8b)
![Web capture_18-12-2023_14221_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/5547f610-e539-48e3-8a4f-326c0dd2de80)
![Web capture_18-12-2023_142335_discord-zeta-black vercel app](https://github.com/DhruvSharma19/discord/assets/112254552/f80ec9e1-e540-42c7-bc77-2857f7fd8e60)


### 18. Tech Stack

**Frontend**:

- React: JavaScript library for building user interfaces.
- Next.js: React framework for server-side rendering and routing.
- Tailwind CSS: Utility-first CSS framework for styling.
- Emoji-mart: Provides emoji picker components for React applications.
- React Hook Form: Library for managing form state in React applications.
- Socket.IO: Enables real-time, bidirectional, and event-based communication.
- Zustand: State management library for React.
- axios: Promise-based HTTP client for making AJAX requests.
- Date-fns: Library for manipulating JavaScript dates.
- UUID: Library for generating unique identifiers.

**Backend**:

- Prisma: Modern database toolkit for TypeScript and Node.js.
- Socket.IO: For real-time communication between the client and server.

**Styling and CSS**:

- Tailwind CSS: Used for styling the application's components.

**Build and Tooling**:

- TypeScript: Superset of JavaScript for static typing.
- ESLint: Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- PostCSS: Tool for transforming CSS with JavaScript plugins.
- Prisma CLI: Command-line interface for database schema management.
