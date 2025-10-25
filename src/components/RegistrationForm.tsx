import React, { useEffect, useMemo, useRef, useState } from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';
import eventsJson from '../assets/events.json';
import '../styles/HOARegistrationForm.css';

// ---------- Types ----------
interface EventRow { gender: 'Boys' | 'Girls' | 'Mixed'; event: string; }
interface CategoryRow { category: string; events: EventRow[]; }
interface Achievements { district: string; state: string; national: string; international: string; other: string; }
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
  height: string; 
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
}

const HOARegistrationForm: React.FC = () => {
  const categoryList = useMemo(() => [
    'Archery','Athletics','Badminton','Basketball','Boxing',
    'Cycling (Track)','Cycling (Road)','Fencing','Football','Gatka',
    'Gymnastics','Hockey','Judo','Kabaddi','Kalarippayattu',
    'Kayaking & Canoeing','Kho Kho','Mallakhamb','Rowing','Shooting',
    'Swimming','Table Tennis','Tennis','Thang Ta','Volleyball',
    'Weightlifting','Wrestling','Yogasana','Rugby','Sepaktakraw'
  ], []);

  const achievementLevels = [
    { name: 'District Level', key: 'district' as const },
    { name: 'State Level', key: 'state' as const },
    { name: 'National Level', key: 'national' as const },
    { name: 'International Level', key: 'international' as const },
    { name: 'Other Achievements', key: 'other' as const }
  ];

  const [form, setForm] = useState<FormState>({
    filteredEvents: [],
    firstName: '', 
    middleName: '', 
    lastName: '',
    fathersName: '', 
    mothersName: '', 
    dob: '',
    gender: '',
    permanentAddress: '', 
    mobile: '', 
    email: '',
    tempAddress: '', 
    idMark: '', 
    height: '', 
    bloodGroup: '',
    events: '', 
    sportCategory: [],
    achievements: { district:'', state:'', national:'', international:'', other:'' },
    qualification: '', 
    college: '', 
    collegeAddress: '',
    regCategory: '', 
    instagram: '', 
    facebook: '', 
    twitter: '',
    username: '', 
    password: ''
  });

  // Previews
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  // NEW: Aadhar + Signature previews + filenames
  const [aadharFrontUrl, setAadharFrontUrl] = useState<string | null>(null);
  const [aadharBackUrl, setAadharBackUrl] = useState<string | null>(null);
  const [signatureUrl, setSignatureUrl] = useState<string | null>(null);
  const [aadharFrontName, setAadharFrontName] = useState<string>('');
  const [aadharBackName, setAadharBackName] = useState<string>('');
  const [signatureName, setSignatureName] = useState<string>('');

  // Hidden file inputs to trigger Change action
  const frontRef = useRef<HTMLInputElement>(null);
  const backRef = useRef<HTMLInputElement>(null);
  const signRef = useRef<HTMLInputElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', {
      ...form,
      uploads: {
        passportPhoto: photoUrl,
        aadharFront: aadharFrontUrl,
        aadharBack: aadharBackUrl,
        signature: signatureUrl
      }
    });
    alert('Form data logged to console.');
  };

  // Object URL builder
  const buildPreview = (
    file: File | undefined,
    prevUrl: string | null,
    setUrl: (v: string | null) => void,
  ) => {
    if (prevUrl) URL.revokeObjectURL(prevUrl);
    const url = file ? URL.createObjectURL(file) : null;
    setUrl(url);
    return url;
  };

  // Cleanup
  useEffect(() => {
    return () => {
      [photoUrl, aadharFrontUrl, aadharBackUrl, signatureUrl].forEach(u => u && URL.revokeObjectURL(u));
    };
  }, [photoUrl, aadharFrontUrl, aadharBackUrl, signatureUrl]);

  return (
    <div className="form-container">
      <img src="/images/logo.png" alt="HOA Olympic Logo" className="form-logo" />
      <h1>HOA Registration Form</h1>

      {/* Passport Photo Upload */}
      <div className="photo-upload-section">
        <div className="photo-preview">
          {photoUrl ? <img src={photoUrl} alt="Passport Size Photograph" className="passport-photo" />
                    : <div className="photo-placeholder">Passport Size Photo</div>}
        </div>
        <input type="file" accept="image/*"
               onChange={e => buildPreview(e.target.files?.[0], photoUrl, setPhotoUrl)} />
      </div>

      <form onSubmit={handleSubmit}>
        {/* --- Name & Basics (unchanged) --- */}
        <label>Name</label>
        <div className="inline">
          <input value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} type="text" placeholder="First Name"  />
          <input value={form.middleName} onChange={e => setForm({ ...form, middleName: e.target.value })} type="text" placeholder="Middle Name" />
          <input value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} type="text" placeholder="Last Name"  />
        </div>

        <label>Father's Name
          <input value={form.fathersName} onChange={e => setForm({ ...form, fathersName: e.target.value })} type="text"  />
        </label>

        <label>Mother's Name
          <input value={form.mothersName} onChange={e => setForm({ ...form, mothersName: e.target.value })} type="text"  />
        </label>

        <label>Date of Birth
          <input value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} type="date"  />
        </label>

        <label style={{ marginTop: '3%' }}>Gender</label>
        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" value="Male" checked={form.gender === 'Male'}
                   onChange={e => setForm({ ...form, gender: e.target.value as 'Male' })}/>
            Male
          </label>
          <label className="radio-label">
            <input type="radio" value="Female" checked={form.gender === 'Female'}
                   onChange={e => setForm({ ...form, gender: e.target.value as 'Female' })}/>
            Female
          </label>
        </div>

        {/* ---------- Aadhar (Front & Back together) ---------- */}
        <label style={{ marginTop: 18 }}>Aadhar Crad</label>
        <div className="id-pair-row">
          {/* FRONT */}
          <div className="id-card">
            <div className="id-card-header">Front Side</div>
            <div className="id-preview">
              {aadharFrontUrl
                ? <img src={aadharFrontUrl} alt="Aadhar Front" />
                : <img src="/images/aadhar-front.webp" alt="Placeholder" />}
            </div>

            {/* hidden input */}
            <input ref={frontRef} type="file" accept="image/*" style={{ display: 'none' }}
              onChange={e => {
                const f = e.target.files?.[0];
                const url = buildPreview(f, aadharFrontUrl, setAadharFrontUrl);
                setAadharFrontName(f ? f.name : '');
              }}
            />

            <div className="id-actions">
              <div className="id-file-name" title={aadharFrontName || 'No file chosen'}>
                {aadharFrontName ? aadharFrontName : 'Pas...'}
              </div>
              <button type="button" className="link" onClick={() => frontRef.current?.click()}>Change</button>
              <button
                type="button"
                className="link danger"
                onClick={() => {
                  if (aadharFrontUrl) URL.revokeObjectURL(aadharFrontUrl);
                  setAadharFrontUrl(null);
                  setAadharFrontName('');
                  if (frontRef.current) frontRef.current.value = '';
                }}
              >
                Remove
              </button>
            </div>
          </div>

          {/* BACK */}
          <div className="id-card">
            <div className="id-card-header">Back Side</div>
            <div className="id-preview">
              {aadharBackUrl
                ? <img src={aadharBackUrl} alt="Aadhar Back" />
                : <img src="/images/aadhar-back.png" alt="Placeholder" />}
            </div>

            <input ref={backRef} type="file" accept="image/*" style={{ display: 'none' }}
              onChange={e => {
                const f = e.target.files?.[0];
                const url = buildPreview(f, aadharBackUrl, setAadharBackUrl);
                setAadharBackName(f ? f.name : '');
              }}
            />

            <div className="id-actions">
              <div className="id-file-name" title={aadharBackName || 'No file chosen'}>
                {aadharBackName ? aadharBackName : 'Pas...'}
              </div>
              <button type="button" className="link" onClick={() => backRef.current?.click()}>Change</button>
              <button
                type="button"
                className="link danger"
                onClick={() => {
                  if (aadharBackUrl) URL.revokeObjectURL(aadharBackUrl);
                  setAadharBackUrl(null);
                  setAadharBackName('');
                  if (backRef.current) backRef.current.value = '';
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Addresses, etc. (unchanged) ---------- */}
        <label>Permanent Address
          <textarea value={form.permanentAddress} onChange={e => setForm({ ...form, permanentAddress: e.target.value })} rows={2} />
        </label>

        <div className="inline">
          <label>Mobile No.
            <input value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} type="text"  />
          </label>
          <label>Email
            <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} type="email"  />
          </label>
        </div>

        <label>Temporary Address
          <textarea value={form.tempAddress} onChange={e => setForm({ ...form, tempAddress: e.target.value })} rows={2} />
        </label>

        <label>Identification Mark
          <input value={form.idMark} onChange={e => setForm({ ...form, idMark: e.target.value })} type="text" />
        </label>

        <label>Height at time of registration
          <input value={form.height} onChange={e => setForm({ ...form, height: e.target.value })} type="text" />
        </label>

        <label>Blood Group
          <input value={form.bloodGroup} onChange={e => setForm({ ...form, bloodGroup: e.target.value })} type="text" />
        </label>

        {/* Sport Category */}
        <label>Sport Category</label>
        <Select
          isMulti
          options={categoryOptions}
          placeholder="Select Sport Category"
          value={form.sportCategory.map(v => ({ value: v, label: v }))}
          onChange={(vals: MultiValue<{ value: string; label: string }>) =>
            setForm(prev => ({ ...prev, sportCategory: vals.map(v => v.value) }))
          }
          styles={{ container: base => ({ ...base, marginBottom: 16 }) }}
        />

        {/* Events */}
        <label>Events</label>
        <Select
          options={eventOptions}
          placeholder={!form.gender || form.sportCategory.length === 0 ? 'Select Gender and Sport Category first' : 'Select Event'}
          isClearable
          isDisabled={!form.gender || form.sportCategory.length === 0}
          value={form.events ? { value: form.events, label: form.events } : null}
          onChange={(opt: SingleValue<{ value: string; label: string }>) =>
            setForm(prev => ({ ...prev, events: opt?.value ?? '' }))
          }
        />

        {/* Achievements */}
        <label className="achievements-block">Upload Achievement Documents</label>
        {achievementLevels.map((level) => (
          <div key={level.key} className="achievement-section">
            <label>{level.name}</label>
            <textarea
              placeholder="Mention achievements with dates and location"
              value={form.achievements[level.key]}
              onChange={e =>
                setForm(prev => ({ ...prev, achievements: { ...prev.achievements, [level.key]: e.target.value } }))
              }
            />
            <input className="achievement-file" type="file" />
          </div>
        ))}

        <label>Qualification
          <input value={form.qualification} onChange={e => setForm({ ...form, qualification: e.target.value })} type="text" />
        </label>

        <label>College / University
          <input value={form.college} onChange={e => setForm({ ...form, college: e.target.value })} type="text" />
        </label>

        <label>Address of College / University
          <textarea value={form.collegeAddress} onChange={e => setForm({ ...form, collegeAddress: e.target.value })} />
        </label>

        <label>Registration Category</label>
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

        <label>Social Media Accounts</label>
        <input value={form.instagram} onChange={e => setForm({ ...form, instagram: e.target.value })} type="text" placeholder="Instagram" />
        <input value={form.facebook} onChange={e => setForm({ ...form, facebook: e.target.value })} type="text" placeholder="Facebook" />
        <input value={form.twitter} onChange={e => setForm({ ...form, twitter: e.target.value })} type="text" placeholder="Twitter" />

        <label>Login Username
          <input value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} type="text"  />
        </label>
        <label>Login Password
          <input value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} type="password"  />
        </label>

        {/* ---------- Signature (AT THE BOTTOM) ---------- */}
        <label style={{ marginTop: 20 }}>Signature</label>
        <div className="signature-wrap">
          <div className="signature-preview">
            {signatureUrl
              ? <img src={signatureUrl} alt="Signature" />
              : <div className="photo-placeholder">Upload Signature</div>}
          </div>

          {/* hidden input */}
          <input ref={signRef} type="file" accept="image/*" style={{ display: 'none' }}
            onChange={e => {
              const f = e.target.files?.[0];
              buildPreview(f, signatureUrl, setSignatureUrl);
              setSignatureName(f ? f.name : '');
            }}
          />

          <div className="id-actions" style={{ justifyContent: 'center' }}>
            <div className="id-file-name" title={signatureName || 'No file chosen'}>
              {signatureName ? signatureName : 'Pas...'}
            </div>
            <button type="button" className="link" onClick={() => signRef.current?.click()}>Change</button>
            <button type="button" className="link danger"
              onClick={() => {
                if (signatureUrl) URL.revokeObjectURL(signatureUrl);
                setSignatureUrl(null); setSignatureName('');
                if (signRef.current) signRef.current.value = '';
              }}>
              Remove
            </button>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HOARegistrationForm;
