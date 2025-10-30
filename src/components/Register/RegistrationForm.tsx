import React, { useEffect, useMemo, useRef, useState } from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';
import eventsJson from '../../assets/events.json';
import '../../styles/HOARegistrationForm.css';
import PreviewModal from "./PreviewModal"; // adjust import path if needed
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { apiFetch } from "../../services/api/RegisterService";
import SportsSelect from "./Sport";
import SportCategorySelect from "./SportCategory";

// ---------- Types ----------
interface EventRow { gender: 'Boys' | 'Girls' | 'Mixed'; event: string; }
interface CategoryRow { category: string; events: EventRow[]; }
interface AchievementFileState {
  districtFile?: File;
  stateFile?: File;
  nationalFile?: File;
  intlFile?: File;
  otherFile?: File;
}
interface Achievements {
  districtText: string;
  stateText: string;
  nationalText: string;
  intlText: string;
  otherAch: string;
}
interface FormState {
  filteredEvents: string[];
  firstName: string; 
  middleName: string; 
  lastName: string;
  fathersName: string; 
  mothersName: string; 
  dob: string;
  gender: '' | 'Male' | 'Female';
  permanentAddress: string; 
  mobile: string; 
  email: string;
  tempAddress: string; 
  idMark: string; 
  height: number;
  bloodGroup: string;
  events: string;           // single-select
  sportCategory: string[];  // multi-select
  achievements: Achievements;
  qualification: string; 
  college: string; 
  collegeAddress: string;
  regCategory: '' | 'Regular' | 'Para Athlete';
  instagram: string; 
  facebook: string; 
  twitter: string;
  username: string; 
  password: string;
  terms: boolean;
  sportId: { 
    id: number | null;
    name: string;
  };
  categoryId: { 
    id:number | null; 
    name:string
  }[];
}
// ---------- Achievement Level Type ----------
interface AchievementLevel {
  name: string;
  textKey: keyof Achievements;
  fileKey: keyof AchievementFileState;
}

type ErrorState = Partial<Record<
  | 'firstName' | 'lastName'
  | 'fathersName' | 'mothersName'
  | 'dob' | 'gender'
  | 'mobile' | 'email'
  | 'height' | 'bloodGroup'
  | 'sportCategory' | 'events'
  | 'username' | 'password'
  | 'passportPhoto' | 'aadharFront' | 'aadharBack' | 'signature' | 'sportId' | 'categoryId' | 'permanentAddress' | 'tempAddress' | 'idMark' 
  | 'bloodGroup' | 'qualification' | 'college' | 'regCategory' 
, string>>;

const MAX_IMG_MB = 2;
const ALLOWED_IMG = ['image/jpeg', 'image/png', 'image/webp'];



const HOARegistrationForm: React.FC = () => {
  const categoryList = useMemo(() => [
    'Archery','Athletics','Badminton','Basketball','Boxing',
    'Cycling (Track)','Cycling (Road)','Fencing','Football','Gatka',
    'Gymnastics','Hockey','Judo','Kabaddi','Kalarippayattu',
    'Kayaking & Canoeing','Kho Kho','Mallakhamb','Rowing','Shooting',
    'Swimming','Table Tennis','Tennis','Thang Ta','Volleyball',
    'Weightlifting','Wrestling','Yogasana','Rugby','Sepaktakraw'
  ], []);

  const achievementLevels: AchievementLevel[] = [
    {
      name: "District Level",
      textKey: "districtText",
      fileKey: "districtFile",
    },
    { name: "State Level", textKey: "stateText", fileKey: "stateFile" },
    {
      name: "National Level",
      textKey: "nationalText",
      fileKey: "nationalFile",
    },
    { name: "International Level", textKey: "intlText", fileKey: "intlFile" },
    { name: "Other Achievements", textKey: "otherAch", fileKey: "otherFile" },
  ];

  const [achievementFiles, setAchievementFiles] =
    useState<AchievementFileState>({});

  const [form, setForm] = useState<FormState>({
    filteredEvents: [],
    firstName: "",
    middleName: "",
    lastName: "",
    fathersName: "",
    mothersName: "",
    dob: "",
    gender: "",
    permanentAddress: "",
    mobile: "",
    email: "",
    tempAddress: "",
    idMark: "",
    height: 0,
    bloodGroup: "",
    events: "",
    sportCategory: [],
    achievements: {
      districtText: "",
      stateText: "",
      nationalText: "",
      intlText: "",
      otherAch: "",
    },
    qualification: "",
    college: "",
    collegeAddress: "",
    regCategory: "",
    instagram: "",
    facebook: "",
    twitter: "",
    username: "",
    password: "",
    terms: false,
    sportId: { id:null, name: ""},
    categoryId: [],
  });

  // Previews + file names
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [passportPhotoName, setPassportPhotoName] = useState<string>('');

  const [aadharFrontUrl, setAadharFrontUrl] = useState<string | null>(null);
  const [aadharBackUrl, setAadharBackUrl] = useState<string | null>(null);
  const [signatureUrl, setSignatureUrl] = useState<string | null>(null);
  const [aadharFrontName, setAadharFrontName] = useState<string>('');
  const [aadharBackName, setAadharBackName] = useState<string>('');
  const [signatureName, setSignatureName] = useState<string>('');

  // Errors
  const [errors, setErrors] = useState<ErrorState>({});
  const formTopRef = useRef<HTMLDivElement>(null);

  // Hidden file inputs
  const frontRef = useRef<HTMLInputElement>(null);
  const backRef = useRef<HTMLInputElement>(null);
  const signRef = useRef<HTMLInputElement>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // react-select
  const categoryOptions = categoryList.map(v => ({ value: v, label: v }));
  const eventOptions = form.filteredEvents.map(e => ({ value: e, label: e }));

  useEffect(() => { updateEvents(); /* eslint-disable-next-line */ }, [form.gender, form.sportCategory]);

  const updateEvents = () => {
    if (!form.gender || form.sportCategory.length === 0) {
      setForm(prev => ({ ...prev, filteredEvents: [], events: '' })); return;
    }
    const gender = form.gender === 'Male' ? 'Boys' : 'Girls';
    const data = eventsJson as unknown as CategoryRow[];

    const events: string[] = [];
    for (const category of form.sportCategory) {
      const match = data.find(e => e.category === category);
      if (match) {
        const gendered = match.events.filter(ev => ev.gender === gender || ev.gender === 'Mixed');
        events.push(...gendered.map(ev => `${match.category} - ${ev.event}`));
      }
    }
    events.sort((a, b) => a.localeCompare(b));
    setForm(prev => ({ ...prev, filteredEvents: events }));
  };

  // ---------- Validators ----------
  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const cleanDigits = (v: string) => v.replace(/[^\d]/g, '');
  const isMobile10 = (v: string) => /^\d{10}$/.test(v);
  const isValidDOB = (iso: string) => {
    if (!iso) return false;
    const dob = new Date(iso);
    const today = new Date();
    const minAge = 5;
    const age = today.getFullYear() - dob.getFullYear() - (
      (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) ? 1 : 0
    );
    return age >= minAge;
  };
  const isBloodGroup = (v: string) => /^(A|B|AB|O)[+-]$/.test(v.toUpperCase());
  const isHeight = (v: string) => {
    const n = Number(v);
    return !Number.isNaN(n) && n >= 50 && n <= 250;
  };
  const isStrongPassword = (v: string) => /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(v);
  const validateImageFile = (file?: File) => {
    if (!file) return { ok: false, msg: 'Please choose an image file.' };
    if (!ALLOWED_IMG.includes(file.type)) return { ok: false, msg: 'Only JPG/PNG/WebP allowed.' };
    if (file.size > MAX_IMG_MB * 1024 * 1024) return { ok: false, msg: `Max ${MAX_IMG_MB} MB.` };
    return { ok: true, msg: '' };
  };

  // ✅ Helper for building previews
  const buildPreview = (
    file: File | undefined,
    _prevUrl: string | null,
    setUrl: (v: string | null) => void,
    errorKey?: keyof ErrorState
  ) => {
    if (!file) {
      setUrl(null);
      if (errorKey) setErrors(prev => ({ ...prev, [errorKey]: "Please choose a file." }));
      return null;
    }

    const check = validateImageFile(file);
    if (!check.ok) {
      setUrl(null);
      if (errorKey) setErrors(prev => ({ ...prev, [errorKey]: check.msg }));
      return null;
    }

    if (errorKey) setErrors(prev => {
      const { [errorKey]: _, ...rest } = prev;
      return rest;
    });

    const url = URL.createObjectURL(file);
    setUrl(url);
    return url;
  };

  // ✅ Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      [photoUrl, aadharFrontUrl, aadharBackUrl, signatureUrl].forEach(u => {
        if (u) URL.revokeObjectURL(u);
      });
    };
  }, [photoUrl, aadharFrontUrl, aadharBackUrl, signatureUrl]);

  // Field-level helper
  const touch = (key: keyof ErrorState, valid: boolean, msg: string) => {
    setErrors(prev => {
      const cp = { ...prev };
      if (valid) delete cp[key];
      else cp[key] = msg;
      return cp;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("foooorm", form.sportId , form.sportId.id && form.categoryId.length === 0);
    debugger

    const digits = cleanDigits(form.mobile).slice(-10);
    const newErrors: ErrorState = {};

    // --- Validation rules ---
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.fathersName.trim()) newErrors.fathersName = "Father’s name is required.";
    if (!form.mothersName.trim()) newErrors.mothersName = "Mother’s name is required.";
    if (!form.dob) newErrors.dob = "Date of birth is required.";
    else if (!isValidDOB(form.dob)) newErrors.dob = "Athlete must be at least 5 years old.";
    if (!form.gender) newErrors.gender = "Please select gender.";
      if (!form.permanentAddress.trim()) newErrors.permanentAddress = "Permanent Address is required.";
    if (!form.tempAddress.trim()) newErrors.tempAddress = "Temporary Addresss is required.";
    if (!form.idMark.trim()) newErrors.idMark = "Identification Mark is required.";

    if (!isMobile10(digits)) newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!isEmail(form.email)) newErrors.email = "Enter a valid email address.";

    if (!form.height || (form.height < 50 || form.height > 250))
      newErrors.height = "Height (cm) must be between 50 and 250.";
    if (form.bloodGroup && !isBloodGroup(form.bloodGroup))
      newErrors.bloodGroup = "Blood group must be A+/A-/B+/B-/AB+/AB-/O+/O-.";





    // if (form.sportCategory.length === 0)
    //   newErrors.sportCategory = "Select at least one sport category.";
    // if (form.filteredEvents.length > 0 && !form.events)
    //   newErrors.events = "Select an event.";






    if (!form.sportId.id) newErrors.sportId = "Select at least one sport category.";
    if ( form.sportId.id && form.categoryId.length === 0) newErrors.categoryId = "Select at least one Events.";

    if (!form.username.trim()) newErrors.username = "Username is required.";
    if (!isStrongPassword(form.password))
      newErrors.password = "Password must be 8+ chars with at least 1 letter & 1 number.";

      if (!form.bloodGroup.trim()) newErrors.bloodGroup = "Blood Group is required.";
      if (!form.qualification.trim()) newErrors.qualification = "Qualification is required.";
      if (!form.college.trim()) newErrors.college = "College Name is required.";
      if (!form.regCategory.trim()) newErrors.regCategory = "Registration Category is required.";
    // --- Required files ---
    if (!photoUrl) newErrors.passportPhoto = "Passport photo is required.";
    if (!aadharFrontUrl) newErrors.aadharFront = "Aadhar front is required.";
    if (!aadharBackUrl) newErrors.aadharBack = "Aadhar back is required.";
    if (!signatureUrl) newErrors.signature = "Signature is required.";

    // --- Apply all errors ---
    setErrors(newErrors);

    const errorMessages = Object.values(newErrors);

    // --- Show toast notifications for each error ---
    if (errorMessages.length > 0) {
      errorMessages.forEach((err, index) => {
        setTimeout(() => toast.error(err), index * 300); // delay for stacking
      });

      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // --- Success (no errors) ---
    setShowPreview(true);
  };


  const handleConfirmSubmit = async () => {
    setShowPreview(false);
    setLoading(true);

    try {
      const formData = new FormData();

      // ---------- Text Fields ----------
      formData.append("firstName", form.firstName);
      formData.append("middleName", form.middleName);
      formData.append("lastName", form.lastName);
      formData.append("fatherName", form.fathersName);
      formData.append("motherName", form.mothersName);
      formData.append("dob", form.dob);
      formData.append("gender", form.gender);
      formData.append("permAddr", form.permanentAddress);
      formData.append("tempAddr", form.tempAddress);
      formData.append("mobile", form.mobile);
      formData.append("email", form.email);
      formData.append("idMark", form.idMark);
      formData.append("height", Math.floor(form.height).toString());
      formData.append("bloodGroup", form.bloodGroup);
      const sportsPayload = form.sportCategory.map((s) => ({ value: s }));
      // formData.append("sports", JSON.stringify(sportsPayload));
      // formData.append("event", "1");
// ✅ append sport and category IDs

if (form.sportId) {
console.log("form.sportId",form.sportId);
debugger
formData.append("sport_id", form.sportId.id?.toString() || "1");
}

if (form.categoryId && form.categoryId.length > 0) {
form.categoryId.forEach((c) => {
if (c.id !== null) {
  formData.append("event_id[]", String(c.id)); // always send string
}
});
}

      formData.append("qualification", form.qualification);
      formData.append("college", form.college);
      formData.append("collegeAddr", form.collegeAddress);
      formData.append("regCategory", form.regCategory);
      formData.append("instagram", form.instagram);
      formData.append("facebook", form.facebook);
      formData.append("twitter", form.twitter);
      formData.append("username", form.username);
      formData.append("password", form.password);
      formData.append("terms", form.terms ? "1" : "0");

      // ---------- Achievements ----------
      achievementLevels.forEach((level) => {
        formData.append(level.textKey, form.achievements[level.textKey]);
        if (achievementFiles[level.fileKey])
          formData.append(level.fileKey, achievementFiles[level.fileKey]!);
      });

      // ---------- Other Files ----------
      if (photoUrl && frontRef.current?.files?.[0])
        formData.append("passport", frontRef.current.files[0]);
      if (aadharFrontUrl && frontRef.current?.files?.[0])
        formData.append("aadhar_front", frontRef.current.files[0]);
      if (aadharBackUrl && backRef.current?.files?.[0])
        formData.append("aadhar_back", backRef.current.files[0]);
      if (signRef.current?.files?.[0])
        formData.append("signature", signRef.current.files[0]);

      console.log("Submitting formData...");
      Array.from(formData.entries()).forEach(([k, v]) =>
        console.log(k, v instanceof File ? v.name : v)
      );

      // ---------- Submit to backend ----------
      const result = await apiFetch("athlete-register", formData);
      console.log("Backend response:", result);
      debugger;

      if (result.ok && result.data?.success) {
        await Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text:
            result.data.message || "Your form has been submitted successfully.",
          showConfirmButton: false,
          timer: 2000,
        });

        // ✅ RESET FORM AND FILES HERE
        setForm({
          filteredEvents: [],
          firstName: "",
          middleName: "",
          lastName: "",
          fathersName: "",
          mothersName: "",
          dob: "",
          gender: "",
          permanentAddress: "",
          mobile: "",
          email: "",
          tempAddress: "",
          idMark: "",
          height: 0,
          bloodGroup: "",
          events: "",
          sportCategory: [],
          achievements: {
            districtText: "",
            stateText: "",
            nationalText: "",
            intlText: "",
            otherAch: "",
          },
          qualification: "",
          college: "",
          collegeAddress: "",
          regCategory: "",
          instagram: "",
          facebook: "",
          twitter: "",
          username: "",
          password: "",
          terms: false,
          sportId: { id: null, name:"" },
          categoryId : [],
        });

        setAchievementFiles({});
        setPhotoUrl(null);
        setAadharFrontUrl(null);
        setAadharBackUrl(null);
        setSignatureUrl(null);
        setAadharFrontName("");
        setAadharBackName("");
        setSignatureName("");

        if (frontRef.current) frontRef.current.value = "";
        if (backRef.current) backRef.current.value = "";
        if (signRef.current) signRef.current.value = "";

        navigate("/"); // ✅ Redirect to home
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text:
            result.data?.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error: any) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text:
          error.message ||
          "Unable to reach the server. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container" ref={formTopRef}>
      <img src="/images/logo.png" alt="HOA Olympic Logo" className="form-logo" />
      <h1>HOA Registration Form</h1>

      {/* Passport Photo Upload */}
      <div className="photo-upload-section">
        <div className="photo-preview">
          {photoUrl ? <img src={photoUrl} alt="Passport Size Photograph" className="passport-photo" />
                    : <div className="photo-placeholder">Passport Size Photo</div>}
        </div>
        <input
          type="file"
          accept="image/*"
          className={errors.passportPhoto ? 'error' : ''}
          onChange={e => {
            const f = e.target.files?.[0];
            const url = buildPreview(f, photoUrl, setPhotoUrl, 'passportPhoto');
            setPassportPhotoName(f ? f.name : '');
            if (!url && e.target) e.target.value = '';
          }}
          aria-invalid={!!errors.passportPhoto}
          aria-describedby={errors.passportPhoto ? 'passportPhoto-error' : undefined}
        />
        {passportPhotoName && <div className="id-file-name">{passportPhotoName}</div>}
        {errors.passportPhoto && <div id="passportPhoto-error" className="error-text">{errors.passportPhoto}</div>}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* --- Name --- */}
        <label>Name<span className="text-red-500">*</span></label>
        <div className="inline">
          {/* First Name */}
<div className="field">
  <input
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all 
      ${errors.firstName
        ? "border-red-500 focus:ring-2 focus:ring-red-400"
        : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    value={form.firstName}
    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
    onBlur={() =>
      touch(
        "firstName",
        !!form.firstName.trim(),
        "First name is required."
      )
    }
    type="text"
    placeholder="First Name"
    required
    aria-invalid={!!errors.firstName}
    aria-describedby={errors.firstName ? "firstName-error" : undefined}
  />

  {errors.firstName && (
    <div
      id="firstName-error"
      className="mt-1 text-sm font-medium text-red-500"
    >
      {errors.firstName}
    </div>
  )}
</div>


          {/* Middle Name */}
          <div className="field">
            <input
                className={`w-full rounded-md border px-3 py-2 outline-none transition-all border-gray-300 focus:ring-2 focus:ring-orange-400
      `}
              value={form.middleName}
              onChange={e => setForm({ ...form, middleName: e.target.value })}
              type="text" placeholder="Middle Name"
            />
          </div>

          {/* Last Name */}
<div className="field">
  <input
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all
      ${errors.lastName
        ? "border-red-500 focus:ring-2 focus:ring-red-400"
        : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    value={form.lastName}
    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
    onBlur={() =>
      touch("lastName", !!form.lastName.trim(), "Last name is required.")
    }
    type="text"
    placeholder="Last Name"
    required
    aria-invalid={!!errors.lastName}
    aria-describedby={errors.lastName ? "lastName-error" : undefined}
  />

  {errors.lastName && (
    <div
      id="lastName-error"
      className="mt-1 text-sm font-medium text-red-500"
    >
      {errors.lastName}
    </div>
  )}
</div>

        </div>

{/* Father */}
<div className="field mb-4">
  <label className="block mb-1 font-medium">Father's Name<span className="text-red-500">*</span></label>
  <input
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all
      ${errors.fathersName
        ? "border-red-500 focus:ring-2 focus:ring-red-400"
        : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    value={form.fathersName}
    onChange={(e) => setForm({ ...form, fathersName: e.target.value })}
    onBlur={() =>
      touch(
        "fathersName",
        !!form.fathersName.trim(),
        "Father’s name is required."
      )
    }
    type="text"
    required
    aria-invalid={!!errors.fathersName}
    aria-describedby={errors.fathersName ? "fathersName-error" : undefined}
  />
  {errors.fathersName && (
    <div id="fathersName-error" className="mt-1 text-sm text-red-500">
      {errors.fathersName}
    </div>
  )}
</div>

{/* Mother */}
<div className="field mb-4">
  <label className="block mb-1 font-medium">Mother's Name<span className="text-red-500">*</span></label>
  <input
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all
      ${errors.mothersName
        ? "border-red-500 focus:ring-2 focus:ring-red-400"
        : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    value={form.mothersName}
    onChange={(e) => setForm({ ...form, mothersName: e.target.value })}
    onBlur={() =>
      touch(
        "mothersName",
        !!form.mothersName.trim(),
        "Mother’s name is required."
      )
    }
    type="text"
    required
    aria-invalid={!!errors.mothersName}
    aria-describedby={errors.mothersName ? "mothersName-error" : undefined}
  />
  {errors.mothersName && (
    <div id="mothersName-error" className="mt-1 text-sm text-red-500">
      {errors.mothersName}
    </div>
  )}
</div>

{/* DOB */}
<div className="field mb-4">
  <label className="block mb-1 font-medium">Date of Birth<span className="text-red-500">*</span></label>
  <input
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all
      ${errors.dob
        ? "border-red-500 focus:ring-2 focus:ring-red-400"
        : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    value={form.dob}
    onChange={(e) => setForm({ ...form, dob: e.target.value })}
    onBlur={() =>
      touch("dob", isValidDOB(form.dob), "Athlete must be at least 5 years old.")
    }
    type="date"
    required
    aria-invalid={!!errors.dob}
    aria-describedby={errors.dob ? "dob-error" : undefined}
  />
  {errors.dob && (
    <div id="dob-error" className="mt-1 text-sm text-red-500">
      {errors.dob}
    </div>
  )}
</div>

        {/* Gender */}
        <div className="field">
          <label style={{ marginTop: '3%' }}>Gender<span className="text-red-500">*</span></label>
          <div className="radio-group" role="radiogroup" aria-invalid={!!errors.gender} aria-describedby={errors.gender ? 'gender-error' : undefined}>
            <label className="radio-label">
              <input type="radio" value="Male" checked={form.gender === 'Male'}
                     onChange={e => { setForm({ ...form, gender: e.target.value as 'Male' }); touch('gender', true, ''); }}/>
              Male
            </label>
            <label className="radio-label">
              <input type="radio" value="Female" checked={form.gender === 'Female'}
                     onChange={e => { setForm({ ...form, gender: e.target.value as 'Female' }); touch('gender', true, ''); }}/>
              Female
            </label>
          </div>
          {errors.gender && <div id="gender-error" className="error-text">{errors.gender}</div>}
        </div>

{/* Aadhar */}
<label className="block mt-6 mb-2 font-medium">Aadhar Card<span className="text-red-500">*</span></label>
<div className="flex flex-col md:flex-row gap-6">
  {/* FRONT */}
  <div className="w-full md:w-1/2 border rounded-lg p-4 shadow-sm">
    <div className="font-semibold mb-2">Front Side<span className="text-red-500">*</span></div>
    <div className="flex justify-center mb-3">
      {aadharFrontUrl ? (
        <img
          src={aadharFrontUrl}
          alt="Aadhar Front"
          className="w-40 h-28 object-cover rounded-md border"
        />
      ) : (
        <img
          src="/images/aadhar-front.webp"
          alt="Placeholder"
          className="w-40 h-28 object-cover rounded-md opacity-70"
        />
      )}
    </div>
    <input
      ref={frontRef}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) => {
        const f = e.target.files?.[0];
        const url = buildPreview(
          f,
          aadharFrontUrl,
          setAadharFrontUrl,
          "aadharFront"
        );
        setAadharFrontName(f ? f.name : "");
        if (!url && frontRef.current) frontRef.current.value = "";
      }}
    />
    <div className="flex items-center justify-between text-sm">
      <div
        className="truncate w-40"
        title={aadharFrontName || "No file chosen"}
      >
        {aadharFrontName ? aadharFrontName : "No file chosen"}
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="text-blue-500 hover:underline"
          onClick={() => frontRef.current?.click()}
        >
          Upload
        </button>
        <button
          type="button"
          className="text-red-500 hover:underline"
          onClick={() => {
            if (aadharFrontUrl) URL.revokeObjectURL(aadharFrontUrl);
            setAadharFrontUrl(null);
            setAadharFrontName("");
            if (frontRef.current) frontRef.current.value = "";
            setErrors((prev) => ({
              ...prev,
              aadharFront: "Aadhar front is required.",
            }));
          }}
        >
          Remove
        </button>
      </div>
    </div>
    {errors.aadharFront && (
      <div className="mt-1 text-sm text-red-500">{errors.aadharFront}</div>
    )}
  </div>

  {/* BACK */}
  <div className="w-full md:w-1/2 border rounded-lg p-4 shadow-sm">
    <div className="font-semibold mb-2">Back Side<span className="text-red-500">*</span></div>
    <div className="flex justify-center mb-3">
      {aadharBackUrl ? (
        <img
          src={aadharBackUrl}
          alt="Aadhar Back"
          className="w-40 h-28 object-cover rounded-md border"
        />
      ) : (
        <img
          src="/images/aadhar-back.png"
          alt="Placeholder"
          className="w-40 h-28 object-cover rounded-md opacity-70"
        />
      )}
    </div>
    <input
      ref={backRef}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) => {
        const f = e.target.files?.[0];
        const url = buildPreview(
          f,
          aadharBackUrl,
          setAadharBackUrl,
          "aadharBack"
        );
        setAadharBackName(f ? f.name : "");
        if (!url && backRef.current) backRef.current.value = "";
      }}
    />
    <div className="flex items-center justify-between text-sm">
      <div
        className="truncate w-40"
        title={aadharBackName || "No file chosen"}
      >
        {aadharBackName ? aadharBackName : "No file chosen"}
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="text-blue-500 hover:underline"
          onClick={() => backRef.current?.click()}
        >
          Upload
        </button>
        <button
          type="button"
          className="text-red-500 hover:underline"
          onClick={() => {
            if (aadharBackUrl) URL.revokeObjectURL(aadharBackUrl);
            setAadharBackUrl(null);
            setAadharBackName("");
            if (backRef.current) backRef.current.value = "";
            setErrors((prev) => ({
              ...prev,
              aadharBack: "Aadhar back is required.",
            }));
          }}
        >
          Remove
        </button>
      </div>
    </div>
    {errors.aadharBack && (
      <div className="mt-1 text-sm text-red-500">{errors.aadharBack}</div>
    )}
  </div>
</div>


        {/* Addresses */}
<div className="field mb-4">
  <label className="block mb-1 font-medium">
    Permanent Address<span className="text-red-500">*</span>
  </label>
  <textarea
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all resize-none
      ${
        errors.permanentAddress
          ? "border-red-500 focus:ring-2 focus:ring-red-400"
          : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    value={form.permanentAddress}
    onChange={(e) => setForm({ ...form, permanentAddress: e.target.value })}
    onBlur={() =>
      touch(
        "permanentAddress",
        !!form.permanentAddress.trim(),
        "Permanent address is required."
      )
    }
    rows={2}
    required
    aria-invalid={!!errors.permanentAddress}
    aria-describedby={errors.permanentAddress ? "permanentAddress-error" : undefined}
  />
  {errors.permanentAddress && (
    <div id="permanentAddress-error" className="mt-1 text-sm text-red-500">
      {errors.permanentAddress}
    </div>
  )}
</div>

{/* 🏠 Temporary Address */}
<div className="field mb-4">
  <label className="block mb-1 font-medium">
    Temporary Address<span className="text-red-500">*</span>
  </label>
  <textarea
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all resize-none
      ${
        errors.tempAddress
          ? "border-red-500 focus:ring-2 focus:ring-red-400"
          : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    value={form.tempAddress}
    onChange={(e) => setForm({ ...form, tempAddress: e.target.value })}
    onBlur={() =>
      touch("tempAddress", !!form.tempAddress.trim(), "Temporary address is required.")
    }
    rows={2}
    required
    aria-invalid={!!errors.tempAddress}
    aria-describedby={errors.tempAddress ? "tempAddress-error" : undefined}
  />
  {errors.tempAddress && (
    <div id="tempAddress-error" className="mt-1 text-sm text-red-500">
      {errors.tempAddress}
    </div>
  )}
</div>


        <div className="inline">
          <div className="field">
            <label>Mobile No.<span className="text-red-500">*</span></label>
            <input
              className={errors.mobile ? 'error' : ''}
              value={form.mobile}
              onChange={e => setForm({ ...form, mobile: e.target.value })}
              onBlur={() => {
                const digits = cleanDigits(form.mobile).slice(-10);
                touch('mobile', isMobile10(digits), 'Enter a valid 10-digit mobile number.');
              }}
              type="tel" required inputMode="numeric" placeholder="e.g. 9876543210"
              aria-invalid={!!errors.mobile}
              aria-describedby={errors.mobile ? 'mobile-error' : undefined}
            />
            {errors.mobile && <div id="mobile-error" className="error-text">{errors.mobile}</div>}
          </div>

          <div className="field">
            <label>Email<span className="text-red-500">*</span></label>
            <input
              className={errors.email ? 'error' : ''}
              placeholder="e.g. abc@abc.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              onBlur={() => touch('email', isEmail(form.email), 'Enter a valid email address.')}
              type="email" required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <div id="email-error" className="error-text">{errors.email}</div>}
          </div>

          <div />
        </div>



{/* 🧾 Identification Mark */}
<div className="field mb-4">
  <label className="block mb-1 font-medium">
    Identification Mark<span className="text-red-500">*</span>
  </label>
  <input
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all
      ${
        errors.idMark
          ? "border-red-500 focus:ring-2 focus:ring-red-400"
          : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    value={form.idMark}
    onChange={(e) => setForm({ ...form, idMark: e.target.value })}
    onBlur={() =>
      touch("idMark", !!form.idMark.trim(), "Identification mark is required.")
    }
    type="text"
    required
    aria-invalid={!!errors.idMark}
    aria-describedby={errors.idMark ? "idMark-error" : undefined}
  />
  {errors.idMark && (
    <div id="idMark-error" className="mt-1 text-sm text-red-500">
      {errors.idMark}
    </div>
  )}
</div>

{/* 📏 Height */}
<div className="field mb-4">
  <label className="block mb-1 font-medium">
    Height at time of registration<span className="text-red-500">*</span>
  </label>
  <input
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all
      ${
        errors.height
          ? "border-red-500 focus:ring-2 focus:ring-red-400"
          : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    type="number"
    value={form.height || ""}
    placeholder="Height (cm) must be between 50 and 250."
    min={50}
    max={250}
    onChange={(e) => {
      const value = e.target.value ? Number(e.target.value) : 0;
      setForm({ ...form, height: value });
    }}
    onBlur={() => {
      if (form.height)
        touch(
          "height",
          form.height >= 50 && form.height <= 250,
          "Height (cm) must be between 50 and 250."
        );
    }}
    aria-invalid={!!errors.height}
    aria-describedby={errors.height ? "height-error" : undefined}
  />
  {errors.height && (
    <div id="height-error" className="mt-1 text-sm text-red-500">
      {errors.height}
    </div>
  )}
</div>

{/* 🩸 Blood Group */}
<div className="field mb-4">
  <label className="block mb-1 font-medium">
    Blood Group<span className="text-red-500">*</span>
  </label>
  <select
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all
      ${
        errors.bloodGroup
          ? "border-red-500 focus:ring-2 focus:ring-red-400"
          : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    value={form.bloodGroup}
    onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
    onBlur={() =>
      touch(
        "bloodGroup",
        isBloodGroup(form.bloodGroup),
        "Blood group must be A+/A-/B+/B-/AB+/AB-/O+/O-."
      )
    }
    required
    aria-invalid={!!errors.bloodGroup}
    aria-describedby={errors.bloodGroup ? "bloodGroup-error" : undefined}
  >
    <option value="">Select Blood Group</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
  </select>
  {errors.bloodGroup && (
    <div id="bloodGroup-error" className="mt-1 text-sm text-red-500">
      {errors.bloodGroup}
    </div>
  )}
</div>


        {/* Sport Category */}
        {/* <label>Sport Category</label>
        <div className={`field ${errors.sportCategory ? 'rs-invalid' : ''}`}>
          <Select
            classNamePrefix="react-select"
            isMulti
            options={categoryOptions}
            placeholder="Select Sport Category"
            value={form.sportCategory.map(v => ({ value: v, label: v }))}
            onChange={(vals: MultiValue<{ value: string; label: string }>) =>
              setForm(prev => ({ ...prev, sportCategory: vals.map(v => v.value) }))
            }
            styles={{
              control: (base, state) => ({
                ...base,
                borderColor: errors.sportCategory ? '#dc3545' : base.borderColor,
                boxShadow: errors.sportCategory ? '0 0 0 3px rgba(220,53,69,.25)' : (state.isFocused ? base.boxShadow : 'none'),
                background: 'transparent'
              }),
            }}
          />
          {errors.sportCategory && <div className="error-text">{errors.sportCategory}</div>}
        </div> */}

        {/* Events */}
        {/* <label>Events</label>
        <div className={`field ${errors.events ? 'rs-invalid' : ''}`}>
          <Select
            classNamePrefix="react-select"
            options={eventOptions}
            placeholder={!form.gender || form.sportCategory.length === 0 ? 'Select Gender and Sport Category first' : 'Select Event'}
            isClearable
            isDisabled={!form.gender || form.sportCategory.length === 0}
            value={form.events ? { value: form.events, label: form.events } : null}
            onChange={(opt: SingleValue<{ value: string; label: string }>) =>
              setForm(prev => ({ ...prev, events: opt?.value ?? '' }))
            }
            styles={{
              control: (base, state) => ({
                ...base,
                borderColor: errors.events ? '#dc3545' : base.borderColor,
                boxShadow: errors.events ? '0 0 0 3px rgba(220,53,69,.25)' : (state.isFocused ? base.boxShadow : 'none'),
                background: 'transparent'
              }),
            }}
          />
          {errors.events && <div className="error-text">{errors.events}</div>}
        </div> */}

                    <div className="form-section">
<SportsSelect
  value={form.sportId}
  onChange={(sport) =>
    setForm(prev => ({
      ...prev,
      sportId: sport,        // ✅ assigns the whole object {id, name}
      categoryId: [],      // ✅ reset category
    }))
  }
  error={errors.sportId}
/>


      <SportCategorySelect
        sportId={form.sportId?.id}
        value={form.categoryId}
  onChange={(categoryId) => setForm((prev) => ({ ...prev, categoryId }))}
        error={errors.categoryId}
      />

    </div>

        {/* Achievements */}
        <label className="achievements-block">Upload Achievement Documents</label>
        {achievementLevels.map((level) => (
          <div key={level.fileKey} className="achievement-section">
            <label>{level.name}</label>
            <textarea
              placeholder="Mention achievements with dates and location"
              value={form.achievements[level.textKey]}
              onChange={e =>
                setForm(prev => ({ ...prev, achievements: { ...prev.achievements, [level.textKey]: e.target.value } }))
              }
            />
            <input className="achievement-file" type="file" />
          </div>
        ))}

{/* 🎓 Qualification */}
<div className="field mb-4">
  <label className="block mb-1 font-medium">
    Qualification<span className="text-red-500">*</span>
  </label>
  <input
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all
      ${
        errors.qualification
          ? "border-red-500 focus:ring-2 focus:ring-red-400"
          : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    type="text"
    value={form.qualification}
    onChange={(e) => setForm({ ...form, qualification: e.target.value })}
    onBlur={() =>
      touch(
        "qualification",
        !!form.qualification.trim(),
        "Qualification is required."
      )
    }
    required
    aria-invalid={!!errors.qualification}
    aria-describedby={errors.qualification ? "qualification-error" : undefined}
  />
  {errors.qualification && (
    <div id="qualification-error" className="mt-1 text-sm text-red-500">
      {errors.qualification}
    </div>
  )}
</div>

{/* 🏫 College / University */}
<div className="field mb-4">
  <label className="block mb-1 font-medium">
    College / University<span className="text-red-500">*</span>
  </label>
  <input
    className={`w-full rounded-md border px-3 py-2 outline-none transition-all
      ${
        errors.college
          ? "border-red-500 focus:ring-2 focus:ring-red-400"
          : "border-gray-300 focus:ring-2 focus:ring-orange-400"
      }`}
    type="text"
    value={form.college}
    onChange={(e) => setForm({ ...form, college: e.target.value })}
    onBlur={() =>
      touch("college", !!form.college.trim(), "College / University is required.")
    }
    required
    aria-invalid={!!errors.college}
    aria-describedby={errors.college ? "college-error" : undefined}
  />
  {errors.college && (
    <div id="college-error" className="mt-1 text-sm text-red-500">
      {errors.college}
    </div>
  )}
</div>


        <div className="field">
          <label>Address of College / University</label>
          <textarea value={form.collegeAddress} onChange={e => setForm({ ...form, collegeAddress: e.target.value })} />
        </div>

        <div className="field">
          <label>Registration Category<span className="text-red-500">*</span></label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" value="Regular" checked={form.regCategory === 'Regular'}
                     onChange={e => setForm({ ...form, regCategory: e.target.value as 'Regular' })}/>
              Regular
            </label>
            <label className="radio-label">
              <input type="radio" value="Para Athlete" checked={form.regCategory === 'Para Athlete'}
                     onChange={e => setForm({ ...form, regCategory: e.target.value as 'Para Athlete' })}/>
              Para Athlete
            </label>
          </div>
        </div>

        <div className="field">
          <label>Social Media Accounts</label>
          <input value={form.instagram} onChange={e => setForm({ ...form, instagram: e.target.value })} type="text" placeholder="Instagram" />
          <input value={form.facebook} onChange={e => setForm({ ...form, facebook: e.target.value })} type="text" placeholder="Facebook" />
          <input value={form.twitter} onChange={e => setForm({ ...form, twitter: e.target.value })} type="text" placeholder="Twitter" />
        </div>

        <div className="field">
          <label>Login Username<span className="text-red-500">*</span></label>
          <input
            className={errors.username ? 'error' : ''}
            value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
            onBlur={() => touch('username', !!form.username.trim(), 'Username is required.')}
            type="text" required
            aria-invalid={!!errors.username}
            aria-describedby={errors.username ? 'username-error' : undefined}
          />
          {errors.username && <div id="username-error" className="error-text">{errors.username}</div>}
        </div>

        <div className="field">
          <label>Login Password<span className="text-red-500">*</span></label>
          <input
            className={errors.password ? 'error' : ''}
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            onBlur={() => touch('password', isStrongPassword(form.password), 'Password must be 8+ chars with at least 1 letter & 1 number.')}
            type="password" required
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {errors.password && <div id="password-error" className="error-text">{errors.password}</div>}
        </div>

        {/* Signature */}
        <label style={{ marginTop: 20 }}>Signature<span className="text-red-500">*</span></label>
        <div className="signature-wrap">
          <div className="signature-preview">
            {signatureUrl ? <img src={signatureUrl} alt="Signature" /> : <div className="photo-placeholder">Upload Signature</div>}
          </div>
          <input
            ref={signRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={e => {
              const f = e.target.files?.[0];
              const url = buildPreview(f, signatureUrl, setSignatureUrl, 'signature');
              setSignatureName(f ? f.name : '');
              if (!url && signRef.current) signRef.current.value = '';
            }}
          />
          <div className="id-actions" style={{ justifyContent: 'center' }}>
            <div className="id-file-name" title={signatureName || 'No file chosen'}>
              {signatureName ? signatureName : 'Pas...'}
            </div>
            <button type="button" className="link" onClick={() => signRef.current?.click()}>Upload</button>
            <button
              type="button"
              className="link danger"
              onClick={() => {
                if (signatureUrl) URL.revokeObjectURL(signatureUrl);
                setSignatureUrl(null); setSignatureName('');
                if (signRef.current) signRef.current.value = '';
                setErrors(prev => ({ ...prev, signature: 'Signature is required.' }));
              }}>
              Remove
            </button>
          </div>
          {errors.signature && <div className="error-text">{errors.signature}</div>}
        </div>

            {/* <div className="form-section">
<SportsSelect
  value={form.sportId}
  onChange={(sport) =>
    setForm(prev => ({
      ...prev,
      sportId: sport,        // ✅ assigns the whole object {id, name}
      categoryId: [],      // ✅ reset category
    }))
  }
  error={errors.sportId}
/>


      <SportCategorySelect
        sportId={form.sportId?.id}
        value={form.categoryId}
  onChange={(categoryId) => setForm((prev) => ({ ...prev, categoryId }))}
        error={errors.categoryId}
      />

    </div> */}
    

                <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            "Submit"
          )}
        </button>

{showPreview && (
  <PreviewModal
    form={form}
    photoUrl={photoUrl}
    aadharFrontUrl={aadharFrontUrl}
    aadharBackUrl={aadharBackUrl}
    signatureUrl={signatureUrl}
    onConfirm={handleConfirmSubmit}
    onCancel={() => setShowPreview(false)}
  />
)}

      </form>
            <ToastContainer position="top-right" />
    </div>



  );
};

export default HOARegistrationForm;