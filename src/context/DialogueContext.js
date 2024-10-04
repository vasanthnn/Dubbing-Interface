import React, { useState, createContext } from 'react';

export const DialogueContext = createContext();

export const DialogueProvider = ({ children }) => {
  const [dialogues, setDialogues] = useState([
    { id: 1, original: 'Hello, world!', translated: 'Hola, mundo!' },
    { id: 2, original: 'How are you?', translated: '¿Cómo estás?' },
    { id: 3, original: 'Goodbye!', translated: '¡Adiós!' },
  ]);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const nextDialogue = () => {
    if (currentDialogueIndex < dialogues.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  const prevDialogue = () => {
    if (currentDialogueIndex > 0) {
      setCurrentDialogueIndex(currentDialogueIndex - 1);
    }
  };

  return (
    <DialogueContext.Provider value={{ dialogues, currentDialogueIndex, nextDialogue, prevDialogue }}>
      {children}
    </DialogueContext.Provider>
  );
};
