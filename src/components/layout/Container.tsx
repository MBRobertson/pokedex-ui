import React from "react";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => 
  <div className="max-w-7xl mx-auto w-full">{ children }</div>