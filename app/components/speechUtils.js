export function speakMale(text) {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.voice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.name === 'Google UK English Male');
  window.speechSynthesis.speak(msg);
}
export function speakFemale(text) {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.voice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.name === 'Google UK English Female');
  window.speechSynthesis.speak(msg);
}
