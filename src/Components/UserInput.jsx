import React, { useState } from "react";

export const UserInput = ({userInput, inputValues}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={inputValues.initialInvestment}
            onChange={(e) => {
              userInput("initialInvestment", e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={inputValues.annualInvestment}
            onChange={(e) => {
              userInput("annualInvestment", e.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={inputValues.expectedReturn}
            onChange={(e) => {
              userInput("expectedReturn", e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={inputValues.duration}
            onChange={(e) => {
              userInput("duration", e.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
};
