import { Injectable } from '@angular/core';

@Injectable()
export class DrumMachineKitService {
    private context: any;

    kick(time: any) {
        let osc = this.context.createOscillator();
        let osc2 = this.context.createOscillator();
        let gainOsc = this.context.createGain();
        let gainOsc2 = this.context.createGain();

        osc.type = 'triangle';
        osc2.type = 'sine';

        gainOsc.gain.setValueAtTime(1, time);
        gainOsc.gain.exponentialRampToValueAtTime(0.001, time + 0.5);

        gainOsc2.gain.setValueAtTime(1, time);
        gainOsc2.gain.exponentialRampToValueAtTime(0.001, time + 0.5);
        osc.frequency.setValueAtTime(120, time);
        osc.frequency.exponentialRampToValueAtTime(0.001, time + 0.5);

        osc2.frequency.setValueAtTime(50, time);
        osc2.frequency.exponentialRampToValueAtTime(0.001, time + 0.5);

        osc.connect(gainOsc);
        osc2.connect(gainOsc2);
        gainOsc.connect(this.context.destination);
        gainOsc2.connect(this.context.destination);

        osc.start(time);
        osc2.start(time);

        osc.stop(time + 0.5);
        osc2.stop(time + 0.5);
    }

    snare(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    lowtom(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    midtom(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(350, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    hitom(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    rimshot(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    clap(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(550, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    hihat(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(750, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    cymbal(time: any) {
        let osc = this.context.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, time);
        osc.connect(this.context.destination);
        osc.start(time);
        osc.stop(time + 0.1);
    }
}
