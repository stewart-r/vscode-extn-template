import { TextEditor } from "vscode";


export function insertLineAbove(editor:TextEditor){
    console.log('insertLineAbove command called');
    let selection = editor.selection
    editor.edit(editBuilder => {
        editBuilder.insert(selection.anchor,`\r\n`);
    })
}