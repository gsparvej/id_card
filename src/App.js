import IdCardBackPart from './components/IdCardBackPart';
import IdCardFrontPart from './components/IdCardFrontPart';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
          <IdCardFrontPart />
          <IdCardBackPart />
        </div>
      </header>
    </div>
  );
}

export default App;
