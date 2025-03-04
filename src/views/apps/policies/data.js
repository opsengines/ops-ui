export const layout = [
  {
    policyCategory: 'Git Posture',
    totalEnabled: 30,
    policies: [
      {
        policyName: 'Unreviewed Code Changes',
        policyId: 1,
        enabled: true,
        severity: 4,
        configurations: [
          {
            configId: 1,
            label: 'Reviews Required',
            type: 'text',
            tooltip: 'Enter The Amount Of Reviews Required',
            value: ''
          },
          {
            configId: 2,
            label: 'File Changes',
            type: 'text',
            tooltip: 'Define the process that should occur in the event of file changes',
            value: ''
          },
          {
            configId: 3,
            label: 'Ignore Older Code',
            type: 'text',
            tooltip: 'Wethere Older Code Should Be Ignored',
            value: ''
          },
          {
            configId: 4,
            label: 'Business Priority',
            type: 'text',
            tooltip: 'Set The Priority Level As Per Business Requirements',
            value: ''
          },
          {
            configId: 5,
            label: 'Reviews Required',
            type: 'text',
            tooltip: 'Enter The Amount Of Reviews Required',
            value: ''
          }
        ]
      },
      {
        policyName: 'Veteran Developer Review Required',
        policyId: 2,
        enabled: false,
        severity: 3,
        configurations: [
          {
            configId: 1,
            label: 'Infrequent Developer',
            type: 'text',
            tooltip: 'Specify Number Of Pushes That Determines An Infrequent Developer',
            value: ''
          },
          {
            configId: 2,
            label: 'Veteran Reviewer',
            type: 'text',
            tooltip: 'Define The Numer Of Reviews That Determines A Veteran reviewer',
            value: ''
          },
          {
            configId: 3,
            label: 'Minimum Code Pushes',
            type: 'text',
            tooltip: 'Define the number of code pushed that determines a veteran reviewer',
            value: ''
          },
          {
            configId: 4,
            label: 'Ignore Older Code Changes',
            type: 'text',
            tooltip: 'Defines Max No. of months to find changes to evaluate',
            value: ''
          },
          {
            configId: 5,
            label: 'Business Priority',
            type: 'text',
            tooltip: 'Ignore Repos That Has Issues With Business Priority Less Than',
            value: ''
          }
        ]
      },
      {
        policyName: 'Branch Protection Not Enforced',
        policyId: 3,
        enabled: true,
        severity: 2,
        configurations: [
          {
            configId: 1,
            label: 'Repo Visibility',
            type: 'text',
            tooltip: 'Choose ifpolicy applies to private, public or all repos',
            value: ''
          },
          {
            configId: 2,
            label: 'Business Priority',
            type: 'text',
            tooltip: 'Ignore Known Issues If Business Priority Is Less Than',
            value: ''
          },
          {
            configId: 3,
            label: 'Bypass Code Revies',
            type: 'text',
            tooltip: 'Choose Developers That Can Bypass Code Reviews',
            value: ''
          }
        ]
      }
    ]
  }
]
