# Afrilearn Web Application

## Project Overview
Afrilearn is a Next.js-based educational web application designed to manage and track educational assessments. The application features a dashboard interface for managing questions, viewing statistics, and monitoring class performance.

### Key Features
- Question Management System
- Performance Statistics Dashboard
- Interactive Charts and Visualizations
- Responsive Design
- Custom Font Integration
- Test Configuration Management

## Setup Instructions

### Prerequisites
- Node.js (Latest LTS version recommended)
- yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd afrilearn-web-app
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
afrilearn-web-app/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard pages
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Global/           # Global components
│   ├── Icons/            # SVG icons
│   ├── Layouts/          # Layout components
│   └── Pages/            # Page-specific components
├── base/                  # Base configurations and utilities
│   ├── dummyData/        # Mock data for development
│   └── funcs/            # Utility functions
└── __tests__/            # Test files
```

## Features and Usage

### Dashboard Layout
The application uses a responsive dashboard layout with:
- Sidebar navigation
- Top navigation bar
- Responsive menu for mobile devices

### Question Management
Reference to question management implementation:
```typescript:components/Pages/QuestionManagerPage/QuestionManagerPageIndex.tsx
startLine: 1
endLine: 29
```

### Statistics and Analytics
The application provides detailed statistics through:
- Pie charts for overall performance
- Progress bars for topic-wise scores
- Detailed question analysis

## Testing

The project includes comprehensive testing using Jest and React Testing Library. Run tests using:

```bash
yarn test
```

For watch mode:
```bash
yarn test:watch
```

## Technical Stack

- Next.js 15.0.1
- React 19.0.0
- TypeScript
- Tailwind CSS
- Jest & React Testing Library
- Recharts for data visualization


## Author

Godwin Chibyk (godwin.chibyk@gmail.com)
