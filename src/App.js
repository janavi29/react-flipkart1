import React from 'react';
import './style.css';

function App() {
  return (
    <div>
      <nav class="navbar background">
        <ul class="nav-list">
          <div class="logo">
            <img src="https://o.remove.bg/downloads/cfc822d4-ef78-4496-a432-04ae28322dd2/flipkart-logo-transparent-vector-3-removebg-preview.png" />
          </div>
        </ul>

        <div class="rightNav">
          <input type="text" name="search" id="search" />
          <button class="btn btn-sm">Search</button>
          <button class="btn btn-outline-secondary btn-lg">Login</button>
          <button class="btn btn-sm">become seller</button>
        </div>
      </nav>

      <footer className="footer">
        <p className="text-footer">Copyright ©-All rights are reserved</p>
      </footer>
    </div>
  );
}

export default App;
