import './About.css';
import { useTranslation } from '../../../provider/TranslationProvider';

const myAge = new Date().getFullYear() - 1991;

const About = () => {
  const { locale, dictionary } = useTranslation();
return <div className="about main-component">
     <div className='portrait_img'></div>  
     <div className="about_paragraph">
    <p className="section__paragraph">{dictionary["about1"]}</p>
    <p className="section__paragraph">{dictionary["about2"]}</p>
    <p className="section__paragraph">{dictionary["about3"]}</p>
    <p className="section__paragraph">{dictionary["about4"]}</p>
    <p className="section__paragraph">{dictionary["about5"]}</p>
    <br/>
    <p className="section__paragraph">{dictionary["about6"]}</p>
    <p className="section__paragraph">{dictionary["about7"]}</p>
    </div> 
    </div>;
  };
  
  export default About;