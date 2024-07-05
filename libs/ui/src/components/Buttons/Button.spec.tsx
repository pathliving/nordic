import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("should merge default classes with a custom class", () => {
    const className = "foo";
    const { container } = render(<Button className={className}>Button</Button>);
    const button = container.querySelector("button");
    expect(button?.className).toContain(className);
  });

  describe("test the button behavior", () => {
    it("should render custom loader with loading state", () => {
      const loader = "wait...";
      render(
        <Button isLoading loader={loader}>
          Button
        </Button>
      );

      expect(screen.getByText(loader)).toBeVisible();
    });

    it("should trigger onClick handler", async () => {
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Button</Button>);

      await userEvent.click(screen.getByRole("button"));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("should render as disabled", () => {
      render(<Button disabled>Button</Button>);

      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-disabled",
        "true"
      );
    });

    it("should render as disabled when loading state is active", () => {
      const loader = "wait...";
      render(
        <Button isLoading loader={loader}>
          Button
        </Button>
      );

      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-disabled",
        "true"
      );
    });

    it("should render as disabled when loading state is not active", () => {
      const loader = "wait...";
      render(
        <Button disabled isLoading={false} loader={loader}>
          Button
        </Button>
      );

      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-disabled",
        "true"
      );
    });

    it("should not trigger onClick handler when disabled", async () => {
      const onClick = vi.fn();
      render(
        <Button disabled onClick={onClick}>
          Button
        </Button>
      );

      await userEvent.click(screen.getByRole("button"));

      expect(onClick).not.toHaveBeenCalledTimes(1);
    });

    it("should forward a ref", () => {
      const ref = createRef<HTMLButtonElement>();
      const { container } = render(<Button ref={ref}>Button</Button>);
      const button = container.querySelector("button");
      expect(ref.current).toBe(button);
    });
  });
});
