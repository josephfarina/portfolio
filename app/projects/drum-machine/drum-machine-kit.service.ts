import { Injectable, Inject } from '@angular/core';
import { DrumMachineMetronomeService } from './drum-machine-metronome.service';

@Injectable()
export class DrumMachineKitService {

    kickDrum(time: number) {
        let kickOsc = this.context.createOscillator();
        kickOsc.type = 'sine';
        kickOsc.frequency.value = 90;
        kickOsc.start(time);
        kickOsc.stop(time + this.noteLength);

        let kickGain = this.context.createGain();
        kickOsc.connect(kickGain);
        kickGain.connect(this.context.destination);


        kickGain.gain.setValueAtTime(0, time);
        kickGain.gain.linearRampToValueAtTime(1.0, time + this.noteLength);
    }
}
