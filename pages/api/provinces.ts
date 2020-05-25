import { NextApiRequest, NextApiResponse } from 'next'

/**
 * PST - PROVINCIAL SALES TAXES
 * RST - RATAILS SALES TAXES
 * QST - QUEBEC SALES TAXES
 * 
 *  
 */
export default function getAllProvinces(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') res.status(500).json({ message: 'sorry we only accept GET request' })
    res.json({

        "provinces": [
            {
                id: '1',
                name: 'Alberta',
                capital: 'Quebec City',
                image_path: '/provinces/Alberta.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'GST',
                        provincial: 0.00,
                        national: 0.05
                    },
                    income: {

                    }
                },
                average_wage: {
                    minimum_wage: 15.00,
                    average_hourly_wage_all_industries: 30.76,
                    management: 48.21,
                    business: 29.75,
                    natural_and_applied_sciences: 43.29,
                    health: 33.64,
                    education: 35.50,
                    law_and_social: 35.50,
                    community_and_governmet_services: 35.50,
                    art_culture_recreation_and_sports: 25.26,
                    sales_and_services: 19.60,
                    trades: 30.64,
                    transport: 30.64,
                    equipment_operator: 30.64,
                    natural_resources: 32.32,
                    agricultures: 32.32,
                    manufacturing: 30.71,
                }
            },
            {
                id: '2',
                name: 'British Columbia',
                capital: 'Quebec City',
                image_path: '/provinces/British_Columbia.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'GST&PST',
                        provincial: 0.07,
                        national: 0.12
                    },
                    income: {

                    }
                },
                average_wage: {
                    minimum_wage: 13.85,
                    average_hourly_wage_all_industries: 26.77,
                    management: 41.53,
                    business: 26.45,
                    natural_and_applied_sciences: 37.33,
                    health: 30.71,
                    education: 31.36,
                    law_and_social: 31.36,
                    community_and_governmet_services: 31.36,
                    art_culture_recreation_and_sports: 25.74,
                    sales_and_services: 17.71,
                    trades: 28.14,
                    transport: 28.14,
                    equipment_operator: 28.14,
                    natural_resources: 26.32,
                    agricultures: 32.32,
                    manufacturing: 25.32,
                }

            },
            {
                id: '3',
                name: 'Manitoba',
                capital: 'Quebec City',
                image_path: '/provinces/Manitoba.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'GST&PST',
                        provincial: 0.07,
                        national: 0.12
                    },
                    income: {

                    }
                },
                average_wage: {
                    minimum_wage: 11.65,
                    average_hourly_wage_all_industries: 24.45,
                    management: 39.61,
                    business: 24.66,
                    natural_and_applied_sciences: 33.71,
                    health: 28.82,
                    education: 29.43,
                    law_and_social: 29.43,
                    community_and_governmet_services: 29.43,
                    art_culture_recreation_and_sports: 20.79,
                    sales_and_services: 16.51,
                    trades: 24.88,
                    transport: 24.88,
                    equipment_operator: 24.88,
                    natural_resources: 21.18,
                    agricultures: 21.18,
                    manufacturing: 20.85,
                }

            },
            {
                id: '4',
                name: 'New Brunswick',
                capital: 'Quebec City',
                image_path: '/provinces/New_Brunswick.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'HST',
                        provincial: 0.1,
                        national: 0.15
                    },
                    income: {

                    }
                },
                average_wage: {
                    minimum_wage: 11.70,
                    average_hourly_wage_all_industries: 22.89,
                    management: 37.02,
                    business: 23.58,
                    natural_and_applied_sciences: 32.07,
                    health: 27.52,
                    education: 27.98,
                    law_and_social: 27.98,
                    community_and_governmet_services: 27.98,
                    art_culture_recreation_and_sports: 18.88,
                    sales_and_services: 15.38,
                    trades: 22.14,
                    transport: 22.14,
                    equipment_operator: 22.14,
                    natural_resources: 19.98,
                    agricultures: 19.98,
                    manufacturing: 19.82,
                }


            },
            {
                id: '5',
                name: 'Newfoundland and Labrator',
                capital: 'Quebec City',
                image_path: '/provinces/Newfoundland_and_Labrator.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'HST',
                        provincial: 0.1,
                        national: 0.15
                    },
                    income: {

                    }
                },
                average_wage: {
                    minimum_wage: 11.65,
                    average_hourly_wage_all_industries: 25.57,
                    management: 40.58,
                    business: 25.42,
                    natural_and_applied_sciences: 35.82,
                    health: 30.13,
                    education: 31.34,
                    law_and_social: 31.34,
                    community_and_governmet_services: 31.34,
                    art_culture_recreation_and_sports: 21.23,
                    sales_and_services: 15.43,
                    trades: 26.64,
                    transport: 26.64,
                    equipment_operator: 26.64,
                    natural_resources: 24.91,
                    agricultures: 24.91,
                    manufacturing: 22.00,
                }

            },
            {
                id: '6',
                name: 'Nova Scotia',
                capital: 'Quebec City',
                image_path: '/provinces/Northwest_Territories.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'HST',
                        provincial: 0.1,
                        national: 0.15
                    },
                    income: {

                    }
                },
                average_wage: {
                    minimum_wage: 12.55,
                    average_hourly_wage_all_industries: 23.59,
                    management: 38.50,
                    business: 24.23,
                    natural_and_applied_sciences: 33.02,
                    health: 27.87,
                    education: 30.38,
                    law_and_social: 30.38,
                    community_and_governmet_services: 30.38,
                    art_culture_recreation_and_sports: 21.13,
                    sales_and_services: 15.01,
                    trades: 23.07,
                    transport: 23.07,
                    equipment_operator: 23.07,
                    natural_resources: 20.24,
                    agricultures: 20.24,
                    manufacturing: 21.95,
                }

            },
            {
                id: '7',
                name: 'Northwest Territories',
                capital: 'Quebec City',
                image_path: '/provinces/Nova_Scotia.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'GST',
                        provincial: 0.0,
                        national: 0.5
                    },
                    income: {

                    }
                },
                average_wage: {
                    minimum_wage: 13.46,
                    average_hourly_wage_all_industries: 0,
                    management: 0,
                    business: 0,
                    natural_and_applied_sciences: 0,
                    health: 0,
                    education: 0,
                    law_and_social:0,
                    community_and_governmet_services:0,
                    art_culture_recreation_and_sports: 0,
                    sales_and_services: 0,
                    trades: 0,
                    transport: 0,
                    equipment_operator: 0,
                    natural_resources: 0,
                    agricultures: 0,
                    manufacturing: 0,
                }

            },
            {
                id: '8',
                name: 'Ontario',
                capital: 'Quebec City',
                image_path: '/provinces/Ontario.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'HST',
                        provincial: 0.8,
                        national: 0.13
                    },
                    income: {

                    }
                },
                minimum_wage: "14.00",
                average_wage: {
                    minimum_wage: 14.00,
                    average_hourly_wage_all_industries: 27.36,
                    management: 45.45,
                    business: 27.12,
                    natural_and_applied_sciences: 36.80,
                    health: 30.36,
                    education: 34.34,
                    law_and_social: 34.34,
                    community_and_governmet_services: 34.34,
                    art_culture_recreation_and_sports: 22.42,
                    sales_and_services: 17.88,
                    trades: 25.60,
                    transport: 25.60,
                    equipment_operator: 25.60,
                    natural_resources: 21.16,
                    agricultures: 21.16,
                    manufacturing: 21.96,
                }

            },
            {
                id: '9',
                name: 'Prince Edward Island',
                capital: 'Quebec City',
                image_path: '/provinces/Prince_Edward_Island.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'HST',
                        provincial: 0.1,
                        national: 0.15
                    },
                    income: {

                    }
                },
                average_wage: {
                    minimum_wage: 12.85,
                    average_hourly_wage_all_industries: 22.26,
                    management: 33.84,
                    business: 23.90,
                    natural_and_applied_sciences: 30.33,
                    health: 29.05,
                    education: 29.52,
                    law_and_social: 29.52,
                    community_and_governmet_services: 29.52,
                    art_culture_recreation_and_sports: 19.54,
                    sales_and_services: 15.10,
                    trades: 20.45,
                    transport: 20.45,
                    equipment_operator: 20.45,
                    natural_resources: 17.23,
                    agricultures: 17.23,
                    manufacturing: 18.34,
                }

            },
            {
                id: '10',
                name: 'Quebec',
                capital: 'Quebec City',
                image_path: '/provinces/Quebec.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'GST&HST',
                        provincial: 0.975,
                        national: 0.14975
                    },
                    income: {

                    }
                },
                average_wage: {
                    minimum_wage:13.10,
                    minimum_tip_employees:10.05,
                    average_hourly_wage_all_industries: 25.42,
                    management: 40.40,
                    business: 25.51,
                    natural_and_applied_sciences: 33.64,
                    health: 27.26,
                    education: 31.36,
                    law_and_social: 31.36,
                    community_and_governmet_services: 31.36,
                    art_culture_recreation_and_sports: 23.48,
                    sales_and_services: 17.09,
                    trades: 25.18,
                    transport: 25.18,
                    equipment_operator: 25.18,
                    natural_resources: 21.13,
                    agricultures: 21.13,
                    manufacturing: 21.19,
                }

            },
            {
                id: '11',
                name: 'Saskatchewan',
                capital: 'Quebec City',
                image_path: '/provinces/Saskatchewan.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'GST+PST',
                        provincial: 0.06,
                        national: 0.11
                    },
                    income: {

                    }
                },
                average_wage: {
                    minimum_wage: 11.32,
                    average_hourly_wage_all_industries: 27.46,
                    management: 44.10,
                    business: 26.39,
                    natural_and_applied_sciences: 37.05,
                    health: 33.02,
                    education: 32.85,
                    law_and_social: 32.85,
                    community_and_governmet_services: 32.85,
                    art_culture_recreation_and_sports: 21.42,
                    sales_and_services: 17.80,
                    trades: 28.58,
                    transport: 28.58,
                    equipment_operator: 28.58,
                    natural_resources: 28.84,
                    agricultures: 28.84,
                    manufacturing: 27.82,
                }

            },
            {
                id: '12',
                name: 'Yukon',
                capital: 'Quebec City',
                image_path: '/provinces/Yukon.jpg',
                tax_rate: {
                    sales: {
                        rate_type: 'GST',
                        provincial: 0.0,
                        national: 0.15
                    },
                    income: {

                    }
                },
                minimum_wage: "13.71",
                average_wage: {
                    minimum_wage: 13.71,
                    average_hourly_wage_all_industries: 0,
                    management: 0,
                    business: 0,
                    natural_and_applied_sciences: 0,
                    health: 0,
                    education: 0,
                    law_and_social: 0,
                    community_and_governmet_services: 0,
                    art_culture_recreation_and_sports: 0,
                    sales_and_services: 0,
                    trades: 0,
                    transport: 0,
                    equipment_operator: 0,
                    natural_resources: 0,
                    agricultures: 0,
                    manufacturing: 0,
                }

            },
        ]
    })
}