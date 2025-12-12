export const addressLabels = {
  block: "Flat/Street/Block No.",
  village: "Name of Premises/Building/Village",
  postOffice: "Road/Street/Lane/Post Office",
  area: "Area/Locality/Taluka/Sub-Division",
  district: "District/Town/City",
  zipcode: " PIN Code",

  tempAddressTitle: "Temporary Address",
  permAddressTitle: "Permanent Address",
  checkboxLabel: "Permanent address same as temporary",
};

export const haryanaLocations = {
  labelDistrict: "District", // you can change anytime
  labelCity: "City", // change anytime

  districts: {
    Ambala: ["Ambala City", "Ambala Cantonment", "Naraingarh"],
    Bhiwani: ["Bhiwani", "Tosham", "Siwani"],
    "Charkhi Dadri": ["Charkhi Dadri", "Badhra"],
    Faridabad: ["Faridabad", "Ballabgarh"],
    Fatehabad: ["Fatehabad", "Ratia"],
    Gurugram: ["Gurgaon", "Sohna", "Pataudi"],
    Hisar: ["Hisar", "Barwala", "Hansi"],
    Jhajjar: ["Jhajjar", "Bahadurgarh"],
    Jind: ["Jind", "Narwana"],
    Kaithal: ["Kaithal", "Guhla"],
    Karnal: ["Karnal", "Gharaunda"],
    Kurukshetra: ["Kurukshetra", "Pehowa"],
    Mahendragarh: ["Mahendragarh", "Narnaul"],
    Nuh: ["Nuh", "Punhana"],
    Palwal: ["Palwal", "Hodal"],
    Panchkula: ["Panchkula", "Barwala"],
    Panipat: ["Panipat", "Samalkha"],
    Rewari: ["Rewari", "Kosli"],
    Rohtak: ["Rohtak", "Meham"],
    Sirsa: ["Sirsa", "Dabwali"],
    Sonipat: ["Sonipat", "Gohana"],
    Yamunanagar: ["Yamunanagar", "Jagadhri"],
  },
};

export const achievementLabels = {
  achievementTitle: "Sports Achievements",

  level: "Achievement Level",
  tournamentName: "Tournament Name",
  authority: "Organization / Authority",
  place: "Place of Competition",
  date: "Date of Competition",
  medal: "Achievement",

  levels: ["District", "State", "National", "International"],

  medals: ["Gold", "Silver", "Bronze", "Participated"],
};

export const defaultOptions = [
  { id: 1, label: "10th", value: "10th" },
  { id: 2, label: "12th", value: "12th" },
  { id: 3, label: "Graduation", value: "graduation" },
  { id: 4, label: "Post Graduation", value: "post_graduation" },
];

// Singleton array for social media platforms
const SocialPlatforms = Object.freeze([
  "Instagram",
  "YouTube",
  "Facebook",
  "LinkedIn",
  "Twitter",
]);

export default SocialPlatforms;
