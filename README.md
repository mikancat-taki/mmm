# Interstellar Proxy

Interstellar Proxy is a lightweight proxy server built with TypeScript. It allows you to forward requests to a target server and return the responses to the client. This project is designed to be easily configurable and extendable.

## Features

- Simple and efficient request forwarding
- Configurable settings through environment variables
- TypeScript support for type safety
- Easy to set up and use

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/UseInterstellar/Interstellar.git
   cd interstellar-proxy
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

Before running the proxy server, you may need to configure the settings. You can do this by creating a `.env` file in the root directory or by setting environment variables directly.

### Running the Proxy Server

To start the proxy server, run the following command:

```bash
npm start
```

### Usage

Once the server is running, you can send requests to the proxy server, which will forward them to the specified target server. The responses will be returned to the client.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.