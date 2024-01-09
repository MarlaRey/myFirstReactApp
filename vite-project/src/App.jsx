// App.jsx
import React from 'react';
import PageComponent from './components/PageComponent/PageComponent';

const App = () => {
  return (
    <div>
      {/* Brug PageComponent i App og send nødvendige props */}
      <PageComponent
        title="Min App"
        subtitle="En fantastisk app"
        description="Dette er en fantastisk app med en beskrivelse."
      >
        {/* Child components */}
        <p>Dette er en child component.</p>
        <button>En anden child component</button>
      </PageComponent>
    </div>
  );
};

export default App;


