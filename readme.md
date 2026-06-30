# React Workspace

This repository contains React practice projects organized by day.

## Structure

- `Day1/` - basic JavaScript and DOM practice
- `Day2/` - simple React concepts with vanilla setup
- `Day3.1/` - JSX and component basics
- `Day3.2/` - Vite project with React component structure
- `Day4.1/` - Vite app with improved component and asset usage
- `Day4.2/` - additional React examples and layout practice
- `Day5.1/` - full Vite React project with styles and assets

## React Notes

### What is React?

React is a JavaScript library for building user interfaces. It lets you create reusable UI pieces called components and update the page efficiently when data changes.

### JSX

JSX is a syntax extension that looks like HTML inside JavaScript. Browsers don't run JSX directly; a build tool transforms it into `React.createElement` calls.

Example:

```jsx
function Greeting() {
  return <h1>Hello, React!</h1>;
}
```

### Functional Components

Functional components are JavaScript functions that return JSX. They are the most common way to write components in modern React.

Example:

```jsx
function Welcome(props) {
  return <h2>Welcome, {props.name}!</h2>;
}
```

Functional components can use React Hooks to manage state and side effects.

### Class Components

Class components are ES6 classes that extend `React.Component`. They were used before Hooks became available and still work, but functional components are preferred today.

Example:

```jsx
class Welcome extends React.Component {
  render() {
    return <h2>Welcome, {this.props.name}!</h2>;
  }
}
```

### Hooks

Hooks let functional components use React features like state and lifecycle behavior.

- `useState`: store and update local component data.
- `useEffect`: run code when components mount, update, or unmount.
- `useMemo`: memoize expensive calculations.
- `useCallback`: memoize callback functions.

Example with `useState` and `useEffect`:

```jsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Props

Props are read-only values passed from a parent component to a child component.

Example:

```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```

### State

State is data that belongs to a component and can change over time. When state changes, React rerenders the component.

### Component Lifecycle

In function components, `useEffect` handles lifecycle events:

- Mount: run once when component appears.
- Update: run when dependencies change.
- Unmount: cleanup before component disappears.

### Best Practices

- Keep components focused and reusable.
- Pass data down with props.
- Lift shared state up to the closest common parent.
- Use hooks for state and lifecycle logic.
- Avoid modifying props directly.

## Notes

Each folder includes its own React or Vite project files. Add project-specific instructions inside each day folder as needed.
