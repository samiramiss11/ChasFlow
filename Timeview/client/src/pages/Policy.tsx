import React from "react";
import FeatureItem from "@/components/Shared/FeatureItem";
import { Button } from "@/components/ui/button";
const Policy = () => {

  const features = [
  {
    title: 'Alt-texter för bilder',
    description: 'Alla bilder och visuella element har relevanta, beskrivande alt-texter för att hjälpa användare med synnedsättningar att förstå deras innehåll och syfte.'
  },
  {
    title: 'Muspekare och interaktiva element',
    description: 'När användaren hovrar över klickbara element (som knappar och länkar), ändras muspekaren till en pekande hand för att tydliggöra att objektet är interaktivt.'
  },
  {
    title: 'Tangentbordsnavigering',
    description: 'Hela webbplatsen är navigerbar med tangentbordet. Interaktiva element som länkar, knappar och formulärfält kan nås och användas utan mus.'
  },
  {
    title: 'Fokusindikatorer',
    description: 'Tydliga visuella indikatorer markerar vilket element som är i fokus vid tangentbordsnavigering, vilket gör det enklare att navigera på sidan.'
  }
  ]
  
  const fixedFeatures = [
  {
    title: 'Höga kontrastnivåer',
    description: 'Vi säkerställer att text och bakgrunder har tillräcklig kontrast för att förbättra läsbarheten för användare med synnedsättningar.'
  },
  {
    title: 'Tydlig struktur',
    description: 'Innehållet är strukturerat med rubriker, listor och logiska sekvenser för att göra det enkelt att navigera på webbplatsen.'
  },
  {
    title: 'Testning av tillgänglighet',
    description: 'Vi använder både automatiserade verktyg och manuella tester för att identifiera och åtgärda eventuella tillgänglighetsproblem.'
  },
  {
    title: 'Kompatibilitet med hjälpmedel',
    description: 'Vi säkerställer att skärmläsare och andra hjälpmedel fungerar korrekt med vår webbplats för att ge en inkluderande användarupplevelse.'
  }
  ]
 const how = [
  {
    title: 'Automatiserade verktyg',
    description:
      'Vi använder verktyg som WAVE och axe för att identifiera potentiella problem.',
  },
  {
    title: 'Manuella tester',
    description:
      'Vi kontrollerar alla interaktiva funktioner manuellt för att säkerställa korrekt tangentbordsnavigering och kompatibilitet med skärmläsare.',
  },
  {
    title: 'Användartester',
    description:
      'Vi genomför tester med användare som har olika funktionsvariationer för att få insikter och identifiera förbättringsmöjligheter.',
  },
]
  return (
    <div className="">
     
   
      <section className="flex justify-between gap-6 md:gap-12 p-6 bg-policy " >
           <Button
               size='sm'
               variant='default'
               className='mb-2 rounded-full chasBlue w-40 text-center whitespace-nowrap'>
               Tillbaka
             </Button>
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
  <svg 
    width="500" 
    height="300" 
    viewBox="0 0 500 300" 
    fill="none" 
    style={{ flexShrink: 0 }}
  >
    {/* Background Shape */}
    <path 
      d="M500 230.02C500 325.655 286.401 294.58 95.7473 294.58C-27.3803 281.298 -14.5012 112.236 38.4876 38.845C77.2731 -14.8744 334.204 4.41448 374.366 1.01439C492.033 -8.94746 500 53.5226 500 230.02Z" 
      fill="white"
    />

    {/* Background Image */}
    <image 
      href="/assets/assets/tillgänglighetsredogörelse.png" 
      x="0" y="0" 
      width="100%" 
      height="100%" 
      preserveAspectRatio="xMidYMid meet"
    />
          </svg>
          
        </div>
        
</section>

    <section className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 p-6 bg-chasGray text-white">
  {/* Left Column */}
  <div className="md:w-1/2">
    <h1 className="text-2xl font-bold">Viktiga funktioner</h1>
    <p className="mt-2 text-white">
      För att säkerställa tillgänglighet för alla användare har vi implementerat följande funktioner:
    </p>

    {/* Features List */}
   {/* Features List */}
  <ul className="list-disc pl-6 mt-2 text-white space-y-2">
    {features.map(({ title, description }, index) => (
      <FeatureItem key={index} title={title} description={description} />
    ))}
  </ul>
 
  </div>

  {/* Right Column */}
  <div className="md:w-1/2 flex flex-col items-center ">
    {/* Image */}
   
       <div className="md:w-1/2 flex justify-center">
 <svg xmlns="http://www.w3.org/2000/svg" width="384" height="304" viewBox="0 0 384 304" fill="none">
    {/* Background Shape */}
   <path d="M383.908 209.814C383.908 294.255 211.191 303.814 95.4076 303.814C20.6324 292.087 -6.49976 104.5 2.49935 56.5C14.2716 -6.29142 176.518 3.81673 200.908 0.814622C272.367 -7.98118 383.908 53.9767 383.908 209.814Z" fill="white"/>


    {/* Background Image */}
    <image 
      href="/assets/assets/funktioner.png" 
      x="0" y="0" 
      width="100%" 
      height="100%" 
      preserveAspectRatio="xMidYMid meet"
    />
  </svg>
</div>
    {/* Additional Information */}
    <p className="mt-4 text-white">
      <b>Formulär och felmeddelanden:</b> Alla formulärfält är korrekt märkta med tydliga etiketter och har rätt ARIA-attribut. Felmeddelanden är visuellt tydliga och kan även uppfattas av skärmläsare.
    </p>

    <p className="mt-2 text-white">
      <b>Användning av färg:</b> Färg används inte som den enda metoden för att förmedla viktig information. Text och symboler används som komplement för att säkerställa att information når alla användare, inklusive de med färgblindhet.
    </p>
  </div>
</section>

 <section className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 p-6 bg-policy">
  {/* Left Column */}
  <div className="md:w-1/2 flex flex-col items-center">
          {/* Image */}
        
   <svg xmlns="http://www.w3.org/2000/svg" width="461" height="390" viewBox="0 0 461 390" fill="none">
    {/* Background Shape */}
   <path d="M227.5 390C96.3991 390 6.10352e-05 332.198 6.10352e-05 139.589C6.10352e-05 24.3692 20.1532 18.417 138.758 2.15828C215.703 -8.38968 410.614 17.6982 445.047 125.565C481.169 238.723 469.448 390 227.5 390Z" fill="white"/>


    {/* Background Image */}
    <image 
      href="/assets/assets/åtgärder.png"
      x="0" y="0" 
      width="100%" 
      height="100%" 
      preserveAspectRatio="xMidYMid meet"
    />
  </svg>
 

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
      {fixedFeatures.map(({ title, description }, index) => (
      <FeatureItem key={index} title={title} description={description} />
    ))}
    </ul>
  </div>
</section>

          
      <section className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 p-9 bg-chasGray">
  {/* Left Column */}
  <div className="md:w-1/2">
    <h1 className="text-2xl font-bold text-white">Hur vi testar tillgänglighet</h1>
    <p className="mt-2 text-white">Vi säkerställer tillgängligheten genom följande metoder:</p>

    {/* Fixed List */}
    <ul className="list-disc pl-6 mt-2 text-white space-y-2">
      {how.map(({ title, description }, index) => (
      <FeatureItem key={index} title={title} description={description} />
    ))}
    </ul>
  </div>

  {/* Right Column */}
        <div className="md:w-1/2 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="441" height="327" viewBox="0 0 441 327" fill="none">
    {/* Background Shape */}
   <path d="M441 161.206C441 265.801 242.607 327 120.828 327C-0.950438 327 0.000224668 265.801 0.000224668 161.206C0.000224668 56.6121 98.7214 0 220.5 0C342.279 0 441 56.6121 441 161.206Z" fill="white"/>


    {/* Background Image */}
    <image 
      href="/assets/assets/testat.png"
      x="-60" y="0" 
      width="100%" 
      height="100%" 
      preserveAspectRatio="xMidYMid meet"
    />
  </svg>
  
  </div>
</section>
<section className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 p-6 bg-policy">
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
