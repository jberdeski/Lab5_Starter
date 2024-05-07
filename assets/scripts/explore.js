// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices = [];

function populateVoiceList(select, voices){
  select.innerHTML = "";

  voices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    select.appendChild(option);
  });
}

function init() {
  const accentSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");

  if("speechSynthesis" in window){
    voices = speechSynthesis.getVoices();
    if(voices.length === 0){
      speechSynthesis.addEventListener("voiceschanged", () =>{
        voices = speechSynthesis.getVoices();
        populateVoiceList(accentSelect, voices);
      });
    }
    else{
      populateVoiceList(accentSelect, voices);
    }
  }
  
  talkButton.addEventListener("click", () =>{
    const textToSpeech = document.getElementById("text-to-speak").value;
    const selectedVoiceIndex = accentSelect.selectedIndex;
    const selectedVoice = accentSelect.options[selectedVoiceIndex].getAttribute("data-name");

    if(textToSpeech !== ""){
      const utterance = new SpeechSynthesisUtterance(textToSpeech);
      const selectedVoiceObj = voices.find(voice => voice.name === selectedVoice);

      if(selectedVoiceObj){
        utterance.voice = selectedVoiceObj;
      }
      
      speechSynthesis.speak(utterance);

      const faceImg = document.querySelector("img");
      faceImg.src = 'assets/images/smiling-open.png';

      utterance.onend = () => {
        faceImg.src = 'assets/images/smiling.png';
      };
    }
  });
}

