import React, { useCallback, useEffect, useRef } from 'react';

function Dismissible({ children, className, dismiss }) {
  const dismissibleEle = useRef(null);
  const onDocumentClick = useCallback(
    (event) => {
      if (!dismissibleEle.current.contains(event.target)) {
        dismiss();
      }
    },
    [dismiss, dismissibleEle]
  );

  useEffect(() => {
    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, [onDocumentClick]);

  return (
    <div className={className} ref={dismissibleEle}>
      {children}
    </div>
  );
}

export default Dismissible;
