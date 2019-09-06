# Week3

Mine REST endpoints i movie opgaven kunne jeg desværre ikke få til at virke efter de var deployed. 
Se https://frederiket.dk/rest-jpa-devops-starter/api/movie/all for et eksempel på fejlen.

## Mandag:

Se projektet movieexercise for besvarelse.

**Læringsmål:**

**1) Kunne redegøre for problemstillinger dette semester som kræver et værktøj som Maven**
 - Maven hjælper med at bygge og finde dependencies til ens projekter, så det er vel brugbart i alle vores projekter.
 
**2) Kunne beskrive og demonstrere brug af Maven til, uafhængigt af et IDE, bygge, teste, og afvikle Java Software**
 - Maven projekter kan åbnes i mange IDE'er, så det er brugbart at kende til hvis man vil skifte til et andet IDE, eller skal dele et projekt med nogen der bruger andre IDE'er end en selv. 
 
**3) Kunne beskrive ide og opbygning af udleveret startkode og hvordan problemet med "Secret Credentials" i koden er løst**
 - Ideen med den udleverede startkode er at den giver os en let arkitektur at følge, den har kørt de wizards vi skal bruge, og den har tilføjet de dependecies vi skal bruge. Vores credentials er gemt i en fil på vores droplet, som projektet kan få fat i når det er deployed.

**4) Kunne redegøre for problemstillingen "It works on my machinge .."**
 - Der er mange faktorer der gør at programmer kan virke i et environment, og ikke i et andet. Ved at vi på 3. semester har gjort vores environments så ens som muligt, er projekter lette at dele og hvis det virker hos en skulle de gerne virke hos alle.

**5) Kunne beskrive begrebet Continuous Integration og principper involveret(CI)**
 - CI går ud på at man committer til et projekt ofte så man undgår merge-konflikter. Hvis gode tests er sat op på forhånd kan man hurtigt finde ud af om ens tilføjelser er klar til deployment. Hvis det er noget går i stykker ved et push, så skal det fikses med det samme.

**6) Kunne beskrive et typisk CI Workflow**
 - lidt det samme som mit svar på læringsmål 5.

**7) Kunne demonstrere et CI/Continuos Delivery Workflow**
 - Travis blev integreret i mit movieexercise projekt, så det er vel et eksempel. Ved ikke rigtigt hvad der skal forstås ved "demonstrere".
 
 ## Tirsdag:
 
 Se MovieResourceTest i movieexercise projektet. Jeg har udkommenteret noget og valgte til sidst at disable alle tests da de gav problemer med Travis. Testene virker lokalt, men ikke på Travis og jeg nåede ikke at få svar på hvorfor da jeg fandt ud af det om fredagen.
 
 **Læringsmål:**
 
 **1) Kunne beskrive og demonstrere automatisk test af et WEB-API ved hjælp af Maven**
  - Jeg ved ikke hvad Maven stille til rådighed i forhold til tests.
 
 **2) Kunne demonstrere et eksempel, involverende både unit/integrations-test samt deployment afviklet af Travis**
  - Som sagt have jeg problemer med at Travis ikke kørte testene i movieexercise projektet på samme måde som de kørte lokalt, så jeg fik det kun deployed via Travis efter jeg havde disabled tests.
  
## Onsdag:

Se projektet DomManipulationAndEvents -> Web Pages -> js for dagesn exercises.
names.js er exercises med array metoder, functionsAndCallbacks.js er alle andre exercises (jeg burde helt sikker have delt det op i flere javascript filer). Nogle ting i functionsAndCallbacks.js er udkommenteret, men det er kun fordi det skabte en masse clutter i terminalen når man skulle runne det hele.

 **Læringsmål:**

**1) Kunne forklare datatyper, datastrukturer, kontrolstukturer, funktioner samt sprogets særegenheder i javascript**
 - Datatyper er meget lige som i Java, bortset fra alle tal er Numbers og undefined, som er når en variabel ikke har en assigned value. De eneste datastrukturer jeg mener vi har arbejdet med er array og objekt. Kontrolstrukturer (hvilken kode der bliver afviklet), er så vidt jeg forstår den samme som i Java med conditional statements (if, while, do while, for). Den særegenhed ved JavaScript der er mest påfaldende for mig er at sproget ikke har meget type kontrol, alt er en var og man specificere ikke hvilken datatype ens functioner skal have some argumenter.     
 
**2) Kunne diskutere forskelle på Java og JS på en kvalificeret måde.**
 - Som sagt er det jeg har lagt mest mærke til hvor lidt man skal specificere typer i JavaScript.

**3) Kunne benytte de vigtigst metoder på JavaScripts Array**
 - Se names.js for en masse array metoder.

**4) Kunne diskutere hvad klientside JavaScript tilføjer til webapplikationer.**
 - Javascript kan gøre en side dynamisk uden at den skal reloade hele html dokumenter hver gang. Man kan binde events (clicks, mouse over, timers) til forskellige elementer på html siden og kører functioner der ændre ting på selve siden, fx kan man sætte innerHTML og value i forskellige elementer, eller ændre deres classes så ens css viser elementet på en ny måde.
 
 ## Torsdag: 
 
 Se projektet DomManipulationAndEvents for besvarelser på de forskellige html sider.
 
  **Læringsmål:**
  
**1) Kunne forklare sammenhængen mellem HTML5, CSS og JS og typen af applikationer der kan laves med disse teknologier**
 - HTML er dokumentet med elementerne, CSS bestemmer hvordan elementerne ser ud og JS bestemmer hvordan elementerne opfører sig. Samlet kan de bruges til at lave single page applikationer.

**2) Kunne diskutere forskelle på serverside og client side kode.**
 - Sådan som jeg forstår det er server side kode alt det der sker inden clienten modtager et html dokument i browseren, og clientside er alt det der sker med dokumentet efter det er loaded i browseren.

**3) Kunne demonstrere egne kodeeksempler med variabler, arrays, objekter, funktioner**
 - Se DomManipulationAndEvents projektet for en masse eksempler.

**4) Kunne demonstrere egne kodeeksempler med DOM-interaktion, herunder element udvælgelse, styling og håndtering af tags, attributter og formulardata**
- Se fx calculator.html i DomManipulationAndEvents projektet hvor vi binder en function til onclick på knapperne og tager information fra knappen der blev trykket på og skriver det ind i display elementet.

**5) Kunne demonstrere brug af fetch til serverkald og brug af json data til DOM manipulation**
 - Se users.html i DomManipulationAndEvents projektet hvor vi får et array med brugere fra et fetch kald og i functionen usersToTable() laver det om til html, vi med at et klik på en knap kan smide ind i et element på siden.
  
 ## Fredag
 
 Jeg har desværre ikke lavet fredagsopgaven, da jeg har problemer med at tilgå endpoints i mit movieexercise projekt efter det er deployed. Jeg håber det går da jeg fik torsdagsopgaven med fetch til at virke, og selve JS delen ville næsten bare være copy and paste.
 
 
