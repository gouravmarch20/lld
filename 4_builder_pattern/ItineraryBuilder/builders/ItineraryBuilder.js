import { Itinerary } from "../models/Itinerary.js";
import { Segment } from "../models/Segment.js";

export class ItineraryBuilder {
  constructor() {
    this._data = {
      segments: [],
      tags: [],
      travelInsurance: false,
    };
  }

  static builder() {
    return new ItineraryBuilder();
  }

  travelerName(name) {
    this._data.travelerName = name;
    return this;
  }
  origin(code) {
    this._data.origin = code;
    return this;
  }
  destination(code) {
    this._data.destination = code;
    return this;
  }
  startDate(date) {
    this._data.startDate = new Date(date);
    return this;
  }
  endDate(date) {
    this._data.endDate = new Date(date);
    return this;
  }
  budget(amount) {
    this._data.budget = amount;
    return this;
  }
  withInsurance(flag = true) {
    this._data.travelInsurance = flag;
    return this;
  }

  addTag(tag) {
    if (!this._data.tags.includes(tag)) this._data.tags.push(tag);
    return this;
  }

  addSegment(segment) {
    const seg = segment instanceof Segment ? segment : new Segment(segment);
    this._data.segments.push(seg);
    return this;
  }

  weekendGetaway(origin, destination) {
    const today = new Date();
    const day = today.getDay();
    const daysUntilSaturday = (6 - day + 7) % 7 || 7;
    const saturday = new Date(today);
    saturday.setDate(today.getDate() + daysUntilSaturday);
    const monday = new Date(saturday);
    monday.setDate(saturday.getDate() + 2);

    this.origin(origin)
      .destination(destination)
      .startDate(saturday)
      .endDate(monday)
      .addTag("weekend");

    return this;
  }

  // ----------------------
  // Validation Logic
  // ----------------------
  _validate() {
    const errors = [];
    const { travelerName, startDate, endDate, origin, destination, segments } =
      this._data;
    const code = /^[A-Z]{3}$/;

    // Required
    if (!travelerName || travelerName.trim() === "")
      errors.push("travelerName is required");
    if (!origin || !code.test(origin))
      errors.push(`origin must be a 3-letter IATA code: '${origin}' given`);
    if (!destination || !code.test(destination))
      errors.push(
        `destination must be a 3-letter IATA code: '${destination}' given`
      );
    if (!startDate) errors.push("startDate is required");
    if (!endDate) errors.push("endDate is required");

    // Date logic
    if (startDate && endDate && endDate < startDate)
      errors.push(
        `endDate ${endDate
          .toISOString()
          .slice(0, 10)} is before startDate ${startDate
          .toISOString()
          .slice(0, 10)}`
      );

    // Segment validation
    for (let i = 0; i < segments.length; i++) {
      const segErrors = segments[i].validate();
      if (segErrors.length)
        errors.push(`Segment ${i}: ${segErrors.join("; ")}`);
    }

    // Cross-segment rules
    if (segments.length > 1) {
      for (let i = 0; i < segments.length - 1; i++) {
        const s1 = segments[i];
        const s2 = segments[i + 1];
        if (s1.to !== s2.from)
          errors.push(
            `Segments must be contiguous: '${s1.to}' != '${s2.from}'`
          );
        if (s1.arriveAt > s2.departAt)
          errors.push(`Segments out of chronological order at index ${i}`);
      }

      const first = segments[0];
      const last = segments[segments.length - 1];
      if (origin !== first.from)
        errors.push(
          `origin mismatch: itinerary origin ${origin} ≠ first segment from ${first.from}`
        );
      if (destination !== last.to)
        errors.push(
          `destination mismatch: itinerary destination ${destination} ≠ last segment to ${last.to}`
        );
    }

    return errors;
  }

  build() {
    const errors = this._validate();
    if (errors.length) {
      const err = new Error("Validation failed");
      err.validation = errors;
      throw err;
    }

    const dataCopy = {
      ...this._data,
      segments: [...this._data.segments],
      tags: [...this._data.tags],
    };
    return new Itinerary(dataCopy);
  }
}
