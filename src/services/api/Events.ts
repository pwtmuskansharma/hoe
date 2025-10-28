import { API_BASE_URL } from "../../config";

export const apiFetch = async (endpoint: string) => {
  console.log("API Base URL:", API_BASE_URL);

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "GET",
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