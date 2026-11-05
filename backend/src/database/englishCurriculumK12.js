/**
 * Comprehensive K12 English Curriculum Database (Từ Lớp 1 đến Lớp 12)
 * Bám sát 100% sách giáo khoa Global Success & Bộ Giáo Dục & Đào Tạo
 * Chuẩn hóa theo BestFlashcard với đầy đủ 4 KỸ NĂNG: NGHE - NÓI - ĐỌC - VIẾT
 */

export const englishCurriculumK12 = [
  {
    "grade": "Lớp 1",
    "level": "primary",
    "levelName": "Tiểu học (Cấp 1)",
    "textbook": "Global Success & Family and Friends (Lớp 1)",
    "description": "Chương trình Tiếng Anh Lớp 1: Làm quen với chữ cái ngữ âm Phonics, số đếm 1-10, màu sắc, đồ dùng học tập, phòng ốc và gia đình.",
    "color": "emerald",
    "units": [
      {
        "id": "g1_u1",
        "unitNumber": 1,
        "title": "Unit 1: In the School Playground",
        "vietnameseTitle": "Chủ đề: Sân trường & Chào hỏi làm quen",
        "overview": "Làm quen với chữ cái B/b (phát âm /b/) và chào hỏi bạn bè, thầy cô.",
        "grammarFocus": "Cấu trúc chào hỏi: Hello / Hi, I am + [Tên]. (Xin chào, mình là...)",
        "sentencePatterns": [
          "Hello, Bill! - Hi, Ba!",
          "Goodbye, teacher! (Tạm biệt cô giáo!)"
        ],
        "tips": "Luyện âm /b/ bằng cách mím nhẹ hai môi rồi bật hơi dứt khoát.",
        "vocabulary": [
          {
            "word": "Book",
            "ipa": "/bʊk/",
            "type": "noun",
            "meaning": "Quyển sách, vở",
            "example": "Open your book, please.",
            "exampleVi": "Xin mời các em mở sách ra.",
            "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Ball",
            "ipa": "/bɔːl/",
            "type": "noun",
            "meaning": "Quả bóng",
            "example": "I kick the red ball.",
            "exampleVi": "Mình đá quả bóng màu đỏ.",
            "imageUrl": "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Bike",
            "ipa": "/baɪk/",
            "type": "noun",
            "meaning": "Xe đạp",
            "example": "He rides a blue bike.",
            "exampleVi": "Bạn ấy đi một chiếc xe đạp màu xanh.",
            "imageUrl": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Boy",
            "ipa": "/bɔɪ/",
            "type": "noun",
            "meaning": "Cậu bé, bé trai",
            "example": "The boy is very happy.",
            "exampleVi": "Cậu bé đang rất vui vẻ.",
            "imageUrl": "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Bag",
            "ipa": "/bæɡ/",
            "type": "noun",
            "meaning": "Cặp sách, ba lô",
            "example": "This is my yellow bag.",
            "exampleVi": "Đây là chiếc cặp màu vàng của mình.",
            "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Hello, I am Bill. I have a new blue bike in the school playground.",
          "question": "Listen and identify what Bill has in the school playground:",
          "options": [
            {
              "id": "opt_g1u1_1",
              "label": "A",
              "text": "A blue bike (Chiếc xe đạp màu xanh)",
              "isCorrect": true
            },
            {
              "id": "opt_g1u1_2",
              "label": "B",
              "text": "A red ball (Quả bóng màu đỏ)",
              "isCorrect": false
            },
            {
              "id": "opt_g1u1_3",
              "label": "C",
              "text": "A schoolbag (Chiếc cặp sách)",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe Bill nói: \"I have a new blue bike\". Đáp án đúng là A."
        },
        "speakingPractice": [
          {
            "phrase": "Hello, my name is Bill.",
            "vi": "Xin chào, tên mình là Bill."
          },
          {
            "phrase": "Goodbye, see you tomorrow.",
            "vi": "Tạm biệt, hẹn gặp lại bạn ngày mai."
          }
        ],
        "readingPractice": {
          "passage": "Look at the boy. His name is Ba. Ba has a red book and a yellow bag. He is in the school playground.",
          "question": "What color is Ba's book?",
          "options": [
            {
              "id": "opt_rg1u1_1",
              "label": "A",
              "text": "Red (Màu đỏ)",
              "isCorrect": true
            },
            {
              "id": "opt_rg1u1_2",
              "label": "B",
              "text": "Blue (Màu xanh dương)",
              "isCorrect": false
            },
            {
              "id": "opt_rg1u1_3",
              "label": "C",
              "text": "Yellow (Màu vàng)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"Ba has a red book\". Vậy quyển sách màu đỏ."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu chào hỏi hoàn chỉnh:",
          "scrambledWords": [
            "is",
            "name",
            "My",
            "Ba"
          ],
          "correctSentence": "My name is Ba",
          "explanation": "Cấu trúc giới thiệu tên: My name is + [Tên]."
        }
      },
      {
        "id": "g1_u2",
        "unitNumber": 2,
        "title": "Unit 2: In the Dining Room",
        "vietnameseTitle": "Chủ đề: Phòng ăn & Bữa cơm",
        "overview": "Làm quen với chữ cái C/c (phát âm /k/), gọi tên các món ăn và đồ uống quen thuộc.",
        "grammarFocus": "Chỉ đồ vật: This is a / an + [Đồ vật]. (Đây là một...)",
        "sentencePatterns": [
          "Pass me the cake, please! (Làm ơn đưa cho mình chiếc bánh!)",
          "I like milk. (Mình thích sữa.)"
        ],
        "tips": "Âm /k/ trong tiếng Anh bật hơi từ cuống họng.",
        "vocabulary": [
          {
            "word": "Cake",
            "ipa": "/keɪk/",
            "type": "noun",
            "meaning": "Bánh ngọt, bánh sinh nhật",
            "example": "A sweet chocolate cake.",
            "exampleVi": "Chiếc bánh sô-cô-la ngọt ngào.",
            "imageUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Cat",
            "ipa": "/kæt/",
            "type": "noun",
            "meaning": "Con mèo",
            "example": "The white cat drinks milk.",
            "exampleVi": "Chú mèo trắng uống sữa.",
            "imageUrl": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Cup",
            "ipa": "/kʌp/",
            "type": "noun",
            "meaning": "Cái cốc, tách",
            "example": "A cup of hot tea.",
            "exampleVi": "Một tách trà nóng.",
            "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Car",
            "ipa": "/kɑːr/",
            "type": "noun",
            "meaning": "Xe ô tô",
            "example": "A toy car on the floor.",
            "exampleVi": "Chiếc xe ô tô đồ chơi trên sàn.",
            "imageUrl": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Milk",
            "ipa": "/mɪlk/",
            "type": "noun",
            "meaning": "Sữa tươi",
            "example": "I drink milk every morning.",
            "exampleVi": "Mình uống sữa mỗi buổi sáng.",
            "imageUrl": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Look at the table. There is a cup of milk and a birthday cake.",
          "question": "What is on the table according to the speaker?",
          "options": [
            {
              "id": "opt_g1u2_1",
              "label": "A",
              "text": "A cup of milk and a cake",
              "isCorrect": true
            },
            {
              "id": "opt_g1u2_2",
              "label": "B",
              "text": "A red ball and a bike",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe nhắc đến \"a cup of milk and a birthday cake\"."
        },
        "speakingPractice": [
          {
            "phrase": "I like drinking milk.",
            "vi": "Mình thích uống sữa tươi."
          },
          {
            "phrase": "This is my birthday cake.",
            "vi": "Đây là chiếc bánh sinh nhật của mình."
          }
        ],
        "readingPractice": {
          "passage": "It is my birthday today. I have a big cake. My cat is sleeping under the table. I drink a cup of milk.",
          "question": "Where is the cat sleeping?",
          "options": [
            {
              "id": "opt_rg1u2_1",
              "label": "A",
              "text": "Under the table (Dưới gầm bàn)",
              "isCorrect": true
            },
            {
              "id": "opt_rg1u2_2",
              "label": "B",
              "text": "On the chair (Trên chiếc ghế)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"My cat is sleeping under the table\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "scrambledWords": [
            "is",
            "This",
            "cake",
            "a"
          ],
          "correctSentence": "This is a cake",
          "explanation": "Cấu trúc chỉ đồ vật: This is a + [danh từ số ít]."
        }
      },
      {
        "id": "g1_u3",
        "unitNumber": 3,
        "title": "Unit 3: At the Street Market",
        "vietnameseTitle": "Chủ đề: Tại khu chợ phố & Hoa quả",
        "overview": "Làm quen với chữ cái A/a (phát âm /æ/), hoa quả và số lượng đồ vật.",
        "grammarFocus": "Hỏi số lượng ít: How many + [danh từ số nhiều]? (How many apples?)",
        "sentencePatterns": [
          "How many apples? - Two apples.",
          "I can see an apple."
        ],
        "tips": "Chữ A trong Apple phát âm mở rộng miệng /æ/.",
        "vocabulary": [
          {
            "word": "Apple",
            "ipa": "/ˈæp.əl/",
            "type": "noun",
            "meaning": "Quả táo",
            "example": "I eat a fresh apple.",
            "exampleVi": "Mình ăn một quả táo tươi.",
            "imageUrl": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Ant",
            "ipa": "/ænt/",
            "type": "noun",
            "meaning": "Con kiến",
            "example": "A tiny ant is crawling.",
            "exampleVi": "Một chú kiến nhỏ đang bò.",
            "imageUrl": "https://images.unsplash.com/photo-1589139385078-68f44ff53c07?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Hat",
            "ipa": "/hæt/",
            "type": "noun",
            "meaning": "Cái mũ",
            "example": "A red sun hat.",
            "exampleVi": "Một chiếc mũ che nắng màu đỏ.",
            "imageUrl": "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Market",
            "ipa": "/ˈmɑː.kɪt/",
            "type": "noun",
            "meaning": "Khu chợ mua sắm",
            "example": "We go to the market with mom.",
            "exampleVi": "Chúng mình đi chợ cùng mẹ.",
            "imageUrl": "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "At the street market, my mother buys three red apples and a hat.",
          "question": "What does mother buy at the market?",
          "options": [
            {
              "id": "opt_g1u3_1",
              "label": "A",
              "text": "Three apples and a hat",
              "isCorrect": true
            },
            {
              "id": "opt_g1u3_2",
              "label": "B",
              "text": "A ball and a book",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe nêu rõ \"three red apples and a hat\"."
        },
        "speakingPractice": [
          {
            "phrase": "I see a red apple.",
            "vi": "Mình nhìn thấy một quả táo màu đỏ."
          }
        ],
        "readingPractice": {
          "passage": "Look at the market. There are red apples and big hats. I see three ants near the fruit.",
          "question": "What does the speaker see near the fruit?",
          "options": [
            {
              "id": "opt_rg1u3_1",
              "label": "A",
              "text": "Three ants (Ba chú kiến)",
              "isCorrect": true
            },
            {
              "id": "opt_rg1u3_2",
              "label": "B",
              "text": "Two cats (Hai chú mèo)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"I see three ants near the fruit\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu đúng:",
          "scrambledWords": [
            "see",
            "I",
            "an",
            "apple"
          ],
          "correctSentence": "I see an apple",
          "explanation": "Cấu trúc S + V + O: I see an apple."
        }
      },
      {
        "id": "g1_u4",
        "unitNumber": 4,
        "title": "Unit 4: In the Bedroom",
        "vietnameseTitle": "Chủ đề: Trong phòng ngủ & Đồ đạc",
        "overview": "Làm quen với chữ cái D/d (phát âm /d/), đồ vật trong phòng ngủ như cửa, bàn, chú vịt đồ chơi.",
        "grammarFocus": "Cấu trúc: Point to the + [Đồ vật]. (Hãy chỉ vào cái...)",
        "sentencePatterns": [
          "Point to the door! (Hãy chỉ vào chiếc cửa!)",
          "This is my desk."
        ],
        "tips": "Âm /d/ chạm đầu lưỡi vào vòm họng trên rồi bật rung dây thanh quản.",
        "vocabulary": [
          {
            "word": "Door",
            "ipa": "/dɔːr/",
            "type": "noun",
            "meaning": "Cánh cửa",
            "example": "Close the door, please.",
            "exampleVi": "Làm ơn đóng cửa lại.",
            "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Desk",
            "ipa": "/desk/",
            "type": "noun",
            "meaning": "Bàn học",
            "example": "A neat study desk.",
            "exampleVi": "Bàn học ngăn nắp.",
            "imageUrl": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Dog",
            "ipa": "/dɒɡ/",
            "type": "noun",
            "meaning": "Chú chó",
            "example": "A friendly brown dog.",
            "exampleVi": "Một chú chó màu nâu thân thiện.",
            "imageUrl": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Duck",
            "ipa": "/dʌk/",
            "type": "noun",
            "meaning": "Con vịt đồ chơi",
            "example": "A yellow rubber duck.",
            "exampleVi": "Một chú vịt cao su màu vàng.",
            "imageUrl": "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "In my bedroom, there is a brown dog sleeping near the big wooden desk.",
          "question": "Where is the dog sleeping?",
          "options": [
            {
              "id": "opt_g1u4_1",
              "label": "A",
              "text": "Near the desk (Gần bàn học)",
              "isCorrect": true
            },
            {
              "id": "opt_g1u4_2",
              "label": "B",
              "text": "On the roof (Trên mái nhà)",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"sleeping near the big wooden desk\"."
        },
        "speakingPractice": [
          {
            "phrase": "Point to the door, please.",
            "vi": "Làm ơn hãy chỉ vào cánh cửa."
          }
        ],
        "readingPractice": {
          "passage": "Welcome to my room. Here is my brown desk. Look at the yellow duck on the shelf. My dog is wagging its tail.",
          "question": "What is on the shelf?",
          "options": [
            {
              "id": "opt_rg1u4_1",
              "label": "A",
              "text": "A yellow duck (Chú vịt màu vàng)",
              "isCorrect": true
            },
            {
              "id": "opt_rg1u4_2",
              "label": "B",
              "text": "A big car (Chiếc ô tô to)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn trích: \"Look at the yellow duck on the shelf\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu hoàn chỉnh:",
          "scrambledWords": [
            "is",
            "my",
            "This",
            "desk"
          ],
          "correctSentence": "This is my desk",
          "explanation": "Cấu trúc chỉ sở hữu: This is my + [danh từ]."
        }
      }
    ]
  },
  {
    "grade": "Lớp 2",
    "level": "primary",
    "levelName": "Tiểu học (Cấp 1)",
    "textbook": "Global Success & Family and Friends (Lớp 2)",
    "description": "Chương trình Tiếng Anh Lớp 2: Mở rộng vốn từ vựng dã ngoại, biển đảo, nông thôn, hình học và các con vật cưng.",
    "color": "emerald",
    "units": [
      {
        "id": "g2_u1",
        "unitNumber": 1,
        "title": "Unit 1: At the Camp",
        "vietnameseTitle": "Chủ đề: Buổi cắm trại dã ngoại",
        "overview": "Làm quen với các từ vựng chỉ hoạt động ngoài trời, đồ đạc mang đi dã ngoại và âm /æ/.",
        "grammarFocus": "Hỏi xem ai đó có vật gì: Do you have a + [Vật]? - Yes, I do / No, I do not.",
        "sentencePatterns": [
          "Do you have a tent? - Yes, I do.",
          "Let us go camping! (Chúng mình cùng đi cắm trại nào!)"
        ],
        "tips": "Hãy tưởng tượng buổi đi picnic để liên kết từ vựng lại với nhau.",
        "vocabulary": [
          {
            "word": "Camp",
            "ipa": "/kæmp/",
            "type": "noun",
            "meaning": "Khu cắm trại",
            "example": "We stay at the summer camp.",
            "exampleVi": "Chúng mình ở trại hè.",
            "imageUrl": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Tent",
            "ipa": "/tent/",
            "type": "noun",
            "meaning": "Chiếc lều cắm trại",
            "example": "A big blue tent.",
            "exampleVi": "Một chiếc lều to màu xanh.",
            "imageUrl": "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Blanket",
            "ipa": "/ˈblæŋ.kɪt/",
            "type": "noun",
            "meaning": "Cái chăn ấm",
            "example": "Bring a warm blanket.",
            "exampleVi": "Mang theo một chiếc chăn ấm nhé.",
            "imageUrl": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Water",
            "ipa": "/ˈwɔː.tər/",
            "type": "noun",
            "meaning": "Nước uống tinh khiết",
            "example": "Drink fresh water.",
            "exampleVi": "Uống nước lọc tinh khiết.",
            "imageUrl": "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Welcome to our camp! Put your blue tent next to the tall tree and unpack your blanket.",
          "question": "Where should the tent be placed?",
          "options": [
            {
              "id": "opt_g2u1_1",
              "label": "A",
              "text": "Next to the tall tree",
              "isCorrect": true
            },
            {
              "id": "opt_g2u1_2",
              "label": "B",
              "text": "Near the river",
              "isCorrect": false
            }
          ],
          "explanation": "Trong bài nghe: \"Put your blue tent next to the tall tree\"."
        },
        "speakingPractice": [
          {
            "phrase": "Do you have a tent?",
            "vi": "Bạn có mang theo lều không?"
          },
          {
            "phrase": "Yes, I have a big tent.",
            "vi": "Có, mình có một chiếc lều to."
          }
        ],
        "readingPractice": {
          "passage": "It is Sunday morning. Nam and his sister are at the camp. Nam has a blue tent. His sister has a warm blanket.",
          "question": "What does Nam's sister have?",
          "options": [
            {
              "id": "opt_rg2u1_1",
              "label": "A",
              "text": "A warm blanket (Chiếc chăn ấm)",
              "isCorrect": true
            },
            {
              "id": "opt_rg2u1_2",
              "label": "B",
              "text": "A toy car (Xe ô tô đồ chơi)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"His sister has a warm blanket\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu hỏi:",
          "scrambledWords": [
            "you",
            "Do",
            "have",
            "tent?",
            "a"
          ],
          "correctSentence": "Do you have a tent?",
          "explanation": "Cấu trúc câu hỏi: Do you have a + [danh từ]?"
        }
      },
      {
        "id": "g2_u2",
        "unitNumber": 2,
        "title": "Unit 2: At the Seaside",
        "vietnameseTitle": "Chủ đề: Tại bãi biển & Hải sản",
        "overview": "Làm quen với từ vựng về biển, bãi cát, thuyền buồm và sinh vật biển.",
        "grammarFocus": "Cấu trúc rủ rê: Let us + V-nguyên thể (Let us swim / Let us build a sandcastle).",
        "sentencePatterns": [
          "Let us swim in the sea! (Chúng mình cùng bơi dưới biển nào!)",
          "I see a boat."
        ],
        "tips": "Phát âm đuôi âm /s/ trong sea, sand, sail.",
        "vocabulary": [
          {
            "word": "Sea",
            "ipa": "/siː/",
            "type": "noun",
            "meaning": "Biển xanh",
            "example": "The sea is warm and calm.",
            "exampleVi": "Nước biển ấm và êm ả.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Sand",
            "ipa": "/sænd/",
            "type": "noun",
            "meaning": "Bãi cát vàng",
            "example": "We play on the golden sand.",
            "exampleVi": "Chúng mình chơi trên bãi cát vàng.",
            "imageUrl": "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Boat",
            "ipa": "/bəʊt/",
            "type": "noun",
            "meaning": "Chiếc thuyền buồm",
            "example": "A white boat sailing away.",
            "exampleVi": "Chiếc thuyền trắng đang giương buồm ra khơi.",
            "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Look at the beautiful sea. I can see two sailing boats on the blue water.",
          "question": "How many boats can the speaker see?",
          "options": [
            {
              "id": "opt_g2u2_1",
              "label": "A",
              "text": "Two boats (Hai chiếc thuyền)",
              "isCorrect": true
            },
            {
              "id": "opt_g2u2_2",
              "label": "B",
              "text": "Three boats (Ba chiếc thuyền)",
              "isCorrect": false
            }
          ],
          "explanation": "Người nói nêu rõ: \"two sailing boats\"."
        },
        "speakingPractice": [
          {
            "phrase": "Let us build a sandcastle.",
            "vi": "Chúng mình cùng xây lâu đài cát nào."
          }
        ],
        "readingPractice": {
          "passage": "We are at the seaside. The sun is shining brightly. My brother is running on the warm sand.",
          "question": "Who is running on the sand?",
          "options": [
            {
              "id": "opt_rg2u2_1",
              "label": "A",
              "text": "My brother (Em trai mình)",
              "isCorrect": true
            },
            {
              "id": "opt_rg2u2_2",
              "label": "B",
              "text": "My teacher (Thầy giáo)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"My brother is running on the warm sand\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ:",
          "scrambledWords": [
            "swim",
            "us",
            "Let",
            "in",
            "sea",
            "the"
          ],
          "correctSentence": "Let us swim in the sea",
          "explanation": "Cấu trúc câu rủ rê: Let us + V + ..."
        }
      },
      {
        "id": "g2_u3",
        "unitNumber": 3,
        "title": "Unit 3: In the Countryside",
        "vietnameseTitle": "Chủ đề: Về miền quê yên bình",
        "overview": "Khám phá từ vựng phong cảnh thiên nhiên nông thôn: cánh đồng, dòng sông, con diều bay lượn.",
        "grammarFocus": "Hỏi vật gì đang ở đâu: Where is the + [Vật]? - It is on / by the + [Nơi chốn].",
        "sentencePatterns": [
          "Where is the kite? - It is in the sky.",
          "I love the green trees."
        ],
        "tips": "Ghi nhớ giới từ vị trí cơ bản: in (trong), on (trên), by (bên cạnh).",
        "vocabulary": [
          {
            "word": "River",
            "ipa": "/ˈrɪv.ər/",
            "type": "noun",
            "meaning": "Dòng sông mát rượi",
            "example": "A long peaceful river.",
            "exampleVi": "Một dòng sông dài thanh bình.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Kite",
            "ipa": "/kaɪt/",
            "type": "noun",
            "meaning": "Con diều giấy",
            "example": "Fly a kite in the field.",
            "exampleVi": "Thả diều trên cánh đồng.",
            "imageUrl": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Tree",
            "ipa": "/triː/",
            "type": "noun",
            "meaning": "Cây cối bóng mát",
            "example": "A tall green tree.",
            "exampleVi": "Cây cổ thụ xanh cao lớn.",
            "imageUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "In the afternoon, the village children fly their colourful kites by the peaceful river.",
          "question": "Where do the children fly kites?",
          "options": [
            {
              "id": "opt_g2u3_1",
              "label": "A",
              "text": "By the peaceful river",
              "isCorrect": true
            },
            {
              "id": "opt_g2u3_2",
              "label": "B",
              "text": "In the classroom",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"by the peaceful river\"."
        },
        "speakingPractice": [
          {
            "phrase": "I can fly a kite.",
            "vi": "Mình có thể thả diều."
          }
        ],
        "readingPractice": {
          "passage": "Grandpa lives in the countryside. There is a wide river behind his house and lots of green fruit trees.",
          "question": "Where does Grandpa live?",
          "options": [
            {
              "id": "opt_rg2u3_1",
              "label": "A",
              "text": "In the countryside (Ở vùng nông thôn)",
              "isCorrect": true
            },
            {
              "id": "opt_rg2u3_2",
              "label": "B",
              "text": "In a big noisy city (Tại thành phố ồn ào)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"Grandpa lives in the countryside\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu đúng:",
          "scrambledWords": [
            "fly",
            "a",
            "can",
            "kite",
            "I"
          ],
          "correctSentence": "I can fly a kite",
          "explanation": "Cấu trúc chỉ khả năng: I can + V-nguyên mẫu."
        }
      }
    ]
  },
  {
    "grade": "Lớp 3",
    "level": "primary",
    "levelName": "Tiểu học (Cấp 1)",
    "textbook": "Global Success (Lớp 3) - Bộ Giáo Dục & Đào Tạo",
    "description": "Chương trình Tiếng Anh Lớp 3 chuẩn mới: Hỏi thăm sức khỏe, thành viên gia đình, bộ phận cơ thể, sở thích cá nhân và đồ dùng học tập.",
    "color": "emerald",
    "units": [
      {
        "id": "g3_u1",
        "unitNumber": 1,
        "title": "Unit 1: Hello & Our Names",
        "vietnameseTitle": "Chủ đề: Xin chào & Hỏi tên bạn bè",
        "overview": "Học sinh làm quen cách hỏi thăm sức khỏe, tên tuổi và các câu chào lịch sự.",
        "grammarFocus": "Hỏi tên: What is your name? - My name is + [Tên]. Hỏi thăm sức khỏe: How are you? - I am fine, thank you.",
        "sentencePatterns": [
          "What is your name? - My name is Mai.",
          "How are you today? - Fine, thanks."
        ],
        "tips": "Ghi nhớ cách viết hoa chữ cái đầu tên người và dấu câu.",
        "vocabulary": [
          {
            "word": "Hello",
            "ipa": "/həˈləʊ/",
            "type": "exclamation",
            "meaning": "Xin chào (trang trọng)",
            "example": "Hello, Mr. Loc.",
            "exampleVi": "Xin chào thầy Lộc ạ.",
            "imageUrl": "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Name",
            "ipa": "/neɪm/",
            "type": "noun",
            "meaning": "Tên gọi",
            "example": "What is your full name?",
            "exampleVi": "Tên đầy đủ của bạn là gì?",
            "imageUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Friend",
            "ipa": "/frend/",
            "type": "noun",
            "meaning": "Bạn bè thân thiết",
            "example": "Nam is my best friend.",
            "exampleVi": "Nam là bạn thân nhất của mình.",
            "imageUrl": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Meet",
            "ipa": "/miːt/",
            "type": "verb",
            "meaning": "Gặp gỡ, làm quen",
            "example": "Nice to meet you!",
            "exampleVi": "Rất vui được gặp bạn!",
            "imageUrl": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Teacher: Hello class! Welcome to grade 3. What is your name, please? Student: Hello teacher, my name is Mai.",
          "question": "What is the student's name?",
          "options": [
            {
              "id": "opt_g3u1_1",
              "label": "A",
              "text": "Mai",
              "isCorrect": true
            },
            {
              "id": "opt_g3u1_2",
              "label": "B",
              "text": "Lan",
              "isCorrect": false
            }
          ],
          "explanation": "Học sinh trả lời: \"my name is Mai\"."
        },
        "speakingPractice": [
          {
            "phrase": "Nice to meet you, Mai.",
            "vi": "Rất vui được làm quen với bạn, Mai."
          },
          {
            "phrase": "I am fine, thank you.",
            "vi": "Mình khỏe, cảm ơn bạn nhiều."
          }
        ],
        "readingPractice": {
          "passage": "Hi, I am Peter. I am eight years old. I am in class 3A. My new English teacher is Miss Hien. She is very kind.",
          "question": "Who is Peter's English teacher?",
          "options": [
            {
              "id": "opt_rg3u1_1",
              "label": "A",
              "text": "Miss Hien",
              "isCorrect": true
            },
            {
              "id": "opt_rg3u1_2",
              "label": "B",
              "text": "Mr. Loc",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"My new English teacher is Miss Hien\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu hỏi:",
          "scrambledWords": [
            "is",
            "What",
            "name?",
            "your"
          ],
          "correctSentence": "What is your name?",
          "explanation": "Cấu trúc câu hỏi tên: What is your name?"
        }
      },
      {
        "id": "g3_u2",
        "unitNumber": 2,
        "title": "Unit 2: Our Family & Relatives",
        "vietnameseTitle": "Chủ đề: Gia đình & Người thân",
        "overview": "Học sinh học từ vựng về các thành viên gia đình và mẫu câu giới thiệu người thân.",
        "grammarFocus": "Hỏi người đó là ai: Who is that? - That is my father / mother.",
        "sentencePatterns": [
          "Who is that? - It is my brother.",
          "This is my mother. She is thirty-five."
        ],
        "tips": "Phân biệt đại từ nhân xưng: He (ông ấy, anh ấy) và She (bà ấy, cô ấy).",
        "vocabulary": [
          {
            "word": "Father",
            "ipa": "/ˈfɑː.ðər/",
            "type": "noun",
            "meaning": "Bố, cha",
            "example": "My father is a doctor.",
            "exampleVi": "Bố mình là một bác sĩ.",
            "imageUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Mother",
            "ipa": "/ˈmʌð.ər/",
            "type": "noun",
            "meaning": "Mẹ",
            "example": "My mother cooks delicious food.",
            "exampleVi": "Mẹ mình nấu ăn rất ngon.",
            "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Brother",
            "ipa": "/ˈbrʌð.ər/",
            "type": "noun",
            "meaning": "Anh trai, em trai",
            "example": "My older brother is tall.",
            "exampleVi": "Anh trai mình rất cao.",
            "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Sister",
            "ipa": "/ˈsɪs.tər/",
            "type": "noun",
            "meaning": "Chị gái, em gái",
            "example": "My sister loves singing.",
            "exampleVi": "Em gái mình rất thích ca hát.",
            "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Linda: Who is the woman in the red dress? Tom: That is my mother. She is an art teacher.",
          "question": "What is Tom's mother's job?",
          "options": [
            {
              "id": "opt_g3u2_1",
              "label": "A",
              "text": "An art teacher",
              "isCorrect": true
            },
            {
              "id": "opt_g3u2_2",
              "label": "B",
              "text": "A police officer",
              "isCorrect": false
            }
          ],
          "explanation": "Tom nói: \"That is my mother. She is an art teacher\"."
        },
        "speakingPractice": [
          {
            "phrase": "That is my father.",
            "vi": "Đó là bố của mình."
          },
          {
            "phrase": "How old is your sister?",
            "vi": "Em gái của bạn bao nhiêu tuổi rồi?"
          }
        ],
        "readingPractice": {
          "passage": "There are four people in my family: my father, my mother, my younger sister and me. We live happily together in Hanoi.",
          "question": "How many people are there in the family?",
          "options": [
            {
              "id": "opt_rg3u2_1",
              "label": "A",
              "text": "Four people (Bốn người)",
              "isCorrect": true
            },
            {
              "id": "opt_rg3u2_2",
              "label": "B",
              "text": "Five people (Năm người)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"There are four people in my family\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu đúng:",
          "scrambledWords": [
            "is",
            "my",
            "That",
            "mother"
          ],
          "correctSentence": "That is my mother",
          "explanation": "Cấu trúc chỉ người: That is my + [người thân]."
        }
      },
      {
        "id": "g3_u3",
        "unitNumber": 3,
        "title": "Unit 3: Our Body & Senses",
        "vietnameseTitle": "Chủ đề: Bộ phận cơ thể & Giác quan",
        "overview": "Học sinh gọi tên mắt, mũi, tai, miệng, tay và các hành động chạm vào bộ phận cơ thể.",
        "grammarFocus": "Mệnh lệnh: Touch your + [Bộ phận]. (Hãy chạm vào... của bạn).",
        "sentencePatterns": [
          "Touch your eyes! (Hãy chạm vào mắt của em!)",
          "These are my ears."
        ],
        "tips": "Phân biệt số ít (one eye) và số nhiều (two eyes).",
        "vocabulary": [
          {
            "word": "Eye",
            "ipa": "/aɪ/",
            "type": "noun",
            "meaning": "Mắt, đôi mắt",
            "example": "Open your eyes wide.",
            "exampleVi": "Mở to đôi mắt của bạn ra nào.",
            "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Ear",
            "ipa": "/ɪər/",
            "type": "noun",
            "meaning": "Tai, đôi tai",
            "example": "Listen with your ears.",
            "exampleVi": "Hãy lắng nghe bằng đôi tai.",
            "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Nose",
            "ipa": "/nəʊz/",
            "type": "noun",
            "meaning": "Cái mũi",
            "example": "Touch your nose.",
            "exampleVi": "Hãy chạm vào mũi của bạn.",
            "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Simon says: Touch your ears and close your eyes right now!",
          "question": "What does Simon say to touch?",
          "options": [
            {
              "id": "opt_g3u3_1",
              "label": "A",
              "text": "Touch your ears",
              "isCorrect": true
            },
            {
              "id": "opt_g3u3_2",
              "label": "B",
              "text": "Touch your feet",
              "isCorrect": false
            }
          ],
          "explanation": "Simon nói: \"Touch your ears\"."
        },
        "speakingPractice": [
          {
            "phrase": "Touch your nose, please.",
            "vi": "Xin vui lòng chạm vào mũi của bạn."
          }
        ],
        "readingPractice": {
          "passage": "I have two eyes to see the sunshine. I have two ears to hear nice music. I have one nose to smell flowers.",
          "question": "What does the speaker smell flowers with?",
          "options": [
            {
              "id": "opt_rg3u3_1",
              "label": "A",
              "text": "One nose (Một chiếc mũi)",
              "isCorrect": true
            },
            {
              "id": "opt_rg3u3_2",
              "label": "B",
              "text": "Two ears (Hai chiếc tai)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"I have one nose to smell flowers\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu mệnh lệnh:",
          "scrambledWords": [
            "your",
            "Touch",
            "ears"
          ],
          "correctSentence": "Touch your ears",
          "explanation": "Cấu trúc mệnh lệnh: Touch your + [bộ phận]."
        }
      }
    ]
  },
  {
    "grade": "Lớp 4",
    "level": "primary",
    "levelName": "Tiểu học (Cấp 1)",
    "textbook": "Global Success (Lớp 4) - Bộ Giáo Dục & Đào Tạo",
    "description": "Chương trình Tiếng Anh Lớp 4: Quốc tịch, các ngày trong tuần, thời gian sinh hoạt, sở thích và các môn học yêu thích.",
    "color": "emerald",
    "units": [
      {
        "id": "g4_u1",
        "unitNumber": 1,
        "title": "Unit 1: My Friends & Nationalities",
        "vietnameseTitle": "Chủ đề: Bạn bè quốc tế & Quốc tịch",
        "overview": "Hỏi quê quán, đất nước và quốc tịch của bạn bè khắp năm châu.",
        "grammarFocus": "Hỏi quê quán: Where are you from? - I am from + [Quốc gia]. Hỏi quốc tịch: What nationality are you? - I am Vietnamese / American.",
        "sentencePatterns": [
          "Where are you from? - I am from Vietnam.",
          "She is Japanese."
        ],
        "tips": "Phân biệt tên quốc gia (Vietnam, Japan) và quốc tịch (Vietnamese, Japanese).",
        "vocabulary": [
          {
            "word": "Vietnam",
            "ipa": "/ˌvjetˈnɑːm/",
            "type": "noun",
            "meaning": "Nước Việt Nam",
            "example": "I live in Vietnam.",
            "exampleVi": "Mình sống ở Việt Nam.",
            "imageUrl": "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "England",
            "ipa": "/ˈɪŋ.ɡlənd/",
            "type": "noun",
            "meaning": "Nước Anh",
            "example": "Tony comes from England.",
            "exampleVi": "Tony đến từ nước Anh.",
            "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "America",
            "ipa": "/əˈmer.ɪ.kə/",
            "type": "noun",
            "meaning": "Nước Mỹ, Hoa Kỳ",
            "example": "Tom is from America.",
            "exampleVi": "Tom đến từ nước Mỹ.",
            "imageUrl": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Nationality",
            "ipa": "/ˌnæʃ.ənˈæl.ə.ti/",
            "type": "noun",
            "meaning": "Quốc tịch",
            "example": "What nationality are you?",
            "exampleVi": "Bạn mang quốc tịch gì?",
            "imageUrl": "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Hi everyone, my name is Akiko. I am from Tokyo, Japan. I am Japanese and I love Vietnam!",
          "question": "Where is Akiko from?",
          "options": [
            {
              "id": "opt_g4u1_1",
              "label": "A",
              "text": "Japan (Nhật Bản)",
              "isCorrect": true
            },
            {
              "id": "opt_g4u1_2",
              "label": "B",
              "text": "England (Nước Anh)",
              "isCorrect": false
            }
          ],
          "explanation": "Akiko nói rõ: \"I am from Tokyo, Japan\"."
        },
        "speakingPractice": [
          {
            "phrase": "Where are you from?",
            "vi": "Bạn đến từ quốc gia nào?"
          },
          {
            "phrase": "I am from Vietnam.",
            "vi": "Mình đến từ Việt Nam."
          }
        ],
        "readingPractice": {
          "passage": "This is my international pen pal, Hakim. He is from Malaysia. He is Malaysian. Hakim enjoys learning English and playing badminton.",
          "question": "What nationality is Hakim?",
          "options": [
            {
              "id": "opt_rg4u1_1",
              "label": "A",
              "text": "Malaysian (Người Malaysia)",
              "isCorrect": true
            },
            {
              "id": "opt_rg4u1_2",
              "label": "B",
              "text": "Australian (Người Úc)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"He is Malaysian\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu hỏi:",
          "scrambledWords": [
            "you",
            "Where",
            "from?",
            "are"
          ],
          "correctSentence": "Where are you from?",
          "explanation": "Cấu trúc hỏi xuất thân: Where are you from?"
        }
      },
      {
        "id": "g4_u2",
        "unitNumber": 2,
        "title": "Unit 2: Time and Daily Routines",
        "vietnameseTitle": "Chủ đề: Thời gian & Lịch sinh hoạt hằng ngày",
        "overview": "Học cách xem giờ đồng hồ và miêu tả thời gian biểu trong ngày (thức dậy, ăn sáng, đi học).",
        "grammarFocus": "Hỏi giờ: What time is it? - It is + [Số giờ] o'clock. Hỏi giờ làm gì: What time do you get up? - I get up at 6:00 a.m.",
        "sentencePatterns": [
          "What time is it? - It is seven o'clock.",
          "I have breakfast at six thirty."
        ],
        "tips": "Dùng giới từ \"at\" trước các mốc thời gian giờ giấc cụ thể (at 7 o'clock).",
        "vocabulary": [
          {
            "word": "Time",
            "ipa": "/taɪm/",
            "type": "noun",
            "meaning": "Thời gian, giờ giấc",
            "example": "What time does the movie start?",
            "exampleVi": "Mấy giờ bộ phim bắt đầu?",
            "imageUrl": "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Breakfast",
            "ipa": "/ˈbrek.fəst/",
            "type": "noun",
            "meaning": "Bữa ăn sáng",
            "example": "I eat breakfast at 6:30.",
            "exampleVi": "Mình ăn sáng lúc 6 giờ 30.",
            "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "School",
            "ipa": "/skuːl/",
            "type": "noun",
            "meaning": "Trường học",
            "example": "We go to school on weekdays.",
            "exampleVi": "Chúng mình đi học vào các ngày trong tuần.",
            "imageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Every morning, Nam wakes up early at 6 o'clock. He brushes his teeth and eats breakfast at 6:30.",
          "question": "What time does Nam wake up?",
          "options": [
            {
              "id": "opt_g4u2_1",
              "label": "A",
              "text": "At 6 o'clock",
              "isCorrect": true
            },
            {
              "id": "opt_g4u2_2",
              "label": "B",
              "text": "At 7 o'clock",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"Nam wakes up early at 6 o'clock\"."
        },
        "speakingPractice": [
          {
            "phrase": "What time is it now?",
            "vi": "Bây giờ là mấy giờ rồi?"
          },
          {
            "phrase": "It is seven o'clock.",
            "vi": "Bây giờ là đúng 7 giờ."
          }
        ],
        "readingPractice": {
          "passage": "On school days, Mai gets up at six fifteen. She wears her uniform and leaves home for school at seven o'clock with her brother.",
          "question": "What time does Mai leave home for school?",
          "options": [
            {
              "id": "opt_rg4u2_1",
              "label": "A",
              "text": "At seven o'clock (Lúc 7 giờ đúng)",
              "isCorrect": true
            },
            {
              "id": "opt_rg4u2_2",
              "label": "B",
              "text": "At eight o'clock (Lúc 8 giờ đúng)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"leaves home for school at seven o'clock\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu:",
          "scrambledWords": [
            "is",
            "time",
            "What",
            "it?"
          ],
          "correctSentence": "What time is it?",
          "explanation": "Cấu trúc hỏi giờ: What time is it?"
        }
      }
    ]
  },
  {
    "grade": "Lớp 5",
    "level": "primary",
    "levelName": "Tiểu học (Cấp 1)",
    "textbook": "Global Success (Lớp 5) - Bộ Giáo Dục & Đào Tạo",
    "description": "Chương trình Tiếng Anh Lớp 5: Địa chỉ nhà ở, thói quen sinh hoạt lành mạnh, nghề nghiệp tương lai và dự định ước mơ.",
    "color": "emerald",
    "units": [
      {
        "id": "g5_u1",
        "unitNumber": 1,
        "title": "Unit 1: All About Me & Addresses",
        "vietnameseTitle": "Chủ đề: Giới thiệu bản thân & Địa chỉ nhà ở",
        "overview": "Học sinh học cách hỏi và trả lời về địa chỉ nhà, quê quán và miêu tả nơi mình sinh sống.",
        "grammarFocus": "Hỏi địa chỉ: What is your address? - It is + [Số nhà, Tên đường]. Miêu tả nơi chốn: What is the city / village like? - It is big and busy / quiet and peaceful.",
        "sentencePatterns": [
          "What is your address? - It is 81 Tran Hung Dao Street.",
          "The village is small and quiet."
        ],
        "tips": "Ghi nhớ các từ chỉ đường sá: Street (phố), Lane (ngõ), Avenue (đại lộ), Road (đường).",
        "vocabulary": [
          {
            "word": "Address",
            "ipa": "/əˈdres/",
            "type": "noun",
            "meaning": "Địa chỉ nhà ở",
            "example": "Write your address on the form.",
            "exampleVi": "Hãy viết địa chỉ của bạn vào tờ đơn.",
            "imageUrl": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Street",
            "ipa": "/striːt/",
            "type": "noun",
            "meaning": "Con phố, đường phố",
            "example": "A bustling street in Da Nang.",
            "exampleVi": "Một con phố nhộn nhịp ở Đà Nẵng.",
            "imageUrl": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Tower",
            "ipa": "/ˈtaʊ.ər/",
            "type": "noun",
            "meaning": "Tòa tháp, chung cư cao tầng",
            "example": "He lives on the tenth floor of the tower.",
            "exampleVi": "Bạn ấy sống ở tầng 10 của tòa tháp.",
            "imageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Peaceful",
            "ipa": "/ˈpiːs.fəl/",
            "type": "adj",
            "meaning": "Thanh bình, yên ả",
            "example": "A peaceful green countryside.",
            "exampleVi": "Một vùng quê xanh mát thanh bình.",
            "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Hi, I am Quan. I live with my grandparents in a peaceful village. My address is 52 Peace Lane.",
          "question": "What is Quan's address?",
          "options": [
            {
              "id": "opt_g5u1_1",
              "label": "A",
              "text": "52 Peace Lane",
              "isCorrect": true
            },
            {
              "id": "opt_g5u1_2",
              "label": "B",
              "text": "81 Tran Hung Dao Street",
              "isCorrect": false
            }
          ],
          "explanation": "Quan nêu rõ: \"My address is 52 Peace Lane\"."
        },
        "speakingPractice": [
          {
            "phrase": "What is your address?",
            "vi": "Địa chỉ nhà của bạn là gì?"
          },
          {
            "phrase": "It is 81 Tran Hung Dao Street.",
            "vi": "Đó là số 81 đường Trần Hưng Đạo."
          }
        ],
        "readingPractice": {
          "passage": "Trung lives in a modern flat in Landmark Tower, Ho Chi Minh City. His flat is on the eighteenth floor. His city is large, crowded and exciting.",
          "question": "Where is Trung's flat located?",
          "options": [
            {
              "id": "opt_rg5u1_1",
              "label": "A",
              "text": "In Landmark Tower (Trong tòa tháp Landmark)",
              "isCorrect": true
            },
            {
              "id": "opt_rg5u1_2",
              "label": "B",
              "text": "In a quiet village (Trong một ngôi làng nhỏ)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"Trung lives in a modern flat in Landmark Tower\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "scrambledWords": [
            "is",
            "address?",
            "What",
            "your"
          ],
          "correctSentence": "What is your address?",
          "explanation": "Cấu trúc hỏi địa chỉ: What is your address?"
        }
      },
      {
        "id": "g5_u4",
        "unitNumber": 4,
        "title": "Unit 4: Healthy Habits & Daily Routines",
        "vietnameseTitle": "Chủ đề: Thói quen sinh hoạt lành mạnh",
        "overview": "Học sinh làm quen với các trạng từ chỉ tần suất (always, usually, often, sometimes, never) và các hoạt động bảo vệ sức khỏe.",
        "grammarFocus": "Hỏi mức độ thường xuyên: How often do you + V? - I always / usually + V.",
        "sentencePatterns": [
          "How often do you exercise? - I do it every day.",
          "I always brush my teeth twice a day."
        ],
        "tips": "Trạng từ chỉ tần suất đứng trước động từ thường và đứng sau động từ to be.",
        "vocabulary": [
          {
            "word": "Always",
            "ipa": "/ˈɔːl.weɪz/",
            "type": "adv",
            "meaning": "Luôn luôn (100%)",
            "example": "I always do morning exercise.",
            "exampleVi": "Mình luôn luôn tập thể dục buổi sáng.",
            "imageUrl": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Usually",
            "ipa": "/ˈjuː.ʒu.ə.li/",
            "type": "adv",
            "meaning": "Thường xuyên (80%)",
            "example": "We usually ride bikes after school.",
            "exampleVi": "Chúng mình thường đạp xe sau giờ học.",
            "imageUrl": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Exercise",
            "ipa": "/ˈek.sə.saɪz/",
            "type": "noun/verb",
            "meaning": "Tập thể dục, rèn luyện",
            "example": "Regular exercise keeps you fit.",
            "exampleVi": "Tập thể dục đều đặn giúp bạn khỏe mạnh.",
            "imageUrl": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Doctor: How often do you play sports, Nam? Nam: I play football with my classmates twice a week.",
          "question": "How often does Nam play football?",
          "options": [
            {
              "id": "opt_g5u4_1",
              "label": "A",
              "text": "Twice a week (2 lần một tuần)",
              "isCorrect": true
            },
            {
              "id": "opt_g5u4_2",
              "label": "B",
              "text": "Every day",
              "isCorrect": false
            }
          ],
          "explanation": "Nam trả lời bác sĩ: \"twice a week\"."
        },
        "speakingPractice": [
          {
            "phrase": "I always brush my teeth twice a day.",
            "vi": "Mình luôn đánh răng hai lần mỗi ngày."
          }
        ],
        "readingPractice": {
          "passage": "To stay healthy, Lan has a nutritious breakfast every morning. She usually walks to school and never stays up late at night.",
          "question": "What does Lan never do?",
          "options": [
            {
              "id": "opt_rg5u4_1",
              "label": "A",
              "text": "Stay up late at night (Thức khuya)",
              "isCorrect": true
            },
            {
              "id": "opt_rg5u4_2",
              "label": "B",
              "text": "Eat breakfast (Ăn sáng)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"never stays up late at night\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
          "scrambledWords": [
            "always",
            "morning",
            "I",
            "exercise",
            "do"
          ],
          "correctSentence": "I always do morning exercise",
          "explanation": "Cấu trúc: Chủ ngữ + trạng từ tần suất + động từ."
        }
      }
    ]
  },
  {
    "grade": "Lớp 6",
    "level": "secondary",
    "levelName": "THCS (Cấp 2)",
    "textbook": "Global Success (Lớp 6) - Bám Sát SGK Mới",
    "description": "Chương trình Tiếng Anh Lớp 6: Môi trường học tập mới, ngôi nhà thân yêu, miêu tả tính cách bạn bè, khu phố xung quanh và kỳ quan thiên nhiên Việt Nam.",
    "color": "blue",
    "units": [
      {
        "id": "g6_u1",
        "unitNumber": 1,
        "title": "Unit 1: My New School",
        "vietnameseTitle": "Chủ đề: Ngôi trường mới của em",
        "overview": "Học sinh làm quen với thì Hiện tại đơn, đồ dùng học tập THCS và các hoạt động câu lạc bộ.",
        "grammarFocus": "Thì Hiện tại đơn (Present Simple): S + V(s/es) và các động từ đi kèm: play / do / have / study.",
        "sentencePatterns": [
          "I have new subjects today.",
          "Do you wear uniform on Mondays? - Yes, I do."
        ],
        "tips": "Chú ý cách phát âm đuôi -s/es: /s/, /z/, /ɪz/.",
        "vocabulary": [
          {
            "word": "Uniform",
            "ipa": "/ˈjuː.nɪ.fɔːm/",
            "type": "noun",
            "meaning": "Bộ đồng phục học sinh",
            "example": "We wear school uniform on Monday.",
            "exampleVi": "Chúng mình mặc đồng phục vào thứ Hai.",
            "imageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Compass",
            "ipa": "/ˈkʌm.pəs/",
            "type": "noun",
            "meaning": "Cái com-pa vẽ hình tròn",
            "example": "Use a compass in Maths class.",
            "exampleVi": "Dùng com-pa trong giờ học Toán.",
            "imageUrl": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Calculator",
            "ipa": "/ˈkæl.kjə.leɪ.tər/",
            "type": "noun",
            "meaning": "Máy tính bỏ túi",
            "example": "A scientific calculator.",
            "exampleVi": "Máy tính khoa học.",
            "imageUrl": "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Creative",
            "ipa": "/kriˈeɪ.tɪv/",
            "type": "adj",
            "meaning": "Sáng tạo, nhiều ý tưởng",
            "example": "Creative art projects.",
            "exampleVi": "Các dự án nghệ thuật sáng tạo.",
            "imageUrl": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Welcome to An Son Lower Secondary School! Here, students do science experiments in modern laboratories and have lunch together in the canteen.",
          "question": "Where do students do science experiments?",
          "options": [
            {
              "id": "opt_g6u1_1",
              "label": "A",
              "text": "In modern laboratories (Trong các phòng thí nghiệm)",
              "isCorrect": true
            },
            {
              "id": "opt_g6u1_2",
              "label": "B",
              "text": "In the playground",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"students do science experiments in modern laboratories\"."
        },
        "speakingPractice": [
          {
            "phrase": "I study English and science at my new school.",
            "vi": "Mình học môn Tiếng Anh và Khoa học tại ngôi trường mới."
          }
        ],
        "readingPractice": {
          "passage": "Sunrise is a boarding school in Sydney. Students study and live there during the week. In the afternoons, they join various sports clubs like swimming and basketball.",
          "question": "What kind of school is Sunrise?",
          "options": [
            {
              "id": "opt_rg6u1_1",
              "label": "A",
              "text": "A boarding school (Trường nội trú)",
              "isCorrect": true
            },
            {
              "id": "opt_rg6u1_2",
              "label": "B",
              "text": "A primary day school",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"Sunrise is a boarding school in Sydney\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp các từ thành câu đúng thì hiện tại đơn:",
          "scrambledWords": [
            "wear",
            "school",
            "We",
            "uniform",
            "every",
            "day"
          ],
          "correctSentence": "We wear school uniform every day",
          "explanation": "Cấu trúc Hiện tại đơn: S + V(nguyên mẫu) + O + trạng từ."
        }
      },
      {
        "id": "g6_u2",
        "unitNumber": 2,
        "title": "Unit 2: My House & Rooms",
        "vietnameseTitle": "Chủ đề: Ngôi nhà & Các phòng",
        "overview": "Học sinh miêu tả các phòng trong nhà, đồ nội thất và sử dụng giới từ chỉ vị trí.",
        "grammarFocus": "Cấu trúc Có: There is a + danh từ số ít / There are + danh từ số nhiều. Giới từ chỉ nơi chốn: in, on, behind, between, next to.",
        "sentencePatterns": [
          "There is a sofa in the living room.",
          "The cat is sleeping under the table."
        ],
        "tips": "Dùng There is với danh từ không đếm được hoặc danh từ đếm được số ít.",
        "vocabulary": [
          {
            "word": "Living room",
            "ipa": "/ˈlɪv.ɪŋ ˌruːm/",
            "type": "noun",
            "meaning": "Phòng khách",
            "example": "A cozy living room.",
            "exampleVi": "Một phòng khách ấm cúng.",
            "imageUrl": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Balcony",
            "ipa": "/ˈbæl.kə.ni/",
            "type": "noun",
            "meaning": "Ban công ngắm cảnh",
            "example": "Flowers blooming on the balcony.",
            "exampleVi": "Hoa nở rực rỡ ngoài ban công.",
            "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Furniture",
            "ipa": "/ˈfɜː.nɪ.tʃər/",
            "type": "noun",
            "meaning": "Đồ đạc nội thất",
            "example": "Modern wooden furniture.",
            "exampleVi": "Đồ nội thất gỗ hiện đại.",
            "imageUrl": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Nick is introducing his house: \"There are six rooms in my house. My favorite room is the attic because it has a big window looking out to the garden.\"",
          "question": "Which is Nick's favorite room?",
          "options": [
            {
              "id": "opt_g6u2_1",
              "label": "A",
              "text": "The attic (Căn gác xép)",
              "isCorrect": true
            },
            {
              "id": "opt_g6u2_2",
              "label": "B",
              "text": "The kitchen (Phòng bếp)",
              "isCorrect": false
            }
          ],
          "explanation": "Nick nói: \"My favorite room is the attic\"."
        },
        "speakingPractice": [
          {
            "phrase": "There is a big sofa in my living room.",
            "vi": "Có một chiếc ghế sofa lớn trong phòng khách của mình."
          }
        ],
        "readingPractice": {
          "passage": "Mi lives in a country house in Da Lat. Her house has four bedrooms, a dining room and a lush garden filled with roses and strawberries.",
          "question": "What kind of house does Mi live in?",
          "options": [
            {
              "id": "opt_rg6u2_1",
              "label": "A",
              "text": "A country house in Da Lat (Nhà vườn ở Đà Lạt)",
              "isCorrect": true
            },
            {
              "id": "opt_rg6u2_2",
              "label": "B",
              "text": "A skyscraper in London",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"Mi lives in a country house in Da Lat\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu đúng:",
          "scrambledWords": [
            "is",
            "a",
            "sofa",
            "There",
            "the",
            "room",
            "living",
            "in"
          ],
          "correctSentence": "There is a sofa in the living room",
          "explanation": "Cấu trúc tồn tại: There is a + N + giới từ nơi chốn."
        }
      },
      {
        "id": "g6_u3",
        "unitNumber": 3,
        "title": "Unit 3: My Friends & Personality",
        "vietnameseTitle": "Chủ đề: Bạn bè & Tính cách",
        "overview": "Học sinh miêu tả ngoại hình và tính cách bạn bè, sử dụng thì Hiện tại tiếp diễn.",
        "grammarFocus": "Thì Hiện tại tiếp diễn (Present Continuous): S + am/is/are + V-ing. Tính từ chỉ tính cách: kind, funny, clever, confident.",
        "sentencePatterns": [
          "She is reading a book right now.",
          "My friend Phong is very confident and sporty."
        ],
        "tips": "Dấu hiệu nhận biết thì HTTD: now, right now, at the moment, look!, listen!.",
        "vocabulary": [
          {
            "word": "Confident",
            "ipa": "/ˈkɒn.fɪ.dənt/",
            "type": "adj",
            "meaning": "Tự tin, hoạt bát",
            "example": "A confident speaker.",
            "exampleVi": "Một diễn giả đầy tự tin.",
            "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Hard-working",
            "ipa": "/ˌhɑːdˈwɜː.kɪŋ/",
            "type": "adj",
            "meaning": "Chăm chỉ, cần cù",
            "example": "He is a hard-working student.",
            "exampleVi": "Bạn ấy là học sinh rất chăm chỉ.",
            "imageUrl": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Caring",
            "ipa": "/ˈkeə.rɪŋ/",
            "type": "adj",
            "meaning": "Chu đáo, hay quan tâm",
            "example": "A caring and loyal friend.",
            "exampleVi": "Người bạn chu đáo và trung thành.",
            "imageUrl": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Listen to Mai describing her friend: \"Phuc is tall and has curly hair. He is very kind and always helps classmates with difficult homework.\"",
          "question": "What is Phuc's personality according to Mai?",
          "options": [
            {
              "id": "opt_g6u3_1",
              "label": "A",
              "text": "Kind and helpful (Tốt bụng và hay giúp đỡ)",
              "isCorrect": true
            },
            {
              "id": "opt_g6u3_2",
              "label": "B",
              "text": "Shy and quiet",
              "isCorrect": false
            }
          ],
          "explanation": "Mai nói: \"He is very kind and always helps classmates\"."
        },
        "speakingPractice": [
          {
            "phrase": "My best friend is clever and humorous.",
            "vi": "Bạn thân nhất của mình rất thông minh và hài hước."
          }
        ],
        "readingPractice": {
          "passage": "An is my deskmate. She has long black hair and big brown eyes. She is not only hard-working but also very creative. Right now, she is drawing a poster for the English club.",
          "question": "What is An doing right now?",
          "options": [
            {
              "id": "opt_rg6u3_1",
              "label": "A",
              "text": "Drawing a poster for the English club",
              "isCorrect": true
            },
            {
              "id": "opt_rg6u3_2",
              "label": "B",
              "text": "Playing football outdoors",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"she is drawing a poster for the English club\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu thì hiện tại tiếp diễn:",
          "scrambledWords": [
            "is",
            "She",
            "book",
            "reading",
            "now",
            "a"
          ],
          "correctSentence": "She is reading a book now",
          "explanation": "Cấu trúc HTTD: S + is + V-ing + O + now."
        }
      }
    ]
  },
  {
    "grade": "Lớp 7",
    "level": "secondary",
    "levelName": "THCS (Cấp 2)",
    "textbook": "Global Success (Lớp 7) - Bám Sát SGK Mới",
    "description": "Chương trình Tiếng Anh Lớp 7: Sở thích và đam mê, sống khỏe và dinh dưỡng, hoạt động tình nguyện cộng đồng, âm nhạc và nghệ thuật.",
    "color": "blue",
    "units": [
      {
        "id": "g7_u1",
        "unitNumber": 1,
        "title": "Unit 1: Hobbies & Creative Passions",
        "vietnameseTitle": "Chủ đề: Sở thích & Đam mê sáng tạo",
        "overview": "Học sinh học từ vựng về các sở thích bổ ích (làm gốm, chạm khắc vỏ trứng, làm vườn), và động từ chỉ sự yêu thích.",
        "grammarFocus": "Động từ chỉ sở thích: like / love / enjoy / prefer + V-ing.",
        "sentencePatterns": [
          "I enjoy arranging flowers on weekends.",
          "My brother loves making models."
        ],
        "tips": "Sau các động từ cảm xúc (love, like, enjoy, hate), luôn dùng danh động từ V-ing.",
        "vocabulary": [
          {
            "word": "Carving",
            "ipa": "/ˈkɑː.vɪŋ/",
            "type": "noun",
            "meaning": "Nghệ thuật chạm khắc",
            "example": "Carving eggshells requires immense patience.",
            "exampleVi": "Chạm khắc vỏ trứng đòi hỏi sự kiên nhẫn vô cùng.",
            "imageUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Gardening",
            "ipa": "/ˈɡɑː.dən.ɪŋ/",
            "type": "noun",
            "meaning": "Làm vườn, trồng hoa",
            "example": "Gardening helps my grandma relax.",
            "exampleVi": "Làm vườn giúp bà của mình thư giãn.",
            "imageUrl": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Pottery",
            "ipa": "/ˈpɒt.ər.i/",
            "type": "noun",
            "meaning": "Nghề làm đồ gốm sứ",
            "example": "Making pottery at Bat Trang village.",
            "exampleVi": "Làm đồ gốm ở làng Bát Tràng.",
            "imageUrl": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Elena is talking about her unusual hobby: \"I started carving eggshells two years ago. It teaches me to be extremely calm and patient.\"",
          "question": "What does carving eggshells teach Elena?",
          "options": [
            {
              "id": "opt_g7u1_1",
              "label": "A",
              "text": "To be calm and patient",
              "isCorrect": true
            },
            {
              "id": "opt_g7u1_2",
              "label": "B",
              "text": "To run faster",
              "isCorrect": false
            }
          ],
          "explanation": "Elena nói: \"It teaches me to be extremely calm and patient\"."
        },
        "speakingPractice": [
          {
            "phrase": "I love making pottery with my family.",
            "vi": "Mình rất thích cùng gia đình làm đồ gốm."
          }
        ],
        "readingPractice": {
          "passage": "Bird watching is a fascinating hobby. People wake up early in the morning, go to quiet forests, and observe rare birds through binoculars without disturbing nature.",
          "question": "What equipment do bird watchers use?",
          "options": [
            {
              "id": "opt_rg7u1_1",
              "label": "A",
              "text": "Binoculars (Ống nhòm)",
              "isCorrect": true
            },
            {
              "id": "opt_rg7u1_2",
              "label": "B",
              "text": "Fishing rods (Cần câu cá)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"observe rare birds through binoculars\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu đúng ngữ pháp:",
          "scrambledWords": [
            "enjoy",
            "flowers",
            "I",
            "on",
            "weekends",
            "arranging"
          ],
          "correctSentence": "I enjoy arranging flowers on weekends",
          "explanation": "Cấu trúc: S + enjoy + V-ing + O + trạng từ thời gian."
        }
      },
      {
        "id": "g7_u2",
        "unitNumber": 2,
        "title": "Unit 2: Healthy Living & Nutrition",
        "vietnameseTitle": "Chủ đề: Lối sống khỏe & Dinh dưỡng",
        "overview": "Học sinh học cách đưa ra lời khuyên sức khỏe, phòng ngừa các bệnh thường gặp (dị ứng, cháy nắng, cúm).",
        "grammarFocus": "Đưa ra lời khuyên với: Should / Shouldn't + V-nguyên thể. Câu đơn và liên từ: and, but, or, so.",
        "sentencePatterns": [
          "You should eat more fresh vegetables.",
          "You shouldn't spend too much time on screens."
        ],
        "tips": "Sau should/shouldn't luôn là động từ nguyên mẫu không có \"to\".",
        "vocabulary": [
          {
            "word": "Allergy",
            "ipa": "/ˈæl.ə.dʒi/",
            "type": "noun",
            "meaning": "Dị ứng thức ăn/thời tiết",
            "example": "A severe seafood allergy.",
            "exampleVi": "Chứng dị ứng hải sản nặng.",
            "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Sunburn",
            "ipa": "/ˈsʌn.bɜːn/",
            "type": "noun",
            "meaning": "Vết cháy nắng, rát da",
            "example": "Apply sunscreen to prevent sunburn.",
            "exampleVi": "Thoa kem chống nắng để ngừa cháy nắng.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Nutrient",
            "ipa": "/ˈnjuː.tri.ənt/",
            "type": "noun",
            "meaning": "Chất dinh dưỡng",
            "example": "Fruits are rich in vital nutrients.",
            "exampleVi": "Trái cây giàu các chất dinh dưỡng thiết yếu.",
            "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Doctor advice: \"To maintain strong eye health, teenagers should take breaks after 30 minutes of computer use and eat orange vegetables like carrots.\"",
          "question": "What vegetables should teenagers eat for better eyesight?",
          "options": [
            {
              "id": "opt_g7u2_1",
              "label": "A",
              "text": "Carrots and orange vegetables",
              "isCorrect": true
            },
            {
              "id": "opt_g7u2_2",
              "label": "B",
              "text": "Salty fried chips",
              "isCorrect": false
            }
          ],
          "explanation": "Bác sĩ khuyên: \"eat orange vegetables like carrots\"."
        },
        "speakingPractice": [
          {
            "phrase": "You should drink plenty of water every day.",
            "vi": "Bạn nên uống nhiều nước mỗi ngày."
          }
        ],
        "readingPractice": {
          "passage": "The Japanese have one of the highest life expectancies in the world. Their daily diet consists mainly of fresh fish, tofu, seaweed, green tea and plenty of vegetables with very little red meat.",
          "question": "What is a key component of the Japanese daily diet?",
          "options": [
            {
              "id": "opt_rg7u2_1",
              "label": "A",
              "text": "Fresh fish and green tea (Cá tươi và trà xanh)",
              "isCorrect": true
            },
            {
              "id": "opt_rg7u2_2",
              "label": "B",
              "text": "Sugary soda drinks (Nước ngọt có ga)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"consists mainly of fresh fish, tofu, seaweed, green tea\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu khuyên bảo:",
          "scrambledWords": [
            "more",
            "eat",
            "should",
            "vegetables",
            "You",
            "fresh"
          ],
          "correctSentence": "You should eat more fresh vegetables",
          "explanation": "Cấu trúc lời khuyên: S + should + V + O."
        }
      }
    ]
  },
  {
    "grade": "Lớp 8",
    "level": "secondary",
    "levelName": "THCS (Cấp 2)",
    "textbook": "Global Success (Lớp 8) - Bám Sát SGK Mới",
    "description": "Chương trình Tiếng Anh Lớp 8: Cuộc sống vùng quê thanh bình, áp lực mạng xã hội tuổi teen, nét đẹp văn hóa 54 dân tộc Việt Nam và phong tục tập quán.",
    "color": "blue",
    "units": [
      {
        "id": "g8_u1",
        "unitNumber": 1,
        "title": "Unit 1: Leisure Time & Pastimes",
        "vietnameseTitle": "Chủ đề: Thời gian rảnh rỗi & Giải trí lành mạnh",
        "overview": "Học sinh học cách thảo luận về các hoạt động giải trí tích cực (thể thao, làm thủ công, dạo phố), phân biệt giữa đam mê và lạm dụng thiết bị số.",
        "grammarFocus": "Động từ chỉ mức độ thích / ghét: adore, fancy, love, dislike, detest + V-ing / To-infinitive.",
        "sentencePatterns": [
          "I fancy doing DIY projects in my free time.",
          "He detests spending hours playing computer games."
        ],
        "tips": "Ghi nhớ sắc thái: Adore (cực mê) > Love (yêu) > Like (thích) > Dislike (không thích) > Detest (ghét cay đắng).",
        "vocabulary": [
          {
            "word": "Socialise",
            "ipa": "/ˈsəʊ.ʃəl.aɪz/",
            "type": "verb",
            "meaning": "Giao lưu, hòa nhập bạn bè",
            "example": "Teenagers love to socialise with peers.",
            "exampleVi": "Giới trẻ rất thích giao lưu cùng bạn bè đồng trang lứa.",
            "imageUrl": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Pastime",
            "ipa": "/ˈpɑːs.taɪm/",
            "type": "noun",
            "meaning": "Trò tiêu khiển, sở thích lúc rảnh",
            "example": "Reading history books is his favorite pastime.",
            "exampleVi": "Đọc sách lịch sử là thú tiêu khiển yêu thích của anh ấy.",
            "imageUrl": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Relaxation",
            "ipa": "/ˌriː.lækˈseɪ.ʃən/",
            "type": "noun",
            "meaning": "Sự thư giãn tinh thần",
            "example": "Listening to instrumental music promotes relaxation.",
            "exampleVi": "Nghe nhạc không lời thúc đẩy sự thư giãn.",
            "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Mark describes his weekend routine: \"Instead of staring at mobile screens all Saturday, my friends and I fancy building model aircrafts together.\"",
          "question": "What do Mark and his friends fancy doing on Saturdays?",
          "options": [
            {
              "id": "opt_g8u1_1",
              "label": "A",
              "text": "Building model aircrafts",
              "isCorrect": true
            },
            {
              "id": "opt_g8u1_2",
              "label": "B",
              "text": "Playing computer games",
              "isCorrect": false
            }
          ],
          "explanation": "Mark nói: \"my friends and I fancy building model aircrafts together\"."
        },
        "speakingPractice": [
          {
            "phrase": "I fancy making origami in my leisure time.",
            "vi": "Mình rất thích gấp giấy origami vào thời gian rảnh rỗi."
          }
        ],
        "readingPractice": {
          "passage": "DIY stands for \"Do It Yourself\". It has become immensely popular among youth because it saves money, enhances creativity and reduces electronic waste.",
          "question": "Why has DIY become popular among young people?",
          "options": [
            {
              "id": "opt_rg8u1_1",
              "label": "A",
              "text": "It saves money and enhances creativity",
              "isCorrect": true
            },
            {
              "id": "opt_rg8u1_2",
              "label": "B",
              "text": "It requires very expensive machinery",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"it saves money, enhances creativity\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu đúng cấu trúc:",
          "scrambledWords": [
            "fancy",
            "projects",
            "free",
            "my",
            "I",
            "in",
            "time",
            "doing",
            "DIY"
          ],
          "correctSentence": "I fancy doing DIY projects in my free time",
          "explanation": "Cấu trúc: S + fancy + V-ing + O + trạng ngữ."
        }
      },
      {
        "id": "g8_u2",
        "unitNumber": 2,
        "title": "Unit 2: Life in the Countryside",
        "vietnameseTitle": "Chủ đề: Cuộc sống vùng nông thôn",
        "overview": "Học sinh so sánh nhịp sống nông thôn và thành thị, sử dụng trạng từ so sánh hơn.",
        "grammarFocus": "So sánh hơn của trạng từ: S1 + V + more / less + adv + than + S2. Trạng từ bất quy tắc: well -> better, badly -> worse, fast -> faster.",
        "sentencePatterns": [
          "Life in the village moves more slowly than in the city.",
          "People welcome visitors more warmly here."
        ],
        "tips": "Trạng từ ngắn thêm đuôi -er (faster, harder), trạng từ dài thêm more (more slowly, more peacefully).",
        "vocabulary": [
          {
            "word": "Harvest",
            "ipa": "/ˈhɑː.vɪst/",
            "type": "noun/verb",
            "meaning": "Vụ mùa thu hoạch lúa",
            "example": "Farmers work tirelessly during the golden harvest.",
            "exampleVi": "Bà con nông dân làm việc không biết mệt trong vụ mùa vàng.",
            "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Vast",
            "ipa": "/vɑːst/",
            "type": "adj",
            "meaning": "Bao la, bát ngát",
            "example": "Vast golden rice fields under the blue sky.",
            "exampleVi": "Những cánh đồng lúa vàng bát ngát dưới bầu trời xanh.",
            "imageUrl": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Pastoral",
            "ipa": "/ˈpɑː.stər.əl/",
            "type": "adj",
            "meaning": "Đậm chất đồng quê, thanh bình",
            "example": "A peaceful pastoral landscape.",
            "exampleVi": "Phong cảnh đồng quê đậm chất thanh bình.",
            "imageUrl": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "During the summer holiday in the village, children help their parents herd buffaloes and load golden rice onto carts.",
          "question": "What do village children do during summer?",
          "options": [
            {
              "id": "opt_g8u2_1",
              "label": "A",
              "text": "Help herd buffaloes and load rice",
              "isCorrect": true
            },
            {
              "id": "opt_g8u2_2",
              "label": "B",
              "text": "Stay inside shopping centers",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"children help their parents herd buffaloes and load golden rice onto carts\"."
        },
        "speakingPractice": [
          {
            "phrase": "Life in the countryside is more peaceful than in the city.",
            "vi": "Cuộc sống ở nông thôn thanh bình hơn ở thành phố."
          }
        ],
        "readingPractice": {
          "passage": "Gobi nomads live in circular felt tents called gers. They move several times a year looking for fresh pastures for their horses, camels and sheep.",
          "question": "What are nomadic circular tents called?",
          "options": [
            {
              "id": "opt_rg8u2_1",
              "label": "A",
              "text": "Gers (Lều tròn du mục)",
              "isCorrect": true
            },
            {
              "id": "opt_rg8u2_2",
              "label": "B",
              "text": "Apartments (Căn hộ chung cư)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"circular felt tents called gers\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu so sánh hơn:",
          "scrambledWords": [
            "slowly",
            "moves",
            "more",
            "Life",
            "here",
            "than",
            "in",
            "the",
            "city"
          ],
          "correctSentence": "Life moves more slowly here than in the city",
          "explanation": "Cấu trúc so sánh hơn với trạng từ dài: S + V + more + adv + than + ..."
        }
      }
    ]
  },
  {
    "grade": "Lớp 9",
    "level": "secondary",
    "levelName": "THCS (Cấp 2)",
    "textbook": "Global Success (Lớp 9) - Bám Sát SGK Mới & Luyện Thi Vào 10",
    "description": "Chương trình Tiếng Anh Lớp 9: Làng nghề truyền thống, đời sống đô thị hiện đại, chăm sóc sức khỏe tinh thần tuổi mới lớn và luyện thi vào lớp 10 chuyên sâu.",
    "color": "blue",
    "units": [
      {
        "id": "g9_u1",
        "unitNumber": 1,
        "title": "Unit 1: Local Community & Craft Villages",
        "vietnameseTitle": "Chủ đề: Cộng đồng địa phương & Làng nghề truyền thống",
        "overview": "Học sinh khám phá các làng nghề thủ công nổi tiếng (gốm Bát Tràng, nón lá Chuông, lụa Vạn Phúc) và cụm động từ thường gặp.",
        "grammarFocus": "Cụm động từ (Phrasal Verbs): pass down, live on, deal with, close down, face up to, look forward to.",
        "sentencePatterns": [
          "Artisans pass down their unique craft techniques from generation to generation.",
          "The workshop had to close down."
        ],
        "tips": "Ghi nhớ cụm động từ theo ngữ cảnh thực tế thay vì học vẹt từng từ riêng lẻ.",
        "vocabulary": [
          {
            "word": "Craftsman",
            "ipa": "/ˈkrɑːfts.mən/",
            "type": "noun",
            "meaning": "Nghệ nhân, thợ thủ công lành nghề",
            "example": "A skilled craftsman carving jade.",
            "exampleVi": "Một nghệ nhân khéo léo đang chạm khắc ngọc bích.",
            "imageUrl": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Authentic",
            "ipa": "/ɔːˈθen.tɪk/",
            "type": "adj",
            "meaning": "Chính gốc, đích thực",
            "example": "Authentic Van Phuc silk.",
            "exampleVi": "Lụa Vạn Phúc chính gốc truyền thống.",
            "imageUrl": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Lacquerware",
            "ipa": "/ˈlæk.ə.weər/",
            "type": "noun",
            "meaning": "Đồ sơn mài mỹ nghệ",
            "example": "Exquisite Vietnamese lacquerware.",
            "exampleVi": "Đồ sơn mài Việt Nam tinh xảo.",
            "imageUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Bat Trang ceramic village has existed for over 500 years along the Red River. Skilled artisans carefully shape clay on potter wheels.",
          "question": "How long has Bat Trang ceramic village existed?",
          "options": [
            {
              "id": "opt_g9u1_1",
              "label": "A",
              "text": "Over 500 years (Hơn 500 năm)",
              "isCorrect": true
            },
            {
              "id": "opt_g9u1_2",
              "label": "B",
              "text": "Just 50 years",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"has existed for over 500 years\"."
        },
        "speakingPractice": [
          {
            "phrase": "Our village artisans pass down traditional pottery techniques.",
            "vi": "Các nghệ nhân làng tôi truyền lại kỹ thuật làm gốm cổ truyền qua nhiều thế hệ."
          }
        ],
        "readingPractice": {
          "passage": "Conical hat making in Chuong village is renowned across the nation. Artisans carefully select green palm leaves from Quang Binh and stitch them meticulously onto bamboo frames.",
          "question": "Where do artisans get the palm leaves for the conical hats?",
          "options": [
            {
              "id": "opt_rg9u1_1",
              "label": "A",
              "text": "From Quang Binh (Từ Quảng Bình)",
              "isCorrect": true
            },
            {
              "id": "opt_rg9u1_2",
              "label": "B",
              "text": "From abroad",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"select green palm leaves from Quang Binh\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu chứa cụm động từ pass down:",
          "scrambledWords": [
            "pass",
            "Artisans",
            "skills",
            "generation",
            "down",
            "every",
            "their"
          ],
          "correctSentence": "Artisans pass down their skills every generation",
          "explanation": "Cụm động từ pass down: truyền lại cho thế hệ sau."
        }
      },
      {
        "id": "g9_u2",
        "unitNumber": 2,
        "title": "Unit 2: City Life & Urbanisation",
        "vietnameseTitle": "Chủ đề: Đời sống đô thị & Đô thị hóa",
        "overview": "Học sinh phân tích những ưu điểm và thách thức của cuộc sống thành phố lớn (tắc đường, ô nhiễm, cơ hội việc làm).",
        "grammarFocus": "Tính từ so sánh kép: The + comp + S + V, the + comp + S + V (Càng... thì càng...). Cụm tính từ ghép (hyphenated adjectives).",
        "sentencePatterns": [
          "The more crowded the city becomes, the worse the traffic gets.",
          "Hanoi is a fascinating cosmopolitan city."
        ],
        "tips": "Cấu trúc so sánh kép The more... the more... thường xuyên xuất hiện trong đề thi vào 10.",
        "vocabulary": [
          {
            "word": "Metropolis",
            "ipa": "/məˈtrɒp.əl.ɪs/",
            "type": "noun",
            "meaning": "Đại đô thị sầm uất",
            "example": "Tokyo is a vibrant modern metropolis.",
            "exampleVi": "Tokyo là một đại đô thị hiện đại đầy sôi động.",
            "imageUrl": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Congested",
            "ipa": "/kənˈdʒes.tɪd/",
            "type": "adj",
            "meaning": "Tắc nghẽn, đông đúc",
            "example": "Congested traffic during rush hours.",
            "exampleVi": "Giao thông tắc nghẽn trong giờ cao điểm.",
            "imageUrl": "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Infrastructure",
            "ipa": "/ˈɪn.frəˌstrʌk.tʃər/",
            "type": "noun",
            "meaning": "Cơ sở hạ tầng đô thị",
            "example": "Investing in high-speed rail infrastructure.",
            "exampleVi": "Đầu tư vào hạ tầng đường sắt tốc độ cao.",
            "imageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "City planners in Singapore have invested heavily in green rooftop gardens and efficient metro lines to curb air pollution and enhance urban living quality.",
          "question": "What have city planners invested in to curb pollution?",
          "options": [
            {
              "id": "opt_g9u2_1",
              "label": "A",
              "text": "Green rooftop gardens and metro lines",
              "isCorrect": true
            },
            {
              "id": "opt_g9u2_2",
              "label": "B",
              "text": "More coal power plants",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"invested heavily in green rooftop gardens and efficient metro lines\"."
        },
        "speakingPractice": [
          {
            "phrase": "The more modern the city is, the more convenient our life becomes.",
            "vi": "Thành phố càng hiện đại, cuộc sống của chúng ta càng tiện nghi."
          }
        ],
        "readingPractice": {
          "passage": "Rapid urbanisation brings significant economic growth, but it also creates major headaches including sky-high housing costs, waste management issues and heavy rush-hour traffic.",
          "question": "What is one negative consequence of rapid urbanisation mentioned?",
          "options": [
            {
              "id": "opt_rg9u2_1",
              "label": "A",
              "text": "Sky-high housing costs (Giá nhà ở tăng chóng mặt)",
              "isCorrect": true
            },
            {
              "id": "opt_rg9u2_2",
              "label": "B",
              "text": "Decreasing population",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"sky-high housing costs, waste management issues\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu so sánh kép:",
          "scrambledWords": [
            "The",
            "we",
            "earlier",
            "leave,",
            "faster",
            "we",
            "arrive",
            "the"
          ],
          "correctSentence": "The earlier we leave, the faster we arrive",
          "explanation": "Cấu trúc so sánh kép: The + comparative..., the + comparative..."
        }
      }
    ]
  },
  {
    "grade": "Lớp 10",
    "level": "highschool",
    "levelName": "THPT (Cấp 3)",
    "textbook": "Global Success (Lớp 10) - Bám Sát Chương Trình GDPT Mới",
    "description": "Chương trình Tiếng Anh Lớp 10: Trách nhiệm gia đình, con người và môi trường sinh thái, âm nhạc toàn cầu, hoạt động vì cộng đồng và các phát minh khoa học.",
    "color": "indigo",
    "units": [
      {
        "id": "g10_u1",
        "unitNumber": 1,
        "title": "Unit 1: Family Life & Responsibilities",
        "vietnameseTitle": "Chủ đề: Cuộc sống gia đình & Trách nhiệm sẻ chia",
        "overview": "Học sinh thảo luận về việc chia sẻ việc nhà (household chores), vai trò trụ cột gia đình (breadwinner) và người nội trợ (homemaker).",
        "grammarFocus": "Phân biệt Thì Hiện tại đơn (thói quen, chân lý) và Hiện tại tiếp diễn (hành động đang diễn ra hoặc phàn nàn với always).",
        "sentencePatterns": [
          "My mother usually prepares dinner, but today my father is cooking.",
          "He is always leaving his dirty socks everywhere!"
        ],
        "tips": "Các động từ chỉ trạng thái (stative verbs: like, know, understand, believe) không dùng ở thì tiếp diễn.",
        "vocabulary": [
          {
            "word": "Breadwinner",
            "ipa": "/ˈbredˌwɪn.ər/",
            "type": "noun",
            "meaning": "Người trụ cột kinh tế gia đình",
            "example": "Both parents are breadwinners.",
            "exampleVi": "Cả bố và mẹ đều là trụ cột kinh tế trong nhà.",
            "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Homemaker",
            "ipa": "/ˈhəʊmˌmeɪ.kər/",
            "type": "noun",
            "meaning": "Người tề gia nội trợ",
            "example": "A dedicated homemaker managing chores.",
            "exampleVi": "Người nội trợ tận tâm quán xuyến việc nhà.",
            "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Chore",
            "ipa": "/tʃɔːr/",
            "type": "noun",
            "meaning": "Việc vặt gia đình (rửa bát, lau dọn)",
            "example": "Sharing household chores evenly.",
            "exampleVi": "Phân chia việc nhà đồng đều.",
            "imageUrl": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Gratitude",
            "ipa": "/ˈɡræt.ɪ.tʃuːd/",
            "type": "noun",
            "meaning": "Lòng biết ơn sâu sắc",
            "example": "Expressing heartfelt gratitude to parents.",
            "exampleVi": "Bày tỏ lòng biết ơn chân thành tới cha mẹ.",
            "imageUrl": "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Psychologist Dr. Adams notes that when teenagers actively share household chores like doing dishes and taking out rubbish, they develop stronger self-discipline and bond better with their parents.",
          "question": "According to Dr. Adams, what benefit do teens get from doing chores?",
          "options": [
            {
              "id": "opt_g10u1_1",
              "label": "A",
              "text": "Develop stronger self-discipline",
              "isCorrect": true
            },
            {
              "id": "opt_g10u1_2",
              "label": "B",
              "text": "Earn large sums of cash",
              "isCorrect": false
            }
          ],
          "explanation": "Bác sĩ Adams nói: \"they develop stronger self-discipline\"."
        },
        "speakingPractice": [
          {
            "phrase": "Sharing household chores creates positive family bonding.",
            "vi": "Chia sẻ việc nhà tạo nên sự gắn kết gia đình tích cực."
          }
        ],
        "readingPractice": {
          "passage": "In modern families, gender roles have evolved significantly. Fathers are no longer sole financial providers; many actively assist with cooking, cleaning and nurturing infants.",
          "question": "How have modern fathers' roles changed?",
          "options": [
            {
              "id": "opt_rg10u1_1",
              "label": "A",
              "text": "They actively assist with cooking and nurturing",
              "isCorrect": true
            },
            {
              "id": "opt_rg10u1_2",
              "label": "B",
              "text": "They do not work anymore",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"many actively assist with cooking, cleaning and nurturing infants\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu diễn tả trách nhiệm gia đình:",
          "scrambledWords": [
            "household",
            "We",
            "all",
            "together",
            "share",
            "chores"
          ],
          "correctSentence": "We all share household chores together",
          "explanation": "Cấu trúc S + V + O + trạng ngữ."
        }
      },
      {
        "id": "g10_u2",
        "unitNumber": 2,
        "title": "Unit 2: Humans and the Environment",
        "vietnameseTitle": "Chủ đề: Con người và Môi trường",
        "overview": "Học sinh học cách giảm thiểu dấu chân carbon (carbon footprint), lối sống xanh và bảo vệ các nguồn tài nguyên thiên nhiên.",
        "grammarFocus": "Tương lai đơn (Will + V) dự đoán không căn cứ vs Cấu trúc Be going to + V (kế hoạch định sẵn hoặc có bằng chứng trước mắt). Thể bị động tương lai.",
        "sentencePatterns": [
          "Look at those dark clouds; it is going to rain.",
          "Single-use plastics will be banned in our school canteen."
        ],
        "tips": "Phân biệt will (quyết định tức thời) và be going to (đã có dự định từ trước).",
        "vocabulary": [
          {
            "word": "Carbon footprint",
            "ipa": "/ˌkɑː.bən ˈfʊt.prɪnt/",
            "type": "noun",
            "meaning": "Dấu chân carbon (lượng phát thải CO2)",
            "example": "Walking to school reduces your carbon footprint.",
            "exampleVi": "Đi bộ đến trường giúp giảm dấu chân carbon.",
            "imageUrl": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Eco-friendly",
            "ipa": "/ˌiː.kəʊˈfrend.li/",
            "type": "adj",
            "meaning": "Thân thiện với môi trường",
            "example": "Using eco-friendly bamboo straws.",
            "exampleVi": "Sử dụng ống hút tre thân thiện với môi trường.",
            "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Renewable",
            "ipa": "/rɪˈnjuː.ə.bəl/",
            "type": "adj",
            "meaning": "Tái tạo được (năng lượng mặt trời, gió)",
            "example": "Harnessing renewable solar energy.",
            "exampleVi": "Khai thác năng lượng mặt trời tái tạo.",
            "imageUrl": "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Environmental speaker: \"Every year, millions of plastic bags enter the ocean. By switching to reusable cloth bags, each household can save hundreds of marine animals.\"",
          "question": "What simple action can households take to save marine life?",
          "options": [
            {
              "id": "opt_g10u2_1",
              "label": "A",
              "text": "Switch to reusable cloth bags",
              "isCorrect": true
            },
            {
              "id": "opt_g10u2_2",
              "label": "B",
              "text": "Use more plastic bottles",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"By switching to reusable cloth bags\"."
        },
        "speakingPractice": [
          {
            "phrase": "We are going to plant one hundred trees this weekend.",
            "vi": "Chúng mình dự định sẽ trồng một trăm cây xanh vào cuối tuần này."
          }
        ],
        "readingPractice": {
          "passage": "Solar and wind energy have become cheaper than fossil fuels in many nations. Transitioning to clean renewables helps slash greenhouse gas emissions and slows global warming.",
          "question": "What is an advantage of solar and wind energy mentioned?",
          "options": [
            {
              "id": "opt_rg10u2_1",
              "label": "A",
              "text": "They slash greenhouse emissions and are cheaper",
              "isCorrect": true
            },
            {
              "id": "opt_rg10u2_2",
              "label": "B",
              "text": "They cause severe acid rain",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"cheaper than fossil fuels... helps slash greenhouse gas emissions\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu đúng ngữ pháp:",
          "scrambledWords": [
            "reduces",
            "walking",
            "our",
            "footprint",
            "Daily",
            "carbon"
          ],
          "correctSentence": "Daily walking reduces our carbon footprint",
          "explanation": "Cấu trúc S + V + O: Daily walking reduces our carbon footprint."
        }
      }
    ]
  },
  {
    "grade": "Lớp 11",
    "level": "highschool",
    "levelName": "THPT (Cấp 3)",
    "textbook": "Global Success (Lớp 11) - Bám Sát Chương Trình GDPT Mới",
    "description": "Chương trình Tiếng Anh Lớp 11: Sống thọ và khỏe mạnh, khoảng cách thế hệ trong gia đình, đô thị thông minh tương lai, bảo tồn di sản và biến đổi khí hậu.",
    "color": "indigo",
    "units": [
      {
        "id": "g11_u1",
        "unitNumber": 1,
        "title": "Unit 1: A Long and Healthy Life",
        "vietnameseTitle": "Chủ đề: Sống thọ và khỏe mạnh toàn diện",
        "overview": "Tìm hiểu các bí quyết sống thọ, rèn luyện hệ miễn dịch, chế độ dinh dưỡng khoa học và kháng thể chống lại vi khuẩn.",
        "grammarFocus": "Phân biệt Quá khứ đơn (Past Simple - mốc thời gian xác định trong quá khứ) và Hiện tại hoàn thành (Present Perfect - kéo dài tới hiện tại hoặc không nêu rõ thời gian).",
        "sentencePatterns": [
          "She has practiced yoga for over ten years.",
          "Scientists discovered penicillin in 1928."
        ],
        "tips": "Dấu hiệu Hiện tại hoàn thành: since, for, already, yet, ever, never, so far.",
        "vocabulary": [
          {
            "word": "Longevity",
            "ipa": "/lɒnˈdʒev.ə.ti/",
            "type": "noun",
            "meaning": "Tuổi thọ, sự sống thọ",
            "example": "Dietary habits contribute to Japanese longevity.",
            "exampleVi": "Thói quen ăn uống đóng góp vào tuổi thọ của người Nhật.",
            "imageUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Immunity",
            "ipa": "/ɪˈmjuː.nə.ti/",
            "type": "noun",
            "meaning": "Khả năng miễn dịch, đề kháng",
            "example": "Regular exercise boosts natural immunity.",
            "exampleVi": "Tập thể dục đều đặn tăng cường khả năng miễn dịch tự nhiên.",
            "imageUrl": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Vitality",
            "ipa": "/vaɪˈtæl.ə.ti/",
            "type": "noun",
            "meaning": "Sức sống mãnh liệt, năng lượng tràn đầy",
            "example": "Full of youthful energy and vitality.",
            "exampleVi": "Tràn đầy năng lượng tuổi trẻ và sức sống mãnh liệt.",
            "imageUrl": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Medical researcher: \"Studies in the Blue Zones have shown that regular low-intensity physical movement, such as walking and gardening, is far more beneficial for cardiovascular longevity than sporadic intense workouts.\"",
          "question": "What type of exercise is most beneficial according to the Blue Zones study?",
          "options": [
            {
              "id": "opt_g11u1_1",
              "label": "A",
              "text": "Regular low-intensity movement like walking",
              "isCorrect": true
            },
            {
              "id": "opt_g11u1_2",
              "label": "B",
              "text": "Sporadic intense lifting once a month",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"regular low-intensity physical movement, such as walking and gardening, is far more beneficial\"."
        },
        "speakingPractice": [
          {
            "phrase": "Regular physical exercise boosts natural immunity and mental vitality.",
            "vi": "Tập luyện thể thao thường xuyên tăng cường hệ miễn dịch và sức sống tinh thần."
          }
        ],
        "readingPractice": {
          "passage": "In Okinawa, Japan, people practice \"Hara Hachi Bu\", an ancient Confucian philosophy that instructs individuals to stop eating when their stomachs are eighty percent full, preventing obesity and metabolic decline.",
          "question": "What does the philosophy \"Hara Hachi Bu\" advise people to do?",
          "options": [
            {
              "id": "opt_rg11u1_1",
              "label": "A",
              "text": "Stop eating when 80% full (Dừng ăn khi no 80%)",
              "isCorrect": true
            },
            {
              "id": "opt_rg11u1_2",
              "label": "B",
              "text": "Skip dinner completely (Bỏ hẳn bữa tối)",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"stop eating when their stomachs are eighty percent full\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu thì hiện tại hoàn thành:",
          "scrambledWords": [
            "practiced",
            "has",
            "She",
            "for",
            "yoga",
            "ten",
            "years"
          ],
          "correctSentence": "She has practiced yoga for ten years",
          "explanation": "Cấu trúc Hiện tại hoàn thành: S + has + V3/ed + for + khoảng thời gian."
        }
      },
      {
        "id": "g11_u2",
        "unitNumber": 2,
        "title": "Unit 2: The Generation Gap",
        "vietnameseTitle": "Chủ đề: Khoảng cách thế hệ & Thấu hiểu gia đình",
        "overview": "Học sinh phân tích những khác biệt về quan điểm, lối sống và sở thích giữa các thế hệ (ông bà, cha mẹ, con cái).",
        "grammarFocus": "Động từ khuyết thiếu (Modal Verbs): should, ought to, must, have to, mustn't, don't have to.",
        "sentencePatterns": [
          "You ought to listen to your parents' advice.",
          "Teenagers don't have to follow traditional career paths."
        ],
        "tips": "Must diễn tả nghĩa vụ mang tính cá nhân, Have to diễn tả nghĩa vụ bắt buộc do ngoại cảnh hoặc luật pháp.",
        "vocabulary": [
          {
            "word": "Conflict",
            "ipa": "/ˈkɒn.flɪkt/",
            "type": "noun",
            "meaning": "Xung đột, bất đồng quan điểm",
            "example": "Resolving family conflicts through dialogue.",
            "exampleVi": "Giải quyết xung đột gia đình thông qua đối thoại.",
            "imageUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Perspective",
            "ipa": "/pəˈspek.tɪv/",
            "type": "noun",
            "meaning": "Góc nhìn, quan điểm cá nhân",
            "example": "Seeing issues from a generational perspective.",
            "exampleVi": "Nhìn nhận vấn đề dưới góc nhìn các thế hệ.",
            "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Curfew",
            "ipa": "/ˈkɜː.fjuː/",
            "type": "noun",
            "meaning": "Giờ giới nghiêm, giờ phải về nhà",
            "example": "My parents set a strict 10 p.m. curfew.",
            "exampleVi": "Bố mẹ mình đặt giờ giới nghiêm nghiêm ngặt lúc 10 giờ tối.",
            "imageUrl": "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Family counselor: \"The key to bridging the generation gap is open-minded communication. Parents should listen without judging, and teenagers must respect their parents' lived experiences.\"",
          "question": "What is the key to bridging the generation gap?",
          "options": [
            {
              "id": "opt_g11u2_1",
              "label": "A",
              "text": "Open-minded communication (Giao tiếp cởi mở)",
              "isCorrect": true
            },
            {
              "id": "opt_g11u2_2",
              "label": "B",
              "text": "Setting harsher punishments",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"The key to bridging the generation gap is open-minded communication\"."
        },
        "speakingPractice": [
          {
            "phrase": "Open dialogue helps bridge the generation gap in our family.",
            "vi": "Đối thoại cởi mở giúp thu hẹp khoảng cách thế hệ trong gia đình chúng tôi."
          }
        ],
        "readingPractice": {
          "passage": "Generation Z, born between 1997 and 2012, grew up in the digital era. They place immense value on workplace flexibility, social causes and mental wellbeing, which sometimes puzzles older generations.",
          "question": "What does Generation Z value significantly?",
          "options": [
            {
              "id": "opt_rg11u2_1",
              "label": "A",
              "text": "Workplace flexibility and mental wellbeing",
              "isCorrect": true
            },
            {
              "id": "opt_rg11u2_2",
              "label": "B",
              "text": "Rigid 9-to-5 factory rules",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"place immense value on workplace flexibility, social causes and mental wellbeing\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu chứa động từ khuyết thiếu:",
          "scrambledWords": [
            "listen",
            "ought",
            "to",
            "parents",
            "advice",
            "We",
            "our"
          ],
          "correctSentence": "We ought to listen to our parents advice",
          "explanation": "Cấu trúc khuyên bảo: S + ought to + V-nguyên thể."
        }
      }
    ]
  },
  {
    "grade": "Lớp 12",
    "level": "highschool",
    "levelName": "THPT (Cấp 3)",
    "textbook": "Global Success (Lớp 12) - Chuẩn Ôn Thi Tốt Nghiệp THPT Quốc Gia",
    "description": "Chương trình Tiếng Anh Lớp 12: Những câu chuyện cuộc đời vĩ đại, thế giới đa văn hóa, chuyển đổi xanh, đô thị hóa, tương lai nghề nghiệp và trí tuệ nhân tạo.",
    "color": "indigo",
    "units": [
      {
        "id": "g12_u1",
        "unitNumber": 1,
        "title": "Unit 1: Life Stories We Admire",
        "vietnameseTitle": "Chủ đề: Những câu chuyện cuộc đời truyền cảm hứng",
        "overview": "Học sinh phân tích tiểu sử các danh nhân xuất chúng (Chủ tịch Hồ Chí Minh, Marie Curie, Nelson Mandela, Steve Jobs) và cấu trúc phân từ hoàn thành.",
        "grammarFocus": "Phân từ hoàn thành (Perfect Participles): Having + V3/ed để rút gọn mệnh đề trạng ngữ chỉ hành động xảy ra trước một hành động khác trong quá khứ.",
        "sentencePatterns": [
          "Having finished his university studies, he founded a tech company.",
          "Having dedicated his whole life to peace, he was awarded the Nobel Prize."
        ],
        "tips": "Chủ ngữ của mệnh đề phân từ rút gọn phải trùng với chủ ngữ của mệnh đề chính.",
        "vocabulary": [
          {
            "word": "Perseverance",
            "ipa": "/ˌpɜː.sɪˈvɪə.rəns/",
            "type": "noun",
            "meaning": "Sự kiên trì, bền chí vượt khó",
            "example": "Unwavering perseverance led to her success.",
            "exampleVi": "Sự kiên trì không lay chuyển đã dẫn đến thành công của cô ấy.",
            "imageUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Distinguished",
            "ipa": "/dɪˈstɪŋ.ɡwɪʃt/",
            "type": "adj",
            "meaning": "Xuất chúng, lỗi lạc",
            "example": "A distinguished diplomat and scholar.",
            "exampleVi": "Một nhà ngoại giao và học giả xuất chúng.",
            "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Innovation",
            "ipa": "/ˌɪn.əˈveɪ.ʃən/",
            "type": "noun",
            "meaning": "Sự đổi mới sáng tạo đột phá",
            "example": "Technological innovations transform healthcare.",
            "exampleVi": "Đổi mới công nghệ biến đổi ngành y tế.",
            "imageUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Professor Marie Curie remains the first woman to win a Nobel Prize and the only person to win Nobel Prizes in two distinct scientific fields: Physics and Chemistry.",
          "question": "In which two fields did Marie Curie win her Nobel Prizes?",
          "options": [
            {
              "id": "opt_g12u1_1",
              "label": "A",
              "text": "Physics and Chemistry (Vật lý và Hóa học)",
              "isCorrect": true
            },
            {
              "id": "opt_g12u1_2",
              "label": "B",
              "text": "Literature and Peace",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"in two distinct scientific fields: Physics and Chemistry\"."
        },
        "speakingPractice": [
          {
            "phrase": "True greatness is defined not by accolades, but by the positive impact left on humanity.",
            "vi": "Sự vĩ đại đích thực không được định nghĩa bằng các giải thưởng, mà bằng ảnh hưởng tích cực để lại cho nhân loại."
          }
        ],
        "readingPractice": {
          "passage": "Thomas Edison endured thousands of failed trials before perfecting the incandescent electric lamp. When questioned about his persistent failures, he famously remarked that he had simply discovered ten thousand ways that did not work.",
          "question": "What did Edison consider his failed experiments?",
          "options": [
            {
              "id": "opt_rg12u1_1",
              "label": "A",
              "text": "Ways that did not work towards the solution",
              "isCorrect": true
            },
            {
              "id": "opt_rg12u1_2",
              "label": "B",
              "text": "Total waste of time and energy",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"he had simply discovered ten thousand ways that did not work\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu có mệnh đề phân từ hoàn thành:",
          "scrambledWords": [
            "Having",
            "his",
            "degrees,",
            "he",
            "founded",
            "the",
            "finished",
            "startup"
          ],
          "correctSentence": "Having finished his degrees, he founded the startup",
          "explanation": "Cấu trúc rút gọn: Having + V3/ed, S + V2/ed."
        }
      },
      {
        "id": "g12_u2",
        "unitNumber": 2,
        "title": "Unit 2: A Multicultural World & Diversity",
        "vietnameseTitle": "Chủ đề: Thế giới đa văn hóa & Hội nhập",
        "overview": "Học sinh tìm hiểu sự giao thoa văn hóa, mạo từ (A, An, The, Không mạo từ) và các lễ hội đa sắc tộc.",
        "grammarFocus": "Quy tắc dùng mạo từ A / An (danh từ số ít chưa xác định), The (danh từ đã xác định, duy nhất) và Zero article (danh từ chung chung, môn học, đất nước số ít).",
        "sentencePatterns": [
          "The festival promotes mutual respect and cultural diversity.",
          "English is spoken all over the world."
        ],
        "tips": "Dùng \"The\" trước tên các quần đảo, dãy núi, đại dương (the Himalayas, the Pacific Ocean).",
        "vocabulary": [
          {
            "word": "Multicultural",
            "ipa": "/ˌmʌl.tiˈkʌl.tʃər.əl/",
            "type": "adj",
            "meaning": "Đa văn hóa",
            "example": "A vibrant multicultural society.",
            "exampleVi": "Một xã hội đa văn hóa tràn đầy sức sống.",
            "imageUrl": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Assimilation",
            "ipa": "/əˌsɪm.ɪˈleɪ.ʃən/",
            "type": "noun",
            "meaning": "Sự đồng hóa văn hóa",
            "example": "Cultural assimilation vs preservation.",
            "exampleVi": "Sự đồng hóa văn hóa so với bảo tồn bản sắc.",
            "imageUrl": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Identity",
            "ipa": "/aɪˈden.tə.ti/",
            "type": "noun",
            "meaning": "Bản sắc, nét đặc trưng",
            "example": "Preserving national cultural identity.",
            "exampleVi": "Bảo tồn bản sắc văn hóa dân tộc.",
            "imageUrl": "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "At the international food and culture festival, visitors experience traditional Japanese tea ceremonies alongside energetic Brazilian samba dances.",
          "question": "What do visitors experience at the festival?",
          "options": [
            {
              "id": "opt_g12u2_1",
              "label": "A",
              "text": "Japanese tea ceremonies and Brazilian samba",
              "isCorrect": true
            },
            {
              "id": "opt_g12u2_2",
              "label": "B",
              "text": "Only modern rock music",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"traditional Japanese tea ceremonies alongside energetic Brazilian samba dances\"."
        },
        "speakingPractice": [
          {
            "phrase": "Preserving our national cultural identity is vital in this globalised era.",
            "vi": "Gìn giữ bản sắc văn hóa dân tộc là tối quan trọng trong kỷ nguyên toàn cầu hóa."
          }
        ],
        "readingPractice": {
          "passage": "Cultural diversity fosters innovation by bringing multiple viewpoints to complex problem-solving. Global corporations that actively embrace multicultural workforces consistently outperform competitors.",
          "question": "How does cultural diversity foster innovation?",
          "options": [
            {
              "id": "opt_rg12u2_1",
              "label": "A",
              "text": "By bringing multiple viewpoints to problem-solving",
              "isCorrect": true
            },
            {
              "id": "opt_rg12u2_2",
              "label": "B",
              "text": "By eliminating all local customs",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"bringing multiple viewpoints to complex problem-solving\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp câu về bản sắc văn hóa:",
          "scrambledWords": [
            "We",
            "must",
            "our",
            "national",
            "cultural",
            "preserve",
            "identity"
          ],
          "correctSentence": "We must preserve our national cultural identity",
          "explanation": "Cấu trúc S + must + V + O."
        }
      },
      {
        "id": "g12_u6",
        "unitNumber": 6,
        "title": "Unit 6: Artificial Intelligence & Future Careers",
        "vietnameseTitle": "Chủ đề: Trí tuệ nhân tạo (AI) & Tương lai việc làm",
        "overview": "Học sinh khám phá các công nghệ AI mang tính đột phá (Machine Learning, Large Language Models) và các thách thức về đạo đức công nghệ.",
        "grammarFocus": "Thể bị động nâng cao (Passive Voice with reporting verbs): It is believed that... / S + is said to have + V3/ed.",
        "sentencePatterns": [
          "AI is expected to transform medical diagnostics and education.",
          "It is believed that automated systems will enhance human productivity."
        ],
        "tips": "Cấu trúc câu tường thuật bị động rất thường gặp trong bài Đọc hiểu và bài Đọc điền từ thi tốt nghiệp THPT.",
        "vocabulary": [
          {
            "word": "Algorithm",
            "ipa": "/ˈæl.ɡə.rɪ.ðəm/",
            "type": "noun",
            "meaning": "Thuật toán máy tính",
            "example": "Complex machine learning algorithms.",
            "exampleVi": "Các thuật toán học máy phức tạp.",
            "imageUrl": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Autonomous",
            "ipa": "/ɔːˈtɒn.ə.məs/",
            "type": "adj",
            "meaning": "Tự hành, tự động hóa hoàn toàn",
            "example": "Autonomous self-driving electric vehicles.",
            "exampleVi": "Xe điện tự hành không người lái.",
            "imageUrl": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&auto=format&fit=crop&q=80"
          },
          {
            "word": "Automation",
            "ipa": "/ˌɔː.təˈmeɪ.ʃən/",
            "type": "noun",
            "meaning": "Sự tự động hóa quy trình",
            "example": "Robotic automation streamlines logistics.",
            "exampleVi": "Tự động hóa bằng robot tối ưu hóa hậu cần.",
            "imageUrl": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&auto=format&fit=crop&q=80"
          }
        ],
        "listeningPractice": {
          "script": "Tech conference keynote: \"Artificial Intelligence will not replace humans wholesale; rather, professionals who effectively leverage AI tools will replace those who do not.\"",
          "question": "According to the keynote, who will replace professionals who do not use AI?",
          "options": [
            {
              "id": "opt_g12u6_1",
              "label": "A",
              "text": "Professionals who effectively leverage AI tools",
              "isCorrect": true
            },
            {
              "id": "opt_g12u6_2",
              "label": "B",
              "text": "Only robots without human oversight",
              "isCorrect": false
            }
          ],
          "explanation": "Bài nghe: \"professionals who effectively leverage AI tools will replace those who do not\"."
        },
        "speakingPractice": [
          {
            "phrase": "Mastering AI tools will be crucial for high school graduates entering future industries.",
            "vi": "Thành thạo các công cụ AI sẽ là điều tối quan trọng đối với học sinh tốt nghiệp THPT khi bước vào các ngành nghề tương lai."
          }
        ],
        "readingPractice": {
          "passage": "Generative AI models are capable of drafting legal summaries, translating dozens of languages simultaneously and synthesizing biological proteins. However, critical thinking, human empathy and ethical decision-making remain irreplacable human qualities.",
          "question": "What qualities remain irreplacable by AI according to the text?",
          "options": [
            {
              "id": "opt_rg12u6_1",
              "label": "A",
              "text": "Critical thinking, empathy and ethical decision-making",
              "isCorrect": true
            },
            {
              "id": "opt_rg12u6_2",
              "label": "B",
              "text": "Typing and basic calculation only",
              "isCorrect": false
            }
          ],
          "explanation": "Đoạn văn viết: \"critical thinking, human empathy and ethical decision-making remain irreplacable\"."
        },
        "writingPractice": {
          "prompt": "Sắp xếp thành câu bị động nâng cao:",
          "scrambledWords": [
            "is",
            "transform",
            "AI",
            "to",
            "expected",
            "education",
            "modern"
          ],
          "correctSentence": "AI is expected to transform modern education",
          "explanation": "Cấu trúc bị động với động từ tường thuật: S + is expected to + V."
        }
      }
    ]
  }
];
