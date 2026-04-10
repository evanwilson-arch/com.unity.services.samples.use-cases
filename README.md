# Into the Void: Unity 6 & AI Agentic Development

Welcome to the **Into the Void** ecosystem. This repository serves as the critical infrastructure for our agentic development workflows, bridging external logic pipelines (like Jules) with the core Unity 6 environment.

## Repository Overview

This project is a hybrid environment containing:
*   **Unity 6 Project**: Located in `GemHunterMatch3/`, showcasing advanced UGS (Unity Gaming Services) implementations.
*   **TypeScript Workspace**: Located in `packages/` and `plugins/`, providing the VS Code extension and tooling for agentic development.
*   **Unity Services Samples**: Root-level `Assets/` and `ProjectSettings/` containing various UGS use case samples.

## Technical Manifest

### Local Environment Setup

To work with the TypeScript workspace and VS Code extension, ensure you have the following installed:

*   **Node.js**: Recommended version 18.x or 20.x (LTS).
*   **TypeScript**: Version 5.x.
*   **Unity Editor**: 6000.0.x (Unity 6) or later.
*   **VS Code**: Latest version with the "Extension Development Host" capabilities.

### Compilation Instructions

1.  Navigate to the extension directory:
    ```bash
    cd plugins/vscode-extension
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Compile the extension:
    ```bash
    npm run compile
    ```
4.  To package as a `.vsix`:
    ```bash
    npx vsce package
    ```

### Unity & C# Pipeline Integration

The VS Code extension interfaces with the Unity 6 environment via internal C# pipelines.
*   **Entry Point**: `GemHunterMatch3/Assets/GemHunterUGS/Scripts/Core/GameInitializer.cs` manages the initialization of metagame systems.
*   **Cloud Logic**: Server-authoritative logic is located in `GemHunterMatch3/GemHunterUGSCloud/`.

## Binaries & Artifact Management

Compiled artifacts (specifically `.vsix` packages) are distributed via GitHub Releases.

### Retrieval & Verification

1.  Download the latest `.vsix` and `checksums.txt` from the [Releases](https://github.com/evanwilson-arch/com.unity.services.samples.use-cases/releases) page.
2.  Verify the SHA-256 integrity:
    ```bash
    sha256sum -c checksums.txt
    ```
3.  Install in VS Code:
    ```bash
    code --install-extension into-the-void-extension.vsix
    ```

## CI/CD and Automation

We use a sophisticated automation matrix:
*   **Release Management**: Handled by `release-please`. Do not edit `CHANGELOG.md` manually.
*   **Repository Health**: Continuous linting via `markdownlint` and link verification via `lychee`.
*   **Dynamic Injection**: Unity Services environment variables (`EnvironmentId`, `EnvironmentName`) are dynamically injected during the build process.

## Contributing

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for our branching strategy (`feature/`, `hotfix/`, `agent/`) and commit message protocols.

## Security

Vulnerability disclosures should be sent directly to [security@milehighworldllc.com](mailto:security@milehighworldllc.com). See [SECURITY.md](SECURITY.md) for details.
