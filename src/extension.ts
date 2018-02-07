'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { insertLineAbove } from './InsertLine/insertLineAbove';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    console.log(`text-tools extension activated!`);
    let insertAboveCommand = vscode.commands.registerCommand("textTools.insertLineAbove", insertLineAbove);
    
    context.subscriptions.push(insertAboveCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {
    console.log(`text-tools extension deactivated`);
}