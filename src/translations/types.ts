interface NavTranslations {
  development: string;
  ops: string;
  infrastructure: string;
  businessIt: string;
}

interface MainTranslations {
  title: string;
  subtitle: string;
  softwares: string;
  website: string;
  yourIdeas: string;
  yourProjects: string;
}

interface DevelopmentTranslations {
  title: string;
  description: string;
}

interface OpsFeatures {
  build: string;
  ci: string;
  cd: string;
  iac: string;
  containers: string;
}

interface OpsTranslations {
  title: string;
  description: string;
  features: OpsFeatures;
  expertise: string;
}

interface InfrastructureFeatures {
  cloud: string;
  network: string;
  server: string;
  backup: string;
  storage: string;
}

interface InfrastructureTranslations {
  title: string;
  description: string;
  features: InfrastructureFeatures;
  expertise: string;
}

interface BusinessITFeatures {
  workstation: string;
  server: string;
  email: string;
  backup: string;
  security: string;
  support: string;
}

interface BusinessITTranslations {
  title: string;
  description: string;
  features: BusinessITFeatures;
  expertise: string;
}

interface LanguageTranslations {
  nav: NavTranslations;
  main: MainTranslations;
  development: DevelopmentTranslations;
  ops: OpsTranslations;
  infrastructure: InfrastructureTranslations;
  businessIT: BusinessITTranslations;
}

export interface Translations {
  fr: LanguageTranslations;
  en: LanguageTranslations;
}