import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBar = (props) => {
  return (
    <>
      <nav id="theNavBar" className="navbar navbar-expand-xl navbar-light" style={{backgroundColor: 'cyan'}}>
        <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" className="navbar-toggler ms-3" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse mt-3 ms-3">
          <button id="navHome" className="navbar-brand mb-0 ms-3 h1 navs" style={{backgroundImage: 'linear-gradient(to right, cyan , dodgerblue)'}}>
            Home
          </button>
        </div>
        <div className="dropdown">
          <div className="dropdown-list">
            <button className="lists">
              Twiddler
            </button>
            <button className="lists">
              Blue Steel Brand
            </button>
            <button id="navProjects" className="navbar-brand mb-0 ms-3 h2 navs projects" style={{backgroundImage: 'linear-gradient(to right, cyan , dodgerblue)'}}>
              Projects
            </button>
          </div>
        </div>
      </nav>
    </>
  )
};

// const NavDiv = styled.nav`
//   background-image: linear-gradient(to right, deepskyblue, cyan);
//   display: grid;
// `;

// const HomeDiv = styled.div`
//   grid-column: 1;
// `;

// const BlogDiv = styled.div`
//   grid-column: 2;
// `;

// const BlogDropdown = styled.button`
//   background-image: linear-gradient(to bottom right, deepskyblue, cyan);
// `;

// const DropdownContent = styled.div`
// `;

// const ProjectsDiv = styled.div`
//   grid-column: 3;
// `;

// const YouTubeDiv = styled.div`
//   grid-column:4;
// `;

// const AchievementsDiv = styled.div`
//   grid-column: 5;
// `;

// const GoogleTranslateDiv = styled.div`
//   grid-column: 6;
// `;

// const SearchDiv = styled.div`
//   grid-column: 7;
//   display: flex;
//   justify-content: end;
// `;

// const SearchInput = styled.input`
//   grid-column: 8;
// `;

// const SearchButton = styled.button`
//   grid-column: 9;
// `;

// const NavBar = () => {
//   // flesh out js here
//   const [toggleSlider, setToggleSlider] = useState('off');
//   const [dropdown, setDropdown] = useState('none');

//   return (
//     <>
//       <NavDiv>
//         <HomeDiv>
//           Home
//         </HomeDiv>
//         <div className="dropdown" style={{display: 'grid'}} onMouseEnter={() => setDropdown('contents')} onMouseLeave={() => setDropdown('none')}>
//           <button style={{gridRow: 1}} className="dropbtn">Blog</button>
//           <div className="dropdown-content" style={{display: dropdown}}>
//             <a className="list" href="#" style={{gridRow: 2}}>Link 1</a>
//             <a className="list" href="#" style={{gridRow: 3}}>Link 2</a>
//             <a className="list" href="#" style={{gridRow: 4}}>Link 3</a>
//           </div>
//         </div>
//         <ProjectsDiv>
//           Projects
//         </ProjectsDiv>
//         <YouTubeDiv>
//           YouTube
//         </YouTubeDiv>
//         <AchievementsDiv>
//           Achievements
//         </AchievementsDiv>
//         <GoogleTranslateDiv>
//           Translate
//         </GoogleTranslateDiv>
//         <SearchDiv>
//           <SearchInput></SearchInput>
//           <SearchButton>Search</SearchButton>
//         </SearchDiv>
//       </NavDiv>
//     </>
//   )
// }

export default NavBar;