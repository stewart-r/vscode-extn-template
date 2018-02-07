import { TextEditor, TextDocument, TextEditorOptions, ViewColumn } from "vscode";

export class TextEditorMock implements TextEditor{
    document: TextDocument;
    selection: Selection;
    selections: Selection[];
    options: TextEditorOptions;
    viewColumn?: ViewColumn;
    edit(callback: (editBuilder: TextEditorEdit) => void, options?: { undoStopBefore: boolean; undoStopAfter: boolean; }): Thenable<boolean> {
        throw new Error("Method not implemented.");
    }
    insertSnippet(snippet: SnippetString, location?: Position | Range | Position[] | Range[], options?: { undoStopBefore: boolean; undoStopAfter: boolean; }): Thenable<boolean> {
        throw new Error("Method not implemented.");
    }
    setDecorations(decorationType: TextEditorDecorationType, rangesOrOptions: Range[] | DecorationOptions[]): void {
        throw new Error("Method not implemented.");
    }
    revealRange(range: Range, revealType?: TextEditorRevealType): void {
        throw new Error("Method not implemented.");
    }
    show(column?: ViewColumn): void {
        throw new Error("Method not implemented.");
    }
    hide(): void {
        throw new Error("Method not implemented.");
    }
    
}