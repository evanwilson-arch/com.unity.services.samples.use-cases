import * as vscode from 'vscode';
import { UnityDataService } from './services/UnityDataService';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "into-the-void-extension" is now active!');

    const dataService = new UnityDataService();

    let disposable = vscode.commands.registerCommand('into-the-void.syncUnity', async () => {
        vscode.window.showInformationMessage('Syncing with Unity 6...');
        try {
            const data = await dataService.fetchLatestProjectData();
            vscode.window.showInformationMessage(`Sync Complete: Received ${data.length} updates.`);
        } catch (error) {
            vscode.window.showErrorMessage(`Sync Failed: ${error}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
