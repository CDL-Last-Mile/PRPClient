export const initialPartnerState = {
  partnerName: '',
  email: '',
  active: 0,
  reportName: [
    {
      report_type_id: 1,
      active: 0,
      report_name: 'Exception Report'
    },
    {
      report_type_id: 2,
      active: 0,
      report_name: 'Scan Report'
    },
    {
      report_type_id: 3,
      active: 0,
      report_name: 'POD Report'
    },
    {
      report_type_id: 4,
      active: 0,
      report_name: '2Day Report'
    }
  ]
};

export const reportTypesTest = [
  {
    report_type_id: 1,
    active: 0,
    report_name: 'Exception Report'
  },
  {
    report_type_id: 2,
    active: 0,
    report_name: 'Scan Report'
  },
  {
    report_type_id: 3,
    active: 0,
    report_name: 'POD Report'
  }, 
  {
    report_type_id: 4,
    active: 0,
    report_name: '2Day Report'
  }
]

export const staticReports = ['SCAN REPORT', 'EXCEPTION REPORT', 'POD REPORT', '2DAY REPORT', 'CLEAR REPORT'];


export const partnersPerPage = [15, 20, 30, 40, 50];