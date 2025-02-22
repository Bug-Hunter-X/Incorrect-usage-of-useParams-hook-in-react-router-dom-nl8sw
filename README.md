# Incorrect Usage of useParams Hook in React Router DOM
This repository demonstrates a common error when using the `useParams` hook in `react-router-dom`. The example shows how to correctly access route parameters using the hook.

## Bug
The original code incorrectly attempts to access route parameters directly as props to the component. This leads to the `params` object being undefined.

## Solution
The solution uses the `useParams` hook from `react-router-dom` to correctly access the route parameters. The hook returns an object containing all the parameters from the current route.