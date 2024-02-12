import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



function App() {
  let tabContent = 'Please click a button';
  function handlSelect(selectedButton){
    // selectedButton => 'components', 'jsx', 'props', 'state'
    tabContent = selectedButton;
  }
  console.log('APP COMPONENT EXECUTING');
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS [0].title} 
          description={CORE_CONCEPTS [0].description}
          image={CORE_CONCEPTS [0].image}
           />
            <CoreConcept {...CORE_CONCEPTS [1]} />
            <CoreConcept {...CORE_CONCEPTS [2]} />
            <CoreConcept {...CORE_CONCEPTS [3]} />
          
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
           <TabButton onSelect={() => handlSelect('components')}>Components</TabButton>
           <TabButton onSelect={() => handlSelect('jsx')}>JSX</TabButton>
           <TabButton onSelect={() => handlSelect('props')}>Props</TabButton>
           <TabButton onSelect={() => handlSelect('state')}>State</TabButton>
           </menu>
           {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
