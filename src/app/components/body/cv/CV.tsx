import { useTranslation } from '../../../provider/TranslationProvider';

const CV = () => {
    const { locale, dictionary } = useTranslation();
    const cv = (locale == "fr") ? '/cv_fr.pdf' : '/cv_en.pdf'
    return (
      <object data={cv} type="application/pdf" width="100%" height="1100px"></object>
    );
  };
  
  export default CV;