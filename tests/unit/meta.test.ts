import { describe, expect, it } from "vitest";
import { buildPageTitle } from "../../src/lib/meta";

describe("buildPageTitle", () => {
  it("devuelve el título por defecto cuando no hay título", () => {
    expect(buildPageTitle()).toBe("Nuevo sitio");
    expect(buildPageTitle(undefined)).toBe("Nuevo sitio");
    expect(buildPageTitle("")).toBe("Nuevo sitio");
  });

  it("recorta y devuelve un título proporcionado", () => {
    expect(buildPageTitle("  Sección  ")).toBe("Sección");
  });
});
