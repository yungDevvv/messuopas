import ToolSidebar from '@/components/ToolSidebar';
import React from 'react';

const MyynninValmistelu = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">1.2 Myynnin valmistelu</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Tiimin koulutus</h2>
        <div className="pl-4 space-y-2">
          <p>Tehokas myynti perustuu hyvin koulutettuun tiimiin:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Tuotteiden ja palveluiden syvällinen tuntemus</li>
            <li>Myyntitaitojen kehittäminen ja ylläpito</li>
            <li>Asiakaspalvelun periaatteet ja käytännöt</li>
            <li>Tuotekoulutukset ja päivitykset</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Tavoitteiden kommunikointi</h2>
        <div className="pl-4 space-y-2">
          <p>Selkeät tavoitteet ohjaavat toimintaa:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Myyntitavoitteiden määrittely ja seuranta</li>
            <li>Tiimin yhteisten tavoitteiden asettaminen</li>
            <li>Henkilökohtaisten tavoitteiden räätälöinti</li>
            <li>Säännöllinen tavoitteiden arviointi ja päivitys</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Harjoitukset</h2>
        <div className="pl-4 space-y-2">
          <p>Käytännön harjoittelu on olennainen osa valmistautumista:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Roolipelit ja myyntitilanteiden simulointi</li>
            <li>"Mitä jos" -tilanteiden harjoittelu</li>
            <li>Palautteen antaminen ja vastaanottaminen</li>
            <li>Todellisten asiakastilanteiden analysointi</li>
          </ul>
        </div>
      </section>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Tärkeimmät valmisteluvaiheet:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Varmista tiimin osaaminen koulutuksilla</li>
          <li>Kommunikoi tavoitteet selkeästi</li>
          <li>Järjestä säännöllisiä harjoituksia</li>
          <li>Seuraa kehitystä ja anna palautetta</li>
        </ul>
      </div>
    </div>
  );
};

export default MyynninValmistelu;
