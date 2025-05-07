// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //for elements
  let horn = document.getElementById('horn-select');  // Dropdown for horn selection
  let volumeSlider = document.getElementById('volume');  // Volume slider
  let volumeIcon = document.querySelector('#volume-controls img');      // Volume icon 
  let playButton = document.querySelector('button');       // Play button for sound
  let audioElement = document.querySelector('audio');  // audio

  //for horn images/audio
  const horns = {
    'air-horn': { image: 'assets/images/air-horn.svg', audio: 'assets/audio/air-horn.mp3'},
    'car-horn': { image: 'assets/images/car-horn.svg', audio: 'assets/audio/car-horn.mp3'},
    'party-horn': { image: 'assets/images/party-horn.svg', audio: 'assets/audio/party-horn.mp3'}
  };

  //create event listeners for above
  // Handle horn selection change
  horn.addEventListener('change', function() {
    const selectedHorn = horns[horn.value];  // Get the selected horn value
    // Change the image and audio based on selected horn
    const hornImg = document.querySelector('#expose img');
    hornImg.src = selectedHorn.image;
    //get audio file based on selection
    audioElement.src = selectedHorn.audio;
  });

  //use button/audio part
  // Handle volume slider change
  volumeSlider.addEventListener('input', function(){
  //let volume = volumeSlider.value;  // Get the volume slider value
    
    if (volumeSlider.value == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';  // Mute icon
    } else if (volumeSlider.value < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';  // Low volume icon
    } else if (volumeSlider.value < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';  // Medium volume icon
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';  // High volume icon
    }
    //Corresponding volume is set for the audio element
    audioElement.volume = volumeSlider.value / 100;
  });

    //play button for sound
    const jsConfetti = new JSConfetti();
    playButton.addEventListener('click', function(){
      audioElement.play();
      if(horn.value == 'party-horn')
      {
        jsConfetti.addConfetti();
      }
    });

  
}