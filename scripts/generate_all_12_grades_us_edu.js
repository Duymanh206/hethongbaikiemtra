import fs from 'fs';
import path from 'path';

// Master data definitions for all 12 grades of US_EDU
const gradeDefinitions = [
  {
    grade: "Lớp 1 (Grade 1)",
    gradeCode: "G01",
    level: "primary",
    levelName: "Tiểu học (Chuẩn Mỹ G1)",
    driveFolderId: "1xNnCdBtVwHVV3Ndyd2435bE3_zLNRjV7",
    driveUrl: "https://drive.google.com/drive/folders/1xNnCdBtVwHVV3Ndyd2435bE3_zLNRjV7",
    textbooks: [
      "California Science – Leveled Readers CalSci LR G1",
      "Scott Foresman Reading Street ELL Readers (SF RS ELL Reader G1)",
      "Concept Literacy Leveled Readers - SF G1",
      "Beyond Level Readers - L G1",
      "Math Concept Readers G1"
    ],
    description: "Chương trình chuẩn Mỹ Lớp 1: Khám phá thế giới tự nhiên (Living & Non-living Things), thời tiết (Weather & Seasons), ngữ âm Phonics và số đếm toán học sinh động.",
    color: "emerald",
    units: [
      {
        num: 1,
        title: "Unit 1: Living and Non-living Things",
        viTitle: "Chuyên đề: Sinh vật sống & Vật không sống (California Science G1)",
        series: "California Science Leveled Readers",
        overview: "Phân biệt sinh vật sống (cần thức ăn, nước, không khí để lớn lên) với các vật thể vô tri.",
        grammar: "Living things need + [food / water / air] to survive and grow.",
        patterns: ["Plants and animals are living things.", "A rock is a non-living thing because it does not grow."],
        tips: "Phát âm chuẩn cụm \"living things\" với âm /ɪ/ ngắn và đuôi /ŋz/.",
        vocab: [
          ["Living thing", "/ˈlɪv.ɪŋ θɪŋ/", "noun", "Sinh vật sống", "Plants are living things.", "Cây cối là sinh vật sống.", "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80"],
          ["Non-living", "/nɒn ˈlɪv.ɪŋ/", "adj", "Vật vô tri, không sống", "Rocks are non-living.", "Đá là vật vô tri.", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80"],
          ["Survive", "/səˈvaɪv/", "verb", "Sinh tồn, sống sót", "Animals need water to survive.", "Động vật cần nước để sinh tồn.", "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80"],
          ["Grow", "/ɡrəʊ/", "verb", "Lớn lên, phát triển", "A seed grows into a plant.", "Hạt mầm lớn lên thành cây.", "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop&q=80"]
        ],
        listen: {
          script: "Science teacher: Look around our garden! Plants and little birds are living things because they need food and water to grow.",
          q: "What do living things need to grow?",
          opts: [["Food and water (Thức ăn và nước uống)", true], ["Batteries and gasoline", false]],
          exp: "Trong bài nghe: \"they need food and water to grow\"."
        },
        speaking: [
          ["Living things grow and change.", "/ˈlɪv.ɪŋ θɪŋz ɡrəʊ ænd tʃeɪndʒ/", "Living things grow and change"],
          ["Plants need sunlight and water.", "/plɑːnts niːd ˈsʌn.laɪt ænd ˈwɔː.tər/", "Plants need sunlight and water"]
        ],
        reading: {
          title: "What is Alive?",
          passage: "Living things breathe air. They take in water and eat food. They grow bigger over time. A puppy grows into a dog. A tiny acorn grows into a huge oak tree. Toys and desks do not breathe. They do not eat. They are non-living things.",
          q: "Why is a desk a non-living thing?",
          opts: [["Because it does not breathe, eat or grow", true], ["Because it is in a classroom", false]],
          exp: "Bàn học là vật vô tri vì nó không hô hấp, không ăn uống và không phát triển."
        },
        writing: {
          prompt: "Sắp xếp các từ thành câu đúng về sinh vật sống:",
          correct: "Plants need water to survive",
          words: ["water", "Plants", "survive", "to", "need"],
          exp: "Cấu trúc: Chủ ngữ (Plants) + động từ (need) + tân ngữ (water) + chỉ mục đích (to survive)."
        }
      },
      {
        num: 2,
        title: "Unit 2: Weather and Four Seasons",
        viTitle: "Chuyên đề: Thời tiết & 4 Mùa trong năm (Scott Foresman G1)",
        series: "Scott Foresman Reading Street",
        overview: "Tìm hiểu các kiểu thời tiết: sunny, rainy, windy, snowy và đặc trưng của 4 mùa: Spring, Summer, Autumn, Winter.",
        grammar: "It is + [sunny / rainy / windy / snowy] today.",
        patterns: ["In spring, flowers bloom and leaves grow.", "Summer is hot and sunny, perfect for swimming."],
        tips: "Phân biệt /s/ trong summer và /ʃ/ trong shine.",
        vocab: [
          ["Season", "/ˈsiː.zən/", "noun", "Mùa trong năm", "There are four seasons in a year.", "Có bốn mùa trong một năm.", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"],
          ["Spring", "/sprɪŋ/", "noun", "Mùa xuân", "Flowers bloom in spring.", "Hoa nở rộ vào mùa xuân.", "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop&q=80"],
          ["Autumn", "/ˈɔː.təm/", "noun", "Mùa thu (Fall)", "Leaves fall in autumn.", "Lá rụng vào mùa thu.", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"],
          ["Winter", "/ˈwɪn.tər/", "noun", "Mùa đông", "Snow falls in cold winter.", "Tuyết rơi vào mùa đông giá lạnh.", "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=400&auto=format&fit=crop&q=80"]
        ],
        listen: {
          script: "Weather reporter: Good morning! Today it is sunny and warm outside. Put on your hats and enjoy the park!",
          q: "How is the weather today?",
          opts: [["Sunny and warm", true], ["Snowy and freezing", false]],
          exp: "Người dẫn chương trình nói: \"Today it is sunny and warm outside\"."
        },
        speaking: [
          ["I love sunny summer days.", "/aɪ lʌv ˈsʌn.i ˈsʌm.ər deɪz/", "I love sunny summer days"]
        ],
        reading: {
          title: "The Four Seasons",
          passage: "Earth has four seasons: spring, summer, fall, and winter. Spring brings rain and blossoms. Summer has long, warm days. Fall brings cool breezes and colorful leaves. Winter brings chilly winds and white snowflakes.",
          q: "Which season brings warm days and sunshine?",
          opts: [["Summer", true], ["Winter", false]],
          exp: "Bài đọc nêu rõ: \"Summer has long, warm days\"."
        },
        writing: {
          prompt: "Sắp xếp các từ thành câu hoàn chỉnh:",
          correct: "It is very cold in winter",
          words: ["in", "cold", "winter", "is", "very", "It"],
          exp: "Cấu trúc: It is + very cold + in winter."
        }
      },
      {
        num: 3,
        title: "Unit 3: Plants and Seeds: How Plants Grow",
        viTitle: "Chuyên đề: Cây cối & Hạt mầm phát triển (California Science G1)",
        series: "California Science Leveled Readers",
        overview: "Các bộ phận của cây (roots, stem, leaves, flower) và chu trình nảy mầm từ hạt giống.",
        grammar: "A plant has + [roots / stem / leaves / flower].",
        patterns: ["Roots hold the plant in the soil.", "Leaves make food from sunlight."],
        tips: "Phát âm âm /uː/ trong roots và /iː/ trong leaves.",
        vocab: [
          ["Root", "/ruːt/", "noun", "Rễ cây", "Roots take in water from soil.", "Rễ hút nước từ đất.", "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format&fit=crop&q=80"],
          ["Stem", "/stem/", "noun", "Thân cây", "The stem supports the flower.", "Thân cây nâng đỡ bông hoa.", "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80"],
          ["Leaf", "/liːf/", "noun", "Lá cây (số nhiều: leaves)", "Green leaves absorb sunlight.", "Lá xanh hấp thụ ánh nắng mặt trời.", "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop&q=80"]
        ],
        listen: {
          script: "Botanist: The roots grow down into the soil to absorb moisture, while the green leaves catch rays of sunshine.",
          q: "What part of the plant absorbs water from soil?",
          opts: [["The roots", true], ["The flower petals", false]],
          exp: "\"The roots grow down into the soil to absorb moisture\"."
        },
        speaking: [
          ["Roots take in water.", "/ruːts teɪk ɪn ˈwɔː.tər/", "Roots take in water"]
        ],
        reading: {
          title: "Parts of a Plant",
          passage: "Most plants have roots, stems, and leaves. Roots grow underground. They hold the plant firmly in the dirt. Stems carry water up from the roots to the leaves. Leaves use sunshine and air to make food.",
          q: "What do stems carry up to the leaves?",
          opts: [["Water", true], ["Dirt and stones", false]],
          exp: "\"Stems carry water up from the roots to the leaves\"."
        },
        writing: {
          prompt: "Sắp xếp từ thành câu:",
          correct: "Leaves make food for plants",
          words: ["plants", "make", "Leaves", "for", "food"],
          exp: "Chủ ngữ Leaves + động từ make + tân ngữ food + bổ ngữ for plants."
        }
      },
      {
        num: 4,
        title: "Unit 4: Animal Families, Habitats & Senses",
        viTitle: "Chuyên đề: Gia đình loài vật & Môi trường sống (SF ELL Reader G1)",
        series: "Scott Foresman Reading Street ELL Readers",
        overview: "Học về các giác quan (5 senses) và cách động vật sử dụng thị giác, thính giác để sinh tồn trong môi trường tự nhiên.",
        grammar: "Animals use their + [eyes / ears / nose / paws] to + verb.",
        patterns: ["Bears have thick fur to keep warm in winter.", "Birds build nests high up in green trees."],
        tips: "Chú ý nối âm \"use their\" /juːz ðeər/.",
        vocab: [
          ["Habitat", "/ˈhæb.ɪ.tæt/", "noun", "Môi trường sống tự nhiên", "The forest is a bear's habitat.", "Rừng là môi trường sống của gấu.", "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&auto=format&fit=crop&q=80"],
          ["Sight", "/saɪt/", "noun", "Thị giác, khả năng nhìn", "Eagles have sharp sight.", "Đại bàng có thị lực rất sắc bén.", "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80"],
          ["Shelter", "/ˈʃel.tər/", "noun", "Nơi trú ẩn, tổ", "Animals need safe shelter.", "Động vật cần nơi trú ẩn an toàn.", "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80"]
        ],
        listen: {
          script: "Park ranger: Animals use their five senses to locate food and escape from predators in the deep wild forest.",
          q: "Why do animals use their five senses?",
          opts: [["To locate food and escape from predators", true], ["To watch television", false]],
          exp: "Trích đoạn: \"to locate food and escape from predators\"."
        },
        speaking: [
          ["Animals need shelter and food.", "/ˈæn.ɪ.məlz niːd ˈʃel.tər ænd fuːd/", "Animals need shelter and food"]
        ],
        reading: {
          title: "Animal Homes",
          passage: "Every animal needs a safe home called a shelter. Birds weave nests out of twigs. Rabbits dig cozy burrows beneath the ground. Fish swim inside coral reefs. Shelter keeps animals warm and safe from danger.",
          q: "What is an animal's home called?",
          opts: [["A shelter", true], ["A store", false]],
          exp: "\"Every animal needs a safe home called a shelter\"."
        },
        writing: {
          prompt: "Sắp xếp từ thành câu:",
          correct: "Birds build nests in trees",
          words: ["in", "build", "nests", "Birds", "trees"],
          exp: "Chủ ngữ Birds + động từ build + tân ngữ nests + giới từ in trees."
        }
      },
      {
        num: 5,
        title: "Unit 5: Matter: Solid, Liquid and Gas",
        viTitle: "Chuyên đề: Vật chất & 3 Trạng thái của nước (CalSci Physical Science G1)",
        series: "California Science Leveled Readers",
        overview: "Khám phá 3 trạng thái vật chất cơ bản: chất rắn (solid), chất lỏng (liquid) và chất khí (gas).",
        grammar: "A [solid / liquid / gas] has + [its own shape / no shape].",
        patterns: ["Ice is a solid and it has a fixed shape.", "Water is a liquid that flows into a glass."],
        tips: "Phát âm /kw/ trong liquid và /æ/ trong gas.",
        vocab: [
          ["Solid", "/ˈsɒl.ɪd/", "noun", "Chất rắn", "An apple is a solid.", "Một quả táo là chất rắn.", "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=80"],
          ["Liquid", "/ˈlɪk.wɪd/", "noun", "Chất lỏng", "Water and milk are liquids.", "Nước và sữa là chất lỏng.", "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80"],
          ["Gas", "/ɡæs/", "noun", "Chất khí", "Steam from a kettle is gas.", "Hơi nước bốc lên từ ấm là chất khí.", "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80"]
        ],
        listen: {
          script: "Science teacher: All things are made of matter. Rocks are solids. Water is a liquid. And air is a gas that we breathe.",
          q: "What is an example of a solid?",
          opts: [["A rock", true], ["Air", false]],
          exp: "\"Rocks are solids\"."
        },
        speaking: [
          ["Water is a liquid.", "/ˈwɔː.tər ɪz ə ˈlɪk.wɪd/", "Water is a liquid"]
        ],
        reading: {
          title: "Three Forms of Matter",
          passage: "Everything around you is matter. A solid has its own shape, like a wooden pencil. A liquid takes the shape of its container, like sweet orange juice in a cup. A gas spreads out to fill any space, like steam in the air.",
          q: "Which form of matter takes the shape of its container?",
          opts: [["A liquid", true], ["A rock", false]],
          exp: "\"A liquid takes the shape of its container\"."
        },
        writing: {
          prompt: "Sắp xếp từ thành câu:",
          correct: "Ice melts into liquid water",
          words: ["water", "into", "melts", "liquid", "Ice"],
          exp: "Chủ ngữ Ice + động từ melts + giới từ into + tân ngữ liquid water."
        }
      },
      {
        num: 6,
        title: "Unit 6: Math in Nature: Counting, Shapes & Patterns",
        viTitle: "Chuyên đề: Toán học trong Tự nhiên (Math Concept Reader G1)",
        series: "Math Concept Readers G1",
        overview: "Nhận biết hình dạng hình học (circle, square, triangle, rectangle) và quy luật lặp lại (patterns) trong tự nhiên.",
        grammar: "There is / There are + [number] + [shapes / objects].",
        patterns: ["The yellow sun looks like a giant circle.", "A honeycomb has many hexagon shapes."],
        tips: "Phát âm chuẩn âm /tʃ/ trong matches và /s/ trong shapes.",
        vocab: [
          ["Circle", "/ˈsɜː.kəl/", "noun", "Hình tròn", "A coin has a circle shape.", "Đồng xu có hình tròn.", "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80"],
          ["Triangle", "/ˈtraɪ.æŋ.ɡəl/", "noun", "Hình tam giác", "A slice of pizza is a triangle.", "Một miếng bánh pizza có hình tam giác.", "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=80"],
          ["Pattern", "/ˈpæt.ən/", "noun", "Quy luật lặp lại, hoa văn", "Zebras have striped patterns.", "Ngựa vằn có hoa văn sọc vằn.", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"]
        ],
        listen: {
          script: "Math guide: Look at the petals on the daisy! Let us count them: one, two, three, four, five! Five lovely white petals.",
          q: "How many petals did the guide count?",
          opts: [["Five petals", true], ["Twenty petals", false]],
          exp: "Bài nghe nói: \"one, two, three, four, five! Five lovely white petals\"."
        },
        speaking: [
          ["The sun is a circle.", "/ðə sʌn ɪz ə ˈsɜː.kəl/", "The sun is a circle"]
        ],
        reading: {
          title: "Shapes Everywhere",
          passage: "Look at your world! You can see shapes in every corner. A clock on the wall is a circle. A door is a tall rectangle. A rooftop can be a triangle. Finding shapes makes math exciting!",
          q: "What shape is usually a clock on the wall?",
          opts: [["A circle", true], ["A pyramid", false]],
          exp: "\"A clock on the wall is a circle\"."
        },
        writing: {
          prompt: "Sắp xếp từ thành câu:",
          correct: "There are four circles here",
          words: ["four", "are", "There", "here", "circles"],
          exp: "Cấu trúc There are + số lượng + danh từ số nhiều + vị trí."
        }
      }
    ]
  }
];

// Next, add Grades 2 to 12 templates
const remainingGrades = [
  {
    grade: "Lớp 2 (Grade 2)",
    gradeCode: "G02",
    level: "primary",
    levelName: "Tiểu học (Chuẩn Mỹ G2)",
    driveFolderId: "1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
    driveUrl: "https://drive.google.com/drive/folders/1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
    textbooks: ["California Science CalSci LR G2", "Scott Foresman Reading Street G2", "Math Concept Readers G2", "Leveled Readers Above Level G2"],
    description: "Chương trình chuẩn Mỹ Lớp 2: Vòng đời sinh vật (Life Cycles), Địa hình & Đất đá (Landforms), Lực đẩy & Lực kéo (Push & Pull), và Hình học không gian.",
    color: "emerald",
    unitsData: [
      { num: 1, title: "Unit 1: Plant and Animal Life Cycles", viTitle: "Vòng đời của Thực vật & Động vật", series: "California Science G2", concept: "Life Cycles", vocab: [["Life cycle", "/ˈlaɪf ˌsaɪ.kəl/", "noun", "Vòng đời sinh học"], ["Chrysalis", "/ˈkrɪs.ə.lɪs/", "noun", "Kén bướm"], ["Germinate", "/ˈdʒɜː.mɪ.neɪt/", "verb", "Nảy mầm"]], listenQ: "What emerges from a chrysalis?", listenAns: "A butterfly", readTitle: "From Seed to Sunflower", readPassage: "A tiny black seed drops into warm soil. With spring rain and sunshine, it germinates. Roots spread down and a green shoot rises up. Soon bright yellow petals open toward the sun.", readQ: "What helps the seed germinate?", readAns: "Rain and sunshine" },
      { num: 2, title: "Unit 2: Earth's Landforms, Rocks and Soil", viTitle: "Địa hình Trái Đất, Đá & Thổ nhưỡng", series: "California Science G2", concept: "Earth Landforms", vocab: [["Landform", "/ˈlænd.fɔːm/", "noun", "Dạng địa hình"], ["Canyon", "/ˈkæn.jən/", "noun", "Hẻm núi sâu"], ["Weathering", "/ˈweð.ər.ɪŋ/", "noun", "Sự phong hóa đá"]], listenQ: "What carved deep canyons over millions of years?", listenAns: "Flowing river water", readTitle: "Mountains and Valleys", readPassage: "Earth has high mountains and low valleys. Fast rivers carve steep canyons through solid rock. Wind and water constantly shape the surface of our planet.", readQ: "What is a low area between mountains?", readAns: "A valley" },
      { num: 3, title: "Unit 3: The Water Cycle and Cloud Types", viTitle: "Vòng tuần hoàn của Nước & Các loại Mây", series: "Scott Foresman G2", concept: "The Water Cycle", vocab: [["Evaporation", "/ɪˌvæp.əˈreɪ.ʃən/", "noun", "Sự bay hơi nước"], ["Condensation", "/ˌkɒn.denˈseɪ.ʃən/", "noun", "Sự ngưng tụ"], ["Precipitation", "/prɪˌsɪp.ɪˈteɪ.ʃən/", "noun", "Lượng mưa rơi xuống"]], listenQ: "What happens when water vapor cools high in the sky?", listenAns: "It condenses into clouds", readTitle: "Water Goes Round", readPassage: "Water from oceans warms in the sun and turns into invisible vapor. As it rises, it cools and condenses into fluffy clouds. When droplets get heavy, rain falls back to Earth.", readQ: "What creates rain?", readAns: "Heavy water droplets in clouds" },
      { num: 4, title: "Unit 4: Forces, Motion, Push and Pull", viTitle: "Lực học: Lực đẩy, Lực kéo & Chuyển động", series: "California Science G2", concept: "Forces and Motion", vocab: [["Force", "/fɔːs/", "noun", "Lực tác dụng"], ["Gravity", "/ˈɡræv.ə.ti/", "noun", "Trọng lực Trái Đất"], ["Friction", "/ˈfrɪk.ʃən/", "noun", "Lực ma sát"]], listenQ: "What force pulls dropped balls toward the ground?", listenAns: "Gravity", readTitle: "Things in Motion", readPassage: "A push moves an object away from you. A pull brings it closer. Friction is the force that slows rolling objects down when they rub against the grass.", readQ: "What does friction do to rolling objects?", readAns: "It slows them down" },
      { num: 5, title: "Unit 5: Sound and Light Energy", viTitle: "Năng lượng Âm thanh & Ánh sáng", series: "California Science G2", concept: "Sound & Light", vocab: [["Vibration", "/vaɪˈbreɪ.ʃən/", "noun", "Sự rung động"], ["Pitch", "/pɪtʃ/", "noun", "Cao độ âm thanh"], ["Reflection", "/rɪˈflek.ʃən/", "noun", "Sự phản chiếu ánh sáng"]], listenQ: "How is sound produced?", listenAns: "Through rapid vibrations", readTitle: "Listen to the Sound", readPassage: "Every sound begins with a vibration. When guitar strings vibrate back and forth, they send waves through the air to your ears. Tight strings make high pitches.", readQ: "What do vibrating strings make?", readAns: "Sound waves" },
      { num: 6, title: "Unit 6: Geometry & Fractions in Daily Life", viTitle: "Toán hình học & Phân số thực tế", series: "Math Concept Readers G2", concept: "Math Concepts", vocab: [["Fraction", "/ˈfræk.ʃən/", "noun", "Phân số toán học"], ["Equal parts", "/ˈiː.kwəl pɑːts/", "noun", "Các phần bằng nhau"], ["Half", "/hɑːf/", "noun", "Một nửa (1/2)"]], listenQ: "If you cut an apple into two equal pieces, what is one piece called?", listenAns: "One half", readTitle: "Sharing a Pizza", readPassage: "Four friends share a round pizza. They slice it into four equal pieces. Each person gets one quarter of the delicious pie. Fractions make sharing fair and easy.", readQ: "What fraction does each person get?", readAns: "One quarter (1/4)" }
    ]
  },
  {
    grade: "Lớp 3 (Grade 3)",
    gradeCode: "G03",
    level: "primary",
    levelName: "Tiểu học (Chuẩn Mỹ G3)",
    driveFolderId: "1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
    driveUrl: "https://drive.google.com/drive/folders/1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
    textbooks: ["California Science CalSci LR G3", "Scott Foresman Reading Street G3", "Concept Literacy Leveled Readers G3", "Math Concept Readers G3"],
    description: "Chương trình chuẩn Mỹ Lớp 3: Thích nghi sinh thái (Adaptations), Năng lượng tái tạo (Renewable Resources), Máy cơ đơn giản (Simple Machines) và Hệ Mặt Trời.",
    color: "emerald",
    unitsData: [
      { num: 1, title: "Unit 1: Plant and Animal Adaptations in Habitats", viTitle: "Sự thích nghi của Động Thực vật theo Môi trường", series: "California Science G3", concept: "Adaptations", vocab: [["Adaptation", "/ˌæd.æpˈteɪ.ʃən/", "noun", "Đặc tính thích nghi"], ["Camouflage", "/ˈkæm.ə.flɑːʒ/", "noun", "Khả năng ngụy trang"], ["Hibernate", "/ˈhaɪ.bə.neɪt/", "verb", "Ngủ đông"]], listenQ: "How does camouflage protect animals?", listenAns: "It helps them blend into surroundings", readTitle: "Desert Survivors", readPassage: "The cactus survives in hot deserts by storing water in thick, fleshy stems. Its sharp spines protect it from thirsty animals. Camels store fat in their humps for energy.", readQ: "Where does a cactus store water?", readAns: "In its thick stems" },
      { num: 2, title: "Unit 2: Earth's Natural Resources and Conservation", viTitle: "Tài nguyên Thiên nhiên & Bảo vệ Môi trường", series: "California Science G3", concept: "Earth Resources", vocab: [["Renewable", "/rɪˈnjuː.ə.bəl/", "adj", "Có thể tái tạo"], ["Fossil fuel", "/ˈfɒs.əl ˌfjuː.əl/", "noun", "Nhiên liệu hóa thạch"], ["Conserve", "/kənˈsɜːv/", "verb", "Bảo tồn, tiết kiệm"]], listenQ: "Which energy source is renewable?", listenAns: "Solar and wind energy", readTitle: "Precious Earth", readPassage: "Wind and sunlight are renewable resources that never run out. Coal and oil are fossil fuels that take millions of years to form. Conserving clean water protects our future.", readQ: "Why should we conserve energy?", readAns: "Because fossil fuels are limited" },
      { num: 3, title: "Unit 3: Simple Machines: Levers, Pulleys & Inclined Planes", viTitle: "Các Máy cơ Đơn giản: Đòn bẩy, Ròng rọc & Mặt phẳng nghiêng", series: "California Science G3", concept: "Simple Machines", vocab: [["Lever", "/ˈliː.vər/", "noun", "Đòn bẩy"], ["Pulley", "/ˈpʊl.i/", "noun", "Ròng rọc"], ["Inclined plane", "/ɪnˌklaɪnd ˈpleɪn/", "noun", "Mặt phẳng nghiêng (dốc)"]], listenQ: "What simple machine helps lift heavy flags up a pole?", listenAns: "A pulley", readTitle: "Work Made Easier", readPassage: "Simple machines make heavy work easier by changing the direction or strength of a force. Ramps let wheelchairs roll up easily. Pulleys lift heavy flags to the top of tall masts.", readQ: "How do ramps help people?", readAns: "They make climbing up easier" },
      { num: 4, title: "Unit 4: Matter Changes: Heating, Cooling & Mixtures", viTitle: "Biến đổi Vật chất: Nhiệt độ & Hỗn hợp", series: "California Science G3", concept: "Physical Changes", vocab: [["Physical change", "/ˈfɪz.ɪ.kəl tʃeɪndʒ/", "noun", "Biến đổi vật lý"], ["Dissolve", "/dɪˈzɒlv/", "verb", "Hòa tan"], ["Solution", "/səˈluː.ʃən/", "noun", "Dung dịch đồng nhất"]], listenQ: "What happens when sugar is stirred into warm tea?", listenAns: "It dissolves into a sweet solution", readTitle: "Mixing and Melting", readPassage: "When ice melts into water, its shape changes, but it is still water. When salt dissolves completely into warm soup, it forms a clear solution. These are physical changes.", readQ: "Is melting ice a physical change?", readAns: "Yes, because it is still water" },
      { num: 5, title: "Unit 5: The Solar System: Sun, Earth and Moon Phases", viTitle: "Hệ Mặt Trời & Các Pha của Mặt Trăng", series: "Scott Foresman G3", concept: "Astronomy", vocab: [["Orbit", "/ˈɔː.bɪt/", "verb/noun", "Quỹ đạo quay"], ["Solar system", "/ˈsəʊ.lər ˌsɪs.təm/", "noun", "Hệ Mặt Trời"], ["Crescent", "/ˈkres.ənt/", "noun", "Hình trăng lưỡi liềm"]], listenQ: "How long does Earth take to orbit the Sun once?", listenAns: "One year (365 days)", readTitle: "Our Cosmic Neighborhood", readPassage: "Eight planets orbit around the giant burning star called our Sun. The Moon travels around Earth every month, reflecting sunlight in changing shapes called lunar phases.", readQ: "Why does the Moon appear to change shape?", readAns: "Because we see different lit angles" },
      { num: 6, title: "Unit 6: Math Concept: Measurements, Perimeter & Area", viTitle: "Toán đo lường: Chu vi, Diện tích & Thể tích", series: "Math Concept Readers G3", concept: "Measurement", vocab: [["Perimeter", "/pəˈrɪm.ɪ.tər/", "noun", "Chu vi hình học"], ["Area", "/ˈeə.ri.ə/", "noun", "Diện tích bề mặt"], ["Square unit", "/skweər ˈjuː.nɪt/", "noun", "Đơn vị vuông"]], listenQ: "How do you find the perimeter of a rectangle?", listenAns: "Add up the lengths of all four sides", readTitle: "Fencing the Garden", readPassage: "Farmer Dan wants to build a wooden fence around his vegetable patch. He measures each side: 10 meters and 5 meters. The perimeter is 30 meters. He needs 30 meters of fence.", readQ: "What is the perimeter in the passage?", readAns: "30 meters" }
    ]
  },
  {
    grade: "Lớp 4 (Grade 4)",
    gradeCode: "G04",
    level: "primary",
    levelName: "Tiểu học (Chuẩn Mỹ G4)",
    driveFolderId: "1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
    driveUrl: "https://drive.google.com/drive/folders/1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
    textbooks: ["California Science CalSci LR G4", "Scott Foresman Reading Street G4", "Math Concept Readers G4", "Sound tracks G04"],
    description: "Chương trình chuẩn Mỹ Lớp 4: Lưới thức ăn sinh thái (Food Webs), Tầng địa chất & Hóa thạch (Fossils), Mạch điện & Sóng ánh sáng (Electrical Circuits & Waves).",
    color: "emerald",
    unitsData: [
      { num: 1, title: "Unit 1: Ecosystems & Food Webs: Energy Flow", viTitle: "Hệ Sinh Thái & Chuỗi Thức Ăn", series: "California Science G4", concept: "Ecosystems", vocab: [["Producer", "/prəˈdʒuː.sər/", "noun", "Sinh vật sản xuất (cây cối)"], ["Consumer", "/kənˈsjuː.mər/", "noun", "Sinh vật tiêu thụ"], ["Decomposer", "/ˌdiː.kəmˈpəʊ.zər/", "noun", "Sinh vật phân giải"]], listenQ: "Where does all energy in a food chain originate?", listenAns: "The Sun", readTitle: "The Web of Life", readPassage: "Green plants are producers because they make food using sunlight. Herbivores eat plants, while carnivores hunt herbivores. Decomposers recycle nutrients back into the soil.", readQ: "What role do green plants play?", readAns: "They produce food via sunlight" },
      { num: 2, title: "Unit 2: Rock Layers, Fossils & Earth's History", viTitle: "Các Lớp Đá, Hóa Thạch & Lịch Sử Trái Đất", series: "California Science G4", concept: "Geology", vocab: [["Sedimentary rock", "/ˌsed.ɪˈmen.tər.i rɒk/", "noun", "Đá trầm tích"], ["Fossil", "/ˈfɒs.əl/", "noun", "Hóa thạch cổ sinh vật"], ["Paleontologist", "/ˌpeɪ.li.ɒnˈtɒl.ə.dʒɪst/", "noun", "Nhà cổ sinh vật học"]], listenQ: "Where are most dinosaur fossils discovered?", listenAns: "In sedimentary rock layers", readTitle: "Clues in the Stone", readPassage: "Over millions of years, layers of mud and sand hardened into sedimentary rock. When ancient animals died, their bones were buried. Today, fossils reveal dinosaurs that roamed long ago.", readQ: "What do fossils teach scientists?", readAns: "How prehistoric creatures lived" },
      { num: 3, title: "Unit 3: Electricity, Magnetism & Closed Circuits", viTitle: "Điện học, Từ tính & Mạch điện kín", series: "California Science G4", concept: "Electricity", vocab: [["Circuit", "/ˈsɜː.kɪt/", "noun", "Mạch điện"], ["Conductor", "/kənˈdʌk.tər/", "noun", "Vật dẫn điện (đồng, sắt)"], ["Insulator", "/ˈɪn.sjə.leɪ.tər/", "noun", "Vật cách điện (cao su, nhựa)"]], listenQ: "Why does copper wire make a good conductor?", listenAns: "It allows electric current to flow freely", readTitle: "Lighting the Bulb", readPassage: "Electric current flows only when a circuit is completely closed. Copper wire conducts electrons easily. Plastic coating around wires acts as an insulator, keeping users safe.", readQ: "What happens if a circuit is open?", readAns: "The light bulb turns off" },
      { num: 4, title: "Unit 4: Waves, Light Reflection and Refraction", viTitle: "Sóng, Sự Phản Xạ & Khúc Xạ Ánh Sáng", series: "California Science G4", concept: "Optics and Waves", vocab: [["Reflect", "/rɪˈflekt/", "verb", "Phản xạ ánh sáng"], ["Refract", "/rɪˈfrækt/", "verb", "Khúc xạ (bẻ cong tia sáng)"], ["Spectrum", "/ˈspek.trəm/", "noun", "Quang phổ 7 màu"]], listenQ: "What causes a rainbow in the sky after rain?", listenAns: "Sunlight refracts through raindrops", readTitle: "Bending Light", readPassage: "Light travels in straight lines until it hits a transparent medium like water. Light slows down and bends, causing a straw in a glass of water to look broken. This is refraction.", readQ: "Why does a straw look bent in water?", readAns: "Light refracts when entering water" },
      { num: 5, title: "Unit 5: Conservation of Land, Air & Oceans", viTitle: "Bảo Tồn Tài Nguyên Đất, Không Khí & Đại Dương", series: "Scott Foresman G4", concept: "Environmental Conservation", vocab: [["Pollution", "/pəˈluː.ʃən/", "noun", "Sự ô nhiễm môi trường"], ["Ecosystem", "/ˈiː.kəʊˌsɪs.təm/", "noun", "Hệ sinh thái"], ["Biodegradable", "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/", "adj", "Có thể phân hủy sinh học"]], listenQ: "What is an effective way to reduce plastic waste?", listenAns: "Using reusable cloth bags", readTitle: "Protecting Our Waters", readPassage: "Millions of sea turtles and marine animals suffer when plastic enters oceans. By recycling bottles and avoiding single-use bags, communities protect coastal biodiversity for future generations.", readQ: "How can citizens protect marine life?", readAns: "By recycling and reducing plastics" },
      { num: 6, title: "Unit 6: Math Concept: Decimals, Fractions & Estimation", viTitle: "Toán Số Thập Phân & Ước Lượng Thực Tế", series: "Math Concept Readers G4", concept: "Decimals and Fractions", vocab: [["Decimal", "/ˈdes.ɪ.məl/", "noun", "Số thập phân"], ["Tenth", "/tenθ/", "noun", "Một phần mười (0.1)"], ["Estimate", "/ˈes.tɪ.meɪt/", "verb", "Ước lượng, ước tính"]], listenQ: "How is three-tenths written as a decimal?", listenAns: "0.3", readTitle: "Measuring Ingredients", readPassage: "In cooking class, students measured 0.5 liters of milk and 0.25 kilograms of sugar. Decimals allow bakers to measure precise quantities for perfect chocolate cakes.", readQ: "Why are decimals important in baking?", readAns: "They allow exact precision" }
    ]
  },
  {
    grade: "Lớp 5 (Grade 5)",
    gradeCode: "G05",
    level: "primary",
    levelName: "Tiểu học (Chuẩn Mỹ G5)",
    driveFolderId: "1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
    driveUrl: "https://drive.google.com/drive/folders/1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
    textbooks: ["California Science CalSci LR G5", "Scott Foresman Reading Street G5", "Math Concept Readers G5", "Concept Literacy G5"],
    description: "Chương trình chuẩn Mỹ Lớp 5: Sinh học người & Tế bào (Cell Biology & Systems), Hóa học nguyên tử (Atoms & Compounds), Thủy văn biển sâu (Oceanography) và Thiên văn học.",
    color: "emerald",
    unitsData: [
      { num: 1, title: "Unit 1: The Human Body Systems & Cell Biology", viTitle: "Các Hệ Cơ Quan Con Người & Sinh Học Tế Bào", series: "California Science G5", concept: "Human Anatomy", vocab: [["Cell", "/sel/", "noun", "Tế bào sinh học"], ["Circulatory system", "/ˌsɜː.kjəˈleɪ.tər.i ˈsɪs.təm/", "noun", "Hệ tuần hoàn máu"], ["Respiratory", "/rɪˈspɪr.ə.tər.i/", "adj", "Thuộc hệ hô hấp"]], listenQ: "Which organ pumps blood throughout the circulatory system?", listenAns: "The heart", readTitle: "The Engine Inside You", readPassage: "Your heart beats about 100,000 times a day, delivering oxygen-rich red blood cells to every organ. Lungs intake oxygen and expel carbon dioxide, keeping cells energetic and healthy.", readQ: "What gas do lungs expel?", readAns: "Carbon dioxide" },
      { num: 2, title: "Unit 2: Plant Biology: Photosynthesis & Transpiration", viTitle: "Quang Hợp & Sự Thoát Hơi Nước ở Cây Cối", series: "California Science G5", concept: "Plant Physiology", vocab: [["Photosynthesis", "/ˌfəʊ.təʊˈsɪn.θə.sɪs/", "noun", "Quá trình quang hợp"], ["Chlorophyll", "/ˈklɒr.ə.fɪl/", "noun", "Chất diệp lục xanh"], ["Glucose", "/ˈɡluː.kəʊs/", "noun", "Đường glu-cô-zơ"]], listenQ: "What green pigment absorbs sunlight in leaves?", listenAns: "Chlorophyll", readTitle: "Solar Food Factories", readPassage: "Leaves use chlorophyll to capture sunlight, combining carbon dioxide and water into sweet glucose and clean oxygen. This amazing chemical process powers almost all life on planet Earth.", readQ: "What clean gas is produced by photosynthesis?", readAns: "Oxygen" },
      { num: 3, title: "Unit 3: Oceans, Water Systems & Deep Sea Trenches", viTitle: "Hệ Thống Thủy Văn & Rãnh Biển Sâu", series: "California Science G5", concept: "Oceanography", vocab: [["Ocean trench", "/ˈəʊ.ʃən trentʃ/", "noun", "Rãnh vực đại dương sâu"], ["Current", "/ˈkʌr.ənt/", "noun", "Hải lưu, dòng nước biển"], ["Salinity", "/səˈlɪn.ə.ti/", "noun", "Độ mặn của nước biển"]], listenQ: "What is the deepest known trench on Earth?", listenAns: "The Mariana Trench", readTitle: "Secrets of the Abyss", readPassage: "Oceans cover over 70% of Earth. Warm and cold currents circulate heat across continents. In the pitch-black Mariana Trench, bizarre bioluminescent creatures thrive under crushing water pressure.", readQ: "How do deep-sea creatures survive in total darkness?", readAns: "Through bioluminescence" },
      { num: 4, title: "Unit 4: Chemistry: Atoms, Elements & Chemical Reactions", viTitle: "Hóa Học: Nguyên Tử, Nguyên Tố & Phản Ứng Hóa Học", series: "California Science G5", concept: "Introductory Chemistry", vocab: [["Atom", "/ˈæt.əm/", "noun", "Nguyên tử"], ["Compound", "/ˈkɒm.paʊnd/", "noun", "Hợp chất hóa học"], ["Chemical reaction", "/ˌkem.ɪ.kəl riˈæk.ʃən/", "noun", "Phản ứng hóa học"]], listenQ: "What molecule is formed when two hydrogen atoms bond with one oxygen?", listenAns: "Water (H2O)", readTitle: "The Building Blocks", readPassage: "Everything is made of atoms. An element contains only one kind of atom. When elements bond, they form compounds with completely new properties, like sodium and chlorine forming table salt.", readQ: "What is table salt made of?", readAns: "Sodium and chlorine" },
      { num: 5, title: "Unit 5: Astronomy: Stars, Constellations & Galaxies", viTitle: "Thiên Văn Học: Các Vì Sao, Chòm Sao & Dải Ngân Hà", series: "Scott Foresman G5", concept: "Astronomy", vocab: [["Constellation", "/ˌkɒn.stəˈleɪ.ʃən/", "noun", "Chòm sao"], ["Light-year", "/ˈlaɪtˌjɪər/", "noun", "Năm ánh sáng"], ["Galaxy", "/ˈɡæl.ək.si/", "noun", "Thiên hà (Milky Way)"]], listenQ: "What is the name of our home galaxy?", listenAns: "The Milky Way", readTitle: "Looking into the Past", readPassage: "Because light takes millions of years to travel across cosmic distances, looking at distant stars through telescopes is like peering into the deep past. Our Milky Way contains over 100 billion stars.", readQ: "How many stars are estimated in the Milky Way?", readAns: "Over 100 billion stars" },
      { num: 6, title: "Unit 6: Math Concept: Data Analysis, Graphs & Percentages", viTitle: "Toán Phân Tích Dữ Liệu, Biểu Đồ & Phần Trăm", series: "Math Concept Readers G5", concept: "Data Analysis", vocab: [["Percentage", "/pəˈsen.tɪdʒ/", "noun", "Tỷ lệ phần trăm (%)"], ["Bar graph", "/ˈbɑː ˌɡrɑːf/", "noun", "Biểu đồ cột"], ["Mean", "/miːn/", "noun", "Giá trị trung bình cộng"]], listenQ: "What does fifty percent (50%) represent as a fraction?", listenAns: "One half (1/2)", readTitle: "Analyzing Survey Results", readPassage: "Students conducted a survey on favorite school lunches. 50% chose pizza, 25% voted for tacos, and 25% preferred fresh pasta. Bar graphs displayed the survey results clearly for the principal.", readQ: "Which lunch choice won the majority vote?", readAns: "Pizza (50%)" }
    ]
  }
];

// Combine and generate full array
console.log('Building full grades database...');

const allGrades = [...gradeDefinitions];

// Add Grade 2 to 5 programmatically
remainingGrades.forEach(g => {
  const units = g.unitsData.map(u => ({
    id: `us_${g.gradeCode.toLowerCase()}_u${u.num}`,
    unitNumber: u.num,
    title: u.title,
    vietnameseTitle: `Chuyên đề: ${u.viTitle} (${u.series})`,
    curriculumSeries: u.series,
    driveLink: g.driveUrl,
    overview: `Trọng tâm kiến thức chuẩn Mỹ Grade ${g.gradeCode.slice(1)}: ${u.concept}. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.`,
    grammarFocus: `Academic Grammar Focus: Scientific inquiry and compound sentence structures for ${u.concept}.`,
    sentencePatterns: [
      `Scientists observe that ${u.concept.toLowerCase()} plays a crucial role in nature.`,
      `Understanding ${u.vocab[0][0].toLowerCase()} helps us explain how the world functions.`
    ],
    tips: `Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: ${u.vocab[0][0]} (${u.vocab[0][1]}).`,
    vocabulary: u.vocab.map(v => ({
      word: v[0],
      ipa: v[1],
      type: v[2],
      meaning: v[3],
      example: `${v[0]} is an essential concept in science.`,
      exampleVi: `${v[3]} là khái niệm quan trọng trong khoa học.`,
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
    })),
    listeningPractice: {
      script: `Academic lecturer: In today's module on ${u.concept}, we will explore key phenomena. Pay attention: ${u.listenQ} The answer is evidently ${u.listenAns}.`,
      question: u.listenQ,
      options: [
        { id: `opt_${g.gradeCode.toLowerCase()}_u${u.num}_1`, label: "A", text: u.listenAns, isCorrect: true },
        { id: `opt_${g.gradeCode.toLowerCase()}_u${u.num}_2`, label: "B", text: "Incorrect alternate hypothesis", isCorrect: false }
      ],
      explanation: `Trong bài nghe đã nêu rõ: \"The answer is evidently ${u.listenAns}\".`
    },
    speakingPractice: [
      { phrase: `${u.vocab[0][0]} is important.`, ipa: u.vocab[0][1], prompt: `Luyện phát âm thuật ngữ ${u.vocab[0][0]}`, targetText: `${u.vocab[0][0]} is important`, difficulty: "Medium" }
    ],
    readingPractice: {
      title: u.readTitle,
      passage: u.readPassage,
      question: u.readQ,
      options: [
        { id: `opt_r_${g.gradeCode.toLowerCase()}_u${u.num}_1`, label: "A", text: u.readAns, isCorrect: true },
        { id: `opt_r_${g.gradeCode.toLowerCase()}_u${u.num}_2`, label: "B", text: "None of the above options", isCorrect: false }
      ],
      explanation: `Đoạn văn nêu rõ: \"${u.readAns}\".`
    },
    writingPractice: {
      type: "sentence_rearrangement",
      prompt: "Sắp xếp các từ thành câu hoàn chỉnh:",
      correctSentence: `${u.vocab[0][0]} is essential for life`,
      scrambledWords: ["for", "essential", "is", u.vocab[0][0], "life"],
      explanation: "Chủ ngữ + to be + tính từ + bổ ngữ."
    }
  }));

  allGrades.push({
    grade: g.grade,
    gradeCode: g.gradeCode,
    level: g.level,
    levelName: g.levelName,
    driveFolderId: g.driveFolderId,
    driveUrl: g.driveUrl,
    textbooks: g.textbooks,
    description: g.description,
    color: g.color,
    units
  });
});

// Now add Middle School (G06 to G09) and High School (G10 to G12)
const upperGrades = [
  {
    grade: "Lớp 6 (Grade 6)",
    gradeCode: "G06",
    level: "secondary",
    levelName: "THCS (Chuẩn Mỹ G6)",
    driveFolderId: "1KqIvaNSNovAsIaXdKwu9gN_Q17mqEWt9",
    driveUrl: "https://drive.google.com/drive/folders/1KqIvaNSNovAsIaXdKwu9gN_Q17mqEWt9",
    textbooks: ["California Earth Science G6", "Sound Studio G06.01 - G06.13", "Math Concept Readers G6", "Leveled Readers Above Level G6"],
    description: "Chương trình chuẩn Mỹ Lớp 6: Kiến tạo mảng (Plate Tectonics), Động đất & Núi lửa (Earthquakes & Volcanoes), Khí quyển & Dòng nhiệt đối lưu.",
    color: "indigo",
    unitsData: [
      { num: 1, title: "Unit 1: Plate Tectonics & Continental Drift", viTitle: "Thuyết Kiến tạo Mảng & Sự Trôi dạt Lục địa", series: "California Earth Science G6", concept: "Plate Tectonics", term: "Plate tectonics", ipa: "/pleɪt tekˈtɒn.ɪks/", mean: "Thuyết kiến tạo mảng" },
      { num: 2, title: "Unit 2: Earthquakes, Fault Lines & Seismic Waves", viTitle: "Động Đất, Các Đứt Gãy Địa Chất & Sóng Địa Chấn", series: "California Earth Science G6", concept: "Earthquakes", term: "Seismic wave", ipa: "/ˈsaɪz.mɪk weɪv/", mean: "Sóng địa chấn" },
      { num: 3, title: "Unit 3: Weathering, Erosion & Deposition", viTitle: "Quá Trình Phong Hóa, Xói Mòn & Bồi Tụ Thổ Nhưỡng", series: "California Earth Science G6", concept: "Weathering and Erosion", term: "Erosion", ipa: "/ɪˈrəʊ.ʒən/", mean: "Sự xói mòn địa chất" },
      { num: 4, title: "Unit 4: Earth's Atmosphere & Weather Systems", viTitle: "Khí Quyển Trái Đất & Các Hệ Thống Áp Khí Thời Tiết", series: "California Earth Science G6", concept: "Atmospheric Layers", term: "Atmosphere", ipa: "/ˈæt.məs.fɪər/", mean: "Bầu khí quyển Trái Đất" },
      { num: 5, title: "Unit 5: Thermal Energy Transfer: Conduction, Convection & Radiation", viTitle: "Sự Truyền Nhiệt Năng: Dẫn Nhiệt, Đối Lưu & Bức Xạ", series: "California Earth Science G6", concept: "Heat Transfer", term: "Convection", ipa: "/kənˈvek.ʃən/", mean: "Hiện tượng đối lưu nhiệt" },
      { num: 6, title: "Unit 6: Earth in the Solar System & Gravitational Pull", viTitle: "Trái Đất Trong Hệ Mặt Trời & Lực Hấp Dẫn (Audio Studio)", series: "Sound Studio G06", concept: "Planetary Motion", term: "Gravitation", ipa: "/ˌɡræv.ɪˈteɪ.ʃən/", mean: "Lực vạn vật hấp dẫn" }
    ]
  },
  {
    grade: "Lớp 7 (Grade 7)",
    gradeCode: "G07",
    level: "secondary",
    levelName: "THCS (Chuẩn Mỹ G7)",
    driveFolderId: "1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
    driveUrl: "https://drive.google.com/drive/folders/1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
    textbooks: ["California Life Science G7", "Writer's Choice: Grammar and Composition G7", "Sound Studio G07"],
    description: "Chương trình chuẩn Mỹ Lớp 7: Cấu trúc Tế bào & Quang hợp, Di truyền học Men-đen & DNA, Tiến hóa & Viết luận miêu tả (Writer's Choice).",
    color: "indigo",
    unitsData: [
      { num: 1, title: "Unit 1: Cell Structure, Organelles & Microscopy", viTitle: "Cấu Trúc Tế Bào, Bào Quan & Kính Hiển Vi", series: "California Life Science G7", concept: "Cell Organelles", term: "Mitochondria", ipa: "/ˌmaɪ.təʊˈkɒn.dri.ə/", mean: "Ti thể (nhà máy năng lượng)" },
      { num: 2, title: "Unit 2: Genetics, DNA & Mendelian Heredity", viTitle: "Di Truyền Học Men-đen, Cấu Trúc DNA & Tính Trạng", series: "California Life Science G7", concept: "Genetics and DNA", term: "Chromosome", ipa: "/ˈkrəʊ.mə.səʊm/", mean: "Nhiễm sắc thể" },
      { num: 3, title: "Unit 3: Evolution, Natural Selection & Fossil Records", viTitle: "Thuyết Tiến Hóa, Chọn Lọc Tự Nhiên & Hóa Thạch", series: "California Life Science G7", concept: "Natural Selection", term: "Natural selection", ipa: "/ˈnætʃ.ər.əl sɪˈlek.ʃən/", mean: "Sự chọn lọc tự nhiên" },
      { num: 4, title: "Unit 4: Human Organ Systems & Homeostasis", viTitle: "Các Hệ Cơ Quan Cơ Thể & Cân Bằng Nội Môi", series: "California Life Science G7", concept: "Homeostasis", term: "Homeostasis", ipa: "/ˌhəʊ.mi.əʊˈsteɪ.sɪs/", mean: "Trạng thái cân bằng nội môi" },
      { num: 5, title: "Unit 5: Writer's Choice: Narrative & Descriptive Composition", viTitle: "Writer's Choice: Kỹ Năng Viết Văn Tự Sự & Miêu Tả", series: "Writer's Choice G7", concept: "Essay Composition", term: "Sensory details", ipa: "/ˈsen.sər.i dɪˈteɪlz/", mean: "Chi tiết cảm giác sinh động" },
      { num: 6, title: "Unit 6: Grammar Mechanics: Phrases, Clauses & Complex Sentences", viTitle: "Ngữ Pháp Chuyên Sâu: Mệnh Đề, Câu Phức & Dấu Câu", series: "Writer's Choice G7", concept: "Complex Sentences", term: "Dependent clause", ipa: "/dɪˈpen.dənt klɔːz/", mean: "Mệnh đề phụ thuộc" }
    ]
  },
  {
    grade: "Lớp 8 (Grade 8)",
    gradeCode: "G08",
    level: "secondary",
    levelName: "THCS (Chuẩn Mỹ G8)",
    driveFolderId: "1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
    driveUrl: "https://drive.google.com/drive/folders/1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
    textbooks: ["California Physical Science G8", "Writer's Choice: Grammar and Composition G8", "Sound tracks G08"],
    description: "Chương trình chuẩn Mỹ Lớp 8: Cấu trúc nguyên tử & Bảng tuần hoàn, Định luật Niutơn, Sóng điện từ và Viết luận thuyết phục (Persuasive Writing).",
    color: "indigo",
    unitsData: [
      { num: 1, title: "Unit 1: Atomic Structure & The Periodic Table", viTitle: "Cấu Trúc Nguyên Tử & Bảng Tuần Hoàn Các Nguyên Tố", series: "California Physical Science G8", concept: "Periodic Trends", term: "Atomic number", ipa: "/əˈtɒm.ɪk ˌnʌm.bər/", mean: "Số hiệu nguyên tử" },
      { num: 2, title: "Unit 2: Chemical Bonds, Compounds & Balancing Equations", viTitle: "Liên Kết Hóa Học & Cân Bằng Phương Trình Phản Ứng", series: "California Physical Science G8", concept: "Chemical Bonding", term: "Covalent bond", ipa: "/kəʊˈveɪ.lənt bɒnd/", mean: "Liên kết cộng hóa trị" },
      { num: 3, title: "Unit 3: Newton's Three Laws of Motion & Momentum", viTitle: "Ba Định Luật Niutơn về Chuyển Động & Động Lượng", series: "California Physical Science G8", concept: "Classical Mechanics", term: "Inertia", ipa: "/ɪˈnɜː.ʃə/", mean: "Quán tính vật lý" },
      { num: 4, title: "Unit 4: Fluid Mechanics: Density, Buoyancy & Pressure", viTitle: "Cơ Học Chất Lưu: Khối Lượng Riêng & Lực Đẩy Ác-si-mét", series: "California Physical Science G8", concept: "Fluid Dynamics", term: "Buoyant force", ipa: "/ˈbɔɪ.ənt fɔːs/", mean: "Lực đẩy Ác-si-mét" },
      { num: 5, title: "Unit 5: The Electromagnetic Spectrum & Wave Behavior", viTitle: "Quang Phổ Sóng Điện Từ & Bản Chất Sóng Âm", series: "California Physical Science G8", concept: "Electromagnetism", term: "Wavelength", ipa: "/ˈweɪv.leŋθ/", mean: "Bước sóng điện từ" },
      { num: 6, title: "Unit 6: Writer's Choice: Persuasive Writing & Rhetorical Logic", viTitle: "Writer's Choice: Viết Luận Thuyết Phục & Logic Biện Luận", series: "Writer's Choice G8", concept: "Persuasive Writing", term: "Counterargument", ipa: "/ˈkaʊn.tərˌɑːɡ.jə.mənt/", mean: "Luận điểm phản bác" }
    ]
  },
  {
    grade: "Lớp 9 (Grade 9)",
    gradeCode: "G09",
    level: "secondary",
    levelName: "THCS (Chuẩn Mỹ G9)",
    driveFolderId: "13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
    driveUrl: "https://drive.google.com/drive/folders/13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
    textbooks: ["McDougal Littell Literature Grade 9", "Writer's Choice: Grammar and Composition G9", "Vocabulary Workshop G9"],
    description: "Chương trình chuẩn Mỹ Lớp 9: Yếu tố Văn học (Fiction & Epic), Kịch bản Romeo & Juliet (Shakespeare), Ngữ pháp chuyên sâu và Luyện thi SSAT/PSAT.",
    color: "indigo",
    unitsData: [
      { num: 1, title: "Unit 1: Elements of Fiction: Plot, Theme & Character Arc", viTitle: "Các Yếu Tố Văn Xuôi: Cốt Truyện, Chủ Đề & Xung Đột", series: "McDougal Littell Literature G9", concept: "Literary Analysis", term: "Protagonist", ipa: "/prəˈtæɡ.ən.ɪst/", mean: "Nhân vật chính diện" },
      { num: 2, title: "Unit 2: The Epic Tradition: Homer's Odyssey & Hero Archetypes", viTitle: "Sử Thi Cổ Đại: Tác Phẩm Odyssey & Khuôn Mẫu Người Hùng", series: "McDougal Littell Literature G9", concept: "The Hero's Journey", term: "Epic simile", ipa: "/ˈep.ɪk ˈsɪm.ɪ.li/", mean: "Biện pháp so sánh sử thi" },
      { num: 3, title: "Unit 3: Dramatic Literature: Shakespeare's Romeo & Juliet", viTitle: "Kịch Bản Văn Học: Romeo & Juliet của Shakespeare", series: "McDougal Littell Literature G9", concept: "Dramatic Irony", term: "Soliloquy", ipa: "/səˈlɪl.ə.kwi/", mean: "Đoạn độc thoại nội tâm" },
      { num: 4, title: "Unit 4: Poetry and Poetic Devices: Metaphor, Tone & Meter", viTitle: "Thơ Ca & Biện Pháp Tu Từ: Ẩn Dụ, Âm Điệu & Nhịp Thơ", series: "McDougal Littell Literature G9", concept: "Poetics", term: "Alliteration", ipa: "/əˌlɪt.əˈreɪ.ʃən/", mean: "Biện pháp điệp phụ âm đầu" },
      { num: 5, title: "Unit 5: Nonfiction Analysis: Rhetorical Fallacies & Bias", viTitle: "Phân Tích Văn Phi Hư Cấu: Ngụy Biện Logic & Thiên Vị", series: "McDougal Littell Literature G9", concept: "Rhetorical Criticism", term: "Fallacy", ipa: "/ˈfæl.ə.si/", mean: "Lỗi ngụy biện logic" },
      { num: 6, title: "Unit 6: Writer's Choice: Literary Synthesis & MLA Research", viTitle: "Writer's Choice: Viết Báo Cáo Nghiên Cứu & Trích Dẫn MLA", series: "Writer's Choice G9", concept: "MLA Research", term: "In-text citation", ipa: "/ˈɪnˌtekst saɪˈteɪ.ʃən/", mean: "Trích dẫn chuẩn trong văn bản" }
    ]
  },
  {
    grade: "Lớp 10 (Grade 10)",
    gradeCode: "G10",
    level: "highschool",
    levelName: "THPT (Chuẩn Mỹ G10)",
    driveFolderId: "1qlmR8rMG2FD5YY5G1Lp9SUigPBitpz86",
    driveUrl: "https://drive.google.com/drive/folders/1qlmR8rMG2FD5YY5G1Lp9SUigPBitpz86",
    textbooks: [
      "McDougal Littell Literature Grade 10 (Masterpieces of World Literature)",
      "Writer's Choice: Grammar and Composition Grade 10",
      "Vocabulary Practice and Tests with Answer Key Grade 10",
      "Grammar Usage and Mechanics Language Skills Practice G10"
    ],
    description: "Chương trình chuẩn Mỹ Lớp 10: Tinh hoa Văn học Thế giới (World Literature), Nghệ thuật Hùng biện (Ethos, Pathos, Logos), Bộ đề Vocabulary Tests kèm Answer Key cho kỳ thi SAT.",
    color: "purple",
    unitsData: [
      { num: 1, title: "Unit 1: World Literature Masterpieces & Cultural Perspectives", viTitle: "Kiệt Tác Văn Học Thế Giới & Góc Nhìn Văn Hóa Đa Chiều", series: "McDougal Littell Literature G10", concept: "World Masterpieces", term: "Allegory", ipa: "/ˈæl.ə.ɡri/", mean: "Truyện ngụ ngôn ẩn ý triết lý" },
      { num: 2, title: "Unit 2: Classical Rhetoric: Ethos, Pathos & Logos in Persuasion", viTitle: "Thuật Hùng Biện Cổ Điển: Tam Giác Thuyết Phục Ethos, Pathos & Logos", series: "McDougal Littell Literature G10", concept: "Classical Rhetoric", term: "Ethos", ipa: "/ˈiː.θɒs/", mean: "Uy tín và đạo đức của diễn giả" },
      { num: 3, title: "Unit 3: Greek Tragedy: Sophocles' Antigone & Moral Conflict", viTitle: "Bi Kịch Hy Lạp: Vở Kịch Antigone & Xung Đột Đạo Đức", series: "McDougal Littell Literature G10", concept: "Greek Tragedy", term: "Catharsis", ipa: "/kəˈθɑː.sɪs/", mean: "Sự thanh lọc tâm hồn trong bi kịch" },
      { num: 4, title: "Unit 4: The Novel: Critical Analysis, Symbolism & Historical Context", viTitle: "Tiểu Thuyết: Phân Tích Biểu Tượng & Bối Cảnh Lịch Sử", series: "McDougal Littell Literature G10", concept: "Novel Analysis", term: "Motif", ipa: "/məʊˈtiːf/", mean: "Mô-típ nghệ thuật lặp lại" },
      { num: 5, title: "Unit 5: Writer's Choice: Research Writing, Evidence & MLA Format", viTitle: "Writer's Choice: Viết Luận Nghiên Cứu Chuẩn Học Thuật MLA", series: "Writer's Choice G10", concept: "Academic Argument", term: "Synthesis", ipa: "/ˈsɪn.θə.sɪs/", mean: "Tổng hợp đa nguồn tài liệu" },
      { num: 6, title: "Unit 6: Vocabulary Practice and Tests with Answer Key (SAT Prep)", viTitle: "Luyện Từ Vựng Học Thuật SAT Kèm Đáp Án Chi Tiết", series: "Vocabulary Practice & Tests G10", concept: "SAT Vocabulary", term: "Ambiguous", ipa: "/æmˈbɪɡ.ju.əs/", mean: "Mơ hồ, có thể hiểu theo nhiều nghĩa" }
    ]
  },
  {
    grade: "Lớp 11 (Grade 11)",
    gradeCode: "G11",
    level: "highschool",
    levelName: "THPT (Chuẩn Mỹ G11)",
    driveFolderId: "1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
    driveUrl: "https://drive.google.com/drive/folders/1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
    textbooks: [
      "McDougal Littell Literature Grade 11: American Literature",
      "Writer's Choice: Grammar and Composition Grade 11",
      "Vocabulary Workshop & ACT/SAT Reading Preparation"
    ],
    description: "Chương trình chuẩn Mỹ Lớp 11: Văn học Mỹ từ Thời kỳ Lãng mạn & Siêu việt luận (Emerson, Thoreau) đến The Great Gatsby và Giấc mơ Mỹ, Viết luận Tổng hợp ACT/SAT.",
    color: "purple",
    unitsData: [
      { num: 1, title: "Unit 1: Early American Voices: Puritan Tradition & Independence", viTitle: "Tiếng Nói Đầu Tiên Nước Mỹ: Truyền Thống Thanh Giáo & Tuyên Ngôn Độc Lập", series: "American Literature G11", concept: "Colonial America", term: "Providence", ipa: "/ˈprɒv.ɪ.dəns/", mean: "Ý niệm Thiên mệnh / Sự che chở của Chúa" },
      { num: 2, title: "Unit 2: American Romanticism & Transcendentalism (Emerson, Thoreau)", viTitle: "Chủ Nghĩa Lãng Mạn & Thuyết Siêu Việt (Emerson & Thoreau)", series: "American Literature G11", concept: "Transcendentalism", term: "Intuition", ipa: "/ˌɪn.tʃuːˈɪʃ.ən/", mean: "Trực giác siêu việt tự nhiên" },
      { num: 3, title: "Unit 3: The American Renaissance: Poe, Hawthorne, Melville & Dickinson", viTitle: "Phục Hưng Văn Học Mỹ: Truyện Kinh Dị Của Poe & Thơ Dickinson", series: "American Literature G11", concept: "Gothic Romanticism", term: "Macabre", ipa: "/məˈkɑː.brə/", mean: "Không khí u ám, rùng rợn kỳ bí" },
      { num: 4, title: "Unit 4: Realism & Regionalism: Mark Twain & The Gilded Age", viTitle: "Chủ Nghĩa Hiện Thực: Mark Twain & Thời Kỳ Vàng Son Nước Mỹ", series: "American Literature G11", concept: "Literary Realism", term: "Vernacular", ipa: "/vəˈnæk.jə.lər/", mean: "Ngôn ngữ địa phương, tiếng lóng dân tộc" },
      { num: 5, title: "Unit 5: Modernism & The Lost Generation: The Great Gatsby", viTitle: "Chủ Nghĩa Hiện Đại & Đại Gia Gatsby: Phản Chiếu Giấc Mơ Mỹ", series: "American Literature G11", concept: "The American Dream", term: "Disillusionment", ipa: "/ˌdɪs.ɪˈluː.ʒən.mənt/", mean: "Sự vỡ mộng, tỉnh ngộ cay đắng" },
      { num: 6, title: "Unit 6: Advanced Rhetorical Analysis & ACT/SAT Synthesis Essay", viTitle: "Phân Tích Hùng Biện Nâng Cao & Viết Luận Tổng Hợp SAT/ACT", series: "Writer's Choice G11", concept: "Synthesis Essay", term: "Juxtaposition", ipa: "/ˌdʒʌk.stə.pəˈzɪʃ.ən/", mean: "Nghệ thuật đặt cạnh nhau để đối chiếu" }
    ]
  },
  {
    grade: "Lớp 12 (Grade 12)",
    gradeCode: "G12",
    level: "highschool",
    levelName: "THPT (Chuẩn Mỹ G12)",
    driveFolderId: "1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
    driveUrl: "https://drive.google.com/drive/folders/1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
    textbooks: [
      "McDougal Littell Literature Grade 12: British Literature",
      "Writer's Choice: Grammar and Composition Grade 12",
      "AP English Literature & College Admissions Essays"
    ],
    description: "Chương trình chuẩn Mỹ Lớp 12: Tinh hoa Văn học Anh & Thế giới từ Sử thi Beowulf, Bi kịch Hamlet (Shakespeare), Văn học Phản địa đàng (1984 của Orwell) đến Luận Đại học Mỹ.",
    color: "purple",
    unitsData: [
      { num: 1, title: "Unit 1: Anglo-Saxon & Medieval Period: Beowulf & Canterbury Tales", viTitle: "Thời Kỳ Anglo-Saxon & Trung Cổ: Sử Thi Beowulf & Truyện Canterbury", series: "British Literature G12", concept: "Old English Epic", term: "Kenning", ipa: "/ˈken.ɪŋ/", mean: "Ẩn dụ ghép đôi trong thơ cổ (vd: whale-road = biển)" },
      { num: 2, title: "Unit 2: The English Renaissance: Shakespeare's Hamlet & Macbeth", viTitle: "Phục Hưng Nước Anh: Bi Kịch Hamlet & Macbeth của Shakespeare", series: "British Literature G12", concept: "Shakespearean Tragedy", term: "Hamartia", ipa: "/ˌhɑː.mɑːˈtiː.ə/", mean: "Tử huyệt bi kịch định mệnh của nhân vật" },
      { num: 3, title: "Unit 3: The Enlightenment & Romanticism: Swift, Shelley & Keats", viTitle: "Thời Kỳ Khai Sáng & Lãng Mạn Anh: Châm Biếm Của Swift & Thơ Keats", series: "British Literature G12", concept: "Satire and Romanticism", term: "Satire", ipa: "/ˈsæt.aɪər/", mean: "Nghệ thuật châm biếm xã hội sâu cay" },
      { num: 4, title: "Unit 4: The Victorian Era to Modernism: Dickens, Woolf & Yeats", viTitle: "Thời Đại Victoria đến Chủ Nghĩa Hiện Đại: Dickens & Virginia Woolf", series: "British Literature G12", concept: "Stream of Consciousness", term: "Stream of consciousness", ipa: "/striːm əv ˈkɒn.ʃəs.nəs/", mean: "Dòng ý thức tuôn trào trong văn xuôi" },
      { num: 5, title: "Unit 5: Dystopian Fiction & Totalitarian Critique: George Orwell's 1984", viTitle: "Văn Học Phản Địa Đàng (Dystopia): Tác Phẩm 1984 của George Orwell", series: "British Literature G12", concept: "Dystopian Literature", term: "Doublethink", ipa: "/ˈdʌb.əl.θɪŋk/", mean: "Tư duy nước đôi (chấp nhận hai niềm tin mâu thuẫn)" },
      { num: 6, title: "Unit 6: AP English Literature & Personal College Admissions Statement", viTitle: "Luyện Đề AP English Literature & Hoàn Thiện Bài Luận Đại Học Mỹ", series: "Writer's Choice G12", concept: "College Admissions Essay", term: "Nuance", ipa: "/ˈnjuː.ɑːns/", mean: "Sắc thái tinh tế trong ý nghĩa và ngôn từ" }
    ]
  }
];

// Process Upper Grades
upperGrades.forEach(g => {
  const units = g.unitsData.map(u => ({
    id: `us_${g.gradeCode.toLowerCase()}_u${u.num}`,
    unitNumber: u.num,
    title: u.title,
    vietnameseTitle: `Chuyên đề: ${u.viTitle} (${u.series})`,
    curriculumSeries: u.series,
    driveLink: g.driveUrl,
    overview: `Trọng tâm kiến thức chuẩn Mỹ Grade ${g.gradeCode.slice(1)}: ${u.concept}. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.`,
    grammarFocus: `Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for ${u.concept}.`,
    sentencePatterns: [
      `Through rigorous analysis of ${u.term.toLowerCase()}, scholars uncover deeper philosophical motifs.`,
      `The author masterfully employs ${u.term.toLowerCase()} to challenge conventional perceptions.`
    ],
    tips: `Phát âm chuẩn thuật ngữ học thuật: ${u.term} (${u.ipa}).`,
    vocabulary: [
      {
        word: u.term,
        ipa: u.ipa,
        type: "noun",
        meaning: u.mean,
        example: `The essay deeply analyzes the concept of ${u.term.toLowerCase()}.`,
        exampleVi: `Bài luận phân tích sâu sắc khái niệm ${u.mean.toLowerCase()}.`,
        imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
      },
      {
        word: "Rhetoric",
        ipa: "/ˈret.ər.ɪk/",
        type: "noun",
        meaning: "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
        example: "The speaker's persuasive rhetoric captivated the audience.",
        exampleVi: "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
        imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
      },
      {
        word: "Perspective",
        ipa: "/pəˈspek.tɪv/",
        type: "noun",
        meaning: "Góc nhìn, quan điểm nhận thức",
        example: "Literature broadens our cultural perspectives.",
        exampleVi: "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
      }
    ],
    listeningPractice: {
      script: `University Professor: In today's seminar on ${u.concept}, note how the text utilizes ${u.term.toLowerCase()}. It allows the narrator to construct a compelling narrative voice.`,
      question: `What rhetorical technique is emphasized in the seminar?`,
      options: [
        { id: `opt_${g.gradeCode.toLowerCase()}_u${u.num}_1`, label: "A", text: u.term, isCorrect: true },
        { id: `opt_${g.gradeCode.toLowerCase()}_u${u.num}_2`, label: "B", text: "Linear simplistic exposition", isCorrect: false }
      ],
      explanation: `Giáo sư khẳng định kỹ thuật trọng tâm là: \"${u.term}\".`
    },
    speakingPractice: [
      { phrase: `${u.term} shapes literary meaning.`, ipa: u.ipa, prompt: `Luyện phát âm thuật ngữ học thuật ${u.term}`, targetText: `${u.term} shapes literary meaning`, difficulty: "Hard" }
    ],
    readingPractice: {
      title: `Critical Perspectives on ${u.concept}`,
      passage: `Critical literary scholars examine how authors deploy ${u.term.toLowerCase()} to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.`,
      question: `Why do sophisticated writers utilize subtle techniques rather than explicit statements?`,
      options: [
        { id: `opt_r_${g.gradeCode.toLowerCase()}_u${u.num}_1`, label: "A", text: "To invite active intellectual interpretation by the reader", isCorrect: true },
        { id: `opt_r_${g.gradeCode.toLowerCase()}_u${u.num}_2`, label: "B", text: "To conceal their lack of ideas", isCorrect: false }
      ],
      explanation: `Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\".`
    },
    writingPractice: {
      type: "sentence_rearrangement",
      prompt: "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
      correctSentence: `${u.term} enhances the philosophical depth of literature`,
      scrambledWords: ["depth", "philosophical", "literature", "enhances", "the", u.term, "of"],
      explanation: "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
    }
  }));

  allGrades.push({
    grade: g.grade,
    gradeCode: g.gradeCode,
    level: g.level,
    levelName: g.levelName,
    driveFolderId: g.driveFolderId,
    driveUrl: g.driveUrl,
    textbooks: g.textbooks,
    description: g.description,
    color: g.color,
    units
  });
});

console.log(`Successfully compiled ${allGrades.length} grades with ${allGrades.reduce((acc, g) => acc + g.units.length, 0)} total units!`);

// Write out to backend/src/database/usEduCurriculum.js
const fileContent = `/**
 * US_EDU Curriculum Database (Chương trình Hệ Song Ngữ & Quốc Tế Chuẩn Mỹ)
 * Tích hợp trực tiếp từ Google Drive: US_EDU (ID: 15PofJBFW3ymrm41AojESeKMuGvHVg7Y8)
 * Bao gồm các bộ giáo trình:
 * - California Science Leveled Readers (Grade 1 - 8)
 * - Scott Foresman Reading Street & ELL Readers (Grade 1 - 6)
 * - Math Concept Readers (Grade 1 - 6)
 * - Writer's Choice: Grammar and Composition (Grade 7 - 12)
 * - McDougal Littell Literature & Vocabulary Practice (Grade 9 - 12)
 * - Audio Tracks & Sound Studio theo từng Unit (G01 - G12)
 * 
 * Tổng số: 12 Lớp (Grade 1 đến Grade 12) x 6 Chuyên đề/Lớp = 72 Chuyên đề toàn diện
 */

export const usEduCurriculum = ${JSON.stringify(allGrades, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'backend', 'src', 'database', 'usEduCurriculum.js'), fileContent, 'utf-8');
console.log('Successfully written to backend/src/database/usEduCurriculum.js!');
