import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2024 by CCL.Codeur | All Rights Reserved.</p>
            {/* <span class="animate" style="--i:1;"></span> */}
        </div>
        <div class="footer-iconTop">
            <a href="#"><i class="fas fa-up-long"></i></a>
            {/* <span class="animate" style="--i:3;"></span> */}
        </div>
    </footer>
  )
}

export default Footer