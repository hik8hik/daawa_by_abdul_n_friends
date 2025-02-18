import FAQSection from "@/app/components/faq-section";
import  prisma  from "@/lib/prisma";
import TypingAnimation from "@/app/components/typing-animation";

export default async function Home() {
  const questions = await prisma.question.findMany({
    include: { answers: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <TypingAnimation />
        </div>
        <FAQSection questions={questions} />
      </div>
    </div>
  );
}
