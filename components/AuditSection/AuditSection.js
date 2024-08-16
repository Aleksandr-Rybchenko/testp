export function AuditSection() {
    const section = document.createElement('section');
    section.innerHTML = `
    <div class="audit">
          <div class="audit-text">
            <h1>How to do a Website Audit to Improve SEO & Conversions</h1>
            <p class="audit-text-black">
              Usability auditing with the Plerdy tool is a comprehensive expert
              assessment of your website based on a profound study of user
              behavior registered on it. Plerdy will provide you with crucial
              data based on which you will be able to run an efficient usability
              audit of your website, identify and fix SEO issues, and
              subsequently lead it to higher positions in search.
            </p>
            <p class="audit-text-gray">
              Thus, you'll compile a list of flaws in your website interface,
              navigation, and conversion path that can eventually affect its
              micro and macro conversion rates.
            </p>
            <button class="btn-blu">Run the Plerdy tool</button>
            <p class="audit-text-icon">
              Trusted by some of the world's largest enterprises
            </p>
            <div class="audit-icon">
              <div>
                <object type="image/svg+xml" data="/img/anex.svg"></object>
              </div>
              <div>
                <object type="image/svg+xml" data="/img/prom.svg"></object>
              </div>
              <div>
                <object type="image/svg+xml" data="/img/anex.svg"></object>
              </div>
              <div>
                <object type="image/svg+xml" data="/img/prom.svg"></object>
              </div>
              <div>
                <object type="image/svg+xml" data="/img/anex.svg"></object>
              </div>
            </div>
          </div>
          <div class="audit-img">
            <div class="audit-img-linkedin">
              <img src="/img/linkedin-sales.png" alt="linkedin-sales" />
            </div>
            <div class="schedule-up">
              <object type="image/svg+xml" data="/img/up.svg"></object>
            </div>
            <div class="schedule-right">
              <object type="image/svg+xml" data="/img/right.svg"></object>
            </div>
            <div class="schedule-down">
              <object type="image/svg+xml" data="/img/down.svg"></object>
            </div>
          </div>
        </div>
  `;
    return section;
}
