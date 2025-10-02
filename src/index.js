//logic goes here
module.exports = input_integer;

const sheet = new CSSStyleSheet();
const theme = get_theme();
sheet.replaceSync(theme);

function input_integer() {
  const el = document.createElement("div");
  const shadow = el.attachShadow({ mode: "closed" });

  const input = document.createElement("input");
  input.type = "number";
  shadow.append(input);

  shadow.adoptedStyleSheets = [sheet];
  return el;
}

function get_theme() {
  return `
    input {
        padding: 4px 8px;
        background-color: blue;
        border-radius: 8px;
    }
    input:focus {
        outline: none;
        border: 2px solid red;
    }
`;
}
