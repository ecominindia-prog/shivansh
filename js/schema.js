// Schema.org structured data generator
document.addEventListener('DOMContentLoaded', function() {
    const pageType = document.documentElement.getAttribute('data-page') || document.body.getAttribute('data-page');
    if (!pageType) return;

    let schemaData = {};

    switch (pageType) {
        case 'home':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Thane Repair",
                "image": "https://picsum.photos/seed/ac-repair/800/600",
                "@id": "",
                "url": "https://ais-dev-rabrgwkqx3anqzhzylnsgq-197757990855.asia-southeast1.run.app",
                "telephone": "098204 22352",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Gala no. 2, Vijay Gardan, Ghodbunder Rd, near Akashganga Complex",
                    "addressLocality": "Thane West",
                    "addressRegion": "Maharashtra",
                    "postalCode": "400607",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 19.2183,
                    "longitude": 72.9781
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                    ],
                    "opens": "08:00",
                    "closes": "21:00"
                },
                "sameAs": [
                    "https://www.facebook.com/shivanshrefrigeration"
                ]
            };
            break;

        case 'ac-repair':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "AC Repair in Thane",
                "serviceType": "Air Conditioning Repair",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Thane Repair",
                    "telephone": "098204 22352",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Gala no. 2, Vijay Gardan, Ghodbunder Rd, near Akashganga Complex",
                        "addressLocality": "Thane West",
                        "addressRegion": "Maharashtra",
                        "postalCode": "400607",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Thane"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "AC Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AC Installation"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AC Gas Refilling"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AC PCB Repair"
                            }
                        }
                    ]
                }
            };
            break;

        case 'fridge-repair':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Fridge Repair in Thane",
                "serviceType": "Refrigerator Repair",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Thane Repair",
                    "telephone": "098204 22352",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Gala no. 2, Vijay Gardan, Ghodbunder Rd, near Akashganga Complex",
                        "addressLocality": "Thane West",
                        "addressRegion": "Maharashtra",
                        "postalCode": "400607",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Thane"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Fridge Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Fridge Gas Refilling"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Fridge Compressor Repair"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Fridge Defrost Repair"
                            }
                        }
                    ]
                }
            };
            break;

        case 'washing-machine-repair':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Washing Machine Repair in Thane",
                "serviceType": "Washing Machine Repair",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Thane Repair",
                    "telephone": "098204 22352",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Gala no. 2, Vijay Gardan, Ghodbunder Rd, near Akashganga Complex",
                        "addressLocality": "Thane West",
                        "addressRegion": "Maharashtra",
                        "postalCode": "400607",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Thane"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Washing Machine Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Top Load Washing Machine Repair"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Front Load Washing Machine Repair"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Washing Machine Motor Repair"
                            }
                        }
                    ]
                }
            };
            break;

        case 'microwave-repair':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Microwave Repair in Thane",
                "serviceType": "Microwave Oven Repair",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Thane Repair",
                    "telephone": "098204 22352",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Gala no. 2, Vijay Gardan, Ghodbunder Rd, near Akashganga Complex",
                        "addressLocality": "Thane West",
                        "addressRegion": "Maharashtra",
                        "postalCode": "400607",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Thane"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Microwave Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Microwave Magnetron Repair"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Microwave Control Panel Repair"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Microwave Door Switch Repair"
                            }
                        }
                    ]
                }
            };
            break;

        case 'electrician':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Electrician Services in Thane",
                "serviceType": "Electrical Services",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Thane Repair",
                    "telephone": "098204 22352",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Gala no. 2, Vijay Gardan, Ghodbunder Rd, near Akashganga Complex",
                        "addressLocality": "Thane West",
                        "addressRegion": "Maharashtra",
                        "postalCode": "400607",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Thane"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Electrical Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Wiring Installation"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Switch & Socket Repair"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Electrical Fault Finding"
                            }
                        }
                    ]
                }
            };
            break;

        case 'plumber':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Plumbing Services in Thane",
                "serviceType": "Plumbing Services",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Thane Repair",
                    "telephone": "098204 22352",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Gala no. 2, Vijay Gardan, Ghodbunder Rd, near Akashganga Complex",
                        "addressLocality": "Thane West",
                        "addressRegion": "Maharashtra",
                        "postalCode": "400607",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Thane"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Plumbing Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Pipe Leak Repair"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Tap & Faucet Repair"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Drain Cleaning"
                            }
                        }
                    ]
                }
            };
            break;

        case 'gas-repair':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Gas Appliance Repair in Thane",
                "serviceType": "Gas Appliance Repair",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Thane Repair",
                    "telephone": "098204 22352",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Gala no. 2, Vijay Gardan, Ghodbunder Rd, near Akashganga Complex",
                        "addressLocality": "Thane West",
                        "addressRegion": "Maharashtra",
                        "postalCode": "400607",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Thane"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Gas Appliance Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Gas Stove Repair"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Gas Pipeline Repair"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Gas Leak Detection"
                            }
                        }
                    ]
                }
            };
            break;

        // Add more cases for other services as needed
        default:
            return; // No schema for unknown pages
    }

    // Create and append the script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);
});