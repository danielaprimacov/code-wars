const domainName = (url) =>
  url
    .replace(/^\w+:\/\//, "")
    .replace(/^www\d*\./, "")
    .split("/")[0]
    .split(".")[0];
