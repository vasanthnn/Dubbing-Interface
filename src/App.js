import React from 'react';
import { DialogueProvider } from './context/DialogueContext';
import VideoPlayer from './components/VideoPlayer';
import AudioRecorder from './components/AudioRecorder';
import DialogueDisplay from './components/DialogueDisplay';

function App() {
  return (
    <DialogueProvider>
      <div className="App p-4">
        <h1 className="text-xl font-bold mb-4">AI-Assisted Dubbing Interface</h1>
        <VideoPlayer />
        <AudioRecorder />
        <DialogueDisplay />
      </div>
    </DialogueProvider>
  );
}

export default App;
