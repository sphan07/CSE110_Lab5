// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const synth = window.speechSynthesis; // Initialize the speech synthesis API
  const textInput = document.getElementById("text-to-speak"); // Text input field
  const voiceSelect = document.querySelector('#voice-select'); // Dropdown for voice selection
  const speakButton = document.querySelector('section button'); // Speak button
  const faceImage = document.querySelector('section img');

  let voices = [];

  // get list of voices
  function populateVoiceList() {
    voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}
  
// Handle async loading of voices (for some browsers)
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = populateVoiceList;
}

// Function to speak the entered text when button is clicked
speakButton.addEventListener('click', () => {

  const speakthis = new SpeechSynthesisUtterance(textInput.value); // Create the utterance
  const selectedOption = voiceSelect.selectedOptions[0];
  const selectedVoice = voices.find(
    (voice) => voice.name === selectedOption.getAttribute('data-name')
  );
    
  if (selectedVoice) {
    speakthis.voice = selectedVoice;
  }

  // Change face to open mouth while speaking
  speakthis.onstart = () => {
  faceImage.src = "assets/images/smiling-open.png";
  };

  // Revert the face back to smiling once the speech is done
  speakthis.onend = () => {
    faceImage.src = "assets/images/smiling.png";
  };

  synth.speak(speakthis);
 
});

}
