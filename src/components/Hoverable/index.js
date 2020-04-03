import React, { useCallback, useState, useEffect, useRef } from 'react';
import UserCard from '../../containers/UserCardContainer';

function Hoverable(props) {
  const [showCard, setShowCard] = useState(false) ;
  const hoverableRef = useRef(null);
  let userCard;

  const onDocumentClick = useCallback(
    (event) => {
      if (hoverableRef.current.contains(event.target)) {
        setShowCard(true);
      } else {
        setShowCard(false);
      }
    },
    [setShowCard]
  );

  useEffect(() => {
    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, [onDocumentClick]);

  if (showCard) {
    userCard = (<UserCard {...props} />);
  }

  return (
    <div className="hoverable" ref={hoverableRef}>
      {props.children}
      {userCard}
    </div>
  );
}

export default Hoverable;