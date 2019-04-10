import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Dashboard from "./board";
import Display from "./Display";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Board from "./board";

// Is the app starting without error?
describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // works
  it('renders', () => {
    render(<App />);
  });

  // app works
  it('renders, atBat', () => {
    const { getByText } = render(<App />);
    getByText(/ATBAT/);
  });

  // checks hits after button pushed
  it('renders number of hits after hit function completed', () => {
    const { getByText } = render(<App />);
    const button = getByText(/HIT/);
    fireEvent.click(button);
    getByText(/Hits: 1/);
  });

  // checks strikes after butto n is pushed
  it('renders numbers of strikes after strike function is done', () => {
    const { getByText } = render(<App />);
    const button = getByText(/STRIKE/);
    fireEvent.click(button);
    getByText(/Strikes: 1/);
  });

  // checks fouls after button is pushed
  it('renders numbers of fouls after foul function completed', () => {
    const { getByText } = render(<App />);
    const button = getByText(/FOUL/);
    fireEvent.click(button);
    getByText(/Fouls: 1/);
  });
});

// overall stats
describe('<Board />', () => {
  it('renders', () => {
    render(<Dashboard />);
  });

  // # strikes shown
  it('render', 'STRIKE', () => {
    const { getByText } = render(<App />);
    getByText(/STRIKE/);
  });

  it('starts hit function', () => {
    const { getByText } = render(<Board />);
    const button = getByText(/HIT/);
    fireEvent.click(button);
  });
});

// shows stats
describe('<Display />', () => {
  it('renders', () => {
    render(<Display />);
  });

  // shows hit #
  it('renders the number of hits', () => {
    const { getByText } = render(<App />);
    getByText(/Hits: 0/);
  });

  // shows foul #
  it('renders the number of fouls', () => {
    const { getByText } = render(<App />);
    getByText(/Fouls: 0/);
  });
});