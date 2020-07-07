const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Request" type defines the queryable fields for every request in our data source.
  type Request {
    id: Int
    status: Int
    request_code: String
    crop: Int
    requester: String
    requester_adress: String
    requester_email: String
    service_provider: String
    service_type: String
    purpose: String
    services: String
    quantity: Int
    entity_type: String
    submition_date: String
    complete_By: String
    program: String
    country_origin: String
    country_destination: String
    icc_for_analysis: String
    icc_for_shipping: String
    treatment_required: String
    recipient_name: String
    admin_email: String
    position: String
    institution: String
    phone: String
    stree: String
    city: String
    zip_code : String
    country: String
  }

  type Entity {
    id: Int
    list_code:String
    list_name:String
    list_entry: Int
    year_list_created:String
    season_list_created:String
    germplasm_code: String
    pedigree:String
    generation:String
    seed_code:String
    package_label:String
    material_type:String
    seed_qty :Int
    seed_health_status: String
    fto_status: String
    gmo_status: String
    material_class: String
    germplasm_status: String
    germplasm_state_fixed: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "requests" query returns an array of zero or more Requests (defined above).
  type Query {
    requests: [Request]
    entity: [Entity]
  }
  
`;

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'SH Request Test',
};


const entity = [
  {
    id: 1,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 2,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 3,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 4,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 5,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 6,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 7,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 8,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 9,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 10,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 11,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 12,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 13,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 14,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 15,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 16,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 17,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 18,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
  {
    id: 19,
    list_code:"S1380",
    list_name:"2020 Purity Check",
    list_entry: 1,
    year_list_created:"2020",
    season_list_created:"C",
    germplasm_code: "M00017052",
    pedigree:"(A/B)-B-1-2-1-2",
    generation:"F6",
    seed_code:"ST-KIB-18B-23-123/150",
    package_label:"SM-1508-117",
    material_type:"Seed",
    seed_qty :18,
    seed_health_status:"New",
    fto_status:"FTO",
    gmo_status:"",
    material_class:"Inbred",
    germplasm_status:"Active",
    germplasm_state_fixed:"fixed"
  },
];


const requests = [
  {
    id: 1,
    status: 1,
    request_code: "RQ-0001",
    crop: 6,
    requester: "Costich D",
    requester_adress: "CIMMYT Adress",
    requester_email: "Email@Requester",
    service_provider: "CIMMYT Mexico Seed Health Laboratory",
    service_type: "Seed Health Analysis",
    purpose: "Field",
    services: "Seed_Shipment",
    quantity: 4,
    entity_type: "Seed",
    submition_date: "06/16/2020", 
    complete_By:"2/2/2017",
    program:"GRP",
    country_origin:"Mexico",
    country_destination:"Indonesia",
    icc_for_analysis:"R4998.91",
    icc_for_shipping:"R4998.91",
    treatment_required:"Slurry",
    recipient_name: "A. Cruz",
    admin_email: "A. Cruz@cgmail.org",
    position: "Scientist",
    institution: "INDL",
    phone: "+54 1-3835095",
    stree: "634 Pseudo Street",
    city: "Darul Aman Kabul",
    zip_code : "24634",
    country: "Indonesia"
  },
  {
    id: 2,
    status: 1,
    request_code: "RQ-0002",
    crop: 5,
    requester: "Payne T",
    requester_adress: "CIMMYT Adress",
    requester_email: "Email@Requester",
    service_provider: "CIMMYT Mexico Seed Health Laboratory",
    service_type: "Seed Health Analysis",
    purpose: "Greenhouse",
    services: "Seed_Shipment",
    quantity: 3,
    entity_type: "Seed",
    submition_date: "06/16/2020",
    complete_By:"2/2/2017",
    program:"GRP",
    country_origin:"Mexico",
    country_destination:"Iran",
    icc_for_analysis:"R4998.94",
    icc_for_shipping:"R4998.94",
    treatment_required:"Washed",
    recipient_name: "J. Aguilar",
    admin_email: "J. Aguilar@cgmail.org",
    position: "",
    institution: "IRSE",
    phone: "+54 1-5248000",
    stree: "634 Pseudo Street",
    city: "Pashad",
    zip_code : "64634",
    country: "IRan"
  },
  {
    id: 3,
    status: 2,
    request_code: "RQ-0003",
    crop: 6,
    requester: "Bañuelos O",
    requester_adress: "CIMMYT Adress",
    requester_email: "Email@Requester",
    service_provider: "CIMMYT Mexico Seed Health Laboratory",
    service_type: "Seed Health Analysis",
    purpose: "Laboratory",
    services: "Seed_Shipment",
    quantity: 4,
    entity_type: "Seed",
    submition_date: "06/16/2020", 
    complete_By:"2/2/2017",
    program:"GRP",
    country_origin:"Mexico",
    country_destination:"USA",
    icc_for_analysis:"",
    icc_for_shipping:"",
    treatment_required:"Untreated",
    recipient_name: "M. Moises",
    admin_email: "M. Moises@cgmail.org",
    position: "",
    institution: "USRY",
    phone: "+855 23-216299",
    stree: "634 Pseudo Street",
    city: "Qara-Boghe",
    zip_code : "61562",
    country: "USA"
  },
  {
    id: 4,
    status: 3,
    request_code: "RQ-0004",
    crop: 6,
    requester: "San Vicente F",
    requester_adress: "CIMMYT Adress",
    requester_email: "Email@Requester",
    service_provider: "CIMMYT Mexico Seed Health Laboratory",
    service_type: "Seed Health Analysis",
    purpose: "Field",
    services: "Seed_Shipment",
    quantity: 4,
    entity_type: "Seed",
    submition_date: "", 
    complete_By:"",
    program:"GRP",
    country_origin:"Mexico",
    country_destination:"Nigeria",
    icc_for_analysis:"M4934.17",
    icc_for_shipping:"M4934.17",
    treatment_required:"Washed",
    recipient_name: "B. S. Vivek",
    admin_email: "B. S. Vivek@cgmail.org",
    position: "Scientist",
    institution: "NILD",
    phone: "+54 1-3835095",
    stree: "634 Pseudo Street",
    city: "Zakatala-City",
    zip_code : "39689",
    country: "Nigeria"
  },
  {
    id: 5,
    status: 4,
    request_code: "RQ-0005",
    crop: 6,
    requester: "Costich D",
    requester_adress: "CIMMYT Adress",
    requester_email: "Email@Requester",
    service_provider: "CIMMYT Mexico Seed Health Laboratory",
    service_type: "Seed Health Analysis",
    purpose: "Field",
    services: "Seed_Shipment",
    quantity: 4,
    entity_type: "Seed",
    submition_date: "06/16/2020", 
    complete_By:"2/2/2017",
    program:"GRP",
    country_origin:"Mexico",
    country_destination:"Indonesia",
    icc_for_analysis:"R4998.91",
    icc_for_shipping:"R4998.91",
    treatment_required:"Slurry",
    recipient_name: "A. Cruz",
    admin_email: "A. Cruz@cgmail.org",
    position: "Scientist",
    institution: "INDL",
    phone: "+54 1-3835095",
    stree: "634 Pseudo Street",
    city: "Darul Aman Kabul",
    zip_code : "24634",
    country: "Indonesia"
  },
  {
    id: 6,
    status: 5,
    request_code: "RQ-0006",
    crop: 6,
    requester: "Costich D",
    requester_adress: "CIMMYT Adress",
    requester_email: "Email@Requester",
    service_provider: "CIMMYT Mexico Seed Health Laboratory",
    service_type: "Seed Health Analysis",
    purpose: "Field",
    services: "Seed_Shipment",
    quantity: 4,
    entity_type: "Seed",
    submition_date: "06/16/2020", 
    complete_By:"2/2/2017",
    program:"GRP",
    country_origin:"Mexico",
    country_destination:"Indonesia",
    icc_for_analysis:"R4998.91",
    icc_for_shipping:"R4998.91",
    treatment_required:"Slurry",
    recipient_name: "A. Cruz",
    admin_email: "A. Cruz@cgmail.org",
    position: "Scientist",
    institution: "INDL",
    phone: "+54 1-3835095",
    stree: "634 Pseudo Street",
    city: "Darul Aman Kabul",
    zip_code : "24634",
    country: "Indonesia"
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    requests: () => requests,
    entity: () => entity,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    mocks,
    mockEntireSchema: false,
    playground: true 
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

/* playground
{
  requests{
    status
    request_code
    crop
    requester
    requester_adress
    requester_email
    submition_date
    service_provider
  }
}
*/