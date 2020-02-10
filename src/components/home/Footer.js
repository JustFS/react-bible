import React from 'react';
import logo from '../../pages/home/logo.svg'


const Footer = () => {
  return (
    <div className="footer">
      <h2>sources</h2>
      <div className="youtuber-container">
        <div className="line">
          <a href="https://www.youtube.com/watch?v=IxuqmfO6p28" target="_blank" rel="noopener noreferrer"><p><span><i className="fa fa-youtube-play"></i></span> Weather app <span style={{color: '#FFC83D'}}>by</span> Daily Tuition</p></a>
          <a href="https://www.youtube.com/watch?v=3qk6yQWKVoQ" target="_blank" rel="noopener noreferrer"><p><span><i className="fa fa-youtube-play"></i></span> Todo List <span style={{color: '#FFC83D'}}>by</span> The Net Ninja</p></a>
          <a href="https://www.youtube.com/watch?v=U9T6YkEDkMo" target="_blank" rel="noopener noreferrer"><p><span><i className="fa fa-youtube-play"></i></span> Recipe App <span style={{color: '#FFC83D'}}> by</span> Dev Ed</p></a>
        </div>
        <div className="line">
        <a href="https://www.youtube.com/watch?v=HfJjzmSaLuQ" target="_blank" rel="noopener noreferrer"><p><span><i className="fa fa-youtube-play"></i></span> Travel Tour App<span style={{color: '#FFC83D'}}> by</span> Coding Addict</p></a>
          <a href="https://www.youtube.com/watch?v=Ke90Tje7VS0" target="_blank" rel="noopener noreferrer"><p><span><i className="fa fa-youtube-play"></i></span> Subscribe form <span style={{color: '#FFC83D'}}> by</span> Programming with Mosh</p></a>
          <a href="https://www.youtube.com/watch?v=f6HYLHrYpGs&t=1324s" target="_blank" rel="noopener noreferrer"><p><span><i className="fa fa-youtube-play"></i></span> Budget Calculator<span style={{color: '#FFC83D'}}> by</span> Coding Addict</p></a>
        </div>
        <div className="line">
        <a href="https://www.youtube.com/watch?v=VPVzx1ZOVuw&t=791s" target="_blank" rel="noopener noreferrer"><p><span><i className="fa fa-youtube-play"></i></span> Youtube clone<span style={{color: '#FFC83D'}}> by</span> JavaScript Mastery</p></a>
          <a href="https://www.youtube.com/watch?v=dzOrUmK4Qyw" target="_blank" rel="noopener noreferrer"><p><span><i className="fa fa-youtube-play"></i></span> Pixabay API<span style={{color: '#FFC83D'}}> by</span> Traversy Media</p></a>
          <a href="https://www.youtube.com/user/ucisko" target="_blank" rel="noopener noreferrer"><p><span><i className="fa fa-youtube-play"></i></span> Markdown<span style={{color: '#FFC83D'}}> by</span> Antho Welc</p></a>
        </div>
      </div>
      <div className="source">
        <p>Made with <span role="img" aria-label="pizza"> 🍕 </span> by J. Az</p>
      </div>

      <div className="footer-logo-1">
        <img src={logo} alt="" />
      </div>
      <div className="footer-logo-2">
        <img src={logo} alt="" />
      </div>
      <div className="footer-logo-3">
        <img src={logo} alt="" />
      </div>
    </div>
      
  );
};

export default Footer;