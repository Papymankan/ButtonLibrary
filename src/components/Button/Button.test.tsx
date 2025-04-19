import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import * as React from "react";
import Button from "./Button";

describe('<Button />', () => {
  it('renders children content', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies variant styles correctly', () => {
    render(<Button variant="danger">Danger</Button>);
    const button = screen.getByText('Danger');
    expect(button).toHaveClass('bg-red-500');
    expect(button).toHaveClass('hover:bg-red-600');
  });

  it('supports additional className props', () => {
    render(<Button className="custom-class">Test</Button>);
    const button = screen.getByText('Test');
    expect(button).toHaveClass('custom-class');
  });

  it('renders different variants', () => {
    render(
      <>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
      </>
    );
    expect(screen.getByText('Primary')).toHaveClass('bg-blue-500');
    expect(screen.getByText('Secondary')).toHaveClass('bg-gray-500');
    expect(screen.getByText('Success')).toHaveClass('bg-green-500');
  });

  it('handles onClick', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('accepts type prop', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByText('Submit');
    expect(button).toHaveAttribute('type', 'submit');
  });

});
