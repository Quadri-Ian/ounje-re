// components/FormSkeleton.js

import React from 'react';
import { SkeletonInput, SkeletonLabel, SkeletonContent } from '../styles/FormSkeltonStyle';

function FormSkeleton() {
  return (
    <div>
      {/* Skeleton loading for name input */}
      <SkeletonInput>
        <SkeletonLabel></SkeletonLabel>
        <SkeletonContent></SkeletonContent>
      </SkeletonInput>
      {/* Skeleton loading for email input */}
      <SkeletonInput>
        <SkeletonLabel></SkeletonLabel>
        <SkeletonContent></SkeletonContent>
      </SkeletonInput>
      {/* Skeleton loading for phone input */}
      <SkeletonInput>
        <SkeletonLabel></SkeletonLabel>
        <SkeletonContent></SkeletonContent>
      </SkeletonInput>
      {/* Add more skeleton placeholders for other form fields */}
    </div>
  );
}

export default FormSkeleton;
