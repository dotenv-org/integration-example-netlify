Works with [dotenv-vault](https://github.com/dotenv-org/dotenv-vault). Learn more at [dotenv.org](https://dotenv.org).

# integration-example-netlify

<img src="https://raw.githubusercontent.com/dotenv-org/integration-example-netlify/master/netlify.png" alt="netlify" /><img src="https://raw.githubusercontent.com/dotenv-org/integration-example-netlify/master/dotenv.png" alt="dotenv" />

Example Netlify + Dotenv integration.

View the live example here: [https://dotenv-integration-example-netlify.netlify.app/](https://dotenv-integration-example-netlify.netlify.app/)

## Screenshots on Dotenv

If you are using Netlify with Dotenv, then your configuration will look similar in Dotenv. You'll see that the environment variables below map to [process.env.NEXT_PUBLIC_HELLO](https://github.com/dotenv-org/integration-example-netlify/blob/master/pages/index.js#L12)

Staging Tab:

<img src="https://raw.githubusercontent.com/dotenv-org/integration-example-netlify/master/screenshot1.png" alt="screenshot1" />

Production Tab:

<img src="https://raw.githubusercontent.com/dotenv-org/integration-example-netlify/master/screenshot2.png" alt="screenshot2" />

#### Production Integrations Tab:

<img src="https://raw.githubusercontent.com/dotenv-org/integration-example-netlify/master/screenshot3.png" alt="screenshot3" />

#### Production Netlify Integration:

<img src="https://raw.githubusercontent.com/dotenv-org/integration-example-netlify/master/screenshot4.png" alt="screenshot4" />

## Development

Run the development server:

```bash
npm install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
