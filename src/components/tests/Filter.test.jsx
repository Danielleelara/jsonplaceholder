import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import Filter from "../Filter";

describe("Filter component", () => {
  const data = [
    {
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      id: 5,
      title: "nesciunt quas odio",
      user: "Leanne Graham",
    },
  ];

  test("renderiza o placeholder do input", async () => {
    render(<Filter search={data} />);

    const search = screen.getByPlaceholderText("Pesquise");

    expect(search).toBeVisible();
  });
});
