function loadHTML(targetId, url) {
  console.log(`Loading ${url} into #${targetId}`);

  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;

      // Nếu là chatbot.html thì load script SAU KHI load xong HTML
      if (url === "chatbot.html") {
        const script = document.createElement("script");
        script.src = "chatbot.js";
        script.defer = true;
        document.body.appendChild(script);
      }
    })
    .catch(err => console.error("Load HTML error:", err));
}

// Load components
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");
loadHTML("chatbot", "chatbot.html");

/* Create sample data for 20 passages */
const TOTAL = 20;

/* Build a list of passages data */
const passages = [
  {
    id: 1,
    title: "[ThanhVan] - The Origins of Everyday Tools",
    label: "Reading Test 1",
    count: 3969,
    thumb: "assets/pass1.jpg",
    statement: `You should spend about 20 minutes on questions 1 - 13 which are based on Reading Passage below.`,
    passage:
      `     Human societies are defined by the objects we surround ourselves with. Simple tools — a sharpened stone, a woven basket, a metal nail — have shaped human routines and transformed environments. Archaeologists trace the development of these objects to intricate sequences of learning: one generation observes, adapts and passes along technique. Yet tools do not only solve immediate problems; they also create cultural practices. The way a community shapes a pot, for example, signals identity and can influence trade networks. As crafts became specialized, a division of labor emerged, and that spurred social stratification. At the same time, the raw materials available in a region — clay, stone, or metal ores — heavily influenced the design choices and the technology that developed there. Over time, tools also carry symbolic weight: ceremonial swords, ornate pottery or decorated combs encode meaning beyond utility. The study of simple objects therefore opens a window onto a society’s economy, belief systems and communication patterns.

      
      Human societies are defined by the objects we surround ourselves with. Simple tools — a sharpened stone, a woven basket, a metal nail — have shaped human routines and transformed environments. Archaeologists trace the development of these objects to intricate sequences of learning: one generation observes, adapts and passes along technique. Yet tools do not only solve immediate problems; they also create cultural practices. The way a community shapes a pot, for example, signals identity and can influence trade networks. As crafts became specialized, a division of labor emerged, and that spurred social stratification. At the same time, the raw materials available in a region — clay, stone, or metal ores — heavily influenced the design choices and the technology that developed there. Over time, tools also carry symbolic weight: ceremonial swords, ornate pottery or decorated combs encode meaning beyond utility. The study of simple objects therefore opens a window onto a society’s economy, belief systems and communication patterns.
      `,
    questions: [
      { id: "p1_q1", type: "dropdown", q: "The passage primarily discusses:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p1_q2", type: "dropdown", q: "Which idea is emphasised about tools?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p1_q3", type: "mcq", q: "Which factor shaped tool design according to the text?", choices: ["Religion", "Raw materials", "Weather", "Government"], answer: "Raw materials" },
      { id: "p1_q4", type: "mcq", q: "What social change did tool specialization contribute to?", choices: ["Increased equality", "Division of labor", "Less trade", "Simpler routines"], answer: "Division of labor" },
    ]
  },
  {
    id: 2,
    title: "[ThanhVan] - Urban Gardens and City Life",
    label: "Reading Test 2",
    count: 3350,
    thumb: "assets/pass2.jpg",
    passage:
      `As cities expand, spaces for plants shrink — yet an opposite trend is growing: urban gardening. Rooftops, balconies and narrow courtyards are being transformed into small patches of green that offer more than aesthetic comfort. For residents, these gardens reduce stress, provide fresh produce and foster neighbourly connections. Local authorities sometimes support such initiatives through grants or by repurposing disused land. However, urban gardening faces obstacles: soil contamination, limited sunlight and competing demands for land. Innovative solutions, like raised planters with clean soil and hydroponic systems, are helping overcome these challenges. Importantly, community gardens frequently become educational hubs; school programs use them to teach children about ecology and nutrition. Ultimately, the spread of urban gardens signals a changing relation between people and their cities — where citizens reclaim mundane spaces for shared benefit.`,
    questions: [
      { id: "p2_q1", type: "dropdown", q: "The main benefit of urban gardens described is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "A" },
      { id: "p2_q2", type: "dropdown", q: "A challenge for urban gardening is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p2_q3", type: "mcq", q: "Which solution is mentioned for soil issues?", choices: ["Green roofs", "Raised planters", "Composting", "Mulching"], answer: "Raised planters" }
    ]
  },
  {
    id: 3,
    title: "[ThanhVan] - Language Change Over Generations",
    label: "Reading Test 3",
    count: 2086,
    thumb: "assets/pass3.jpg",
    passage:
      `Languages are living systems that evolve as speakers adapt to social needs and external influences. New words appear, old structures fade and pronunciation shifts gradually. While some changes happen due to internal simplification — making phrases easier to say — others arise through contact with different tongues: trade, migration and media create loan-words and new patterns. Education systems attempt to stabilise language by prescribing norms, but informal speech communities often lead change. Interestingly, researchers note that younger speakers frequently innovate in grammar and vocabulary as a marker of identity. Over decades, such innovations can spread widely, resulting in dialect convergence or divergence. A further factor is technology; digital communication favours brevity and has introduced abbreviations that, in time, may become standard vocabulary.`,
    questions: [
      { id: "p3_q1", type: "dropdown", q: "The passage mainly explains why language:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "C" },
      { id: "p3_q2", type: "dropdown", q: "Which force is NOT mentioned as influencing change?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "E" },
      { id: "p3_q3", type: "mcq", q: "What do researchers associate with younger speakers?", choices: ["Resistance to change", "Innovation in language", "Better grammar", "Slower speech"], answer: "Innovation in language" }
    ]
  },
  {
    id: 4,
    title: "[ThanhVan] - The Ethics of Autonomous Vehicles",
    label: "Reading Test 4",
    count: 4020,
    thumb: "assets/pass4.jpg",
    passage:
      `When machines are entrusted with driving decisions, ethical dilemmas arise. Autonomous vehicles must be programmed to respond to unpredictable events on the road; their choices may involve trade-offs between property and human life. Philosophers discuss scenarios where harm is unavoidable — who should the vehicle prioritise? Engineers often adopt utilitarian frameworks, aiming to minimise total harm, but critics argue that programming such trade-offs imposes subjective values. Legal systems also face new questions: who is liable when an autonomous vehicle causes injury — the manufacturer, the software developer or the owner? Proponents emphasise the overall safety benefits: human error causes most accidents, and removing that element could substantially reduce casualties. Still, public acceptance depends on trust, transparent regulation and clear ethical guidelines.`,
    questions: [
      { id: "p4_q1", type: "dropdown", q: "A central concern in the passage is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p4_q2", type: "dropdown", q: "Which viewpoint is attributed to proponents?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p4_q3", type: "mcq", q: "Who might be held responsible legally?", choices: ["The manufacturer", "The pedestrian", "The weather", "No one"], answer: "The manufacturer" }
    ]
  },
  {
    id: 5,
    title: "[ThanhVan] - Small Businesses and Digital Platforms",
    label: "Reading Test 5",
    count: 2813,
    thumb: "assets/pass5.jpg",
    passage:
      `Digital platforms have lowered barriers to market entry for many entrepreneurs. A craftsman can now reach global customers through online marketplaces, bypassing traditional intermediaries. However, reliance on a single platform also brings risks: sudden policy changes, fee increases or algorithm updates can dramatically affect visibility and income. Businesses that diversify channels and build direct relationships with customers tend to be more resilient. Moreover, digital tools generate data about customers’ preferences, enabling targeted marketing and inventory optimisation. Yet the effective use of data requires skills that small business owners may lack, prompting a growing market of third-party advisers and services. Therefore, while digital platforms offer opportunity, success depends on strategic use and adaptability.`,
    questions: [
      { id: "p5_q1", type: "dropdown", q: "The passage suggests that digital platforms:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "A" },
      { id: "p5_q2", type: "dropdown", q: "What is a risk for platform-based sellers?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p5_q3", type: "mcq", q: "What do digital tools provide that helps businesses?", choices: ["Loans", "Customer data", "Legal advice", "Employee training"], answer: "Customer data" }
    ]
  },
  {
    id: 6,
    title: "[ThanhVan] - The Rewilding Movement",
    label: "Reading Test 6",
    count: 14455,
    thumb: "assets/pass6.jpg",
    passage:
      `Rewilding aims to restore ecosystems to a more natural state, often by reintroducing key species and reducing human interference. Advocates highlight ecological benefits: restored predator-prey dynamics, greater biodiversity and improved resilience to climate change. Critics worry about conflicts with agriculture and the needs of local communities; reintroducing large herbivores or carnivores can threaten crops and livestock. Successful projects typically involve careful consultation, compensation schemes and gradual implementation. Moreover, rewilding can deliver cultural benefits: people reconnect with wilder landscapes and derive psychological benefits from observing richer wildlife. In many regions, rewilding also necessitates policy change — incentives for landowners and long-term funding models are crucial for sustained outcomes.`,
    questions: [
      { id: "p6_q1", type: "dropdown", q: "The passage mainly focuses on:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "C" },
      { id: "p6_q2", type: "dropdown", q: "Which concern do the critics raise?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p6_q3", type: "mcq", q: "What is essential for rewilding success?", choices: ["Music festivals", "Compensation schemes", "Industrial growth", "Tax cuts"], answer: "Compensation schemes" }
    ]
  },
  {
    id: 7,
    title: "[ThanhVan] - Sleep and Memory Consolidation",
    label: "Reading Test 7",
    count: 943,
    thumb: "assets/pass7.jpg",
    passage:
      `Research increasingly shows that sleep plays a vital role in consolidating memories. During particular stages of sleep, the brain replays patterns of activity from the day, reinforcing synaptic connections and transferring memories from short-term to long-term storage. This process is not uniform; different types of memory — procedural skills or factual knowledge — benefit from different sleep stages. For example, rapid eye movement (REM) sleep is associated with emotional memory processing, while slow-wave sleep supports declarative memory. Sleep deprivation disrupts these processes, impairing learning and recall. Consequently, educational policies that favour extremely early school start times may inadvertently reduce students’ capacity to retain new information.`,
    questions: [
      { id: "p7_q1", type: "dropdown", q: "Which function of sleep is highlighted?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p7_q2", type: "dropdown", q: "Which sleep stage is linked to declarative memory?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "E" },
      { id: "p7_q3", type: "mcq", q: "What is a consequence of sleep deprivation?", choices: ["Improved memory", "Impaired recall", "Faster learning", "No change"], answer: "Impaired recall" }
    ]
  },
  {
    id: 8,
    title: "[ThanhVan] - Microplastics in the Food Chain",
    label: "Reading Test 8",
    count: 402,
    thumb: "assets/pass8.jpg",
    passage:
      `Tiny fragments of plastic, known as microplastics, have been discovered across marine and terrestrial food chains. These particles originate from larger plastic debris breaking down, synthetic textiles and certain personal care products. Once in the environment, microplastics can be ingested by small organisms and then bioaccumulate up the food chain, eventually reaching fish and shellfish consumed by humans. Scientists are still researching health implications, but concerns include chemical exposure and potential inflammatory effects. Policy responses include bans on microbeads, improved waste management and innovation in biodegradable materials. Public awareness campaigns also play a role; reducing single-use plastics can decrease the source material for microplastics.`,
    questions: [
      { id: "p8_q1", type: "dropdown", q: "The passage primarily raises concerns about:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "G" },
      { id: "p8_q2", type: "dropdown", q: "Which measure is mentioned as a policy response?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "E" },
      { id: "p8_q3", type: "mcq", q: "Microplastics can enter human diet via:", choices: ["Imported fruits", "Seafood", "Bottled water only", "Canned vegetables"], answer: "Seafood" }
    ]
  },
  {
    id: 9,
    title: "[ThanhVan] - Remote Work and Urban Geography",
    label: "Reading Test 9",
    count: 1077,
    thumb: "assets/pass9.jpg",
    passage:
      `The surge in remote work is reshaping urban patterns. As commuting pressure lessens, some workers relocate to suburbs or smaller towns, altering demand for office space and local services. City centres once dominated by daily commuters may diversify into cultural and leisure hubs. Real estate developers respond by redesigning buildings for mixed uses. Yet not all effects are positive: local businesses reliant on office workers may suffer, and unequal access to high-speed internet can exacerbate regional disparities. Urban planners face a dual challenge: adapt infrastructure to support new residential patterns while finding strategies to sustain vibrant central districts. Ultimately, remote work has introduced both flexibility and complexity into urban geography.`,
    questions: [
      { id: "p9_q1", type: "dropdown", q: "One effect of remote work is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p9_q2", type: "dropdown", q: "A negative consequence mentioned is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p9_q3", type: "mcq", q: "What infrastructure issue is highlighted?", choices: ["Electricity shortages", "Internet access", "Road congestion", "Public transport reliability"], answer: "Internet access" }
    ]
  },
  {
    id: 10,
    title: "[ThanhVan] - The Science of Taste",
    label: "Reading Test 10",
    count: 4020,
    thumb: "assets/pass10.jpg",
    passage:
      `Taste perception blends biology and experience. The tongue senses basic tastes — sweet, sour, salty, bitter and umami — through specialised receptors. However, flavour is a cognitive construction; smell, texture and even visual cues strongly influence what we perceive. Cultural upbringing shapes taste preferences: childhood exposure to certain foods tends to foster lifelong affinities. Scientists also investigate genetic differences that make some people highly sensitive to bitter compounds, which can influence food choices and nutrition. In culinary innovation, chefs manipulate multisensory elements to create surprising pairings; molecular gastronomy frequently exploits these principles to transform familiar ingredients.`,
    questions: [
      { id: "p10_q1", type: "dropdown", q: "The passage suggests taste is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p10_q2", type: "dropdown", q: "What influences lifelong food preference?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "E" },
      { id: "p10_q3", type: "mcq", q: "Which discipline uses scientific principles to alter food?", choices: ["Sociology", "Molecular gastronomy", "Botany", "Nutrition only"], answer: "Molecular gastronomy" }
    ]
  },
  {
    id: 11,
    title: "[ThanhVan] - Memory Aids and Modern Learning",
    label: "Reading Test 11",
    count: 2813,
    thumb: "assets/pass11.jpg",
    passage:
      `Students often use mnemonic devices to retain complex information. Methods like acronyms, storytelling and spatial association (the "memory palace") transform abstract facts into memorable images. Cognitive psychologists explain success by noting that vivid, structured encodings recruit multiple brain systems and provide several retrieval cues. Yet critics warn against overreliance: a mnemonic might help recall a formula without understanding its meaning. Optimal learning combines mnemonic strategies with active practice and conceptual reflection. Educators increasingly design curricula that blend memorisation techniques with exercises requiring application, thereby promoting both retention and deeper comprehension.`,
    questions: [
      { id: "p11_q1", type: "dropdown", q: "A potential drawback of mnemonics is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "C" },
      { id: "p11_q2", type: "dropdown", q: "Why are mnemonics effective?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p11_q3", type: "mcq", q: "What teaching approach is recommended?", choices: ["Memorisation only", "Blend of techniques", "Strict lectures", "No practice"], answer: "Blend of techniques" }
    ]
  },
  {
    id: 12,
    title: "[ThanhVan] - Water-Sensitive Urban Design",
    label: "Reading Test 12",
    count: 107,
    thumb: "assets/pass12.jpg",
    passage:
      `Cities increasingly integrate water-sensitive design to manage floods and supply. Green infrastructure — permeable pavements, bioswales and rain gardens — reduces runoff and replenishes groundwater. These measures can be cost-effective compared with large underground drainage projects, and they add amenity value. However, retrofitting older urban areas presents logistical constraints, and maintenance responsibilities must be clarified. With climate change intensifying storms, planners view such nature-based solutions as essential complements to grey infrastructure.`,
    questions: [
      { id: "p12_q1", type: "dropdown", q: "Green infrastructure helps to:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p12_q2", type: "dropdown", q: "A difficulty mentioned is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p12_q3", type: "mcq", q: "Green approaches are seen as complements to:", choices: ["Road building", "Grey infrastructure", "Parks", "Housing"], answer: "Grey infrastructure" }
    ]
  },
  {
    id: 13,
    title: "[ThanhVan] - The Art Market and Digital Sales",
    label: "Reading Test 13",
    count: 4020,
    thumb: "assets/pass13.jpg",
    passage:
      `Online platforms have transformed the art market, enabling collectors to discover works beyond local galleries. Lower transaction costs and wider reach attract new buyers, though concerns exist about provenance and valuation accuracy. Auction houses adopt hybrid models: physical viewings combined with online bidding. For artists, digital exposure expands visibility but increases competition. Some artists use limited digital releases and certificates of authenticity to safeguard value. The online art economy is thus a dynamic mix of opportunity, risk and evolving trust mechanisms.`,
    questions: [
      { id: "p13_q1", type: "dropdown", q: "One advantage of digital sales is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "A" },
      { id: "p13_q2", type: "dropdown", q: "Which concern does the passage raise?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p13_q3", type: "mcq", q: "What do artists use to protect digital value?", choices: ["Limited releases", "Free downloads", "Open access", "Unlimited prints"], answer: "Limited releases" }
    ]
  },
  {
    id: 14,
    title: "[ThanhVan] - Plant Communication through Roots",
    label: "Reading Test 14",
    count: 943,
    thumb: "assets/pass14.jpg",
    passage:
      `Recent studies reveal that plants exchange information via root networks and fungal partners. Through chemical signals, a stressed plant can warn neighbours of drought or disease, prompting protective responses. Mycorrhizal fungi often act as conduits for these signals, forming an underground network sometimes likened to a 'wood-wide web'. This communication influences community composition and survival strategies, though interpretative caution is needed: experimental conditions in labs may simplify complex field interactions. The findings nevertheless challenge simplistic views of plants as passive organisms and highlight ecological interconnectedness.`,
    questions: [
      { id: "p14_q1", type: "dropdown", q: "The passage suggests plants can:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "G" },
      { id: "p14_q2", type: "dropdown", q: "What acts as a conduit for signals?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "E" },
      { id: "p14_q3", type: "mcq", q: "Why caution is advised?", choices: ["Lab conditions differ from field", "Signals are unheard", "Plants don't communicate", "No fungi exist"], answer: "Lab conditions differ from field" }
    ]
  },
  {
    id: 15,
    title: "[ThanhVan] - The Revival of Artisan Baking",
    label: "Reading Test 15",
    count: 1077,
    thumb: "assets/pass15.jpg",
    passage:
      `A revival in artisan baking reflects both culinary trends and local economic shifts. Consumers seek bread with distinct textures and flavours, often preferring loaves made from local grains and traditional starters. Small bakeries emphasise craft methods — long fermentation and manual shaping — as differentiators. Such businesses can support local supply chains and create neighborhood vitality. However, scalability is a challenge; artisan methods are time-consuming and difficult to standardize for mass distribution. Some bakers find balance by offering workshops and direct sales that complement wholesale channels.`,
    questions: [
      { id: "p15_q1", type: "dropdown", q: "One reason artisan baking is popular is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p15_q2", type: "dropdown", q: "A difficulty for artisan bakers is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p15_q3", type: "mcq", q: "What do baker workshops provide?", choices: ["Supply chains", "Customer engagement", "Large-scale production", "Tax advice"], answer: "Customer engagement" }
    ]
  },
  {
    id: 16,
    title: "[ThanhVan] - Citizen Science and Data Quality",
    label: "Reading Test 16",
    count: 943,
    thumb: "assets/pass16.jpg",
    passage:
      `Citizen science projects harness public participation for large-scale data collection: bird counts, water quality logs and phenology observations. Enthusiastic volunteers extend researchers' reach, but data quality can vary. Projects improve reliability by providing clear protocols, training modules and validation steps, such as expert review or algorithmic filtering. When successful, citizen contributions fuel discoveries and foster public engagement with science. The social benefits — education and empowerment — complement the scientific value, though ensuring long-term volunteer commitment remains a key management challenge.`,
    questions: [
      { id: "p16_q1", type: "dropdown", q: "A benefit of citizen science is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p16_q2", type: "dropdown", q: "How do projects maintain data quality?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p16_q3", type: "mcq", q: "What is a managerial challenge mentioned?", choices: ["Funding only", "Volunteer retention", "Lack of interest", "Hardware"], answer: "Volunteer retention" }
    ]
  },
  {
    id: 17,
    title: "[ThanhVan] - Portable Solar and Off-grid Power",
    label: "Reading Test 17",
    count: 107,
    thumb: "assets/pass17.jpg",
    statement: `You should spend about 20 minutes on questions 1 - 13 which are based on Reading Passage 1 below.`,
    passage:
      `Portable solar panels and battery storage are changing energy access in remote areas. Lightweight kits power lights, refrigerators and communication devices, improving living standards and supporting microenterprises. The technology is modular: households can scale systems gradually. Nevertheless, issues like battery disposal, upfront costs and seasonal variability of sunlight must be addressed. Microfinancing schemes and government subsidies can help adoption, while recycling programmes reduce environmental costs. As storage technologies improve, off-grid solar offers a promising pathway to equitable energy provision.`,
    questions: [
      { id: "p17_q1", type: "dropdown", q: "Portable solar primarily aids:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "A" },
      { id: "p17_q2", type: "dropdown", q: "Which obstacle is listed?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p17_q3", type: "mcq", q: "What helps households afford systems?", choices: ["Microfinancing", "Free panels", "No batteries", "Subsidies only"], answer: "Microfinancing" }
    ]
  },
  {
    id: 18,
    title: "[ThanhVan] - Language Apps and Motivation",
    label: "Reading Test 18",
    count: 3350,
    thumb: "assets/pass18.jpg",
    passage:
      `Language learning apps have popularised bite-sized lessons and gamified practice. Their strengths include accessibility and immediate feedback; they suit learners who need flexibility. Critics note that gamification may prioritise streaks over depth and that speaking proficiency often lags behind receptive skills. Complementary classroom instruction or conversation partners can bridge this gap. Importantly, motivation remains a decisive factor: learners who set clear goals and combine app practice with real-world use tend to progress most rapidly.`,
    questions: [
      { id: "p18_q1", type: "dropdown", q: "A shortcoming of language apps is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "C" },
      { id: "p18_q2", type: "dropdown", q: "What helps learners improve speaking?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p18_q3", type: "mcq", q: "What is decisive for progress?", choices: ["Time only", "Motivation", "App design", "Cost"], answer: "Motivation" }
    ]
  },
  {
    id: 19,
    title: "[ThanhVan] - Noise Pollution and Urban Health",
    label: "Reading Test 19",
    count: 4020,
    thumb: "assets/pass19.jpg",
    passage:
      `Chronic exposure to urban noise — traffic, construction and transit hubs — is linked to stress, sleep disturbance and cardiovascular risk. Noise abatement strategies include traffic calming, sound barriers and building insulation. Urban design that reduces vehicular dependence can deliver quieter neighbourhoods, but policy implementation often contends with competing economic priorities. Community engagement helps identify hotspots and acceptable interventions. Monitoring sensors now provide data to target measures more effectively, yet addressing noise pollution demands an integrated approach combining planning, regulation and public participation.`,
    questions: [
      { id: "p19_q1", type: "dropdown", q: "Noise pollution can lead to:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "C" },
      { id: "p19_q2", type: "dropdown", q: "Which solution is cited?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "D" },
      { id: "p19_q3", type: "mcq", q: "What technology helps target measures?", choices: ["Sensors", "Drones", "Robots", "Satellites"], answer: "Sensors" }
    ]
  },
  {
    id: 20,
    title: "[ThanhVan] - The Role of Libraries Today",
    label: "Reading Test 20",
    count: 2078,
    thumb: "assets/pass20.jpg",
    passage:
      `Modern libraries are no longer mere repositories of books; they function as community hubs offering digital resources, meeting spaces and learning programmes. Libraries bridge digital divides by providing internet access and training for those without home connectivity. Their role in lifelong learning and civic engagement has strengthened calls for sustained funding. At the same time, libraries must innovate: pop-up services, mobile lending and partnerships with local organisations expand reach. The core value remains: equitable access to information and a supportive space for learning and exchange.`,
    questions: [
      { id: "p20_q1", type: "dropdown", q: "A current function of libraries is:", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "B" },
      { id: "p20_q2", type: "dropdown", q: "What challenge do libraries address?", choices: ["A", "B", "C", "D", "E", "F", "G"], answer: "F" },
      { id: "p20_q3", type: "mcq", q: "Which innovation is mentioned?", choices: ["E-book bans", "Mobile lending", "Higher fines", "Book destruction"], answer: "Mobile lending" }
    ]
  }
];

/* Expose to global so reading-test.html can use it */
window.__IELTS_PASSAGES = passages;

/* Render cards on index page (if exist) */
function renderIndexCards() {
  const el = document.getElementById('cardGrid');
  if (!el) return;
  el.innerHTML = '';
  passages.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => openReadingTest(p.id);
    const labels = ["label-p1", "label-p2", "label-p3"];
    const randomLabel = labels[Math.floor(Math.random() * labels.length)];

    card.innerHTML = `
      <div class="thumb">
        <img src="${p.thumb}" alt="${p.title}">
        <div class="tag">${p.label}</div>
        <div class="count">${p.count.toLocaleString()} lượt làm bài</div>
      </div>
      <div class="info">
        <div>
          <div class="${randomLabel}">${p.label}</div>
          <div class="title">${p.title}</div>
          <div class="meta">
            <div>• Gap Filling</div>
            <div>• Multiple Choice</div>
            <div>• True/False/Not Given</div>
          </div>
        </div>
        <div style="margin-top:12px;">
          <small style="color:#999">Click để làm bài &rarr;</small>
        </div>
      </div>
    `;
    el.appendChild(card);
  });
}

/* Open reading test page */
function openReadingTest(id) {
  window.location.href = `reading-test.html?id=${id}`;
}

/* Export functions */
window.renderIndexCards = renderIndexCards;
window.openReadingTest = openReadingTest;

/* If the page is index.html, render now */
document.addEventListener('DOMContentLoaded', () => {
  renderIndexCards();
});
