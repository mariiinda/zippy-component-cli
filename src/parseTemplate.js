const fs = require("fs");
const path = require("path");

const templatePath = path.join(__dirname, "templates/component.jsx");
const classTemplatePath = path.join(__dirname, "templates/class-component.jsx");

module.exports = (componentName, isFunctionComponent) => {
  const componentTemplatePath = isFunctionComponent
    ? templatePath
    : classTemplatePath;

  const fileContents = fs.readFileSync(componentTemplatePath, "utf8");
  return fileContents.replace(/ComponentName/gi, componentName);
};
