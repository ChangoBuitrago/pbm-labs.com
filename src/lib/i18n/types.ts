export type Dictionary = {
  meta: {
    siteDescription: string;
  };
  nav: {
    about: string;
    services: string;
    work: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  footer: {
    tagline: string;
    navigate: string;
    legal: string;
    terms: string;
    privacy: string;
    cookies: string;
    cookiePreferences: string;
    rights: string;
  };
  common: {
    contactUs: string;
    getInTouch: string;
    viewAll: string;
    allServices: string;
    lastUpdated: string;
    legal: string;
  };
  home: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    viewServices: string;
    workEyebrow: string;
    workTitle: string;
    workDescription: string;
    servicesEyebrow: string;
    servicesTitle: string;
    customDevTitle: string;
    customDevDescription: string;
    securityTitle: string;
    securityDescription: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  company: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    expertiseEyebrow: string;
    expertiseTitle: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    customTitle: string;
    customDescription: string;
    customItems: [string, string, string];
    securityTitle: string;
    securityDescription: string;
    securityItems: [string, string, string];
    cloudTitle: string;
    cloudDescription: string;
    cloudItems: [string, string, string];
    ctaTitle: string;
    ctaDescription: string;
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    headquarters: string;
    email: string;
    firstName: string;
    lastName: string;
    corporateEmail: string;
    inquiryType: string;
    message: string;
    inquiryConsulting: string;
    inquiryDevelopment: string;
    inquiryOther: string;
    sendMessage: string;
    sending: string;
    messageSent: string;
    messageSentDescription: string;
    sendAnother: string;
    placeholderFirstName: string;
    placeholderLastName: string;
    placeholderEmail: string;
    placeholderMessage: string;
  };
  terms: {
    title: string;
    sections: {
      acceptance: { title: string; body: string };
      b2b: { title: string; body: string };
      financial: { title: string; body: string };
      information: { title: string; body: string };
      use: { title: string; body: string };
      ip: { title: string; body: string };
      thirdParty: { title: string; body: string };
      disclaimer: { title: string; body: string };
      liability: { title: string; body: string };
      changes: { title: string; body: string };
      law: { title: string; body: string };
      contact: { title: string; body: string };
    };
  };
  privacy: {
    title: string;
    sections: {
      collect: { title: string; body: string };
      purposes: { title: string; body: string };
      website: { title: string; body: string };
      contact: { title: string; body: string };
      processors: { title: string; body: string };
      retention: { title: string; body: string };
      security: { title: string; body: string };
      rights: { title: string; body: string };
      questions: { title: string; body: string };
    };
  };
  cookies: {
    title: string;
    sections: {
      overview: { title: string; body: string };
      essential: { title: string; body: string };
      optional: { title: string; body: string };
      manage: { title: string; body: string };
    };
  };
  cookieBanner: {
    message: string;
    accept: string;
    reject: string;
    close: string;
    learnMore: string;
  };
  expertise: {
    identity: { title: string; description: string };
    iot: { title: string; description: string };
    fullstack: { title: string; description: string };
    security: { title: string; description: string };
  };
  engagements: {
    grid: {
      project: string;
      industry: string;
      summary: string;
      services: [string, string, string];
    };
    identity: {
      project: string;
      industry: string;
      summary: string;
      services: [string, string, string];
    };
    credential: {
      project: string;
      industry: string;
      summary: string;
      services: [string, string, string];
    };
    energy: {
      project: string;
      industry: string;
      summary: string;
      services: [string, string, string];
    };
  };
  notFound: {
    eyebrow: string;
    title: string;
    description: string;
    backHome: string;
  };
  error: {
    eyebrow: string;
    title: string;
    description: string;
    tryAgain: string;
    backHome: string;
    needHelp: string;
    contactSupport: string;
  };
};
