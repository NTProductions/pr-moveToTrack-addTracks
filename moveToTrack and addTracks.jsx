app.enableQE();

var vanillaSequence = app.project.activeSequence;
var qeSequence = qe.project.getActiveSequence(0);

qeSequence.addTracks(10, vanillaSequence.videoTracks.numTracks, 10, vanillaSequence.audioTracks.numTracks);
    // argument 1, num video tracks to add
    // argument 2, track to add them after
    // argument 3, num audio tracks to add
    // argument 4, track to add them after
    
var thisQEClip = qeSequence.getVideoTrackAt(0).getItemAt(0);
    
thisQEClip.moveToTrack(500, 0, "0");