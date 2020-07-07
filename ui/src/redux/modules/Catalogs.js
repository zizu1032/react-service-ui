import axios from 'utils/axios';

export const initialState = {
  data: {
    crop: [],
    service_type: [],
    service: [],
    entity_type: [],
    requestor: [],
    service_provider: [],
    request_status: [],
  },
  isLoading: false,
  error: null
};

export const START_CATALOGS = "Catalogs/START_CATALOGS";
export const LOAD_CATALOGS = "Catalogs/LOAD_CATALOGS";
export const CATALOGS_SUCCESS = "Catalogs/CATALOGS_SUCCESS";

export const startCatalogs = () => ({
  type: START_CATALOGS
});

export const loadCatalogs = (payload) => ({
  type: LOAD_CATALOGS,
  payload
});

export const catalogSuccess = () => ({
  type: CATALOGS_SUCCESS
});

export const getCatalogs = () => async dispatch => {
  dispatch(startCatalogs());

  let catalogos = {
    data: {}
  }

  await axios.get('/crop', 
  { 
    params: 
    { 
      name:'', 
      abbrev:'', 
      page_size:10, 
      page:0
    } 
  })
  .then(response => {
    let { data } = response.data.get_crop.data.crop
    catalogos.data = {
        ...initialState.data,
        crop: [...data]
    }
  })
  .catch(err => {
    // dispatch(requestFailure());
    console.log('crop')
    console.log(err.message)
    throw new Error(err.message)
  });

  await axios.get('/request-status', 
  { 
    params: 
    { 
      value:'', 
      description: '', 
      page:0, 
      page_size:10 
    } 
  })
  .then(response => {
    let { data } = response.data.get_request_status.data.request_status 
    catalogos.data = {
        ...catalogos.data,
        request_status: [...data]
    }
  })
  .catch(err => {
    console.log('request-status')
    console.log(err.message)
    throw new Error(err.message)
  });

  // await axios.get('/service', { params : { abbrev:'', name:'', display_name:'', description:'', service_status:'', page:0, page_size:10 } }).then(response => {
  //   let { data } = response.data.get_service.data.service 
  //   catalogos = {
  //     data: {
  //       ...catalogos.data,
  //       service: [...data]
  //     }
  //   }
  // });

  await axios.get('/service-provider', { params : { abbrev:'', name:'', display_name:'', page:0, page_size:10 } }).then(response => {
    let { data } = response.data.get_service_provider.data.service_provider;
      catalogos.data = {
          ...catalogos.data,
          service_provider: [...data]
      }
    })
    .catch(err => {
      console.log('service-provider')
      console.log(err.message)
      throw new Error(err.message)
    });

  // await axios.get('/entity-type', { params : { name:'', abbrev:'', page: 0, page_size:10 } }).then(response => {
  //   let { data } = response.data.get_entity_type.data.entity_type 
  //   catalogos.data = {
  //       ...catalogos.data,
  //       entity_type: [...data]
  //   }
  // });

  await axios.get('/requestor', 
    { 
      params: 
      { 
        is_person:-1, 
        user_type:0, 
        status:0, 
        last_name:'', 
        first_name:'', 
        middle_name:'', 
        display_name:'', 
        page: 0, 
        page_size:10 
      }
    })
    .then(response => {
      let { data } = response.data.get_requestor.data.requestor
      catalogos.data = {
          //FIXME: Tipo de dato que espera recibir es un arreglo
          ...catalogos.data,
          requestor: {...data}
      }
    })
    .catch(err => {
      console.log('requestor')
      console.log(err.message)
      throw new Error(err.message)
    });

    dispatch(loadCatalogs(catalogos));
    dispatch(catalogSuccess());
};

export default function RequestReducer(state = initialState, { type, payload }) {
  switch (type) {
    case START_CATALOGS:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_CATALOGS:
      return {
        ...state,
        data: payload.data,
      };
    case CATALOGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
