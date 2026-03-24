/**
 * BuildingInfo.js
 * Manual lookup table for Carleton University building details.
 * Keyed by the building name as it appears in cu-buildings.geojson.
 * Add or edit entries here to update what appears in the info popup.
 */
var buildingInfo = {

    "Nideyinàn Centre": {
        abbr:        "UC",
        description: "The Nideyinàn Centre/University Centre is the social hub of campus. Houses student services, dining, CUSA, a food court, and event spaces.",
        departments: ["CUSA", "Student Experience Office", "Career Services"],
        features:    ["Food Court", "Tim Hortons", "Starbucks", "Study Spaces", "Retail"],
        website:     "https://carleton.ca/campus/buildings/nideyinan/"
    },

    "Steacie Building": {
        abbr:        "SC",
        description: "Home to the Faculty of Science, including chemistry and biology labs and lecture halls.",
        departments: ["Chemistry", "Biology"],
        features:    ["Laboratories", "Lecture Halls"],
        website:     "https://carleton.ca/campus/buildings/steacie-building/"
    },

    "Health Sciences Building": {
        abbr:        "HSB",
        description: "Houses health-related programs and the campus Health and Counselling Services centre.",
        departments: ["Health Sciences", "Neuroscience"],
        features:    ["Health & Counselling Services", "Laboratories"],
        website:     "https://carleton.ca/campus/buildings/health-sciences-building/"
    },

    "Herzberg Laboratories": {
        abbr:        "HP",
        description: "A major science and engineering facility hosting physics, chemistry, and computer science departments.",
        departments: ["Physics", "Computer Science", "Chemistry"],
        features:    ["Laboratories", "Lecture Halls", "Computer Labs"],
        website:     "https://carleton.ca/campus/buildings/herzberg-laboratories/"
    },

    "Richcraft Hall": {
        abbr:        "RH",
        description: "A modern building home to the Sprott School of Business and the Faculty of Public Affairs.",
        departments: ["Sprott School of Business", "Public Affairs"],
        features:    ["Lecture Halls", "Study Spaces", "Event Spaces"],
        website:     "https://carleton.ca/campus/buildings/richcraft-hall/"
    },

    "Paterson Hall": {
        abbr:        "PA",
        description: "Houses humanities and social sciences programs including the School of Linguistics and Language Studies.",
        departments: ["Linguistics", "Philosophy", "Religion"],
        features:    ["Lecture Halls", "Seminar Rooms"],
        website:     "https://carleton.ca/campus/buildings/paterson-hall/"
    },

    "Southam Hall": {
        abbr:        "SA",
        description: "Home to Carleton's journalism school and the School of Canadian Studies.",
        departments: ["Journalism", "Canadian Studies"],
        features:    ["Lecture Halls", "Media Labs", "TV Studio"],
        website:     "https://carleton.ca/campus/buildings/southam-hall/"
    },

    "Mackenzie Building": {
        abbr:        "ME",
        description: "The primary engineering building, housing multiple engineering disciplines and design labs.",
        departments: ["Civil Engineering", "Mechanical Engineering", "Aerospace Engineering", "Environmental Engineering"],
        features:    ["Design Labs", "Lecture Halls", "Wind Tunnel"],
        website:     "https://carleton.ca/campus/buildings/mackenzie-engineering-building/"
    },

    "The Minto Centre for Advanced Studies in Engineering": {
        abbr:        "MC",
        description: "Houses electrical and systems engineering, as well as the Technology Innovation Management program.",
        departments: ["Electrical Engineering", "Systems and Computer Engineering", "TIM Program"],
        features:    ["Labs", "Lecture Halls", "Makerspaces"],
        website:     "https://carleton.ca/campus/buildings/minto-case/"
    },

    "Loeb Building": {
        abbr:        "LB",
        description: "A large multi-faculty building housing arts, social sciences, and public affairs programs with numerous lecture halls.",
        departments: ["Political Science", "Economics", "Psychology", "Sociology & Anthropology"],
        features:    ["Lecture Halls", "Seminar Rooms", "Study Spaces"],
        website:     "https://carleton.ca/campus/buildings/loeb-building/"
    },

    "Dunton Tower": {
        abbr:        "DT",
        description: "One of Carleton's most recognizable buildings, this high-rise tower houses social science and humanities departments.",
        departments: ["History", "Law", "English", "Philosophy"],
        features:    ["Offices", "Seminar Rooms", "Faculty Suites"],
        website:     "https://carleton.ca/campus/buildings/dunton-tower/"
    },

    "Tory Building": {
        abbr:        "TB",
        description: "Connected to Dunton Tower, Tory Building houses social sciences departments and the School of Public Policy.",
        departments: ["Political Science", "Economics", "Public Policy"],
        features:    ["Lecture Halls", "Seminar Rooms", "Offices"],
        website:     "https://carleton.ca/campus/buildings/tory-building/"
    },

    "Canal Building": {
        abbr:        "CB",
        description: "Located along the canal, this building houses social sciences and humanities departments.",
        departments: ["Sociology", "Philosophy", "Religion"],
        features:    ["Seminar Rooms", "Lecture Halls"],
        website:     "https://carleton.ca/campus/buildings/canal-building/"
    },

    "Nicol Building": {
        abbr:        "NI",
        description: "Houses computer science programs, labs, and the School of Information Technology.",
        departments: ["Computer Science", "Information Technology"],
        features:    ["Computer Labs", "Lecture Halls"],
        website:     "https://carleton.ca/campus/buildings/nicol-building/"
    },

    "Nesbitt Building": {
        abbr:        "NB",
        description: "Houses biology and biochemistry research labs and faculty offices.",
        departments: ["Biology", "Biochemistry"],
        features:    ["Research Laboratories", "Faculty Offices"],
        website:     "https://carleton.ca/campus/buildings/h-h-j-nesbitt-biology-building/"
    },

    "Social Sciences Research Building": {
        abbr:        "SSRB",
        description: "Dedicated research facility supporting social science faculty and graduate student research activities.",
        departments: ["Various Social Sciences"],
        features:    ["Research Offices", "Graduate Workspaces"],
        website:     "https://carleton.ca/campus/buildings/social-sciences-research-building/"
    },

    "Human Computer Interaction Building": {
        abbr:        "HCI",
        description: "Houses the Human-Computer Interaction program and associated research labs focusing on user experience and interface design.",
        departments: ["Human-Computer Interaction", "Cognitive Science"],
        features:    ["Research Labs", "Usability Testing Rooms"],
        website:     "https://carleton.ca/campus/buildings/human-computer-interaction-hci/"
    },

    "Visualization & Simulation Building": {
        abbr:        "VSB",
        description: "A research facility housing advanced visualization, simulation, and immersive media labs.",
        departments: ["Computer Science", "Systems Engineering"],
        features:    ["Simulation Labs", "VR/AR Research Spaces"],
        website:     "https://carleton.ca/campus/buildings/visualization-and-simulation-building/"
    },

    "Advanced Research and Innovation in Smart Environments (ARISE) Building": {
        abbr:        "ARISE",
        description: "A state-of-the-art research facility focused on smart environments, IoT, and applied engineering innovation.",
        departments: ["Systems and Computer Engineering", "Electrical Engineering"],
        features:    ["Research Labs", "Innovation Spaces", "Collaboration Areas"],
        website:     "https://carleton.ca/campus/buildings/arise-building/"
    },

    "Engineering Design Center": {
        abbr:        "EDC",
        description: "A dedicated space for engineering design projects, prototyping, and hands-on learning.",
        departments: ["Engineering"],
        features:    ["Fabrication Labs", "Prototyping Equipment", "Workshop Spaces"],
        website:     "https://carleton.ca/campus/buildings/"
    },

    "St. Patrick's Building": {
        abbr:        "SP",
        description: "Houses the Institute of Interdisciplinary Studies and various arts and humanities programs.",
        departments: ["Interdisciplinary Studies", "Women's and Gender Studies"],
        features:    ["Classrooms", "Faculty Offices"],
        website:     "https://carleton.ca/campus/buildings/st-patricks-building/"
    },

    "Architecture Building": {
        abbr:        "AA",
        description: "Houses the Azrieli School of Architecture and Urbanism with design studios and workshop spaces.",
        departments: ["Azrieli School of Architecture & Urbanism"],
        features:    ["Design Studios", "Fabrication Workshop", "Lecture Halls"],
        website:     "https://carleton.ca/campus/buildings/architecture-building/"
    },

    "Azrieli Theatre": {
        abbr:        "ATH",
        description: "A performance venue used for student productions, lectures, and public events.",
        departments: ["Azrieli School of Architecture & Urbanism"],
        features:    ["Theatre", "Performance Space"],
        website:     "https://carleton.ca/campus/buildings/azrieli-theatre/"
    },

    "Azrieli Pavilion": {
        abbr:        "AP",
        description: "Part of the Azrieli complex, home to the to the newly named David Azrieli Institute for Graduate Studies in Architecture and Bachelor of Information Technology.",
        departments: ["Azrieli School of Architecture & Urbanism", "Bachelor of Information Technology"],
        features:    ["Design Studios", "Critique Spaces", "Exhibition Space"],
        website:     "https://carleton.ca/campus/buildings/azrieli-pavilion/"
    },

    "MacOdrum Library": {
        abbr:        "LIB",
        description: "Carleton's main library. Offers extensive collections, study spaces, research services, and a Starbucks.",
        departments: ["Carleton University Library"],
        features:    ["Study Spaces", "Research Services", "Starbucks", "Print & Scan", "Collaboration Rooms"],
        website:     "https://carleton.ca/campus/buildings/macodrum-library/"
    },

    "Carleton Technology & Training Centre": {
        abbr:        "CTTC",
        description: "A technology and professional training facility supporting continuing education and industry partnerships.",
        departments: ["Continuing Education", "Professional Development"],
        features:    ["Training Rooms", "Computer Labs", "Conference Facilities"],
        website:     "https://carleton.ca/campus/buildings/carleton-technology-and-training-centre/"
    },

    "Fieldhouse": {
        abbr:        "FH",
        description: "Carleton's main indoor athletics facility featuring a large field house floor, courts, and fitness spaces.",
        departments: ["Carleton Athletics"],
        features:    ["Basketball Courts", "Volleyball Courts", "Indoor Track", "Fitness Centre"],
        website:     "https://carleton.ca/campus/buildings/fieldhouse/"
    },

    "Alumni Hall": {
        abbr:        "AH",
        description: "A multi-use events and athletics facility. Home to Carleton Ravens basketball games.",
        departments: ["Carleton Athletics", "Alumni Relations"],
        features:    ["Arena", "Event Space", "Gymnasium"],
        website:     "https://carleton.ca/campus/buildings/"
    },

    "Athletics Building": {
        abbr:        "AB",
        description: "Administrative and support hub for Carleton's varsity athletics programs and recreational services.",
        departments: ["Carleton Athletics"],
        features:    ["Athletics Offices", "Fitness Facilities"],
        website:     "https://carleton.ca/campus/buildings/athletics-physical-recreation-centre/"
    },

    "Carleton Ice House": {
        abbr:        "IH",
        description: "An ice skating facility used for Carleton Ravens hockey and public skating programs.",
        departments: ["Carleton Athletics"],
        features:    ["Ice Rink", "Change Rooms", "Spectator Seating"],
        website:     "https://carleton.ca/campus/buildings/ice-house/"
    },

    "Norm Fenn Gym": {
        abbr:        "NFG",
        description: "A gymnasium facility named after Norm Fenn, supporting intramural and recreational sports programs.",
        departments: ["Carleton Athletics"],
        features:    ["Gymnasium", "Courts", "Recreational Space"],
        website:     "https://carleton.ca/campus/buildings/"
    },

    "Tennis Centre": {
        abbr:        "TC",
        description: "Indoor tennis facility available to students, faculty, and the public for recreational and competitive play.",
        departments: ["Carleton Athletics"],
        features:    ["Indoor Tennis Courts", "Equipment Rental"],
        website:     "https://carleton.ca/campus/buildings/"
    },

    /*"Nideyinàn Centre": {
        abbr:        "NDN",
        description: "Previously known as the Aboriginal Enrichment Centre, Nideyinàn is an inclusive gathering space providing support, programming, and community for Indigenous students.",
        departments: ["Indigenous Initiatives"],
        features:    ["Gathering Space", "Cultural Programming", "Student Support", "Lounge"],
        website:     "https://carleton.ca/campus/buildings/nideyinan/"
    },*/

    "Pigiarvik": {
        abbr:        "PIG",
        description: "An Inuit-inspired student gathering and support space serving Inuit and Arctic-region students at Carleton.",
        departments: ["Indigenous Initiatives"],
        features:    ["Gathering Space", "Student Support", "Cultural Space"],
        website:     "https://carleton.ca/campus/buildings/pigiarvik-%e1%90%b1%e1%92%8b%e1%90%8a%e1%95%90%e1%95%95%e1%92%83/"
    },

    "Teraanga Commons": {
        abbr:        "TRC",
        description: "A welcoming student commons space supporting community building, events, and student life programming.",
        departments: ["Student Affairs"],
        features:    ["Common Lounge", "Event Space", "Study Areas"],
        website:     "https://carleton.ca/campus/buildings/teraanga-commons/"
    },

    "Colonel By Child Care Centre": {
        abbr:        "CBCC",
        description: "An on-campus childcare facility providing care for children of Carleton students, staff, and faculty.",
        departments: ["Child Care Services"],
        features:    ["Licensed Child Care", "Play Areas"],
        website:     "https://carleton.ca/campus/buildings/andrew-fleck-childcare-centre/"
    },

    "Dundas House": {
        abbr:        "DUH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/stormont-dundas-house/"
    },

    "Frontenac House": {
        abbr:        "FRH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/frontenac-house/"
    },

    "Glengarry House": {
        abbr:        "GH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/glengarry-house/"
    },

    "Grenville House": {
        abbr:        "GRH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/grenville-russell-house/"
    },

    "Lanark House": {
        abbr:        "LAH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/lanark-house/"
    },

    "Leeds House": {
        abbr:        "LEH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/leeds-house/"
    },

    "Lennox and Addington House": {
        abbr:        "LAD",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/"
    },

    "Prescott House": {
        abbr:        "PRH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/prescott-house/"
    },

    "Renfrew House": {
        abbr:        "REH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/renfrew-house/"
    },

    "Rideau House": {
        abbr:        "RDH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/lanark-house-2/"
    },

    "Russell House": {
        abbr:        "RUH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/grenville-russell-house/"
    },

    "Stormont House": {
        abbr:        "STH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/campus/buildings/stormont-dundas-house/"
    },

    "National Wildlife Research Centre": {
        abbr:        "NWRC",
        description: "A federal research facility on the Carleton campus operated by Environment and Climate Change Canada, focusing on wildlife toxicology and environmental research.",
        departments: ["Environment and Climate Change Canada"],
        features:    ["Research Laboratories", "Federal Offices"],
        website:     "https://carleton.ca/campus/buildings/national-wildlife-research-centre/"
    },

    "Maintenance Building": {
        abbr:        "MB",
        description: "Facilities and operations building supporting campus maintenance, infrastructure, and physical plant services.",
        departments: ["Facilities Management & Planning"],
        features:    ["Operations Centre", "Equipment Storage"],
        website:     "https://carleton.ca/campus/buildings/maintenance-building/"
    },

    "Parking Garage (P18)": {
        abbr:        "P18",
        description: "A multi-level parking structure serving students, staff, and visitors to the Carleton campus.",
        departments: ["Parking & Transportation Services"],
        features:    ["Multi-Level Parking", "Accessible Spaces"],
        website:     "https://carleton.ca/campus/buildings/"
    },

    "Walkway": {
        abbr:        "",
        description: "An enclosed walkway connecting campus buildings, part of Carleton's indoor tunnel network.",
        departments: [],
        features:    ["Indoor Walkway", "Tunnel Access"],
        website:     "https://carleton.ca/campus/buildings/"
    }

};