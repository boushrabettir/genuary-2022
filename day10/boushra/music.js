console.clear(); // clear console is optional
//attach a click listener to a play button

const synth = new Tone.Synth().toDestination();
synth.oscillator.type = 'sine'; //wave lengths

const notes = [
  'A1', 'E2', 'F3',
  'G2', 'G3', 'G4',
  'C3', 'E4', 'G2',
  'C2', 'E4', 'F3',
  'C1', 'A2', 'G3',
  'F1', 'E3', 'G2',
  'C1', 'C2', 'C3',
  'G2', 'A3', 'F2',
  'C4', 'F4', 'A2',
  'A4', 'F1', 'C2',

];

 
let i = 0;
Tone.Transport.scheduleRepeat(time => {
  repeat(time);
 }, '8n');

function repeat(time) {
  let note = notes[i % notes.length]; // for the aray
  synth.triggerAttackRelease(note, '8n', time);
  i++;
}

document.getElementById("play-button").addEventListener('click', function() {
  if (Tone.Transport.state != 'started') {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});
