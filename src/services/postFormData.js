const API_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export default async function postData(Data) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Data),
        });

        const data = await response.json();
        console.log(data);
        return { message: "Data posted successfully!", code: 200 };
    } catch (error) {
        console.error("Error posting data:", error);
        return { message: "Error occurred!", code: error.code || 500 };
    }
}
