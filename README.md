# X1 Racer CRM

Lead capture tool for X1 Racer events. Forms collect leads and save them to a local file on your computer.

---

## First-Time Setup (do this once)

### Step 1: Install Node.js

1. Go to https://nodejs.org
2. Click the big green button that says **"LTS"** (recommended)
3. Open the downloaded file and follow the installer — just click Next/Continue through everything
4. When it's done, restart your computer

### Step 2: Download this project

1. Go to https://github.com/erisdothard/x1-racer-crm
2. Click the green **"Code"** button
3. Click **"Download ZIP"**
4. Unzip the folder somewhere easy to find (like your Desktop)

### Step 3: Install the app

1. Open **Terminal** (Mac) or **Command Prompt** (Windows)
   - **Mac:** press `Cmd + Space`, type `Terminal`, hit Enter
   - **Windows:** press `Win + R`, type `cmd`, hit Enter
2. Type this and hit Enter (replace the path with wherever you unzipped the folder):
   ```
   cd ~/Desktop/x1-racer-crm-main
   ```
3. Type this and hit Enter:
   ```
   npm install
   ```
4. Wait for it to finish (might take a minute)

---

## Running the App (do this every time)

1. Open Terminal / Command Prompt
2. Go to the project folder:
   ```
   cd ~/Desktop/x1-racer-crm-main
   ```
3. Start the app:
   ```
   npm run dev
   ```
4. Open your browser (Chrome, Safari, etc.) and go to:

   **http://localhost:5173**

That's it — the app is running.

---

## Using It at the Event

- **Event form** — go to `http://localhost:5173/#/event-form` for quick lead capture at a booth
- **Full form** — go to `http://localhost:5173/#/full-form` for a detailed follow-up form
- **Leads view** — go to `http://localhost:5173/#/leads` to see all captured leads

Every form submission saves automatically. No need to click save.

---

## After the Event

All your leads are saved in a file called `db.json` inside the project folder. Send that file to Eris and she'll pull the data for you.

---

## To Stop the App

Go back to Terminal and press `Ctrl + C`.
