/**
 * JSON-LD structured data, one entry per route.
 *
 * Kept out of seo.ts because these blocks are long and are data rather than
 * logic. Each route repeats the Organization node by design: search engines
 * read pages independently, and the shared @id lets them reconcile the graph.
 */

export const ROUTE_JSON_LD: Record<string, Record<string, unknown>[]> = {
  "home": [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": [
            "Organization",
            "ProfessionalService"
          ],
          "@id": "https://autoneural.in/#organization",
          "name": "Autoneural",
          "alternateName": "Autoneural AI Systems",
          "url": "https://autoneural.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://autoneural.in/icon-512.png",
            "width": 512,
            "height": 512
          },
          "image": "https://autoneural.in/og-image.png",
          "description": "Autoneural builds custom AI agents, chatbots, workflow automation, dashboards, websites and custom software for growing businesses.",
          "email": "official@autoneural.in",
          "telephone": "+91-62979-27642",
          "foundingDate": "2024",
          "founder": [
            {
              "@type": "Person",
              "name": "Palash Lochan Mahana",
              "jobTitle": "Founder & Chief Marketing Officer",
              "sameAs": [
                "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/"
              ]
            },
            {
              "@type": "Person",
              "name": "Priyanshu Maity",
              "jobTitle": "Chief Technology Officer",
              "sameAs": [
                "https://www.linkedin.com/in/priyanshumaity/"
              ]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/autoneural",
            "https://twitter.com/autoneural",
            "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/",
            "https://www.linkedin.com/in/priyanshumaity/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "official@autoneural.in",
            "telephone": "+91-62979-27642",
            "availableLanguage": [
              "English",
              "Hindi",
              "Bengali"
            ]
          },
          "knowsAbout": [
            "Artificial intelligence",
            "AI agents",
            "AI calling agents",
            "Voice AI",
            "Chatbot development",
            "WhatsApp Business API",
            "Workflow automation",
            "Large language models",
            "Web development",
            "Business intelligence dashboards"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://autoneural.in/#website",
          "url": "https://autoneural.in",
          "name": "Autoneural",
          "publisher": {
            "@id": "https://autoneural.in/#organization"
          },
          "inLanguage": "en-IN"
        }
      ]
    }
  ],
  "services": [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": [
            "Organization",
            "ProfessionalService"
          ],
          "@id": "https://autoneural.in/#organization",
          "name": "Autoneural",
          "alternateName": "Autoneural AI Systems",
          "url": "https://autoneural.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://autoneural.in/icon-512.png",
            "width": 512,
            "height": 512
          },
          "image": "https://autoneural.in/og-image.png",
          "description": "Autoneural builds custom AI agents, chatbots, workflow automation, dashboards, websites and custom software for growing businesses.",
          "email": "official@autoneural.in",
          "telephone": "+91-62979-27642",
          "foundingDate": "2024",
          "founder": [
            {
              "@type": "Person",
              "name": "Palash Lochan Mahana",
              "jobTitle": "Founder & Chief Marketing Officer",
              "sameAs": [
                "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/"
              ]
            },
            {
              "@type": "Person",
              "name": "Priyanshu Maity",
              "jobTitle": "Chief Technology Officer",
              "sameAs": [
                "https://www.linkedin.com/in/priyanshumaity/"
              ]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/autoneural",
            "https://twitter.com/autoneural",
            "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/",
            "https://www.linkedin.com/in/priyanshumaity/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "official@autoneural.in",
            "telephone": "+91-62979-27642",
            "availableLanguage": [
              "English",
              "Hindi",
              "Bengali"
            ]
          },
          "knowsAbout": [
            "Artificial intelligence",
            "AI agents",
            "AI calling agents",
            "Voice AI",
            "Chatbot development",
            "WhatsApp Business API",
            "Workflow automation",
            "Large language models",
            "Web development",
            "Business intelligence dashboards"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://autoneural.in/#website",
          "url": "https://autoneural.in",
          "name": "Autoneural",
          "publisher": {
            "@id": "https://autoneural.in/#organization"
          },
          "inLanguage": "en-IN"
        },
        {
          "@type": "ItemList",
          "name": "Autoneural services",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Service",
                "name": "Custom AI Agents",
                "provider": {
                  "@id": "https://autoneural.in/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Service",
                "name": "AI Chatbots",
                "provider": {
                  "@id": "https://autoneural.in/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Service",
                "name": "Website Development",
                "provider": {
                  "@id": "https://autoneural.in/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "Service",
                "name": "Task Automation",
                "provider": {
                  "@id": "https://autoneural.in/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "Service",
                "name": "Custom Software",
                "provider": {
                  "@id": "https://autoneural.in/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "Service",
                "name": "CRM & ERP Automation",
                "provider": {
                  "@id": "https://autoneural.in/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 7,
              "item": {
                "@type": "Service",
                "name": "Intelligent Document Processing",
                "provider": {
                  "@id": "https://autoneural.in/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 8,
              "item": {
                "@type": "Service",
                "name": "Dashboards & Reporting",
                "provider": {
                  "@id": "https://autoneural.in/#organization"
                }
              }
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long does a typical AI or automation project take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most chatbots and automations go live in two to four weeks. Custom software and larger platforms usually run six to twelve weeks, delivered in stages so you see working software early."
              }
            },
            {
              "@type": "Question",
              "name": "Do we own the code and the data?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. You own the source code, the accounts, and the data. We hand over the repository, the infrastructure, and the documentation at the end of every project."
              }
            },
            {
              "@type": "Question",
              "name": "What does an AI agent or automation project cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We quote a fixed price per phase after a short discovery call, so there are no open-ended hourly bills. Small automations typically start in the low five figures (INR), and we tell you honestly when something is not worth building."
              }
            },
            {
              "@type": "Question",
              "name": "What happens after launch?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every project includes a support window. After that you can stay on a monthly support plan for monitoring, improvements, and new features, or take it fully in-house — your choice."
              }
            },
            {
              "@type": "Question",
              "name": "Will you sign an NDA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, before we see anything sensitive. We also work with least-privilege access, keep credentials in a managed secret store, and can deploy inside your own cloud account if you prefer."
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://autoneural.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://autoneural.in/services"
            }
          ]
        }
      ]
    }
  ],
  "industries": [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": [
            "Organization",
            "ProfessionalService"
          ],
          "@id": "https://autoneural.in/#organization",
          "name": "Autoneural",
          "alternateName": "Autoneural AI Systems",
          "url": "https://autoneural.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://autoneural.in/icon-512.png",
            "width": 512,
            "height": 512
          },
          "image": "https://autoneural.in/og-image.png",
          "description": "Autoneural builds custom AI agents, chatbots, workflow automation, dashboards, websites and custom software for growing businesses.",
          "email": "official@autoneural.in",
          "telephone": "+91-62979-27642",
          "foundingDate": "2024",
          "founder": [
            {
              "@type": "Person",
              "name": "Palash Lochan Mahana",
              "jobTitle": "Founder & Chief Marketing Officer",
              "sameAs": [
                "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/"
              ]
            },
            {
              "@type": "Person",
              "name": "Priyanshu Maity",
              "jobTitle": "Chief Technology Officer",
              "sameAs": [
                "https://www.linkedin.com/in/priyanshumaity/"
              ]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/autoneural",
            "https://twitter.com/autoneural",
            "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/",
            "https://www.linkedin.com/in/priyanshumaity/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "official@autoneural.in",
            "telephone": "+91-62979-27642",
            "availableLanguage": [
              "English",
              "Hindi",
              "Bengali"
            ]
          },
          "knowsAbout": [
            "Artificial intelligence",
            "AI agents",
            "AI calling agents",
            "Voice AI",
            "Chatbot development",
            "WhatsApp Business API",
            "Workflow automation",
            "Large language models",
            "Web development",
            "Business intelligence dashboards"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://autoneural.in/#website",
          "url": "https://autoneural.in",
          "name": "Autoneural",
          "publisher": {
            "@id": "https://autoneural.in/#organization"
          },
          "inLanguage": "en-IN"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://autoneural.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Industries",
              "item": "https://autoneural.in/industries"
            }
          ]
        }
      ]
    }
  ],
  "about": [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": [
            "Organization",
            "ProfessionalService"
          ],
          "@id": "https://autoneural.in/#organization",
          "name": "Autoneural",
          "alternateName": "Autoneural AI Systems",
          "url": "https://autoneural.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://autoneural.in/icon-512.png",
            "width": 512,
            "height": 512
          },
          "image": "https://autoneural.in/og-image.png",
          "description": "Autoneural builds custom AI agents, chatbots, workflow automation, dashboards, websites and custom software for growing businesses.",
          "email": "official@autoneural.in",
          "telephone": "+91-62979-27642",
          "foundingDate": "2024",
          "founder": [
            {
              "@type": "Person",
              "name": "Palash Lochan Mahana",
              "jobTitle": "Founder & Chief Marketing Officer",
              "sameAs": [
                "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/"
              ]
            },
            {
              "@type": "Person",
              "name": "Priyanshu Maity",
              "jobTitle": "Chief Technology Officer",
              "sameAs": [
                "https://www.linkedin.com/in/priyanshumaity/"
              ]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/autoneural",
            "https://twitter.com/autoneural",
            "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/",
            "https://www.linkedin.com/in/priyanshumaity/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "official@autoneural.in",
            "telephone": "+91-62979-27642",
            "availableLanguage": [
              "English",
              "Hindi",
              "Bengali"
            ]
          },
          "knowsAbout": [
            "Artificial intelligence",
            "AI agents",
            "AI calling agents",
            "Voice AI",
            "Chatbot development",
            "WhatsApp Business API",
            "Workflow automation",
            "Large language models",
            "Web development",
            "Business intelligence dashboards"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://autoneural.in/#website",
          "url": "https://autoneural.in",
          "name": "Autoneural",
          "publisher": {
            "@id": "https://autoneural.in/#organization"
          },
          "inLanguage": "en-IN"
        },
        {
          "@type": "AboutPage",
          "name": "About Autoneural",
          "mainEntity": {
            "@id": "https://autoneural.in/#organization"
          }
        },
        {
          "@type": "Person",
          "name": "Palash Lochan Mahana",
          "jobTitle": "Founder & Chief Marketing Officer",
          "worksFor": {
            "@id": "https://autoneural.in/#organization"
          },
          "sameAs": [
            "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/"
          ]
        },
        {
          "@type": "Person",
          "name": "Priyanshu Maity",
          "jobTitle": "Chief Technology Officer",
          "worksFor": {
            "@id": "https://autoneural.in/#organization"
          },
          "sameAs": [
            "https://www.linkedin.com/in/priyanshumaity/"
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://autoneural.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": "https://autoneural.in/about"
            }
          ]
        }
      ]
    }
  ],
  "contact": [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": [
            "Organization",
            "ProfessionalService"
          ],
          "@id": "https://autoneural.in/#organization",
          "name": "Autoneural",
          "alternateName": "Autoneural AI Systems",
          "url": "https://autoneural.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://autoneural.in/icon-512.png",
            "width": 512,
            "height": 512
          },
          "image": "https://autoneural.in/og-image.png",
          "description": "Autoneural builds custom AI agents, chatbots, workflow automation, dashboards, websites and custom software for growing businesses.",
          "email": "official@autoneural.in",
          "telephone": "+91-62979-27642",
          "foundingDate": "2024",
          "founder": [
            {
              "@type": "Person",
              "name": "Palash Lochan Mahana",
              "jobTitle": "Founder & Chief Marketing Officer",
              "sameAs": [
                "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/"
              ]
            },
            {
              "@type": "Person",
              "name": "Priyanshu Maity",
              "jobTitle": "Chief Technology Officer",
              "sameAs": [
                "https://www.linkedin.com/in/priyanshumaity/"
              ]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/autoneural",
            "https://twitter.com/autoneural",
            "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/",
            "https://www.linkedin.com/in/priyanshumaity/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "official@autoneural.in",
            "telephone": "+91-62979-27642",
            "availableLanguage": [
              "English",
              "Hindi",
              "Bengali"
            ]
          },
          "knowsAbout": [
            "Artificial intelligence",
            "AI agents",
            "AI calling agents",
            "Voice AI",
            "Chatbot development",
            "WhatsApp Business API",
            "Workflow automation",
            "Large language models",
            "Web development",
            "Business intelligence dashboards"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://autoneural.in/#website",
          "url": "https://autoneural.in",
          "name": "Autoneural",
          "publisher": {
            "@id": "https://autoneural.in/#organization"
          },
          "inLanguage": "en-IN"
        },
        {
          "@type": "ContactPage",
          "name": "Contact Autoneural",
          "mainEntity": {
            "@id": "https://autoneural.in/#organization"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://autoneural.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact",
              "item": "https://autoneural.in/contact"
            }
          ]
        }
      ]
    }
  ],
  "aivora": [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": [
            "Organization",
            "ProfessionalService"
          ],
          "@id": "https://autoneural.in/#organization",
          "name": "Autoneural",
          "alternateName": "Autoneural AI Systems",
          "url": "https://autoneural.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://autoneural.in/icon-512.png",
            "width": 512,
            "height": 512
          },
          "image": "https://autoneural.in/og-image.png",
          "description": "Autoneural builds custom AI agents, chatbots, workflow automation, dashboards, websites and custom software for growing businesses.",
          "email": "official@autoneural.in",
          "telephone": "+91-62979-27642",
          "foundingDate": "2024",
          "founder": [
            {
              "@type": "Person",
              "name": "Palash Lochan Mahana",
              "jobTitle": "Founder & Chief Marketing Officer",
              "sameAs": [
                "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/"
              ]
            },
            {
              "@type": "Person",
              "name": "Priyanshu Maity",
              "jobTitle": "Chief Technology Officer",
              "sameAs": [
                "https://www.linkedin.com/in/priyanshumaity/"
              ]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/autoneural",
            "https://twitter.com/autoneural",
            "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/",
            "https://www.linkedin.com/in/priyanshumaity/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "official@autoneural.in",
            "telephone": "+91-62979-27642",
            "availableLanguage": [
              "English",
              "Hindi",
              "Bengali"
            ]
          },
          "knowsAbout": [
            "Artificial intelligence",
            "AI agents",
            "AI calling agents",
            "Voice AI",
            "Chatbot development",
            "WhatsApp Business API",
            "Workflow automation",
            "Large language models",
            "Web development",
            "Business intelligence dashboards"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://autoneural.in/#website",
          "url": "https://autoneural.in",
          "name": "Autoneural",
          "publisher": {
            "@id": "https://autoneural.in/#organization"
          },
          "inLanguage": "en-IN"
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://autoneural.in/#aivora",
          "name": "Aivora",
          "alternateName": "Autoneural's Aivora",
          "applicationCategory": "BusinessApplication",
          "applicationSubCategory": "AI calling agent and CRM",
          "operatingSystem": "Web",
          "url": "https://autoneural.in/aivora",
          "description": "Aivora is Autoneural’s AI calling agent and CRM. It answers and places business calls, qualifies leads in conversation, books appointments and updates the customer record automatically.",
          "publisher": {
            "@id": "https://autoneural.in/#organization"
          },
          "provider": {
            "@id": "https://autoneural.in/#organization"
          },
          "featureList": [
            "AI calling agent for inbound and outbound calls",
            "CRM populated automatically from each call",
            "Appointment booking and calendar sync",
            "Automated follow-up sequences",
            "Call transcripts, summaries and analytics",
            "Rule-based handover to a human"
          ],
          "inLanguage": [
            "en",
            "hi",
            "bn",
            "ta",
            "mr"
          ],
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Small and medium businesses"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Aivora Starter",
              "price": "3000",
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "3000",
                "priceCurrency": "INR",
                "unitCode": "MON",
                "valueAddedTaxIncluded": false
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://autoneural.in/#organization"
              },
              "url": "https://autoneural.in/aivora#aivora-plans"
            },
            {
              "@type": "Offer",
              "name": "Aivora Growth",
              "price": "15000",
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "15000",
                "priceCurrency": "INR",
                "unitCode": "MON",
                "valueAddedTaxIncluded": false
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://autoneural.in/#organization"
              },
              "url": "https://autoneural.in/aivora#aivora-plans"
            },
            {
              "@type": "Offer",
              "name": "Aivora Custom",
              "price": "45000",
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "45000",
                "priceCurrency": "INR",
                "unitCode": "MON",
                "valueAddedTaxIncluded": false
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://autoneural.in/#organization"
              },
              "url": "https://autoneural.in/aivora#aivora-plans"
            }
          ]
        },
        {
          "@type": "Service",
          "name": "Aivora AI Calling Agent and CRM",
          "description": "Deployment and configuration of Aivora, an AI calling agent with a built-in CRM that answers and places business calls, qualifies leads, books appointments and keeps customer records up to date.",
          "serviceType": [
            "AI calling agent",
            "Voice AI",
            "CRM automation",
            "Appointment booking",
            "Lead qualification"
          ],
          "provider": {
            "@id": "https://autoneural.in/#organization"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Small and medium businesses"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Aivora?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Aivora is Autoneural’s own AI calling agent and CRM. It answers your business number, calls leads back, qualifies them in a real conversation, books appointments, and writes the contact, transcript and next step into the CRM before the call ends."
              }
            },
            {
              "@type": "Question",
              "name": "What does Aivora cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Starter is ₹3,000 a month with a ₹15,000 one-time setup and 100 call minutes. Growth is ₹15,000 a month with 600 minutes, and Custom starts at ₹45,000 a month, quoted per business. All prices exclude GST, and the full inclusions for each plan are listed on this page."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if we use more minutes than the plan includes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You are billed per extra minute — ₹22 on Starter, ₹18 on Growth, and ₹12–15 on Custom. Usage auto-pauses at 150% of your bundle pending your confirmation, so an overage can never reach you as a surprise invoice. You can also add a 500-minute pack for ₹8,000."
              }
            },
            {
              "@type": "Question",
              "name": "Does Aivora make and answer real phone calls?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Aivora answers calls to your business number and places outbound calls to leads you provide. Callers speak naturally, hear a consistent greeting, and can ask questions or book time without pressing through a phone tree."
              }
            },
            {
              "@type": "Question",
              "name": "Is outbound calling compliant in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On Growth and above, yes: DLT-registered routing, dial-time DND scrubbing, calling-window enforcement between 9am and 9pm, a consent register and opt-out handling are built in. We can also complete your DLT and telemarketer registration for you as a one-time add-on."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can our first agent go live?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Usually within a few working days. We connect a number and calendar with you, load your services and common answers, then run test calls together. Real customers only reach the agent once you are happy with what you hear."
              }
            },
            {
              "@type": "Question",
              "name": "What happens when a caller needs a person?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You set the handover rules. Aivora can transfer the call immediately, take the reason and ask a teammate to call back, or route urgent topics to a dedicated number. Every handover carries the conversation context with it."
              }
            },
            {
              "@type": "Question",
              "name": "Can we control what the agent says?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. You set the greeting, the business facts, the qualification questions, what it may quote, and when it must escalate. Test calls let you hear the experience before customers do, and changes go live without developer help."
              }
            },
            {
              "@type": "Question",
              "name": "Which languages can Aivora handle?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "English and Hindi on every plan. Bengali, Tamil, Marathi and further languages on request come with the Custom tier. Tell us which languages your callers use and we will confirm what is supported before you commit."
              }
            },
            {
              "@type": "Question",
              "name": "How is Aivora different from a custom Autoneural agent?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Aivora is a finished product you configure, so it starts in days rather than weeks. A custom agent is built from scratch around an unusual process. Same team either way, and Aivora can be extended with custom work when the product alone does not cover your flow."
              }
            },
            {
              "@type": "Question",
              "name": "Who owns the calls, recordings and customer data?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You do. Numbers, recordings, transcripts and CRM records belong to your business and can be exported at any time. Where compliance requires it, we deploy Aivora inside your own cloud account."
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://autoneural.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Aivora",
              "item": "https://autoneural.in/aivora"
            }
          ]
        }
      ]
    }
  ],
  "ai-chatbots": [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": [
            "Organization",
            "ProfessionalService"
          ],
          "@id": "https://autoneural.in/#organization",
          "name": "Autoneural",
          "alternateName": "Autoneural AI Systems",
          "url": "https://autoneural.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://autoneural.in/icon-512.png",
            "width": 512,
            "height": 512
          },
          "image": "https://autoneural.in/og-image.png",
          "description": "Autoneural builds custom AI agents, chatbots, workflow automation, dashboards, websites and custom software for growing businesses.",
          "email": "official@autoneural.in",
          "telephone": "+91-62979-27642",
          "foundingDate": "2024",
          "founder": [
            {
              "@type": "Person",
              "name": "Palash Lochan Mahana",
              "jobTitle": "Founder & Chief Marketing Officer",
              "sameAs": [
                "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/"
              ]
            },
            {
              "@type": "Person",
              "name": "Priyanshu Maity",
              "jobTitle": "Chief Technology Officer",
              "sameAs": [
                "https://www.linkedin.com/in/priyanshumaity/"
              ]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/autoneural",
            "https://twitter.com/autoneural",
            "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/",
            "https://www.linkedin.com/in/priyanshumaity/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "official@autoneural.in",
            "telephone": "+91-62979-27642",
            "availableLanguage": [
              "English",
              "Hindi",
              "Bengali"
            ]
          },
          "knowsAbout": [
            "Artificial intelligence",
            "AI agents",
            "AI calling agents",
            "Voice AI",
            "Chatbot development",
            "WhatsApp Business API",
            "Workflow automation",
            "Large language models",
            "Web development",
            "Business intelligence dashboards"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://autoneural.in/#website",
          "url": "https://autoneural.in",
          "name": "Autoneural",
          "publisher": {
            "@id": "https://autoneural.in/#organization"
          },
          "inLanguage": "en-IN"
        },
        {
          "@type": "Service",
          "name": "AI Chatbot and Agent Development",
          "description": "Custom AI chatbots and autonomous agents trained on your own content, deployed across WhatsApp, web, Instagram, email and voice, integrated with your CRM and business systems.",
          "serviceType": [
            "Chatbot development",
            "Conversational AI",
            "AI agents",
            "Customer service automation"
          ],
          "provider": {
            "@id": "https://autoneural.in/#organization"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Small and medium businesses"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where does the AI chatbot get its answers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "From your material — catalogues, price lists, SOPs, past tickets, and your website. It cites what it used, and it is guard-railed to say it does not know rather than invent an answer."
              }
            },
            {
              "@type": "Question",
              "name": "Can a human take over a chatbot conversation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Any time. Your team gets a shared inbox with the full transcript and a suggested reply, and you can set rules that force a handover automatically — for refunds or high-value orders, for example."
              }
            },
            {
              "@type": "Question",
              "name": "Which channels can the chatbot run on?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "WhatsApp, your website, Instagram, Messenger, Telegram, your mobile app, email, phone calls, and internal chat like Slack or Teams — all sharing one knowledge base."
              }
            },
            {
              "@type": "Question",
              "name": "Is customer data kept private?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Card, ID, and phone numbers are masked in transcripts and exports. Data can stay in your region, and we support on-premise deployment where compliance requires it."
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://autoneural.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "AI Chatbots & Agents",
              "item": "https://autoneural.in/ai-chatbots"
            }
          ]
        }
      ]
    }
  ],
  "website-development": [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": [
            "Organization",
            "ProfessionalService"
          ],
          "@id": "https://autoneural.in/#organization",
          "name": "Autoneural",
          "alternateName": "Autoneural AI Systems",
          "url": "https://autoneural.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://autoneural.in/icon-512.png",
            "width": 512,
            "height": 512
          },
          "image": "https://autoneural.in/og-image.png",
          "description": "Autoneural builds custom AI agents, chatbots, workflow automation, dashboards, websites and custom software for growing businesses.",
          "email": "official@autoneural.in",
          "telephone": "+91-62979-27642",
          "foundingDate": "2024",
          "founder": [
            {
              "@type": "Person",
              "name": "Palash Lochan Mahana",
              "jobTitle": "Founder & Chief Marketing Officer",
              "sameAs": [
                "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/"
              ]
            },
            {
              "@type": "Person",
              "name": "Priyanshu Maity",
              "jobTitle": "Chief Technology Officer",
              "sameAs": [
                "https://www.linkedin.com/in/priyanshumaity/"
              ]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/autoneural",
            "https://twitter.com/autoneural",
            "https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/",
            "https://www.linkedin.com/in/priyanshumaity/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "official@autoneural.in",
            "telephone": "+91-62979-27642",
            "availableLanguage": [
              "English",
              "Hindi",
              "Bengali"
            ]
          },
          "knowsAbout": [
            "Artificial intelligence",
            "AI agents",
            "AI calling agents",
            "Voice AI",
            "Chatbot development",
            "WhatsApp Business API",
            "Workflow automation",
            "Large language models",
            "Web development",
            "Business intelligence dashboards"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://autoneural.in/#website",
          "url": "https://autoneural.in",
          "name": "Autoneural",
          "publisher": {
            "@id": "https://autoneural.in/#organization"
          },
          "inLanguage": "en-IN"
        },
        {
          "@type": "Service",
          "name": "Website Development",
          "description": "Design, build and launch of fast, search-optimised business websites, e-commerce storefronts, customer portals and web applications.",
          "serviceType": [
            "Website design",
            "Web development",
            "E-commerce development",
            "SEO"
          ],
          "provider": {
            "@id": "https://autoneural.in/#organization"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Place",
              "name": "Worldwide"
            }
          ],
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Small and medium businesses"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What do you build websites with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "React and TypeScript on the front, with a Node API when the site needs a backend. For content-led sites we wire in a headless CMS so your team edits pages without calling us."
              }
            },
            {
              "@type": "Question",
              "name": "Will my website be fast and rank well on Google?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We target 90+ Lighthouse scores on mobile, ship clean semantic markup and structured data, and set up sitemaps, meta tags, and analytics before launch."
              }
            },
            {
              "@type": "Question",
              "name": "Can we edit the website content ourselves?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We connect a CMS or an admin panel so text, images, blog posts, and case studies are yours to change, with no developer in the loop."
              }
            },
            {
              "@type": "Question",
              "name": "Do you redesign existing websites?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Often. We audit what you have, keep the pages that already earn traffic, redirect the rest properly, and rebuild the experience without losing your search rankings."
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://autoneural.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Website Development",
              "item": "https://autoneural.in/website-development"
            }
          ]
        }
      ]
    }
  ],
};
