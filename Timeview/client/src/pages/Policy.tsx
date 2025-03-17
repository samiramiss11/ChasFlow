import React from "react";

const Policy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
     
   
    <section className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 p-6">
  <div className="md:w-1/2">
    <h1 className="text-2xl font-bold">Tillgänglighetsredogörelse</h1>
    <p className="mt-2 text-gray-700">
      På Chas strävar vi efter att göra vår webbplats tillgänglig för alla användare, inklusive personer med olika typer av funktionsvariation. Denna redogörelse beskriver de åtgärder vi har vidtagit för att uppfylla tillgänglighetskraven enligt WCAG 2.2 och för att erbjuda en god användarupplevelse för alla besökare.
    </p>

    <h1 className="text-2xl font-bold mt-6">Tillgänglighetsstandarder</h1>
    <p className="mt-2 text-gray-700">
      Vår webbplats är byggd för att uppfylla WCAG 2.2-riktlinjerna på AA-nivå. Vi arbetar kontinuerligt med att förbättra tillgängligheten och följer bästa praxis för webbtillgänglighet.
    </p>
  </div>

  <div className="md:w-1/2 flex justify-center">
    <img 
      src="/assets/assets/chas-academy-logo.png" 
      alt="Chas Academy Logo" 
      className="w-[30vw] max-w-xs bg-black"
    />
  </div>
</section>

    <section className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 p-6">
  {/* Left Column */}
  <div className="md:w-1/2">
    <h1 className="text-2xl font-bold">Viktiga funktioner</h1>
    <p className="mt-2 text-gray-700">
      För att säkerställa tillgänglighet för alla användare har vi implementerat följande funktioner:
    </p>

    {/* Features List */}
    <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
      <li>
        <b>Alt-texter för bilder:</b> Alla bilder och visuella element har relevanta, beskrivande alt-texter för att hjälpa användare med synnedsättningar att förstå deras innehåll och syfte.
      </li>
      <li>
        <b>Muspekare och interaktiva element:</b> När användaren hovrar över klickbara element (som knappar och länkar), ändras muspekaren till en pekande hand för att tydliggöra att objektet är interaktivt.
      </li>
      <li>
        <b>Tangentbordsnavigering:</b> Hela webbplatsen är navigerbar med tangentbordet. Interaktiva element som länkar, knappar och formulärfält kan nås och användas utan mus.
      </li>
      <li>
        <b>Fokusindikatorer:</b> Tydliga visuella indikatorer markerar vilket element som är i fokus vid tangentbordsnavigering, vilket gör det enklare att navigera på sidan.
      </li>
    </ul>
  </div>

  {/* Right Column */}
  <div className="md:w-1/2 flex flex-col items-center">
    {/* Image */}
    <img
      src="/assets/assets/chas-academy-logo.png"
      alt="Chas Academy Logo"
      className="w-[30vw] max-w-xs bg-black"
    />

    {/* Additional Information */}
    <p className="mt-4 text-gray-700">
      <b>Formulär och felmeddelanden:</b> Alla formulärfält är korrekt märkta med tydliga etiketter och har rätt ARIA-attribut. Felmeddelanden är visuellt tydliga och kan även uppfattas av skärmläsare.
    </p>

    <p className="mt-2 text-gray-700">
      <b>Användning av färg:</b> Färg används inte som den enda metoden för att förmedla viktig information. Text och symboler används som komplement för att säkerställa att information når alla användare, inklusive de med färgblindhet.
    </p>
  </div>
</section>

 <section className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 p-6">
  {/* Left Column */}
  <div className="md:w-1/2 flex flex-col items-center">
    {/* Image */}
    <img
      src="/assets/assets/chas-academy-logo.png"
      alt="Chas Academy Logo"
      className="w-[30vw] max-w-xs bg-black"
    />

    {/* Accessibility Issues */}
    <h1 className="text-2xl font-bold mt-4">Eventuella tillgänglighetsproblem</h1>
    <p className="mt-2 text-gray-700">
      Trots våra ansträngningar kan vissa delar av webbplatsen fortfarande behöva förbättras för att helt uppfylla WCAG 2.2. 
      Vi arbetar kontinuerligt med att identifiera och åtgärda dessa brister.
    </p>
  </div>

  {/* Right Column */}
  <div className="md:w-1/2">
    <h1 className="text-2xl font-bold">Åtgärder vi har vidtagit</h1>
    <p className="mt-2 text-gray-700">För att uppnå dessa mål har vi genomfört följande åtgärder:</p>

    {/* Fixed List */}
    <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
      <li>
        <b>Höga kontrastnivåer:</b> Vi säkerställer att text och bakgrunder har tillräcklig kontrast för att förbättra läsbarheten för användare med synnedsättningar.
      </li>
      <li>
        <b>Tydlig struktur:</b> Innehållet är strukturerat med rubriker, listor och logiska sekvenser för att göra det enkelt att navigera på webbplatsen.
      </li>
      <li>
        <b>Testning av tillgänglighet:</b> Vi använder både automatiserade verktyg och manuella tester för att identifiera och åtgärda eventuella tillgänglighetsproblem.
      </li>
      <li>
        <b>Kompatibilitet med hjälpmedel:</b> Vi säkerställer att skärmläsare och andra hjälpmedel fungerar korrekt med vår webbplats för att ge en inkluderande användarupplevelse.
      </li>
    </ul>
  </div>
</section>

          
      <section className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 p-6">
  {/* Left Column */}
  <div className="md:w-1/2">
    <h1 className="text-2xl font-bold">Hur vi testar tillgänglighet</h1>
    <p className="mt-2 text-gray-700">Vi säkerställer tillgängligheten genom följande metoder:</p>

    {/* Fixed List */}
    <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
      <li>
        <b>Automatiserade verktyg:</b> Vi använder verktyg som <i>WAVE</i> och <i>axe</i> för att identifiera potentiella problem.
      </li>
      <li>
        <b>Manuella tester:</b> Vi kontrollerar alla interaktiva funktioner manuellt för att säkerställa korrekt tangentbordsnavigering och kompatibilitet med skärmläsare.
      </li>
      <li>
        <b>Användartester:</b> Vi genomför tester med användare som har olika funktionsvariationer för att få insikter och identifiera förbättringsmöjligheter.
      </li>
    </ul>
  </div>

  {/* Right Column */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="/assets/assets/chas-academy-logo.png"
      alt="Chas Academy Logo"
      className="w-[30vw] max-w-xs bg-black"
    />
  </div>
</section>
<section className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 p-6">
  {/* Left Column */}
  <div className="md:w-1/2">
    <h1 className="text-2xl font-bold">Kontakt</h1>
    <p className="mt-2 text-gray-700">
      Om du har problem med åtkomst eller har frågor om vår webbplats, vänligen kontakta oss:
    </p>

    {/* Fixed List */}
    <ul className="list-none mt-2 space-y-2 text-gray-700">
      <li><b>E-post:</b> <a href="mailto:info@chas.se" className="text-blue-600 hover:underline">info@chas.se</a></li>
      <li><b>Telefon:</b> 08-123 45 67</li>
      <li><b>Adress:</b> Stubbsundsvägen 11, 131 41 Nacka, Sverige</li>
    </ul>
  </div>

  {/* Right Column */}
  <div className="md:w-1/2">
    <h1 className="text-2xl font-bold">Senast uppdaterad</h1>
    <p className="mt-2 text-gray-700">
      Denna redogörelse uppdaterades senast: <b>17/2 - 2025</b>
    </p>
  </div>
</section>

    </div>
  );
};

export default Policy;
