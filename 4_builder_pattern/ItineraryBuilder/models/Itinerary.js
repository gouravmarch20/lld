export class Itinerary {
  constructor({
    travelerName,
    startDate,
    endDate,
    origin,
    destination,
    segments = [],
    tags = [],
    budget = null,
    travelInsurance = false,
  }) {
    this.travelerName = travelerName;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.origin = origin;
    this.destination = destination;
    this.segments = Object.freeze([...segments]);
    this.tags = Object.freeze([...tags]);
    this.budget = budget;
    this.travelInsurance = travelInsurance;
    Object.freeze(this);
  }

  toJSON() {
    return {
      travelerName: this.travelerName,
      startDate: this.startDate.toISOString().slice(0, 10),
      endDate: this.endDate.toISOString().slice(0, 10),
      origin: this.origin,
      destination: this.destination,
      segments: this.segments.map((s) => s.toJSON()),
      tags: [...this.tags],
      budget: this.budget,
      travelInsurance: this.travelInsurance,
    };
  }
}
