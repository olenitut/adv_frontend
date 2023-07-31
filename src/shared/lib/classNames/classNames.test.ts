import classNames from "./classNames";

describe("classNames", () => {
  test("with 1 param", () => expect(classNames("someClass")).toBe("someClass"));
  test("with 2 params", () =>
    expect(classNames("someClass", "anotherClass")).toBe(
      "someClass anotherClass"
    ));
  test("with obj params", () =>
    expect(
      classNames("someClass", "anotherClass", { poly: true, mony: undefined })
    ).toBe("someClass anotherClass poly"));
});
