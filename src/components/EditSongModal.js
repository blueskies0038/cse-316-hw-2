import React, { useEffect, useState } from 'react'

const EditSongModal = (props) => {
  const {songKeyPair, editSongCallback, hideEditSongModalCallback} = props
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [youTubeId, setYouTubeId] = useState("")

  const handleEditSong = () => {
      editSongCallback(songKeyPair.index, title, artist, youTubeId)
  }

  const handleTitleChange = (event) => {
    event.preventDefault()
    setTitle(event.target.value)
  }

  const handleArtistChange = (event) => {
    event.preventDefault()
    setArtist(event.target.value)
  }

  const handleYouTubeIdChange = (event) => {
    event.preventDefault()
    setYouTubeId(event.target.value)
  }

  useEffect(() => {
    let song = {}
    if (songKeyPair) {
        song = songKeyPair.song;
        setTitle(song.title)
        setArtist(song.artist)
        setYouTubeId(song.youTubeId)
    }
  }, [songKeyPair])

  return (
      <div 
        className="modal" 
        id="edit-song-modal" 
        data-animation="slideInOutLeft">
          <div className="modal-root" id='verify-edit-song-root'>
              <div className="modal-north">
                  Edit Song
              </div>
              <div className="modal-center" id="edit-song-form">
                Title:<input type="text" id="card-text-input-title" onChange={handleTitleChange} value={title} />
                Artist:<input type="text" id="card-text-input-artist" onChange={handleArtistChange} value={artist} />
                You Tube Id:<input type="text" id="card-text-input-youtube-id" onChange={handleYouTubeIdChange} value={youTubeId} />
              </div>
              <div className="modal-south">
                  <input type="button" 
                      id="edit-song-confirm-button" 
                      className="modal-button" 
                      onClick={handleEditSong}
                      value='Confirm' />
                  <input type="button" 
                      id="edit-song-cancel-button" 
                      className="modal-button" 
                      onClick={hideEditSongModalCallback}
                      value='Cancel' />
              </div>
          </div>
      </div>
);
}

export default EditSongModal