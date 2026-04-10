# Contributing to Into the Void

Thank you for your interest in contributing to the **Into the Void** ecosystem. To maintain a high standard of quality and ensure seamless automated workflows, we enforce the following protocols.

## Branching Strategy

All contributions must follow our strictly defined branching model. Branches should be prefixed according to their purpose:

*   **`feature/`**: New functional development or significant enhancements.
*   **`hotfix/`**: Critical patches for production-ready code.
*   **`agent/`**: AI-driven development tasks and automated architectural refinements.

Example: `feature/integration-unity-6`, `agent/refactor-ts-services`.

## Commit Message Protocol

We strictly adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification (v1.0.0). This enables automated versioning and changelog generation.

**Format:** `<type>(<scope>): <description>`

### Allowed Types:
*   `feat`: A new feature
*   `fix`: A bug fix
*   `docs`: Documentation only changes
*   `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
*   `refactor`: A code change that neither fixes a bug nor adds a feature
*   `perf`: A code change that improves performance
*   `test`: Adding missing tests or correcting existing tests
*   `build`: Changes that affect the build system or external dependencies
*   `ci`: Changes to our CI configuration files and scripts
*   `chore`: Other changes that don't modify src or test files

## Development Workflow

1.  **Fork and Clone**: Create a personal fork and clone it locally.
2.  **Branch**: Create a new branch with the appropriate prefix (`feature/`, `hotfix/`, `agent/`).
3.  **Code**: Implement your changes following our TypeScript and Unity architectural guidelines.
4.  **Test**: Ensure all tests pass and your changes do not introduce regressions.
5.  **Commit**: Use Conventional Commit messages.
6.  **Push and PR**: Push to your fork and submit a Pull Request to the `main` branch.

## Pull Request Guidelines

*   Provide a clear and descriptive title.
*   Reference any related issues.
*   Include screenshots or videos for UI/Unity changes.
*   Ensure the CI/CD pipeline passes.

By contributing, you agree that your contributions will be licensed under the project's LICENSE.
