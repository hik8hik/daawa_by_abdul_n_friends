import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create questions with answers using transaction
  await prisma.$transaction([
    prisma.question.create({
      data: {
        question: "Do Muslims and Christians worship the same God?",
        answers: {
          create: [
            {
              content: `While both faiths are monotheistic, there are fundamental differences:`,
            },
            {
              content: `1. Trinity vs Absolute Oneness: Christians worship a Triune God (Father, Son, Holy Spirit) while Islam strictly rejects Trinity (Quran 5:73):cite[2]`,
            },
            {
              content: `2. God's Fatherhood: Christianity emphasizes God as Father (Matthew 6:9), which Islam considers blasphemous (Quran 19:88-92):cite[7]`,
            },
            {
              content: `3. Nature of Love: Christianity teaches God is love (1 John 4:8), while Islamic concept focuses more on God's transcendence and justice:cite[7]`,
            },
          ],
        },
      },
    }),
    prisma.question.create({
      data: {
        question: "Why don't Muslims accept Jesus as divine?",
        answers: {
          create: [
            {
              content: `Islamic theology differs fundamentally:`,
            },
            {
              content: `1. Quranic View: Jesus (Isa) is respected as prophet but explicitly denied divinity (Quran 5:17,75):cite[5]`,
            },
            {
              content: `2. Crucifixion Denial: Islam teaches Jesus wasn't crucified (Quran 4:157), contrary to Christian salvation narrative:cite[8]`,
            },
            {
              content: `3. Sonship Rejection: "God begets not" is a key Quranic principle (Surah Al-Ikhlas):cite[2]`,
            },
            {
              content: `..................................................................`,
            },
            {
              content: `Christian Response:`,
            },
            {
              content: `- John 1:1-14 establishes Christ's divine nature`,
            },
            {
              content: `- Jesus accepted worship (Matthew 14:33, John 20:28)`,
            },
            {
              content: `- Early Church councils affirmed divinity against alternative views:cite[2]:cite[8]`,
            },
          ],
        },
      },
    }),
    prisma.question.create({
      data: {
        question: "How do Islamic and Christian concepts of salvation differ?",
        answers: {
          create: [
            {
              content: `Key Contrasts:`,
            },
            {
              content: `1. Grace vs Works: Christianity teaches salvation by grace through faith (Ephesians 2:8-9), while Islam requires works (Five Pillars):cite[5]`,
            },
            {
              content: `2. Assurance: Christians have salvation assurance (1 John 5:13), Muslims face uncertainty until Judgment Day:cite[5]`,
            },
            {
              content: `3. Atonement: Christianity centers on Christ's sacrifice, Islam rejects substitutionary atonement:cite[8]`,
            },
          ],
        },
      },
    }),
    prisma.question.create({
      data: {
        question: "Has the Bible been corrupted as Muslims claim?",
        answers: {
          create: [
            {
              content: `Addressing Common Objections`,
            },
            {
              content: `1. Manuscript Evidence: Over 5,800 Greek NT manuscripts predate Islam, showing textual stability:cite[6]`,
            },
            {
              content: `2. Quranic Affirmation: Early Quran acknowledges previous scriptures (Surah 3:3, 5:46-47):cite[8]`,
            },
            {
              content: `3. Dead Sea Scrolls: 1947 discoveries confirmed OT preservation:cite[6]`,
            },
            {
              content: `4. Internal Consistency: Unified salvation narrative across 66 books:cite[8]`,
            },
          ],
        },
      },
    }),
    prisma.question.create({
      data: {
        question: "Why do Muslims reject the Trinity?",
        answers: {
          create: [
            {
              content: `Islamic Perspective:`,
            },
            {
              content: `1. Tawhid Doctrine: Strict monotheism rejects any "partners" with Allah (Quran 4:171):cite[2]`,
            },
            {
              content: `2. Misconceptions: Many Muslims misunderstand Trinity as three separate gods:cite[8]`,
            },
            {
              content: `3. Historical Context: Early Islamic battles against Arabian polytheism shaped this emphasis:cite[7]`,
            },
            {
              content: `..................................................................`,
            },
            {
              content: `Christian Clarification:`,
            },
            {
              content: `- Trinity is One God in Three Persons, not three gods`,
            },
            {
              content: `- Old Testament hints (Genesis 1:26, Isaiah 48:16)`,
            },
            {
              content: `- Jesus' baptism shows all Three Persons (Matthew 3:16-17):cite[2]`,
            },
          ],
        },
      },
    }),
    prisma.question.create({
      data: {
        question: "What is the Islamic view of Muhammad compared to Jesus?",
        answers: {
          create: [
            {
              content: `Key Differences:`,
            },
            {
              content: `1. Final Prophet: Muslims consider Muhammad the "Seal of Prophets" (Quran 33:40), while Christians see Jesus as God's final revelation (Hebrews 1:1-2)`,
            },
            {
              content: `2. Sin Nature: Islam teaches prophets were sinless, Christianity affirms Jesus' sinlessness but acknowledges other prophets' flaws:cite[7]`,
            },
            {
              content: `3. Resurrection: Jesus' resurrection is central to Christianity, while Muhammad's tomb is in Medina:cite[5]`,
            }
          ],
        },
      },
    }),
    prisma.question.create({
      data: {
        question: "How should Christians approach Muslims about faith?",
        answers: {
          create: [
            {
              content: `Effective Engagement Strategies:`,
            },
            {
              content: `1. Build Trust: 90% of barriers are cultural/relational, only 10% theological:cite[5]`,
            },
            {
              content: `2. Focus on Jesus: Muslims respect Isa (Jesus) - start with shared ground:cite[8]`,
            },
            {
              content: `3. Use Questions: "What do you think about...?" rather than confrontation:cite[1]`,
            },
            {
              content: `4. Live Authentically: Demonstrate Christ's love through actions:cite[8]`,
            },
            {
              content: `5. Understand Culture: Recognize honor/shame dynamics in Muslim communities:cite[9]`,
            },
          ],
        },
      },
    }),
    prisma.question.create({
      data: {
        question: "Why is there controversy about Muhammad in the Bible?",
        answers: {
          create: [
            {
              content: `Examining Common Claims:`,
            },
            {
              content: `1. Paraclete Argument: Some Muslims claim John 14:16 predicts Muhammad ("another Helper")`,
            },
            {
              content: `- Context shows this refers to Holy Spirit (John 14:26):cite[6]`,
            },
            {
              content: `2. Deuteronomy 18:18: "A prophet like you" refers to Jesus, not Muhammad (Acts 3:22-26)`,
            },
            {
              content: `3. Song of Solomon 5:16: Hebrew "machamad" ≠ Muhammad linguistically:cite[8]`,
            }
          ],
        },
      },
    }),
    prisma.question.create({
      data: {
        question: "What are the main differences in daily practices?",
        answers: {
          create: [
            {
              content: `Comparative Religious Practices:`,
            },
            {
              content: `1. Prayer: Muslims pray 5x daily (Salat) vs Christian conversational prayer`,
            },
            {
              content: `2. Fasting: Ramadan month-long fast vs Lenten observance`,
            },
            {
              content: `3. Dietary Laws: Halal restrictions vs Christian liberty (Acts 10:15)`,
            },
            {
              content: `4. Pilgrimage: Hajj to Mecca vs Christian spiritual pilgrimage concept:cite[4]:cite[7]`,
            }
          ],
        },
      },
    }),
    prisma.question.create({
      data: {
        question: "How do Islamic and Christian eschatologies differ?",
        answers: {
          create: [
            {
              content: `End Times Beliefs:`,
            },
            {
              content: `1. Jesus' Return: Both await Second Coming, but:`,
            },
            {
              content: `- Islam: Jesus will break crosses, confirm Islam (Sahih Muslim 155)`,
            },
            {
              content: `- Christianity: Christ returns as conquering King (Revelation 19:11-16)`,
            },
            {
              content: `2. Judgment: Islam - scales of works; Christianity - grace through Christ:cite[5]:cite[9]`,
            }
          ],
        },
      },
    }),
  ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
