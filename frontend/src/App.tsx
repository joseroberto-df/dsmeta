import Header from "./componentes/Header";
import SelesCard from "./componentes/SalesCard";
function app() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SelesCard />

          </div>
        </section>
      </main>

    </>
  )
}
export default app;

