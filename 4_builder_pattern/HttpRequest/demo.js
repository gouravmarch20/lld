import { HttpRequestBuilder } from "../builders/HttpRequestBuilder.js";

try {
  const request = HttpRequestBuilder.builder()
    .post("https://api.example.com/users", JSON.stringify({ name: "Alice" }))
    .header("Content-Type", "application/json")
    .timeout(3000)
    .retries(2)
    .build();

  console.log("✅ Request built successfully:", request);
  console.log(request.toString());
} catch (e) {
  console.error("❌ Build failed:", e.message);
}

// --- Invalid Example ---
try {
  const badReq = HttpRequestBuilder.builder()
    .get("https://example.com")
    .body("should not have body")
    .build();
} catch (e) {
  console.error("Expected failure:\n", e.message);
}
