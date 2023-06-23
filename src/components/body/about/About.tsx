import './About.css';
const myAge = new Date().getFullYear() - 1991;
const About = () => {
    return <div className="about main-component">
     <div className='portrait_img'></div>  
     <div className="about_paragraph">
    <p className="section__paragraph">Bonjour, et bienvenu sur mon site. Je m&apos;appelle Martial, j&apos;ai {myAge} ans,</p>
    <p className="section__paragraph"> et je vis dans une magnifique région, Les Cévennes! </p>
    <p className="section__paragraph">Je suis passionné par les nouvelles technologies, depuis mes 2 ans où je me lever la nuit pour allumer le magnétoscope (ouch! ça nous vieillit tout ça) en passant par mes 11 ans où j&apos;ai eu mon premier ordinateur et mes 13 ans avec la découverte du site du zéro</p>
    <p className="section__paragraph">Depuis que j&apos;ai 18 ans, j&apos;accompagne les entreprises dans leurs transformations digitales. Ma curiosité et ma soif d&apos;apprendre m&apos;ont permis d&apos;évoluer à travers ce métier passionnant .</p>
    <p className="section__paragraph">J&apos;ai commencé par du réseau, de l&apos;administration système, puis du développement, backend, frontend, du DevOps et au fil de mes expériences et des rencontres me voilà aujourd&apos;hui avec une multitude de casquettes et de compétences, mais surtout une passion toujours aussi flamboyante.</p>
    <br/>
    <p className="section__paragraph">Voilà pour la partie qui vous a surement amené jusqu&apos;ici, mais au-delà de l&apos;informatique, le sport, mes 3 enfants et la musique, occupent le temps qu&apos;il me reste! </p>
    <p className="section__paragraph">Si vous souhaitez en savoir plus, je vous invite à aller sur l&apos;onglet expériences où je détaille mes différentes épopées professionnelles !</p>
    </div> 
    </div>;
  };
  
  export default About;