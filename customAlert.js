const CustomAlert = (
    customAlertInputText,
    textColor = "black",
    bgColor = "white"
) => {
    let body = document.querySelector("body");
    let customAlertBox = document.createElement("div");
    let customAlertSays = document.createElement("div");
    let customAlertText = document.createElement("div");
    let customAlertButton = document.createElement("button");
    body.appendChild(customAlertBox);
    [customAlertSays, customAlertText, customAlertButton].forEach((ele) => {
        customAlertBox.appendChild(ele);
    });

    customAlertBox.style = `
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 120px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3),-0px -0px 5px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: ${bgColor};
    transition: top 1s;
    `;

    customAlertSays.style = `
    color: ${textColor};
    margin: 5px 20px;
    font-size: large;
    `;

    customAlertText.style = `
    color: ${textColor};
    height: 20px;
    margin: 5px 20px;
    font-size: small;
    overflow: hidden;
    `;

    customAlertButton.style = `
    display: inline-block;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    background-color: #dadada;
    color: ${textColor};
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    position: absolute;
    bottom: 10%;
    right: 5%;
    border-radius: 10px;
    padding: 2% 4%;
    `;

    customAlertSays.innerHTML =
        window.location.href.match(/https?:\/\/([^\/]+)/)[1];
    customAlertText.innerHTML = customAlertInputText;
    customAlertButton.innerHTML = "OK";

    customAlertButton.addEventListener("mouseover", () => {
        customAlertButton.style.backgroundColor = "#a6a6a6";
    });
    customAlertButton.addEventListener("mouseleave", () => {
        customAlertButton.style.backgroundColor = "#dadada";
    });

    customAlertButton.addEventListener("click", () => {
        customAlertBox.style.top = "-100%";
    });
};
