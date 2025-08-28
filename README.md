# LettFaktura company SOW Project

This project is a full-stack application built to fulfill the requirements of the SOW provided by Emanuel. It includes a replica of the terms page and a functional, responsive pricelist.

[Live Demo](https://your-live-demo-url.onrender.com) <!-- You will fill this in after deployment -->

## Tech Stack

| Category | Technology | Version |
| :--- | :--- | :--- |
| **Language** | JavaScript | ES2022 |
| **Monorepo** | pnpm | 10.15.0 |
| **Backend** | Fastify | 4.27.0 |
| **Database** | PostgreSQL | latest |
| **ORM** | Sequelize | 6.37.3 |
| **Frontend** | React | 18.2.0 |
| **Build Tool** | Vite | 5.2.0 |
| **Styling** | Vanilla CSS | CSS Modules |
| **Deployment** | Render.com, Docker | |

## Features

-   **Terms Page:** A pixel-perfect, responsive replica of the provided URL with content served from the database.
-   **Language Switching:** Toggle between Swedish and English content on the Terms page.
-   **Functional Hamburger Menu:** A working mobile menu for the Terms page.
-   **Pricelist Page:** A responsive data grid for viewing and editing product information.
-   **Editable Fields:** All pricelist data can be modified and saved back to the database.
-   **Responsive Design:** The UI adapts seamlessly to mobile (portrait/landscape), tablet, and desktop screens.

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   pnpm (v10 or later)
-   Docker and Docker Compose

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://your-repo-url.git](https://your-repo-url.git)
    cd fullstack-js-project
    ```
2.  Install dependencies from the root directory:
    ```bash
    pnpm install
    ```

### Running the Project

1.  Start the PostgreSQL database using Docker:
    ```bash
    docker-compose up -d
    ```
2.  Run the database migrations to create the tables:
    ```bash
    pnpm --filter api db:migrate
    ```
3.  (Optional) Seed the database with sample data:
    ```bash
    pnpm --filter api db:seed
    ```
4.  Start both the backend and frontend development servers concurrently:
    ```bash
    pnpm dev
    ```
    - The API will be available at `http://localhost:4000`.
    - The React client will be available at `http://localhost:5173`.

## Deployment

This project is configured for deployment on [Render.com](https://render.com/). The monorepo is deployed as two separate services:

-   **PostgreSQL Database:** A managed database instance.
-   **Web Service (Backend):** Deploys the Fastify API from the `apps/api` directory.
-   **Static Site (Frontend):** Deploys the React client from the `apps/client` directory.

Automatic deployments are triggered on pushes to the `main` branch.
