import React, { useEffect, useState } from 'react'

const DeleteSongModal = (props) => {
  const {songKeyPair, deleteSongCallback, hideDeleteSongModalCallback} = props
  const [title, setTitle] = useState("")

  useEffect(() => {
    if (songKeyPair) {
        setTitle(songKeyPair.song.title)
    }
  }, [songKeyPair])

  const handleDeleteSong = () => {
    deleteSongCallback(songKeyPair)
  }

  return (
        <div 
        className="modal" 
        id="delete-song-modal" 
        data-animation="slideInOutLeft">
            <div className="modal-root" id='verify-delete-song-root'>
                <div className="modal-north">
                    Delete playlist?
                </div>
                <div className="modal-center">
                    <div className="modal-center-content">
                        Are you sure you wish to permanently remove {title} from the playlist?
                    </div>
                </div>
                <div className="modal-south">
                    <input type="button" 
                        id="delete-song-confirm-button" 
                        className="modal-button" 
                        onClick={handleDeleteSong}
                        value='Confirm' />
                    <input type="button" 
                        id="delete-song-cancel-button" 
                        className="modal-button" 
                        onClick={hideDeleteSongModalCallback}
                        value='Cancel' />
                </div>
            </div>
        </div>
    );
}

export default DeleteSongModal