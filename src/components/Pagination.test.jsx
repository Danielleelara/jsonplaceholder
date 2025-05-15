import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import NavBar from "./NavBar";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  test("renderiza botões da paginação", async () => {
    render(<Pagination total={10} page={1} itemsPerPage={10} />);

    const button = screen.getByTestId("button-test");

    expect(button).toBeVisible();

    const button3 = screen.getByTestId("button-test3");

    expect(button3).toBeVisible();
  });

  test("renderiza indicador de mais páginas ", async () => {
    render(<Pagination total={10} page={5} itemsPerPage={2} />);

    const text = screen.getByText("...");

    expect(text).toBeVisible();
  });
});
