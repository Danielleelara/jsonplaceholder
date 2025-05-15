import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import NavBar from "../NavBar";

describe("NavBar component", () => {
  test("renderiza o texto do header", async () => {
    render(<NavBar />);

    const link = screen.getByRole("link");

    expect(link).toBeVisible();
    expect(link).toHaveTextContent("Contato");
  });
});
