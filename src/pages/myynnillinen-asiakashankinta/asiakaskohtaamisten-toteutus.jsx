import React from 'react';

const AsiakaskohtaamistenToteutus = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">1.3 Asiakaskohtaamisten toteutus</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Aktiivinen kuuntelu ja tarpeiden kartoitus</h2>
        <div className="pl-4 space-y-2">
          <p>Asiakaskohtaamisen perusta on aktiivinen kuuntelu:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Asiakkaan tarpeiden ja toiveiden tunnistaminen</li>
            <li>Oikeiden kysymysten esittäminen</li>
            <li>Nonverbaalisen viestinnän tulkinta</li>
            <li>Muistiinpanojen tekeminen ja dokumentointi</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Myyntiputken rakentaminen</h2>
        <div className="pl-4 space-y-2">
          <p>Systemaattinen lähestymistapa myyntiin:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Asiakaspolun vaiheiden määrittely</li>
            <li>Kontaktipisteiden optimointi</li>
            <li>Seurannan ja mittareiden asettaminen</li>
            <li>Myyntiputken jatkuva kehittäminen</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Tarjousten ja jatkokeskustelujen sopiminen</h2>
        <div className="pl-4 space-y-2">
          <p>Kohtaamisen jälkeiset toimenpiteet:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Tarjousten valmistelu ja esittäminen</li>
            <li>Jatkotapaamisten sopiminen</li>
            <li>Seurantaviestinnän suunnittelu</li>
            <li>Asiakassuhteen ylläpito ja kehittäminen</li>
          </ul>
        </div>
      </section>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Onnistuneen asiakaskohtaamisen avaimet:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Kuuntele aktiivisesti ja kartoita tarpeet</li>
          <li>Rakenna ja ylläpidä systemaattista myyntiputkea</li>
          <li>Sovi selkeät jatkotoimenpiteet</li>
          <li>Dokumentoi kaikki oleellinen tieto</li>
        </ul>
      </div>
    </div>
  );
};

export default AsiakaskohtaamistenToteutus;
