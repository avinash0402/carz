export type Product = {
  id:number; slug:string; name:string; category:string; vehicle:string[]; price:number; compareAt:number;
  image:string; rating:number; reviews:number; description:string; material:string; difficulty:string; featured?:boolean; newArrival?:boolean; bestseller?:boolean;
};
const img = (query:string) => `https://images.unsplash.com/${query}?auto=format&fit=crop&w=1000&q=80`;
export const products: Product[] = [
  ['Virtus GT 3-Piece Front Splitter','exterior',['Volkswagen Virtus'],7999,9499,'photo-1544829099-b9a0c07fad1a','Front splitter profile',4.8,126,'A low, clean front-end upgrade with a precise OEM+ silhouette.','ABS polymer','Medium','featured bestseller'],
  ['Virtus GT Rear Diffuser','exterior',['Volkswagen Virtus'],8499,9999,'photo-1504215680853-026ed2a45def','Black performance car rear',4.7,84,'Sharpens the rear stance without compromising daily usability.','ABS polymer','Medium','featured'],
  ['Virtus GT Side Skirts','exterior',['Volkswagen Virtus'],9999,11999,'photo-1553440569-bcc63803a83d','Blue sports coupe side',4.9,61,'Extended side profile for a planted, finished look.','FRP composite','Professional','bestseller'],
  ['Scorpio N Sequential LED Tail Lamps','lighting',['Mahindra Scorpio N'],12499,14999,'photo-1606664515524-ed2f786a0bd6','SUV tail light',4.8,142,'Plug-and-play sequential light signature built for night presence.','Polycarbonate','Medium','featured bestseller'],
  ['Scorpio N Front Grille','exterior',['Mahindra Scorpio N'],6999,8499,'photo-1542282088-fe8426682b8f','Black SUV front',4.6,54,'A tougher, more technical face for the Scorpio N.','ABS polymer','Easy','newArrival'],
  ['Scorpio N Roof Spoiler','exterior',['Mahindra Scorpio N'],5499,6999,'photo-1511919884226-fd3cad34687c','SUV roof detail',4.5,42,'A subtle roof-line extension with a factory-plus finish.','ABS polymer','Medium',''],
  ['Thar LED Headlight Upgrade','lighting',['Mahindra Thar'],15999,18999,'photo-1533473359331-0135ef1b58bf','Black offroad SUV',4.9,117,'Brighter, crisper and shaped for the Thar lifestyle.','CNC aluminium','Professional','featured bestseller'],
  ['Thar Fender Flare Kit','exterior',['Mahindra Thar'],8999,10999,'photo-1503376780353-7e6692767b70','Offroad vehicle',4.6,73,'Add visual width and protection with a rugged bolt-on profile.','ABS polymer','Medium',''],
  ['Thar Rear Ladder','accessories',['Mahindra Thar'],4499,5499,'photo-1549317661-bd32c8ce0db2','4x4 rear',4.7,39,'Functional access with a satin black, load-ready finish.','Steel','Medium','newArrival'],
  ['Swift Monster Spoiler','exterior',['Maruti Swift'],6499,7499,'photo-1492144534655-ae79c964c9d7','Red sports car',4.8,109,'A compact hatch spoiler with a little more attitude.','FRP composite','Professional','featured bestseller'],
  ['Swift Side Skirts','exterior',['Maruti Swift'],5999,7499,'photo-1552519507-da3b142c6e3d','Silver hatchback',4.6,35,'Keeps the Swift low and visually connected.','FRP composite','Professional',''],
  ['Swift LED Tail Lamps','lighting',['Maruti Swift'],8499,9999,'photo-1605559424843-9e4c228bf1c2','Red tail lamps',4.7,78,'Smoked, sequential and made to stand out after sunset.','Polycarbonate','Medium','newArrival'],
  ['Fortuner Front Grille','exterior',['Toyota Fortuner'],7999,9999,'photo-1532974297617-c0c5df0d5f8','Dark SUV grille',4.7,64,'A clean blacked-out grille for a wider visual front.','ABS polymer','Easy',''],
  ['Fortuner Sequential Tail Lamps','lighting',['Toyota Fortuner'],14499,16999,'photo-1551830820-330a71b99659','SUV tail light',4.8,81,'Modern light animation, plug-in harness and zero dashboard drama.','Polycarbonate','Medium','bestseller'],
  ['Fortuner Rear Spoiler','exterior',['Toyota Fortuner'],7499,8999,'photo-1606016159991-dfe4f2746ad5','Black SUV rear',4.5,29,'A purposeful edge to the Fortuner roofline.','ABS polymer','Medium',''],
  ['Creta N-Line Style Spoiler','exterior',['Hyundai Creta'],5999,7499,'photo-1542362567-b07e54358753','White modern car',4.7,51,'A sportier silhouette for the everyday Creta.','ABS polymer','Medium','newArrival'],
  ['Creta Side Skirts','exterior',['Hyundai Creta'],8999,10499,'photo-1550355291-bbee04a92027','Grey crossover',4.6,44,'Contoured side skirts with a sharp lower crease.','FRP composite','Professional',''],
  ['Creta LED Tail Lamps','lighting',['Hyundai Creta'],11999,13999,'photo-1619767886558-efdc259cde1a','SUV lights',4.8,67,'A distinctive red signature for a more premium night profile.','Polycarbonate','Medium',''],
  ['XUV700 LED Fog Lamp Kit','lighting',['Mahindra XUV700'],6999,8499,'photo-1625047509248-ec889cbff17f','Headlamp closeup',4.7,32,'Focused illumination for monsoon drives and dark roads.','Aluminium','Easy',''],
  ['XUV700 Front Lip','exterior',['Mahindra XUV700'],7499,8999,'photo-1597007066704-67bf2068d5b0','SUV front lip',4.6,28,'A low visual anchor for XUV700 builds.','ABS polymer','Medium',''],
  ['Verna Rear Diffuser','exterior',['Hyundai Verna'],7999,9499,'photo-1503736334956-4c8f8e92946d','Sedan rear',4.8,26,'Clean aero geometry for the Verna rear bumper.','ABS polymer','Medium','newArrival'],
  ['Verna Ducktail Spoiler','exterior',['Hyundai Verna'],5499,6499,'photo-1542362567-b07e54358753','White sedan',4.7,22,'A compact ducktail that keeps the sedan elegant.','FRP composite','Professional',''],
  ['Polo GTI Style Spoiler','exterior',['Volkswagen Polo'],6499,7999,'photo-1493238792000-8113da705763','White performance car',4.9,94,'The hatch icon gets its proper finishing touch.','FRP composite','Professional','featured'],
  ['Polo LED Tail Lamps','lighting',['Volkswagen Polo'],10499,12499,'photo-1494905998402-395d579af36f','Red car rear',4.7,43,'Crisp LED tail lamps for an unmistakable Polo rear.','Polycarbonate','Medium',''],
  ['Akrapovic-Style Exhaust Tips','exhaust',['Universal'],3999,4999,'photo-1600706432502-77a0e2e32785','Exhaust tips',4.6,188,'Brushed titanium-look finish without the titanium price tag.','Stainless steel','Easy','featured bestseller'],
  ['Dual Exhaust Tip Set','exhaust',['Universal'],2999,3999,'photo-1584345604476-8ec5e12f6d8e','Exhaust detail',4.5,77,'Two clean-cut tips for a balanced rear profile.','Stainless steel','Easy',''],
  ['Universal Carbon-Finish Mirror Caps','accessories',['Universal'],2499,3499,'photo-1614200179396-2bdb77ebf81b','Carbon mirror',4.4,58,'Instant carbon texture and an exacting edge line.','ABS polymer','Easy',''],
  ['Sequential Dynamic Indicators','lighting',['Universal'],1999,2999,'photo-1511919884226-fd3cad34687c','Car indicator',4.7,115,'The little detail everyone notices at the junction.','Polycarbonate','Easy','bestseller'],
  ['Interior Ambient Lighting Kit','interior',['Universal'],3499,4499,'photo-1551830820-330a71b99659','Car interior',4.5,96,'A considered cabin glow with app-free, simple controls.','Silicone LED','Easy','newArrival'],
  ['Universal Performance Air Filter','performance',['Universal'],2899,3999,'photo-1502877338535-766e1452684a','Engine performance',4.6,46,'More flow, less fuss. Washable and daily-friendly.','Cotton gauze','Medium',''],
  ['Carbon-Finish Number Plate Frame','accessories',['Universal'],1299,1799,'photo-1504215680853-026ed2a45def','Car detail',4.4,31,'A small finishing piece with a crisp matte weave.','ABS polymer','Easy',''],
].map((p:any[],i)=>({ id:i+1, slug:String(p[0]).toLowerCase().replace(/[^a-z0-9]+/g,'-'), name:p[0], category:p[1], vehicle:p[2], price:p[3], compareAt:p[4], image:img(p[5]), rating:p[7], reviews:p[8], description:p[9], material:p[10], difficulty:p[11], ...Object.fromEntries(String(p[12]).split(' ').filter(Boolean).map((x:string)=>[x,true])) })) as Product[];
export const categories = [
  {name:'Exterior', key:'exterior', image:img('photo-1544829099-b9a0c07fad1a'), count:12},
  {name:'Lighting', key:'lighting', image:img('photo-1606664515524-ed2f786a0bd6'), count:7},
  {name:'Performance', key:'performance', image:img('photo-1502877338535-766e1452684a'), count:4},
  {name:'Interior', key:'interior', image:img('photo-1551830820-330a71b99659'), count:3},
  {name:'Exhaust', key:'exhaust', image:img('photo-1600706432502-77a0e2e32785'), count:3},
  {name:'Accessories', key:'accessories', image:img('photo-1614200179396-2bdb77ebf81b'), count:4},
];
export const vehicles = ['Mahindra Thar','Mahindra Scorpio N','Mahindra XUV700','Volkswagen Virtus','Volkswagen Taigun','Hyundai Creta','Hyundai Verna','Maruti Swift','Maruti Baleno','Toyota Fortuner','Toyota Innova','Tata Nexon','Tata Harrier','Kia Seltos','Kia Sonet'];
export const reviews = [
  ['Rahul S.','Volkswagen Virtus GT','Absolutely transformed the front end of my Virtus. Fitment was spot on and the finish exceeded expectations.'],
  ['Arjun M.','Mahindra Thar','The headlight upgrade changes the entire night drive. Install was straightforward.'],
  ['Kartik P.','Maruti Swift','Monster spoiler arrived safely and looks even better in person.'],
  ['Nikhil R.','Toyota Fortuner','Great support on WhatsApp before ordering. They actually asked for variant details.'],
  ['Ishita K.','Hyundai Creta','Tail lamps are clean, bright and have had zero errors so far.'],
  ['Dev A.','Mahindra Scorpio N','The fitment guide was clear. Rear now looks properly finished.'],
];
export const builds = [
  {name:'VIRTUS GT / NIGHT SHIFT', car:'Volkswagen Virtus', image:img('photo-1544829099-b9a0c07fad1a'), mods:'Splitter · Diffuser · Side skirts'},
  {name:'SCORPIO N / BLACK SPEC', car:'Mahindra Scorpio N', image:img('photo-1606664515524-ed2f786a0bd6'), mods:'Tail lamps · Grille · Roof spoiler'},
  {name:'THAR / TRAIL FORM', car:'Mahindra Thar', image:img('photo-1533473359331-0135ef1b58bf'), mods:'Headlights · Flares · Ladder'},
];