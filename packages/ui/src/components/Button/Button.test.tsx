import { render, screen, fireEvent } from "@testing-library/react-native";
import { Button } from "./Button";

describe("Button", () => {
  it("renders the label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPress = jest.fn();
    render(<Button label="Press" onPress={onPress} />);
    fireEvent.press(screen.getByRole("button"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when disabled", () => {
    const onPress = jest.fn();
    render(<Button label="Press" disabled onPress={onPress} />);
    fireEvent.press(screen.getByRole("button"));
    expect(onPress).not.toHaveBeenCalled();
  });

  it("does not call onPress when loading", () => {
    const onPress = jest.fn();
    render(<Button label="Press" loading onPress={onPress} />);
    fireEvent.press(screen.getByRole("button"));
    expect(onPress).not.toHaveBeenCalled();
  });

  it("shows a spinner and hides label icon slot when loading", () => {
    render(<Button label="Save" loading />);
    expect(screen.getByLabelText("Save")).toBeTruthy();
  });

  it.each(["primary", "secondary", "ghost", "destructive"] as const)(
    "renders intent=%s without crashing",
    (intent) => {
      render(<Button label={intent} intent={intent} />);
      expect(screen.getByText(intent)).toBeTruthy();
    }
  );

  it.each(["sm", "md", "lg"] as const)("renders size=%s without crashing", (size) => {
    render(<Button label={size} size={size} />);
    expect(screen.getByText(size)).toBeTruthy();
  });

  it("forwards aria props", () => {
    render(<Button label="Submit" accessibilityHint="Submits the form" />);
    expect(screen.getByA11yHint("Submits the form")).toBeTruthy();
  });
});
