import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div class="pyramid-loader">
        <div class="wrapper">
          <span class="side side1"></span>
          <span class="side side2"></span>
          <span class="side side3"></span>
          <span class="side side4"></span>
          <span class="shadow"></span>
        </div>
      </div>
    </div>
  );
};
