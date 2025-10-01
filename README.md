# Mini Practice Dashboard

A simple React dashboard project with search, status filter dropdown, pagination, and dark theme support.

## LiveDemo
https://react-pagination-practice.vercel.app/


## Features

- **Project List:** Displays projects with name, description, and status.
- **Search:** Filter projects by name.
- **Status Dropdown:** Filter projects by status.
- **Pagination:** Navigate through projects with Previous/Next buttons and page numbers.
- **Dark Theme:** Toggle between light and dark modes.

## Tech Stack

- React
- TypeScript
- Tailwind CSS (for styling)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/mini-practice-dashboard.git
   cd mini-practice-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **(Optional) Start your mock API server:**
   - Make sure you have a backend running at `http://localhost:3000/projects` or use [json-server](https://github.com/typicode/json-server):
     ```bash
     npx json-server --watch db.json --port 3000
     ```

## Project Structure

```
src/
  Components/
    Homepage.tsx      # Main dashboard component
    SearchInput.tsx   # Search input component
    DropDown.tsx      # Status filter dropdown
    DarkTheme.tsx     # Dark theme toggle
  Hooks/
    useFetchData.tsx  # Custom hook for fetching projects
```

## Usage

- **Search:** Type in the search box to filter projects by name.
- **Status Filter:** Select a status from the dropdown to filter projects.
- **Pagination:** Use Previous/Next buttons or page numbers to navigate.
- **Dark Theme:** Click the theme toggle to switch modes.
