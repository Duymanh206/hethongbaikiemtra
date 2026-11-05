/**
 * US_EDU Curriculum Database (Chương trình Hệ Song Ngữ & Quốc Tế Chuẩn Mỹ)
 * Tích hợp trực tiếp từ Google Drive: US_EDU (ID: 15PofJBFW3ymrm41AojESeKMuGvHVg7Y8)
 * Bao gồm 12 Khối lớp x 6 Chuyên đề = 72 Chuyên đề chuẩn hóa
 */

export const usEduCurriculum = [
  {
    "grade": "Lớp 1 (Grade 1)",
    "gradeCode": "G01",
    "level": "primary",
    "levelName": "Tiểu học (Chuẩn Mỹ G1)",
    "driveFolderId": "1xNnCdBtVwHVV3Ndyd2435bE3_zLNRjV7",
    "driveUrl": "https://drive.google.com/drive/folders/1xNnCdBtVwHVV3Ndyd2435bE3_zLNRjV7",
    "textbooks": [
      "California Science – Leveled Readers CalSci LR G1",
      "Scott Foresman Reading Street ELL Readers (SF RS ELL Reader G1)",
      "Concept Literacy Leveled Readers - SF G1",
      "Beyond Level Readers - L G1",
      "Math Concept Readers G1"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 1: Khám phá thế giới tự nhiên (Living & Non-living Things), thời tiết (Weather & Seasons), ngữ âm Phonics và số đếm toán học sinh động.",
    "color": "emerald",
    "units": [
      {
        "num": 1,
        "title": "Unit 1: Living and Non-living Things",
        "viTitle": "Chuyên đề: Sinh vật sống & Vật không sống (California Science G1)",
        "series": "California Science",
        "overview": "Phân biệt sinh vật sống (cần thức ăn, nước, không khí để lớn lên) với các vật thể vô tri.",
        "grammar": "Living things need + [food / water / air] to survive and grow.",
        "patterns": [
          "Plants and animals are living things.",
          "A rock is a non-living thing because it does not grow."
        ],
        "tips": "Phát âm chuẩn cụm \"living things\" với âm /ɪ/ ngắn và đuôi /ŋz/.",
        "vocab": [
          [
            "Living thing",
            "/ˈlɪv.ɪŋ θɪŋ/",
            "noun",
            "Sinh vật sống",
            "Plants are living things.",
            "Cây cối là sinh vật sống.",
            "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Non-living",
            "/nɒn ˈlɪv.ɪŋ/",
            "adj",
            "Vật vô tri, không sống",
            "Rocks are non-living.",
            "Đá là vật vô tri.",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Survive",
            "/səˈvaɪv/",
            "verb",
            "Sinh tồn, sống sót",
            "Animals need water to survive.",
            "Động vật cần nước để sinh tồn.",
            "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Grow",
            "/ɡrəʊ/",
            "verb",
            "Lớn lên, phát triển",
            "A seed grows into a plant.",
            "Hạt mầm lớn lên thành cây.",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop&q=80"
          ]
        ],
        "listen": {
          "script": "Science teacher: Look around our garden! Plants and little birds are living things because they need food and water to grow.",
          "q": "What do living things need to grow?",
          "opts": [
            [
              "Food and water (Thức ăn và nước uống)",
              true
            ],
            [
              "Batteries and gasoline",
              false
            ]
          ],
          "exp": "Trong bài nghe: \"they need food and water to grow\"."
        },
        "speaking": [
          [
            "Living things grow and change.",
            "/ˈlɪv.ɪŋ θɪŋz ɡrəʊ ænd tʃeɪndʒ/",
            "Living things grow and change"
          ],
          [
            "Plants need sunlight and water.",
            "/plɑːnts niːd ˈsʌn.laɪt ænd ˈwɔː.tər/",
            "Plants need sunlight and water"
          ]
        ],
        "reading": {
          "title": "What is Alive?",
          "passage": "Living things breathe air. They take in water and eat food. They grow bigger over time. A puppy grows into a dog. A tiny acorn grows into a huge oak tree. Toys and desks do not breathe. They do not eat. They are non-living things.",
          "q": "Why is a desk a non-living thing?",
          "opts": [
            [
              "Because it does not breathe, eat or grow",
              true
            ],
            [
              "Because it is in a classroom",
              false
            ]
          ],
          "exp": "Bàn học là vật vô tri vì nó không hô hấp, không ăn uống và không phát triển."
        },
        "writing": {
          "prompt": "Sắp xếp các từ thành câu đúng về sinh vật sống:",
          "correct": "Plants need water to survive",
          "words": [
            "water",
            "Plants",
            "survive",
            "to",
            "need"
          ],
          "exp": "Cấu trúc: Chủ ngữ (Plants) + động từ (need) + tân ngữ (water) + chỉ mục đích (to survive)."
        },
        "id": "us_g01_u1",
        "unitNumber": 1,
        "curriculumSeries": "California Science",
        "readingPractice": {
          "title": "What is Alive?",
          "passage": "Living things breathe air. They take in water and eat food. They grow bigger over time. A puppy grows into a dog. A tiny acorn grows into a huge oak tree. Toys and desks do not breathe. They do not eat. They are non-living things.",
          "question": "Why is a desk a non-living thing?",
          "options": [
            {
              "id": "opt_r_us_g01_u1_1",
              "label": "A",
              "text": "Because it does not breathe, eat or grow",
              "isCorrect": true
            },
            {
              "id": "opt_r_us_g01_u1_2",
              "label": "B",
              "text": "Because it is in a classroom",
              "isCorrect": false
            }
          ],
          "explanation": "Bàn học là vật vô tri vì nó không hô hấp, không ăn uống và không phát triển."
        },
        "listeningPractice": {
          "script": "Science teacher: Look around our garden! Plants and little birds are living things because they need food and water to grow.",
          "question": "What do living things need to grow?",
          "options": [
            {
              "id": "opt_l_us_g01_u1_1",
              "label": "A",
              "text": "Food and water (Thức ăn và nước uống)",
              "isCorrect": true
            },
            {
              "id": "opt_l_us_g01_u1_2",
              "label": "B",
              "text": "Batteries and gasoline",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe: \"they need food and water to grow\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu đúng về sinh vật sống:",
          "correctSentence": "Plants need water to survive",
          "scrambledWords": [
            "water",
            "Plants",
            "survive",
            "to",
            "need"
          ],
          "explanation": "Cấu trúc: Chủ ngữ (Plants) + động từ (need) + tân ngữ (water) + chỉ mục đích (to survive)."
        }
      },
      {
        "num": 2,
        "title": "Unit 2: Weather and Four Seasons",
        "viTitle": "Chuyên đề: Thời tiết & 4 Mùa trong năm (Scott Foresman G1)",
        "series": "Scott Foresman",
        "overview": "Tìm hiểu các kiểu thời tiết: sunny, rainy, windy, snowy và đặc trưng của 4 mùa: Spring, Summer, Autumn, Winter.",
        "grammar": "It is + [sunny / rainy / windy / snowy] today.",
        "patterns": [
          "In spring, flowers bloom and leaves grow.",
          "Summer is hot and sunny, perfect for swimming."
        ],
        "tips": "Phân biệt /s/ trong summer và /ʃ/ trong shine.",
        "vocab": [
          [
            "Season",
            "/ˈsiː.zən/",
            "noun",
            "Mùa trong năm",
            "There are four seasons in a year.",
            "Có bốn mùa trong một năm.",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Spring",
            "/sprɪŋ/",
            "noun",
            "Mùa xuân",
            "Flowers bloom in spring.",
            "Hoa nở rộ vào mùa xuân.",
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Autumn",
            "/ˈɔː.təm/",
            "noun",
            "Mùa thu (Fall)",
            "Leaves fall in autumn.",
            "Lá rụng vào mùa thu.",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Winter",
            "/ˈwɪn.tər/",
            "noun",
            "Mùa đông",
            "Snow falls in cold winter.",
            "Tuyết rơi vào mùa đông giá lạnh.",
            "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=400&auto=format&fit=crop&q=80"
          ]
        ],
        "listen": {
          "script": "Weather reporter: Good morning! Today it is sunny and warm outside. Put on your hats and enjoy the park!",
          "q": "How is the weather today?",
          "opts": [
            [
              "Sunny and warm",
              true
            ],
            [
              "Snowy and freezing",
              false
            ]
          ],
          "exp": "Người dẫn chương trình nói: \"Today it is sunny and warm outside\"."
        },
        "speaking": [
          [
            "I love sunny summer days.",
            "/aɪ lʌv ˈsʌn.i ˈsʌm.ər deɪz/",
            "I love sunny summer days"
          ]
        ],
        "reading": {
          "title": "The Four Seasons",
          "passage": "Earth has four seasons: spring, summer, fall, and winter. Spring brings rain and blossoms. Summer has long, warm days. Fall brings cool breezes and colorful leaves. Winter brings chilly winds and white snowflakes.",
          "q": "Which season brings warm days and sunshine?",
          "opts": [
            [
              "Summer",
              true
            ],
            [
              "Winter",
              false
            ]
          ],
          "exp": "Bài đọc nêu rõ: \"Summer has long, warm days\"."
        },
        "writing": {
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correct": "It is very cold in winter",
          "words": [
            "in",
            "cold",
            "winter",
            "is",
            "very",
            "It"
          ],
          "exp": "Cấu trúc: It is + very cold + in winter."
        },
        "id": "us_g01_u2",
        "unitNumber": 2,
        "curriculumSeries": "Scott Foresman",
        "readingPractice": {
          "title": "The Four Seasons",
          "passage": "Earth has four seasons: spring, summer, fall, and winter. Spring brings rain and blossoms. Summer has long, warm days. Fall brings cool breezes and colorful leaves. Winter brings chilly winds and white snowflakes.",
          "question": "Which season brings warm days and sunshine?",
          "options": [
            {
              "id": "opt_r_us_g01_u2_1",
              "label": "A",
              "text": "Summer",
              "isCorrect": true
            },
            {
              "id": "opt_r_us_g01_u2_2",
              "label": "B",
              "text": "Winter",
              "isCorrect": false
            }
          ],
          "explanation": "Bài đọc nêu rõ: \"Summer has long, warm days\"."
        },
        "listeningPractice": {
          "script": "Weather reporter: Good morning! Today it is sunny and warm outside. Put on your hats and enjoy the park!",
          "question": "How is the weather today?",
          "options": [
            {
              "id": "opt_l_us_g01_u2_1",
              "label": "A",
              "text": "Sunny and warm",
              "isCorrect": true
            },
            {
              "id": "opt_l_us_g01_u2_2",
              "label": "B",
              "text": "Snowy and freezing",
              "isCorrect": false
            }
          ],
          "explanation": "Người dẫn chương trình nói: \"Today it is sunny and warm outside\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "It is very cold in winter",
          "scrambledWords": [
            "in",
            "cold",
            "winter",
            "is",
            "very",
            "It"
          ],
          "explanation": "Cấu trúc: It is + very cold + in winter."
        }
      },
      {
        "num": 3,
        "title": "Unit 3: Plants and Seeds: How Plants Grow",
        "viTitle": "Chuyên đề: Cây cối & Hạt mầm phát triển (California Science G1)",
        "series": "California Science",
        "overview": "Các bộ phận của cây (roots, stem, leaves, flower) và chu trình nảy mầm từ hạt giống.",
        "grammar": "A plant has + [roots / stem / leaves / flower].",
        "patterns": [
          "Roots hold the plant in the soil.",
          "Leaves make food from sunlight."
        ],
        "tips": "Phát âm âm /uː/ trong roots và /iː/ trong leaves.",
        "vocab": [
          [
            "Root",
            "/ruːt/",
            "noun",
            "Rễ cây",
            "Roots take in water from soil.",
            "Rễ hút nước từ đất.",
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Stem",
            "/stem/",
            "noun",
            "Thân cây",
            "The stem supports the flower.",
            "Thân cây nâng đỡ bông hoa.",
            "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Leaf",
            "/liːf/",
            "noun",
            "Lá cây (số nhiều: leaves)",
            "Green leaves absorb sunlight.",
            "Lá xanh hấp thụ ánh nắng mặt trời.",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop&q=80"
          ]
        ],
        "listen": {
          "script": "Botanist: The roots grow down into the soil to absorb moisture, while the green leaves catch rays of sunshine.",
          "q": "What part of the plant absorbs water from soil?",
          "opts": [
            [
              "The roots",
              true
            ],
            [
              "The flower petals",
              false
            ]
          ],
          "exp": "\"The roots grow down into the soil to absorb moisture\"."
        },
        "speaking": [
          [
            "Roots take in water.",
            "/ruːts teɪk ɪn ˈwɔː.tər/",
            "Roots take in water"
          ]
        ],
        "reading": {
          "title": "Parts of a Plant",
          "passage": "Most plants have roots, stems, and leaves. Roots grow underground. They hold the plant firmly in the dirt. Stems carry water up from the roots to the leaves. Leaves use sunshine and air to make food.",
          "q": "What do stems carry up to the leaves?",
          "opts": [
            [
              "Water",
              true
            ],
            [
              "Dirt and stones",
              false
            ]
          ],
          "exp": "\"Stems carry water up from the roots to the leaves\"."
        },
        "writing": {
          "prompt": "Sắp xếp từ thành câu:",
          "correct": "Leaves make food for plants",
          "words": [
            "plants",
            "make",
            "Leaves",
            "for",
            "food"
          ],
          "exp": "Chủ ngữ Leaves + động từ make + tân ngữ food + bổ ngữ for plants."
        },
        "id": "us_g01_u3",
        "unitNumber": 3,
        "curriculumSeries": "California Science",
        "readingPractice": {
          "title": "Parts of a Plant",
          "passage": "Most plants have roots, stems, and leaves. Roots grow underground. They hold the plant firmly in the dirt. Stems carry water up from the roots to the leaves. Leaves use sunshine and air to make food.",
          "question": "What do stems carry up to the leaves?",
          "options": [
            {
              "id": "opt_r_us_g01_u3_1",
              "label": "A",
              "text": "Water",
              "isCorrect": true
            },
            {
              "id": "opt_r_us_g01_u3_2",
              "label": "B",
              "text": "Dirt and stones",
              "isCorrect": false
            }
          ],
          "explanation": "\"Stems carry water up from the roots to the leaves\"."
        },
        "listeningPractice": {
          "script": "Botanist: The roots grow down into the soil to absorb moisture, while the green leaves catch rays of sunshine.",
          "question": "What part of the plant absorbs water from soil?",
          "options": [
            {
              "id": "opt_l_us_g01_u3_1",
              "label": "A",
              "text": "The roots",
              "isCorrect": true
            },
            {
              "id": "opt_l_us_g01_u3_2",
              "label": "B",
              "text": "The flower petals",
              "isCorrect": false
            }
          ],
          "explanation": "\"The roots grow down into the soil to absorb moisture\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp từ thành câu:",
          "correctSentence": "Leaves make food for plants",
          "scrambledWords": [
            "plants",
            "make",
            "Leaves",
            "for",
            "food"
          ],
          "explanation": "Chủ ngữ Leaves + động từ make + tân ngữ food + bổ ngữ for plants."
        }
      },
      {
        "num": 4,
        "title": "Unit 4: Animal Families, Habitats & Senses",
        "viTitle": "Chuyên đề: Gia đình loài vật & Môi trường sống (SF ELL Reader G1)",
        "series": "Scott Foresman",
        "overview": "Học về các giác quan (5 senses) và cách động vật sử dụng thị giác, thính giác để sinh tồn trong môi trường tự nhiên.",
        "grammar": "Animals use their + [eyes / ears / nose / paws] to + verb.",
        "patterns": [
          "Bears have thick fur to keep warm in winter.",
          "Birds build nests high up in green trees."
        ],
        "tips": "Chú ý nối âm \"use their\" /juːz ðeər/.",
        "vocab": [
          [
            "Habitat",
            "/ˈhæb.ɪ.tæt/",
            "noun",
            "Môi trường sống tự nhiên",
            "The forest is a bear's habitat.",
            "Rừng là môi trường sống của gấu.",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Sight",
            "/saɪt/",
            "noun",
            "Thị giác, khả năng nhìn",
            "Eagles have sharp sight.",
            "Đại bàng có thị lực rất sắc bén.",
            "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Shelter",
            "/ˈʃel.tər/",
            "noun",
            "Nơi trú ẩn, tổ",
            "Animals need safe shelter.",
            "Động vật cần nơi trú ẩn an toàn.",
            "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80"
          ]
        ],
        "listen": {
          "script": "Park ranger: Animals use their five senses to locate food and escape from predators in the deep wild forest.",
          "q": "Why do animals use their five senses?",
          "opts": [
            [
              "To locate food and escape from predators",
              true
            ],
            [
              "To watch television",
              false
            ]
          ],
          "exp": "Trích đoạn: \"to locate food and escape from predators\"."
        },
        "speaking": [
          [
            "Animals need shelter and food.",
            "/ˈæn.ɪ.məlz niːd ˈʃel.tər ænd fuːd/",
            "Animals need shelter and food"
          ]
        ],
        "reading": {
          "title": "Animal Homes",
          "passage": "Every animal needs a safe home called a shelter. Birds weave nests out of twigs. Rabbits dig cozy burrows beneath the ground. Fish swim inside coral reefs. Shelter keeps animals warm and safe from danger.",
          "q": "What is an animal's home called?",
          "opts": [
            [
              "A shelter",
              true
            ],
            [
              "A store",
              false
            ]
          ],
          "exp": "\"Every animal needs a safe home called a shelter\"."
        },
        "writing": {
          "prompt": "Sắp xếp từ thành câu:",
          "correct": "Birds build nests in trees",
          "words": [
            "in",
            "build",
            "nests",
            "Birds",
            "trees"
          ],
          "exp": "Chủ ngữ Birds + động từ build + tân ngữ nests + giới từ in trees."
        },
        "id": "us_g01_u4",
        "unitNumber": 4,
        "curriculumSeries": "Scott Foresman",
        "readingPractice": {
          "title": "Animal Homes",
          "passage": "Every animal needs a safe home called a shelter. Birds weave nests out of twigs. Rabbits dig cozy burrows beneath the ground. Fish swim inside coral reefs. Shelter keeps animals warm and safe from danger.",
          "question": "What is an animal's home called?",
          "options": [
            {
              "id": "opt_r_us_g01_u4_1",
              "label": "A",
              "text": "A shelter",
              "isCorrect": true
            },
            {
              "id": "opt_r_us_g01_u4_2",
              "label": "B",
              "text": "A store",
              "isCorrect": false
            }
          ],
          "explanation": "\"Every animal needs a safe home called a shelter\"."
        },
        "listeningPractice": {
          "script": "Park ranger: Animals use their five senses to locate food and escape from predators in the deep wild forest.",
          "question": "Why do animals use their five senses?",
          "options": [
            {
              "id": "opt_l_us_g01_u4_1",
              "label": "A",
              "text": "To locate food and escape from predators",
              "isCorrect": true
            },
            {
              "id": "opt_l_us_g01_u4_2",
              "label": "B",
              "text": "To watch television",
              "isCorrect": false
            }
          ],
          "explanation": "Trích đoạn: \"to locate food and escape from predators\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp từ thành câu:",
          "correctSentence": "Birds build nests in trees",
          "scrambledWords": [
            "in",
            "build",
            "nests",
            "Birds",
            "trees"
          ],
          "explanation": "Chủ ngữ Birds + động từ build + tân ngữ nests + giới từ in trees."
        }
      },
      {
        "num": 5,
        "title": "Unit 5: Matter: Solid, Liquid and Gas",
        "viTitle": "Chuyên đề: Vật chất & 3 Trạng thái của nước (CalSci Physical Science G1)",
        "series": "California Science",
        "overview": "Khám phá 3 trạng thái vật chất cơ bản: chất rắn (solid), chất lỏng (liquid) và chất khí (gas).",
        "grammar": "A [solid / liquid / gas] has + [its own shape / no shape].",
        "patterns": [
          "Ice is a solid and it has a fixed shape.",
          "Water is a liquid that flows into a glass."
        ],
        "tips": "Phát âm /kw/ trong liquid và /æ/ trong gas.",
        "vocab": [
          [
            "Solid",
            "/ˈsɒl.ɪd/",
            "noun",
            "Chất rắn",
            "An apple is a solid.",
            "Một quả táo là chất rắn.",
            "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Liquid",
            "/ˈlɪk.wɪd/",
            "noun",
            "Chất lỏng",
            "Water and milk are liquids.",
            "Nước và sữa là chất lỏng.",
            "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Gas",
            "/ɡæs/",
            "noun",
            "Chất khí",
            "Steam from a kettle is gas.",
            "Hơi nước bốc lên từ ấm là chất khí.",
            "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80"
          ]
        ],
        "listen": {
          "script": "Science teacher: All things are made of matter. Rocks are solids. Water is a liquid. And air is a gas that we breathe.",
          "q": "What is an example of a solid?",
          "opts": [
            [
              "A rock",
              true
            ],
            [
              "Air",
              false
            ]
          ],
          "exp": "\"Rocks are solids\"."
        },
        "speaking": [
          [
            "Water is a liquid.",
            "/ˈwɔː.tər ɪz ə ˈlɪk.wɪd/",
            "Water is a liquid"
          ]
        ],
        "reading": {
          "title": "Three Forms of Matter",
          "passage": "Everything around you is matter. A solid has its own shape, like a wooden pencil. A liquid takes the shape of its container, like sweet orange juice in a cup. A gas spreads out to fill any space, like steam in the air.",
          "q": "Which form of matter takes the shape of its container?",
          "opts": [
            [
              "A liquid",
              true
            ],
            [
              "A rock",
              false
            ]
          ],
          "exp": "\"A liquid takes the shape of its container\"."
        },
        "writing": {
          "prompt": "Sắp xếp từ thành câu:",
          "correct": "Ice melts into liquid water",
          "words": [
            "water",
            "into",
            "melts",
            "liquid",
            "Ice"
          ],
          "exp": "Chủ ngữ Ice + động từ melts + giới từ into + tân ngữ liquid water."
        },
        "id": "us_g01_u5",
        "unitNumber": 5,
        "curriculumSeries": "California Science",
        "readingPractice": {
          "title": "Three Forms of Matter",
          "passage": "Everything around you is matter. A solid has its own shape, like a wooden pencil. A liquid takes the shape of its container, like sweet orange juice in a cup. A gas spreads out to fill any space, like steam in the air.",
          "question": "Which form of matter takes the shape of its container?",
          "options": [
            {
              "id": "opt_r_us_g01_u5_1",
              "label": "A",
              "text": "A liquid",
              "isCorrect": true
            },
            {
              "id": "opt_r_us_g01_u5_2",
              "label": "B",
              "text": "A rock",
              "isCorrect": false
            }
          ],
          "explanation": "\"A liquid takes the shape of its container\"."
        },
        "listeningPractice": {
          "script": "Science teacher: All things are made of matter. Rocks are solids. Water is a liquid. And air is a gas that we breathe.",
          "question": "What is an example of a solid?",
          "options": [
            {
              "id": "opt_l_us_g01_u5_1",
              "label": "A",
              "text": "A rock",
              "isCorrect": true
            },
            {
              "id": "opt_l_us_g01_u5_2",
              "label": "B",
              "text": "Air",
              "isCorrect": false
            }
          ],
          "explanation": "\"Rocks are solids\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp từ thành câu:",
          "correctSentence": "Ice melts into liquid water",
          "scrambledWords": [
            "water",
            "into",
            "melts",
            "liquid",
            "Ice"
          ],
          "explanation": "Chủ ngữ Ice + động từ melts + giới từ into + tân ngữ liquid water."
        }
      },
      {
        "num": 6,
        "title": "Unit 6: Math in Nature: Counting, Shapes & Patterns",
        "viTitle": "Chuyên đề: Toán học trong Tự nhiên (Math Concept Reader G1)",
        "series": "Math Concept Readers",
        "overview": "Nhận biết hình dạng hình học (circle, square, triangle, rectangle) và quy luật lặp lại (patterns) trong tự nhiên.",
        "grammar": "There is / There are + [number] + [shapes / objects].",
        "patterns": [
          "The yellow sun looks like a giant circle.",
          "A honeycomb has many hexagon shapes."
        ],
        "tips": "Phát âm chuẩn âm /tʃ/ trong matches và /s/ trong shapes.",
        "vocab": [
          [
            "Circle",
            "/ˈsɜː.kəl/",
            "noun",
            "Hình tròn",
            "A coin has a circle shape.",
            "Đồng xu có hình tròn.",
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Triangle",
            "/ˈtraɪ.æŋ.ɡəl/",
            "noun",
            "Hình tam giác",
            "A slice of pizza is a triangle.",
            "Một miếng bánh pizza có hình tam giác.",
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=80"
          ],
          [
            "Pattern",
            "/ˈpæt.ən/",
            "noun",
            "Quy luật lặp lại, hoa văn",
            "Zebras have striped patterns.",
            "Ngựa vằn có hoa văn sọc vằn.",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          ]
        ],
        "listen": {
          "script": "Math guide: Look at the petals on the daisy! Let us count them: one, two, three, four, five! Five lovely white petals.",
          "q": "How many petals did the guide count?",
          "opts": [
            [
              "Five petals",
              true
            ],
            [
              "Twenty petals",
              false
            ]
          ],
          "exp": "Bài nghe nói: \"one, two, three, four, five! Five lovely white petals\"."
        },
        "speaking": [
          [
            "The sun is a circle.",
            "/ðə sʌn ɪz ə ˈsɜː.kəl/",
            "The sun is a circle"
          ]
        ],
        "reading": {
          "title": "Shapes Everywhere",
          "passage": "Look at your world! You can see shapes in every corner. A clock on the wall is a circle. A door is a tall rectangle. A rooftop can be a triangle. Finding shapes makes math exciting!",
          "q": "What shape is usually a clock on the wall?",
          "opts": [
            [
              "A circle",
              true
            ],
            [
              "A pyramid",
              false
            ]
          ],
          "exp": "\"A clock on the wall is a circle\"."
        },
        "writing": {
          "prompt": "Sắp xếp từ thành câu:",
          "correct": "There are four circles here",
          "words": [
            "four",
            "are",
            "There",
            "here",
            "circles"
          ],
          "exp": "Cấu trúc There are + số lượng + danh từ số nhiều + vị trí."
        },
        "id": "us_g01_u6",
        "unitNumber": 6,
        "curriculumSeries": "Math Concept Readers",
        "readingPractice": {
          "title": "Shapes Everywhere",
          "passage": "Look at your world! You can see shapes in every corner. A clock on the wall is a circle. A door is a tall rectangle. A rooftop can be a triangle. Finding shapes makes math exciting!",
          "question": "What shape is usually a clock on the wall?",
          "options": [
            {
              "id": "opt_r_us_g01_u6_1",
              "label": "A",
              "text": "A circle",
              "isCorrect": true
            },
            {
              "id": "opt_r_us_g01_u6_2",
              "label": "B",
              "text": "A pyramid",
              "isCorrect": false
            }
          ],
          "explanation": "\"A clock on the wall is a circle\"."
        },
        "listeningPractice": {
          "script": "Math guide: Look at the petals on the daisy! Let us count them: one, two, three, four, five! Five lovely white petals.",
          "question": "How many petals did the guide count?",
          "options": [
            {
              "id": "opt_l_us_g01_u6_1",
              "label": "A",
              "text": "Five petals",
              "isCorrect": true
            },
            {
              "id": "opt_l_us_g01_u6_2",
              "label": "B",
              "text": "Twenty petals",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe nói: \"one, two, three, four, five! Five lovely white petals\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp từ thành câu:",
          "correctSentence": "There are four circles here",
          "scrambledWords": [
            "four",
            "are",
            "There",
            "here",
            "circles"
          ],
          "explanation": "Cấu trúc There are + số lượng + danh từ số nhiều + vị trí."
        }
      }
    ]
  },
  {
    "grade": "Lớp 2 (Grade 2)",
    "gradeCode": "G02",
    "level": "primary",
    "levelName": "Tiểu học (Chuẩn Mỹ G2)",
    "driveFolderId": "1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
    "driveUrl": "https://drive.google.com/drive/folders/1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
    "textbooks": [
      "California Science CalSci LR G2",
      "Scott Foresman Reading Street G2",
      "Math Concept Readers G2",
      "Leveled Readers Above Level G2"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 2: Vòng đời sinh vật (Life Cycles), Địa hình & Đất đá (Landforms), Lực đẩy & Lực kéo (Push & Pull), và Hình học không gian.",
    "color": "emerald",
    "units": [
      {
        "id": "us_g02_u1",
        "unitNumber": 1,
        "title": "Unit 1: Plant and Animal Life Cycles",
        "vietnameseTitle": "Chuyên đề: Vòng đời của Thực vật & Động vật (California Science G2)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 02: Life Cycles. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Life Cycles.",
        "sentencePatterns": [
          "Scientists observe that life cycles plays a crucial role in nature.",
          "Understanding life cycle helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Life cycle (/ˈlaɪf ˌsaɪ.kəl/).",
        "vocabulary": [
          {
            "word": "Life cycle",
            "ipa": "/ˈlaɪf ˌsaɪ.kəl/",
            "type": "noun",
            "meaning": "Vòng đời sinh học",
            "example": "Life cycle is an essential concept in science.",
            "exampleVi": "Vòng đời sinh học là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Chrysalis",
            "ipa": "/ˈkrɪs.ə.lɪs/",
            "type": "noun",
            "meaning": "Kén bướm",
            "example": "Chrysalis is an essential concept in science.",
            "exampleVi": "Kén bướm là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Germinate",
            "ipa": "/ˈdʒɜː.mɪ.neɪt/",
            "type": "verb",
            "meaning": "Nảy mầm",
            "example": "Germinate is an essential concept in science.",
            "exampleVi": "Nảy mầm là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Life Cycles, we will explore key phenomena. Pay attention: What emerges from a chrysalis? The answer is evidently A butterfly.",
          "question": "What emerges from a chrysalis?",
          "options": [
            {
              "id": "opt_g02_u1_1",
              "label": "A",
              "text": "A butterfly",
              "isCorrect": true
            },
            {
              "id": "opt_g02_u1_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently A butterfly\"."
        },
        "speakingPractice": [
          {
            "phrase": "Life cycle is important.",
            "ipa": "/ˈlaɪf ˌsaɪ.kəl/",
            "prompt": "Luyện phát âm thuật ngữ Life cycle",
            "targetText": "Life cycle is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "From Seed to Sunflower",
          "passage": "A tiny black seed drops into warm soil. With spring rain and sunshine, it germinates. Roots spread down and a green shoot rises up. Soon bright yellow petals open toward the sun.",
          "question": "What helps the seed germinate?",
          "options": [
            {
              "id": "opt_r_g02_u1_1",
              "label": "A",
              "text": "Rain and sunshine",
              "isCorrect": true
            },
            {
              "id": "opt_r_g02_u1_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Rain and sunshine\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Life cycle is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Life cycle",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g02_u2",
        "unitNumber": 2,
        "title": "Unit 2: Earth's Landforms, Rocks and Soil",
        "vietnameseTitle": "Chuyên đề: Địa hình Trái Đất, Đá & Thổ nhưỡng (California Science G2)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 02: Earth Landforms. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Earth Landforms.",
        "sentencePatterns": [
          "Scientists observe that earth landforms plays a crucial role in nature.",
          "Understanding landform helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Landform (/ˈlænd.fɔːm/).",
        "vocabulary": [
          {
            "word": "Landform",
            "ipa": "/ˈlænd.fɔːm/",
            "type": "noun",
            "meaning": "Dạng địa hình",
            "example": "Landform is an essential concept in science.",
            "exampleVi": "Dạng địa hình là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Canyon",
            "ipa": "/ˈkæn.jən/",
            "type": "noun",
            "meaning": "Hẻm núi sâu",
            "example": "Canyon is an essential concept in science.",
            "exampleVi": "Hẻm núi sâu là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Weathering",
            "ipa": "/ˈweð.ər.ɪŋ/",
            "type": "noun",
            "meaning": "Sự phong hóa đá",
            "example": "Weathering is an essential concept in science.",
            "exampleVi": "Sự phong hóa đá là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Earth Landforms, we will explore key phenomena. Pay attention: What carved deep canyons over millions of years? The answer is evidently Flowing river water.",
          "question": "What carved deep canyons over millions of years?",
          "options": [
            {
              "id": "opt_g02_u2_1",
              "label": "A",
              "text": "Flowing river water",
              "isCorrect": true
            },
            {
              "id": "opt_g02_u2_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently Flowing river water\"."
        },
        "speakingPractice": [
          {
            "phrase": "Landform is important.",
            "ipa": "/ˈlænd.fɔːm/",
            "prompt": "Luyện phát âm thuật ngữ Landform",
            "targetText": "Landform is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Mountains and Valleys",
          "passage": "Earth has high mountains and low valleys. Fast rivers carve steep canyons through solid rock. Wind and water constantly shape the surface of our planet.",
          "question": "What is a low area between mountains?",
          "options": [
            {
              "id": "opt_r_g02_u2_1",
              "label": "A",
              "text": "A valley",
              "isCorrect": true
            },
            {
              "id": "opt_r_g02_u2_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"A valley\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Landform is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Landform",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g02_u3",
        "unitNumber": 3,
        "title": "Unit 3: The Water Cycle and Cloud Types",
        "vietnameseTitle": "Chuyên đề: Vòng tuần hoàn của Nước & Các loại Mây (Scott Foresman G2)",
        "curriculumSeries": "Scott Foresman",
        "driveLink": "https://drive.google.com/drive/folders/1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 02: The Water Cycle. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for The Water Cycle.",
        "sentencePatterns": [
          "Scientists observe that the water cycle plays a crucial role in nature.",
          "Understanding evaporation helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Evaporation (/ɪˌvæp.əˈreɪ.ʃən/).",
        "vocabulary": [
          {
            "word": "Evaporation",
            "ipa": "/ɪˌvæp.əˈreɪ.ʃən/",
            "type": "noun",
            "meaning": "Sự bay hơi nước",
            "example": "Evaporation is an essential concept in science.",
            "exampleVi": "Sự bay hơi nước là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Condensation",
            "ipa": "/ˌkɒn.denˈseɪ.ʃən/",
            "type": "noun",
            "meaning": "Sự ngưng tụ",
            "example": "Condensation is an essential concept in science.",
            "exampleVi": "Sự ngưng tụ là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Precipitation",
            "ipa": "/prɪˌsɪp.ɪˈteɪ.ʃən/",
            "type": "noun",
            "meaning": "Lượng mưa rơi xuống",
            "example": "Precipitation is an essential concept in science.",
            "exampleVi": "Lượng mưa rơi xuống là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on The Water Cycle, we will explore key phenomena. Pay attention: What happens when water vapor cools high in the sky? The answer is evidently It condenses into clouds.",
          "question": "What happens when water vapor cools high in the sky?",
          "options": [
            {
              "id": "opt_g02_u3_1",
              "label": "A",
              "text": "It condenses into clouds",
              "isCorrect": true
            },
            {
              "id": "opt_g02_u3_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently It condenses into clouds\"."
        },
        "speakingPractice": [
          {
            "phrase": "Evaporation is important.",
            "ipa": "/ɪˌvæp.əˈreɪ.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ Evaporation",
            "targetText": "Evaporation is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Water Goes Round",
          "passage": "Water from oceans warms in the sun and turns into invisible vapor. As it rises, it cools and condenses into fluffy clouds. When droplets get heavy, rain falls back to Earth.",
          "question": "What creates rain?",
          "options": [
            {
              "id": "opt_r_g02_u3_1",
              "label": "A",
              "text": "Heavy water droplets in clouds",
              "isCorrect": true
            },
            {
              "id": "opt_r_g02_u3_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Heavy water droplets in clouds\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Evaporation is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Evaporation",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "Scott Foresman"
      },
      {
        "id": "us_g02_u4",
        "unitNumber": 4,
        "title": "Unit 4: Forces, Motion, Push and Pull",
        "vietnameseTitle": "Chuyên đề: Lực học: Lực đẩy, Lực kéo & Chuyển động (California Science G2)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 02: Forces and Motion. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Forces and Motion.",
        "sentencePatterns": [
          "Scientists observe that forces and motion plays a crucial role in nature.",
          "Understanding force helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Force (/fɔːs/).",
        "vocabulary": [
          {
            "word": "Force",
            "ipa": "/fɔːs/",
            "type": "noun",
            "meaning": "Lực tác dụng",
            "example": "Force is an essential concept in science.",
            "exampleVi": "Lực tác dụng là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Gravity",
            "ipa": "/ˈɡræv.ə.ti/",
            "type": "noun",
            "meaning": "Trọng lực Trái Đất",
            "example": "Gravity is an essential concept in science.",
            "exampleVi": "Trọng lực Trái Đất là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Friction",
            "ipa": "/ˈfrɪk.ʃən/",
            "type": "noun",
            "meaning": "Lực ma sát",
            "example": "Friction is an essential concept in science.",
            "exampleVi": "Lực ma sát là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Forces and Motion, we will explore key phenomena. Pay attention: What force pulls dropped balls toward the ground? The answer is evidently Gravity.",
          "question": "What force pulls dropped balls toward the ground?",
          "options": [
            {
              "id": "opt_g02_u4_1",
              "label": "A",
              "text": "Gravity",
              "isCorrect": true
            },
            {
              "id": "opt_g02_u4_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently Gravity\"."
        },
        "speakingPractice": [
          {
            "phrase": "Force is important.",
            "ipa": "/fɔːs/",
            "prompt": "Luyện phát âm thuật ngữ Force",
            "targetText": "Force is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Things in Motion",
          "passage": "A push moves an object away from you. A pull brings it closer. Friction is the force that slows rolling objects down when they rub against the grass.",
          "question": "What does friction do to rolling objects?",
          "options": [
            {
              "id": "opt_r_g02_u4_1",
              "label": "A",
              "text": "It slows them down",
              "isCorrect": true
            },
            {
              "id": "opt_r_g02_u4_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"It slows them down\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Force is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Force",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g02_u5",
        "unitNumber": 5,
        "title": "Unit 5: Sound and Light Energy",
        "vietnameseTitle": "Chuyên đề: Năng lượng Âm thanh & Ánh sáng (California Science G2)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 02: Sound & Light. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Sound & Light.",
        "sentencePatterns": [
          "Scientists observe that sound & light plays a crucial role in nature.",
          "Understanding vibration helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Vibration (/vaɪˈbreɪ.ʃən/).",
        "vocabulary": [
          {
            "word": "Vibration",
            "ipa": "/vaɪˈbreɪ.ʃən/",
            "type": "noun",
            "meaning": "Sự rung động",
            "example": "Vibration is an essential concept in science.",
            "exampleVi": "Sự rung động là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Pitch",
            "ipa": "/pɪtʃ/",
            "type": "noun",
            "meaning": "Cao độ âm thanh",
            "example": "Pitch is an essential concept in science.",
            "exampleVi": "Cao độ âm thanh là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Reflection",
            "ipa": "/rɪˈflek.ʃən/",
            "type": "noun",
            "meaning": "Sự phản chiếu ánh sáng",
            "example": "Reflection is an essential concept in science.",
            "exampleVi": "Sự phản chiếu ánh sáng là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Sound & Light, we will explore key phenomena. Pay attention: How is sound produced? The answer is evidently Through rapid vibrations.",
          "question": "How is sound produced?",
          "options": [
            {
              "id": "opt_g02_u5_1",
              "label": "A",
              "text": "Through rapid vibrations",
              "isCorrect": true
            },
            {
              "id": "opt_g02_u5_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently Through rapid vibrations\"."
        },
        "speakingPractice": [
          {
            "phrase": "Vibration is important.",
            "ipa": "/vaɪˈbreɪ.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ Vibration",
            "targetText": "Vibration is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Listen to the Sound",
          "passage": "Every sound begins with a vibration. When guitar strings vibrate back and forth, they send waves through the air to your ears. Tight strings make high pitches.",
          "question": "What do vibrating strings make?",
          "options": [
            {
              "id": "opt_r_g02_u5_1",
              "label": "A",
              "text": "Sound waves",
              "isCorrect": true
            },
            {
              "id": "opt_r_g02_u5_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Sound waves\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Vibration is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Vibration",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g02_u6",
        "unitNumber": 6,
        "title": "Unit 6: Geometry & Fractions in Daily Life",
        "vietnameseTitle": "Chuyên đề: Toán hình học & Phân số thực tế (Math Concept Readers G2)",
        "curriculumSeries": "Math Concept Readers",
        "driveLink": "https://drive.google.com/drive/folders/1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 02: Math Concepts. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Math Concepts.",
        "sentencePatterns": [
          "Scientists observe that math concepts plays a crucial role in nature.",
          "Understanding fraction helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Fraction (/ˈfræk.ʃən/).",
        "vocabulary": [
          {
            "word": "Fraction",
            "ipa": "/ˈfræk.ʃən/",
            "type": "noun",
            "meaning": "Phân số toán học",
            "example": "Fraction is an essential concept in science.",
            "exampleVi": "Phân số toán học là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Equal parts",
            "ipa": "/ˈiː.kwəl pɑːts/",
            "type": "noun",
            "meaning": "Các phần bằng nhau",
            "example": "Equal parts is an essential concept in science.",
            "exampleVi": "Các phần bằng nhau là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Half",
            "ipa": "/hɑːf/",
            "type": "noun",
            "meaning": "Một nửa (1/2)",
            "example": "Half is an essential concept in science.",
            "exampleVi": "Một nửa (1/2) là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Math Concepts, we will explore key phenomena. Pay attention: If you cut an apple into two equal pieces, what is one piece called? The answer is evidently One half.",
          "question": "If you cut an apple into two equal pieces, what is one piece called?",
          "options": [
            {
              "id": "opt_g02_u6_1",
              "label": "A",
              "text": "One half",
              "isCorrect": true
            },
            {
              "id": "opt_g02_u6_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently One half\"."
        },
        "speakingPractice": [
          {
            "phrase": "Fraction is important.",
            "ipa": "/ˈfræk.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ Fraction",
            "targetText": "Fraction is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Sharing a Pizza",
          "passage": "Four friends share a round pizza. They slice it into four equal pieces. Each person gets one quarter of the delicious pie. Fractions make sharing fair and easy.",
          "question": "What fraction does each person get?",
          "options": [
            {
              "id": "opt_r_g02_u6_1",
              "label": "A",
              "text": "One quarter (1/4)",
              "isCorrect": true
            },
            {
              "id": "opt_r_g02_u6_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"One quarter (1/4)\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Fraction is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Fraction",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "Math Concept Readers"
      }
    ]
  },
  {
    "grade": "Lớp 3 (Grade 3)",
    "gradeCode": "G03",
    "level": "primary",
    "levelName": "Tiểu học (Chuẩn Mỹ G3)",
    "driveFolderId": "1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
    "driveUrl": "https://drive.google.com/drive/folders/1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
    "textbooks": [
      "California Science CalSci LR G3",
      "Scott Foresman Reading Street G3",
      "Concept Literacy Leveled Readers G3",
      "Math Concept Readers G3"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 3: Thích nghi sinh thái (Adaptations), Năng lượng tái tạo (Renewable Resources), Máy cơ đơn giản (Simple Machines) và Hệ Mặt Trời.",
    "color": "emerald",
    "units": [
      {
        "id": "us_g03_u1",
        "unitNumber": 1,
        "title": "Unit 1: Plant and Animal Adaptations in Habitats",
        "vietnameseTitle": "Chuyên đề: Sự thích nghi của Động Thực vật theo Môi trường (California Science G3)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 03: Adaptations. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Adaptations.",
        "sentencePatterns": [
          "Scientists observe that adaptations plays a crucial role in nature.",
          "Understanding adaptation helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Adaptation (/ˌæd.æpˈteɪ.ʃən/).",
        "vocabulary": [
          {
            "word": "Adaptation",
            "ipa": "/ˌæd.æpˈteɪ.ʃən/",
            "type": "noun",
            "meaning": "Đặc tính thích nghi",
            "example": "Adaptation is an essential concept in science.",
            "exampleVi": "Đặc tính thích nghi là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Camouflage",
            "ipa": "/ˈkæm.ə.flɑːʒ/",
            "type": "noun",
            "meaning": "Khả năng ngụy trang",
            "example": "Camouflage is an essential concept in science.",
            "exampleVi": "Khả năng ngụy trang là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Hibernate",
            "ipa": "/ˈhaɪ.bə.neɪt/",
            "type": "verb",
            "meaning": "Ngủ đông",
            "example": "Hibernate is an essential concept in science.",
            "exampleVi": "Ngủ đông là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Adaptations, we will explore key phenomena. Pay attention: How does camouflage protect animals? The answer is evidently It helps them blend into surroundings.",
          "question": "How does camouflage protect animals?",
          "options": [
            {
              "id": "opt_g03_u1_1",
              "label": "A",
              "text": "It helps them blend into surroundings",
              "isCorrect": true
            },
            {
              "id": "opt_g03_u1_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently It helps them blend into surroundings\"."
        },
        "speakingPractice": [
          {
            "phrase": "Adaptation is important.",
            "ipa": "/ˌæd.æpˈteɪ.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ Adaptation",
            "targetText": "Adaptation is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Desert Survivors",
          "passage": "The cactus survives in hot deserts by storing water in thick, fleshy stems. Its sharp spines protect it from thirsty animals. Camels store fat in their humps for energy.",
          "question": "Where does a cactus store water?",
          "options": [
            {
              "id": "opt_r_g03_u1_1",
              "label": "A",
              "text": "In its thick stems",
              "isCorrect": true
            },
            {
              "id": "opt_r_g03_u1_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"In its thick stems\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Adaptation is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Adaptation",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g03_u2",
        "unitNumber": 2,
        "title": "Unit 2: Earth's Natural Resources and Conservation",
        "vietnameseTitle": "Chuyên đề: Tài nguyên Thiên nhiên & Bảo vệ Môi trường (California Science G3)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 03: Earth Resources. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Earth Resources.",
        "sentencePatterns": [
          "Scientists observe that earth resources plays a crucial role in nature.",
          "Understanding renewable helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Renewable (/rɪˈnjuː.ə.bəl/).",
        "vocabulary": [
          {
            "word": "Renewable",
            "ipa": "/rɪˈnjuː.ə.bəl/",
            "type": "adj",
            "meaning": "Có thể tái tạo",
            "example": "Renewable is an essential concept in science.",
            "exampleVi": "Có thể tái tạo là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Fossil fuel",
            "ipa": "/ˈfɒs.əl ˌfjuː.əl/",
            "type": "noun",
            "meaning": "Nhiên liệu hóa thạch",
            "example": "Fossil fuel is an essential concept in science.",
            "exampleVi": "Nhiên liệu hóa thạch là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Conserve",
            "ipa": "/kənˈsɜːv/",
            "type": "verb",
            "meaning": "Bảo tồn, tiết kiệm",
            "example": "Conserve is an essential concept in science.",
            "exampleVi": "Bảo tồn, tiết kiệm là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Earth Resources, we will explore key phenomena. Pay attention: Which energy source is renewable? The answer is evidently Solar and wind energy.",
          "question": "Which energy source is renewable?",
          "options": [
            {
              "id": "opt_g03_u2_1",
              "label": "A",
              "text": "Solar and wind energy",
              "isCorrect": true
            },
            {
              "id": "opt_g03_u2_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently Solar and wind energy\"."
        },
        "speakingPractice": [
          {
            "phrase": "Renewable is important.",
            "ipa": "/rɪˈnjuː.ə.bəl/",
            "prompt": "Luyện phát âm thuật ngữ Renewable",
            "targetText": "Renewable is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Precious Earth",
          "passage": "Wind and sunlight are renewable resources that never run out. Coal and oil are fossil fuels that take millions of years to form. Conserving clean water protects our future.",
          "question": "Why should we conserve energy?",
          "options": [
            {
              "id": "opt_r_g03_u2_1",
              "label": "A",
              "text": "Because fossil fuels are limited",
              "isCorrect": true
            },
            {
              "id": "opt_r_g03_u2_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Because fossil fuels are limited\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Renewable is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Renewable",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g03_u3",
        "unitNumber": 3,
        "title": "Unit 3: Simple Machines: Levers, Pulleys & Inclined Planes",
        "vietnameseTitle": "Chuyên đề: Các Máy cơ Đơn giản: Đòn bẩy, Ròng rọc & Mặt phẳng nghiêng (California Science G3)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 03: Simple Machines. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Simple Machines.",
        "sentencePatterns": [
          "Scientists observe that simple machines plays a crucial role in nature.",
          "Understanding lever helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Lever (/ˈliː.vər/).",
        "vocabulary": [
          {
            "word": "Lever",
            "ipa": "/ˈliː.vər/",
            "type": "noun",
            "meaning": "Đòn bẩy",
            "example": "Lever is an essential concept in science.",
            "exampleVi": "Đòn bẩy là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Pulley",
            "ipa": "/ˈpʊl.i/",
            "type": "noun",
            "meaning": "Ròng rọc",
            "example": "Pulley is an essential concept in science.",
            "exampleVi": "Ròng rọc là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Inclined plane",
            "ipa": "/ɪnˌklaɪnd ˈpleɪn/",
            "type": "noun",
            "meaning": "Mặt phẳng nghiêng (dốc)",
            "example": "Inclined plane is an essential concept in science.",
            "exampleVi": "Mặt phẳng nghiêng (dốc) là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Simple Machines, we will explore key phenomena. Pay attention: What simple machine helps lift heavy flags up a pole? The answer is evidently A pulley.",
          "question": "What simple machine helps lift heavy flags up a pole?",
          "options": [
            {
              "id": "opt_g03_u3_1",
              "label": "A",
              "text": "A pulley",
              "isCorrect": true
            },
            {
              "id": "opt_g03_u3_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently A pulley\"."
        },
        "speakingPractice": [
          {
            "phrase": "Lever is important.",
            "ipa": "/ˈliː.vər/",
            "prompt": "Luyện phát âm thuật ngữ Lever",
            "targetText": "Lever is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Work Made Easier",
          "passage": "Simple machines make heavy work easier by changing the direction or strength of a force. Ramps let wheelchairs roll up easily. Pulleys lift heavy flags to the top of tall masts.",
          "question": "How do ramps help people?",
          "options": [
            {
              "id": "opt_r_g03_u3_1",
              "label": "A",
              "text": "They make climbing up easier",
              "isCorrect": true
            },
            {
              "id": "opt_r_g03_u3_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"They make climbing up easier\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Lever is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Lever",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g03_u4",
        "unitNumber": 4,
        "title": "Unit 4: Matter Changes: Heating, Cooling & Mixtures",
        "vietnameseTitle": "Chuyên đề: Biến đổi Vật chất: Nhiệt độ & Hỗn hợp (California Science G3)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 03: Physical Changes. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Physical Changes.",
        "sentencePatterns": [
          "Scientists observe that physical changes plays a crucial role in nature.",
          "Understanding physical change helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Physical change (/ˈfɪz.ɪ.kəl tʃeɪndʒ/).",
        "vocabulary": [
          {
            "word": "Physical change",
            "ipa": "/ˈfɪz.ɪ.kəl tʃeɪndʒ/",
            "type": "noun",
            "meaning": "Biến đổi vật lý",
            "example": "Physical change is an essential concept in science.",
            "exampleVi": "Biến đổi vật lý là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Dissolve",
            "ipa": "/dɪˈzɒlv/",
            "type": "verb",
            "meaning": "Hòa tan",
            "example": "Dissolve is an essential concept in science.",
            "exampleVi": "Hòa tan là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Solution",
            "ipa": "/səˈluː.ʃən/",
            "type": "noun",
            "meaning": "Dung dịch đồng nhất",
            "example": "Solution is an essential concept in science.",
            "exampleVi": "Dung dịch đồng nhất là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Physical Changes, we will explore key phenomena. Pay attention: What happens when sugar is stirred into warm tea? The answer is evidently It dissolves into a sweet solution.",
          "question": "What happens when sugar is stirred into warm tea?",
          "options": [
            {
              "id": "opt_g03_u4_1",
              "label": "A",
              "text": "It dissolves into a sweet solution",
              "isCorrect": true
            },
            {
              "id": "opt_g03_u4_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently It dissolves into a sweet solution\"."
        },
        "speakingPractice": [
          {
            "phrase": "Physical change is important.",
            "ipa": "/ˈfɪz.ɪ.kəl tʃeɪndʒ/",
            "prompt": "Luyện phát âm thuật ngữ Physical change",
            "targetText": "Physical change is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Mixing and Melting",
          "passage": "When ice melts into water, its shape changes, but it is still water. When salt dissolves completely into warm soup, it forms a clear solution. These are physical changes.",
          "question": "Is melting ice a physical change?",
          "options": [
            {
              "id": "opt_r_g03_u4_1",
              "label": "A",
              "text": "Yes, because it is still water",
              "isCorrect": true
            },
            {
              "id": "opt_r_g03_u4_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Yes, because it is still water\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Physical change is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Physical change",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g03_u5",
        "unitNumber": 5,
        "title": "Unit 5: The Solar System: Sun, Earth and Moon Phases",
        "vietnameseTitle": "Chuyên đề: Hệ Mặt Trời & Các Pha của Mặt Trăng (Scott Foresman G3)",
        "curriculumSeries": "Scott Foresman",
        "driveLink": "https://drive.google.com/drive/folders/1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 03: Astronomy. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Astronomy.",
        "sentencePatterns": [
          "Scientists observe that astronomy plays a crucial role in nature.",
          "Understanding orbit helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Orbit (/ˈɔː.bɪt/).",
        "vocabulary": [
          {
            "word": "Orbit",
            "ipa": "/ˈɔː.bɪt/",
            "type": "verb/noun",
            "meaning": "Quỹ đạo quay",
            "example": "Orbit is an essential concept in science.",
            "exampleVi": "Quỹ đạo quay là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Solar system",
            "ipa": "/ˈsəʊ.lər ˌsɪs.təm/",
            "type": "noun",
            "meaning": "Hệ Mặt Trời",
            "example": "Solar system is an essential concept in science.",
            "exampleVi": "Hệ Mặt Trời là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Crescent",
            "ipa": "/ˈkres.ənt/",
            "type": "noun",
            "meaning": "Hình trăng lưỡi liềm",
            "example": "Crescent is an essential concept in science.",
            "exampleVi": "Hình trăng lưỡi liềm là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Astronomy, we will explore key phenomena. Pay attention: How long does Earth take to orbit the Sun once? The answer is evidently One year (365 days).",
          "question": "How long does Earth take to orbit the Sun once?",
          "options": [
            {
              "id": "opt_g03_u5_1",
              "label": "A",
              "text": "One year (365 days)",
              "isCorrect": true
            },
            {
              "id": "opt_g03_u5_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently One year (365 days)\"."
        },
        "speakingPractice": [
          {
            "phrase": "Orbit is important.",
            "ipa": "/ˈɔː.bɪt/",
            "prompt": "Luyện phát âm thuật ngữ Orbit",
            "targetText": "Orbit is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Our Cosmic Neighborhood",
          "passage": "Eight planets orbit around the giant burning star called our Sun. The Moon travels around Earth every month, reflecting sunlight in changing shapes called lunar phases.",
          "question": "Why does the Moon appear to change shape?",
          "options": [
            {
              "id": "opt_r_g03_u5_1",
              "label": "A",
              "text": "Because we see different lit angles",
              "isCorrect": true
            },
            {
              "id": "opt_r_g03_u5_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Because we see different lit angles\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Orbit is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Orbit",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "Scott Foresman"
      },
      {
        "id": "us_g03_u6",
        "unitNumber": 6,
        "title": "Unit 6: Math Concept: Measurements, Perimeter & Area",
        "vietnameseTitle": "Chuyên đề: Toán đo lường: Chu vi, Diện tích & Thể tích (Math Concept Readers G3)",
        "curriculumSeries": "Math Concept Readers",
        "driveLink": "https://drive.google.com/drive/folders/1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 03: Measurement. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Measurement.",
        "sentencePatterns": [
          "Scientists observe that measurement plays a crucial role in nature.",
          "Understanding perimeter helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Perimeter (/pəˈrɪm.ɪ.tər/).",
        "vocabulary": [
          {
            "word": "Perimeter",
            "ipa": "/pəˈrɪm.ɪ.tər/",
            "type": "noun",
            "meaning": "Chu vi hình học",
            "example": "Perimeter is an essential concept in science.",
            "exampleVi": "Chu vi hình học là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Area",
            "ipa": "/ˈeə.ri.ə/",
            "type": "noun",
            "meaning": "Diện tích bề mặt",
            "example": "Area is an essential concept in science.",
            "exampleVi": "Diện tích bề mặt là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Square unit",
            "ipa": "/skweər ˈjuː.nɪt/",
            "type": "noun",
            "meaning": "Đơn vị vuông",
            "example": "Square unit is an essential concept in science.",
            "exampleVi": "Đơn vị vuông là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Measurement, we will explore key phenomena. Pay attention: How do you find the perimeter of a rectangle? The answer is evidently Add up the lengths of all four sides.",
          "question": "How do you find the perimeter of a rectangle?",
          "options": [
            {
              "id": "opt_g03_u6_1",
              "label": "A",
              "text": "Add up the lengths of all four sides",
              "isCorrect": true
            },
            {
              "id": "opt_g03_u6_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently Add up the lengths of all four sides\"."
        },
        "speakingPractice": [
          {
            "phrase": "Perimeter is important.",
            "ipa": "/pəˈrɪm.ɪ.tər/",
            "prompt": "Luyện phát âm thuật ngữ Perimeter",
            "targetText": "Perimeter is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Fencing the Garden",
          "passage": "Farmer Dan wants to build a wooden fence around his vegetable patch. He measures each side: 10 meters and 5 meters. The perimeter is 30 meters. He needs 30 meters of fence.",
          "question": "What is the perimeter in the passage?",
          "options": [
            {
              "id": "opt_r_g03_u6_1",
              "label": "A",
              "text": "30 meters",
              "isCorrect": true
            },
            {
              "id": "opt_r_g03_u6_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"30 meters\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Perimeter is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Perimeter",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "Math Concept Readers"
      }
    ]
  },
  {
    "grade": "Lớp 4 (Grade 4)",
    "gradeCode": "G04",
    "level": "primary",
    "levelName": "Tiểu học (Chuẩn Mỹ G4)",
    "driveFolderId": "1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
    "driveUrl": "https://drive.google.com/drive/folders/1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
    "textbooks": [
      "California Science CalSci LR G4",
      "Scott Foresman Reading Street G4",
      "Math Concept Readers G4",
      "Sound tracks G04"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 4: Lưới thức ăn sinh thái (Food Webs), Tầng địa chất & Hóa thạch (Fossils), Mạch điện & Sóng ánh sáng (Electrical Circuits & Waves).",
    "color": "emerald",
    "units": [
      {
        "id": "us_g04_u1",
        "unitNumber": 1,
        "title": "Unit 1: Ecosystems & Food Webs: Energy Flow",
        "vietnameseTitle": "Chuyên đề: Hệ Sinh Thái & Chuỗi Thức Ăn (California Science G4)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 04: Ecosystems. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Ecosystems.",
        "sentencePatterns": [
          "Scientists observe that ecosystems plays a crucial role in nature.",
          "Understanding producer helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Producer (/prəˈdʒuː.sər/).",
        "vocabulary": [
          {
            "word": "Producer",
            "ipa": "/prəˈdʒuː.sər/",
            "type": "noun",
            "meaning": "Sinh vật sản xuất (cây cối)",
            "example": "Producer is an essential concept in science.",
            "exampleVi": "Sinh vật sản xuất (cây cối) là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Consumer",
            "ipa": "/kənˈsjuː.mər/",
            "type": "noun",
            "meaning": "Sinh vật tiêu thụ",
            "example": "Consumer is an essential concept in science.",
            "exampleVi": "Sinh vật tiêu thụ là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Decomposer",
            "ipa": "/ˌdiː.kəmˈpəʊ.zər/",
            "type": "noun",
            "meaning": "Sinh vật phân giải",
            "example": "Decomposer is an essential concept in science.",
            "exampleVi": "Sinh vật phân giải là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Ecosystems, we will explore key phenomena. Pay attention: Where does all energy in a food chain originate? The answer is evidently The Sun.",
          "question": "Where does all energy in a food chain originate?",
          "options": [
            {
              "id": "opt_g04_u1_1",
              "label": "A",
              "text": "The Sun",
              "isCorrect": true
            },
            {
              "id": "opt_g04_u1_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently The Sun\"."
        },
        "speakingPractice": [
          {
            "phrase": "Producer is important.",
            "ipa": "/prəˈdʒuː.sər/",
            "prompt": "Luyện phát âm thuật ngữ Producer",
            "targetText": "Producer is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "The Web of Life",
          "passage": "Green plants are producers because they make food using sunlight. Herbivores eat plants, while carnivores hunt herbivores. Decomposers recycle nutrients back into the soil.",
          "question": "What role do green plants play?",
          "options": [
            {
              "id": "opt_r_g04_u1_1",
              "label": "A",
              "text": "They produce food via sunlight",
              "isCorrect": true
            },
            {
              "id": "opt_r_g04_u1_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"They produce food via sunlight\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Producer is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Producer",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g04_u2",
        "unitNumber": 2,
        "title": "Unit 2: Rock Layers, Fossils & Earth's History",
        "vietnameseTitle": "Chuyên đề: Các Lớp Đá, Hóa Thạch & Lịch Sử Trái Đất (California Science G4)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 04: Geology. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Geology.",
        "sentencePatterns": [
          "Scientists observe that geology plays a crucial role in nature.",
          "Understanding sedimentary rock helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Sedimentary rock (/ˌsed.ɪˈmen.tər.i rɒk/).",
        "vocabulary": [
          {
            "word": "Sedimentary rock",
            "ipa": "/ˌsed.ɪˈmen.tər.i rɒk/",
            "type": "noun",
            "meaning": "Đá trầm tích",
            "example": "Sedimentary rock is an essential concept in science.",
            "exampleVi": "Đá trầm tích là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Fossil",
            "ipa": "/ˈfɒs.əl/",
            "type": "noun",
            "meaning": "Hóa thạch cổ sinh vật",
            "example": "Fossil is an essential concept in science.",
            "exampleVi": "Hóa thạch cổ sinh vật là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Paleontologist",
            "ipa": "/ˌpeɪ.li.ɒnˈtɒl.ə.dʒɪst/",
            "type": "noun",
            "meaning": "Nhà cổ sinh vật học",
            "example": "Paleontologist is an essential concept in science.",
            "exampleVi": "Nhà cổ sinh vật học là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Geology, we will explore key phenomena. Pay attention: Where are most dinosaur fossils discovered? The answer is evidently In sedimentary rock layers.",
          "question": "Where are most dinosaur fossils discovered?",
          "options": [
            {
              "id": "opt_g04_u2_1",
              "label": "A",
              "text": "In sedimentary rock layers",
              "isCorrect": true
            },
            {
              "id": "opt_g04_u2_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently In sedimentary rock layers\"."
        },
        "speakingPractice": [
          {
            "phrase": "Sedimentary rock is important.",
            "ipa": "/ˌsed.ɪˈmen.tər.i rɒk/",
            "prompt": "Luyện phát âm thuật ngữ Sedimentary rock",
            "targetText": "Sedimentary rock is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Clues in the Stone",
          "passage": "Over millions of years, layers of mud and sand hardened into sedimentary rock. When ancient animals died, their bones were buried. Today, fossils reveal dinosaurs that roamed long ago.",
          "question": "What do fossils teach scientists?",
          "options": [
            {
              "id": "opt_r_g04_u2_1",
              "label": "A",
              "text": "How prehistoric creatures lived",
              "isCorrect": true
            },
            {
              "id": "opt_r_g04_u2_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"How prehistoric creatures lived\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Sedimentary rock is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Sedimentary rock",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g04_u3",
        "unitNumber": 3,
        "title": "Unit 3: Electricity, Magnetism & Closed Circuits",
        "vietnameseTitle": "Chuyên đề: Điện học, Từ tính & Mạch điện kín (California Science G4)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 04: Electricity. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Electricity.",
        "sentencePatterns": [
          "Scientists observe that electricity plays a crucial role in nature.",
          "Understanding circuit helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Circuit (/ˈsɜː.kɪt/).",
        "vocabulary": [
          {
            "word": "Circuit",
            "ipa": "/ˈsɜː.kɪt/",
            "type": "noun",
            "meaning": "Mạch điện",
            "example": "Circuit is an essential concept in science.",
            "exampleVi": "Mạch điện là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Conductor",
            "ipa": "/kənˈdʌk.tər/",
            "type": "noun",
            "meaning": "Vật dẫn điện (đồng, sắt)",
            "example": "Conductor is an essential concept in science.",
            "exampleVi": "Vật dẫn điện (đồng, sắt) là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Insulator",
            "ipa": "/ˈɪn.sjə.leɪ.tər/",
            "type": "noun",
            "meaning": "Vật cách điện (cao su, nhựa)",
            "example": "Insulator is an essential concept in science.",
            "exampleVi": "Vật cách điện (cao su, nhựa) là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Electricity, we will explore key phenomena. Pay attention: Why does copper wire make a good conductor? The answer is evidently It allows electric current to flow freely.",
          "question": "Why does copper wire make a good conductor?",
          "options": [
            {
              "id": "opt_g04_u3_1",
              "label": "A",
              "text": "It allows electric current to flow freely",
              "isCorrect": true
            },
            {
              "id": "opt_g04_u3_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently It allows electric current to flow freely\"."
        },
        "speakingPractice": [
          {
            "phrase": "Circuit is important.",
            "ipa": "/ˈsɜː.kɪt/",
            "prompt": "Luyện phát âm thuật ngữ Circuit",
            "targetText": "Circuit is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Lighting the Bulb",
          "passage": "Electric current flows only when a circuit is completely closed. Copper wire conducts electrons easily. Plastic coating around wires acts as an insulator, keeping users safe.",
          "question": "What happens if a circuit is open?",
          "options": [
            {
              "id": "opt_r_g04_u3_1",
              "label": "A",
              "text": "The light bulb turns off",
              "isCorrect": true
            },
            {
              "id": "opt_r_g04_u3_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"The light bulb turns off\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Circuit is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Circuit",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g04_u4",
        "unitNumber": 4,
        "title": "Unit 4: Waves, Light Reflection and Refraction",
        "vietnameseTitle": "Chuyên đề: Sóng, Sự Phản Xạ & Khúc Xạ Ánh Sáng (California Science G4)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 04: Optics and Waves. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Optics and Waves.",
        "sentencePatterns": [
          "Scientists observe that optics and waves plays a crucial role in nature.",
          "Understanding reflect helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Reflect (/rɪˈflekt/).",
        "vocabulary": [
          {
            "word": "Reflect",
            "ipa": "/rɪˈflekt/",
            "type": "verb",
            "meaning": "Phản xạ ánh sáng",
            "example": "Reflect is an essential concept in science.",
            "exampleVi": "Phản xạ ánh sáng là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Refract",
            "ipa": "/rɪˈfrækt/",
            "type": "verb",
            "meaning": "Khúc xạ (bẻ cong tia sáng)",
            "example": "Refract is an essential concept in science.",
            "exampleVi": "Khúc xạ (bẻ cong tia sáng) là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Spectrum",
            "ipa": "/ˈspek.trəm/",
            "type": "noun",
            "meaning": "Quang phổ 7 màu",
            "example": "Spectrum is an essential concept in science.",
            "exampleVi": "Quang phổ 7 màu là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Optics and Waves, we will explore key phenomena. Pay attention: What causes a rainbow in the sky after rain? The answer is evidently Sunlight refracts through raindrops.",
          "question": "What causes a rainbow in the sky after rain?",
          "options": [
            {
              "id": "opt_g04_u4_1",
              "label": "A",
              "text": "Sunlight refracts through raindrops",
              "isCorrect": true
            },
            {
              "id": "opt_g04_u4_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently Sunlight refracts through raindrops\"."
        },
        "speakingPractice": [
          {
            "phrase": "Reflect is important.",
            "ipa": "/rɪˈflekt/",
            "prompt": "Luyện phát âm thuật ngữ Reflect",
            "targetText": "Reflect is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Bending Light",
          "passage": "Light travels in straight lines until it hits a transparent medium like water. Light slows down and bends, causing a straw in a glass of water to look broken. This is refraction.",
          "question": "Why does a straw look bent in water?",
          "options": [
            {
              "id": "opt_r_g04_u4_1",
              "label": "A",
              "text": "Light refracts when entering water",
              "isCorrect": true
            },
            {
              "id": "opt_r_g04_u4_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Light refracts when entering water\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Reflect is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Reflect",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g04_u5",
        "unitNumber": 5,
        "title": "Unit 5: Conservation of Land, Air & Oceans",
        "vietnameseTitle": "Chuyên đề: Bảo Tồn Tài Nguyên Đất, Không Khí & Đại Dương (Scott Foresman G4)",
        "curriculumSeries": "Scott Foresman",
        "driveLink": "https://drive.google.com/drive/folders/1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 04: Environmental Conservation. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Environmental Conservation.",
        "sentencePatterns": [
          "Scientists observe that environmental conservation plays a crucial role in nature.",
          "Understanding pollution helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Pollution (/pəˈluː.ʃən/).",
        "vocabulary": [
          {
            "word": "Pollution",
            "ipa": "/pəˈluː.ʃən/",
            "type": "noun",
            "meaning": "Sự ô nhiễm môi trường",
            "example": "Pollution is an essential concept in science.",
            "exampleVi": "Sự ô nhiễm môi trường là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Ecosystem",
            "ipa": "/ˈiː.kəʊˌsɪs.təm/",
            "type": "noun",
            "meaning": "Hệ sinh thái",
            "example": "Ecosystem is an essential concept in science.",
            "exampleVi": "Hệ sinh thái là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Biodegradable",
            "ipa": "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/",
            "type": "adj",
            "meaning": "Có thể phân hủy sinh học",
            "example": "Biodegradable is an essential concept in science.",
            "exampleVi": "Có thể phân hủy sinh học là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Environmental Conservation, we will explore key phenomena. Pay attention: What is an effective way to reduce plastic waste? The answer is evidently Using reusable cloth bags.",
          "question": "What is an effective way to reduce plastic waste?",
          "options": [
            {
              "id": "opt_g04_u5_1",
              "label": "A",
              "text": "Using reusable cloth bags",
              "isCorrect": true
            },
            {
              "id": "opt_g04_u5_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently Using reusable cloth bags\"."
        },
        "speakingPractice": [
          {
            "phrase": "Pollution is important.",
            "ipa": "/pəˈluː.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ Pollution",
            "targetText": "Pollution is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Protecting Our Waters",
          "passage": "Millions of sea turtles and marine animals suffer when plastic enters oceans. By recycling bottles and avoiding single-use bags, communities protect coastal biodiversity for future generations.",
          "question": "How can citizens protect marine life?",
          "options": [
            {
              "id": "opt_r_g04_u5_1",
              "label": "A",
              "text": "By recycling and reducing plastics",
              "isCorrect": true
            },
            {
              "id": "opt_r_g04_u5_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"By recycling and reducing plastics\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Pollution is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Pollution",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "Scott Foresman"
      },
      {
        "id": "us_g04_u6",
        "unitNumber": 6,
        "title": "Unit 6: Math Concept: Decimals, Fractions & Estimation",
        "vietnameseTitle": "Chuyên đề: Toán Số Thập Phân & Ước Lượng Thực Tế (Math Concept Readers G4)",
        "curriculumSeries": "Math Concept Readers",
        "driveLink": "https://drive.google.com/drive/folders/1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 04: Decimals and Fractions. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Decimals and Fractions.",
        "sentencePatterns": [
          "Scientists observe that decimals and fractions plays a crucial role in nature.",
          "Understanding decimal helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Decimal (/ˈdes.ɪ.məl/).",
        "vocabulary": [
          {
            "word": "Decimal",
            "ipa": "/ˈdes.ɪ.məl/",
            "type": "noun",
            "meaning": "Số thập phân",
            "example": "Decimal is an essential concept in science.",
            "exampleVi": "Số thập phân là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Tenth",
            "ipa": "/tenθ/",
            "type": "noun",
            "meaning": "Một phần mười (0.1)",
            "example": "Tenth is an essential concept in science.",
            "exampleVi": "Một phần mười (0.1) là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Estimate",
            "ipa": "/ˈes.tɪ.meɪt/",
            "type": "verb",
            "meaning": "Ước lượng, ước tính",
            "example": "Estimate is an essential concept in science.",
            "exampleVi": "Ước lượng, ước tính là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Decimals and Fractions, we will explore key phenomena. Pay attention: How is three-tenths written as a decimal? The answer is evidently 0.3.",
          "question": "How is three-tenths written as a decimal?",
          "options": [
            {
              "id": "opt_g04_u6_1",
              "label": "A",
              "text": "0.3",
              "isCorrect": true
            },
            {
              "id": "opt_g04_u6_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently 0.3\"."
        },
        "speakingPractice": [
          {
            "phrase": "Decimal is important.",
            "ipa": "/ˈdes.ɪ.məl/",
            "prompt": "Luyện phát âm thuật ngữ Decimal",
            "targetText": "Decimal is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Measuring Ingredients",
          "passage": "In cooking class, students measured 0.5 liters of milk and 0.25 kilograms of sugar. Decimals allow bakers to measure precise quantities for perfect chocolate cakes.",
          "question": "Why are decimals important in baking?",
          "options": [
            {
              "id": "opt_r_g04_u6_1",
              "label": "A",
              "text": "They allow exact precision",
              "isCorrect": true
            },
            {
              "id": "opt_r_g04_u6_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"They allow exact precision\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Decimal is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Decimal",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "Math Concept Readers"
      }
    ]
  },
  {
    "grade": "Lớp 5 (Grade 5)",
    "gradeCode": "G05",
    "level": "primary",
    "levelName": "Tiểu học (Chuẩn Mỹ G5)",
    "driveFolderId": "1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
    "driveUrl": "https://drive.google.com/drive/folders/1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
    "textbooks": [
      "California Science CalSci LR G5",
      "Scott Foresman Reading Street G5",
      "Math Concept Readers G5",
      "Concept Literacy G5"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 5: Sinh học người & Tế bào (Cell Biology & Systems), Hóa học nguyên tử (Atoms & Compounds), Thủy văn biển sâu (Oceanography) và Thiên văn học.",
    "color": "emerald",
    "units": [
      {
        "id": "us_g05_u1",
        "unitNumber": 1,
        "title": "Unit 1: The Human Body Systems & Cell Biology",
        "vietnameseTitle": "Chuyên đề: Các Hệ Cơ Quan Con Người & Sinh Học Tế Bào (California Science G5)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 05: Human Anatomy. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Human Anatomy.",
        "sentencePatterns": [
          "Scientists observe that human anatomy plays a crucial role in nature.",
          "Understanding cell helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Cell (/sel/).",
        "vocabulary": [
          {
            "word": "Cell",
            "ipa": "/sel/",
            "type": "noun",
            "meaning": "Tế bào sinh học",
            "example": "Cell is an essential concept in science.",
            "exampleVi": "Tế bào sinh học là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Circulatory system",
            "ipa": "/ˌsɜː.kjəˈleɪ.tər.i ˈsɪs.təm/",
            "type": "noun",
            "meaning": "Hệ tuần hoàn máu",
            "example": "Circulatory system is an essential concept in science.",
            "exampleVi": "Hệ tuần hoàn máu là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Respiratory",
            "ipa": "/rɪˈspɪr.ə.tər.i/",
            "type": "adj",
            "meaning": "Thuộc hệ hô hấp",
            "example": "Respiratory is an essential concept in science.",
            "exampleVi": "Thuộc hệ hô hấp là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Human Anatomy, we will explore key phenomena. Pay attention: Which organ pumps blood throughout the circulatory system? The answer is evidently The heart.",
          "question": "Which organ pumps blood throughout the circulatory system?",
          "options": [
            {
              "id": "opt_g05_u1_1",
              "label": "A",
              "text": "The heart",
              "isCorrect": true
            },
            {
              "id": "opt_g05_u1_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently The heart\"."
        },
        "speakingPractice": [
          {
            "phrase": "Cell is important.",
            "ipa": "/sel/",
            "prompt": "Luyện phát âm thuật ngữ Cell",
            "targetText": "Cell is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "The Engine Inside You",
          "passage": "Your heart beats about 100,000 times a day, delivering oxygen-rich red blood cells to every organ. Lungs intake oxygen and expel carbon dioxide, keeping cells energetic and healthy.",
          "question": "What gas do lungs expel?",
          "options": [
            {
              "id": "opt_r_g05_u1_1",
              "label": "A",
              "text": "Carbon dioxide",
              "isCorrect": true
            },
            {
              "id": "opt_r_g05_u1_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Carbon dioxide\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Cell is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Cell",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g05_u2",
        "unitNumber": 2,
        "title": "Unit 2: Plant Biology: Photosynthesis & Transpiration",
        "vietnameseTitle": "Chuyên đề: Quang Hợp & Sự Thoát Hơi Nước ở Cây Cối (California Science G5)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 05: Plant Physiology. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Plant Physiology.",
        "sentencePatterns": [
          "Scientists observe that plant physiology plays a crucial role in nature.",
          "Understanding photosynthesis helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Photosynthesis (/ˌfəʊ.təʊˈsɪn.θə.sɪs/).",
        "vocabulary": [
          {
            "word": "Photosynthesis",
            "ipa": "/ˌfəʊ.təʊˈsɪn.θə.sɪs/",
            "type": "noun",
            "meaning": "Quá trình quang hợp",
            "example": "Photosynthesis is an essential concept in science.",
            "exampleVi": "Quá trình quang hợp là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Chlorophyll",
            "ipa": "/ˈklɒr.ə.fɪl/",
            "type": "noun",
            "meaning": "Chất diệp lục xanh",
            "example": "Chlorophyll is an essential concept in science.",
            "exampleVi": "Chất diệp lục xanh là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Glucose",
            "ipa": "/ˈɡluː.kəʊs/",
            "type": "noun",
            "meaning": "Đường glu-cô-zơ",
            "example": "Glucose is an essential concept in science.",
            "exampleVi": "Đường glu-cô-zơ là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Plant Physiology, we will explore key phenomena. Pay attention: What green pigment absorbs sunlight in leaves? The answer is evidently Chlorophyll.",
          "question": "What green pigment absorbs sunlight in leaves?",
          "options": [
            {
              "id": "opt_g05_u2_1",
              "label": "A",
              "text": "Chlorophyll",
              "isCorrect": true
            },
            {
              "id": "opt_g05_u2_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently Chlorophyll\"."
        },
        "speakingPractice": [
          {
            "phrase": "Photosynthesis is important.",
            "ipa": "/ˌfəʊ.təʊˈsɪn.θə.sɪs/",
            "prompt": "Luyện phát âm thuật ngữ Photosynthesis",
            "targetText": "Photosynthesis is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Solar Food Factories",
          "passage": "Leaves use chlorophyll to capture sunlight, combining carbon dioxide and water into sweet glucose and clean oxygen. This amazing chemical process powers almost all life on planet Earth.",
          "question": "What clean gas is produced by photosynthesis?",
          "options": [
            {
              "id": "opt_r_g05_u2_1",
              "label": "A",
              "text": "Oxygen",
              "isCorrect": true
            },
            {
              "id": "opt_r_g05_u2_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Oxygen\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Photosynthesis is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Photosynthesis",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g05_u3",
        "unitNumber": 3,
        "title": "Unit 3: Oceans, Water Systems & Deep Sea Trenches",
        "vietnameseTitle": "Chuyên đề: Hệ Thống Thủy Văn & Rãnh Biển Sâu (California Science G5)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 05: Oceanography. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Oceanography.",
        "sentencePatterns": [
          "Scientists observe that oceanography plays a crucial role in nature.",
          "Understanding ocean trench helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Ocean trench (/ˈəʊ.ʃən trentʃ/).",
        "vocabulary": [
          {
            "word": "Ocean trench",
            "ipa": "/ˈəʊ.ʃən trentʃ/",
            "type": "noun",
            "meaning": "Rãnh vực đại dương sâu",
            "example": "Ocean trench is an essential concept in science.",
            "exampleVi": "Rãnh vực đại dương sâu là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Current",
            "ipa": "/ˈkʌr.ənt/",
            "type": "noun",
            "meaning": "Hải lưu, dòng nước biển",
            "example": "Current is an essential concept in science.",
            "exampleVi": "Hải lưu, dòng nước biển là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Salinity",
            "ipa": "/səˈlɪn.ə.ti/",
            "type": "noun",
            "meaning": "Độ mặn của nước biển",
            "example": "Salinity is an essential concept in science.",
            "exampleVi": "Độ mặn của nước biển là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Oceanography, we will explore key phenomena. Pay attention: What is the deepest known trench on Earth? The answer is evidently The Mariana Trench.",
          "question": "What is the deepest known trench on Earth?",
          "options": [
            {
              "id": "opt_g05_u3_1",
              "label": "A",
              "text": "The Mariana Trench",
              "isCorrect": true
            },
            {
              "id": "opt_g05_u3_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently The Mariana Trench\"."
        },
        "speakingPractice": [
          {
            "phrase": "Ocean trench is important.",
            "ipa": "/ˈəʊ.ʃən trentʃ/",
            "prompt": "Luyện phát âm thuật ngữ Ocean trench",
            "targetText": "Ocean trench is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Secrets of the Abyss",
          "passage": "Oceans cover over 70% of Earth. Warm and cold currents circulate heat across continents. In the pitch-black Mariana Trench, bizarre bioluminescent creatures thrive under crushing water pressure.",
          "question": "How do deep-sea creatures survive in total darkness?",
          "options": [
            {
              "id": "opt_r_g05_u3_1",
              "label": "A",
              "text": "Through bioluminescence",
              "isCorrect": true
            },
            {
              "id": "opt_r_g05_u3_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Through bioluminescence\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Ocean trench is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Ocean trench",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g05_u4",
        "unitNumber": 4,
        "title": "Unit 4: Chemistry: Atoms, Elements & Chemical Reactions",
        "vietnameseTitle": "Chuyên đề: Hóa Học: Nguyên Tử, Nguyên Tố & Phản Ứng Hóa Học (California Science G5)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 05: Introductory Chemistry. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Introductory Chemistry.",
        "sentencePatterns": [
          "Scientists observe that introductory chemistry plays a crucial role in nature.",
          "Understanding atom helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Atom (/ˈæt.əm/).",
        "vocabulary": [
          {
            "word": "Atom",
            "ipa": "/ˈæt.əm/",
            "type": "noun",
            "meaning": "Nguyên tử",
            "example": "Atom is an essential concept in science.",
            "exampleVi": "Nguyên tử là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Compound",
            "ipa": "/ˈkɒm.paʊnd/",
            "type": "noun",
            "meaning": "Hợp chất hóa học",
            "example": "Compound is an essential concept in science.",
            "exampleVi": "Hợp chất hóa học là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Chemical reaction",
            "ipa": "/ˌkem.ɪ.kəl riˈæk.ʃən/",
            "type": "noun",
            "meaning": "Phản ứng hóa học",
            "example": "Chemical reaction is an essential concept in science.",
            "exampleVi": "Phản ứng hóa học là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Introductory Chemistry, we will explore key phenomena. Pay attention: What molecule is formed when two hydrogen atoms bond with one oxygen? The answer is evidently Water (H2O).",
          "question": "What molecule is formed when two hydrogen atoms bond with one oxygen?",
          "options": [
            {
              "id": "opt_g05_u4_1",
              "label": "A",
              "text": "Water (H2O)",
              "isCorrect": true
            },
            {
              "id": "opt_g05_u4_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently Water (H2O)\"."
        },
        "speakingPractice": [
          {
            "phrase": "Atom is important.",
            "ipa": "/ˈæt.əm/",
            "prompt": "Luyện phát âm thuật ngữ Atom",
            "targetText": "Atom is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "The Building Blocks",
          "passage": "Everything is made of atoms. An element contains only one kind of atom. When elements bond, they form compounds with completely new properties, like sodium and chlorine forming table salt.",
          "question": "What is table salt made of?",
          "options": [
            {
              "id": "opt_r_g05_u4_1",
              "label": "A",
              "text": "Sodium and chlorine",
              "isCorrect": true
            },
            {
              "id": "opt_r_g05_u4_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Sodium and chlorine\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Atom is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Atom",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "California Science"
      },
      {
        "id": "us_g05_u5",
        "unitNumber": 5,
        "title": "Unit 5: Astronomy: Stars, Constellations & Galaxies",
        "vietnameseTitle": "Chuyên đề: Thiên Văn Học: Các Vì Sao, Chòm Sao & Dải Ngân Hà (Scott Foresman G5)",
        "curriculumSeries": "Scott Foresman",
        "driveLink": "https://drive.google.com/drive/folders/1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 05: Astronomy. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Astronomy.",
        "sentencePatterns": [
          "Scientists observe that astronomy plays a crucial role in nature.",
          "Understanding constellation helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Constellation (/ˌkɒn.stəˈleɪ.ʃən/).",
        "vocabulary": [
          {
            "word": "Constellation",
            "ipa": "/ˌkɒn.stəˈleɪ.ʃən/",
            "type": "noun",
            "meaning": "Chòm sao",
            "example": "Constellation is an essential concept in science.",
            "exampleVi": "Chòm sao là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Light-year",
            "ipa": "/ˈlaɪtˌjɪər/",
            "type": "noun",
            "meaning": "Năm ánh sáng",
            "example": "Light-year is an essential concept in science.",
            "exampleVi": "Năm ánh sáng là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Galaxy",
            "ipa": "/ˈɡæl.ək.si/",
            "type": "noun",
            "meaning": "Thiên hà (Milky Way)",
            "example": "Galaxy is an essential concept in science.",
            "exampleVi": "Thiên hà (Milky Way) là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Astronomy, we will explore key phenomena. Pay attention: What is the name of our home galaxy? The answer is evidently The Milky Way.",
          "question": "What is the name of our home galaxy?",
          "options": [
            {
              "id": "opt_g05_u5_1",
              "label": "A",
              "text": "The Milky Way",
              "isCorrect": true
            },
            {
              "id": "opt_g05_u5_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently The Milky Way\"."
        },
        "speakingPractice": [
          {
            "phrase": "Constellation is important.",
            "ipa": "/ˌkɒn.stəˈleɪ.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ Constellation",
            "targetText": "Constellation is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Looking into the Past",
          "passage": "Because light takes millions of years to travel across cosmic distances, looking at distant stars through telescopes is like peering into the deep past. Our Milky Way contains over 100 billion stars.",
          "question": "How many stars are estimated in the Milky Way?",
          "options": [
            {
              "id": "opt_r_g05_u5_1",
              "label": "A",
              "text": "Over 100 billion stars",
              "isCorrect": true
            },
            {
              "id": "opt_r_g05_u5_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Over 100 billion stars\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Constellation is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Constellation",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "Scott Foresman"
      },
      {
        "id": "us_g05_u6",
        "unitNumber": 6,
        "title": "Unit 6: Math Concept: Data Analysis, Graphs & Percentages",
        "vietnameseTitle": "Chuyên đề: Toán Phân Tích Dữ Liệu, Biểu Đồ & Phần Trăm (Math Concept Readers G5)",
        "curriculumSeries": "Math Concept Readers",
        "driveLink": "https://drive.google.com/drive/folders/1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 05: Data Analysis. Học sinh rèn luyện tư duy học thuật và từ vựng chuyên ngành.",
        "grammarFocus": "Academic Grammar Focus: Scientific inquiry and compound sentence structures for Data Analysis.",
        "sentencePatterns": [
          "Scientists observe that data analysis plays a crucial role in nature.",
          "Understanding percentage helps us explain how the world functions."
        ],
        "tips": "Ghi nhớ chuẩn phát âm thuật ngữ chuyên ngành: Percentage (/pəˈsen.tɪdʒ/).",
        "vocabulary": [
          {
            "word": "Percentage",
            "ipa": "/pəˈsen.tɪdʒ/",
            "type": "noun",
            "meaning": "Tỷ lệ phần trăm (%)",
            "example": "Percentage is an essential concept in science.",
            "exampleVi": "Tỷ lệ phần trăm (%) là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Bar graph",
            "ipa": "/ˈbɑː ˌɡrɑːf/",
            "type": "noun",
            "meaning": "Biểu đồ cột",
            "example": "Bar graph is an essential concept in science.",
            "exampleVi": "Biểu đồ cột là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Mean",
            "ipa": "/miːn/",
            "type": "noun",
            "meaning": "Giá trị trung bình cộng",
            "example": "Mean is an essential concept in science.",
            "exampleVi": "Giá trị trung bình cộng là khái niệm quan trọng trong khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Academic lecturer: In today's module on Data Analysis, we will explore key phenomena. Pay attention: What does fifty percent (50%) represent as a fraction? The answer is evidently One half (1/2).",
          "question": "What does fifty percent (50%) represent as a fraction?",
          "options": [
            {
              "id": "opt_g05_u6_1",
              "label": "A",
              "text": "One half (1/2)",
              "isCorrect": true
            },
            {
              "id": "opt_g05_u6_2",
              "label": "B",
              "text": "Incorrect alternate hypothesis",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe đã nêu rõ: \"The answer is evidently One half (1/2)\"."
        },
        "speakingPractice": [
          {
            "phrase": "Percentage is important.",
            "ipa": "/pəˈsen.tɪdʒ/",
            "prompt": "Luyện phát âm thuật ngữ Percentage",
            "targetText": "Percentage is important",
            "difficulty": "Medium"
          }
        ],
        "readingPractice": {
          "title": "Analyzing Survey Results",
          "passage": "Students conducted a survey on favorite school lunches. 50% chose pizza, 25% voted for tacos, and 25% preferred fresh pasta. Bar graphs displayed the survey results clearly for the principal.",
          "question": "Which lunch choice won the majority vote?",
          "options": [
            {
              "id": "opt_r_g05_u6_1",
              "label": "A",
              "text": "Pizza (50%)",
              "isCorrect": true
            },
            {
              "id": "opt_r_g05_u6_2",
              "label": "B",
              "text": "None of the above options",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu rõ: \"Pizza (50%)\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "correctSentence": "Percentage is essential for life",
          "scrambledWords": [
            "for",
            "essential",
            "is",
            "Percentage",
            "life"
          ],
          "explanation": "Chủ ngữ + to be + tính từ + bổ ngữ."
        },
        "series": "Math Concept Readers"
      }
    ]
  },
  {
    "grade": "Lớp 6 (Grade 6)",
    "gradeCode": "G06",
    "level": "secondary",
    "levelName": "THCS (Chuẩn Mỹ G6)",
    "driveFolderId": "1KqIvaNSNovAsIaXdKwu9gN_Q17mqEWt9",
    "driveUrl": "https://drive.google.com/drive/folders/1KqIvaNSNovAsIaXdKwu9gN_Q17mqEWt9",
    "textbooks": [
      "California Earth Science G6",
      "Sound Studio G06.01 - G06.13",
      "Math Concept Readers G6",
      "Leveled Readers Above Level G6"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 6: Kiến tạo mảng (Plate Tectonics), Động đất & Núi lửa (Earthquakes & Volcanoes), Khí quyển & Dòng nhiệt đối lưu.",
    "color": "indigo",
    "units": [
      {
        "id": "us_g06_u1",
        "unitNumber": 1,
        "title": "Unit 1: Plate Tectonics & Continental Drift",
        "vietnameseTitle": "Chuyên đề: Thuyết Kiến tạo Mảng & Sự Trôi dạt Lục địa (California Earth Science G6)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1KqIvaNSNovAsIaXdKwu9gN_Q17mqEWt9",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 06: Plate Tectonics. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Plate Tectonics.",
        "sentencePatterns": [
          "Through rigorous analysis of plate tectonics, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs plate tectonics to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Plate tectonics (/pleɪt tekˈtɒn.ɪks/).",
        "vocabulary": [
          {
            "word": "Plate tectonics",
            "ipa": "/pleɪt tekˈtɒn.ɪks/",
            "type": "noun",
            "meaning": "Thuyết kiến tạo mảng",
            "example": "The essay deeply analyzes the concept of plate tectonics.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm thuyết kiến tạo mảng.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Plate Tectonics, note how the text utilizes plate tectonics. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g06_u1_1",
              "label": "A",
              "text": "Plate tectonics",
              "isCorrect": true
            },
            {
              "id": "opt_g06_u1_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Plate tectonics\"."
        },
        "speakingPractice": [
          {
            "phrase": "Plate tectonics shapes literary meaning.",
            "ipa": "/pleɪt tekˈtɒn.ɪks/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Plate tectonics",
            "targetText": "Plate tectonics shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Plate Tectonics",
          "passage": "Critical literary scholars examine how authors deploy plate tectonics to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g06_u1_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g06_u1_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Plate tectonics enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Plate tectonics",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g06_u2",
        "unitNumber": 2,
        "title": "Unit 2: Earthquakes, Fault Lines & Seismic Waves",
        "vietnameseTitle": "Chuyên đề: Động Đất, Các Đứt Gãy Địa Chất & Sóng Địa Chấn (California Earth Science G6)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1KqIvaNSNovAsIaXdKwu9gN_Q17mqEWt9",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 06: Earthquakes. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Earthquakes.",
        "sentencePatterns": [
          "Through rigorous analysis of seismic wave, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs seismic wave to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Seismic wave (/ˈsaɪz.mɪk weɪv/).",
        "vocabulary": [
          {
            "word": "Seismic wave",
            "ipa": "/ˈsaɪz.mɪk weɪv/",
            "type": "noun",
            "meaning": "Sóng địa chấn",
            "example": "The essay deeply analyzes the concept of seismic wave.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm sóng địa chấn.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Earthquakes, note how the text utilizes seismic wave. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g06_u2_1",
              "label": "A",
              "text": "Seismic wave",
              "isCorrect": true
            },
            {
              "id": "opt_g06_u2_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Seismic wave\"."
        },
        "speakingPractice": [
          {
            "phrase": "Seismic wave shapes literary meaning.",
            "ipa": "/ˈsaɪz.mɪk weɪv/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Seismic wave",
            "targetText": "Seismic wave shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Earthquakes",
          "passage": "Critical literary scholars examine how authors deploy seismic wave to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g06_u2_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g06_u2_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Seismic wave enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Seismic wave",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g06_u3",
        "unitNumber": 3,
        "title": "Unit 3: Weathering, Erosion & Deposition",
        "vietnameseTitle": "Chuyên đề: Quá Trình Phong Hóa, Xói Mòn & Bồi Tụ Thổ Nhưỡng (California Earth Science G6)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1KqIvaNSNovAsIaXdKwu9gN_Q17mqEWt9",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 06: Weathering and Erosion. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Weathering and Erosion.",
        "sentencePatterns": [
          "Through rigorous analysis of erosion, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs erosion to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Erosion (/ɪˈrəʊ.ʒən/).",
        "vocabulary": [
          {
            "word": "Erosion",
            "ipa": "/ɪˈrəʊ.ʒən/",
            "type": "noun",
            "meaning": "Sự xói mòn địa chất",
            "example": "The essay deeply analyzes the concept of erosion.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm sự xói mòn địa chất.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Weathering and Erosion, note how the text utilizes erosion. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g06_u3_1",
              "label": "A",
              "text": "Erosion",
              "isCorrect": true
            },
            {
              "id": "opt_g06_u3_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Erosion\"."
        },
        "speakingPractice": [
          {
            "phrase": "Erosion shapes literary meaning.",
            "ipa": "/ɪˈrəʊ.ʒən/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Erosion",
            "targetText": "Erosion shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Weathering and Erosion",
          "passage": "Critical literary scholars examine how authors deploy erosion to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g06_u3_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g06_u3_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Erosion enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Erosion",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g06_u4",
        "unitNumber": 4,
        "title": "Unit 4: Earth's Atmosphere & Weather Systems",
        "vietnameseTitle": "Chuyên đề: Khí Quyển Trái Đất & Các Hệ Thống Áp Khí Thời Tiết (California Earth Science G6)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1KqIvaNSNovAsIaXdKwu9gN_Q17mqEWt9",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 06: Atmospheric Layers. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Atmospheric Layers.",
        "sentencePatterns": [
          "Through rigorous analysis of atmosphere, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs atmosphere to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Atmosphere (/ˈæt.məs.fɪər/).",
        "vocabulary": [
          {
            "word": "Atmosphere",
            "ipa": "/ˈæt.məs.fɪər/",
            "type": "noun",
            "meaning": "Bầu khí quyển Trái Đất",
            "example": "The essay deeply analyzes the concept of atmosphere.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm bầu khí quyển trái đất.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Atmospheric Layers, note how the text utilizes atmosphere. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g06_u4_1",
              "label": "A",
              "text": "Atmosphere",
              "isCorrect": true
            },
            {
              "id": "opt_g06_u4_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Atmosphere\"."
        },
        "speakingPractice": [
          {
            "phrase": "Atmosphere shapes literary meaning.",
            "ipa": "/ˈæt.məs.fɪər/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Atmosphere",
            "targetText": "Atmosphere shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Atmospheric Layers",
          "passage": "Critical literary scholars examine how authors deploy atmosphere to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g06_u4_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g06_u4_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Atmosphere enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Atmosphere",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g06_u5",
        "unitNumber": 5,
        "title": "Unit 5: Thermal Energy Transfer: Conduction, Convection & Radiation",
        "vietnameseTitle": "Chuyên đề: Sự Truyền Nhiệt Năng: Dẫn Nhiệt, Đối Lưu & Bức Xạ (California Earth Science G6)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1KqIvaNSNovAsIaXdKwu9gN_Q17mqEWt9",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 06: Heat Transfer. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Heat Transfer.",
        "sentencePatterns": [
          "Through rigorous analysis of convection, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs convection to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Convection (/kənˈvek.ʃən/).",
        "vocabulary": [
          {
            "word": "Convection",
            "ipa": "/kənˈvek.ʃən/",
            "type": "noun",
            "meaning": "Hiện tượng đối lưu nhiệt",
            "example": "The essay deeply analyzes the concept of convection.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm hiện tượng đối lưu nhiệt.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Heat Transfer, note how the text utilizes convection. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g06_u5_1",
              "label": "A",
              "text": "Convection",
              "isCorrect": true
            },
            {
              "id": "opt_g06_u5_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Convection\"."
        },
        "speakingPractice": [
          {
            "phrase": "Convection shapes literary meaning.",
            "ipa": "/kənˈvek.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Convection",
            "targetText": "Convection shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Heat Transfer",
          "passage": "Critical literary scholars examine how authors deploy convection to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g06_u5_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g06_u5_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Convection enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Convection",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g06_u6",
        "unitNumber": 6,
        "title": "Unit 6: Earth in the Solar System & Gravitational Pull",
        "vietnameseTitle": "Chuyên đề: Trái Đất Trong Hệ Mặt Trời & Lực Hấp Dẫn (Audio Studio) (Sound Studio G06)",
        "curriculumSeries": "Audio Sound Studio",
        "driveLink": "https://drive.google.com/drive/folders/1KqIvaNSNovAsIaXdKwu9gN_Q17mqEWt9",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 06: Planetary Motion. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Planetary Motion.",
        "sentencePatterns": [
          "Through rigorous analysis of gravitation, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs gravitation to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Gravitation (/ˌɡræv.ɪˈteɪ.ʃən/).",
        "vocabulary": [
          {
            "word": "Gravitation",
            "ipa": "/ˌɡræv.ɪˈteɪ.ʃən/",
            "type": "noun",
            "meaning": "Lực vạn vật hấp dẫn",
            "example": "The essay deeply analyzes the concept of gravitation.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm lực vạn vật hấp dẫn.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Planetary Motion, note how the text utilizes gravitation. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g06_u6_1",
              "label": "A",
              "text": "Gravitation",
              "isCorrect": true
            },
            {
              "id": "opt_g06_u6_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Gravitation\"."
        },
        "speakingPractice": [
          {
            "phrase": "Gravitation shapes literary meaning.",
            "ipa": "/ˌɡræv.ɪˈteɪ.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Gravitation",
            "targetText": "Gravitation shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Planetary Motion",
          "passage": "Critical literary scholars examine how authors deploy gravitation to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g06_u6_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g06_u6_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Gravitation enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Gravitation",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "Audio Sound Studio"
      }
    ]
  },
  {
    "grade": "Lớp 7 (Grade 7)",
    "gradeCode": "G07",
    "level": "secondary",
    "levelName": "THCS (Chuẩn Mỹ G7)",
    "driveFolderId": "1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
    "driveUrl": "https://drive.google.com/drive/folders/1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
    "textbooks": [
      "California Life Science G7",
      "Writer's Choice: Grammar and Composition G7",
      "Sound Studio G07"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 7: Cấu trúc Tế bào & Quang hợp, Di truyền học Men-đen & DNA, Tiến hóa & Viết luận miêu tả (Writer's Choice).",
    "color": "indigo",
    "units": [
      {
        "id": "us_g07_u1",
        "unitNumber": 1,
        "title": "Unit 1: Cell Structure, Organelles & Microscopy",
        "vietnameseTitle": "Chuyên đề: Cấu Trúc Tế Bào, Bào Quan & Kính Hiển Vi (California Life Science G7)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 07: Cell Organelles. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Cell Organelles.",
        "sentencePatterns": [
          "Through rigorous analysis of mitochondria, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs mitochondria to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Mitochondria (/ˌmaɪ.təʊˈkɒn.dri.ə/).",
        "vocabulary": [
          {
            "word": "Mitochondria",
            "ipa": "/ˌmaɪ.təʊˈkɒn.dri.ə/",
            "type": "noun",
            "meaning": "Ti thể (nhà máy năng lượng)",
            "example": "The essay deeply analyzes the concept of mitochondria.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm ti thể (nhà máy năng lượng).",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Cell Organelles, note how the text utilizes mitochondria. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g07_u1_1",
              "label": "A",
              "text": "Mitochondria",
              "isCorrect": true
            },
            {
              "id": "opt_g07_u1_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Mitochondria\"."
        },
        "speakingPractice": [
          {
            "phrase": "Mitochondria shapes literary meaning.",
            "ipa": "/ˌmaɪ.təʊˈkɒn.dri.ə/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Mitochondria",
            "targetText": "Mitochondria shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Cell Organelles",
          "passage": "Critical literary scholars examine how authors deploy mitochondria to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g07_u1_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g07_u1_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Mitochondria enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Mitochondria",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g07_u2",
        "unitNumber": 2,
        "title": "Unit 2: Genetics, DNA & Mendelian Heredity",
        "vietnameseTitle": "Chuyên đề: Di Truyền Học Men-đen, Cấu Trúc DNA & Tính Trạng (California Life Science G7)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 07: Genetics and DNA. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Genetics and DNA.",
        "sentencePatterns": [
          "Through rigorous analysis of chromosome, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs chromosome to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Chromosome (/ˈkrəʊ.mə.səʊm/).",
        "vocabulary": [
          {
            "word": "Chromosome",
            "ipa": "/ˈkrəʊ.mə.səʊm/",
            "type": "noun",
            "meaning": "Nhiễm sắc thể",
            "example": "The essay deeply analyzes the concept of chromosome.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm nhiễm sắc thể.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Genetics and DNA, note how the text utilizes chromosome. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g07_u2_1",
              "label": "A",
              "text": "Chromosome",
              "isCorrect": true
            },
            {
              "id": "opt_g07_u2_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Chromosome\"."
        },
        "speakingPractice": [
          {
            "phrase": "Chromosome shapes literary meaning.",
            "ipa": "/ˈkrəʊ.mə.səʊm/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Chromosome",
            "targetText": "Chromosome shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Genetics and DNA",
          "passage": "Critical literary scholars examine how authors deploy chromosome to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g07_u2_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g07_u2_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Chromosome enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Chromosome",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g07_u3",
        "unitNumber": 3,
        "title": "Unit 3: Evolution, Natural Selection & Fossil Records",
        "vietnameseTitle": "Chuyên đề: Thuyết Tiến Hóa, Chọn Lọc Tự Nhiên & Hóa Thạch (California Life Science G7)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 07: Natural Selection. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Natural Selection.",
        "sentencePatterns": [
          "Through rigorous analysis of natural selection, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs natural selection to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Natural selection (/ˈnætʃ.ər.əl sɪˈlek.ʃən/).",
        "vocabulary": [
          {
            "word": "Natural selection",
            "ipa": "/ˈnætʃ.ər.əl sɪˈlek.ʃən/",
            "type": "noun",
            "meaning": "Sự chọn lọc tự nhiên",
            "example": "The essay deeply analyzes the concept of natural selection.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm sự chọn lọc tự nhiên.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Natural Selection, note how the text utilizes natural selection. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g07_u3_1",
              "label": "A",
              "text": "Natural selection",
              "isCorrect": true
            },
            {
              "id": "opt_g07_u3_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Natural selection\"."
        },
        "speakingPractice": [
          {
            "phrase": "Natural selection shapes literary meaning.",
            "ipa": "/ˈnætʃ.ər.əl sɪˈlek.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Natural selection",
            "targetText": "Natural selection shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Natural Selection",
          "passage": "Critical literary scholars examine how authors deploy natural selection to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g07_u3_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g07_u3_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Natural selection enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Natural selection",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g07_u4",
        "unitNumber": 4,
        "title": "Unit 4: Human Organ Systems & Homeostasis",
        "vietnameseTitle": "Chuyên đề: Các Hệ Cơ Quan Cơ Thể & Cân Bằng Nội Môi (California Life Science G7)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 07: Homeostasis. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Homeostasis.",
        "sentencePatterns": [
          "Through rigorous analysis of homeostasis, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs homeostasis to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Homeostasis (/ˌhəʊ.mi.əʊˈsteɪ.sɪs/).",
        "vocabulary": [
          {
            "word": "Homeostasis",
            "ipa": "/ˌhəʊ.mi.əʊˈsteɪ.sɪs/",
            "type": "noun",
            "meaning": "Trạng thái cân bằng nội môi",
            "example": "The essay deeply analyzes the concept of homeostasis.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm trạng thái cân bằng nội môi.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Homeostasis, note how the text utilizes homeostasis. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g07_u4_1",
              "label": "A",
              "text": "Homeostasis",
              "isCorrect": true
            },
            {
              "id": "opt_g07_u4_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Homeostasis\"."
        },
        "speakingPractice": [
          {
            "phrase": "Homeostasis shapes literary meaning.",
            "ipa": "/ˌhəʊ.mi.əʊˈsteɪ.sɪs/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Homeostasis",
            "targetText": "Homeostasis shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Homeostasis",
          "passage": "Critical literary scholars examine how authors deploy homeostasis to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g07_u4_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g07_u4_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Homeostasis enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Homeostasis",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g07_u5",
        "unitNumber": 5,
        "title": "Unit 5: Writer's Choice: Narrative & Descriptive Composition",
        "vietnameseTitle": "Chuyên đề: Writer's Choice: Kỹ Năng Viết Văn Tự Sự & Miêu Tả (Writer's Choice G7)",
        "curriculumSeries": "Writer's Choice",
        "driveLink": "https://drive.google.com/drive/folders/1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 07: Essay Composition. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Essay Composition.",
        "sentencePatterns": [
          "Through rigorous analysis of sensory details, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs sensory details to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Sensory details (/ˈsen.sər.i dɪˈteɪlz/).",
        "vocabulary": [
          {
            "word": "Sensory details",
            "ipa": "/ˈsen.sər.i dɪˈteɪlz/",
            "type": "noun",
            "meaning": "Chi tiết cảm giác sinh động",
            "example": "The essay deeply analyzes the concept of sensory details.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm chi tiết cảm giác sinh động.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Essay Composition, note how the text utilizes sensory details. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g07_u5_1",
              "label": "A",
              "text": "Sensory details",
              "isCorrect": true
            },
            {
              "id": "opt_g07_u5_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Sensory details\"."
        },
        "speakingPractice": [
          {
            "phrase": "Sensory details shapes literary meaning.",
            "ipa": "/ˈsen.sər.i dɪˈteɪlz/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Sensory details",
            "targetText": "Sensory details shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Essay Composition",
          "passage": "Critical literary scholars examine how authors deploy sensory details to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g07_u5_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g07_u5_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Sensory details enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Sensory details",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "Writer's Choice"
      },
      {
        "id": "us_g07_u6",
        "unitNumber": 6,
        "title": "Unit 6: Grammar Mechanics: Phrases, Clauses & Complex Sentences",
        "vietnameseTitle": "Chuyên đề: Ngữ Pháp Chuyên Sâu: Mệnh Đề, Câu Phức & Dấu Câu (Writer's Choice G7)",
        "curriculumSeries": "Writer's Choice",
        "driveLink": "https://drive.google.com/drive/folders/1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 07: Complex Sentences. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Complex Sentences.",
        "sentencePatterns": [
          "Through rigorous analysis of dependent clause, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs dependent clause to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Dependent clause (/dɪˈpen.dənt klɔːz/).",
        "vocabulary": [
          {
            "word": "Dependent clause",
            "ipa": "/dɪˈpen.dənt klɔːz/",
            "type": "noun",
            "meaning": "Mệnh đề phụ thuộc",
            "example": "The essay deeply analyzes the concept of dependent clause.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm mệnh đề phụ thuộc.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Complex Sentences, note how the text utilizes dependent clause. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g07_u6_1",
              "label": "A",
              "text": "Dependent clause",
              "isCorrect": true
            },
            {
              "id": "opt_g07_u6_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Dependent clause\"."
        },
        "speakingPractice": [
          {
            "phrase": "Dependent clause shapes literary meaning.",
            "ipa": "/dɪˈpen.dənt klɔːz/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Dependent clause",
            "targetText": "Dependent clause shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Complex Sentences",
          "passage": "Critical literary scholars examine how authors deploy dependent clause to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g07_u6_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g07_u6_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Dependent clause enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Dependent clause",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "Writer's Choice"
      }
    ]
  },
  {
    "grade": "Lớp 8 (Grade 8)",
    "gradeCode": "G08",
    "level": "secondary",
    "levelName": "THCS (Chuẩn Mỹ G8)",
    "driveFolderId": "1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
    "driveUrl": "https://drive.google.com/drive/folders/1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
    "textbooks": [
      "California Physical Science G8",
      "Writer's Choice: Grammar and Composition G8",
      "Sound tracks G08"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 8: Cấu trúc nguyên tử & Bảng tuần hoàn, Định luật Niutơn, Sóng điện từ và Viết luận thuyết phục (Persuasive Writing).",
    "color": "indigo",
    "units": [
      {
        "id": "us_g08_u1",
        "unitNumber": 1,
        "title": "Unit 1: Atomic Structure & The Periodic Table",
        "vietnameseTitle": "Chuyên đề: Cấu Trúc Nguyên Tử & Bảng Tuần Hoàn Các Nguyên Tố (California Physical Science G8)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 08: Periodic Trends. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Periodic Trends.",
        "sentencePatterns": [
          "Through rigorous analysis of atomic number, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs atomic number to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Atomic number (/əˈtɒm.ɪk ˌnʌm.bər/).",
        "vocabulary": [
          {
            "word": "Atomic number",
            "ipa": "/əˈtɒm.ɪk ˌnʌm.bər/",
            "type": "noun",
            "meaning": "Số hiệu nguyên tử",
            "example": "The essay deeply analyzes the concept of atomic number.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm số hiệu nguyên tử.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Periodic Trends, note how the text utilizes atomic number. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g08_u1_1",
              "label": "A",
              "text": "Atomic number",
              "isCorrect": true
            },
            {
              "id": "opt_g08_u1_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Atomic number\"."
        },
        "speakingPractice": [
          {
            "phrase": "Atomic number shapes literary meaning.",
            "ipa": "/əˈtɒm.ɪk ˌnʌm.bər/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Atomic number",
            "targetText": "Atomic number shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Periodic Trends",
          "passage": "Critical literary scholars examine how authors deploy atomic number to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g08_u1_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g08_u1_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Atomic number enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Atomic number",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g08_u2",
        "unitNumber": 2,
        "title": "Unit 2: Chemical Bonds, Compounds & Balancing Equations",
        "vietnameseTitle": "Chuyên đề: Liên Kết Hóa Học & Cân Bằng Phương Trình Phản Ứng (California Physical Science G8)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 08: Chemical Bonding. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Chemical Bonding.",
        "sentencePatterns": [
          "Through rigorous analysis of covalent bond, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs covalent bond to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Covalent bond (/kəʊˈveɪ.lənt bɒnd/).",
        "vocabulary": [
          {
            "word": "Covalent bond",
            "ipa": "/kəʊˈveɪ.lənt bɒnd/",
            "type": "noun",
            "meaning": "Liên kết cộng hóa trị",
            "example": "The essay deeply analyzes the concept of covalent bond.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm liên kết cộng hóa trị.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Chemical Bonding, note how the text utilizes covalent bond. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g08_u2_1",
              "label": "A",
              "text": "Covalent bond",
              "isCorrect": true
            },
            {
              "id": "opt_g08_u2_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Covalent bond\"."
        },
        "speakingPractice": [
          {
            "phrase": "Covalent bond shapes literary meaning.",
            "ipa": "/kəʊˈveɪ.lənt bɒnd/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Covalent bond",
            "targetText": "Covalent bond shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Chemical Bonding",
          "passage": "Critical literary scholars examine how authors deploy covalent bond to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g08_u2_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g08_u2_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Covalent bond enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Covalent bond",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g08_u3",
        "unitNumber": 3,
        "title": "Unit 3: Newton's Three Laws of Motion & Momentum",
        "vietnameseTitle": "Chuyên đề: Ba Định Luật Niutơn về Chuyển Động & Động Lượng (California Physical Science G8)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 08: Classical Mechanics. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Classical Mechanics.",
        "sentencePatterns": [
          "Through rigorous analysis of inertia, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs inertia to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Inertia (/ɪˈnɜː.ʃə/).",
        "vocabulary": [
          {
            "word": "Inertia",
            "ipa": "/ɪˈnɜː.ʃə/",
            "type": "noun",
            "meaning": "Quán tính vật lý",
            "example": "The essay deeply analyzes the concept of inertia.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm quán tính vật lý.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Classical Mechanics, note how the text utilizes inertia. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g08_u3_1",
              "label": "A",
              "text": "Inertia",
              "isCorrect": true
            },
            {
              "id": "opt_g08_u3_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Inertia\"."
        },
        "speakingPractice": [
          {
            "phrase": "Inertia shapes literary meaning.",
            "ipa": "/ɪˈnɜː.ʃə/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Inertia",
            "targetText": "Inertia shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Classical Mechanics",
          "passage": "Critical literary scholars examine how authors deploy inertia to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g08_u3_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g08_u3_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Inertia enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Inertia",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g08_u4",
        "unitNumber": 4,
        "title": "Unit 4: Fluid Mechanics: Density, Buoyancy & Pressure",
        "vietnameseTitle": "Chuyên đề: Cơ Học Chất Lưu: Khối Lượng Riêng & Lực Đẩy Ác-si-mét (California Physical Science G8)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 08: Fluid Dynamics. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Fluid Dynamics.",
        "sentencePatterns": [
          "Through rigorous analysis of buoyant force, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs buoyant force to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Buoyant force (/ˈbɔɪ.ənt fɔːs/).",
        "vocabulary": [
          {
            "word": "Buoyant force",
            "ipa": "/ˈbɔɪ.ənt fɔːs/",
            "type": "noun",
            "meaning": "Lực đẩy Ác-si-mét",
            "example": "The essay deeply analyzes the concept of buoyant force.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm lực đẩy ác-si-mét.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Fluid Dynamics, note how the text utilizes buoyant force. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g08_u4_1",
              "label": "A",
              "text": "Buoyant force",
              "isCorrect": true
            },
            {
              "id": "opt_g08_u4_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Buoyant force\"."
        },
        "speakingPractice": [
          {
            "phrase": "Buoyant force shapes literary meaning.",
            "ipa": "/ˈbɔɪ.ənt fɔːs/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Buoyant force",
            "targetText": "Buoyant force shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Fluid Dynamics",
          "passage": "Critical literary scholars examine how authors deploy buoyant force to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g08_u4_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g08_u4_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Buoyant force enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Buoyant force",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g08_u5",
        "unitNumber": 5,
        "title": "Unit 5: The Electromagnetic Spectrum & Wave Behavior",
        "vietnameseTitle": "Chuyên đề: Quang Phổ Sóng Điện Từ & Bản Chất Sóng Âm (California Physical Science G8)",
        "curriculumSeries": "California Science",
        "driveLink": "https://drive.google.com/drive/folders/1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 08: Electromagnetism. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Electromagnetism.",
        "sentencePatterns": [
          "Through rigorous analysis of wavelength, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs wavelength to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Wavelength (/ˈweɪv.leŋθ/).",
        "vocabulary": [
          {
            "word": "Wavelength",
            "ipa": "/ˈweɪv.leŋθ/",
            "type": "noun",
            "meaning": "Bước sóng điện từ",
            "example": "The essay deeply analyzes the concept of wavelength.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm bước sóng điện từ.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Electromagnetism, note how the text utilizes wavelength. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g08_u5_1",
              "label": "A",
              "text": "Wavelength",
              "isCorrect": true
            },
            {
              "id": "opt_g08_u5_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Wavelength\"."
        },
        "speakingPractice": [
          {
            "phrase": "Wavelength shapes literary meaning.",
            "ipa": "/ˈweɪv.leŋθ/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Wavelength",
            "targetText": "Wavelength shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Electromagnetism",
          "passage": "Critical literary scholars examine how authors deploy wavelength to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g08_u5_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g08_u5_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Wavelength enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Wavelength",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "California Science"
      },
      {
        "id": "us_g08_u6",
        "unitNumber": 6,
        "title": "Unit 6: Writer's Choice: Persuasive Writing & Rhetorical Logic",
        "vietnameseTitle": "Chuyên đề: Writer's Choice: Viết Luận Thuyết Phục & Logic Biện Luận (Writer's Choice G8)",
        "curriculumSeries": "Writer's Choice",
        "driveLink": "https://drive.google.com/drive/folders/1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 08: Persuasive Writing. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Persuasive Writing.",
        "sentencePatterns": [
          "Through rigorous analysis of counterargument, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs counterargument to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Counterargument (/ˈkaʊn.tərˌɑːɡ.jə.mənt/).",
        "vocabulary": [
          {
            "word": "Counterargument",
            "ipa": "/ˈkaʊn.tərˌɑːɡ.jə.mənt/",
            "type": "noun",
            "meaning": "Luận điểm phản bác",
            "example": "The essay deeply analyzes the concept of counterargument.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm luận điểm phản bác.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Persuasive Writing, note how the text utilizes counterargument. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g08_u6_1",
              "label": "A",
              "text": "Counterargument",
              "isCorrect": true
            },
            {
              "id": "opt_g08_u6_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Counterargument\"."
        },
        "speakingPractice": [
          {
            "phrase": "Counterargument shapes literary meaning.",
            "ipa": "/ˈkaʊn.tərˌɑːɡ.jə.mənt/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Counterargument",
            "targetText": "Counterargument shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Persuasive Writing",
          "passage": "Critical literary scholars examine how authors deploy counterargument to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g08_u6_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g08_u6_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Counterargument enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Counterargument",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "Writer's Choice"
      }
    ]
  },
  {
    "grade": "Lớp 9 (Grade 9)",
    "gradeCode": "G09",
    "level": "secondary",
    "levelName": "THCS (Chuẩn Mỹ G9)",
    "driveFolderId": "13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
    "driveUrl": "https://drive.google.com/drive/folders/13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
    "textbooks": [
      "McDougal Littell Literature Grade 9",
      "Writer's Choice: Grammar and Composition G9",
      "Vocabulary Workshop G9"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 9: Yếu tố Văn học (Fiction & Epic), Kịch bản Romeo & Juliet (Shakespeare), Ngữ pháp chuyên sâu và Luyện thi SSAT/PSAT.",
    "color": "indigo",
    "units": [
      {
        "id": "us_g09_u1",
        "unitNumber": 1,
        "title": "Unit 1: Elements of Fiction: Plot, Theme & Character Arc",
        "vietnameseTitle": "Chuyên đề: Các Yếu Tố Văn Xuôi: Cốt Truyện, Chủ Đề & Xung Đột (McDougal Littell Literature G9)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 09: Literary Analysis. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Literary Analysis.",
        "sentencePatterns": [
          "Through rigorous analysis of protagonist, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs protagonist to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Protagonist (/prəˈtæɡ.ən.ɪst/).",
        "vocabulary": [
          {
            "word": "Protagonist",
            "ipa": "/prəˈtæɡ.ən.ɪst/",
            "type": "noun",
            "meaning": "Nhân vật chính diện",
            "example": "The essay deeply analyzes the concept of protagonist.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm nhân vật chính diện.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Literary Analysis, note how the text utilizes protagonist. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g09_u1_1",
              "label": "A",
              "text": "Protagonist",
              "isCorrect": true
            },
            {
              "id": "opt_g09_u1_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Protagonist\"."
        },
        "speakingPractice": [
          {
            "phrase": "Protagonist shapes literary meaning.",
            "ipa": "/prəˈtæɡ.ən.ɪst/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Protagonist",
            "targetText": "Protagonist shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Literary Analysis",
          "passage": "Critical literary scholars examine how authors deploy protagonist to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g09_u1_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g09_u1_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Protagonist enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Protagonist",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g09_u2",
        "unitNumber": 2,
        "title": "Unit 2: The Epic Tradition: Homer's Odyssey & Hero Archetypes",
        "vietnameseTitle": "Chuyên đề: Sử Thi Cổ Đại: Tác Phẩm Odyssey & Khuôn Mẫu Người Hùng (McDougal Littell Literature G9)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 09: The Hero's Journey. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for The Hero's Journey.",
        "sentencePatterns": [
          "Through rigorous analysis of epic simile, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs epic simile to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Epic simile (/ˈep.ɪk ˈsɪm.ɪ.li/).",
        "vocabulary": [
          {
            "word": "Epic simile",
            "ipa": "/ˈep.ɪk ˈsɪm.ɪ.li/",
            "type": "noun",
            "meaning": "Biện pháp so sánh sử thi",
            "example": "The essay deeply analyzes the concept of epic simile.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm biện pháp so sánh sử thi.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on The Hero's Journey, note how the text utilizes epic simile. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g09_u2_1",
              "label": "A",
              "text": "Epic simile",
              "isCorrect": true
            },
            {
              "id": "opt_g09_u2_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Epic simile\"."
        },
        "speakingPractice": [
          {
            "phrase": "Epic simile shapes literary meaning.",
            "ipa": "/ˈep.ɪk ˈsɪm.ɪ.li/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Epic simile",
            "targetText": "Epic simile shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on The Hero's Journey",
          "passage": "Critical literary scholars examine how authors deploy epic simile to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g09_u2_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g09_u2_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Epic simile enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Epic simile",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g09_u3",
        "unitNumber": 3,
        "title": "Unit 3: Dramatic Literature: Shakespeare's Romeo & Juliet",
        "vietnameseTitle": "Chuyên đề: Kịch Bản Văn Học: Romeo & Juliet của Shakespeare (McDougal Littell Literature G9)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 09: Dramatic Irony. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Dramatic Irony.",
        "sentencePatterns": [
          "Through rigorous analysis of soliloquy, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs soliloquy to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Soliloquy (/səˈlɪl.ə.kwi/).",
        "vocabulary": [
          {
            "word": "Soliloquy",
            "ipa": "/səˈlɪl.ə.kwi/",
            "type": "noun",
            "meaning": "Đoạn độc thoại nội tâm",
            "example": "The essay deeply analyzes the concept of soliloquy.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm đoạn độc thoại nội tâm.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Dramatic Irony, note how the text utilizes soliloquy. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g09_u3_1",
              "label": "A",
              "text": "Soliloquy",
              "isCorrect": true
            },
            {
              "id": "opt_g09_u3_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Soliloquy\"."
        },
        "speakingPractice": [
          {
            "phrase": "Soliloquy shapes literary meaning.",
            "ipa": "/səˈlɪl.ə.kwi/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Soliloquy",
            "targetText": "Soliloquy shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Dramatic Irony",
          "passage": "Critical literary scholars examine how authors deploy soliloquy to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g09_u3_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g09_u3_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Soliloquy enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Soliloquy",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g09_u4",
        "unitNumber": 4,
        "title": "Unit 4: Poetry and Poetic Devices: Metaphor, Tone & Meter",
        "vietnameseTitle": "Chuyên đề: Thơ Ca & Biện Pháp Tu Từ: Ẩn Dụ, Âm Điệu & Nhịp Thơ (McDougal Littell Literature G9)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 09: Poetics. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Poetics.",
        "sentencePatterns": [
          "Through rigorous analysis of alliteration, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs alliteration to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Alliteration (/əˌlɪt.əˈreɪ.ʃən/).",
        "vocabulary": [
          {
            "word": "Alliteration",
            "ipa": "/əˌlɪt.əˈreɪ.ʃən/",
            "type": "noun",
            "meaning": "Biện pháp điệp phụ âm đầu",
            "example": "The essay deeply analyzes the concept of alliteration.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm biện pháp điệp phụ âm đầu.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Poetics, note how the text utilizes alliteration. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g09_u4_1",
              "label": "A",
              "text": "Alliteration",
              "isCorrect": true
            },
            {
              "id": "opt_g09_u4_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Alliteration\"."
        },
        "speakingPractice": [
          {
            "phrase": "Alliteration shapes literary meaning.",
            "ipa": "/əˌlɪt.əˈreɪ.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Alliteration",
            "targetText": "Alliteration shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Poetics",
          "passage": "Critical literary scholars examine how authors deploy alliteration to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g09_u4_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g09_u4_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Alliteration enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Alliteration",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g09_u5",
        "unitNumber": 5,
        "title": "Unit 5: Nonfiction Analysis: Rhetorical Fallacies & Bias",
        "vietnameseTitle": "Chuyên đề: Phân Tích Văn Phi Hư Cấu: Ngụy Biện Logic & Thiên Vị (McDougal Littell Literature G9)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 09: Rhetorical Criticism. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Rhetorical Criticism.",
        "sentencePatterns": [
          "Through rigorous analysis of fallacy, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs fallacy to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Fallacy (/ˈfæl.ə.si/).",
        "vocabulary": [
          {
            "word": "Fallacy",
            "ipa": "/ˈfæl.ə.si/",
            "type": "noun",
            "meaning": "Lỗi ngụy biện logic",
            "example": "The essay deeply analyzes the concept of fallacy.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm lỗi ngụy biện logic.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Rhetorical Criticism, note how the text utilizes fallacy. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g09_u5_1",
              "label": "A",
              "text": "Fallacy",
              "isCorrect": true
            },
            {
              "id": "opt_g09_u5_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Fallacy\"."
        },
        "speakingPractice": [
          {
            "phrase": "Fallacy shapes literary meaning.",
            "ipa": "/ˈfæl.ə.si/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Fallacy",
            "targetText": "Fallacy shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Rhetorical Criticism",
          "passage": "Critical literary scholars examine how authors deploy fallacy to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g09_u5_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g09_u5_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Fallacy enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Fallacy",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g09_u6",
        "unitNumber": 6,
        "title": "Unit 6: Writer's Choice: Literary Synthesis & MLA Research",
        "vietnameseTitle": "Chuyên đề: Writer's Choice: Viết Báo Cáo Nghiên Cứu & Trích Dẫn MLA (Writer's Choice G9)",
        "curriculumSeries": "Writer's Choice",
        "driveLink": "https://drive.google.com/drive/folders/13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 09: MLA Research. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for MLA Research.",
        "sentencePatterns": [
          "Through rigorous analysis of in-text citation, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs in-text citation to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: In-text citation (/ˈɪnˌtekst saɪˈteɪ.ʃən/).",
        "vocabulary": [
          {
            "word": "In-text citation",
            "ipa": "/ˈɪnˌtekst saɪˈteɪ.ʃən/",
            "type": "noun",
            "meaning": "Trích dẫn chuẩn trong văn bản",
            "example": "The essay deeply analyzes the concept of in-text citation.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm trích dẫn chuẩn trong văn bản.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on MLA Research, note how the text utilizes in-text citation. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g09_u6_1",
              "label": "A",
              "text": "In-text citation",
              "isCorrect": true
            },
            {
              "id": "opt_g09_u6_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"In-text citation\"."
        },
        "speakingPractice": [
          {
            "phrase": "In-text citation shapes literary meaning.",
            "ipa": "/ˈɪnˌtekst saɪˈteɪ.ʃən/",
            "prompt": "Luyện phát âm thuật ngữ học thuật In-text citation",
            "targetText": "In-text citation shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on MLA Research",
          "passage": "Critical literary scholars examine how authors deploy in-text citation to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g09_u6_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g09_u6_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "In-text citation enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "In-text citation",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "Writer's Choice"
      }
    ]
  },
  {
    "grade": "Lớp 10 (Grade 10)",
    "gradeCode": "G10",
    "level": "highschool",
    "levelName": "THPT (Chuẩn Mỹ G10)",
    "driveFolderId": "1qlmR8rMG2FD5YY5G1Lp9SUigPBitpz86",
    "driveUrl": "https://drive.google.com/drive/folders/1qlmR8rMG2FD5YY5G1Lp9SUigPBitpz86",
    "textbooks": [
      "McDougal Littell Literature Grade 10 (Masterpieces of World Literature)",
      "Writer's Choice: Grammar and Composition Grade 10",
      "Vocabulary Practice and Tests with Answer Key Grade 10",
      "Grammar Usage and Mechanics Language Skills Practice G10"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 10: Tinh hoa Văn học Thế giới (World Literature), Nghệ thuật Hùng biện (Ethos, Pathos, Logos), Bộ đề Vocabulary Tests kèm Answer Key cho kỳ thi SAT.",
    "color": "purple",
    "units": [
      {
        "id": "us_g10_u1",
        "unitNumber": 1,
        "title": "Unit 1: World Literature Masterpieces & Cultural Perspectives",
        "vietnameseTitle": "Chuyên đề: Kiệt Tác Văn Học Thế Giới & Góc Nhìn Văn Hóa Đa Chiều (McDougal Littell Literature G10)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1qlmR8rMG2FD5YY5G1Lp9SUigPBitpz86",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 10: World Masterpieces. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for World Masterpieces.",
        "sentencePatterns": [
          "Through rigorous analysis of allegory, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs allegory to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Allegory (/ˈæl.ə.ɡri/).",
        "vocabulary": [
          {
            "word": "Allegory",
            "ipa": "/ˈæl.ə.ɡri/",
            "type": "noun",
            "meaning": "Truyện ngụ ngôn ẩn ý triết lý",
            "example": "The essay deeply analyzes the concept of allegory.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm truyện ngụ ngôn ẩn ý triết lý.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on World Masterpieces, note how the text utilizes allegory. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g10_u1_1",
              "label": "A",
              "text": "Allegory",
              "isCorrect": true
            },
            {
              "id": "opt_g10_u1_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Allegory\"."
        },
        "speakingPractice": [
          {
            "phrase": "Allegory shapes literary meaning.",
            "ipa": "/ˈæl.ə.ɡri/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Allegory",
            "targetText": "Allegory shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on World Masterpieces",
          "passage": "Critical literary scholars examine how authors deploy allegory to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g10_u1_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g10_u1_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Allegory enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Allegory",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g10_u2",
        "unitNumber": 2,
        "title": "Unit 2: Classical Rhetoric: Ethos, Pathos & Logos in Persuasion",
        "vietnameseTitle": "Chuyên đề: Thuật Hùng Biện Cổ Điển: Tam Giác Thuyết Phục Ethos, Pathos & Logos (McDougal Littell Literature G10)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1qlmR8rMG2FD5YY5G1Lp9SUigPBitpz86",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 10: Classical Rhetoric. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Classical Rhetoric.",
        "sentencePatterns": [
          "Through rigorous analysis of ethos, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs ethos to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Ethos (/ˈiː.θɒs/).",
        "vocabulary": [
          {
            "word": "Ethos",
            "ipa": "/ˈiː.θɒs/",
            "type": "noun",
            "meaning": "Uy tín và đạo đức của diễn giả",
            "example": "The essay deeply analyzes the concept of ethos.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm uy tín và đạo đức của diễn giả.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Classical Rhetoric, note how the text utilizes ethos. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g10_u2_1",
              "label": "A",
              "text": "Ethos",
              "isCorrect": true
            },
            {
              "id": "opt_g10_u2_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Ethos\"."
        },
        "speakingPractice": [
          {
            "phrase": "Ethos shapes literary meaning.",
            "ipa": "/ˈiː.θɒs/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Ethos",
            "targetText": "Ethos shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Classical Rhetoric",
          "passage": "Critical literary scholars examine how authors deploy ethos to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g10_u2_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g10_u2_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Ethos enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Ethos",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g10_u3",
        "unitNumber": 3,
        "title": "Unit 3: Greek Tragedy: Sophocles' Antigone & Moral Conflict",
        "vietnameseTitle": "Chuyên đề: Bi Kịch Hy Lạp: Vở Kịch Antigone & Xung Đột Đạo Đức (McDougal Littell Literature G10)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1qlmR8rMG2FD5YY5G1Lp9SUigPBitpz86",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 10: Greek Tragedy. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Greek Tragedy.",
        "sentencePatterns": [
          "Through rigorous analysis of catharsis, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs catharsis to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Catharsis (/kəˈθɑː.sɪs/).",
        "vocabulary": [
          {
            "word": "Catharsis",
            "ipa": "/kəˈθɑː.sɪs/",
            "type": "noun",
            "meaning": "Sự thanh lọc tâm hồn trong bi kịch",
            "example": "The essay deeply analyzes the concept of catharsis.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm sự thanh lọc tâm hồn trong bi kịch.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Greek Tragedy, note how the text utilizes catharsis. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g10_u3_1",
              "label": "A",
              "text": "Catharsis",
              "isCorrect": true
            },
            {
              "id": "opt_g10_u3_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Catharsis\"."
        },
        "speakingPractice": [
          {
            "phrase": "Catharsis shapes literary meaning.",
            "ipa": "/kəˈθɑː.sɪs/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Catharsis",
            "targetText": "Catharsis shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Greek Tragedy",
          "passage": "Critical literary scholars examine how authors deploy catharsis to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g10_u3_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g10_u3_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Catharsis enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Catharsis",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g10_u4",
        "unitNumber": 4,
        "title": "Unit 4: The Novel: Critical Analysis, Symbolism & Historical Context",
        "vietnameseTitle": "Chuyên đề: Tiểu Thuyết: Phân Tích Biểu Tượng & Bối Cảnh Lịch Sử (McDougal Littell Literature G10)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1qlmR8rMG2FD5YY5G1Lp9SUigPBitpz86",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 10: Novel Analysis. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Novel Analysis.",
        "sentencePatterns": [
          "Through rigorous analysis of motif, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs motif to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Motif (/məʊˈtiːf/).",
        "vocabulary": [
          {
            "word": "Motif",
            "ipa": "/məʊˈtiːf/",
            "type": "noun",
            "meaning": "Mô-típ nghệ thuật lặp lại",
            "example": "The essay deeply analyzes the concept of motif.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm mô-típ nghệ thuật lặp lại.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Novel Analysis, note how the text utilizes motif. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g10_u4_1",
              "label": "A",
              "text": "Motif",
              "isCorrect": true
            },
            {
              "id": "opt_g10_u4_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Motif\"."
        },
        "speakingPractice": [
          {
            "phrase": "Motif shapes literary meaning.",
            "ipa": "/məʊˈtiːf/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Motif",
            "targetText": "Motif shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Novel Analysis",
          "passage": "Critical literary scholars examine how authors deploy motif to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g10_u4_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g10_u4_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Motif enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Motif",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g10_u5",
        "unitNumber": 5,
        "title": "Unit 5: Writer's Choice: Research Writing, Evidence & MLA Format",
        "vietnameseTitle": "Chuyên đề: Writer's Choice: Viết Luận Nghiên Cứu Chuẩn Học Thuật MLA (Writer's Choice G10)",
        "curriculumSeries": "Writer's Choice",
        "driveLink": "https://drive.google.com/drive/folders/1qlmR8rMG2FD5YY5G1Lp9SUigPBitpz86",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 10: Academic Argument. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Academic Argument.",
        "sentencePatterns": [
          "Through rigorous analysis of synthesis, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs synthesis to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Synthesis (/ˈsɪn.θə.sɪs/).",
        "vocabulary": [
          {
            "word": "Synthesis",
            "ipa": "/ˈsɪn.θə.sɪs/",
            "type": "noun",
            "meaning": "Tổng hợp đa nguồn tài liệu",
            "example": "The essay deeply analyzes the concept of synthesis.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm tổng hợp đa nguồn tài liệu.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Academic Argument, note how the text utilizes synthesis. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g10_u5_1",
              "label": "A",
              "text": "Synthesis",
              "isCorrect": true
            },
            {
              "id": "opt_g10_u5_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Synthesis\"."
        },
        "speakingPractice": [
          {
            "phrase": "Synthesis shapes literary meaning.",
            "ipa": "/ˈsɪn.θə.sɪs/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Synthesis",
            "targetText": "Synthesis shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Academic Argument",
          "passage": "Critical literary scholars examine how authors deploy synthesis to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g10_u5_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g10_u5_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Synthesis enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Synthesis",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "Writer's Choice"
      },
      {
        "id": "us_g10_u6",
        "unitNumber": 6,
        "title": "Unit 6: Vocabulary Practice and Tests with Answer Key (SAT Prep)",
        "vietnameseTitle": "Chuyên đề: Luyện Từ Vựng Học Thuật SAT Kèm Đáp Án Chi Tiết (Vocabulary Practice & Tests G10)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1qlmR8rMG2FD5YY5G1Lp9SUigPBitpz86",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 10: SAT Vocabulary. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for SAT Vocabulary.",
        "sentencePatterns": [
          "Through rigorous analysis of ambiguous, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs ambiguous to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Ambiguous (/æmˈbɪɡ.ju.əs/).",
        "vocabulary": [
          {
            "word": "Ambiguous",
            "ipa": "/æmˈbɪɡ.ju.əs/",
            "type": "noun",
            "meaning": "Mơ hồ, có thể hiểu theo nhiều nghĩa",
            "example": "The essay deeply analyzes the concept of ambiguous.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm mơ hồ, có thể hiểu theo nhiều nghĩa.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on SAT Vocabulary, note how the text utilizes ambiguous. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g10_u6_1",
              "label": "A",
              "text": "Ambiguous",
              "isCorrect": true
            },
            {
              "id": "opt_g10_u6_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Ambiguous\"."
        },
        "speakingPractice": [
          {
            "phrase": "Ambiguous shapes literary meaning.",
            "ipa": "/æmˈbɪɡ.ju.əs/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Ambiguous",
            "targetText": "Ambiguous shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on SAT Vocabulary",
          "passage": "Critical literary scholars examine how authors deploy ambiguous to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g10_u6_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g10_u6_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Ambiguous enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Ambiguous",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      }
    ]
  },
  {
    "grade": "Lớp 11 (Grade 11)",
    "gradeCode": "G11",
    "level": "highschool",
    "levelName": "THPT (Chuẩn Mỹ G11)",
    "driveFolderId": "1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
    "driveUrl": "https://drive.google.com/drive/folders/1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
    "textbooks": [
      "McDougal Littell Literature Grade 11: American Literature",
      "Writer's Choice: Grammar and Composition Grade 11",
      "Vocabulary Workshop & ACT/SAT Reading Preparation"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 11: Văn học Mỹ từ Thời kỳ Lãng mạn & Siêu việt luận (Emerson, Thoreau) đến The Great Gatsby và Giấc mơ Mỹ, Viết luận Tổng hợp ACT/SAT.",
    "color": "purple",
    "units": [
      {
        "id": "us_g11_u1",
        "unitNumber": 1,
        "title": "Unit 1: Early American Voices: Puritan Tradition & Independence",
        "vietnameseTitle": "Chuyên đề: Tiếng Nói Đầu Tiên Nước Mỹ: Truyền Thống Thanh Giáo & Tuyên Ngôn Độc Lập (American Literature G11)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 11: Colonial America. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Colonial America.",
        "sentencePatterns": [
          "Through rigorous analysis of providence, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs providence to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Providence (/ˈprɒv.ɪ.dəns/).",
        "vocabulary": [
          {
            "word": "Providence",
            "ipa": "/ˈprɒv.ɪ.dəns/",
            "type": "noun",
            "meaning": "Ý niệm Thiên mệnh / Sự che chở của Chúa",
            "example": "The essay deeply analyzes the concept of providence.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm ý niệm thiên mệnh / sự che chở của chúa.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Colonial America, note how the text utilizes providence. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g11_u1_1",
              "label": "A",
              "text": "Providence",
              "isCorrect": true
            },
            {
              "id": "opt_g11_u1_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Providence\"."
        },
        "speakingPractice": [
          {
            "phrase": "Providence shapes literary meaning.",
            "ipa": "/ˈprɒv.ɪ.dəns/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Providence",
            "targetText": "Providence shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Colonial America",
          "passage": "Critical literary scholars examine how authors deploy providence to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g11_u1_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g11_u1_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Providence enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Providence",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g11_u2",
        "unitNumber": 2,
        "title": "Unit 2: American Romanticism & Transcendentalism (Emerson, Thoreau)",
        "vietnameseTitle": "Chuyên đề: Chủ Nghĩa Lãng Mạn & Thuyết Siêu Việt (Emerson & Thoreau) (American Literature G11)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 11: Transcendentalism. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Transcendentalism.",
        "sentencePatterns": [
          "Through rigorous analysis of intuition, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs intuition to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Intuition (/ˌɪn.tʃuːˈɪʃ.ən/).",
        "vocabulary": [
          {
            "word": "Intuition",
            "ipa": "/ˌɪn.tʃuːˈɪʃ.ən/",
            "type": "noun",
            "meaning": "Trực giác siêu việt tự nhiên",
            "example": "The essay deeply analyzes the concept of intuition.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm trực giác siêu việt tự nhiên.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Transcendentalism, note how the text utilizes intuition. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g11_u2_1",
              "label": "A",
              "text": "Intuition",
              "isCorrect": true
            },
            {
              "id": "opt_g11_u2_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Intuition\"."
        },
        "speakingPractice": [
          {
            "phrase": "Intuition shapes literary meaning.",
            "ipa": "/ˌɪn.tʃuːˈɪʃ.ən/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Intuition",
            "targetText": "Intuition shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Transcendentalism",
          "passage": "Critical literary scholars examine how authors deploy intuition to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g11_u2_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g11_u2_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Intuition enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Intuition",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g11_u3",
        "unitNumber": 3,
        "title": "Unit 3: The American Renaissance: Poe, Hawthorne, Melville & Dickinson",
        "vietnameseTitle": "Chuyên đề: Phục Hưng Văn Học Mỹ: Truyện Kinh Dị Của Poe & Thơ Dickinson (American Literature G11)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 11: Gothic Romanticism. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Gothic Romanticism.",
        "sentencePatterns": [
          "Through rigorous analysis of macabre, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs macabre to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Macabre (/məˈkɑː.brə/).",
        "vocabulary": [
          {
            "word": "Macabre",
            "ipa": "/məˈkɑː.brə/",
            "type": "noun",
            "meaning": "Không khí u ám, rùng rợn kỳ bí",
            "example": "The essay deeply analyzes the concept of macabre.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm không khí u ám, rùng rợn kỳ bí.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Gothic Romanticism, note how the text utilizes macabre. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g11_u3_1",
              "label": "A",
              "text": "Macabre",
              "isCorrect": true
            },
            {
              "id": "opt_g11_u3_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Macabre\"."
        },
        "speakingPractice": [
          {
            "phrase": "Macabre shapes literary meaning.",
            "ipa": "/məˈkɑː.brə/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Macabre",
            "targetText": "Macabre shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Gothic Romanticism",
          "passage": "Critical literary scholars examine how authors deploy macabre to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g11_u3_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g11_u3_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Macabre enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Macabre",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g11_u4",
        "unitNumber": 4,
        "title": "Unit 4: Realism & Regionalism: Mark Twain & The Gilded Age",
        "vietnameseTitle": "Chuyên đề: Chủ Nghĩa Hiện Thực: Mark Twain & Thời Kỳ Vàng Son Nước Mỹ (American Literature G11)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 11: Literary Realism. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Literary Realism.",
        "sentencePatterns": [
          "Through rigorous analysis of vernacular, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs vernacular to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Vernacular (/vəˈnæk.jə.lər/).",
        "vocabulary": [
          {
            "word": "Vernacular",
            "ipa": "/vəˈnæk.jə.lər/",
            "type": "noun",
            "meaning": "Ngôn ngữ địa phương, tiếng lóng dân tộc",
            "example": "The essay deeply analyzes the concept of vernacular.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm ngôn ngữ địa phương, tiếng lóng dân tộc.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Literary Realism, note how the text utilizes vernacular. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g11_u4_1",
              "label": "A",
              "text": "Vernacular",
              "isCorrect": true
            },
            {
              "id": "opt_g11_u4_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Vernacular\"."
        },
        "speakingPractice": [
          {
            "phrase": "Vernacular shapes literary meaning.",
            "ipa": "/vəˈnæk.jə.lər/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Vernacular",
            "targetText": "Vernacular shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Literary Realism",
          "passage": "Critical literary scholars examine how authors deploy vernacular to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g11_u4_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g11_u4_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Vernacular enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Vernacular",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g11_u5",
        "unitNumber": 5,
        "title": "Unit 5: Modernism & The Lost Generation: The Great Gatsby",
        "vietnameseTitle": "Chuyên đề: Chủ Nghĩa Hiện Đại & Đại Gia Gatsby: Phản Chiếu Giấc Mơ Mỹ (American Literature G11)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 11: The American Dream. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for The American Dream.",
        "sentencePatterns": [
          "Through rigorous analysis of disillusionment, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs disillusionment to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Disillusionment (/ˌdɪs.ɪˈluː.ʒən.mənt/).",
        "vocabulary": [
          {
            "word": "Disillusionment",
            "ipa": "/ˌdɪs.ɪˈluː.ʒən.mənt/",
            "type": "noun",
            "meaning": "Sự vỡ mộng, tỉnh ngộ cay đắng",
            "example": "The essay deeply analyzes the concept of disillusionment.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm sự vỡ mộng, tỉnh ngộ cay đắng.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on The American Dream, note how the text utilizes disillusionment. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g11_u5_1",
              "label": "A",
              "text": "Disillusionment",
              "isCorrect": true
            },
            {
              "id": "opt_g11_u5_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Disillusionment\"."
        },
        "speakingPractice": [
          {
            "phrase": "Disillusionment shapes literary meaning.",
            "ipa": "/ˌdɪs.ɪˈluː.ʒən.mənt/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Disillusionment",
            "targetText": "Disillusionment shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on The American Dream",
          "passage": "Critical literary scholars examine how authors deploy disillusionment to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g11_u5_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g11_u5_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Disillusionment enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Disillusionment",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g11_u6",
        "unitNumber": 6,
        "title": "Unit 6: Advanced Rhetorical Analysis & ACT/SAT Synthesis Essay",
        "vietnameseTitle": "Chuyên đề: Phân Tích Hùng Biện Nâng Cao & Viết Luận Tổng Hợp SAT/ACT (Writer's Choice G11)",
        "curriculumSeries": "Writer's Choice",
        "driveLink": "https://drive.google.com/drive/folders/1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 11: Synthesis Essay. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Synthesis Essay.",
        "sentencePatterns": [
          "Through rigorous analysis of juxtaposition, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs juxtaposition to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Juxtaposition (/ˌdʒʌk.stə.pəˈzɪʃ.ən/).",
        "vocabulary": [
          {
            "word": "Juxtaposition",
            "ipa": "/ˌdʒʌk.stə.pəˈzɪʃ.ən/",
            "type": "noun",
            "meaning": "Nghệ thuật đặt cạnh nhau để đối chiếu",
            "example": "The essay deeply analyzes the concept of juxtaposition.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm nghệ thuật đặt cạnh nhau để đối chiếu.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Synthesis Essay, note how the text utilizes juxtaposition. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g11_u6_1",
              "label": "A",
              "text": "Juxtaposition",
              "isCorrect": true
            },
            {
              "id": "opt_g11_u6_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Juxtaposition\"."
        },
        "speakingPractice": [
          {
            "phrase": "Juxtaposition shapes literary meaning.",
            "ipa": "/ˌdʒʌk.stə.pəˈzɪʃ.ən/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Juxtaposition",
            "targetText": "Juxtaposition shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Synthesis Essay",
          "passage": "Critical literary scholars examine how authors deploy juxtaposition to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g11_u6_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g11_u6_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Juxtaposition enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Juxtaposition",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "Writer's Choice"
      }
    ]
  },
  {
    "grade": "Lớp 12 (Grade 12)",
    "gradeCode": "G12",
    "level": "highschool",
    "levelName": "THPT (Chuẩn Mỹ G12)",
    "driveFolderId": "1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
    "driveUrl": "https://drive.google.com/drive/folders/1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
    "textbooks": [
      "McDougal Littell Literature Grade 12: British Literature",
      "Writer's Choice: Grammar and Composition Grade 12",
      "AP English Literature & College Admissions Essays"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 12: Tinh hoa Văn học Anh & Thế giới từ Sử thi Beowulf, Bi kịch Hamlet (Shakespeare), Văn học Phản địa đàng (1984 của Orwell) đến Luận Đại học Mỹ.",
    "color": "purple",
    "units": [
      {
        "id": "us_g12_u1",
        "unitNumber": 1,
        "title": "Unit 1: Anglo-Saxon & Medieval Period: Beowulf & Canterbury Tales",
        "vietnameseTitle": "Chuyên đề: Thời Kỳ Anglo-Saxon & Trung Cổ: Sử Thi Beowulf & Truyện Canterbury (British Literature G12)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 12: Old English Epic. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Old English Epic.",
        "sentencePatterns": [
          "Through rigorous analysis of kenning, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs kenning to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Kenning (/ˈken.ɪŋ/).",
        "vocabulary": [
          {
            "word": "Kenning",
            "ipa": "/ˈken.ɪŋ/",
            "type": "noun",
            "meaning": "Ẩn dụ ghép đôi trong thơ cổ (vd: whale-road = biển)",
            "example": "The essay deeply analyzes the concept of kenning.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm ẩn dụ ghép đôi trong thơ cổ (vd: whale-road = biển).",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Old English Epic, note how the text utilizes kenning. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g12_u1_1",
              "label": "A",
              "text": "Kenning",
              "isCorrect": true
            },
            {
              "id": "opt_g12_u1_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Kenning\"."
        },
        "speakingPractice": [
          {
            "phrase": "Kenning shapes literary meaning.",
            "ipa": "/ˈken.ɪŋ/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Kenning",
            "targetText": "Kenning shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Old English Epic",
          "passage": "Critical literary scholars examine how authors deploy kenning to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g12_u1_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g12_u1_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Kenning enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Kenning",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g12_u2",
        "unitNumber": 2,
        "title": "Unit 2: The English Renaissance: Shakespeare's Hamlet & Macbeth",
        "vietnameseTitle": "Chuyên đề: Phục Hưng Nước Anh: Bi Kịch Hamlet & Macbeth của Shakespeare (British Literature G12)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 12: Shakespearean Tragedy. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Shakespearean Tragedy.",
        "sentencePatterns": [
          "Through rigorous analysis of hamartia, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs hamartia to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Hamartia (/ˌhɑː.mɑːˈtiː.ə/).",
        "vocabulary": [
          {
            "word": "Hamartia",
            "ipa": "/ˌhɑː.mɑːˈtiː.ə/",
            "type": "noun",
            "meaning": "Tử huyệt bi kịch định mệnh của nhân vật",
            "example": "The essay deeply analyzes the concept of hamartia.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm tử huyệt bi kịch định mệnh của nhân vật.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Shakespearean Tragedy, note how the text utilizes hamartia. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g12_u2_1",
              "label": "A",
              "text": "Hamartia",
              "isCorrect": true
            },
            {
              "id": "opt_g12_u2_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Hamartia\"."
        },
        "speakingPractice": [
          {
            "phrase": "Hamartia shapes literary meaning.",
            "ipa": "/ˌhɑː.mɑːˈtiː.ə/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Hamartia",
            "targetText": "Hamartia shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Shakespearean Tragedy",
          "passage": "Critical literary scholars examine how authors deploy hamartia to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g12_u2_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g12_u2_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Hamartia enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Hamartia",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g12_u3",
        "unitNumber": 3,
        "title": "Unit 3: The Enlightenment & Romanticism: Swift, Shelley & Keats",
        "vietnameseTitle": "Chuyên đề: Thời Kỳ Khai Sáng & Lãng Mạn Anh: Châm Biếm Của Swift & Thơ Keats (British Literature G12)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 12: Satire and Romanticism. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Satire and Romanticism.",
        "sentencePatterns": [
          "Through rigorous analysis of satire, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs satire to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Satire (/ˈsæt.aɪər/).",
        "vocabulary": [
          {
            "word": "Satire",
            "ipa": "/ˈsæt.aɪər/",
            "type": "noun",
            "meaning": "Nghệ thuật châm biếm xã hội sâu cay",
            "example": "The essay deeply analyzes the concept of satire.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm nghệ thuật châm biếm xã hội sâu cay.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Satire and Romanticism, note how the text utilizes satire. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g12_u3_1",
              "label": "A",
              "text": "Satire",
              "isCorrect": true
            },
            {
              "id": "opt_g12_u3_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Satire\"."
        },
        "speakingPractice": [
          {
            "phrase": "Satire shapes literary meaning.",
            "ipa": "/ˈsæt.aɪər/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Satire",
            "targetText": "Satire shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Satire and Romanticism",
          "passage": "Critical literary scholars examine how authors deploy satire to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g12_u3_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g12_u3_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Satire enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Satire",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g12_u4",
        "unitNumber": 4,
        "title": "Unit 4: The Victorian Era to Modernism: Dickens, Woolf & Yeats",
        "vietnameseTitle": "Chuyên đề: Thời Đại Victoria đến Chủ Nghĩa Hiện Đại: Dickens & Virginia Woolf (British Literature G12)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 12: Stream of Consciousness. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Stream of Consciousness.",
        "sentencePatterns": [
          "Through rigorous analysis of stream of consciousness, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs stream of consciousness to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Stream of consciousness (/striːm əv ˈkɒn.ʃəs.nəs/).",
        "vocabulary": [
          {
            "word": "Stream of consciousness",
            "ipa": "/striːm əv ˈkɒn.ʃəs.nəs/",
            "type": "noun",
            "meaning": "Dòng ý thức tuôn trào trong văn xuôi",
            "example": "The essay deeply analyzes the concept of stream of consciousness.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm dòng ý thức tuôn trào trong văn xuôi.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Stream of Consciousness, note how the text utilizes stream of consciousness. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g12_u4_1",
              "label": "A",
              "text": "Stream of consciousness",
              "isCorrect": true
            },
            {
              "id": "opt_g12_u4_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Stream of consciousness\"."
        },
        "speakingPractice": [
          {
            "phrase": "Stream of consciousness shapes literary meaning.",
            "ipa": "/striːm əv ˈkɒn.ʃəs.nəs/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Stream of consciousness",
            "targetText": "Stream of consciousness shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Stream of Consciousness",
          "passage": "Critical literary scholars examine how authors deploy stream of consciousness to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g12_u4_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g12_u4_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Stream of consciousness enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Stream of consciousness",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g12_u5",
        "unitNumber": 5,
        "title": "Unit 5: Dystopian Fiction & Totalitarian Critique: George Orwell's 1984",
        "vietnameseTitle": "Chuyên đề: Văn Học Phản Địa Đàng (Dystopia): Tác Phẩm 1984 của George Orwell (British Literature G12)",
        "curriculumSeries": "McDougal Littell",
        "driveLink": "https://drive.google.com/drive/folders/1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 12: Dystopian Literature. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for Dystopian Literature.",
        "sentencePatterns": [
          "Through rigorous analysis of doublethink, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs doublethink to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Doublethink (/ˈdʌb.əl.θɪŋk/).",
        "vocabulary": [
          {
            "word": "Doublethink",
            "ipa": "/ˈdʌb.əl.θɪŋk/",
            "type": "noun",
            "meaning": "Tư duy nước đôi (chấp nhận hai niềm tin mâu thuẫn)",
            "example": "The essay deeply analyzes the concept of doublethink.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm tư duy nước đôi (chấp nhận hai niềm tin mâu thuẫn).",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on Dystopian Literature, note how the text utilizes doublethink. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g12_u5_1",
              "label": "A",
              "text": "Doublethink",
              "isCorrect": true
            },
            {
              "id": "opt_g12_u5_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Doublethink\"."
        },
        "speakingPractice": [
          {
            "phrase": "Doublethink shapes literary meaning.",
            "ipa": "/ˈdʌb.əl.θɪŋk/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Doublethink",
            "targetText": "Doublethink shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on Dystopian Literature",
          "passage": "Critical literary scholars examine how authors deploy doublethink to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g12_u5_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g12_u5_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Doublethink enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Doublethink",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "McDougal Littell"
      },
      {
        "id": "us_g12_u6",
        "unitNumber": 6,
        "title": "Unit 6: AP English Literature & Personal College Admissions Statement",
        "vietnameseTitle": "Chuyên đề: Luyện Đề AP English Literature & Hoàn Thiện Bài Luận Đại Học Mỹ (Writer's Choice G12)",
        "curriculumSeries": "Writer's Choice",
        "driveLink": "https://drive.google.com/drive/folders/1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
        "overview": "Trọng tâm kiến thức chuẩn Mỹ Grade 12: College Admissions Essay. Rèn luyện tư duy phản biện, phân tích văn học và viết luận học thuật chuyên sâu.",
        "grammarFocus": "Academic Grammar Focus: Advanced syntactical structures, rhetorical balance, and thesis statements for College Admissions Essay.",
        "sentencePatterns": [
          "Through rigorous analysis of nuance, scholars uncover deeper philosophical motifs.",
          "The author masterfully employs nuance to challenge conventional perceptions."
        ],
        "tips": "Phát âm chuẩn thuật ngữ học thuật: Nuance (/ˈnjuː.ɑːns/).",
        "vocabulary": [
          {
            "word": "Nuance",
            "ipa": "/ˈnjuː.ɑːns/",
            "type": "noun",
            "meaning": "Sắc thái tinh tế trong ý nghĩa và ngôn từ",
            "example": "The essay deeply analyzes the concept of nuance.",
            "exampleVi": "Bài luận phân tích sâu sắc khái niệm sắc thái tinh tế trong ý nghĩa và ngôn từ.",
            "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Thuật hùng biện, nghệ thuật sử dụng ngôn từ",
            "example": "The speaker's persuasive rhetoric captivated the audience.",
            "exampleVi": "Thuật hùng biện thuyết phục của diễn giả đã lôi cuốn khán giả.",
            "imageUrl": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm nhận thức",
            "example": "Literature broadens our cultural perspectives.",
            "exampleVi": "Văn học mở rộng góc nhìn văn hóa của chúng ta.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "University Professor: In today's seminar on College Admissions Essay, note how the text utilizes nuance. It allows the narrator to construct a compelling narrative voice.",
          "question": "What rhetorical technique is emphasized in the seminar?",
          "options": [
            {
              "id": "opt_g12_u6_1",
              "label": "A",
              "text": "Nuance",
              "isCorrect": true
            },
            {
              "id": "opt_g12_u6_2",
              "label": "B",
              "text": "Linear simplistic exposition",
              "isCorrect": false
            }
          ],
          "explanation": "Giáo sư khẳng định kỹ thuật trọng tâm là: \"Nuance\"."
        },
        "speakingPractice": [
          {
            "phrase": "Nuance shapes literary meaning.",
            "ipa": "/ˈnjuː.ɑːns/",
            "prompt": "Luyện phát âm thuật ngữ học thuật Nuance",
            "targetText": "Nuance shapes literary meaning",
            "difficulty": "Hard"
          }
        ],
        "readingPractice": {
          "title": "Critical Perspectives on College Admissions Essay",
          "passage": "Critical literary scholars examine how authors deploy nuance to convey complex thematic undertones. Rather than stating themes explicitly, sophisticated writers weave subtle symbols throughout the narrative fabric, inviting discerning readers to engage in active interpretation.",
          "question": "Why do sophisticated writers utilize subtle techniques rather than explicit statements?",
          "options": [
            {
              "id": "opt_r_g12_u6_1",
              "label": "A",
              "text": "To invite active intellectual interpretation by the reader",
              "isCorrect": true
            },
            {
              "id": "opt_r_g12_u6_2",
              "label": "B",
              "text": "To conceal their lack of ideas",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn nêu: \"inviting discerning readers to engage in active interpretation\"."
        },
        "writingPractice": {
          "type": "sentence_rearrangement",
          "prompt": "Sắp xếp các từ thành câu học thuật hoàn chỉnh:",
          "correctSentence": "Nuance enhances the philosophical depth of literature",
          "scrambledWords": [
            "depth",
            "philosophical",
            "literature",
            "enhances",
            "the",
            "Nuance",
            "of"
          ],
          "explanation": "Chủ ngữ + động từ (enhances) + cụm tân ngữ (the philosophical depth of literature)."
        },
        "series": "Writer's Choice"
      }
    ]
  }
];
