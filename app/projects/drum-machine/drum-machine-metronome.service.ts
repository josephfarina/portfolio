import { Injectable } from '@angular/core';

@Injectable()
export class DrumMachineMetronomeService {

    private timeWorker: any = null;
    private noteTime: number;
    private startTime: number;
    private currentTime: number;
    private rhythmIndex: number = 1;
    private tempo: number;
    private nextNoteTime: number = 0;
    private lookahead: number = 25.0;
    private scheduleAheadTime: number = .2;
    // private noteLength: number = .25;
    private context: any;
    private isPlaying: boolean = false;

    private sequencerLineUp: Object = null;


    private sampleBuffers: Object = {};
    private samples: string[] = ['snare', 'clap', 'kick', 'cymbal', 'hihat', 'hitom', 'lowtom', 'midtom', 'rimshot'];

    init() {
        this.loadAudioSamples();

        console.log('initated');
        this.context = new AudioContext();
        this.timeWorker = new Worker('./app/projects/drum-machine/timeWorker.js');
        console.log(this.timeWorker);
        this.timeWorker.onmessage = (e: any) => { if (e.data === 'tick') { this.schedule(); } else { console.log(e.data); } };
        this.timeWorker.postMessage({ 'interval': this.lookahead });
    }

    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.noteTime = 0;
            this.rhythmIndex = 0;
            this.nextNoteTime = 0;
            this.startTime = this.context.currentTime;
            this.timeWorker.postMessage('start');
        }
    }

    stop() {
        if (this.isPlaying) {
            this.isPlaying = false;
            this.timeWorker.postMessage('stop');
        }
    }

    schedule() {
        this.currentTime = this.context.currentTime - this.startTime;
        while (this.nextNoteTime < this.context.currentTime + this.scheduleAheadTime) {
            this.setBeat(this.nextNoteTime, this.rhythmIndex);
            this.nextNote();
        }
    }

    nextNote() {
        this.tempo = this.sequencerLineUp['projectSettings']['tempo'];
        let secondsPerBeat = 60 / this.tempo;
        this.nextNoteTime += .25 * secondsPerBeat;
        this.rhythmIndex++;
        if (this.rhythmIndex === 16) { this.rhythmIndex = 0; }
    }

    setSequencerLineUp(sequence: Object) {
        this.sequencerLineUp = sequence;
    }

    setBeat(time: number, beat: number) {
        if (this.sequencerLineUp['rhythmSettings'][beat]['kick']) { this.playSample('kick', time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['snare']) { this.playSample('snare', time); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['lowtom']) { this.playSample('lowtom', time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['midtom']) { this.playSample('midtom', time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['hitom']) { this.playSample('hitom', time); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['rimshot']) { this.playSample('rimshot', time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['clap']) { this.playSample('clap', time); }

        if (this.sequencerLineUp['rhythmSettings'][beat]['hihat']) { this.playSample('hihat', time); }
        if (this.sequencerLineUp['rhythmSettings'][beat]['cymbal']) { this.playSample('cymbal', time); }
    }

    playSample(type: string, time: number) {
        let source = this.context.createBufferSource(),
            level = this.level(type),
            filter = this.filter(type),
            volume = this.globalVolume(type);
        source.connect(filter);
        filter.connect(level);
        level.connect(volume);


        volume.connect(this.context.destination);
        source.buffer = this.sampleBuffers[type];
        source.start(time);
    }

// get the value for each of these settings from the sequencerLineUp by type
    globalVolume(type: string) {
        let level = this.context.createGain();
        level.gain.value = .3;
        return level;
    }

    level(type: string) {
        let level = this.context.createGain();
        level.gain.value = .4;
        return level;
    }

    filter(type: string) {
        let filter = this.context.createBiquadFilter();
        filter.type = 'lowshelf';
        filter.frequency.value = 500;
        return filter;
    }

    getAudioContext(): any {
        return this.context;
    }

    loadAudioSamples() {
        let urlBody = 'public/909_Samples/';

        for (let i = 0; i < this.samples.length; i++) {
            let request = new XMLHttpRequest();
            request.open('GET', urlBody + this.samples[i] + '.wav', true);
            request.responseType = 'arraybuffer';
            request.onload = () => {
                this.context.decodeAudioData(request.response).then((decodedData: any) => {
                    this.sampleBuffers[this.samples[i]] = decodedData;

                    console.log(this.sampleBuffers);
                });
            };
            request.send();
        }
    }

}
