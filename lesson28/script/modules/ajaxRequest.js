  // Send Form through AJAX function
  const sendForm = () => {
    const input = document.querySelectorAll("input");

    // Validation Messages
    const errorMessage = "Something went wrong...",
      successMessage = "Message successfully sent!",
      loadMessage = "Loading...";

    // Get form
    const forms = document.querySelectorAll("form");

    // Status Message
    const statusMessage = document.createElement("div");
    statusMessage.classList.add("status-message");
    statusMessage.style.cssText = `font: normal 2rem Roboto; color: white;`;
    // statusMessage.textContent = 'Statu Message Text Goes Here';

    // Parse all forms and went through event handler
    forms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        // After click on send CTA show >> Loading message...
        // statusMessage.textContent = loadMessage;

        // After click on send button > show spinner instead loading text
        const preloader = () => {
          return `
            <div class="preloader">
              <img src="https://cdn.discordapp.com/attachments/691908252677439488/707284938767990784/svg_preloader.svg"></img>
            </div>
          `;
        };
        statusMessage.innerHTML = preloader();

        // Prepare object
        const formData = new FormData(form);
        const body = {};
        formData.forEach((value, key) => (body[key] = value));

        const outputData = () => {
            statusMessage.textContent = successMessage;
            // Clear all inputs after message was sent
            input.forEach((input) => (input.value = ""));
          },
          error = (error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
          };

        // Send to promise on execution
        postData(body)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error("status newtwork not 200");
            }
            console.log(response);
            statusMessage.textContent = successMessage;
          })
          .catch((error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
          });
      });

      // Input filter validation handler
      form.addEventListener("input", (event) => {
        const target = event.target,
          sendButton = document.querySelector(".btn");

        const addStyles = () => {
          target.style.cssText = `border: 1px solid red`;
          form.appendChild(statusMessage);
          statusMessage.textContent =
            "You have entered an insufficient number of digits, must be from 8 up to 12 numbers";
          statusMessage.style.cssText = `color: #E25741;`;
        };

        const resetStyles = () => {
          statusMessage.remove();
          sendButton.disabled = false;
          target.style.cssText = `border: auto;`;
          statusMessage.style.cssText = `color: #FFFFFF;`;
        };

        // Name Field
        if (target.name === "user_name") {
          target.value = target.value.replace(/[^A-z-]/gi, "");
        }
        // Email Field
        if (target.name === "user_email") {
          target.value = target.value.replace(/^\w+@\w+\.\w{4,}$/gi, "");
        }
        // Phone# Field
        if (target.name === "user_phone") {
          // Minium letters, hilight error message + hilight input
          if (target.value.length <= 8) {
            sendButton.disabled = true;
            addStyles();
          }
          if (target.value.length > 8) {
            resetStyles();
          }
          // Limitation of typing plus(+) button
          if (!/^\+?(\d){0,18}$/g.test(target.value)) {
            target.value = target.value.substring(0, target.value.length - 1);
          }
          // If field is empty reset all styles
          if (target.value === "") {
            resetStyles();
          }
        }
        // Message Field
        if (target.name === "user_message") {
          target.value = target.value.replace(/[^A-z-!?\s]/gi, "");
        }
      });
    });

    // AJAX Connection setup
    const postData = (body) => {
      return fetch("./server.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(body),
      });
    };
  };

  export default sendForm;