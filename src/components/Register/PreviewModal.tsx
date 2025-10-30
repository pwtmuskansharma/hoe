import React from "react";

interface PreviewModalProps {
  form: any;
  onConfirm: () => Promise<void>;
  onCancel: () => void;
  photoUrl?: string | null;
  aadharFrontUrl?: string | null;
  aadharBackUrl?: string | null;
  signatureUrl?: string | null;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  form,
  photoUrl,
  aadharFrontUrl,
  aadharBackUrl,
  signatureUrl,
  onConfirm,
  onCancel,
}) => {
  console.log("formrmmr",form );
  debugger
  // ✅ Prevent crashes if form is undefined
  if (!form) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-center">Registration Preview</h2>

        {/* ===== Personal Details ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
          <p><span className="font-semibold">First Name:</span> {form?.firstName || "—"}</p>
          <p><span className="font-semibold">Middle Name:</span> {form?.middleName || "—"}</p>
          <p><span className="font-semibold">Last Name:</span> {form?.lastName || "—"}</p>
          <p><span className="font-semibold">Father’s Name:</span> {form?.fathersName || "—"}</p>
          <p><span className="font-semibold">Mother’s Name:</span> {form?.mothersName || "—"}</p>
          <p><span className="font-semibold">Date of Birth:</span> {form?.dob || "—"}</p>
          <p><span className="font-semibold">Gender:</span> {form?.gender || "—"}</p>
          <p><span className="font-semibold">Permanent Address:</span> {form?.permanentAddress || "—"}</p>
          <p><span className="font-semibold">Temporary Address:</span> {form?.tempAddress || "—"}</p>
          <p><span className="font-semibold">Mobile:</span> {form?.mobile || "—"}</p>
          <p><span className="font-semibold">Email:</span> {form?.email || "—"}</p>
          <p><span className="font-semibold">Identification Mark:</span> {form?.idMark || "—"}</p>
          <p><span className="font-semibold">Height:</span> {form?.height || "—"} cm</p>
          <p><span className="font-semibold">Blood Group:</span> {form?.bloodGroup || "—"}</p>
          <p><span className="font-semibold">Qualification:</span> {form?.qualification || "—"}</p>
          <p><span className="font-semibold">College:</span> {form?.college || "—"}</p>
          <p><span className="font-semibold">College Address:</span> {form?.collegeAddress || "—"}</p>
          <p><span className="font-semibold">Registration Category:</span> {form?.regCategory || "—"}</p>
          <p><span className="font-semibold">Instagram:</span> {form?.instagram || "—"}</p>
          <p><span className="font-semibold">Username:</span> {form?.username || "—"}</p>
<p><span className="font-semibold">Event:</span>   {form?.categoryId && Array.isArray(form?.categoryId) && form.categoryId.length > 0
    ? form.categoryId.map((cat: any) => cat.name).join(", ")
    : "—"}</p>
<p><span className="font-semibold">Sport:</span> {form?.sportId?.name || "—"}</p>
<p>
  <span className="font-semibold">Sport Categories:</span>{" "}
  {form?.categoryId && Array.isArray(form?.categoryId) && form.categoryId.length > 0
    ? form.categoryId.map((cat: any) => cat.name).join(", ")
    : "—"}
</p>

        </div>


{/* ===== Uploaded Documents ===== */}
<div className="mt-8 bg-gray-50 rounded-lg p-4 shadow-sm">
  <h3 className="text-lg font-semibold mb-3 text-gray-700 text-center">
    Uploaded Documents
  </h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {photoUrl && (
      <div className="text-center">
        <p className="font-semibold mb-1">Passport Photo</p>
        <img
          src={photoUrl}
          alt="Passport"
          className="w-24 h-24 object-cover rounded-md mx-auto border"
        />
      </div>
    )}
    {aadharFrontUrl && (
      <div className="text-center">
        <p className="font-semibold mb-1">Aadhar Front</p>
        <img
          src={aadharFrontUrl}
          alt="Aadhar Front"
          className="w-24 h-24 object-cover rounded-md mx-auto border"
        />
      </div>
    )}
    {aadharBackUrl && (
      <div className="text-center">
        <p className="font-semibold mb-1">Aadhar Back</p>
        <img
          src={aadharBackUrl}
          alt="Aadhar Back"
          className="w-24 h-24 object-cover rounded-md mx-auto border"
        />
      </div>
    )}
    {signatureUrl && (
      <div className="text-center">
        <p className="font-semibold mb-1">Signature</p>
        <img
          src={signatureUrl}
          alt="Signature"
          className="w-24 h-24 object-cover rounded-md mx-auto border"
        />
      </div>
    )}
  </div>
</div>

{/* ===== Achievements Section ===== */}
{(form.achievements.districtText ||
  form.achievements.stateText ||
  form.achievements.nationalText ||
  form.achievements.intlText ||
  form.achievements.otherAch) && (
  <div className="mt-8 bg-gray-50 rounded-lg p-4 shadow-sm">
    <h3 className="text-lg font-semibold mb-3 text-gray-700 text-center">
      Achievements
    </h3>

    <div className="space-y-4">
      {form.achievements.districtText && (
        <div>
          <p className="font-medium text-gray-700"> District Level</p>
          <p className="mt-1 whitespace-pre-line text-gray-600 bg-white p-2 rounded border">
            {form.achievements.districtText}
          </p>
        </div>
      )}

      {form.achievements.stateText && (
        <div>
          <p className="font-medium text-gray-700"> State Level</p>
          <p className="mt-1 whitespace-pre-line text-gray-600 bg-white p-2 rounded border">
            {form.achievements.stateText}
          </p>
        </div>
      )}

      {form.achievements.nationalText && (
        <div>
          <p className="font-medium text-gray-700"> National Level</p>
          <p className="mt-1 whitespace-pre-line text-gray-600 bg-white p-2 rounded border">
            {form.achievements.nationalText}
          </p>
        </div>
      )}

      {form.achievements.intlText  && (
        <div>
          <p className="font-medium text-gray-700"> International Level</p>
          <p className="mt-1 whitespace-pre-line text-gray-600 bg-white p-2 rounded border">
            {form.achievements.intlText }
          </p>
        </div>
      )}

      {form.achievements.otherAch && (
        <div>
          <p className="font-medium text-gray-700"> Other Achievements</p>
          <p className="mt-1 whitespace-pre-line text-gray-600 bg-white p-2 rounded border">
            {form.achievements.otherAch}
          </p>
        </div>
      )}
    </div>
  </div>
)}


        {/* ===== Buttons ===== */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Confirm & Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;