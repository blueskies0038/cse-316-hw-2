import React from 'react'

const DeleteSongModal = (props) => {
  const {songKeyPair, deleteSongCallback, hideDeleteSongModalCallback} = props
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
                        Are you sure you wish to permanently delete the  playlist?
                    </div>
                </div>
                <div className="modal-south">
                    <input type="button" 
                        id="delete-song-confirm-button" 
                        className="modal-button" 
                        onClick={deleteSongCallback}
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