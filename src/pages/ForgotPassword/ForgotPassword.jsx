import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div>
      <section class="wrapper">
        <div class="container mt-5">
          <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 text-center">
            <form id="otp-form" class="rounded bg-white shadow p-5">
              <h3 class="text-dark fw-bolder fs-4 mb-2">OTP Verification</h3>

              <div class="fw-normal text_gray">
                Enter the verification code we sent to
              </div>

              <div class="d-flex align-items-center justify-content-center fw-bold mb-4 text_gray">
                <span id="email">name@gmail.com</span>
              </div>

              <div class="input-group mb-3 mt-3">
                <input
                  type="text"
                  id="otpInput"
                  class="form-control"
                  placeholder="Type your 6 digit OTP"
                  aria-label="otp"
                />
              </div>

              <div class="input-group mb-3 mt-3">
                <input
                  type="password"
                  id="newPasswordInput"
                  class="form-control"
                  placeholder="New Password"
                  aria-label="New Password"
                />
              </div>

              <div class="input-group mt-3">
                <input
                  type="password"
                  id="confirmPasswordInput"
                  class="form-control"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                />
              </div>

              <button
                id="reset-password"
                type="submit"
                class="btn btn-primary submit_btn mt-4 mb-4"
              >
                Submit
              </button>

              <div class="fw-normal text-muted mb-2">
                Didn’t get the code ?{" "}
                <a href="/" class="text-primary fw-bold text-decoration-none">
                  Resend
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
