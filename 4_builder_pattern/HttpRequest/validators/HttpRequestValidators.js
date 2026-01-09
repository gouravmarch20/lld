const VALID_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"];

export function validateHttpRequestFields(data) {
  const errors = [];

  // Required fields
  if (!data.method) errors.push("Missing required field: method");
  if (!data.url) errors.push("Missing required field: url");

  // Method validation
  if (data.method && !VALID_METHODS.includes(data.method.toUpperCase())) {
    errors.push(
      `Invalid HTTP method '${data.method}'. Allowed: ${VALID_METHODS.join(
        ", "
      )}`
    );
  }

  // Body rules
  if (["GET", "DELETE"].includes(data.method?.toUpperCase()) && data.body) {
    errors.push(`${data.method} request must not include a body`);
  }

  if (
    ["POST", "PUT", "PATCH"].includes(data.method?.toUpperCase()) &&
    !data.body
  ) {
    errors.push(`${data.method} request must include a body`);
  }

  // URL validation
  try {
    new URL(data.url);
  } catch (e) {
    errors.push(`Invalid URL: ${data.url}`);
  }

  // Timeout and retries
  if (data.timeout != null && (isNaN(data.timeout) || data.timeout <= 0))
    errors.push(`Invalid timeout value: ${data.timeout}`);
  if (data.retries != null && (isNaN(data.retries) || data.retries < 0))
    errors.push(`Invalid retries value: ${data.retries}`);

  return errors;
}
