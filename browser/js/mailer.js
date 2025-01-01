export const sendEmail = async (email) => {
  try {
    const response = await fetch("https://testing-task-jvbe.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (response.ok) {
      return data.code;
    }
  } catch (error) {
    console.error("Request error:", error);
  }
};
