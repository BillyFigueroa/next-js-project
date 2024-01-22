This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## The Challenge

Using Node.JS, create a people directory using the Random User API.

The people directory should list all people in a format of your choosing (grid, table, etc..).

Each person displayed should have the following information:

- A profile image
- Name
- Age
- City

When a person is clicked, it should take you to a more detailed information page. This page should display:

- Profile Image
- Name
- Age
- Full Address
- Email Address
- Date of Birth
- Phone number

The application must run in Node.js and use React JS. Feel free to choose a framework (Remix, NextJS, etc...).

You can use any styling library you wish (Tailwindcss, Bootstrap, MaterialUI etc...)

### Acceptance Criteria

- Should display up to 10 users.
- A user should be able to drill down to each person and view details:
    - Profile Image
    - Name
    - Age
    - Full Address
    - Email Address
    - Date of Birth
    - Phone number
- Runs in Node.js
- Uses React
- Is server-side rendered.

### Bonus points
- [ ] Works offline
- [x] Test coverage
- [ ] Internationalized
- [ ] Paginated directory page with 10 users per page
- [x] 95+ Lighthouse scores for performance and accessibility


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Building project

To build the project run

```bash
npm run build
# or
yarn build
```

## Starting project (Prod build)

To view the production optmized app, run the following command

```bash
npm start
# or
yarn start
```

## Performance Results

After running `npm run build` and `npm start`, these are the Lighthouse results

#### Home

<img width="1591" alt="Screenshot 2024-01-22 at 9 34 52 AM" src="https://github.com/BillyFigueroa/next-js-project/assets/1371105/1e301aba-c59a-4bb2-bba2-eeb6e7c32840">

#### Users/

<img width="1593" alt="Screenshot 2024-01-22 at 9 34 04 AM" src="https://github.com/BillyFigueroa/next-js-project/assets/1371105/94344383-9267-4d14-969c-2f76075f24e1">

#### Users/[uid]

<img width="1592" alt="Screenshot 2024-01-22 at 9 34 28 AM" src="https://github.com/BillyFigueroa/next-js-project/assets/1371105/933f7336-a4fe-49da-8362-e2b51ef16c29">
