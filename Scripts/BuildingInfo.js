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
        website:     "https://carleton.ca/studentservices/"
    },

    "Steacie Building": {
        abbr:        "SC",
        description: "Home to the Faculty of Science, including chemistry and biology labs and lecture halls.",
        departments: ["Chemistry", "Biology"],
        features:    ["Laboratories", "Lecture Halls"],
        website:     "https://carleton.ca/science/"
    },

    "Health Sciences Building": {
        abbr:        "HSB",
        description: "Houses health-related programs and the campus Health and Counselling Services centre.",
        departments: ["Health Sciences", "Neuroscience"],
        features:    ["Health & Counselling Services", "Laboratories"],
        website:     "https://carleton.ca/health/"
    },

    "Herzberg Laboratories": {
        abbr:        "HP",
        description: "A major science and engineering facility hosting physics, chemistry, and computer science departments.",
        departments: ["Physics", "Computer Science", "Chemistry"],
        features:    ["Laboratories", "Lecture Halls", "Computer Labs"],
        website:     "https://carleton.ca/science/"
    },

    "Richcraft Hall": {
        abbr:        "RH",
        description: "A modern building home to the Sprott School of Business and the Faculty of Public Affairs.",
        departments: ["Sprott School of Business", "Public Affairs"],
        features:    ["Lecture Halls", "Study Spaces", "Event Spaces"],
        website:     "https://sprott.carleton.ca/"
    },

    "Paterson Hall": {
        abbr:        "PA",
        description: "Houses humanities and social sciences programs including the School of Linguistics and Language Studies.",
        departments: ["Linguistics", "Philosophy", "Religion"],
        features:    ["Lecture Halls", "Seminar Rooms"],
        website:     "https://carleton.ca/fass/"
    },

    "Southam Hall": {
        abbr:        "SA",
        description: "Home to Carleton's journalism school and the School of Canadian Studies.",
        departments: ["Journalism", "Canadian Studies"],
        features:    ["Lecture Halls", "Media Labs", "TV Studio"],
        website:     "https://carleton.ca/sjc/"
    },

    "Mackenzie Building": {
        abbr:        "ME",
        description: "The primary engineering building, housing multiple engineering disciplines and design labs.",
        departments: ["Civil Engineering", "Mechanical Engineering", "Aerospace Engineering", "Environmental Engineering"],
        features:    ["Design Labs", "Lecture Halls", "Wind Tunnel"],
        website:     "https://carleton.ca/engineering/"
    },

    "The Minto Centre for Advanced Studies in Engineering": {
        abbr:        "MC",
        description: "Houses electrical and systems engineering, as well as the Technology Innovation Management program.",
        departments: ["Electrical Engineering", "Systems and Computer Engineering", "TIM Program"],
        features:    ["Labs", "Lecture Halls", "Makerspaces"],
        website:     "https://carleton.ca/engineering/"
    },

    "Loeb Building": {
        abbr:        "LB",
        description: "A large multi-faculty building housing arts, social sciences, and public affairs programs with numerous lecture halls.",
        departments: ["Political Science", "Economics", "Psychology", "Sociology & Anthropology"],
        features:    ["Lecture Halls", "Seminar Rooms", "Study Spaces"],
        website:     "https://carleton.ca/fass/"
    },

    "Dunton Tower": {
        abbr:        "DT",
        description: "One of Carleton's most recognizable buildings, this high-rise tower houses social science and humanities departments.",
        departments: ["History", "Law", "English", "Philosophy"],
        features:    ["Offices", "Seminar Rooms", "Faculty Suites"],
        website:     "https://carleton.ca/fass/"
    },

    "Tory Building": {
        abbr:        "TB",
        description: "Connected to Dunton Tower, Tory Building houses social sciences departments and the School of Public Policy.",
        departments: ["Political Science", "Economics", "Public Policy"],
        features:    ["Lecture Halls", "Seminar Rooms", "Offices"],
        website:     "https://carleton.ca/fass/"
    },

    "Canal Building": {
        abbr:        "CB",
        description: "Located along the canal, this building houses social sciences and humanities departments.",
        departments: ["Sociology", "Philosophy", "Religion"],
        features:    ["Seminar Rooms", "Lecture Halls"],
        website:     "https://carleton.ca/fass/"
    },

    "Nicol Building": {
        abbr:        "NI",
        description: "Houses computer science programs, labs, and the School of Information Technology.",
        departments: ["Computer Science", "Information Technology"],
        features:    ["Computer Labs", "Lecture Halls"],
        website:     "https://carleton.ca/scs/"
    },

    "Nesbitt Building": {
        abbr:        "NB",
        description: "Houses biology and biochemistry research labs and faculty offices.",
        departments: ["Biology", "Biochemistry"],
        features:    ["Research Laboratories", "Faculty Offices"],
        website:     "https://carleton.ca/science/"
    },

    "Social Sciences Research Building": {
        abbr:        "SSRB",
        description: "Dedicated research facility supporting social science faculty and graduate student research activities.",
        departments: ["Various Social Sciences"],
        features:    ["Research Offices", "Graduate Workspaces"],
        website:     "https://carleton.ca/fass/"
    },

    "Human Computer Interaction Building": {
        abbr:        "HCI",
        description: "Houses the Human-Computer Interaction program and associated research labs focusing on user experience and interface design.",
        departments: ["Human-Computer Interaction", "Cognitive Science"],
        features:    ["Research Labs", "Usability Testing Rooms"],
        website:     "https://carleton.ca/scs/"
    },

    "Visualization & Simulation Building": {
        abbr:        "VSB",
        description: "A research facility housing advanced visualization, simulation, and immersive media labs.",
        departments: ["Computer Science", "Systems Engineering"],
        features:    ["Simulation Labs", "VR/AR Research Spaces"],
        website:     "https://carleton.ca/engineering/"
    },

    "Advanced Research and Innovation in Smart Environments (ARISE) Building": {
        abbr:        "ARISE",
        description: "A state-of-the-art research facility focused on smart environments, IoT, and applied engineering innovation.",
        departments: ["Systems and Computer Engineering", "Electrical Engineering"],
        features:    ["Research Labs", "Innovation Spaces", "Collaboration Areas"],
        website:     "https://carleton.ca/engineering/"
    },

    "Engineering Design Center": {
        abbr:        "EDC",
        description: "A dedicated space for engineering design projects, prototyping, and hands-on learning.",
        departments: ["Engineering"],
        features:    ["Fabrication Labs", "Prototyping Equipment", "Workshop Spaces"],
        website:     "https://carleton.ca/engineering/"
    },

    "St. Patrick's Building": {
        abbr:        "SP",
        description: "Houses the Institute of Interdisciplinary Studies and various arts and humanities programs.",
        departments: ["Interdisciplinary Studies", "Women's and Gender Studies"],
        features:    ["Classrooms", "Faculty Offices"],
        website:     "https://carleton.ca/iis/"
    },

    "Architecture Building": {
        abbr:        "AA",
        description: "Houses the Azrieli School of Architecture and Urbanism with design studios and workshop spaces.",
        departments: ["Azrieli School of Architecture & Urbanism"],
        features:    ["Design Studios", "Fabrication Workshop", "Lecture Halls"],
        website:     "https://carleton.ca/architecture/"
    },

    "Azrieli Theatre": {
        abbr:        "ATH",
        description: "A performance venue used for student productions, lectures, and public events.",
        departments: ["Azrieli School of Architecture & Urbanism"],
        features:    ["Theatre", "Performance Space"],
        website:     "https://carleton.ca/architecture/"
    },

    "Azrieli Pavilion": {
        abbr:        "AP",
        description: "Part of the Azrieli complex, housing architecture studios and design critique spaces.",
        departments: ["Azrieli School of Architecture & Urbanism"],
        features:    ["Design Studios", "Critique Spaces", "Exhibition Space"],
        website:     "https://carleton.ca/architecture/"
    },

    "MacOdrum Library": {
        abbr:        "LIB",
        description: "Carleton's main library. Offers extensive collections, study spaces, research services, and a Starbucks.",
        departments: ["Carleton University Library"],
        features:    ["Study Spaces", "Research Services", "Starbucks", "Print & Scan", "Collaboration Rooms"],
        website:     "https://library.carleton.ca/"
    },

    "Carleton Technology & Training Centre": {
        abbr:        "CTTC",
        description: "A technology and professional training facility supporting continuing education and industry partnerships.",
        departments: ["Continuing Education", "Professional Development"],
        features:    ["Training Rooms", "Computer Labs", "Conference Facilities"],
        website:     "https://carleton.ca/"
    },

    "Fieldhouse": {
        abbr:        "FH",
        description: "Carleton's main indoor athletics facility featuring a large field house floor, courts, and fitness spaces.",
        departments: ["Carleton Athletics"],
        features:    ["Basketball Courts", "Volleyball Courts", "Indoor Track", "Fitness Centre"],
        website:     "https://athletics.carleton.ca/"
    },

    "Alumni Hall": {
        abbr:        "AH",
        description: "A multi-use events and athletics facility. Home to Carleton Ravens basketball games.",
        departments: ["Carleton Athletics", "Alumni Relations"],
        features:    ["Arena", "Event Space", "Gymnasium"],
        website:     "https://athletics.carleton.ca/"
    },

    "Athletics Building": {
        abbr:        "AB",
        description: "Administrative and support hub for Carleton's varsity athletics programs and recreational services.",
        departments: ["Carleton Athletics"],
        features:    ["Athletics Offices", "Fitness Facilities"],
        website:     "https://athletics.carleton.ca/"
    },

    "Carleton Ice House": {
        abbr:        "IH",
        description: "An ice skating facility used for Carleton Ravens hockey and public skating programs.",
        departments: ["Carleton Athletics"],
        features:    ["Ice Rink", "Change Rooms", "Spectator Seating"],
        website:     "https://athletics.carleton.ca/"
    },

    "Norm Fenn Gym": {
        abbr:        "NFG",
        description: "A gymnasium facility named after Norm Fenn, supporting intramural and recreational sports programs.",
        departments: ["Carleton Athletics"],
        features:    ["Gymnasium", "Courts", "Recreational Space"],
        website:     "https://athletics.carleton.ca/"
    },

    "Tennis Centre": {
        abbr:        "TC",
        description: "Indoor tennis facility available to students, faculty, and the public for recreational and competitive play.",
        departments: ["Carleton Athletics"],
        features:    ["Indoor Tennis Courts", "Equipment Rental"],
        website:     "https://athletics.carleton.ca/"
    },

    "Pigiarvik": {
        abbr:        "PIG",
        description: "An Inuit-inspired student gathering and support space serving Inuit and Arctic-region students at Carleton.",
        departments: ["Indigenous Initiatives"],
        features:    ["Gathering Space", "Student Support", "Cultural Space"],
        website:     "https://carleton.ca/indigenous/"
    },

    "Teraanga Commons": {
        abbr:        "TRC",
        description: "A welcoming student commons space supporting community building, events, and student life programming.",
        departments: ["Student Affairs"],
        features:    ["Common Lounge", "Event Space", "Study Areas"],
        website:     "https://carleton.ca/studentservices/"
    },

    "Colonel By Child Care Centre": {
        abbr:        "CBCC",
        description: "An on-campus childcare facility providing care for children of Carleton students, staff, and faculty.",
        departments: ["Child Care Services"],
        features:    ["Licensed Child Care", "Play Areas"],
        website:     "https://carleton.ca/childcare/"
    },

    "Dundas House": {
        abbr:        "DUH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Frontenac House": {
        abbr:        "FRH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Glengarry House": {
        abbr:        "GH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Grenville House": {
        abbr:        "GRH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Lanark House": {
        abbr:        "LAH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Leeds House": {
        abbr:        "LEH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Lennox and Addington House": {
        abbr:        "LAD",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Prescott House": {
        abbr:        "PRH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Renfrew House": {
        abbr:        "REH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Rideau House": {
        abbr:        "RDH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Russell House": {
        abbr:        "RUH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "Stormont House": {
        abbr:        "STH",
        description: "A student residence building offering on-campus housing for undergraduate students.",
        departments: ["Student Housing"],
        features:    ["Residence Rooms", "Common Areas", "Laundry"],
        website:     "https://carleton.ca/housing/"
    },

    "National Wildlife Research Centre": {
        abbr:        "NWRC",
        description: "A federal research facility on the Carleton campus operated by Environment and Climate Change Canada, focusing on wildlife toxicology and environmental research.",
        departments: ["Environment and Climate Change Canada"],
        features:    ["Research Laboratories", "Federal Offices"],
        website:     "https://www.canada.ca/en/environment-climate-change.html"
    },

    "Maintenance Building": {
        abbr:        "MB",
        description: "Facilities and operations building supporting campus maintenance, infrastructure, and physical plant services.",
        departments: ["Facilities Management & Planning"],
        features:    ["Operations Centre", "Equipment Storage"],
        website:     "https://carleton.ca/fmp/"
    },

    "Parking Garage (P18)": {
        abbr:        "P18",
        description: "A multi-level parking structure serving students, staff, and visitors to the Carleton campus.",
        departments: ["Parking & Transportation Services"],
        features:    ["Multi-Level Parking", "Accessible Spaces"],
        website:     "https://carleton.ca/parking/"
    },

    "Walkway": {
        abbr:        "",
        description: "An enclosed walkway connecting campus buildings, part of Carleton's indoor tunnel network.",
        departments: [],
        features:    ["Indoor Walkway", "Tunnel Access"],
        website:     "https://carleton.ca/"
    }

};