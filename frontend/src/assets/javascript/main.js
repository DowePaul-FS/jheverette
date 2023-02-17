class App {
  constructor() {
    console.log("Application Started");
    this.displayForm();
  }

  displayForm() {
      const btn = document.querySelector("#request");
      btn.addEventListener("click", e => this.addProposal(e));
      const btn1 = document.querySelector("#request1");
      btn1.addEventListener("click", e => this.addProposal(e));
      const btn2 = document.querySelector("#request2");
      btn2.addEventListener("click", e => this.addProposal(e));
  }

  addProposal(e) {
    const form = document.createElement("form");
    form.setAttribute("method", "get");
    form.setAttribute("action", "");
    form.setAttribute("novalidate", "");
    form.innerHTML = `
    <div class="modal fade bd-example-modal-lg" id="requestproposal">
    <div class="modal-dialog modal-xl">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title">Request Proposal</h5>
    <button type="button" class="close" data-dismiss="modal"
    aria-label="Close"><span aria-hidden="true">&times;</span>
    </button></div>
    <div class="modal-body">
    <div>
    JH.Everette & Associates guarantees all information is kept completely confidential and is deleted after 30 days. For any questions about the Request for Proposal, please contact us using any of the information provided below. Once the form has been completed we will provide you with a custom proposal within 48 hours.
    </div>
    <class="frm__container" role="form">
    <label for="name"></label>
    <input type="text" class="frm__name" id="name" name="name" placeholder="your name" required>
    <input type="email" class="frm__email" id="email" name="email" placeholder="your email address" required>
    <input type="phone" class="frm__phone" id="phone" name="phone" placeholder="phone" required>
    <input type="textarea" class="frm__company" id="company" name="company" placeholder="company">
    <input type="text" class="frm__city" id="city" name="city" placeholder="city" required>
    <input type="text" class="frm__state" id="state" name="state" placeholder="state" required>
    <textarea id="site" placeholder="Your website or desired web address?"></textarea>
    <textarea id="goal" placeholder="Your website goals?"></textarea>
    <textarea id="audience" placeholder="What is your target audience"></textarea>
    <textarea id="compare" placeholder="List some websites where you like the design?"></textarea>
    <div class="pro"><label>Do you require logo design?</label></div>
    <div class="pro"><input type="checkbox" class="frm__logo" id="logo" name="logo">
    <label for="logo">Yes</label></div>
    <div class="pro"><label>Do you Require Written Copy?</label></div>
    <div class="pro"><input type="checkbox" class="frm__copy" id="copy" name="copy">
    <label for="copy">Yes</label></div>
    <textarea id="competitor" placeholder="Please list a few of your competitors?"></textarea>
    <textarea id="cost" placeholder="What is your ideal cost for this project?"></textarea>
    <div class="start__btn">
          <button
                type="submit"
                class="req__button"
                id="request">
                submit request
              </button>
              <button type="button" class="req__button" data-dismiss="modal">Close</button>
        </div>
    </div>
    <div class="modal-footer mx-auto">JH.Everette & Associates, LLC
Contact: pauldowejr@jheverette.com
Phone: 555-555-5555
    </div>
    </div>
    </div>
    </div>
    </div>
    `;
    document.querySelector("body").append(form);
  }

  static getInstance() {
    if (!App._instance) {
      App._instance = new App();
      return App._instance;
    } else {
      throw "App Exist!!!";
    }
  }
}

//self executing function
(() => {
  const app = App.getInstance();
})();
