import jsTPS_Transaction from "../common/jsTPS.js"

export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, id) {
        super();
        this.app = initApp;
        this.songId = id;
        this.deletedSong = null;
    }

    doTransaction() {
        this.deletedSong = this.app.deleteMarkedSong(this.songId);
    }
    
    undoTransaction() {
        this.app.addSong();
        this.app.moveSong(this.app.state.currentList.songs.length - 1, this.songId);
        this.app.editSong(this.songId, this.deletedSong.title, this.deletedSong.artist, this.deletedSong.youTubeId);
    }
}