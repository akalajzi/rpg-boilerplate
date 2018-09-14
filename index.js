// @flow strict

// Catch CTRL/CMD+C interrupts cleanly
process.on("SIGINT", () => {
  process.exit();
});

let script = ""

if (process.env.npm_lifecycle_event === "build") {
  script = "build";
} else {
  script = process.env.NODE_ENV === "production" ? "production" : "development";
}

// Start the script
require(`./src/runner/${script}`);
