import Header from './layout/mtn-header';
import './App.css';
import Card from './layout/Card';
import Addmore from './layout/addmore';
import Footer from './layout/footer';
function App() {
  return (
  <>
  <Header />
  <div className="card-container">
        {/* Your Cards */}
        <Card
          title="#GuraPakeUtsinde"
          subtitle1="Gura Pake Utsinde na MTN"
          subtitle2="Recharge & Win with MTN"
          link1="/gura-pake"
          link2="/recharge-win"
        />
        <Card
          title="Reycreo"
          subtitle1="Reycreo"
          subtitle2=""
          link1="/reycreo"
          link2=""
        />
        <Card
          title="Twitter:-"
          subtitle1="Twitter"
          subtitle2=""
          link1="/twitter"
          link2=""
        />
         <Card
          title="#GuraPakeUtsinde"
          subtitle1="Gura Pake Utsinde na MTN"
          subtitle2="Recharge & Win with MTN"
          link1="/gura-pake"
          link2="/recharge-win"
        />
        <Card
          title="Reycreo"
          subtitle1="Reycreo"
          subtitle2=""
          link1="/reycreo"
          link2=""
        />
        <Card
          title="Twitter:-"
          subtitle1="Twitter"
          subtitle2=""
          link1="/twitter"
          link2=""
        />
      </div>
      <Addmore />
   <Footer />
  </>
    
  );
}

export default App;
