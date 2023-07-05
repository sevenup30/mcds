
import './XP.css'
import { useTranslation } from '../../../provider/TranslationProvider';

const experiences = [
  {"start": new Date(2009, 9), "end" : new Date(2014,6), "classname": "lookifrance", "name": "Looki-France", "key":"looki","bulletpoints": ["Zend Framework 2","Ubuntu","Windows Server","VirtualBox"] },
  {"start": new Date(2015, 1), "end" : new Date(2017,11), "classname": "imprimerieclement", "name": "Imprimerie CLEMENT", "key":"imprimerie","bulletpoints": ["Symfony","PhP","Chili","ESX", "Jenkins", "Gitlab"] },
  {"start": new Date(2017, 11), "end" : new Date(2020,4), "classname": "laposte","name": "La Poste BSCC", "key":"lp_bscc", "bulletpoints": ["Symfony","PhP","Python","JS", "Jenkins", "Openshift", "Gitlab", "CICD"] },
  {"start": new Date(2020, 4), "end" : new Date(2023,2), "classname":"laposte","name": "La Poste CSMSI", "key":"lp_csmsi", "bulletpoints": ["Python","Django","Openshift","Ansible Tower", "Gitlab","Kafka"] },
  {"start": new Date(2023, 2), "end" : new Date(2023,6), "classname":"dropcontact", "name": "DropContact", "key":"dc", "bulletpoints": ["Python","Kube","Gitlab","Keycloak"] }
].reverse()
const XP = () => {
  const { locale, dictionary } = useTranslation();
    return (<div className="xp main-component">
        {experiences.map((xp, index) => (
          <div className="experience" key={xp.name}>
              <div className='logo_container'><div className={"logo " + xp.classname}></div><h3>{xp.name}</h3></div>
              <h2>{dictionary[xp.key+'_title']}</h2>
              
              <h4>{xp.start.getMonth()}/{xp.start.getFullYear()} - {xp.end.getMonth()}/{xp.end.getFullYear()} </h4>
              <p>{dictionary[xp.key]}</p>
              <ul>{xp.bulletpoints.map((bp,index) => {
                return (<li key={bp}>{bp}</li>)
              })}</ul>
          </div>
        ))}
    </div>);
  };
  
  export default XP;