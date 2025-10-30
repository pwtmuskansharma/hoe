import { API_BASE_URL } from "../../config";

/**
 * Generic POST API call
 */
export const apiFetch = async (endpoint: string, formData: FormData) => {
  console.log("API Base URL:", API_BASE_URL);

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      body: formData,
    });

    let data: any = {};
    try {
      data = await response.json();
    } catch (e) {
      data = { message: "No response body" };
    }

    return {
      status: response.status,
      ok: response.ok,
      data,
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

/**
 * ✅ Fetch all Sports
 */
export const fetchSports = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sports`);
    const data = await response.json();
    return {
      ok: response.ok,
      status: response.status,
      data,
    };
  } catch (error: any) {
    console.error("Fetch Sports Error:", error);
    return {
      ok: false,
      status: 0,
      data: { message: error.message || "Failed to fetch sports" },
    };
  }
};

/**
 * ✅ Fetch Sport Categories by Sport ID
 */
export const fetchSportCategories = async (sportId: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories?sport_id=${sportId}`);
    const data = await response.json();
    return {
      ok: response.ok,
      status: response.status,
      data,
    };
  } catch (error: any) {
    console.error("Fetch Sport Categories Error:", error);
    return {
      ok: false,
      status: 0,
      data: { message: error.message || "Failed to fetch categories" },
    };
  }
};
