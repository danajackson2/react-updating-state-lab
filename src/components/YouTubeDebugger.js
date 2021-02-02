import React from 'react'

export default class YouTubeDebugger extends React.Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          } 
    }

    handleBClick = () => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        })
    }

    handleRClick = () => {
        this.setState({
            settings: {...this.state.settings, video:{resolution: '720p'}}
        })
    }

    render(){
        return (
            <div>
                <button className='bitrate' onClick={this.handleBClick}>Bitrate to 12</button>
                <br />
                <button className='resolution' onClick={this.handleRClick}>Resolution to 720p</button>
            </div>
        )
    }
}