import {
    Drug,
    Pharmacy
} from "./pharmacy";

describe("Pharmacy", () => {

    // std Drug 
    it("should decrease the benefit and expiresIn at the end of each day", () => {
        expect(new Pharmacy([new Drug("std", 2, 3)]).updateBenefitValue()).toEqual(
            [new Drug("std", 1, 2)]);
    });
    it("should decrease the benefit twice as fast after the expiration date", () => {
        expect(new Pharmacy([new Drug("std", 0, 3)]).updateBenefitValue()).toEqual(
            [new Drug("std", -1, 1)]);
    });
    it("should not decrease the benefit if it is equal to 0", () => {
        expect(new Pharmacy([new Drug("std", 0, 0)]).updateBenefitValue()).toEqual(
            [new Drug("std", -1, 0)]);
        expect(new Pharmacy([new Drug("std", 1, 0)]).updateBenefitValue()).toEqual(
            [new Drug("std", 0, 0)]);
    });

    // Doliprane
    it("should decrease the benefit and expiresIn for doliprane", () => {
        expect(new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()).toEqual([new Drug("Doliprane", 1, 2)]);
    });

    // Herbal Tea
    it("should increase the benefit and decrease expiresIn for Herbal Tea", () => {
        expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });
    it("should not increase the benefit after 50", () => {
        expect(new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()).toEqual([new Drug("Herbal Tea", 1, 50)]);
    });
    it("should increase twice the benefit after the expiry date and expiresIn stays 0 for Herbal Tea", () => {
        expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });

    // Magic Pill
    it("should never expires nor decrease benefit for Magic Pills", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 1, 3)]);
      expect(
        new Pharmacy([new Drug("Magic Pill", 1, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 1, 0)]);
      expect(
        new Pharmacy([new Drug("Magic Pill", 0, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 0, 0)]);
    });

    // Fervex
    it("should increase benefit and decrease expiry 10 days before for Fervex", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 11, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 10, 4)]);
    });

    it("should increase twice benefit and decrease expiry 10 days before for Fervex", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 5)]);
      expect(
        new Pharmacy([new Drug("Fervex", 6, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 5, 5)]);
    });

    it("should increase trice benefit and decrease expiry 5 days before for Fervex", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 6)]);
    });

    /*it("should decrease twice benefit and decrease expiry before expiry for Dafalgan", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 5, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 4, 1)]);
    });

    it("should decrease twice benefit and decrease expiry before expiry for Dafalgan", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 5)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -1, 1)]);
    });*/
});