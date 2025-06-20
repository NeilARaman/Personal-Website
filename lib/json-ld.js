export const getPersonJsonLd = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    "url": "https://neilraman.com/",
    "affiliation": [
      {
        "@type": "Organization",
        "url": "https://scottylabs.org/",
        "name": "ScottyLabs"
      },
      {
        "@type": "Organization",
        "url": "https://goahead.vc/",
        "name": "GoAhead Ventures"
      },
      {
        "@type": "Organization",
        "url": "https://lucenthealth.com/",
        "name": "Lucent Health"
      }
    ],
    "description": "Neil Raman is a sophomore at Carnegie Mellon University studying Information Systems and Economics. He has interests in computational biology/chemistry, applied AI/ML in healthcare, and likes to research foundational models in robotics, driverless cars, and space exploration. He is currently building the best entrepreneurship environment at CMU through Foundry and scouting for impactful startups via GoAhead Ventures.",
    "image": "https://neilraman.com/static/images/Water-Profile-Photo.jpg",
    "name": "Neil Raman",
    "givenName": "Neil",
    "familyName": "Raman",
    "gender": "Male",
    "jobTitle": "Director of Foundry",
    "sameAs": [
      "https://www.linkedin.com/in/neil-raman21",
      "https://twitter.com/neilraman21",
      "https://www.instagram.com/noodleeman",
      "https://github.com/NeilARaman"
    ],
    "knowsAbout": [
      {
        "@type": "Thing",
        "name": "Information Systems"
      },
      {
        "@type": "Thing",
        "name": "Economics"
      },
      {
        "@type": "Thing",
        "name": "Computational Biology"
      },
      {
        "@type": "Thing",
        "name": "Artificial Intelligence"
      },
      {
        "@type": "Thing",
        "name": "Machine Learning"
      },
      {
        "@type": "Thing",
        "name": "Healthcare Technology"
      },
      {
        "@type": "Thing",
        "name": "Robotics"
      },
      {
        "@type": "Thing",
        "name": "Entrepreneurship"
      }
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "@id": "https://www.wikidata.org/wiki/Q1860",
        "name": "English"
      }
    ],
    "nationality": [
      {
        "@type": "Country",
        "@id": "https://www.wikidata.org/wiki/Q30",
        "name": "United States of America"
      }
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Carnegie Mellon University",
        "url": "https://www.cmu.edu/",
        "startDate": "2024",
        "major": [
          {
            "@type": "DefinedTerm",
            "name": "Information Systems"
          },
          {
            "@type": "DefinedTerm",
            "name": "Economics"
          }
        ]
      }
    ]
  }
}