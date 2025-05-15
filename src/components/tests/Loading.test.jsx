import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import Loading from "../Loading";

describe("Loading component", () => {
  test("renderiza a animação", async () => {
    render(<Loading />);

    const loading = screen.getByRole("status");

    expect(loading).toBeVisible();
  });
});
