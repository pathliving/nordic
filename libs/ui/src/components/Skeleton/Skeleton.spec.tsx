import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Skeleton from "./Skeleton";

describe("Skeleton", () => {
  it("should forward a ref", () => {
    const ref = createRef<HTMLSpanElement>();
    const { container } = render(<Skeleton ref={ref} />);
    const skeleton = container.querySelector("span");
    expect(ref.current).toBe(skeleton);
  });
});
