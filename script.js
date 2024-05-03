
document.addEventListener("DOMContentLoaded", function() {
  
  const introTitle = "A history of everything you copy";
  const introText = "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.";
  const buttonTexts = {
    ios: "Download for iOS",
    mac: "Download for Mac"
  };

  
  function renderIntroduction() {
    const introContainer = document.querySelector('.intro');
    introContainer.innerHTML = `
      <h2>${introTitle}</h2>
      <span class="guide">${introText}</span>
      <div class="action_button">
        <button class="dowload ios">${buttonTexts.ios}</button>
        <button class="download mac">${buttonTexts.mac}</button>
      </div>
    `;
  }

  
  renderIntroduction();

  
  function renderSectionTwo() {
    const sectionTwoContainer = document.querySelector('.two');
    sectionTwoContainer.innerHTML = `
      <img src="./images/image-computer.png" alt="">
      <div class="features">
        <div>
          <h3>Quick Search</h3>
          <span>Easily search your snippets by content, category, web address, application, and more.</span>
        </div>
        <div>
          <h3> iCloud Sync</h3>
          <span>Instantly saves and syncs snippets across all your devices.</span>
        </div>
        <div>
          <h3>Complete History</h3>
          <span>Retrieve any snippets from the first moment you started using the app.</span>
        </div>
      </div>
    `;
  }

  
  renderSectionTwo();

  
  function renderSectionThree() {
    const sectionThreeContainer = document.querySelector('.three');
    sectionThreeContainer.innerHTML = `
      <div>
        <h3>Access Clipboard anywhere</h3>
        <span>
          Whether you’re on the go, or at your computer, you can access all your Clipboard 
          snippets in a few simple clicks.
        </span>
      </div>
      <img src="./images/image-devices.png" alt="">
      <div>
        <h3>Supercharge your workflow</h3>
        <span>
          We’ve got the tools to boost your productivity.
        </span>
      </div>
    `;
  }

  
  renderSectionThree();

  
  function renderSectionFour() {
    const sectionFourContainer = document.querySelector('.four');
    sectionFourContainer.innerHTML = `
      <div class="functions">
        <div>
          <img src="./images/icon-blacklist.svg" alt="">
          <h3>Create blacklists</h3>
          <span>
            Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
          </span>
        </div>
        <div>
          <img src="./images/icon-text.svg" alt="">
          <h3>Plain text snippets</h3>
          <span>
            Remove unwanted formatting from copied text for a consistent look.
          </span>
        </div>
        <div>
          <img src="./images/icon-preview.svg" alt="">
          <h3>Sneak preview</h3>
          <span>
            Quick preview of all snippets on your Clipboard for easy access.
          </span>
        </div>
      </div>

      <div class="support_companys">
        <img src="./images/logo-google.png" alt="">
        <img src="./images/logo-ibm.png" alt="">
        <img src="./images/logo-microsoft.png" alt="">
        <img src="./images/logo-hp.png" alt="">
        <img src="./images//logo-vector-graphics.png" alt="">
      </div>
    `;
  }

 
  renderSectionFour();

  
  function renderSectionFive() {
    const sectionFiveContainer = document.querySelector('.five');
    sectionFiveContainer.innerHTML = `
      <h2>Clipboard for iOS and Mac OS</h2>
      <span>
        Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
        and you’re ready to start adding to your clipboard.
      </span>
      <div class="action_button">
        <button class="dowload ios">${buttonTexts.ios}</button>
        <button class="download mac">${buttonTexts.mac}</button>
      </div>
    `;
  }

  
  renderSectionFive();
});

document.addEventListener("DOMContentLoaded", function() {
  
  const socialMediaLinks = [
    { platform: "facebook", url: "" },
    { platform: "twitter", url: "" },
    { platform: "instagram", url: "" }
  ];

  
  function renderFooter() {
    const footerContainer = document.querySelector('footer');
    footerContainer.innerHTML = `
      <div class="foot">
        <img class='logo' src="./images/logo.svg" alt="">
        <ul class="navigation">
          <li><a href="">FAQs</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Press Kit</a></li>
          <li><a href="">Install Guide</a></li>
        </ul>
        <div class="social_link">
          ${renderSocialLinks(socialMediaLinks)}
        </div>
      </div>
      <p class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Syntactic Dev</a>.
      </p>
    `;
  }

  
  function renderSocialLinks(links) {
    return links.map(link => `<a href="${link.url}" class="${link.platform}"><img src="./images/icon-${link.platform}.svg" alt=""></a>`).join('');
  }

  
  renderFooter();
});

