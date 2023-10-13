import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div style={{height:'40px', marginTop:'85px'}}>
        <div className="card text-center fixed-bottom" style={{backgroundColor:'#2b3035',color:'white',borderRadius:'0px'}}>
            <div className="card-body">
                <h5>NewsHunt</h5>
                <h5 className="card-title">Your Daily News Provider</h5>
                <p className="card-text">CopyRight &copy; 2023 Made with <i className="bi bi-heart-fill" style={{color:'red'}}></i> By Pratik Samarth</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer