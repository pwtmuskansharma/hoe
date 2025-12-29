import { API_BASE_URL } from "../../config";

export const pressRelease = async (endpoint: string) => {
  console.log("API BASE URL", API_BASE_URL);

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "GET",
    });

    // Paser JSON FROM BACKEND
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
