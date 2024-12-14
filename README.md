# Building Charge Calculator

This is a simple Node.js application to calculate various charges for buildings based on specific inputs such as local body type, 
usage, high-rise status, FSI, and more. The app provides a clean, responsive interface and dynamically computes charges based on user inputs.

## About the Project

This project was created to help my dad, who is a government employee. Many of his tasks require redundant and time-consuming 
calculations and data entry. This tool aims to automate those processes, saving time and reducing errors.

## Features

- Calculates charges like Scrutiny Fee, I&A Charges, Security Deposit, Shelter Fund, Premium FSI, OSR, Development Charges (Land and Building), and CC Charge.
- Responsive UI with a clean and modern design.
- Dark theme with a professional color palette.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templates), CSS
- **Hosting Platform**: Render (or any other compatible hosting service)

---

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)
- Git

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/building-charge-calculator.git
   cd building-charge-calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Open your browser and go to:

   ```
   http://localhost:3000
   ```

---

## Deployment

### Hosting on Render

1. Push your code to a GitHub repository.
2. Log in to [Render](https://render.com/) and create a new Web Service.
3. Link your repository and configure the build settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Deploy the app. Render will provide you with a public URL.

### Hosting on Other Platforms (Optional)

- **Heroku**: Follow similar steps but ensure a `Procfile` is present with the following content:

  ```
  web: node app.js
  ```

- **Vercel**: Ideal for full-stack apps. Import your GitHub repository and deploy directly.

---

## Project Structure

```
project-folder/
|
├── views/                # EJS templates for rendering frontend
│   └── index.ejs         # Main UI template
|
├── public/               # Static assets (CSS, images)
│   └── styles.css        # Styling for the app
|
├── app.js                # Main Node.js server file
├── package.json          # npm configuration and dependencies
├── .gitignore            # Files to ignore in Git
└── README.md             # Documentation for the project
```

---

## Customization

### Update Color Theme

The color scheme is defined in `public/styles.css`. Update the HEX values to customize the look:

- Background: `#041421`
- Container: `#042630`
- Accent: `#86b9b0`

---

## Troubleshooting

- **Error: Cannot find module 'express'**:
  Ensure dependencies are installed by running:

  ```bash
  npm install
  ```

- **Port Already in Use**:
  Change the port in `app.js`:

  ```javascript
  const PORT = 3000; // Change 3000 to another available port
  ```

---

## License

This project is licensed under the MIT License. Feel free to use and modify it for personal or educational purposes.

---

## Acknowledgments

- Inspired by building regulations and charge calculators.
- Designed with a focus on simplicity and professional aesthetics.

