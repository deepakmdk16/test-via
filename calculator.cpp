#include <iostream>
#include <cmath>
#include <limits>
#include <iomanip>

using namespace std;

class Calculator {
private:
    double num1, num2;
    char operation;

    void clearInput() {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }

    bool getNumbers() {
        cout << "Enter first number: ";
        if (!(cin >> num1)) {
            cout << "Invalid input! Please enter a valid number.\n";
            clearInput();
            return false;
        }

        cout << "Enter second number: ";
        if (!(cin >> num2)) {
            cout << "Invalid input! Please enter a valid number.\n";
            clearInput();
            return false;
        }

        return true;
    }

    double add(double a, double b) {
        return a + b;
    }

    double subtract(double a, double b) {
        return a - b;
    }

    double multiply(double a, double b) {
        return a * b;
    }

    double divide(double a, double b) {
        if (b == 0) {
            cout << "Error: Division by zero is not allowed!\n";
            return 0;
        }
        return a / b;
    }

    double power(double base, double exponent) {
        return pow(base, exponent);
    }

    double squareRoot(double num) {
        if (num < 0) {
            cout << "Error: Cannot calculate square root of negative number!\n";
            return 0;
        }
        return sqrt(num);
    }

    double modulus(double a, double b) {
        if (b == 0) {
            cout << "Error: Modulus by zero is not allowed!\n";
            return 0;
        }
        return fmod(a, b);
    }

public:
    void displayMenu() {
        cout << "\n========================================\n";
        cout << "        C++ CALCULATOR APP\n";
        cout << "========================================\n";
        cout << "1. Addition (+)\n";
        cout << "2. Subtraction (-)\n";
        cout << "3. Multiplication (*)\n";
        cout << "4. Division (/)\n";
        cout << "5. Power (^)\n";
        cout << "6. Square Root (√)\n";
        cout << "7. Modulus (%)\n";
        cout << "8. Exit\n";
        cout << "========================================\n";
    }

    void performOperation(int choice) {
        double result = 0;

        switch(choice) {
            case 1:
                if (getNumbers()) {
                    result = add(num1, num2);
                    cout << fixed << setprecision(2);
                    cout << "\nResult: " << num1 << " + " << num2 << " = " << result << endl;
                }
                break;

            case 2:
                if (getNumbers()) {
                    result = subtract(num1, num2);
                    cout << fixed << setprecision(2);
                    cout << "\nResult: " << num1 << " - " << num2 << " = " << result << endl;
                }
                break;

            case 3:
                if (getNumbers()) {
                    result = multiply(num1, num2);
                    cout << fixed << setprecision(2);
                    cout << "\nResult: " << num1 << " * " << num2 << " = " << result << endl;
                }
                break;

            case 4:
                if (getNumbers()) {
                    if (num2 != 0) {
                        result = divide(num1, num2);
                        cout << fixed << setprecision(2);
                        cout << "\nResult: " << num1 << " / " << num2 << " = " << result << endl;
                    }
                }
                break;

            case 5:
                if (getNumbers()) {
                    result = power(num1, num2);
                    cout << fixed << setprecision(2);
                    cout << "\nResult: " << num1 << " ^ " << num2 << " = " << result << endl;
                }
                break;

            case 6:
                cout << "Enter a number: ";
                if (cin >> num1) {
                    if (num1 >= 0) {
                        result = squareRoot(num1);
                        cout << fixed << setprecision(2);
                        cout << "\nResult: √" << num1 << " = " << result << endl;
                    }
                } else {
                    cout << "Invalid input!\n";
                    clearInput();
                }
                break;

            case 7:
                if (getNumbers()) {
                    if (num2 != 0) {
                        result = modulus(num1, num2);
                        cout << fixed << setprecision(2);
                        cout << "\nResult: " << num1 << " % " << num2 << " = " << result << endl;
                    }
                }
                break;

            case 8:
                cout << "\nThank you for using the calculator. Goodbye!\n";
                break;

            default:
                cout << "\nInvalid choice! Please select a valid option (1-8).\n";
        }
    }

    void run() {
        int choice;

        do {
            displayMenu();
            cout << "Enter your choice (1-8): ";

            if (!(cin >> choice)) {
                cout << "\nInvalid input! Please enter a number.\n";
                clearInput();
                continue;
            }

            if (choice >= 1 && choice <= 8) {
                performOperation(choice);
            }

        } while (choice != 8);
    }
};

int main() {
    Calculator calc;
    calc.run();

    return 0;
}
