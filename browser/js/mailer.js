export const sendEmail = async (email) => {
  try {
    const response = await fetch("http://localhost:9900/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Email sent successfully:", data);
      return data.code;
    } else {
      console.error("Error sending email:", data);
    }
  } catch (error) {
    console.error("Request error:", error);
  }
};
