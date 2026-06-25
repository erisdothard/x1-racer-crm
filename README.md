# X1 Racer CRM

Lead capture tool for X1 Racer events. Forms collect leads and save them to a local file (`db.json`).

## Setup

Make sure you have [Node.js](https://nodejs.org/) installed (v18+), then:

```
npm install
npm run dev
```

This starts the app. Open **http://localhost:5173** in your browser.

## How it works

- **Event form** (`http://localhost:5173/#/event-form`) — quick lead capture for booth use
- **Full form** (`http://localhost:5173/#/full-form`) — detailed follow-up form
- **Leads view** (`http://localhost:5173/#/leads`) — see all captured leads

Every form submission saves to `db.json` in the project folder. After the event, that file has all your leads.
