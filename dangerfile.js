import { danger, fail, warn } from "danger";

const isPR = typeof danger.github !== "undefined";

if (isPR) {
  const pr = danger.github.pr;
  const reviews = danger.github.reviews || [];
  const requestedReviewers = pr.requested_reviewers || [];

  const approvingReviews = reviews.filter(review => review.state === "APPROVED");
  
  if (approvingReviews.length < 1 && requestedReviewers.length === 0) {
    fail("❌ PR ERROR: Your GitHub ruleset requires at least 1 approving review from a Code Owner before merging.");
  }

  if (pr.comments > 0) {
    fail("❌ PR ERROR: All review comment threads must be completely resolved before this PR can be merged.");
  }
}

const modifiedFiles = danger.git.modified_files || [];
const hasCodeChanges = modifiedFiles.some(file => 
  file.endsWith(".js") || 
  file.endsWith(".ts") || 
  file.endsWith(".tsx") || 
  file.endsWith(".py") || 
  file.endsWith(".bps") || 
  file.endsWith(".ips")
);

if (hasCodeChanges) {
  console.log("ℹ️ CI INFO: Code changes detected. Code quality check requirements triggered successfully.");
}
