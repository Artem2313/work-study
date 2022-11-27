const initial = {
  activeCompanyType: '',
  activeElectricianType: '',
  address: '',
  cardCreationDate: `${new Date().toISOString()}`,
  cardOwner: {
    id: null,
    name: '',
    surname: '',
  },
  company: {
    address: null,
    email: null,
    id: null,
    name: '',
    phone: '',
    placeId: '',
  },
  electricianAssignmentDate: '',
  externalElectrician: {
    email: null,
    name: '',
    phone: null,
    surname: '',
    timezone: '',
    workingHours: '',
  },
  facilityManager: {
    email: null,
    name: '',
    phone: null,
    surname: '',
    timezone: '',
    workingHours: '',
  },
  internalElectrician: {
    email: null,
    id: null,
    name: '',
    phone: null,
    surname: '',
    timezone: '',
    workingHours: null,
  },
  placeId: '',
  physicalWorld: '',
  privatePerson: {
    address: null,
    email: null,
    id: null,
    name: '',
    phone: null,
    surname: '',
    placeId: '',
  },
  savedComments: [],
};

const changeToNull = (obj, prop) => {
  for (const key in obj) {
    if (key === prop) {
      if (obj[key] === '') {
        obj[key] = null;
      }
    }
    if (typeof obj[key] === 'object') {
      changeToNull(obj[key], prop);
    }
  }
};

changeToNull(initial, 'phone');
console.log(initial);