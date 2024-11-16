# frontend-dev-docs-hub

## Features

- Automatically scan and serve multiple document directories
- Provide a user-friendly web interface to navigate different directories
- Support access via IP address within the local network
- Automatically allocate available ports to avoid port conflicts

## Development

1. Clone the repository locally
2. Run `yarn install` to install dependencies
3. Run `yarn dev` to start the development server

## Production Usage

1. Run `yarn build` to build the project
2. Copy the `public` directory to the target server
3. Use `node public/serve.js` to start the server
