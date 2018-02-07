import { TextEditor, window } from "vscode";

export function insertLineAboveImpl(editor:TextEditor){
    let selection = editor.selection
    editor.edit(editBuilder => {
        editBuilder.insert(selection.anchor,`\r\n`);
    });
}

export function insertLineAbove(){
    console.log('insertLineAbove command called');
    const editor = window.activeTextEditor;
    insertLineAboveImpl(editor);
}