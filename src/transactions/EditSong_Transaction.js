import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, id, newTitle, newArtist, newYTId) {
        super();
        this.app = initApp;
        this.songId = id;
        this.newTitle = newTitle;
        this.newArtist = newArtist
        this.newYTId = newYTId
        this.oldSong = null;
    }

    doTransaction() {
        this.oldSong = this.app.editMarkedSong(this.songId, this.newTitle, this.newArtist, this.newYTId);
    }
    
    undoTransaction() {
        this.app.editSong(this.songId, this.oldSong.title, this.oldSong.artist, this.oldSong.youTubeId);
    }
}