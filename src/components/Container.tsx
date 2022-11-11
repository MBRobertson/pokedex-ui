import React from "react";

/**
 * Base container for pages, centering content vertically with a maximum width
 */
export const Container: React.FC<React.PropsWithChildren> = ({ children }) => 
  <div className="max-w-7xl mx-auto w-full">{ children }</div>