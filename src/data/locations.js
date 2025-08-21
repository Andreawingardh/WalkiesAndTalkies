const locations = [
    {
      name: "Ramberget",
      image: "/images/locations/ramberget.png",
      description: "Ramberget är en av Göteborgs mest kända utsiktsplatser. Härifrån, 87 meter över havet, kan du se hela staden breda ut sig – från hamninloppet med Älvsborgsbron till centrum och, vid klart väder, ända bort mot Vinga fyr.\n\nNamnet kommer från ordet rám eller ravn, som betyder korp – och än idag kan du se korpar cirkla kring berget. Själva berget formades under istiden, när en tjock inlandsis slipade fram de rundade klipporna.\n\nRamberget är en del av Keillers park, som skapades i början av 1900-talet efter att James Keiller donerat marken till Göteborg. Då var berget kalt och täckt av ljung, men idag är det omgivet av ek, bok och tall som gör området grönt och inbjudande.\n\nMånga göteborgare kommer hit för en picknick, en löprunda eller bara för att andas ut och njuta av utsikten. Det finns stigar, sittplatser och flera platåer där du kan stanna och låta blicken vandra över staden.",
      coordinates: { lat: 57.71345040359107, lng: 11.936638727925098 },
      categories: ["utsikt", "grönska"]
    },
    {
      name: "Slottsberget",
      image: "/images/locations/slottsberget.png",
      description: "Slottsberget är ett välkänt område på Lindholmen i Göteborg, känt både för sin historia och den fantastiska utsikten över staden. Berget fick sitt namn efter Karl IX:s befästning som byggdes här på 1600-talet för att skydda inloppet till Göta älv. Även om själva fästningen sedan länge är borta, finns fortfarande historiska spår kvar som påminner om platsens strategiska betydelse.\n\nIdag är Slottsberget mest uppskattat för sitt unika läge. Från toppen har man en vidsträckt utsikt över Göteborgs hamninlopp, Eriksbergskranen, Älvsborgsbron och stadens centrala delar. Området präglas också av pittoreska gamla trähus, många från slutet av 1800-talet, vilket ger en charmig och småskalig känsla.\n\nMed sin kombination av kulturhistoria, välbevarad bebyggelse och en av Göteborgs bästa utsikter är Slottsberget en plats som både göteborgare och besökare gärna söker sig till.",
      coordinates: { lat: 57.70383947204522, lng: 11.9291447411781 },
      categories: ["historia", "grönska"]
    },
    {
    name: "Aftonstjärnan",
    image: "/images/locations/aftonstjarnan.png",
    description: "Aftonstjärnan är en anrik samlingslokal på Lindholmen i Göteborg, uppförd redan 1915 som arbetarföreningens hus för varvsarbetarna i området. Byggnaden har genom åren varit ett viktigt kultur- och mötescentrum där människor samlats för föreningsliv, teater, musik och filmvisningar. Namnet ”Aftonstjärnan” kommer från den arbetarrörelsens stjärna som lyste över många liknande hus under början av 1900-talet.\n\nÄn idag är huset en levande kulturplats. Här finns bland annat en biograf och teaterscen, och lokalerna används för konserter, föreläsningar och andra evenemang. Byggnaden har bevarat mycket av sin ursprungliga charm och står som en påminnelse om Lindholmens industriella och sociala historia.\n\nMed sitt centrala läge, sin unika historia och sitt breda kulturutbud är Aftonstjärnan en av de mest uppskattade mötesplatserna på Hisingen.",
    coordinates: { lat: 57.707091736176686, lng: 11.93280937897184 },
    categories: ["historia", "kultur"]
    },
    {
      name: "Sannegårdshamnen",
      image: "/images/locations/sannegardshamnen.png",
      description: "Sannegårdshamnen invigdes 1913 som en industrihamn för kol, koks och salt. Här lossades varor som försörjde hela Göteborg. Idag är området helt omvandlat: en modern stadsdel har vuxit fram med bostäder, småbåtshamn, strandpark och en gång- och cykelbro som öppnas för segelbåtar. Kajpromenaden är perfekt för en stilla promenad vid vattnet, där industrins historia möter det nya stadslivet vid älven.",
      coordinates: { lat: 57.70852264165404, lng: 11.927523499428117 },
      categories: ["vatten", "utsikt"]
    },
    {
      name: "Lindholmens odlarförening",
      image: "/images/locations/odlarforening.png",
      description: "Vid foten av Slottsberget ligger Lindholmens odlarförening, en lugn kolonioas med cirka 100 medlemmar som odlar grönsaker, bär, frukt och blommor i små, personliga lotter. Området är en grönskande kontrast till Lindholmens moderna kontors- och universitetsmiljö och bär på en stark historia – här har stadsnära odlingar bedrivits ända sedan varvstiden. Här hålls årliga städdagar, odlingskalendern styr vattning och skötsel, och gemenskapen är tydlig.",
      coordinates: { lat: 57.7056342121098, lng: 11.93007105435849 },
      categories: ["grönska"]
    },
    {
      name: "Backa Teater",
      image: "/images/locations/backateater.png",
      description: "Backa Teater är en kreativ scen för barn och unga, etablerad 1978 som del av Göteborgs Stadsteater. Teatern ligger i en ombyggd plåtverkstad på Lindholmen och rymmer norra Europas största black box. Här funderar man på vad teater kan vara och utforskar berättelser med konstnärlig frihet och allvar – särskilt när publiken kommer via skolor och kanske inte valt föreställningen själv.",
      coordinates: { lat: 57.70524716421299, lng: 11.935327672525368 },
      categories: ["kultur"]
    },
    {
      name: "Eriksbergskajen",
      image: "/images/locations/eriksbergskajen.png",
      description: "Du befinner dig på Eriksbergskajen, en historisk kaj vid norra älvstranden där varvsepoken lämnat tydliga spår i landskapet. Det röda bockkranet från 1959, Göteborgs ikoniska landmärke, är kulturminnesmärkt och lyses upp kvällstid. Här kantas kajen av granitskulpturer, träbryggor och ny arkitektur – ett levande exempel på stadens förmåga att omforma industri till mötesplats vid vattnet.",
      coordinates: { lat: 57.70028556471835, lng: 11.914368739625372 },
      categories: ["vatten"]
    },
    {
      name: "Sörhallsberget",
      image: "/images/locations/sorhallsberget.png",
      description: "Sörhallsberget är en grön oas på Lindholmen i Göteborg och en uppskattad plats för både boende och besökare. Berget ligger vid vattnet och erbjuder en av de bästa utsikterna över hamninloppet, Älvsborgsbron och Göteborgs stadssilhuett. Från toppen kan man följa färjor, lastfartyg och småbåtar som rör sig längs Göta älv – en vy som speglar både stadens historia och nutid.\n\nOmrådet har länge varit ett naturligt inslag i Lindholmens landskap. Förr låg här industrier och varvsverksamhet, men idag är Sörhallsberget framför allt en rekreationsplats. De gröna ytorna, gångstigarna och närheten till vattnet gör berget populärt för promenader, picknickar och utsiktsstunder.\n\nMed sin kombination av natur, hamnmiljö och storslagen utsikt är Sörhallsberget en plats som knyter ihop Lindholmens industriella förflutna med den moderna stadsdelen som växer fram runt omkring.",
      coordinates: { lat: 57.70273433913847, lng: 11.923610875538234 },
      categories: ["utsikt", "vatten", "gronska"]
    },
    {
      name: "Färjenäsparken",
      image: "/images/locations/farjenasparken.png",
      description: "Färjenäsparken, belägen vid foten av Älvsborgsbron på Hisingen, är en 15 hektar stor stadspark med en rik historia. Området var en gång platsen för det första Göteborg, grundlagt av Karl IX år 1603, och har sedan dess utvecklats från ett industriområde till en modern park för rekreation och evenemang. Parken erbjuder en mångfald av aktiviteter, inklusive en av Hisingens största lekplatser, en 1 400 meter lång motionsslinga, fotbollsplan, skatepark, streetbasketplan och utsiktsplatser med grillmöjligheter. Den nyligen utbyggda delen av parken, färdigställd mellan 2021 och 2023, sträcker sig ända ner till älven och ramar in den stora gräsytan med naturlika planteringar som på sikt ska utvecklas till en artrik skogsmiljö.",
      coordinates: { lat: 57.6978611974361, lng: 11.901256583986251 },
      categories: ["gronska"]
    },
    {
      name: "Lindholmsdockans Hamn",
      image: "/images/locations/lindholmsdockan.png",
      description: "Gamla torrdockan anlades i slutet av 1800-talet och användes under många år för skeppsbyggen och reparationer av fartyg. Här byggdes och underhölls några av de fartyg som satte Göteborg på kartan som en av världens ledande varvsstäder under 1900-talet.\n\nNär varvsindustrin lades ner på 1980-talet stod dockan länge som ett minnesmärke över den epok som format hela Hisingen. I samband med Lindholmens omvandling till en modern stadsdel bevarades dockan och området runt den har fått nytt liv. Idag används den inte längre för skeppsbyggen, men den fungerar som en småbåtshamn och ett levande inslag i stadsbilden, där historien tydligt möter nutiden.\n\nMed sina gamla kajkanter, bevarade industridetaljer och närheten till både moderna byggnader och vattenlivet, är Lindholmsdockans hamn ett unikt kulturarv som berättar om Göteborgs starka band till varven och sjöfarten.",
      coordinates: { lat: 57.703339512957186, lng: 11.930713712036136 },
      categories: ["vatten"]
    },
    {
      name: "Lindholmens Konsthall",
      image: "/images/locations/konsthall.png",
      description: "Lindholmens Konsthall är en plats där samtida konst möter Göteborgs kreativa stadsdel. Konsthallen visar utställningar av både etablerade och nya konstnärer inom måleri, skulptur, fotografi och installationer. Här arrangeras även workshops, föreläsningar och evenemang som bjuder in besökare att själva reflektera och delta i konstnärliga processer. Konsthallen ligger centralt på Lindholmen och fungerar som en mötesplats för konstintresserade i alla åldrar.",
      coordinates: { lat: 57.7055556774925, lng: 11.933235666269335 },
      categories: ["kultur"]
    },
    {
      name: "Sverige största konstverk",
      image: "/images/locations/konstverk.png",
      description: "På fastigheten Pannverkstaden på Lindholmen pryder Sveriges största konstverk en fasad som sträcker sig över hela 2 800 kvadratmeter. Konstverket skapades 2023 av den internationellt kände konstnären HOXXOH (Douglas Hoekzema) i samarbete med gatukonstorganisationen Artscape och Älvstranden Utveckling AB. Den färgsprakande muralmålningen, som täcker en hel vägg, har blivit ett landmärke i området och en symbol för kreativitet och stadsutveckling.",
      coordinates: { lat: 57.71050633154905, lng: 11.949434334965696 },
      categories: ["kultur"]
    }
  ];
  
  export default locations;