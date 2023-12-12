import { useState } from 'react'; // Called React Hooks "All The function that start with user called => React Hooks
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import * as CoreConcepts from './components/CoreConcepts.jsx';
import * as TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {

  // Only Call hooks inside of Components Functions, On the Top Level
  // will caused App() to be reloaeed every time any change happens to the hook
  // useState return array of two parametrs, one is the value and second one is the function will be used to update the function
  // selectedTopic => equal to the select text by default will set to => Please click a button
  // setSelectedTopic => function we can call to pass the updated selectedTopic
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // selectedButton => Components, JSX, Props, State
    setSelectedTopic(selectedButton); // passing the updated topic to the hooks using setSelectedTopic defined in the hook array   
  }

  let tabContent = <p>Please select Topic</p>

  if (selectedTopic) {
    tabContent = <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  }


  return (
    <div>
      {/* adding Header Component */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            {CORE_CONCEPTS.map((conceptItem) => (
              // add key as i wss getting warning => Warning: Each child in a list should have a unique "key" prop.
            <CoreConcepts.CoreConcepts1 key={conceptItem.id} {...conceptItem} />
            ))}

            {/* <CoreConcepts.CoreConcepts0
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcepts.CoreConcepts1
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts.CoreConcepts1 {...CORE_CONCEPTS[2]} />
            <CoreConcepts.CoreConcepts2 concept={CORE_CONCEPTS[3]} /> */}

          </ul>

        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton.TabButton onSelect={handleClick}>Components</TabButton.TabButton> 
          --- by passing onSelect={handleClick} we won't be able to get button identifer to know which button is clicked
          */}
            <TabButton.TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton.TabButton>
            <TabButton.TabButton1 isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton.TabButton1>
            <TabButton.TabButton2 label='Props' isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')} />
            <TabButton.TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton.TabButton>
          </menu>
          {/* {!selectedTopic ? (
            <p>Please select Topic</p>
          ) : (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* {!selectedTopic && <p>Please select Topic</p>}
           { selectedTopic && (<div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
