
# Blueprint: Random Number Generator

## Overview

This is a web application that allows users to generate sets of 6 unique random numbers (from 1 to 45), simulating lottery number generation. The application stores the generated sets in a Firebase Firestore database and displays a history of the last 5 generated games. The UI is designed to be modern, intuitive, and visually appealing.

---

## Project Documentation

### **V1 (Current): Core Functionality**

*   **Features:**
    *   Generate a set of 6 unique, sorted random numbers between 1 and 45 by clicking a button.
    *   The app collects 5 generated sets (games) in a temporary history view.
    *   After 5 games are generated, the button changes to "Reset & Save".
    *   Clicking "Reset & Save" stores the 5-game set into a Firebase Firestore collection named `lottery_tickets`.
    *   The saved data includes the 5 games and a timestamp.
    *   Upon successful save, the game state resets.
*   **Design & Style:**
    *   Basic HTML structure with minimal styling.
    *   A main button for generation.
    *   A container to display the most recently generated numbers.
    *   A history section with 5 slots to show the collected games before saving.
*   **Technology:**
    *   HTML, CSS, JavaScript (ES6+).
    *   Firebase SDK for Web (v9 compat mode).
    *   Firebase Firestore for data storage.

---

## **V2 (Next Step): UI/UX Enhancement Plan**

### 1. **Modern Aesthetics & Layout**
*   **Goal:** Transform the basic layout into a visually engaging, modern interface.
*   **Action:** 
    *   Implement a dark-themed UI for better contrast and a premium feel.
    *   Introduce a professional color palette (e.g., dark blues, grays, with a vibrant accent color for buttons and numbers).
    *   Use Google Fonts for clean and readable typography.
    *   Center the main content and apply proper spacing and alignment using Flexbox for a balanced layout.
    *   Add a subtle noise texture to the background for a tactile feel.

### 2. **Interactive & "Lifted" Components**
*   **Goal:** Make UI elements feel more interactive and three-dimensional.
*   **Action:**
    *   Redesign the "Generate" button with a gradient background, rounded corners, and a subtle "glow" effect on hover.
    *   Style the number display and history slots as "cards" with soft, multi-layered drop shadows to make them appear "lifted" off the page.
    *   Add smooth transitions (`transition` property) for color and shadow changes on interactive elements.

### 3. **Animations & Visual Feedback**
*   **Goal:** Provide better visual feedback to the user through animations.
*   **Action:**
    *   Animate the generated numbers as they appear on the screen (e.g., a fade-in and scale effect).
    *   Animate the history slots as they are populated.

