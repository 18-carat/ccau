import { addButton, observeDOM } from "./utils";
import { isLiveCourse } from "./live";

async function main() {
  if (!document.querySelector("#global_nav_accounts_link")) {
    throw new Error("Only admins can use CCAU");
  }

  if (await isLiveCourse()) {
    throw new Error("CCAU is disabled in live courses")
  }

  observeDOM(document.body, () => setTimeout(addButton, 500));
}

main();