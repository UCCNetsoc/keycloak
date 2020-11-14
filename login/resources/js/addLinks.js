
window.onload = () => {
  const form = document.getElementById("kc-form-buttons");
  form.insertAdjacentHTML('beforeend',`
    <button type="button" style="background-color: #4CAF50" class="btn" onclick="window.open('https://netsoc.cloud/accounts/sign-up');">Sign Up</button>
    <button type="button" style="background-color: rgba(0,0,0,0.20)" class="btn" onclick="window.open('https://netsoc.cloud/accounts/password-reset');">Reset Password</button>
    <button type="button" style="background-color: rgba(0,0,0,0.20)" class="btn" onclick="window.open('https://netsoc.cloud/accounts/verification-email');">Resend Verification</button>
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
    <p>if you had signed up to Netsoc Admin prior 2021,<br/><a target="_blank" href="https://wiki.netsoc.co/en/services/migration">please consult our wiki article on migration</a></p>
  </div>`
}


