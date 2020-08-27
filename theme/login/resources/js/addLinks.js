
window.onload = () => {
  const form = document.getElementById("kc-form-buttons");
  form.insertAdjacentHTML('beforeend',`
    <button type="button" style="background-color: #4CAF50" class="btn" onclick="window.open('https://admin.netsoc.co/accounts/sign-up');">Sign Up</button>
    <button type="button" style="background-color: rgba(0,0,0,0.20)" class="btn" onclick="window.open('https://admin.netsoc.co/accounts/password-reset');">Reset Password</button>
    <button type="button" style="background-color: rgba(0,0,0,0.20)" class="btn" onclick="window.open('https://admin.netsoc.co/accounts/verification-email');">Resend Verification</button>
    <div style="
      margin: 0 auto;
      text-align: center;
      padding-top: 16px;
      font-size: 11px;
      color: gray;
    ">
      <a target="_blank" href="https://wiki.netsoc.co/en/services/terms-of-service">Terms of Service</a>
      <span> &bull; </span>
      <a target="_blank" href="https://wiki.netsoc.co/en/services/privacy-policy">Privacy Policy</a>
    </div>
  `);

  const formOptions = document.getElementById("kc-form-options");
  formOptions.innerHTML += `
  <div style="
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
    color: gray;
    margin-bottom: 16px;
  ">
    <p>if you had signed up to netsocadmin prior to the 2020/2021 academic year, you will need to <a target="_blank" href="https://admin.netsoc.co/accounts/password-reset">reset your password</a></p>
  </div>`
}


