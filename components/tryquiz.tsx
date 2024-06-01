import React, { useEffect, useMemo, useState } from "react";

import { Quiz } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircleIcon, Crown, Timer } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Toaster } from "@/components/ui/sonner";

import { Button } from "./ui/button";

const formSchema = z.object({
  question: z.string().min(1, {
    message: "الرجاء إدخال سؤال",
  }),
  option1: z.string().min(1, {
    message: "الرجاء إدخال الخيار الأول",
  }),
  option2: z.string().min(1, {
    message: "الرجاء إدخال الخيار الثاني",
  }),
  option3: z.string().min(1, {
    message: "الرجاء إدخال الخيار الثالث",
  }),
  correctOption: z.string().min(1, {
    message: "الرجاء إدخال الخيار الصحيح",
  }),
});

interface ConfirmModelProps {
  extractedquizes: Quiz[];
}

export const Tryquiz = ({ extractedquizes }: ConfirmModelProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [quiz, setQuiz] = useState(extractedquizes);
  const [isOpen, setIsOpen] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = React.useState<Number>(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [dipslayResult, setDipslayResult] = useState(false);
  const [seccondAvailable, setSeccondAvailable] = useState(10);
  const [isFalse, setIsFalse] = useState(false);
  const [isloading, setIsloading] = useState(true);

  const cureentQuestion = useMemo(() => {
    return quiz[questionIndex];
  }, [questionIndex, quiz]);

  const shuffleOptions = () => {
    const optionss = [
      cureentQuestion.option1,
      cureentQuestion.option2,
      cureentQuestion.option3,
      cureentQuestion.option4,
    ];
    const options = optionss.filter((option) => option !== undefined);

    const shuffled = options.sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  };

  useEffect(() => {
    let interval: any;
    if (cureentQuestion === undefined) return () => clearInterval(interval);

    if (cureentQuestion) {
      shuffleOptions();
    }
    if (cureentQuestion && seccondAvailable === 0) {
      return () => clearInterval(interval);
    }

    interval = setInterval(() => {
      setSeccondAvailable((prev) => prev - 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [cureentQuestion]);

  useEffect(() => {
    if (seccondAvailable === 0 && questionIndex === quiz.length - 1) {
      setDipslayResult(true);

      setQuiz([]);
    } else if (seccondAvailable === 0) {
      setQuestionIndex((prevIndex) =>
        prevIndex < quiz.length - 1 ? prevIndex + 1 : prevIndex,
      );
      questionIndex === quiz.length - 1 ? setDipslayResult(true) : null;
      setWrongAnswer(wrongAnswer + 1);
      setIsFalse(true);

      setSeccondAvailable(10);
    }
  }, [seccondAvailable, questionIndex, quiz.length]);

  const handleShowQuiz = async () => {};

  const handleAnswer = (selectedOption: any) => {
    setSeccondAvailable(10);

    if (selectedOption.option === cureentQuestion.correct_option) {
      setCorrectAnswer(correctAnswer + 1);
      setIsFalse(false);
      toast.success("إجابة صحيحة", {
        icon: "👏",
      });
    } else {
      setWrongAnswer(wrongAnswer + 1);
      setIsFalse(true);
      toast.error("إجابة خاطئة", {
        icon: "😢",
      });
    }
    setQuestionIndex((prevIndex) =>
      prevIndex < quiz.length ? prevIndex + 1 : prevIndex,
    );
    if (questionIndex === quiz.length - 1) {
      setDipslayResult(true);
    }
    setSelectedOption(0);
  };

  return (
    <>
      <Toaster />
      <AlertDialog onOpenChange={() => setIsOpen(!isOpen)}>
        <AlertDialogTrigger
          className="flex items-center gap-x-2"
          onClick={handleShowQuiz}
          asChild
        >
          <Button className="rounded-full p-4" size="sm" variant="ghost">
            <span>ابدأ الاختبار</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-full md:max-w-[50%] ">
          <div className="flex flex-row justify-between">
            <AlertDialogTitle>الاختبارات لفصلك</AlertDialogTitle>
            <div className="flex flex-row gap-3">
              <div>
                <div className="flex flex-row gap-1">
                  <Timer size={25} />
                  <span>{seccondAvailable}/10</span>
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <AlertCircleIcon size={25} />
                <span className="text-red-600">{wrongAnswer}</span>
              </div>
              <div>
                <div className="flex flex-row gap-1">
                  <div>
                    <Crown size={25} className="text-green-600" />
                  </div>
                  <span className="text-green-600">{correctAnswer}</span>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          {!cureentQuestion && dipslayResult && correctAnswer > wrongAnswer ? (
            <div>
              <h1 className="border bg-green-300 p-2">
                🎉 تهانينا، لقد اجتزت الاختبار
              </h1>
            </div>
          ) : !cureentQuestion &&
            dipslayResult &&
            correctAnswer < wrongAnswer ? (
            <div>
              <h1 className="border bg-red-300 p-2">
                آسف 😢 لقد فشلت في الاختبار، يرجى إعادة المحاولة لفتح الفصل
                التالي
              </h1>
            </div>
          ) : null}

          <AlertDialogDescription>
            <div className="mb-6 mt-6">
              {quiz.length == 0 && !isloading ? (
                <div className="flex flex-col items-center justify-center">
                  <h1>لا يوجد اختبار متاح لهذا الفصل</h1>
                </div>
              ) : null}
            </div>
            {cureentQuestion && (
              <div>
                <div>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: cureentQuestion.question,
                    }}
                  />
                </div>
                {shuffledOptions.map((option, index) => (
                  <div key={index}>
                    <Button
                      onClick={() => {
                        setSelectedOption(index + 1);
                        handleAnswer({ option });
                      }}
                      variant={
                        selectedOption === index + 1 ? "default" : "secondary"
                      }
                      className="mb-3 mt-6 w-full justify-start"
                    >
                      {index + 1}. {option}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </AlertDialogDescription>

          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
        <AlertDialogOverlay />
      </AlertDialog>
    </>
  );
};

export default Tryquiz;
