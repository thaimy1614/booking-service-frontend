export const SendRequest = (name, email, isOpen, type, message) => {
  fetch(process.env.REACT_APP_API + "/request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.result === true) {
        isOpen(true);
        type(true);
        message(
          "Đã nhận được yêu cầu, vui lòng kiểm tra email và liên hệ với chúng tôi!"
        );
      }
      return;
    })
    .catch((error) => {
      isOpen(true);
      type(false);
      message("Đã có lỗi xảy ra, vui lòng thử lại!");
      console.log(error);
    });
};
