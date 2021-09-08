/*
 * Define lforms constants here and use this a dependency in the angular application
 */
angular.module('lformsApp')
    .constant('fhirServerConfig', {
      listFhirServers: [
        // Only open servers are supported. It should have one of the'url' and 'smartServiceUrl', or both.
        // configuration format:
        // { name: '',     // name for the FHIR server. optional
        //   url: '',  // base URL of the FHIR server (non-SMART), must be https, because the public server is https.
        //                 // optional.
        //   smartServiceUrl: '', // service URL of a SMART endpoint, if featured questionnaires are known available
        //                   // at this SMART endpoint. optional.
        //   featuredQuestionnaires: [ // available questionnaires at the FHIR server, to be shown
        //                             // in "Featured Questionnaires" section
        //      { name: '', // name of the featured questionnaire to be displayed.
        //        id: '',   // id of the featured questionnaire resource
        //        code: ''} // code of the featured questionnaire to be displayed with the name, if it is LOINC code.
        //   ],
        //
        // }
        // { url: 'https://launch.smarthealthit.org/v/r3/fhir'},
        // { url: 'https://lforms-fhir.nlm.nih.gov/baseDstu3'},
        { url: 'https://api.logicahealth.org/SDCTest/open',
          smartServiceUrl: 'https://api.logicahealth.org/SDCTest/open',
                    featuredQuestionnaires: [
            { name: 'Functional assessment standardized items (FASI) - version 1.0',
                id: '94848-9',
                code: '94848-9'}
          ]
        },
        { url: 'https://api.logicahealth.org/loinc2hpo/open'},
          { url: 'https://api.logicahealth.org/GravitySandboxNew/open',
          smartServiceUrl: 'https://api.logicahealth.org/GravitySandboxNew/data',
          featuredQuestionnaires: [
          ]}
      ]
    });
