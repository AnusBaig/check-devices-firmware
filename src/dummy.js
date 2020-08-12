const userPortfolio={
  user:{
    name:"Abdullah",
  },
  products:[
    {
      name:"Amazon Dash",
      id:1
    }

  ],
  selectedProduct:null
}

const products=[

  {
    id:1,
    OTAUrl:"https://something/32de",
    name:"Amazon Dash",
    devices:[
      {
        id:'4B-DC-F8-05-6E-5F',
        version:"1.2.3",
        lastCheckInTime:'2020/08/11',
        lastUpdate:'2020/08/10',
        firmwareId:1
      },
      {
        id:'8B-DC-D8-15-6E-5F',
        version:"2.4.3",
        lastCheckInTime:'2020/08/11',
        lastUpdate:'2020/08/10',
        firmwareId:2
      },
      {
        id:'2B-KC-D8-15-65-5F',
        version:"2.4.3",
        lastCheckInTime:'2020/08/11',
        lastUpdate:'2020/08/10',
        firmwareId:2
      },
    ],
    currentFirmwareId:1,
    totalFirmwareBinaries:2
  }
  // {
  //   id:2,
  //   OTAUrl:"https://something/54hde",
  //   devicesIds:['11B-5C-F8-05-6E-5F'],
  //   currentFirmwareId:null,
  //   firmwareIds:[]
  // },
  // {
  //   id:3,
  //   OTAUrl:"https://something/672gyu",
  //   devicesIds:['98B-DF-D8-15-6E-5F'],
  //   currentFirmwareId:null,
  //   firmwareIds:[]
  // }
];

// const devices=[
//   {
//     id:'4B-DC-F8-05-6E-5F',
//     lastCheckInTime:'2020/08/11',
//     lastUpdate:'2020/08//10',
//     firmwareId:1
//   },
//   {
//     id:'8B-DC-D8-15-6E-5F',
//     lastCheckInTime:'2020/08/11',
//     lastUpdate:'2020/08//10',
//     firmwareId:2
//   }
// ];

const firmwares=[
  {
    firmwareId:1,
    version:'1.2.3',
    binary:null,
    releaseNotes:'lorem ipsum dotem',
    deviceIds:['4B-DC-F8-05-6E-5F'],
    size:'24Kb',
    createdDate:'2016/03/25',
    signed:false 
  },
  {
    firmwareId:2,
    version:'2.4.3',
    binary:null,
    releaseNotes:'lorem ipsum dotem',
    deviceIds:['8B-DC-D8-15-6E-5F'],
    size:'24Kb',
    createdDate:'2016/03/25',
    signed:false 
  }
]

export {
  products,
  userPortfolio,
  // devices,
  firmwares
}

// const devices=[
//   {
//     id:'4B-DC-F8-05-6E-5F',
//     lastCheckInTime:'2020/08/11',
//     lastUpdate:'2020/08//10',
//     firmwareId:1
//   },
// ]

// const firmwares=[
//   {
//     currentFirmwareId:1,
//     version:'1.2.3',
//     binary:null,
//     releaseNotes:'lorem ipsum dotem',
//     deviceIds:['4B-DC-F8-05-6E-5F'],
//     size:'24Kb',
//     createdDate:'2016/03/25',
//     signed:false 
//   },
//   {
//     currentFirmwareId:11,
//     version:'1.4.3',
//     binary:null,
//     releaseNotes:'lorem ipsum dotem',
//     deviceIds:[],
//     size:'24Kb',
//     createdDate:'2016/03/25',
//     signed:false 
//   },
//   {
//     currentFirmwareId:2,
//     version:'5.2.3',
//     binary:null,
//     releaseNotes:'lorem ipsum dotem',
//     deviceIds:[],
//     size:'24Kb',
//     createdDate:'2016/03/25',
//     signed:false 
//   },
//   {
//     currentFirmwareId:22,
//     version:'1.2.3',
//     binary:null,
//     releaseNotes:'lorem ipsum dotem',
//     deviceIds:[],
//     size:'24Kb',
//     createdDate:'2016/03/25',
//     signed:false 
//   },
//   {
//     currentFirmwareId:3,
//     version:'1.4.3',
//     binary:null,
//     releaseNotes:'lorem ipsum dotem',
//     deviceIds:[],
//     size:'24Kb',
//     createdDate:'2016/03/25',
//     signed:false 
//   },
//   {
//     currentFirmwareId:33,
//     version:'1.2.3',
//     binary:null,
//     releaseNotes:'lorem ipsum dotem',
//     deviceIds:[],
//     size:'24Kb',
//     createdDate:'2016/03/25',
//     signed:false 
//   }
// ]
