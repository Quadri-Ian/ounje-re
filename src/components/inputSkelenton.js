// components/FormSkeleton.js

import React from 'react';

function FormSkeleton() {
  return (
    <div>
      {/* Skeleton loading for name input */}
      <div className="skeleton-input"></div>
      {/* Skeleton loading for email input */}
      <div className="skeleton-input"></div>
      {/* Skeleton loading for phone input */}
      <div className="skeleton-input"></div>
      {/* Add more skeleton placeholders for other form fields */}
    </div>
  );
}

export default FormSkeleton;
