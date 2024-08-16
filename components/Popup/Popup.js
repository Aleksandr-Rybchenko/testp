export function Popup() {
    const popup = document.createElement('div');
    popup.innerHTML = `
     <div id="popup" class="popup">
      <div class="popup-content">
        <div class="popup-img">
          <img src="/img/popap.png" alt="popap" />
        </div>
        <span class="close">&times;</span>
        <div class="popup-text">
          <h2>How to do a Website Audit to Improve SEO & Conversions</h2>
          <p>You will get an SMS with a link to the webinar</p>
          <form id="contactForm">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
            <span id="nameError" class="error-message"></span>

            <label for="phone">Phone</label>
            <div class="custom-phone-input">
              <select id="countryCode" name="countryCode" class="country-select">
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+380">🇺🇦 +380</option>
              </select>
              <input type="tel" id="phone" name="phone" class="phone-input" placeholder="XX XXX XXXX"/>
            </div>
            <span id="phoneError" class="error-message"></span>
            <div class="buttons-container">
            <button type="submit" disabled>Support</button>
            <button type="submit">Contact sales</button>
            </div>
            <div class="checkbox-wrapper">
                <input type="checkbox" id="terms" class="checkbox-term" name="terms" required />
                <span  class="terms-text">
                By sending up? you agree to our <a href="#Conditions">Conditions</a> and <a href="#Privacy">Privacy Policy</a>
                </span>
             </div>
             
             <div class="model-brand">
                <object class="model-brand_icon" type="image/svg+xml" data="/img/brand.svg"></object>
                <p class="model-brand_text">Powered by <span>Plerdy</span> </p>
             </div>
          </form>
        </div>
      </div>
    </div>
  `;

    const style = document.createElement('style');
    style.innerHTML = `
      .error-message {
        color: red;
        font-size: 12px;
        display: none;
      }
      input.error-border, select.error-border {
        border-color: red;
      }
      .custom-phone-input {
        display: flex;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 15px;
      }
      .country-select {
        background-color: #f9f9f9;
        border: none;
        padding: 0 8px;
        font-size: 14px;
        height: 40px;
        outline: none;
        appearance: none; 
        -webkit-appearance: none;
        -moz-appearance: none;
      }
      .phone-input {
        border: none;
        padding: 8px;
        flex: 1;
        font-size: 14px;
        height: 40px;
        outline: none;
      }
      .custom-phone-input select:focus, .custom-phone-input input:focus {
        border-color: #66afe9;
        box-shadow: 0 0 5px rgba(102, 175, 233, 0.6);
      }
    `;
    document.head.appendChild(style);

    const nameInput = popup.querySelector('#name');
    const phoneInput = popup.querySelector('#phone');
    const countrySelect = popup.querySelector('#countryCode');
    const nameError = popup.querySelector('#nameError');
    const phoneError = popup.querySelector('#phoneError');


    phoneInput.addEventListener('input', function (event) {
        let input = phoneInput.value.replace(/\D/g, '');
        input = input.substring(0, 9);
        const areaCode = input.substring(0, 2);
        const middlePart = input.substring(2, 5);
        const lastPart = input.substring(5, 9);

        if (input.length > 5) {
            phoneInput.value = `${areaCode} ${middlePart} ${lastPart}`;
        } else if (input.length > 2) {
            phoneInput.value = `${areaCode} ${middlePart}`;
        } else if (input.length > 0) {
            phoneInput.value = `${areaCode}`;
        }
    });


    function validateInput(inputElement, errorElement) {
        if (inputElement.value.trim() === '') {
            errorElement.textContent = `${inputElement.name} is required`;
            errorElement.style.display = 'block';
            inputElement.classList.add('error-border');
        } else {
            errorElement.style.display = 'none';
            inputElement.classList.remove('error-border');
        }
    }


    popup.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        let valid = true;

        validateInput(nameInput, nameError);
        validateInput(phoneInput, phoneError);

        if (nameInput.classList.contains('error-border') || phoneInput.classList.contains('error-border')) {
            valid = false;
        }

        if (valid) {

            alert('Form submitted successfully!');
        }
    });


    nameInput.addEventListener('input', () => validateInput(nameInput, nameError));
    phoneInput.addEventListener('input', () => validateInput(phoneInput, phoneError));
    countrySelect.addEventListener('input', () => validateInput(countrySelect, phoneError));

    return popup;
}
