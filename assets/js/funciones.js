$(() => {
  const nameInput = $("#name");
  const mailInput = $("#mail");
  const msgInput = $("#msg");

  const button = $('button[type="submit"]');

  const isEmpty = (input) => {
    return input.length === 0;
  };

  const formValidate = (event) => {
    event.preventDefault();
    
    const nameVal = nameInput.val();
    const mailVal = mailInput.val();
    const msgVal = msgInput.val();

    const nameAlert = $("#name-alert");
    const mailAlert = $("#mail-alert");
    const msgAlert = $("#msg-alert");

    if (isEmpty(nameVal)) {
      nameAlert.css("display", "block");
      button.prop("disabled", true);
    } else {
      nameAlert.css("display", "none");
    }
    if (isEmpty(mailVal)) {
      mailAlert.css("display", "block");
      button.prop("disabled", true);
    } else {
      mailAlert.css("display", "none");
    }
    if (isEmpty(msgVal)) {
      msgAlert.css("display", "block");
      button.prop("disabled", true);
    } else {
      msgAlert.css("display", "none");
    }
  };

  const inputValidate = (event) => {
    $(event.currentTarget).next().css("display", "none");
    button.prop("disabled", false);
  };

  $("#form").submit(formValidate);
  nameInput.on("input", inputValidate);
  mailInput.on("input", inputValidate);
  msgInput.on("input", inputValidate);
});
