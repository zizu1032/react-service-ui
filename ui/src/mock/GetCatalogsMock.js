import mock from 'utils/mock';

// Returns a failed promise with Error('Network Error');
// mock.onGet('/crop').networkError();

mock.onGet('/crop', {
    params: {
        name: '',
        abbrev: '',
        page_size: 10,
        page: 0
    }
}).reply(200, {
    "get_crop": {
        "data": {
            "count": 3,
            "crop": {
                "data": [{
                        "id": 4,
                        "abbrev": "RICE",
                        "name": "rice"
                    },
                    {
                        "id": 5,
                        "abbrev": "WHEAT",
                        "name": "wheat"
                    },
                    {
                        "id": 6,
                        "abbrev": "MAIZE",
                        "name": "maize"
                    }
                ]
            }
        }
    }
});

mock.onGet('/request-status', {
    params: {
        value: '',
        description: '',
        page: 0,
        page_size: 10
    }
}).reply(200, {
    "get_request_status": {
        "data": {
            "count": 5,
            "request_status": {
                "data": [{
                        "id": 1,
                        "value": "New",
                        "description": "New request"
                    },
                    {
                        "id": 2,
                        "value": "Rejected",
                        "description": "Rejected request"
                    },
                    {
                        "id": 3,
                        "value": "On Hold",
                        "description": "Request on hold"
                    },
                    {
                        "id": 4,
                        "value": "Approved",
                        "description": "Request approved"
                    },
                    {
                        "id": 5,
                        "value": "In Batch",
                        "description": "Request in batch"
                    }
                ]
            }
        }
    }
});

mock.onGet('/requestor', {
    params: {
        is_person: -1,
        user_type: 0,
        status: 0,
        last_name: '',
        first_name: '',
        middle_name: '',
        display_name: '',
        page: 0,
        page_size: 10
    }
}).reply(200, {
    "get_requestor": {
        "data": {
            "count": 1,
            "requestor": {
                "data": {
                    "id": 1,
                    "user_type": 0,
                    "status": 1,
                    "last_name": "Irri",
                    "first_name": "Bims",
                    "middle_name": null,
                    "display_name": "Irri, Bims",
                    "is_person": 0
                }
            }
        }
    }
});

mock.onGet('/service-provider', { params : { abbrev:'', name:'', display_name:'', page:0, page_size:10 }}).reply(200, {
    "get_service_provider": {
        "data": {
            "count": 12,
            "service_provider": {
                "data": [
                    {
                        "id": 132,
                        "abbrev": "ASTEC",
                        "name": "Abiotic Stress Tolerance Evaluation Center",
                        "display_name": "ASTEC: Abiotic Stress Tolerance Evaluation Center"
                    },
                    {
                        "id": 133,
                        "abbrev": "BSREC",
                        "name": "Biotic Stress Resistance Evaluation Center",
                        "display_name": "BSREC: Biotic Stress Resistance Evaluation Center"
                    },
                    {
                        "id": 160,
                        "abbrev": "RICE",
                        "name": "Rice Breeding",
                        "display_name": "Rice Breeding"
                    },
                    {
                        "id": 161,
                        "abbrev": "BRD",
                        "name": "Breeding Subunit",
                        "display_name": "Breeding Subunit"
                    },
                    {
                        "id": 162,
                        "abbrev": "BREEDING",
                        "name": "Breeding Unit",
                        "display_name": "Breeding Unit"
                    },
                    {
                        "id": 164,
                        "abbrev": "BRECC",
                        "name": "Breeder Seeds Production",
                        "display_name": "Breeder Seeds Production"
                    },
                    {
                        "id": 166,
                        "abbrev": "SP",
                        "name": "Service Providers",
                        "display_name": "Service Providers"
                    },
                    {
                        "id": 167,
                        "abbrev": "HBRD",
                        "name": "Hybridization",
                        "display_name": "Hybridization"
                    },
                    {
                        "id": 168,
                        "abbrev": "GSL",
                        "name": "GSL",
                        "display_name": "Genotyping Services Laboratory"
                    },
                    {
                        "id": 169,
                        "abbrev": "SHU",
                        "name": "Seed Health Unit",
                        "display_name": "Seed Health Unit"
                    }
                ]
            }
        }
    }
});
