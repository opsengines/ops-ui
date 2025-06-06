export const resultData = [
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-ap-northeast-1-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-northeast-1',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:ap-northeast-1:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-northeast-1'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-ap-northeast-2-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-northeast-2',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:ap-northeast-2:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-northeast-2'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-ap-northeast-3-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-northeast-3',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:ap-northeast-3:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-northeast-3'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-ap-south-1-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-south-1',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:ap-south-1:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-south-1'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-ap-southeast-1-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-southeast-1',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:ap-southeast-1:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-southeast-1'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-ap-southeast-2-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-southeast-2',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:ap-southeast-2:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-southeast-2'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-ca-central-1-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ca-central-1',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:ca-central-1:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ca-central-1'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-eu-central-1-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'eu-central-1',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:eu-central-1:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'eu-central-1'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-eu-north-1-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'eu-north-1',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:eu-north-1:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'eu-north-1'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-eu-west-1-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'eu-west-1',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:eu-west-1:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'eu-west-1'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-eu-west-2-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'eu-west-2',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:eu-west-2:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'eu-west-2'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-eu-west-3-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'eu-west-3',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:eu-west-3:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'eu-west-3'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-sa-east-1-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'sa-east-1',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:sa-east-1:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'sa-east-1'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-us-east-1-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'us-east-1',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:us-east-1:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'us-east-1'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-us-east-2-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'us-east-2',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:us-east-2:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'us-east-2'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-us-west-1-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'us-west-1',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:us-west-1:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'us-west-1'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    metadata: {
      event_code: 'accessanalyzer_enabled',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'IAM Access Analyzer in account 730335336102 is not enabled.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.20'],
        'CIS-1.5': ['1.20'],
        'KISA-ISMS-P-2023': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'CIS-2.0': ['1.20'],
        'KISA-ISMS-P-2023-korean': ['2.5.6', '2.6.4', '2.8.1', '2.8.2'],
        'AWS-Account-Security-Onboarding': [
          'Enabled security services',
          'Create analyzers in each active regions',
          'Verify that events are present in SecurityHub aggregated view'
        ],
        'CIS-3.0': ['1.20']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Check if IAM Access Analyzer is enabled',
      product_uid: 'prowler',
      title: 'Check if IAM Access Analyzer is enabled',
      types: ['IAM'],
      uid: 'prowler-aws-accessanalyzer_enabled-730335336102-us-west-2-analyzer/unknown'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'us-west-2',
        data: {
          details: ''
        },
        group: {
          name: 'accessanalyzer'
        },
        labels: [],
        name: 'analyzer/unknown',
        type: 'Other',
        uid: 'arn:aws:accessanalyzer:us-west-2:730335336102:analyzer/unknown'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'us-west-2'
    },
    remediation: {
      desc: 'Enable IAM Access Analyzer for all accounts, create analyzer and take action over it is recommendations (IAM Access Analyzer is available at no additional cost).',
      references: [
        'aws accessanalyzer create-analyzer --analyzer-name <NAME> --type <ACCOUNT|ORGANIZATION>',
        'https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html'
      ]
    },
    risk_details:
      'AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer uses a form of mathematical analysis called automated reasoning, which applies logic and mathematical inference to determine all possible access paths allowed by a resource policy.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message:
      'Login to the AWS Console. Choose your account name on the top right of the window -> My Account -> Contact Information.',
    metadata: {
      event_code: 'account_maintain_current_contact_details',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 3,
    severity: 'Medium',
    status: 'New',
    status_code: 'MANUAL',
    status_detail:
      'Login to the AWS Console. Choose your account name on the top right of the window -> My Account -> Contact Information.',
    status_id: 1,
    unmapped: {
      related_url: '',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.1'],
        'CIS-1.5': ['1.1'],
        'KISA-ISMS-P-2023': ['2.1.3'],
        'CIS-2.0': ['1.1'],
        'KISA-ISMS-P-2023-korean': ['2.1.3'],
        'AWS-Well-Architected-Framework-Security-Pillar': ['SEC03-BP03', 'SEC10-BP01'],
        'AWS-Account-Security-Onboarding': ['Billing, emergency, security contacts'],
        'CIS-3.0': ['1.1'],
        'ENS-RD2022': ['op.ext.7.aws.am.1']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Maintain current contact details.',
      product_uid: 'prowler',
      title: 'Maintain current contact details.',
      types: ['IAM'],
      uid: 'prowler-aws-account_maintain_current_contact_details-730335336102-ap-south-1-730335336102'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-south-1',
        data: {
          details: ''
        },
        group: {
          name: 'account'
        },
        labels: [],
        name: '730335336102',
        type: 'Other',
        uid: 'arn:aws:iam::730335336102:root'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-south-1'
    },
    remediation: {
      desc: 'Using the Billing and Cost Management console complete contact details.',
      references: [
        'No command available.',
        'https://docs.prowler.com/checks/aws/iam-policies/iam_18-maintain-contact-details#aws-console',
        'https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html'
      ]
    },
    risk_details:
      'Ensure contact email and telephone details for AWS accounts are current and map to more than one individual in your organization. An AWS account supports a number of contact details, and AWS will use these to contact the account owner if activity judged to be in breach of Acceptable Use Policy. If an AWS account is observed to be behaving in a prohibited or suspicious manner, AWS will attempt to contact the account owner by email and phone using the contact details listed. If this is unsuccessful and the account behavior needs urgent mitigation, proactive measures may be taken, including throttling of traffic between the account exhibiting suspicious behavior and the AWS API endpoints and the Internet. This will result in impaired service to and from the account in question.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message:
      'SECURITY, BILLING and OPERATIONS contacts not found or they are not different between each other and between ROOT contact.',
    metadata: {
      event_code: 'account_maintain_different_contact_details_to_security_billing_and_operations',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 3,
    severity: 'Medium',
    status: 'New',
    status_code: 'FAIL',
    status_detail:
      'SECURITY, BILLING and OPERATIONS contacts not found or they are not different between each other and between ROOT contact.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'KISA-ISMS-P-2023': ['2.1.3'],
        'KISA-ISMS-P-2023-korean': ['2.1.3']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Maintain different contact details to security, billing and operations.',
      product_uid: 'prowler',
      title: 'Maintain different contact details to security, billing and operations.',
      types: ['IAM'],
      uid: 'prowler-aws-account_maintain_different_contact_details_to_security_billing_and_operations-730335336102-ap-south-1-730335336102'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-south-1',
        data: {
          details: ''
        },
        group: {
          name: 'account'
        },
        labels: [],
        name: '730335336102',
        type: 'Other',
        uid: 'arn:aws:iam::730335336102:root'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-south-1'
    },
    remediation: {
      desc: 'Using the Billing and Cost Management console complete contact details.',
      references: [
        'https://docs.prowler.com/checks/aws/iam-policies/iam_18-maintain-contact-details#aws-console',
        'https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html'
      ]
    },
    risk_details:
      'Ensure contact email and telephone details for AWS accounts are current and map to more than one individual in your organization. An AWS account supports a number of contact details, and AWS will use these to contact the account owner if activity judged to be in breach of Acceptable Use Policy. If an AWS account is observed to be behaving in a prohibited or suspicious manner, AWS will attempt to contact the account owner by email and phone using the contact details listed. If this is unsuccessful and the account behavior needs urgent mitigation, proactive measures may be taken, including throttling of traffic between the account exhibiting suspicious behavior and the AWS API endpoints and the Internet. This will result in impaired service to and from the account in question.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message:
      'Login to the AWS Console. Choose your account name on the top right of the window -> My Account -> Alternate Contacts -> Security Section.',
    metadata: {
      event_code: 'account_security_contact_information_is_registered',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 3,
    severity: 'Medium',
    status: 'New',
    status_code: 'MANUAL',
    status_detail:
      'Login to the AWS Console. Choose your account name on the top right of the window -> My Account -> Alternate Contacts -> Security Section.',
    status_id: 1,
    unmapped: {
      related_url: '',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.2'],
        'CIS-1.5': ['1.2'],
        'AWS-Foundational-Security-Best-Practices': ['account', 'acm'],
        'KISA-ISMS-P-2023': ['2.1.3', '2.2.1'],
        'CIS-2.0': ['1.2'],
        'KISA-ISMS-P-2023-korean': ['2.1.3', '2.2.1'],
        'AWS-Well-Architected-Framework-Security-Pillar': ['SEC03-BP03', 'SEC10-BP01'],
        'AWS-Account-Security-Onboarding': ['Billing, emergency, security contacts'],
        'CIS-3.0': ['1.2'],
        'ENS-RD2022': ['op.ext.7.aws.am.1']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Ensure security contact information is registered.',
      product_uid: 'prowler',
      title: 'Ensure security contact information is registered.',
      types: ['IAM'],
      uid: 'prowler-aws-account_security_contact_information_is_registered-730335336102-ap-south-1-730335336102'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-south-1',
        data: {
          details: ''
        },
        group: {
          name: 'account'
        },
        labels: [],
        name: '730335336102',
        type: 'Other',
        uid: 'arn:aws:iam::730335336102:root'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-south-1'
    },
    remediation: {
      desc: 'Go to the My Account section and complete alternate contacts.',
      references: [
        'No command available.',
        'https://docs.prowler.com/checks/aws/iam-policies/iam_19#aws-console',
        'https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html'
      ]
    },
    risk_details:
      'AWS provides customers with the option of specifying the contact information for accounts security team. It is recommended that this information be provided. Specifying security-specific contact information will help ensure that security advisories sent by AWS reach the team in your organization that is best equipped to respond to them.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message:
      'Login to the AWS Console as root. Choose your account name on the top right of the window -> My Account -> Configure Security Challenge Questions.',
    metadata: {
      event_code: 'account_security_questions_are_registered_in_the_aws_account',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 3,
    severity: 'Medium',
    status: 'New',
    status_code: 'MANUAL',
    status_detail:
      'Login to the AWS Console as root. Choose your account name on the top right of the window -> My Account -> Configure Security Challenge Questions.',
    status_id: 1,
    unmapped: {
      related_url: '',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'CIS-1.4': ['1.3'],
        'CIS-1.5': ['1.3'],
        'KISA-ISMS-P-2023': ['2.1.3'],
        'CIS-2.0': ['1.3'],
        'KISA-ISMS-P-2023-korean': ['2.1.3'],
        'AWS-Well-Architected-Framework-Security-Pillar': ['SEC03-BP03', 'SEC10-BP01'],
        'CIS-3.0': ['1.3'],
        'ENS-RD2022': ['op.ext.7.aws.am.1']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'Ensure security questions are registered in the AWS account.',
      product_uid: 'prowler',
      title: 'Ensure security questions are registered in the AWS account.',
      types: ['IAM'],
      uid: 'prowler-aws-account_security_questions_are_registered_in_the_aws_account-730335336102-ap-south-1-730335336102'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-south-1',
        data: {
          details: ''
        },
        group: {
          name: 'account'
        },
        labels: [],
        name: '730335336102',
        type: 'Other',
        uid: 'arn:aws:iam::730335336102:root'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-south-1'
    },
    remediation: {
      desc: 'Login as root account and from My Account configure Security questions.',
      references: [
        'No command available.',
        'https://docs.prowler.com/checks/aws/iam-policies/iam_15',
        'https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-security-challenge.html'
      ]
    },
    risk_details:
      'The AWS support portal allows account owners to establish security questions that can be used to authenticate individuals calling AWS customer service for support. It is recommended that security questions be established. When creating a new AWS account a default super user is automatically created. This account is referred to as the root account. It is recommended that the use of this account be limited and highly controlled. During events in which the root password is no longer accessible or the MFA token associated with root is lost/destroyed it is possible through authentication using secret questions and associated answers to recover root login access.',
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  },
  {
    message: 'No Backup Vault exist.',
    metadata: {
      event_code: 'backup_vaults_exist',
      product: {
        name: 'Prowler',
        uid: 'prowler',
        vendor_name: 'Prowler',
        version: '5.0.5'
      },
      profiles: ['cloud', 'datetime'],
      tenant_uid: '',
      version: '1.3.0'
    },
    severity_id: 2,
    severity: 'Low',
    status: 'New',
    status_code: 'FAIL',
    status_detail: 'No Backup Vault exist.',
    status_id: 1,
    unmapped: {
      related_url: 'https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html',
      categories: [],
      depends_on: [],
      related_to: [],
      notes: '',
      compliance: {
        'KISA-ISMS-P-2023': ['2.7.1', '2.9.3'],
        'KISA-ISMS-P-2023-korean': ['2.7.1', '2.9.3'],
        'ENS-RD2022': ['mp.info.6.aws.bcku.1'],
        'AWS-Foundational-Technical-Review': ['BAR-001']
      }
    },
    activity_name: 'Create',
    activity_id: 1,
    finding_info: {
      created_time: 1735978757,
      created_time_dt: '2025-01-04T13:49:17.537690',
      desc: 'This check ensures that AWS Backup vaults exist to provide a secure and durable storage location for backup data.',
      product_uid: 'prowler',
      title: 'Ensure AWS Backup vaults exist',
      types: ['Recover', 'Resilience', 'Backup'],
      uid: 'prowler-aws-backup_vaults_exist-730335336102-ap-south-1-730335336102'
    },
    resources: [
      {
        cloud_partition: 'aws',
        region: 'ap-south-1',
        data: {
          details: ''
        },
        group: {
          name: 'backup'
        },
        labels: [],
        name: '730335336102',
        type: 'AwsBackupBackupVault',
        uid: 'arn:aws:backup:ap-south-1:730335336102:backup-vault'
      }
    ],
    category_name: 'Findings',
    category_uid: 2,
    class_name: 'Detection Finding',
    class_uid: 2004,
    cloud: {
      account: {
        name: '',
        type: 'AWS Account',
        type_id: 10,
        uid: '730335336102',
        labels: []
      },
      org: {
        name: '',
        uid: ''
      },
      provider: 'aws',
      region: 'ap-south-1'
    },
    remediation: {
      desc: 'Use AWS Backup to create backup vaults for your critical data and services.',
      references: [
        'aws backup create-backup-vault --backup-vault-name <backup_vault_name>',
        'https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html'
      ]
    },
    risk_details:
      "Without an AWS Backup vault, an organization's critical data may be at risk of being lost in the event of an accidental deletion, system failures, or natural disasters.",
    time: 1735978757,
    time_dt: '2025-01-04T13:49:17.537690',
    type_uid: 200401,
    type_name: 'Detection Finding: Create'
  }
]
