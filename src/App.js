// import IdCardBackPart from './components/IdCardBackPart';
// import IdCardFrontPart from './components/IdCardFrontPart';
import IdCardForm from './components/IdCardForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
          <IdCardForm />
        </div>
      </header>
    </div>
  );
}

export default App;
