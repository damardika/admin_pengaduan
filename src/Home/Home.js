import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
        
          <form>
          <form>
          <h1 class="glow"> PENGADUAN </h1>
          <p> Dibentuk untuk merealisasikan kebijakan “no wrong door policy” 
              yang menjamin hak masyarakat agar pengaduan dari manapun dan jenis apapun 
              akan disalurkan kepada penyelenggara pelayanan publik yang berwenang menanganinya. </p>
                    
          <p> bertujuan agar Penyelenggara dapat mengelola pengaduan dari masyarakat secara sederhana, cepat, tepat, tuntas, dan terkoordinasi dengan baik
              Penyelenggara memberikan akses untuk partisipasi masyarakat dalam menyampaikan pengaduan dan
              Meningkatkan kualitas pelayanan publik. </p>

            
                  
               
            </form>
            <Button variant="btn btn-success" onClick={() => history.push('/About')}>CEK PENGADUAN</Button>
          </form>
        </div>
      </div>
    );
  }
}
