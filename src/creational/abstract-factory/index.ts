// Byimaan

/**
 * Abstract :-
 *  a) Product
 *  b) Factory
 * 
 * Concrete :-
 *  a) Product
 *  b) Factory
 * 
 * Client :-
 *  a) Client class that actually combines everthing & encapsulates the service.
 */

/**
 *Problem: Cross-Platform Media Player
    You need to develop a media player application that supports both audio and video playback on two different platforms: Windows and macOS. Each platform has its specific way of handling media playback.
 *
 */

// Product Player

interface Player {
    playAudio() : void;
}

// Abstract

interface AudioPlayer {
    playAudio(): void;
};

interface VideoPlayer {
    playVideo(): void;
}

interface MediaPlayerFactory {
    createAudioPlayer(): AudioPlayer,
    createVideoPlayer(): VideoPlayer
}

// concrete 
class WindowAudioPlayer implements AudioPlayer{
    playAudio(): void {
        console.log("Playing audio on windows machine");
        // code ...
    }
}

class MacOSAudioPlayer implements AudioPlayer{
    playAudio(): void {
        console.log("Playing audio on macOS machine");
        // code ...
    }
};

class WindowsVideoPlayer implements VideoPlayer {
    playVideo(): void {
        console.log('playing video on window machine');
        // code ...
    }
};

class MacOsVideoPlayer implements VideoPlayer {
    playVideo(): void {
        console.log("playing video on macOS machine");
        // code ...
    }
};
 

class WindowsPlayerFactory implements MediaPlayerFactory{
    createAudioPlayer(): AudioPlayer {
        return new WindowAudioPlayer()
    };
    createVideoPlayer(): VideoPlayer {
        return new WindowsVideoPlayer()
    }
};

class MacOSPlayerFactory implements MediaPlayerFactory {
    createAudioPlayer(): AudioPlayer {
        return new MacOSAudioPlayer()
    };
    createVideoPlayer(): VideoPlayer {
        return new MacOsVideoPlayer()
    }
};


// client

class MediaPlayer{
    private audioPlayer : AudioPlayer;
    private videoPlayer : VideoPlayer;

    constructor(factory: MediaPlayerFactory){
        this.audioPlayer = factory.createAudioPlayer();
        this.videoPlayer = factory.createVideoPlayer();
    };
    
    play(): void {
        // code..
        this.audioPlayer.playAudio();
        this.videoPlayer.playVideo()
    }
}