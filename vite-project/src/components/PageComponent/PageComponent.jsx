import React, { useEffect } from 'react';

const PageComponent = (props) => {
  useEffect(() => {
    // Opdater dokumentets titel med sidens titel
    document.title = props.title;

    // Bonus: Opdater meta description
    if (props.description) {
      const metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute('content', props.description);
      } else {
        // Opret meta description tag, hvis det ikke findes
        const newMetaTag = document.createElement('meta');
        newMetaTag.name = 'description';
        newMetaTag.content = props.description;
        document.head.appendChild(newMetaTag);
      }
    }
  }, [props.title, props.description]);

  return (
    <div>
      {/* Obligatorisk h1 tag med sidens titel */}
      <h1>{props.title}</h1>

      {/* Betinget h2 tag med undertitel */}
      {props.subtitle && <h2>{props.subtitle}</h2>}

      {/* Child components */}
      {props.children}
    </div>
  );
};

export default PageComponent;
