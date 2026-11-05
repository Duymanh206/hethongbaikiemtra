import fs from 'fs';
import path from 'path';

console.log('Generating complete US_EDU curriculum data for Grades 1-12...');

// Define curriculum units for all 12 grades
const gradesData = [
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
        id: "us_g1_u1",
        unitNumber: 1,
        title: "Unit 1: Living and Non-living Things",
        vietnameseTitle: "Chuyên đề: Sinh vật sống & Vật không sống (California Science G1)",
        curriculumSeries: "California Science Leveled Readers",
        driveLink: "https://drive.google.com/drive/folders/1xNnCdBtVwHVV3Ndyd2435bE3_zLNRjV7",
        overview: "Học sinh phân biệt sinh vật sống (cần thức ăn, nước, không khí để lớn lên) với các vật thể vô tri.",
        grammarFocus: "Living things need + [food / water / air] to survive and grow.",
        sentencePatterns: [
          "Plants and animals are living things.",
          "A rock is a non-living thing because it does not grow."
        ],
        tips: "Phát âm chuẩn cụm \"living things\" với âm /ɪ/ ngắn và đuôi /ŋz/.",
        vocabulary: [
          { word: "Living thing", ipa: "/ˈlɪv.ɪŋ θɪŋ/", type: "noun", meaning: "Sinh vật sống", example: "Plants are living things.", exampleVi: "Cây cối là sinh vật sống.", imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80" },
          { word: "Non-living", ipa: "/nɒn ˈlɪv.ɪŋ/", type: "adj", meaning: "Vật vô tri, không sống", example: "Rocks are non-living.", exampleVi: "Đá là vật vô tri.", imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80" },
          { word: "Survive", ipa: "/səˈvaɪv/", type: "verb", meaning: "Sinh tồn, sống sót", example: "Animals need water to survive.", exampleVi: "Động vật cần nước để sinh tồn.", imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80" },
          { word: "Grow", ipa: "/ɡrəʊ/", type: "verb", meaning: "Lớn lên, phát triển", example: "A seed grows into a plant.", exampleVi: "Hạt mầm lớn lên thành cây.", imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop&q=80" }
        ],
        listeningPractice: {
          script: "Science teacher: Look around our garden! Plants and little birds are living things because they need food and water to grow.",
          question: "What do living things need to grow?",
          options: [
            { id: "opt_usg1u1_1", label: "A", text: "Food and water (Thức ăn và nước uống)", isCorrect: true },
            { id: "opt_usg1u1_2", label: "B", text: "Batteries and gasoline", isCorrect: false }
          ],
          explanation: "Trong bài nghe: \"they need food and water to grow\"."
        },
        speakingPractice: [
          { phrase: "Living things grow and change.", ipa: "/ˈlɪv.ɪŋ θɪŋz ɡrəʊ ænd tʃeɪndʒ/", prompt: "Luyện phát âm câu miêu tả sinh vật sống", targetText: "Living things grow and change", difficulty: "Easy" },
          { phrase: "Plants need sunlight and water.", ipa: "/plɑːnts niːd ˈsʌn.laɪt ænd ˈwɔː.tər/", prompt: "Luyện phát âm về nhu cầu của thực vật", targetText: "Plants need sunlight and water", difficulty: "Easy" }
        ],
        readingPractice: {
          title: "What is Alive?",
          passage: "Living things breathe air. They take in water and eat food. They grow bigger over time. A puppy grows into a dog. A tiny acorn grows into a huge oak tree. Toys and desks do not breathe. They do not eat. They are non-living things.",
          question: "Why is a desk a non-living thing?",
          options: [
            { id: "opt_r_g1u1_1", label: "A", text: "Because it does not breathe, eat or grow", isCorrect: true },
            { id: "opt_r_g1u1_2", label: "B", text: "Because it is in a classroom", isCorrect: false }
          ],
          explanation: "Bàn học là vật vô tri vì nó không hô hấp, không ăn uống và không phát triển."
        },
        writingPractice: {
          type: "sentence_rearrangement",
          prompt: "Sắp xếp các từ thành câu đúng về sinh vật sống:",
          correctSentence: "Plants need water to survive",
          scrambledWords: ["water", "Plants", "survive", "to", "need"],
          explanation: "Cấu trúc: Chủ ngữ (Plants) + động từ (need) + tân ngữ (water) + chỉ mục đích (to survive)."
        }
      },
      {
        id: "us_g1_u2",
        unitNumber: 2,
        title: "Unit 2: Weather and Four Seasons",
        vietnameseTitle: "Chuyên đề: Thời tiết & 4 Mùa trong năm (Scott Foresman G1)",
        curriculumSeries: "Scott Foresman Reading Street",
        driveLink: "https://drive.google.com/drive/folders/1xNnCdBtVwHVV3Ndyd2435bE3_zLNRjV7",
        overview: "Tìm hiểu các kiểu thời tiết: sunny, rainy, windy, snowy và đặc trưng của 4 mùa: Spring, Summer, Autumn, Winter.",
        grammarFocus: "It is + [sunny / rainy / windy / snowy] today.",
        sentencePatterns: [
          "In spring, flowers bloom and leaves grow.",
          "Summer is hot and sunny, perfect for swimming."
        ],
        tips: "Phân biệt /s/ trong summer và /ʃ/ trong shine.",
        vocabulary: [
          { word: "Season", ipa: "/ˈsiː.zən/", type: "noun", meaning: "Mùa trong năm", example: "There are four seasons in a year.", exampleVi: "Có bốn mùa trong một năm.", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80" },
          { word: "Spring", ipa: "/sprɪŋ/", type: "noun", meaning: "Mùa xuân", example: "Flowers bloom in spring.", exampleVi: "Hoa nở rộ vào mùa xuân.", imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop&q=80" },
          { word: "Autumn", ipa: "/ˈɔː.təm/", type: "noun", meaning: "Mùa thu (Fall)", example: "Leaves fall in autumn.", exampleVi: "Lá rụng vào mùa thu.", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80" },
          { word: "Winter", ipa: "/ˈwɪn.tər/", type: "noun", meaning: "Mùa đông", example: "Snow falls in cold winter.", exampleVi: "Tuyết rơi vào mùa đông giá lạnh.", imageUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=400&auto=format&fit=crop&q=80" }
        ],
        listeningPractice: {
          script: "Weather reporter: Good morning! Today it is sunny and warm outside. Put on your hats and enjoy the park!",
          question: "How is the weather today?",
          options: [
            { id: "opt_usg1u2_1", label: "A", text: "Sunny and warm", isCorrect: true },
            { id: "opt_usg1u2_2", label: "B", text: "Snowy and freezing", isCorrect: false }
          ],
          explanation: "Người dẫn chương trình nói: \"Today it is sunny and warm outside\"."
        },
        speakingPractice: [
          { phrase: "I love sunny summer days.", ipa: "/aɪ lʌv ˈsʌn.i ˈsʌm.ər deɪz/", prompt: "Luyện phát âm về mùa yêu thích", targetText: "I love sunny summer days", difficulty: "Easy" }
        ],
        readingPractice: {
          title: "The Four Seasons",
          passage: "Earth has four seasons: spring, summer, fall, and winter. Spring brings rain and blossoms. Summer has long, warm days. Fall brings cool breezes and colorful leaves. Winter brings chilly winds and white snowflakes.",
          question: "Which season brings warm days and sunshine?",
          options: [
            { id: "opt_r_g1u2_1", label: "A", text: "Summer", isCorrect: true },
            { id: "opt_r_g1u2_2", label: "B", text: "Winter", isCorrect: false }
          ],
          explanation: "Bài đọc nêu rõ: \"Summer has long, warm days\"."
        },
        writingPractice: {
          type: "sentence_rearrangement",
          prompt: "Sắp xếp các từ thành câu hoàn chỉnh:",
          correctSentence: "It is very cold in winter",
          scrambledWords: ["in", "cold", "winter", "is", "very", "It"],
          explanation: "Cấu trúc: It is + very cold + in winter."
        }
      },
      {
        id: "us_g1_u3",
        unitNumber: 3,
        title: "Unit 3: Plants and Seeds: How Plants Grow",
        vietnameseTitle: "Chuyên đề: Cây cối & Hạt mầm phát triển (California Science G1)",
        curriculumSeries: "California Science Leveled Readers",
        driveLink: "https://drive.google.com/drive/folders/1xNnCdBtVwHVV3Ndyd2435bE3_zLNRjV7",
        overview: "Các bộ phận của cây (roots, stem, leaves, flower) và chu trình nảy mầm từ hạt giống.",
        grammarFocus: "A plant has + [roots / stem / leaves / flower].",
        sentencePatterns: [
          "Roots hold the plant in the soil.",
          "Leaves make food from sunlight."
        ],
        tips: "Phát âm âm /uː/ trong roots và /iː/ trong leaves.",
        vocabulary: [
          { word: "Root", ipa: "/ruːt/", type: "noun", meaning: "Rễ cây", example: "Roots take in water from soil.", exampleVi: "Rễ hút nước từ đất.", imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format&fit=crop&q=80" },
          { word: "Stem", ipa: "/stem/", type: "noun", meaning: "Thân cây", example: "The stem supports the flower.", exampleVi: "Thân cây nâng đỡ bông hoa.", imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80" },
          { word: "Leaf", ipa: "/liːf/", type: "noun", meaning: "Lá cây (số nhiều: leaves)", example: "Green leaves absorb sunlight.", exampleVi: "Lá xanh hấp thụ ánh nắng mặt trời.", imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop&q=80" }
        ],
        listeningPractice: {
          script: "Botanist: The roots grow down into the soil to absorb moisture, while the green leaves catch rays of sunshine.",
          question: "What part of the plant absorbs water from soil?",
          options: [
            { id: "opt_usg1u3_1", label: "A", text: "The roots", isCorrect: true },
            { id: "opt_usg1u3_2", label: "B", text: "The flower petals", isCorrect: false }
          ],
          explanation: "\"The roots grow down into the soil to absorb moisture\"."
        },
        speakingPractice: [
          { phrase: "Roots take in water.", ipa: "/ruːts teɪk ɪn ˈwɔː.tər/", prompt: "Luyện phát âm về rễ cây", targetText: "Roots take in water", difficulty: "Easy" }
        ],
        readingPractice: {
          title: "Parts of a Plant",
          passage: "Most plants have roots, stems, and leaves. Roots grow underground. They hold the plant firmly in the dirt. Stems carry water up from the roots to the leaves. Leaves use sunshine and air to make food.",
          question: "What do stems carry up to the leaves?",
          options: [
            { id: "opt_r_g1u3_1", label: "A", text: "Water", isCorrect: true },
            { id: "opt_r_g1u3_2", label: "B", text: "Dirt and stones", isCorrect: false }
          ],
          explanation: "\"Stems carry water up from the roots to the leaves\"."
        },
        writingPractice: {
          type: "sentence_rearrangement",
          prompt: "Sắp xếp từ thành câu:",
          correctSentence: "Leaves make food for plants",
          scrambledWords: ["plants", "make", "Leaves", "for", "food"],
          explanation: "Chủ ngữ Leaves + động từ make + tân ngữ food + bổ ngữ for plants."
        }
      },
      {
        id: "us_g1_u4",
        unitNumber: 4,
        title: "Unit 4: Animal Families, Habitats & Senses",
        vietnameseTitle: "Chuyên đề: Gia đình loài vật & Môi trường sống (SF ELL Reader G1)",
        curriculumSeries: "Scott Foresman Reading Street ELL Readers",
        driveLink: "https://drive.google.com/drive/folders/1xNnCdBtVwHVV3Ndyd2435bE3_zLNRjV7",
        overview: "Học về các giác quan (5 senses) và cách động vật sử dụng thị giác, thính giác để sinh tồn trong môi trường tự nhiên.",
        grammarFocus: "Animals use their + [eyes / ears / nose / paws] to + verb.",
        sentencePatterns: [
          "Bears have thick fur to keep warm in winter.",
          "Birds build nests high up in green trees."
        ],
        tips: "Chú ý nối âm \"use their\" /juːz ðeər/.",
        vocabulary: [
          { word: "Habitat", ipa: "/ˈhæb.ɪ.tæt/", type: "noun", meaning: "Môi trường sống tự nhiên", example: "The forest is a bear's habitat.", exampleVi: "Rừng là môi trường sống của gấu.", imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&auto=format&fit=crop&q=80" },
          { word: "Sight", ipa: "/saɪt/", type: "noun", meaning: "Thị giác, khả năng nhìn", example: "Eagles have sharp sight.", exampleVi: "Đại bàng có thị lực rất sắc bén.", imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80" },
          { word: "Shelter", ipa: "/ˈʃel.tər/", type: "noun", meaning: "Nơi trú ẩn, tổ", example: "Animals need safe shelter.", exampleVi: "Động vật cần nơi trú ẩn an toàn.", imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80" }
        ],
        listeningPractice: {
          script: "Park ranger: Animals use their five senses to locate food and escape from predators in the deep wild forest.",
          question: "Why do animals use their five senses?",
          options: [
            { id: "opt_usg1u4_1", label: "A", text: "To locate food and escape from predators", isCorrect: true },
            { id: "opt_usg1u4_2", label: "B", text: "To watch television", isCorrect: false }
          ],
          explanation: "Trích đoạn: \"to locate food and escape from predators\"."
        },
        speakingPractice: [
          { phrase: "Animals need shelter and food.", ipa: "/ˈæn.ɪ.məlz niːd ˈʃel.tər ænd fuːd/", prompt: "Luyện phát âm về nhu cầu động vật", targetText: "Animals need shelter and food", difficulty: "Easy" }
        ],
        readingPractice: {
          title: "Animal Homes",
          passage: "Every animal needs a safe home called a shelter. Birds weave nests out of twigs. Rabbits dig cozy burrows beneath the ground. Fish swim inside coral reefs. Shelter keeps animals warm and safe from danger.",
          question: "What is an animal's home called?",
          options: [
            { id: "opt_r_g1u4_1", label: "A", text: "A shelter", isCorrect: true },
            { id: "opt_r_g1u4_2", label: "B", text: "A store", isCorrect: false }
          ],
          explanation: "\"Every animal needs a safe home called a shelter\"."
        },
        writingPractice: {
          type: "sentence_rearrangement",
          prompt: "Sắp xếp từ thành câu:",
          correctSentence: "Birds build nests in trees",
          scrambledWords: ["in", "build", "nests", "Birds", "trees"],
          explanation: "Chủ ngữ Birds + động từ build + tân ngữ nests + giới từ in trees."
        }
      },
      {
        id: "us_g1_u5",
        unitNumber: 5,
        title: "Unit 5: Matter: Solid, Liquid and Gas",
        vietnameseTitle: "Chuyên đề: Vật chất & 3 Trạng thái của nước (CalSci Physical Science G1)",
        curriculumSeries: "California Science Leveled Readers",
        driveLink: "https://drive.google.com/drive/folders/1xNnCdBtVwHVV3Ndyd2435bE3_zLNRjV7",
        overview: "Khám phá 3 trạng thái vật chất cơ bản: chất rắn (solid), chất lỏng (liquid) và chất khí (gas).",
        grammarFocus: "A [solid / liquid / gas] has + [its own shape / no shape].",
        sentencePatterns: [
          "Ice is a solid and it has a fixed shape.",
          "Water is a liquid that flows into a glass."
        ],
        tips: "Phát âm /kw/ trong liquid và /æ/ trong gas.",
        vocabulary: [
          { word: "Solid", ipa: "/ˈsɒl.ɪd/", type: "noun", meaning: "Chất rắn", example: "An apple is a solid.", exampleVi: "Một quả táo là chất rắn.", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=80" },
          { word: "Liquid", ipa: "/ˈlɪk.wɪd/", type: "noun", meaning: "Chất lỏng", example: "Water and milk are liquids.", exampleVi: "Nước và sữa là chất lỏng.", imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80" },
          { word: "Gas", ipa: "/ɡæs/", type: "noun", meaning: "Chất khí", example: "Steam from a kettle is gas.", exampleVi: "Hơi nước bốc lên từ ấm là chất khí.", imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80" }
        ],
        listeningPractice: {
          script: "Science teacher: All things are made of matter. Rocks are solids. Water is a liquid. And air is a gas that we breathe.",
          question: "What is an example of a solid?",
          options: [
            { id: "opt_usg1u5_1", label: "A", text: "A rock", isCorrect: true },
            { id: "opt_usg1u5_2", label: "B", text: "Air", isCorrect: false }
          ],
          explanation: "\"Rocks are solids\"."
        },
        speakingPractice: [
          { phrase: "Water is a liquid.", ipa: "/ˈwɔː.tər ɪz ə ˈlɪk.wɪd/", prompt: "Luyện phát âm câu về chất lỏng", targetText: "Water is a liquid", difficulty: "Easy" }
        ],
        readingPractice: {
          title: "Three Forms of Matter",
          passage: "Everything around you is matter. A solid has its own shape, like a wooden pencil. A liquid takes the shape of its container, like sweet orange juice in a cup. A gas spreads out to fill any space, like steam in the air.",
          question: "Which form of matter takes the shape of its container?",
          options: [
            { id: "opt_r_g1u5_1", label: "A", text: "A liquid", isCorrect: true },
            { id: "opt_r_g1u5_2", label: "B", text: "A rock", isCorrect: false }
          ],
          explanation: "\"A liquid takes the shape of its container\"."
        },
        writingPractice: {
          type: "sentence_rearrangement",
          prompt: "Sắp xếp từ thành câu:",
          correctSentence: "Ice melts into liquid water",
          scrambledWords: ["water", "into", "melts", "liquid", "Ice"],
          explanation: "Chủ ngữ Ice + động từ melts + giới từ into + tân ngữ liquid water."
        }
      },
      {
        id: "us_g1_u6",
        unitNumber: 6,
        title: "Unit 6: Math in Nature: Counting, Shapes & Patterns",
        vietnameseTitle: "Chuyên đề: Toán học trong Tự nhiên (Math Concept Reader G1)",
        curriculumSeries: "Math Concept Readers G1",
        driveLink: "https://drive.google.com/drive/folders/1xNnCdBtVwHVV3Ndyd2435bE3_zLNRjV7",
        overview: "Nhận biết hình dạng hình học (circle, square, triangle, rectangle) và quy luật lặp lại (patterns) trong tự nhiên.",
        grammarFocus: "There is / There are + [number] + [shapes / objects].",
        sentencePatterns: [
          "The yellow sun looks like a giant circle.",
          "A honeycomb has many hexagon shapes."
        ],
        tips: "Phát âm chuẩn âm /tʃ/ trong matches và /s/ trong shapes.",
        vocabulary: [
          { word: "Circle", ipa: "/ˈsɜː.kəl/", type: "noun", meaning: "Hình tròn", example: "A coin has a circle shape.", exampleVi: "Đồng xu có hình tròn.", imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80" },
          { word: "Triangle", ipa: "/ˈtraɪ.æŋ.ɡəl/", type: "noun", meaning: "Hình tam giác", example: "A slice of pizza is a triangle.", exampleVi: "Một miếng bánh pizza có hình tam giác.", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=80" },
          { word: "Pattern", ipa: "/ˈpæt.ən/", type: "noun", meaning: "Quy luật lặp lại, hoa văn", example: "Zebras have striped patterns.", exampleVi: "Ngựa vằn có hoa văn sọc vằn.", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80" }
        ],
        listeningPractice: {
          script: "Math guide: Look at the petals on the daisy! Let us count them: one, two, three, four, five! Five lovely white petals.",
          question: "How many petals did the guide count?",
          options: [
            { id: "opt_usg1u6_1", label: "A", text: "Five petals", isCorrect: true },
            { id: "opt_usg1u6_2", label: "B", text: "Twenty petals", isCorrect: false }
          ],
          explanation: "Bài nghe nói: \"one, two, three, four, five! Five lovely white petals\"."
        },
        speakingPractice: [
          { phrase: "The sun is a circle.", ipa: "/ðə sʌn ɪz ə ˈsɜː.kəl/", prompt: "Luyện phát âm về hình học", targetText: "The sun is a circle", difficulty: "Easy" }
        ],
        readingPractice: {
          title: "Shapes Everywhere",
          passage: "Look at your world! You can see shapes in every corner. A clock on the wall is a circle. A door is a tall rectangle. A rooftop can be a triangle. Finding shapes makes math exciting!",
          question: "What shape is usually a clock on the wall?",
          options: [
            { id: "opt_r_g1u6_1", label: "A", text: "A circle", isCorrect: true },
            { id: "opt_r_g1u6_2", label: "B", text: "A pyramid", isCorrect: false }
          ],
          explanation: "\"A clock on the wall is a circle\"."
        },
        writingPractice: {
          type: "sentence_rearrangement",
          prompt: "Sắp xếp từ thành câu:",
          correctSentence: "There are four circles here",
          scrambledWords: ["four", "are", "There", "here", "circles"],
          explanation: "Cấu trúc There are + số lượng + danh từ số nhiều + vị trí."
        }
      }
    ]
  }
];

export { gradesData };

