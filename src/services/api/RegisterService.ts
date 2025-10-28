// src/services/apiService.ts
// import { API_BASE_URL } from '../../config';

// export const apiFetch = async (endpoint: string, body?: any) => {
//   const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
//     method: body ? 'POST' : 'GET', // POST if body is provided
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: body ? JSON.stringify(body) : undefined, // only send body if provided
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(`API Error (${response.status}): ${errorText}`);
//   }

//   // return only the response data
//   return response.json();
// };


// src/services/apiService.ts
import { API_BASE_URL } from "../../config";

export const apiFetch = async (endpoint: string, formData: FormData) => {
  console.log("API Base URL:", API_BASE_URL);

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      body: formData,
    });

    // Parse JSON from backend
    let data: any = {};
    try {
      data = await response.json();
    } catch (e) {
      // If backend returns no JSON
      data = { message: "No response body" };
    }

    return {
      status: response.status,
      ok: response.ok,
      data, // ✅ parsed backend response
    };
  } catch (error: any) {
    console.error("API Error:", error);
    return {
      status: 0,
      ok: false,
      data: { message: error.message || "Unknown error" },
    };
  }
};


