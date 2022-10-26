import java.util.Scanner;

public class Quiz {

    static int points = 0;
    static String[] questions = { "Which of the eight planets in our solar system comes first alphabetically?",
            "Which word is the adjective in the following sentence: \"Jane Lynch is devastatingly attractive\"?",
            "Which are you more likely doing on your PC if you're pressing Control-V?"
    };
    static String[][] answers = { { "Earth", "Uranus", "Venus", "Mars" },
            { "Jane", "is", "devastatingly", "attractive" },
            { "Copying", "Pasting", "Undoing", "Cutting" }
    };
    static String[] correctAnswers = { "1", "4", "2" };

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Welcome to quiz!!!\n");
        for (int i = 0; i < questions.length; i++) {
            System.out.println(questions[i] + "\n");

            for (int j = 0; j < answers[i].length; j++) {
                System.out.println((j + 1) + ". " + answers[i][j]);
            }

            System.out.println("Please enter your answer...\n");
            String currentAnswer = sc.nextLine();

            if (currentAnswer.equals(correctAnswers[i])) {
                System.out.println("Correct. +1\n");
                points++;
            }

            else {
                System.out.println("Inorrect\n");
            }

        }

        System.out.println("Thank you!!! You earned " + points + " points.");

    }

};