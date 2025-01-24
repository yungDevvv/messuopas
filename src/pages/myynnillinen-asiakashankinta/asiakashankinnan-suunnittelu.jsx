import React from 'react';

const AsiakashankinnanSuunnittelu = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">1.1 Asiakashankinnan suunnittelu</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Kohderyhmän määrittely</h2>
        <div className="pl-4 space-y-2">
          <p>Tärkeä vaihe asiakashankinnan suunnittelussa on kohderyhmän tarkka määrittely. Tämä sisältää:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ostajapersoonat ja niiden erityispiirteet</li>
            <li>Segmentoinnin perusteet ja kriteerit</li>
            <li>Kohderyhmän tarpeiden ja haasteiden ymmärtäminen</li>
            <li>Potentiaalisten asiakkaiden tunnistaminen</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Asiakaskohtaamisten suunnittelu</h2>
        <div className="pl-4 space-y-2">
          <p>Tehokas asiakaskohtaaminen vaatii huolellista valmistautumista:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Keskustelutaktiikat eri asiakastyypeille</li>
            <li>Pääviestit ja niiden mukauttaminen</li>
            <li>Kohtaamisten tavoitteiden määrittely</li>
            <li>Asiakaspolun suunnittelu ja kontaktipisteet</li>
          </ul>
        </div>
      </section>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Muista nämä:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Määrittele kohderyhmä tarkasti</li>
          <li>Suunnittele asiakaskohtaamiset huolellisesti</li>
          <li>Valmistele selkeät pääviestit</li>
          <li>Dokumentoi suunnitelmat ja jaa ne tiimin kesken</li>
        </ul>
      </div>
    </div>
  );
};

export default AsiakashankinnanSuunnittelu;
