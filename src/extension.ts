// https://stackoverflow.com/questions/46029346/can-i-test-my-lsp-server-without-writing-an-extension
import * as vscode from 'vscode';

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
} from 'vscode-languageclient/node';

export function activate(_context: vscode.ExtensionContext) {
    const serverOptions: ServerOptions = {
        command: 'bril-lsp',
        args: []
    }

    const clientOptions: LanguageClientOptions = {
        documentSelector: [
            {
                language: 'bril',
            },
        ],
    };

    const client = new LanguageClient('bril-lsp', serverOptions, clientOptions);
    client.start();

}

export function deactivate() { }
