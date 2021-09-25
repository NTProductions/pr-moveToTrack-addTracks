app.enableQE();

var vanillaSequence = app.project.activeSequence;
var qeSequence = qe.project.getActiveSequence(0);

qeSequence.addTracks(10, vanillaSequence.videoTracks.numTracks, 10, vanillaSequence.audioTracks.numTracks);
    // argument 1, num video tracks to add
    // argument 2, track to add them after (zero-based index)
    // argument 3, num audio tracks to add
    // argument 4, audio track type (see below)
    // argument 5, track to add them after (zero-based index)
    // argument 6, number of submixes to add
    // argument 7, submix type (see below)
    // argument 8, position to add submix (zero-based index)
    

    // submix type guide
    // 0: Mono
    // 1: Standard
    // 2: 5.1
    // 3: Stereo

    // thanks to @calebvetter for the updated information
    
var thisQEClip = qeSequence.getVideoTrackAt(0).getItemAt(0);
    
thisQEClip.moveToTrack(500, 0, "0");
