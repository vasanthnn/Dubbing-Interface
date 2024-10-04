import React, { useContext } from 'react';
import { DialogueContext } from '../context/DialogueContext';

const DialogueDisplay = () => {
  const { dialogues, currentDialogueIndex, nextDialogue, prevDialogue } = useContext(DialogueContext);
  const dialogue = dialogues[currentDialogueIndex];

  return (
    <div>
      <h3 className="text-lg font-semibold">Dialogue</h3>
      <div className="mb-2">
        <label>Original Text:</label>
        <input
          type="text"
          value={dialogue.original}
          className="border p-1 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label>Translated Text:</label>
        <input
          type="text"
          value={dialogue.translated}
          className="border p-1 w-full"
          readOnly
        />
      </div>
      <button onClick={prevDialogue} className="p-2 bg-gray-500 text-white mr-2">Previous</button>
      <button onClick={nextDialogue} className="p-2 bg-blue-500 text-white">Next</button>
    </div>
  );
};

export default DialogueDisplay;
