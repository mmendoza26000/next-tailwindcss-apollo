This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## What's included
- Next JS
- TailwindCSS
- Apollo Client, configured for SSR, use on Client side, and WebSockets for subscriptions.


## How to use:
1. Go to /lib/apolloClient and update the uri for httpLink and wsLink
2. You should have a table named 'test' in your GraphQl endpoint, with at least one record. See the file /graphql/Test.js to see the test query and subscription.
3. Start with 

```bash
npm run dev
```

