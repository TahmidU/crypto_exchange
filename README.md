# Task
<a href="https://www.dropbox.com/s/61igxq8iqz1azq4/Front-end%20assignment.pdf?dl=0">The assignment can be found here</a>
- [x] Nivo Graph fetches from `https://www.bitstamp.net/api/v2/ticker/{currency}` and updates every 10s.
- [x] Page is mobile responsive.
- [x] Reusabled components: GJNumberLabel and GJNumbersView were created and used.
- [x] Trading pairs retrieved from `https://www.bitstamp.net/api/v2/trading-pairs-info/`.
- [x] Currency pair info displayed using the request `https://www.bitstamp.net/api/v2/ticker/{currency_pair}`.
- [x] Average last price calculated using `https://www.bitstamp.net/api/v2/ticker/{currency}`, `https://api.coinbase.com/v2/exchange-rates?currency={currency}` and `https://api-pub.bitfinex.com/v2/tickers?symbols={currency}`.
- [x] HTML design layout followed.

# Technologies Used
- Typescript: Language used for the project.
- NextJS: React Framework.
- Styled-Components: Used for styling components.
- Jest: Test framework.
- React Testing Library (RTL): Used to unit test components.

# Running Locally
At the root of the project:
- To run the nextjs server locally, run `yarn dev`.
- To run storybook, run `yarn storybook`.
- To run RTL tests, run `yarn jest`


# Deployment
This project was deployed on Vercel because of how fast it is to quickly deploy a free-tier web app in NextJS. The deployment can be found <a href="https://crypto-exchange-wheat.vercel.app/">here.</a>

# Decisions and Things to Note
### 1.
This nextjs project uses the latest version of react which is version 18. One of the changes to version 18 is that <a href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-strict-mode">components now mount -> unmount -> mount on initial render.</a> It for this reason I've disabled strict mode in the `next.config.js`.

### 2.
I assumed that averages should be calculated based on what currency pair the user has selected.

Based on the screenshot below, I thought you would want the averages only for the btc/usd currency pair...

![image](https://user-images.githubusercontent.com/45020076/179522665-243548e4-8b90-4f04-9c00-8462c0d66bf0.png)


however, after I've looked at the other screenshot below, I figured that you wanted the average last price and the last prices for the graph based on the currency selected by the user.

![image](https://user-images.githubusercontent.com/45020076/179526325-ed6a99bb-af49-4718-8704-19d42f2fcad1.png)

### 3.
The line chart was dynamically loaded on the client side as I was having issues with it running on SSR. This maybe due to the fact that no window object is present and the nivo library also wanting a definite size.
