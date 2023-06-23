
import './XP.css'
const experiences = [
  {"start": new Date(2009, 9), "end" : new Date(2014,6), "classname": "lookifrance", "name": "Looki-France", "job": "Apprenti Admin système & réseau / Dev backend", "summary": "Apprenti dans cette nouvelle start-up spécialisée dans les jeux vidéo sur navigateur (Desert opération, Empire Universe...). J'ai été en charge de créer leur réseau interne, les serveurs de développements ainsi que les domaines active directory. J'ai aussi appris le développement en travaillant sur le backend d'un nouveau jeux.", "bulletpoints": ["Zend Framework 2","Ubuntu","Windows Server","VirtualBox"] },
  {"start": new Date(2015, 1), "end" : new Date(2017,11), "classname": "imprimerieclement", "name": "Imprimerie CLEMENT", "job": "Lead Dev - DevOps", "summary": "Dans une imprimerie de labeur, j'ai d'abord été en charge de moderniser leur infrastructure informatique. Passage des postes locaux sur un ESX, serveur de développement, sauvegarde etc... J'ai ensuite du développer leur nouvelle boutique B2B pour les clients privilégié (Suez, Renault, Roady, Initial...) Ce générateur d'e-boutique était entièrement personnalisable à l'image du client, il y contient tous les produits favoris, les utilisateurs les personnalisent en ligne, et ils sont automatiquement intégrés dans notre flux de production et livré dans les meilleurs délais.", "bulletpoints": ["Symfony","PhP","Chili","ESX", "Jenkins", "Gitlab"] },
  {"start": new Date(2017, 11), "end" : new Date(2020,4), "classname": "laposte","name": "La Poste BSCC", "job": "Lead Dev - DevOps", "summary": "Dans le socle \"Portails Client\" j'ai d'abord rejoint l'équipe MCO, nous devions assurer le bon fonctionnement et l'évolution d'une dizaine d'applications, en parallèle j'ai dockerisé tous les projets du socle afin de faire évoluer le cadre de développement. Par la suite j'ai travaillé sur la refonte du référentiel de données de tout le socle (une 20aine d'applications) ce référentiel de donnée est fait en php avec Symfony et chaque nuit, il récupère des millions de données qu'il stocke dans une base oracle et les restitue via API REST avec graphQL. j'ai aussi travaillé sur différents nouveaux projets, et sur un projet de RPA en python", "bulletpoints": ["Symfony","PhP","Python","JS", "Jenkins", "Gitlab", "Openshift", "Gitlab", "CICD"] },
  {"start": new Date(2020, 4), "end" : new Date(2023,2), "classname":"laposte","name": "La Poste CSMSI", "job": "Developpeur Python - DevOps", "summary": "Dans l'équipe automatisation, j'ai participé au développement d'une application de cloud provider en python Django, qui permet aux métiers de La poste de déployer entre autres des VM, des BDD, des VIP etc sur les 2 datacenters privé de La poste. J'ai développé un moteur de workflow en python couplé à Ansible Tower, fait la migration de l'application du IaaS vers le PaaS, les pipelines CI/CD sur gitlab, un cluster PSQL geo-répliqué, et beaucoup d'autres tâches. ", "bulletpoints": ["Python","Django","Openshift","Ansible Tower", "Gitlab","Kafka"] },
  {"start": new Date(2023, 2), "end" : new Date(2023,6), "classname":"dropcontact", "name": "DropContact", "job": "Developpeur python", "summary": "Dans une scale-ups parisienne, j'ai rejoint une équipe pour travailler sur la refonte de leurs application, vers une nouvelle architecture. J'ai participé au développement d'un module IAM avec keycloak, d'un datalake et au développement de librairie python interne.", "bulletpoints": ["Python","Kube","Gitlab","Keycloak"] }
]
const XP = () => {
    return (<div className="xp main-component">
        {experiences.reverse().map((xp, index) => (
          <div className="experience" key={xp.name}>
              <div className='logo_container'><div className={"logo " + xp.classname}></div><h3>{xp.name}</h3></div>
              <h2>{xp.job}</h2>
              
              <h4>{xp.start.getMonth()}/{xp.start.getFullYear()} - {xp.end.getMonth()}/{xp.end.getFullYear()} </h4>
              <p>{xp.summary}</p>
              <ul>{xp.bulletpoints.map((bp,index) => {
                return (<li key={bp}>{bp}</li>)
              })}</ul>
          </div>
        ))}
    </div>);
  };
  
  export default XP;