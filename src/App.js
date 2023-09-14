import 'bulma/css/bulma.css';
import './App.css';
import Course from './Course';
import Dotnet from './images/dotnet.png';
import DotnetCore from './images/dotnetcore.png';
import Php from './images/php.png';
import Python from './images/python.png';

import MySQL from './images/mysql.png';
import MSSQL from './images/mssql.png';
import React from './images/react.png';
import CSharp from './images/csharp.png';

function App() {
  return (
    <div className="App">
<section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Yeteneklerim
    </p>

  </div>
</section>

    <div className='container'>
      <section className="section">
      <div className='columns'>

<div className="column">
<Course image={Dotnet} title="Asp.NET" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda omnis doloribus quisquam sunt sed! Aliquid maxime repellendus voluptatum illum velit deserunt? Ipsam soluta, expedita odio numquam suscipit dolore et."/>
</div>
<div className="column">
<Course image={DotnetCore} title="Core" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda omnis doloribus quisquam sunt sed! Aliquid maxime repellendus voluptatum illum velit deserunt? Ipsam soluta, expedita odio numquam suscipit dolore et."/>
</div>
<div className="column">
<Course image={Php} title="PHP" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda omnis doloribus quisquam sunt sed! Aliquid maxime repellendus voluptatum illum velit deserunt? Ipsam soluta, expedita odio numquam suscipit dolore et."/>
</div>
<div className="column">
<Course image={Python} title="PYTHON" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda omnis doloribus quisquam sunt sed! Aliquid maxime repellendus voluptatum illum velit deserunt? Ipsam soluta, expedita odio numquam suscipit dolore et."/>
</div>

</div>


<div className='columns'>

<div className="column">
<Course image={MySQL} title="MySQL" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda omnis doloribus quisquam sunt sed! Aliquid maxime repellendus voluptatum illum velit deserunt? Ipsam soluta, expedita odio numquam suscipit dolore et."/>
</div>
<div className="column">
<Course image={MSSQL} title="MSSQL" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda omnis doloribus quisquam sunt sed! Aliquid maxime repellendus voluptatum illum velit deserunt? Ipsam soluta, expedita odio numquam suscipit dolore et."/>
</div>
<div className="column">
<Course image={CSharp} title="C#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda omnis doloribus quisquam sunt sed! Aliquid maxime repellendus voluptatum illum velit deserunt? Ipsam soluta, expedita odio numquam suscipit dolore et."/>
</div>
<div className="column">
<Course image={React} title="ReactJS" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda omnis doloribus quisquam sunt sed! Aliquid maxime repellendus voluptatum illum velit deserunt? Ipsam soluta, expedita odio numquam suscipit dolore et."/>
</div>

</div>

      </section>
    </div>


      

    <footer className="footer">
  <div className="content has-text-centered">
    <p>
      
    <font size="5" color="white"><strong>Oğuzhan Sarıoğlugil</strong> React JS Çalışmaları</font>
    </p>
  </div>
</footer>

      

     

    </div>
  );
}

export default App;
