import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import Table from "../Table";

describe("Table component", () => {
  test("renderiza a tabela", async () => {
    const data = [
      {
        id: 1,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
        user: "Carolina Barbosa",
      },
    ];

    render(<Table posts={data} />);

    const title = screen.getByText("qui est esse");

    expect(title).toBeVisible();

    const user = screen.getByText("Carolina Barbosa");

    expect(user).toBeVisible();
  });
});
