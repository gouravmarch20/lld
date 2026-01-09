import { ItineraryBuilder } from "./builders/ItineraryBuilder.js";
import { Segment } from "./models/Segment.js";

try {
  const trip = ItineraryBuilder.builder()
    .travelerName("Alice")
    .origin("LHR")
    .destination("CDG")
    .startDate("2025-10-01")
    .endDate("2025-10-05")
    .addTag("business")
    .addSegment({
      from: "LHR",
      to: "CDG",
      departAt: "2025-10-01T08:00:00Z",
      arriveAt: "2025-10-01T10:30:00Z",
      carrier: "BA",
    })
    .addSegment({
      from: "CDG",
      to: "LHR",
      departAt: "2025-10-05T18:00:00Z",
      arriveAt: "2025-10-05T19:30:00Z",
      carrier: "BA",
    })
    .withInsurance(true)
    .build();

  console.log("✅ Trip created successfully:\n", trip.toJSON());
} catch (e) {
  console.error("❌ Validation errors:", e.validation);
}
