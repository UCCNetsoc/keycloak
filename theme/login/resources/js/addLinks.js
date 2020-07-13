
window.onload = () => {
  const form = document.getElementById("kc-form-buttons");
  form.insertAdjacentHTML('beforeend',`
    <button type="button" style="background-color: #4CAF50" class="btn" onclick="window.open('http://admin.netsoc.co/accounts/sign-up');">Sign Up</button>
    <button type="button" style="background-color: rgba(0,0,0,0.20)" class="btn" onclick="window.open('http://admin.netsoc.co/accounts/password-reset');">Reset Password</button>
    <button type="button" style="background-color: rgba(0,0,0,0.20)" class="btn" onclick="window.open('http://admin.netsoc.co/accounts/verification-email');">Resend Verification</button>
    <div style="
      margin: 0 auto;
      text-align: center;
      padding-top: 16px;
      font-size: 11px;
      color: gray;
    ">
      <a target="_blank" href="https://raw.githubusercontent.com/UCCNetsoc/privacy-policy/master/README.md">Acceptable Usage Policy</a>
      <span> &bull; </span>
      <a target="_blank" href="https://raw.githubusercontent.com/UCCNetsoc/acceptable-usage-policy/master/README.md">Privacy Policy</a>
      <p>Your use of our services is in agreement of our Acceptable Usage &amp; Privacy Policies</p>
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
    <p>If you had signed up to a previous version of netsocadmin, you will need to reset your password</p>
  </div>`
}

