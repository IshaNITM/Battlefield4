import React from 'react';
import './App.css';



function App() {
  return (
    <div className="app">
   
    
      <header className="app-header">
        <div className="app-header-left">
          <h1>BATTLEFIELD 4</h1>
          <h2>MAIN MENU UI</h2>
        </div>
        <div className="app-header-right">
          <ul>
            <li>HOME</li>
            <li>MULTIPLAYER</li>
            <li>CAMPAIGN</li>
            <li>SOLDIER</li>
            <li>STORE</li>
            <li>MORE</li>
          </ul>
        </div>
      </header>
      <main className="app-main">
      
      
        <p className="para">Good afternoon cookie.
        

       
        
        </p>
        
        <div className="app-main-content">
          <div className="app-main-content-item">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/20727a30-8f96-41dd-8048-bfa5b2c3adaf/d6a0a8l-21327d60-119a-4a31-a171-51ae7667e961.png/v1/fill/w_1192,h_670,q_70,strp/battlefield_4_wallpaper_psd_by_aspera_destroyer_by_virtualcinematics_d6a0a8l-pre.jpg/300x200" alt="Trending" />
            <div className="app-main-content-item-text">
              <h3>DEFUSE</h3>
              <p>ALL MAPS</p>
              <p>3 RESULTS</p>
            </div>
          </div>
          <div className="app-main-content-item">
            <img src="https://cdnb.artstation.com/p/assets/images/images/004/727/439/large/mahesh-campbell-ac3-bf4.jpg?1485826931/1150x950" alt="Conquest Large" />
            <div className="app-main-content-item-text">
              <h3>CONQUEST LARGE</h3>
              <p>OPERATION WHITEOUT, HAM</p>
              <p>22 RESULTS</p>
            </div>
          </div>
          <div className="app-main-content-item">
            <img src="https://i.ytimg.com/vi/EgXYKGsMK6w/maxresdefault.jpg" alt="Learn Battlefield 4 Basics with OSH" />
            <div className="app-main-content-item-text">
              <h3>Learn</h3>
              <p>Battlefield 4 Basics with OSH</p>
            </div>
          </div>
        </div>
        <div className="app-main-shortcuts">
          <ul>
            <li>
              <button className="app-main-shortcuts-button">
                <span className="app-main-shortcuts-button-icon">
                  <i className="fas fa-list-ul"></i>
                </span>
              </button>
            </li>
            <li>
              <button className="app-main-shortcuts-button">
                <span className="app-main-shortcuts-button-icon">
                  <i className="fas fa-star"></i>
                </span>
              </button>
            </li>
            <li>
              <button className="app-main-shortcuts-button">
                <span className="app-main-shortcuts-button-icon">
                  <i className="fas fa-play-circle"></i>
                </span>
              </button>
            </li>
            <li>
              <button className="app-main-shortcuts-button">
                <span className="app-main-shortcuts-button-icon">
                  <i className="fas fa-clipboard-list"></i>
                </span>
              </button>
            </li>
            <li>
              <button className="app-main-shortcuts-button">
                <span className="app-main-shortcuts-button-icon">
                  <i className="fas fa-cog"></i>
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="app-main-recently-played">
          <p>RECENTLY PLAYED</p>
          <div className="app-main-recently-played-content">
            <div className="app-main-recently-played-content-item">
              <img src="https://th.bing.com/th/id/OIP.o2wtZ5S6EOk33J7uUu8EAgHaEN?rs=1&pid=ImgDetMain" alt="Gunmaster" />
              <div className="app-main-recently-played-content-item-text">
                <p>RECENT SERVER</p>
                <h3>GUNMASTER - VOTE GUN MASTER</h3>
                <p>Dawnbreaker</p>
              </div>
            </div>
            <div className="app-main-recently-played-content-item">
              <img src="https://images4.alphacoders.com/698/thumb-1920-698715.jpg" alt="24/7 DLC Conquest" />
              <div className="app-main-recently-played-content-item-text">
                <p>RECENT SERVER</p>
                <h3>24/7 | DLC CONQUEST CONQUEST LARGE</h3>
                <p>Propaganda</p>
              </div>
            </div>
            <div className="app-main-recently-played-content-item">
              <img src="https://i.ytimg.com/vi/0chudbi13bk/maxresdefault.jpg" alt="SUPER S6 RU RUSH" />
              <div className="app-main-recently-played-content-item-text">
                <p>RECENT SERVER</p>
                <h3>SUPER® [SIC] S6 RU! RUSH</h3>
                <p>Operation Locker</p>
              </div>
            </div>
            <div className="app-main-recently-played-content-item">
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6fa858ef-4818-4e4c-a968-329c5f36715e/d7y4ej1-cc4c331c-c1bf-44ec-9c7c-37d68465d234.jpg/v1/fill/w_900,h_506,q_75,strp/battlefield4_by_nuc00ne2ee10_d7y4ej1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmYTg1OGVmLTQ4MTgtNGU0Yy1hOTY4LTMyOWM1ZjM2NzE1ZVwvZDd5NGVqMS1jYzRjMzMxYy1jMWJmLTQ0ZWMtOWM3Yy0zN2Q2ODQ2NWQyMzQuanBnIiwiaGVpZ2h0IjoiPD01MDYiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzZmYTg1OGVmLTQ4MTgtNGU0Yy1hOTY4LTMyOWM1ZjM2NzE1ZVwvbnVjMDBuZTJlZTEwLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.S3L1pZy-R2nEooqtmX-Yg7-W-7FMzRfpnA086XGkJjc" alt="#3 E4GL 60 HZ AL RUSH" />
              <div className="app-main-recently-played-content-item-text">
                <p>RECENT SERVER</p>
                <h3>#3 [E4GL] 60 HZ AL RUSH</h3>
                <p>Lancang Dam</p>
              </div>
            </div>
            <div className="app-main-recently-played-content-item">
              <img src="https://th.bing.com/th/id/R.b7a7dc247f782a8956daccf9ac353528?rik=lZA1xImbXwMGNQ&riu=http%3a%2f%2fsfx.thelazy.net%2fmedia%2fpresetscreenshots%2fb1_goMIa6e.png&ehk=ziSJD%2fpaqU%2fmvRy8TmtiieqDE8H5mu27KEIsxDydCVM%3d&risl=1&pid=ImgRaw&r=0" alt="#1 BRAZIL CONQUEST" />
              <div className="app-main-recently-played-content-item-text">
                <p>RECENT SERVER</p>
                <h3>#1 [BRAZIL] CONQUEST</h3>
                <p>Siege Of Shanghai</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>




  );
}



export default App;


