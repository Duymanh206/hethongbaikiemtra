/**
 * US_EDU Curriculum Database (Chương trình Hệ Song Ngữ & Quốc Tế Chuẩn Mỹ)
 * Tích hợp trực tiếp từ Google Drive: US_EDU (ID: 15PofJBFW3ymrm41AojESeKMuGvHVg7Y8)
 * Bao gồm các bộ giáo trình:
 * - California Science Leveled Readers (Grade 1 - 8)
 * - Scott Foresman Reading Street & ELL Readers (Grade 1 - 6)
 * - Math Concept Readers (Grade 1 - 6)
 * - Writer's Choice: Grammar and Composition (Grade 7 - 12)
 * - McDougal Littell Literature & Vocabulary Practice (Grade 9 - 12)
 * - Audio Tracks & Sound Studio theo từng Unit (G01 - G12)
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
      "Scott Foresman English Language Learner Reader (SF RS ELL Reader G1)",
      "Concept Literacy Leveled Readers - SF G1",
      "Beyond Level Readers - L G1",
      "Math Concept Readers G1"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 1: Khám phá thế giới tự nhiên (Living & Non-living Things), thời tiết (Weather & Seasons), ngữ âm Phonics và số đếm toán học sinh động.",
    "color": "emerald",
    "units": [
      {
        "id": "us_g1_u1",
        "unitNumber": 1,
        "title": "Unit 1: Living and Non-living Things",
        "vietnameseTitle": "Chuyên đề: Sinh vật sống & Vật không sống (California Science G1)",
        "curriculumSeries": "California Science Leveled Readers",
        "driveLink": "https://drive.google.com/drive/folders/11bEk0-9FP5RzEoo4uoTYd9uAJfYrV2Zh",
        "overview": "Học sinh phân biệt sinh vật sống (cần thức ăn, nước, không khí để lớn lên) với các vật thể vô tri.",
        "grammarFocus": "Living things need + [food / water / air] to survive and grow.",
        "sentencePatterns": [
          "Plants and animals are living things.",
          "A rock is a non-living thing because it does not grow."
        ],
        "tips": "Phát âm chuẩn cụm \"living things\" với âm /ɪ/ ngắn và đuôi /ŋz/.",
        "vocabulary": [
          {
            "word": "Living thing",
            "ipa": "/ˈlɪv.ɪŋ θɪŋ/",
            "type": "noun",
            "meaning": "Sinh vật sống",
            "example": "Plants are living things.",
            "exampleVi": "Cây cối là sinh vật sống.",
            "imageUrl": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Non-living",
            "ipa": "/nɒn ˈlɪv.ɪŋ/",
            "type": "adj",
            "meaning": "Vật vô tri, không sống",
            "example": "Rocks are non-living.",
            "exampleVi": "Đá là vật vô tri.",
            "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Survive",
            "ipa": "/səˈvaɪv/",
            "type": "verb",
            "meaning": "Sinh tồn, sống sót",
            "example": "Animals need water to survive.",
            "exampleVi": "Động vật cần nước để sinh tồn.",
            "imageUrl": "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Grow",
            "ipa": "/ɡrəʊ/",
            "type": "verb",
            "meaning": "Lớn lên, phát triển",
            "example": "A seed grows into a plant.",
            "exampleVi": "Hạt mầm lớn lên thành cây.",
            "imageUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Science teacher: Look around our garden! Plants and little birds are living things because they need food and water to grow.",
          "question": "What do living things need to grow?",
          "options": [
            {
              "id": "opt_usg1u1_1",
              "label": "A",
              "text": "Food and water (Thức ăn và nước uống)",
              "isCorrect": true
            },
            {
              "id": "opt_usg1u1_2",
              "label": "B",
              "text": "Batteries and gasoline",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe: \"they need food and water to grow\"."
        },
        "speakingPractice": [
          {
            "phrase": "Living things need water, food and fresh air to survive.",
            "vi": "Sinh vật sống cần nước, thức ăn và không khí trong lành để sinh tồn."
          }
        ],
        "readingPractice": {
          "passage": "All living things have basic needs. A rabbit eats green grass for energy. A tree uses sunlight, soil and rain to produce food. Non-living things, like pebbles and sand, never need food or air.",
          "question": "What does a rabbit eat for energy?",
          "options": [
            {
              "id": "opt_rusg1u1_1",
              "label": "A",
              "text": "Green grass (Cỏ xanh)",
              "isCorrect": true
            },
            {
              "id": "opt_rusg1u1_2",
              "label": "B",
              "text": "Pebbles and sand (Sỏi và cát)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"A rabbit eats green grass for energy\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu định nghĩa khoa học:",
          "scrambledWords": [
            "grow",
            "water",
            "need",
            "Living",
            "to",
            "things"
          ],
          "correctSentence": "Living things need water to grow",
          "explanation": "Cấu trúc S + need + O + to V: Living things need water to grow."
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
      "California Science Leveled Readers G2",
      "Scott Foresman Reading Street Comprehension G2",
      "Math Concept Readers G2"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 2: Môi trường sống của muôn loài (Habitats & Ecosystems), Vòng tuần hoàn của nước (The Water Cycle), đo lường hình học và đọc hiểu mở rộng.",
    "color": "emerald",
    "units": [
      {
        "id": "us_g2_u1",
        "unitNumber": 1,
        "title": "Unit 1: Animal Habitats & Adaptations",
        "vietnameseTitle": "Chuyên đề: Môi trường sống & Sự thích nghi của động vật (CaliSci G2)",
        "curriculumSeries": "California Science Leveled Readers G2",
        "driveLink": "https://drive.google.com/drive/folders/1j6l6C57HfjVdo1HJjH8xRxCmxYYIQdvm",
        "overview": "Khám phá môi trường sa mạc, rừng nhiệt đới, đại dương và cách các loài sinh vật thích nghi với môi trường sống.",
        "grammarFocus": "Cấu trúc thích nghi: Animals have + [đặc điểm] to survive in the + [môi trường].",
        "sentencePatterns": [
          "Camels have long eyelashes to keep out blowing desert sand.",
          "Fish have gills to breathe underwater."
        ],
        "tips": "Phát âm chuẩn từ \"habitat\" /ˈhæb.ɪ.tæt/ với trọng âm rơi vào âm tiết đầu tiên.",
        "vocabulary": [
          {
            "word": "Habitat",
            "ipa": "/ˈhæb.ɪ.tæt/",
            "type": "noun",
            "meaning": "Môi trường sống tự nhiên",
            "example": "The polar bear habitat is the freezing Arctic.",
            "exampleVi": "Môi trường sống của gấu Bắc Cực là vùng Bắc Cực băng giá.",
            "imageUrl": "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Adaptation",
            "ipa": "/ˌæd.æpˈteɪ.ʃən/",
            "type": "noun",
            "meaning": "Đặc điểm thích nghi sinh học",
            "example": "Thick blubber is an adaptation for extreme cold.",
            "exampleVi": "Lớp mỡ dày là đặc điểm thích nghi với cái lạnh khắc nghiệt.",
            "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Camouflage",
            "ipa": "/ˈkæm.ə.flɑːʒ/",
            "type": "noun/verb",
            "meaning": "Sự ngụy trang hòa vào môi trường",
            "example": "Chameleons use camouflage to hide from predators.",
            "exampleVi": "Tắc kè hoa dùng ngụy trang để lẩn trốn kẻ săn mồi.",
            "imageUrl": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Wildlife biologist: Polar bears have thick white fur and black skin beneath. The white fur camouflages them on snow, while their black skin absorbs heat from the sun.",
          "question": "What is the function of polar bears' white fur?",
          "options": [
            {
              "id": "opt_usg2u1_1",
              "label": "A",
              "text": "To camouflage them on white snow",
              "isCorrect": true
            },
            {
              "id": "opt_usg2u1_2",
              "label": "B",
              "text": "To glow brightly in the dark",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"The white fur camouflages them on snow\"."
        },
        "speakingPractice": [
          {
            "phrase": "Animals develop unique adaptations to survive in harsh habitats.",
            "vi": "Động vật phát triển các đặc điểm thích nghi độc đáo để sinh tồn trong môi trường khắc nghiệt."
          }
        ],
        "readingPractice": {
          "passage": "A habitat provides an animal with food, water, and shelter. Desert animals, such as kangaroo rats, obtain all the moisture they need directly from the seeds they consume, never needing to drink standing water.",
          "question": "Where do kangaroo rats get their moisture?",
          "options": [
            {
              "id": "opt_rusg2u1_1",
              "label": "A",
              "text": "Directly from the seeds they consume",
              "isCorrect": true
            },
            {
              "id": "opt_rusg2u1_2",
              "label": "B",
              "text": "From flowing mountain rivers",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"obtain all the moisture they need directly from the seeds they consume\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu đúng ngữ pháp:",
          "scrambledWords": [
            "gills",
            "breathe",
            "have",
            "Fish",
            "to",
            "underwater"
          ],
          "correctSentence": "Fish have gills to breathe underwater",
          "explanation": "Cấu trúc S + have + O + to V."
        }
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
      "California Science Leveled Readers G3",
      "Scott Foresman Reading Wonders G3",
      "Math Concept Readers G3"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 3: Các lực và chuyển động (Forces and Motion - Đẩy, Kéo, Trọng lực), Vòng đời sinh vật và Phân số toán học (Fractions).",
    "color": "emerald",
    "units": [
      {
        "id": "us_g3_u1",
        "unitNumber": 1,
        "title": "Unit 1: Forces, Motion and Gravity",
        "vietnameseTitle": "Chuyên đề: Lực, Chuyển động & Trọng lực (CaliSci G3)",
        "curriculumSeries": "California Science Leveled Readers G3",
        "driveLink": "https://drive.google.com/drive/folders/1izZcnEASGfT6bYhC_P94xE6tbi1F8Neu",
        "overview": "Học sinh làm quen với các khái niệm lực đẩy (push), lực kéo (pull), ma sát (friction) và trọng lực hút của Trái Đất (gravity).",
        "grammarFocus": "Cấu trúc nguyên nhân: Force causes + [vật thể] to change direction or stop.",
        "sentencePatterns": [
          "Gravity pulls all dropped objects toward Earth.",
          "Friction slows down rolling wheels on rough surfaces."
        ],
        "tips": "Phân biệt \"Push\" (đẩy ra xa) và \"Pull\" (kéo lại gần).",
        "vocabulary": [
          {
            "word": "Gravity",
            "ipa": "/ˈɡræv.ə.ti/",
            "type": "noun",
            "meaning": "Trọng lực, lực hấp dẫn",
            "example": "Earth gravity keeps our feet on the ground.",
            "exampleVi": "Trọng lực Trái Đất giữ cho chân chúng ta bám trên mặt đất.",
            "imageUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Friction",
            "ipa": "/ˈfrɪk.ʃən/",
            "type": "noun",
            "meaning": "Lực ma sát cản trở chuyển động",
            "example": "Bicycle brakes use friction to stop the wheels.",
            "exampleVi": "Phanh xe đạp sử dụng ma sát để hãm dừng bánh xe.",
            "imageUrl": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Motion",
            "ipa": "/ˈməʊ.ʃən/",
            "type": "noun",
            "meaning": "Chuyển động",
            "example": "The motion of a spinning top.",
            "exampleVi": "Chuyển động của con quay.",
            "imageUrl": "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Physics teacher: When you kick a soccer ball, your foot applies a pushing force. The ball flies through the air until gravity pulls it back down to the grass.",
          "question": "What force pulls the ball back down to the ground?",
          "options": [
            {
              "id": "opt_usg3u1_1",
              "label": "A",
              "text": "Gravity (Trọng lực)",
              "isCorrect": true
            },
            {
              "id": "opt_usg3u1_2",
              "label": "B",
              "text": "Magnetism",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"until gravity pulls it back down to the grass\"."
        },
        "speakingPractice": [
          {
            "phrase": "Gravity pulls objects toward the center of the Earth.",
            "vi": "Trọng lực hút các vật thể về phía tâm Trái Đất."
          }
        ],
        "readingPractice": {
          "passage": "A force is simply a push or a pull. Without forces, nothing in the universe would ever start moving or come to a halt. When you slide on ice, there is very little friction, so you glide smoothly and rapidly.",
          "question": "Why do you glide smoothly on ice?",
          "options": [
            {
              "id": "opt_rusg3u1_1",
              "label": "A",
              "text": "Because there is very little friction on ice",
              "isCorrect": true
            },
            {
              "id": "opt_rusg3u1_2",
              "label": "B",
              "text": "Because ice is made of magnets",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"there is very little friction, so you glide smoothly\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu về trọng lực:",
          "scrambledWords": [
            "pulls",
            "Gravity",
            "Earth",
            "objects",
            "toward"
          ],
          "correctSentence": "Gravity pulls objects toward Earth",
          "explanation": "Cấu trúc S + V + O + giới từ: Gravity pulls objects toward Earth."
        }
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
      "California Science G4 (Earth, Physical, Life Science)",
      "Scott Foresman Leveled Readers G4",
      "Audio Sound Studio G04"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 4: Năng lượng và tài nguyên (Energy and Resources), Chuỗi thức ăn (Food Chains), Sự xói mòn địa chất (Erosion & Weathering).",
    "color": "emerald",
    "units": [
      {
        "id": "us_g4_u1",
        "unitNumber": 1,
        "title": "Unit 1: Energy Transfer & Food Webs",
        "vietnameseTitle": "Chuyên đề: Dòng năng lượng & Lưới thức ăn sinh thái (CaliSci G4)",
        "curriculumSeries": "California Science G4",
        "driveLink": "https://drive.google.com/drive/folders/1Rdjf2py_JmUIBBSzaWAzegB4vrFWsIde",
        "overview": "Nghiên cứu sinh vật sản xuất (Producers), sinh vật tiêu thụ (Consumers) và sinh vật phân giải (Decomposers).",
        "grammarFocus": "Mệnh đề quan hệ xác định: Producers are organisms that make their own food using sunlight.",
        "sentencePatterns": [
          "The Sun is the primary source of energy for all ecosystems.",
          "Herbivores eat plants, while carnivores hunt other animals."
        ],
        "tips": "Ghi nhớ chuỗi: Sun -> Producer -> Primary Consumer -> Apex Predator.",
        "vocabulary": [
          {
            "word": "Producer",
            "ipa": "/prəˈdʒuː.sər/",
            "type": "noun",
            "meaning": "Sinh vật sản xuất (cây xanh quang hợp)",
            "example": "Green algae are marine producers.",
            "exampleVi": "Tảo xanh là sinh vật sản xuất dưới biển.",
            "imageUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Consumer",
            "ipa": "/kənˈsjuː.mər/",
            "type": "noun",
            "meaning": "Sinh vật tiêu thụ",
            "example": "Lions are apex consumers.",
            "exampleVi": "Sư tử là sinh vật tiêu thụ đứng đầu chuỗi thức ăn.",
            "imageUrl": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Decomposer",
            "ipa": "/ˌdiː.kəmˈpəʊ.zər/",
            "type": "noun",
            "meaning": "Sinh vật phân hủy (nấm, vi khuẩn)",
            "example": "Fungi decompose fallen tree trunks.",
            "exampleVi": "Nấm phân hủy những thân cây gỗ đổ.",
            "imageUrl": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Ecologist seminar: Solar energy travels ninety-three million miles from the Sun to Earth. Green plants capture this light to convert water and carbon dioxide into sweet glucose.",
          "question": "Where does the primary energy in an ecosystem come from?",
          "options": [
            {
              "id": "opt_usg4u1_1",
              "label": "A",
              "text": "From the Sun (Từ Mặt Trời)",
              "isCorrect": true
            },
            {
              "id": "opt_usg4u1_2",
              "label": "B",
              "text": "From deep underground rocks",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"Solar energy travels ninety-three million miles from the Sun\"."
        },
        "speakingPractice": [
          {
            "phrase": "The Sun provides vital radiant energy that powers our entire living world.",
            "vi": "Mặt trời cung cấp nguồn năng lượng bức xạ thiết yếu duy trì toàn bộ thế giới sống."
          }
        ],
        "readingPractice": {
          "passage": "In a balanced food web, energy flows in one direction. Plants absorb sunlight. Grasshoppers feed on leaves, mice prey upon grasshoppers, and hawks hunt mice. When organisms die, decomposers return rich minerals to the soil.",
          "question": "What do decomposers return to the soil?",
          "options": [
            {
              "id": "opt_rusg4u1_1",
              "label": "A",
              "text": "Rich minerals (Khoáng chất màu mỡ)",
              "isCorrect": true
            },
            {
              "id": "opt_rusg4u1_2",
              "label": "B",
              "text": "Poisonous plastic waste",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"decomposers return rich minerals to the soil\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu về nguồn năng lượng:",
          "scrambledWords": [
            "source",
            "is",
            "Sun",
            "The",
            "energy",
            "primary",
            "the",
            "of"
          ],
          "correctSentence": "The Sun is the primary source of energy",
          "explanation": "Cấu trúc S + is + noun phrase."
        }
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
      "California Science G5 (Earth, Life & Physical Science)",
      "Reading Wonders & Scott Foresman G5",
      "Math Inquiry & Problem Solving G5"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 5: Hệ Mặt Trời và Các Thiên thể (Solar System & Universe), Cấu trúc Tế bào (Cell Biology), Phản ứng hóa học và Kỹ năng viết bài nghị luận.",
    "color": "emerald",
    "units": [
      {
        "id": "us_g5_u1",
        "unitNumber": 1,
        "title": "Unit 1: The Solar System & Celestial Bodies",
        "vietnameseTitle": "Chuyên đề: Hệ Mặt Trời & Các Thiên Thể Vũ Trụ (CaliSci G5)",
        "curriculumSeries": "California Science G5",
        "driveLink": "https://drive.google.com/drive/folders/1eae6uSE5KWlcN3yBsfeso-IoCmJfmpZe",
        "overview": "Khám phá tám hành tinh trong Hệ Mặt Trời, vành đai tiểu hành tinh, sao chổi và quỹ đạo elip của các hành tinh.",
        "grammarFocus": "So sánh bậc nhất: Jupiter is the largest and most massive planet in our solar system.",
        "sentencePatterns": [
          "Earth revolves around the Sun once every 365.25 days.",
          "Rocky inner planets differ greatly from outer gas giants."
        ],
        "tips": "Ghi nhớ thứ tự hành tinh: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
        "vocabulary": [
          {
            "word": "Revolve",
            "ipa": "/rɪˈvɒlv/",
            "type": "verb",
            "meaning": "Chuyển động quay quanh quỹ đạo",
            "example": "Planets revolve around the Sun.",
            "exampleVi": "Các hành tinh quay quanh Mặt Trời.",
            "imageUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Orbit",
            "ipa": "/ˈɔː.bɪt/",
            "type": "noun/verb",
            "meaning": "Quỹ đạo chuyển động hình elip",
            "example": "The Moon orbits Earth.",
            "exampleVi": "Mặt Trăng quay theo quỹ đạo quanh Trái Đất.",
            "imageUrl": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Asteroid",
            "ipa": "/ˈæs.tər.ɔɪd/",
            "type": "noun",
            "meaning": "Tiểu hành tinh trong vũ trụ",
            "example": "An asteroid belt between Mars and Jupiter.",
            "exampleVi": "Vành đai tiểu hành tinh giữa Sao Hỏa và Sao Mộc.",
            "imageUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Astronomer presentation: Jupiter is so colossal that all other seven planets could easily fit inside it. It has at least seventy-nine moons and a famous storm called the Great Red Spot.",
          "question": "What is the name of Jupiter's famous colossal storm?",
          "options": [
            {
              "id": "opt_usg5u1_1",
              "label": "A",
              "text": "The Great Red Spot (Vết Đỏ Lớn)",
              "isCorrect": true
            },
            {
              "id": "opt_usg5u1_2",
              "label": "B",
              "text": "The Blue Whirlpool",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"a famous storm called the Great Red Spot\"."
        },
        "speakingPractice": [
          {
            "phrase": "Eight planets orbit the Sun within our vast solar system.",
            "vi": "Tám hành tinh quay quanh Mặt trời bên trong hệ mặt trời bao la của chúng ta."
          }
        ],
        "readingPractice": {
          "passage": "The solar system formed approximately 4.6 billion years ago from a swirling cloud of gas and interstellar dust. Gravity pulled most matter toward the center to ignite the Sun, while the remaining material flattened into protoplanetary disks.",
          "question": "When did our solar system form?",
          "options": [
            {
              "id": "opt_rusg5u1_1",
              "label": "A",
              "text": "Approximately 4.6 billion years ago",
              "isCorrect": true
            },
            {
              "id": "opt_rusg5u1_2",
              "label": "B",
              "text": "Just one thousand years ago",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"formed approximately 4.6 billion years ago\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu về quỹ đạo Trái Đất:",
          "scrambledWords": [
            "Sun",
            "revolves",
            "Earth",
            "around",
            "the"
          ],
          "correctSentence": "Earth revolves around the Sun",
          "explanation": "Cấu trúc S + revolves around + O."
        }
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
      "California Science Leveled Readers (CaliSci LR G6)",
      "Leveled Readers G6 Above Level (LReaders G6 ABOVE)",
      "Math Concept Readers G6",
      "US_EDU Sound Studio (G06.01 - G06.13 Audio Files)"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 6: Khoa học Trái Đất và Vũ trụ (Earth and Space Science), Đĩa kiến tạo mảng (Plate Tectonics), Khái niệm Toán học tư duy và Audio Sound Studio.",
    "color": "blue",
    "units": [
      {
        "id": "us_g6_u1",
        "unitNumber": 1,
        "title": "Unit 1: Earth's Dynamic Crust & Plate Tectonics",
        "vietnameseTitle": "Chuyên đề Khoa học: Vỏ Trái Đất & Thuyết kiến tạo mảng (CaliSci G6)",
        "curriculumSeries": "California Science Leveled Readers G6",
        "driveLink": "https://drive.google.com/drive/folders/1lvniAkBkEJKYqESqynnLmw9BMp8zh4EG",
        "overview": "Cấu trúc phân tầng Trái Đất (Crust, Mantle, Core), sự dịch chuyển mảng kiến tạo gây ra động đất và núi lửa.",
        "grammarFocus": "Câu điều kiện loại 1 trong địa chất: If tectonic plates collide, gigantic mountains are formed.",
        "sentencePatterns": [
          "Earth's crust is divided into massive tectonic plates.",
          "Earthquakes occur along fault lines when friction builds up."
        ],
        "tips": "Ghi nhớ các ranh giới mảng: Convergent (va chạm), Divergent (tách giãn), Transform (trượt ngang).",
        "vocabulary": [
          {
            "word": "Tectonic plate",
            "ipa": "/tekˈtɒn.ɪk pleɪt/",
            "type": "noun",
            "meaning": "Mảng kiến tạo thạch quyển",
            "example": "Tectonic plates float atop the mantle.",
            "exampleVi": "Các mảng kiến tạo trôi dạt trên lớp manti.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Fault line",
            "ipa": "/ˈfɒlt ˌlaɪn/",
            "type": "noun",
            "meaning": "Đường đứt gãy địa chất",
            "example": "The San Andreas Fault is a famous fault line.",
            "exampleVi": "Đứt gãy San Andreas là đường đứt gãy nổi tiếng.",
            "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Seismograph",
            "ipa": "/ˈsaɪz.mə.ɡrɑːf/",
            "type": "noun",
            "meaning": "Máy đo địa chấn",
            "example": "Seismographs detect vibrations.",
            "exampleVi": "Máy địa chấn phát hiện các rung chấn.",
            "imageUrl": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Geophysicist lecture (G06.01 Sound Track): Earth is not a solid sphere. Its outer shell is broken into seven major tectonic plates that glide at the rate of a few centimeters per year.",
          "question": "How fast do tectonic plates move?",
          "options": [
            {
              "id": "opt_usg6u1_1",
              "label": "A",
              "text": "A few centimeters per year",
              "isCorrect": true
            },
            {
              "id": "opt_usg6u1_2",
              "label": "B",
              "text": "Hundreds of miles per day",
              "isCorrect": false
            }
          ],
          "explanation": "Trong audio: \"at the rate of a few centimeters per year\"."
        },
        "speakingPractice": [
          {
            "phrase": "Tectonic plates move continuously, shaping oceans and soaring mountains.",
            "vi": "Các mảng kiến tạo dịch chuyển liên tục, định hình nên đại dương và các dãy núi hùng vĩ."
          }
        ],
        "readingPractice": {
          "passage": "CaliSci LR G6: When two continental plates converge, neither sinks because both are buoyant. Instead, the crust crumples and buckles upward. This immense geologic collision created the Himalayan Mountain Range.",
          "question": "What formed the Himalayan Mountain Range?",
          "options": [
            {
              "id": "opt_rusg6u1_1",
              "label": "A",
              "text": "The collision of two converging continental plates",
              "isCorrect": true
            },
            {
              "id": "opt_rusg6u1_2",
              "label": "B",
              "text": "A giant meteor impact",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"This immense geologic collision created the Himalayan Mountain Range\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu về động đất:",
          "scrambledWords": [
            "Earthquakes",
            "plates",
            "occur",
            "when",
            "collide",
            "tectonic"
          ],
          "correctSentence": "Earthquakes occur when tectonic plates collide",
          "explanation": "Cấu trúc S1 + V1 + when + S2 + V2."
        }
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
      "California Earth and Life Science G7",
      "Writer’s Choice: Grammar and Composition G7",
      "Literature Leveled Readers G7"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 7: Di truyền học và ADN (Genetics and DNA), Tiến hóa sinh học, Ngữ pháp học thuật và Kỹ thuật viết bài văn miêu tả - thuyết minh.",
    "color": "blue",
    "units": [
      {
        "id": "us_g7_u1",
        "unitNumber": 1,
        "title": "Unit 1: Genetics, DNA & Inherited Traits",
        "vietnameseTitle": "Chuyên đề: Di truyền học & Cấu trúc phân tử ADN (CaliSci G7)",
        "curriculumSeries": "California Life Science G7",
        "driveLink": "https://drive.google.com/drive/folders/1gQRY_sRXuxNClJJm9DqvTp0vOk5bvMAG",
        "overview": "Học sinh tìm hiểu thí nghiệm di truyền của Gregor Mendel, cấu trúc chuỗi xoắn kép ADN và tính trạng trội - lặn (dominant vs recessive alleles).",
        "grammarFocus": "Mệnh đề danh ngữ với That: Mendel discovered that traits are inherited through discrete units.",
        "sentencePatterns": [
          "DNA contains the genetic blueprint for all living organisms.",
          "Dominant alleles mask the expression of recessive alleles."
        ],
        "tips": "Phát âm chuẩn từ \"chromosome\" /ˈkrəʊ.mə.səʊm/ với âm /k/ đầu.",
        "vocabulary": [
          {
            "word": "Genetics",
            "ipa": "/dʒəˈnet.ɪks/",
            "type": "noun",
            "meaning": "Di truyền học",
            "example": "Mendel is the father of modern genetics.",
            "exampleVi": "Mendel là cha đẻ của ngành di truyền học hiện đại.",
            "imageUrl": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Chromosome",
            "ipa": "/ˈkrəʊ.mə.səʊm/",
            "type": "noun",
            "meaning": "Nhiễm sắc thể mang gen",
            "example": "Humans have 23 pairs of chromosomes.",
            "exampleVi": "Con người có 23 cặp nhiễm sắc thể.",
            "imageUrl": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Dominant",
            "ipa": "/ˈdɒm.ɪ.nənt/",
            "type": "adj",
            "meaning": "Tính trạng trội",
            "example": "Brown eye color is a dominant genetic trait.",
            "exampleVi": "Màu mắt nâu là tính trạng di truyền trội.",
            "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Geneticist lecture: Inside every human cell nucleus, two meters of DNA are tightly coiled into microscopic chromosomes. DNA consists of four chemical bases: Adenine, Thymine, Guanine and Cytosine.",
          "question": "How many chemical bases compose DNA?",
          "options": [
            {
              "id": "opt_usg7u1_1",
              "label": "A",
              "text": "Four chemical bases (Bốn bazo nito: A, T, G, C)",
              "isCorrect": true
            },
            {
              "id": "opt_usg7u1_2",
              "label": "B",
              "text": "Twenty different metals",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"DNA consists of four chemical bases: Adenine, Thymine, Guanine and Cytosine\"."
        },
        "speakingPractice": [
          {
            "phrase": "DNA carries the genetic instructions necessary for the growth and reproduction of all organisms.",
            "vi": "ADN mang các chỉ dẫn di truyền cần thiết cho sự phát triển và sinh sản của mọi sinh vật."
          }
        ],
        "readingPractice": {
          "passage": "In 1953, James Watson and Francis Crick unraveled the double helix architecture of DNA. This landmark discovery demonstrated how genetic information is flawlessly duplicated during cellular division, revolutionizing medicine, forensic science and evolutionary biology.",
          "question": "What architectural shape does DNA have?",
          "options": [
            {
              "id": "opt_rusg7u1_1",
              "label": "A",
              "text": "A double helix (Chuỗi xoắn kép)",
              "isCorrect": true
            },
            {
              "id": "opt_rusg7u1_2",
              "label": "B",
              "text": "A flat triangle",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"unraveled the double helix architecture of DNA\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu về cấu trúc ADN:",
          "scrambledWords": [
            "DNA",
            "genetic",
            "the",
            "carries",
            "instructions"
          ],
          "correctSentence": "DNA carries the genetic instructions",
          "explanation": "Cấu trúc S + V + O."
        }
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
      "Writer’s Choice: Grammar and Composition G8",
      "American Literature Foundation G8"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 8: Bảng tuần hoàn hóa học (The Periodic Table), Phản ứng hóa học và Kỹ năng viết bài nghị luận so sánh (Compare and Contrast Essays).",
    "color": "blue",
    "units": [
      {
        "id": "us_g8_u1",
        "unitNumber": 1,
        "title": "Unit 1: Atoms, Molecules & The Periodic Table",
        "vietnameseTitle": "Chuyên đề Hóa học: Nguyên tử, Phân tử & Bảng tuần hoàn (CaliSci G8)",
        "curriculumSeries": "California Physical Science G8",
        "driveLink": "https://drive.google.com/drive/folders/1qgExGNrkbdg-HjrvqaicbjKF3031AxDC",
        "overview": "Học sinh nghiên cứu cấu trúc hạt nhân nguyên tử (Protons, Neutrons, Electrons), quy luật sắp xếp nguyên tố trong Bảng tuần hoàn Mendeleev.",
        "grammarFocus": "Mệnh đề phân từ hoàn thành rút gọn: Having gained electrons, the atom becomes a negatively charged ion.",
        "sentencePatterns": [
          "Elements in the same column share similar valence electrons and chemical reactivity.",
          "Noble gases remain chemically inert because their outer shells are fully filled."
        ],
        "tips": "Ghi nhớ số hiệu nguyên tử (Atomic Number) bằng số proton trong hạt nhân.",
        "vocabulary": [
          {
            "word": "Atom",
            "ipa": "/ˈæt.əm/",
            "type": "noun",
            "meaning": "Nguyên tử, đơn vị cơ bản của vật chất",
            "example": "Atoms bond to form complex molecules.",
            "exampleVi": "Các nguyên tử liên kết tạo thành phân tử phức tạp.",
            "imageUrl": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Valence electron",
            "ipa": "/ˈveɪ.ləns ɪˈlek.trɒn/",
            "type": "noun",
            "meaning": "Electron hóa trị ở lớp ngoài cùng",
            "example": "Valence electrons determine bonding.",
            "exampleVi": "Electron hóa trị quyết định liên kết hóa học.",
            "imageUrl": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Molecule",
            "ipa": "/ˈmɒl.ɪ.kjuːl/",
            "type": "noun",
            "meaning": "Phân tử chất",
            "example": "A water molecule consists of two hydrogen atoms and one oxygen atom.",
            "exampleVi": "Một phân tử nước gồm 2 nguyên tử hydro và 1 nguyên tử oxy.",
            "imageUrl": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Chemistry professor lecture: Russian chemist Dmitri Mendeleev arranged known elements by atomic mass and chemical properties, famously leaving empty slots predicting elements yet to be discovered.",
          "question": "What did Mendeleev predict by leaving empty slots in his table?",
          "options": [
            {
              "id": "opt_usg8u1_1",
              "label": "A",
              "text": "Elements that were yet to be discovered",
              "isCorrect": true
            },
            {
              "id": "opt_usg8u1_2",
              "label": "B",
              "text": "A sudden collapse of physics",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"famously leaving empty slots predicting elements yet to be discovered\"."
        },
        "speakingPractice": [
          {
            "phrase": "Atoms bond through sharing or transferring valence electrons.",
            "vi": "Các nguyên tử liên kết thông qua việc chia sẻ hoặc chuyển giao các electron hóa trị."
          }
        ],
        "readingPractice": {
          "passage": "CaliSci Physical Science: The periodic table organizes 118 confirmed elements. Metals occupy the left and center, exhibiting high electrical conductivity and luster, while nonmetals reside on the upper right, possessing diverse physical states.",
          "question": "Where do metals reside on the periodic table?",
          "options": [
            {
              "id": "opt_rusg8u1_1",
              "label": "A",
              "text": "On the left and center",
              "isCorrect": true
            },
            {
              "id": "opt_rusg8u1_2",
              "label": "B",
              "text": "Only in the extreme upper right corner",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"Metals occupy the left and center\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu về liên kết hóa học:",
          "scrambledWords": [
            "bond",
            "molecules",
            "form",
            "Atoms",
            "to"
          ],
          "correctSentence": "Atoms bond to form molecules",
          "explanation": "Cấu trúc S + bond + to V."
        }
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
      "Grammar Usage and Mechanics Language Skills Practice G9",
      "Vocabulary Practice and Tests G9"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 9: Văn học Mỹ và Phân tích tác phẩm kinh điển (To Kill a Mockingbird, Romeo and Juliet), Kỹ năng ngữ pháp Mechanics và từ vựng học thuật SSAT.",
    "color": "blue",
    "units": [
      {
        "id": "us_g9_u1",
        "unitNumber": 1,
        "title": "Unit 1: Literary Devices, Themes & Character Analysis",
        "vietnameseTitle": "Chuyên đề Văn học: Biện pháp nghệ thuật & Phân tích nhân vật (McDougal G9)",
        "curriculumSeries": "McDougal Littell Literature G9",
        "driveLink": "https://drive.google.com/drive/folders/13iJycpXc7RPbfYsuwKKwwYM5ibVVgpgD",
        "overview": "Nghiên cứu các yếu tố cốt truyện (Plot mountain: Exposition, Rising action, Climax, Falling action, Resolution) và biểu tượng nghệ thuật (Symbolism).",
        "grammarFocus": "Đảo ngữ để nhấn mạnh văn phong: Not only did the protagonist confront injustice, but he also redefined courage.",
        "sentencePatterns": [
          "Symbolism enriches a literary text by embedding profound allegorical truths.",
          "The climax marks the emotional pinnacle and irreversible turning point of the narrative."
        ],
        "tips": "Phân biệt giữa \"Theme\" (thông điệp nhân sinh) và \"Plot\" (chuỗi diễn biến câu chuyện).",
        "vocabulary": [
          {
            "word": "Protagonist",
            "ipa": "/prəˈtæɡ.ən.ɪst/",
            "type": "noun",
            "meaning": "Nhân vật chính diện trung tâm",
            "example": "The novel traces the internal growth of the protagonist.",
            "exampleVi": "Cuốn tiểu thuyết lần theo sự trưởng thành nội tâm của nhân vật chính.",
            "imageUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Symbolism",
            "ipa": "/ˈsɪm.bəl.ɪ.zəm/",
            "type": "noun",
            "meaning": "Chủ nghĩa biểu tượng trong văn học",
            "example": "The mockingbird symbolizes innocence.",
            "exampleVi": "Con chim nhại tượng trưng cho sự thuần khiết, ngây thơ.",
            "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Climax",
            "ipa": "/ˈklaɪ.mæks/",
            "type": "noun",
            "meaning": "Điểm cao trào, nút thắt kịch tính nhất",
            "example": "The court trial serves as the dramatic climax.",
            "exampleVi": "Phiên tòa xét xử đóng vai trò là cao trào đầy kịch tính.",
            "imageUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Literature seminar G09: In Shakespeare's Romeo and Juliet, the motif of light versus darkness mirrors the pure but doomed love between the two star-crossed young lovers.",
          "question": "What does the motif of light versus darkness mirror in Romeo and Juliet?",
          "options": [
            {
              "id": "opt_usg9u1_1",
              "label": "A",
              "text": "The pure but doomed love of the lovers",
              "isCorrect": true
            },
            {
              "id": "opt_usg9u1_2",
              "label": "B",
              "text": "A technical description of candle making",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"mirrors the pure but doomed love between the two star-crossed young lovers\"."
        },
        "speakingPractice": [
          {
            "phrase": "Literary themes reflect universal human experiences across centuries and cultures.",
            "vi": "Các chủ đề văn học phản ánh những trải nghiệm phổ quát của con người qua nhiều thế kỷ và nền văn hóa."
          }
        ],
        "readingPractice": {
          "passage": "McDougal Littell Literature Grade 9: Harper Lee's masterpiece \"To Kill a Mockingbird\" examines racial injustice and moral courage in 1930s Alabama. Lawyer Atticus Finch teaches his children that true empathy requires climbing into another person's skin and walking around in it.",
          "question": "What core lesson does Atticus Finch teach his children?",
          "options": [
            {
              "id": "opt_rusg9u1_1",
              "label": "A",
              "text": "To practice true empathy by understanding others' perspectives",
              "isCorrect": true
            },
            {
              "id": "opt_rusg9u1_2",
              "label": "B",
              "text": "To judge people quickly based on rumors",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"true empathy requires climbing into another person's skin and walking around in it\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu về nghệ thuật biểu tượng:",
          "scrambledWords": [
            "Symbolism",
            "literary",
            "meaning",
            "deeper",
            "adds",
            "to",
            "texts"
          ],
          "correctSentence": "Symbolism adds deeper meaning to literary texts",
          "explanation": "Cấu trúc S + V + O + to..."
        }
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
      "McDougal Littell Literature Grade 10 (Sách Văn học Mỹ PDF)",
      "Grammar Usage and Mechanics Language Skills Practice G10",
      "Writer’s Choice: Grammar and Composition - Grade 10",
      "Vocabulary Practice and Tests G10 (Kèm Answer Key)"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 10: Phân tích kiệt tác văn học thế giới (McDougal Littell Literature), rèn luyện kỹ năng viết học thuật (Writer's Choice) và luyện từ vựng SAT/ACT chuyên sâu.",
    "color": "indigo",
    "units": [
      {
        "id": "us_g10_u1",
        "unitNumber": 1,
        "title": "Unit 1: The Art of Rhetoric & Analytical Writing",
        "vietnameseTitle": "Chuyên đề: Nghệ thuật Hùng biện & Luận điểm Văn học (McDougal G10)",
        "curriculumSeries": "McDougal Littell Literature & Writer's Choice G10",
        "driveLink": "https://drive.google.com/drive/folders/169cejNPp1FYaCAesyAzahG1cBRXfMSvo",
        "overview": "Nghiên cứu ba trụ cột hùng biện của Aristotle: Ethos (đạo đức), Pathos (cảm xúc), Logos (logic) và ứng dụng vào bài văn nghị luận.",
        "grammarFocus": "Cấu trúc song hành (Parallelism) và Mệnh đề phân từ độc lập (Absolute Clauses).",
        "sentencePatterns": [
          "Effective persuasion integrates credible evidence (Logos) with heartfelt resonance (Pathos).",
          "The thesis statement must present an arguable claim supported by textual citations."
        ],
        "tips": "Sử dụng từ nối chuyển đoạn chuẩn mực: Furthermore, Consequently, In juxtaposition, Conversely.",
        "vocabulary": [
          {
            "word": "Rhetoric",
            "ipa": "/ˈret.ər.ɪk/",
            "type": "noun",
            "meaning": "Nghệ thuật hùng biện",
            "example": "Mastering classical rhetoric strengthens persuasive essays.",
            "exampleVi": "Nắm vững thuật hùng biện giúp bài văn nghị luận thêm thuyết phục.",
            "imageUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Ethos",
            "ipa": "/ˈiː.θɒs/",
            "type": "noun",
            "meaning": "Uy tín đạo đức của người phát biểu",
            "example": "The speaker established ethos with empirical credentials.",
            "exampleVi": "Diễn giả khẳng định uy tín bằng bằng chứng thực nghiệm.",
            "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Logos",
            "ipa": "/ˈlɒɡ.ɒs/",
            "type": "noun",
            "meaning": "Lập luận logic dựa trên chứng cứ",
            "example": "Logos appeals directly to reason.",
            "exampleVi": "Logos tác động trực tiếp vào lý trí.",
            "imageUrl": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Literature professor lecture: When analyzing Martin Luther King's historic speech, we observe how he masterfully intertwined ethical appeals with profound emotional metaphors to demand civil rights.",
          "question": "What did Martin Luther King intertwine in his speech?",
          "options": [
            {
              "id": "opt_usg10u1_1",
              "label": "A",
              "text": "Ethical appeals with emotional metaphors",
              "isCorrect": true
            },
            {
              "id": "opt_usg10u1_2",
              "label": "B",
              "text": "Only mathematical equations",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"intertwined ethical appeals with profound emotional metaphors\"."
        },
        "speakingPractice": [
          {
            "phrase": "A compelling argumentative thesis demands robust textual evidence and rigorous logical deductions.",
            "vi": "Một luận điểm nghị luận hấp dẫn đòi hỏi bằng chứng văn bản vững chắc và suy luận logic chặt chẽ."
          }
        ],
        "readingPractice": {
          "passage": "McDougal Littell Literature Grade 10: Rhetorical devices are intentional stylistic tools that authors employ to evoke emotional resonance and emphasize primary motifs. Among the most potent devices is anaphora—the deliberate repetition of a phrase at the beginnings of consecutive clauses.",
          "question": "What is anaphora according to the literature text?",
          "options": [
            {
              "id": "opt_rusg10u1_1",
              "label": "A",
              "text": "The deliberate repetition of a phrase at clause beginnings",
              "isCorrect": true
            },
            {
              "id": "opt_rusg10u1_2",
              "label": "B",
              "text": "A random printer error",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"anaphora—the deliberate repetition of a phrase at the beginnings of consecutive clauses\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu chứa cấu trúc song hành:",
          "scrambledWords": [
            "persuasion",
            "requires",
            "Effective",
            "credibility,",
            "and",
            "logic,",
            "empathy"
          ],
          "correctSentence": "Effective persuasion requires credibility, logic, and empathy",
          "explanation": "Cấu trúc song hành: credibility, logic, and empathy."
        }
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
      "McDougal Littell: The Language of Literature (American Literature G11)",
      "Writer’s Choice: Advanced Composition & Research G11",
      "Advanced Vocabulary Practice & SAT/ACT Preparation"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 11: Lịch sử Văn học Hoa Kỳ (Chủ nghĩa Lãng mạn, Chủ nghĩa Hiện thực, Giấc mơ Mỹ - The Great Gatsby, The Crucible) và Viết bài nghiên cứu MLA.",
    "color": "indigo",
    "units": [
      {
        "id": "us_g11_u1",
        "unitNumber": 1,
        "title": "Unit 1: American Romanticism & The Transcendentalists",
        "vietnameseTitle": "Chuyên đề: Chủ nghĩa Siêu việt & Văn học Lãng mạn Hoa Kỳ (McDougal G11)",
        "curriculumSeries": "McDougal Littell American Literature G11",
        "driveLink": "https://drive.google.com/drive/folders/1ElYWck0Yuf9nNyuxtX21MDfh5cXSQ5dW",
        "overview": "Nghiên cứu tư tưởng tự lực của Ralph Waldo Emerson (Self-Reliance) và Henry David Thoreau (Walden), đề cao thiên nhiên và phẩm giá cá nhân.",
        "grammarFocus": "Cấu trúc giả định thức (Subjunctive Mood): Emerson insisted that an individual be true to their inner moral compass.",
        "sentencePatterns": [
          "Transcendentalism champions intuition over blind conformity.",
          "Nature serves as a spiritual sanctuary far removed from industrial turmoil."
        ],
        "tips": "Sử dụng thể giả định: S + recommend / insist / demand + that + S + V-nguyên mẫu (không chia s/es).",
        "vocabulary": [
          {
            "word": "Transcendentalism",
            "ipa": "/ˌtræn.senˈden.təl.ɪ.zəm/",
            "type": "noun",
            "meaning": "Chủ nghĩa siêu việt",
            "example": "Transcendentalism revolutionized 19th-century American thought.",
            "exampleVi": "Chủ nghĩa siêu việt đã cách mạng hóa tư tưởng nước Mỹ thế kỷ 19.",
            "imageUrl": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Conformity",
            "ipa": "/kənˈfɔː.mə.ti/",
            "type": "noun",
            "meaning": "Sự rập khuôn, tuân phục mù quáng",
            "example": "Emerson warned against thoughtless conformity to societal dogmas.",
            "exampleVi": "Emerson cảnh báo chống lại sự tuân phục mù quáng các giáo điều xã hội.",
            "imageUrl": "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Sanctuary",
            "ipa": "/ˈsæŋk.tʃʊə.ri/",
            "type": "noun",
            "meaning": "Nơi trú ẩn thiêng liêng, chốn bình yên",
            "example": "The pristine forest offered a peaceful sanctuary.",
            "exampleVi": "Khu rừng nguyên sinh mang lại chốn trú ẩn thanh bình.",
            "imageUrl": "https://images.unsplash.com/photo-1511497584788-87676104235f?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "American Literature professor: At Walden Pond, Thoreau deliberately built a tiny cabin to simplify life, demonstrating that spiritual wealth flourishes when material superfluities are stripped away.",
          "question": "Why did Thoreau live at Walden Pond?",
          "options": [
            {
              "id": "opt_usg11u1_1",
              "label": "A",
              "text": "To simplify life and cultivate spiritual wealth",
              "isCorrect": true
            },
            {
              "id": "opt_usg11u1_2",
              "label": "B",
              "text": "To open a commercial logging factory",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"to simplify life, demonstrating that spiritual wealth flourishes\"."
        },
        "speakingPractice": [
          {
            "phrase": "True individuality emerges when one refuses to surrender personal convictions to societal pressures.",
            "vi": "Bản sắc cá nhân đích thực chỉ xuất hiện khi một người từ chối khuất phục niềm tin của mình trước áp lực xã hội."
          }
        ],
        "readingPractice": {
          "passage": "McDougal Littell American Literature - Grade 11: In his seminal essay \"Self-Reliance\", Ralph Waldo Emerson famously asserted: \"Whoso would be a man must be a nonconformist.\" He argued that nothing is at last sacred but the integrity of one's own mind, inspiring generations of civil leaders.",
          "question": "According to Emerson, what is ultimately sacred?",
          "options": [
            {
              "id": "opt_rusg11u1_1",
              "label": "A",
              "text": "The integrity of one's own mind",
              "isCorrect": true
            },
            {
              "id": "opt_rusg11u1_2",
              "label": "B",
              "text": "Material possessions and royal status",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"nothing is at last sacred but the integrity of one's own mind\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu chứa tư tưởng Emerson:",
          "scrambledWords": [
            "champions",
            "conformity",
            "Transcendentalism",
            "over",
            "intuition"
          ],
          "correctSentence": "Transcendentalism champions intuition over conformity",
          "explanation": "Cấu trúc S + champions + O1 + over + O2."
        }
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
      "McDougal Littell: British and World Literature Grade 12",
      "Writer’s Choice: College Prep Composition & Rhetoric G12",
      "AP English Language & College Academic Writing"
    ],
    "description": "Chương trình chuẩn Mỹ Lớp 12: Văn học Anh và Thế giới (Beowulf, Shakespearean Tragedies, Orwell's 1984), Viết bài luận chuẩn bị đại học (College Admissions Essays) và Kỹ năng phân tích phản biện nâng cao.",
    "color": "indigo",
    "units": [
      {
        "id": "us_g12_u1",
        "unitNumber": 1,
        "title": "Unit 1: Dystopian Fiction & Totalitarian Critiques (1984)",
        "vietnameseTitle": "Chuyên đề Văn học Thế giới: Tiểu thuyết Phản địa đàng & Phê phán Toàn trị (McDougal G12)",
        "curriculumSeries": "McDougal Littell World Literature G12",
        "driveLink": "https://drive.google.com/drive/folders/1tzj33xKlv2sGTxNqfu-YjkozSKFOQEEv",
        "overview": "Phân tích kiệt tác \"1984\" của George Orwell: ngôn ngữ Newspeak, tư tưởng Doublethink và sự thao túng lịch sử của chính quyền độc tài.",
        "grammarFocus": "Cấu trúc câu điều kiện hỗn hợp (Mixed Conditionals) và Mệnh đề trạng ngữ chỉ sự nhượng bộ (Concession clauses).",
        "sentencePatterns": [
          "If language is corrupted, critical thought becomes virtually impossible.",
          "Although surveillance was omnipresent, the human spirit sought rebellion."
        ],
        "tips": "Phân biệt giữa Utopia (xã hội lý tưởng hoàn mỹ) và Dystopia (xã hội phản địa đàng ngột ngạt).",
        "vocabulary": [
          {
            "word": "Dystopia",
            "ipa": "/dɪsˈtəʊ.pi.ə/",
            "type": "noun",
            "meaning": "Xã hội phản địa đàng, tha hóa",
            "example": "Orwell crafts a terrifying depiction of a totalitarian dystopia.",
            "exampleVi": "Orwell xây dựng bức tranh kinh hoàng về một xã hội phản địa đàng toàn trị.",
            "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Surveillance",
            "ipa": "/səˈveɪ.ləns/",
            "type": "noun",
            "meaning": "Sự giám sát theo dõi bí mật",
            "example": "Constant government surveillance stripped citizens of privacy.",
            "exampleVi": "Sự giám sát thường trực của chính quyền tước đoạt quyền riêng tư của người dân.",
            "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Totalitarian",
            "ipa": "/təʊˌtæl.ɪˈteə.ri.ən/",
            "type": "adj",
            "meaning": "Toàn trị, độc tài áp bức",
            "example": "A ruthless totalitarian regime.",
            "exampleVi": "Một chế độ toàn trị tàn nhẫn.",
            "imageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "British Literature scholar lecture: In George Orwell's 1984, the Ministry of Truth systematically rewrites archived newspapers, ensuring the ruling party is always infallible. The terrifying message is that whoever controls the past controls the future.",
          "question": "According to Orwell's 1984, what does controlling the past allow the party to control?",
          "options": [
            {
              "id": "opt_usg12u1_1",
              "label": "A",
              "text": "Controls the future (Kiểm soát tương lai)",
              "isCorrect": true
            },
            {
              "id": "opt_usg12u1_2",
              "label": "B",
              "text": "Controls the planetary weather",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"whoever controls the past controls the future\"."
        },
        "speakingPractice": [
          {
            "phrase": "Freedom begins with the courage to think critically and defend objective truth.",
            "vi": "Tự do bắt đầu từ lòng dũng cảm suy nghĩ phản biện và bảo vệ sự thật khách quan."
          }
        ],
        "readingPractice": {
          "passage": "McDougal Littell World Literature - Grade 12: Orwell introduces \"Newspeak\"—a truncated language engineered to eliminate nuances of thought. By destroying vocabulary, the Party aims to render rebellious thoughts literally unthinkable, because there will be no words in which to express them.",
          "question": "What is the sinister goal of \"Newspeak\" in Orwell's novel?",
          "options": [
            {
              "id": "opt_rusg12u1_1",
              "label": "A",
              "text": "To render rebellious thoughts literally unthinkable",
              "isCorrect": true
            },
            {
              "id": "opt_rusg12u1_2",
              "label": "B",
              "text": "To teach poetry to schoolchildren",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"render rebellious thoughts literally unthinkable, because there will be no words in which to express them\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu cảnh báo về ngôn ngữ và tư duy:",
          "scrambledWords": [
            "language",
            "corrupts",
            "thought",
            "Corrupt",
            "clear",
            "rational"
          ],
          "correctSentence": "Corrupt language corrupts clear rational thought",
          "explanation": "Cấu trúc S + V + O."
        }
      }
    ]
  }
];
