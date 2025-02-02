export async function sendVerificationEmail(email, otp) {
    try {
      const mailResponse = await mailSender(
        email,
        "Verification Email",
        `<h1>Please confirm your OTP</h1>
         <p>Here is your OTP code: ${otp}</p>`
      );
    } catch (error) {
      throw error;
    }
  }

  