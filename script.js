function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'fr-FR'; // French pronunciation
    speech.rate = 0.9; // Slightly slower
    window.speechSynthesis.speak(speech);
}
