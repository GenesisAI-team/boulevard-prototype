import { expect, test } from "@playwright/test";

test.describe("smoke: página base placeholder", () => {
  test("desktop: la página base renderiza con título y contenido neutro", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Nuevo sitio",
    );
    await expect(page).toHaveTitle(/Nuevo sitio/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /Página base placeholder/,
    );
  });

  test("mobile: la página base es navegable en viewport móvil", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator('[data-page="home"]')).toBeVisible();
  });
});
