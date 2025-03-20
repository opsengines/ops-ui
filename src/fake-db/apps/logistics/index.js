export const db = {
  vehicles: [
    {
      id: 1,
      location: 'CVE-2024-1001',
      startCity: 'Cagnes-sur-Mer',
      startCountry: 'France',
      affectedTech: 'Apache, Linux',
      endCity: 'Catania',
      endCountry: 'Italy',
      warnings: 'Actively Exploited',
      aiFix: '✅ AI-FIX Ready',
      progress: 49,
      severity: 'Critical'
    },
    {
      id: 2,
      location: 'CVE-2023-2022',
      startCity: 'Köln',
      startCountry: 'Germany',
      endCity: 'Laspezia',
      endCountry: 'Italy',
      warnings: 'No Active Exploit',
      progress: 24,
      severity: 'High',
      aiFix: '⚠️ AI-FIX In Progress',
      affectedTech: 'Windows, IIS'
    },
    {
      id: 3,
      location: 'CVE-2022-3033',
      startCity: 'Chambray-lès-Tours',
      startCountry: 'France',
      endCity: 'Hamm',
      endCountry: 'Germany',
      warnings: 'No Active Exploit',
      progress: 7,
      severity: 'Medium',
      aiFix: '✅ AI-FIX Ready',
      affectedTech: 'Python, Django'
    },
    {
      id: 4,
      location: 'CVE-2024-4004',
      startCity: 'Berlin',
      startCountry: 'Germany',
      endCity: 'Gelsenkirchen',
      endCountry: 'Germany',
      warnings: 'No Active Exploit',
      progress: 95,
      severity: 'Low',
      aiFix: '❌ AI-FIX Not Available',
      affectedTech: 'Kubernetes, Helm'
    },
    {
      id: 5,
      location: 'CVE-2023-5055',
      startCity: 'Cergy-Pontoise',
      startCountry: 'France',
      endCity: 'Berlin',
      endCountry: 'Germany',
      warnings: 'Actively Exploited',
      progress: 65,
      severity: 'Critical',
      aiFix: '✅ AI-FIX Ready',
      affectedTech: 'AWS S3, IAM'
    },
    {
      id: 6,
      location: 'CVE-2022-6066',
      startCity: 'Villefranche-sur-Saône',
      startCountry: 'France',
      endCity: 'Halle',
      endCountry: 'Germany',
      warnings: 'No Active Exploit',
      progress: 55,
      severity: 'High',
      aiFix: '⚠️ AI-FIX In Progress',
      affectedTech: 'Terraform, CloudFormation'
    },
    {
      id: 7,
      location: 330178,
      startCity: 'Mâcon',
      startCountry: 'France',
      endCity: 'Bochum',
      endCountry: 'Germany',
      warnings: 'Fuel Problems',
      progress: 74,
      severity: 'Medium',
      aiFix: '✅ AI-FIX Ready',
      affectedTech: 'Python, Django'
    },
    {
      id: 8,
      location: 595525,
      startCity: 'Fullerton',
      startCountry: 'USA',
      endCity: 'Lübeck',
      endCountry: 'Germany',
      warnings: 'No Warnings',
      progress: 100
    },
    {
      id: 9,
      location: 182964,
      startCity: 'Saintes',
      startCountry: 'France',
      endCity: 'Roma',
      endCountry: 'Italy',
      warnings: 'Oil Leakage',
      progress: 82
    },
    {
      id: 10,
      location: 706085,
      startCity: 'Fort Wayne',
      startCountry: 'USA',
      endCity: 'Mülheim an der Ruhr',
      endCountry: 'Germany',
      warnings: 'Oil Leakage',
      progress: 49
    },
    {
      id: 11,
      location: 523708,
      startCity: 'Albany',
      startCountry: 'USA',
      endCity: 'Wuppertal',
      endCountry: 'Germany',
      warnings: 'Temperature Not Optimal',
      progress: 66
    },
    {
      id: 12,
      location: 676485,
      startCity: 'Toledo',
      startCountry: 'USA',
      endCity: 'Magdeburg',
      endCountry: 'Germany',
      warnings: 'Temperature Not Optimal',
      progress: 7
    },
    {
      id: 13,
      location: 514437,
      startCity: 'Houston',
      startCountry: 'USA',
      endCity: 'Wiesbaden',
      endCountry: 'Germany',
      warnings: 'Fuel Problems',
      progress: 27
    },
    {
      id: 14,
      location: 300198,
      startCity: 'West Palm Beach',
      startCountry: 'USA',
      endCity: 'Dresden',
      endCountry: 'Germany',
      warnings: 'Temperature Not Optimal',
      progress: 90
    },
    {
      id: 15,
      location: 960090,
      startCity: 'Fort Lauderdale',
      startCountry: 'USA',
      endCity: 'Kiel',
      endCountry: 'Germany',
      warnings: 'No Warnings',
      progress: 81
    },
    {
      id: 16,
      location: 878423,
      startCity: 'Schaumburg',
      startCountry: 'USA',
      endCity: 'Berlin',
      endCountry: 'Germany',
      warnings: 'Fuel Problems',
      progress: 21
    },
    {
      id: 17,
      location: 318119,
      startCity: 'Mundolsheim',
      startCountry: 'France',
      endCity: 'München',
      endCountry: 'Germany',
      warnings: 'No Warnings',
      progress: 26
    },
    {
      id: 18,
      location: 742500,
      startCity: 'Fargo',
      startCountry: 'USA',
      endCity: 'Salerno',
      endCountry: 'Italy',
      warnings: 'Temperature Not Optimal',
      progress: 80
    },
    {
      id: 19,
      location: 469399,
      startCity: 'München',
      startCountry: 'Germany',
      endCity: 'Ath',
      endCountry: 'Belgium',
      warnings: 'Ecu Not Responding',
      progress: 50
    },
    {
      id: 20,
      location: 411175,
      startCity: 'Chicago',
      startCountry: 'USA',
      endCity: 'Neuss',
      endCountry: 'Germany',
      warnings: 'Oil Leakage',
      progress: 44
    },
    {
      id: 21,
      location: 753525,
      startCity: 'Limoges',
      startCountry: 'France',
      endCity: 'Messina',
      endCountry: 'Italy',
      warnings: 'Temperature Not Optimal',
      progress: 55
    },
    {
      id: 22,
      location: 882341,
      startCity: 'Cesson-Sévigné',
      startCountry: 'France',
      endCity: 'Napoli',
      endCountry: 'Italy',
      warnings: 'No Warnings',
      progress: 48
    },
    {
      id: 23,
      location: 408270,
      startCity: 'Leipzig',
      startCountry: 'Germany',
      endCity: 'Tournai',
      endCountry: 'Belgium',
      warnings: 'Ecu Not Responding',
      progress: 73
    },
    {
      id: 24,
      location: 276904,
      startCity: 'Aulnay-sous-Bois',
      startCountry: 'France',
      endCity: 'Torino',
      endCountry: 'Italy',
      warnings: 'Fuel Problems',
      progress: 30
    },
    {
      id: 25,
      location: 159145,
      startCity: 'Paris 19',
      startCountry: 'France',
      endCity: 'Dresden',
      endCountry: 'Germany',
      warnings: 'No Warnings',
      progress: 60
    }
  ]
}
