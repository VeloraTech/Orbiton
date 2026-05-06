# Orbiton

![Orbiton Logo](https://via.placeholder.com/1200x200?text=Orbiton+Logo)

**One platform. Every tool your team needs.**

---

## Badges

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Version](https://img.shields.io/badge/version-0.1.0-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)]()

---

## About Orbiton

Orbiton is a collaboration and productivity platform built for freelance developers, tech teams and startups managing clients. It eliminates the need to switch between Slack, Zoom, GitHub, Figma and Notion by bringing project management, voice and video calling, progress tracking, a built-in code repository and a client portal into one unified workspace. Your clients get real-time visibility into your progress. Your team stops context-switching. Everyone ships faster.

---

## Features

### Free Tier

- ✅ **Unlimited projects and collaborators** — scale without limits
- ✅ **Voice and video calls** — communicate in real time
- ✅ **Basic progress tracking** — keep everyone on the same page
- ✅ **Built-in repo** — push code natively inside Orbiton

### Premium Tier

- ✅ **Screen sharing** — show your work without leaving the app
- ✅ **Client portal** — clients watch developer progress live
- ✅ **Figma and third-party app integrations** — connect your entire workflow
- ✅ **Advanced session analytics per developer** — understand where time goes
- ✅ **AI agent** _(coming in Phase 2)_ — automated progress summaries and client updates

---

## Tech Stack

| Layer              | Technology   |
| ------------------ | ------------ |
| **Frontend**       | React Native |
| **Backend**        | TBD          |
| **Database**       | TBD          |
| **Authentication** | TBD          |

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- React Native CLI
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/orbiton.git
   cd orbiton
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install React Native dependencies**
   ```bash
   npx react-native link
   ```

### Running the Project Locally

**For iOS:**

```bash
npx react-native run-ios
```

**For Android:**

```bash
npx react-native run-android
```

**For Web (Expo):**

```bash
npm start
# or
yarn start
```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:3000
REACT_APP_API_KEY=your_api_key_here

# Authentication
REACT_APP_AUTH_PROVIDER=firebase
REACT_APP_AUTH_DOMAIN=your_auth_domain

# Feature Flags
REACT_APP_ENABLE_PREMIUM=false
REACT_APP_ENABLE_AI_AGENT=false
```

---

## Project Structure

```
orbiton/
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   ├── Problem/
│   │   ├── Solution/
│   │   ├── Features/
│   │   ├── Navigation/
│   │   └── Modal/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── ProjectsScreen.js
│   │   ├── CallScreen.js
│   │   ├── RepositoryScreen.js
│   │   └── ClientPortalScreen.js
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── websocket.js
│   │   └── storage.js
│   ├── styles/
│   │   ├── theme.js
│   │   ├── global.css
│   │   └── animations.css
│   ├── utils/
│   │   ├── helpers.js
│   │   └── validators.js
│   └── App.js
├── assets/
│   ├── logos/
│   ├── illustrations/
│   └── icons/
├── tests/
│   ├── components/
│   ├── screens/
│   └── services/
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── app.json
```

---

## Roadmap

### Phase 1 — MVP Launch

- [x] Project workspace
- [x] Voice and video calls
- [x] Built-in repo
- [x] Basic progress tracking

### Phase 2 — Premium Features

- [ ] Screen sharing
- [ ] Client portal
- [ ] Figma integrations
- [ ] Advanced analytics

### Phase 3 — Intelligence Layer

- [ ] AI agent integration
- [ ] Smart progress summaries
- [ ] Automated client updates
- [ ] Predictive project insights

---

## Contributing

We're building Orbiton in public, and we'd love your input. Whether it's a bug report, feature request or code contribution, you're welcome here.

### How to Contribute

1. **Fork the repository**

   ```bash
   git clone https://github.com/yourusername/orbiton.git
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes**

   ```bash
   git commit -m "Add your feature description"
   ```

4. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Describe what you changed and why
   - Link to any relevant issues
   - Wait for review and feedback

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## Author

**[Founder Name]** | [@twitter_handle](https://twitter.com/twitter_handle) | [LinkedIn](https://linkedin.com/in/linkedin_profile)

Building Orbiton in public — follow the journey.
