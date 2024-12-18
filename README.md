# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# OTP Generator

A customizable OTP (One-Time Password) generator built with React, Vite, TypeScript, and Tailwind CSS. This application allows users to generate secure OTPs with configurable options such as length and inclusion of uppercase letters, lowercase letters, and special characters. It features a responsive design, a user-friendly interface, and easy deployment on GitHub Pages.

## Features

- **Tab Interface**: Switch between standard 4-digit OTP and custom OTP generation.
- **Customizable OTP**: Configure OTP length (3-10 digits) and character set (uppercase, lowercase, special characters).
- **Responsive Design**: Modern layout using Tailwind CSS.
- **Real-time OTP Display**: Dynamic OTP rendering with styled character boxes.
- **Reset Functionality**: Clear current OTP with a reset button.
- **Easy Deployment**: Simple deployment on GitHub Pages.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/otp-generator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd otp-generator
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and visit `http://localhost:3000` to see the OTP generator in action.

## Deployment

To deploy the app on GitHub Pages:

1. Build the project:
    ```sh
    npm run build
    ```
2. Deploy to GitHub Pages:
    ```sh
    npm run deploy
    ```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)

## Contact

If you have any questions or feedback, please feel free to contact me at [your-email@example.com].

---

Feel free to customize this README file to better match the specifics of your project. If there's anything else you need, just let me know! 😊
