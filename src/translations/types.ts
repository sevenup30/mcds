export interface NavTranslations {
  development: string;
  ops: string;
  infrastructure: string;
  businessIt: string;
}

export interface MainTranslations {
  title: string;
  subtitle: string;
  softwares: string;
  website: string;
  yourIdeas: string;
  yourProjects: string;
}

export interface DevelopmentTranslations {
  title: string;
  description: string;
}

export interface OpsFeatures {
  build: string;
  ci: string;
  cd: string;
  iac: string;
  containers: string;
}

export interface OpsTranslations {
  title: string;
  description: string;
  features: OpsFeatures;
  expertise: string;
}

export interface InfrastructureFeatures {
  cloud: string;
  network: string;
  server: string;
  backup: string;
  storage: string;
}

export interface InfrastructureTranslations {
  title: string;
  description: string;
  features: InfrastructureFeatures;
  expertise: string;
}

export interface BusinessITFeatures {
  workstation: string;
  server: string;
  email: string;
  backup: string;
  security: string;
  support: string;
}

export interface BusinessITTranslations {
  title: string;
  description: string;
  features: BusinessITFeatures;
  expertise: string;
}

export interface LanguageTranslations {
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