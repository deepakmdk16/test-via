# C++ Calculator App

A feature-rich command-line calculator application built with C++.

## Features

- **Basic Arithmetic Operations**
  - Addition (+)
  - Subtraction (-)
  - Multiplication (*)
  - Division (/)

- **Advanced Operations**
  - Power (^)
  - Square Root (√)
  - Modulus (%)

- **User-Friendly Interface**
  - Interactive menu-driven interface
  - Input validation and error handling
  - Clear error messages for invalid operations
  - Formatted output with 2 decimal precision

## Requirements

- C++ compiler with C++11 support (g++, clang++, etc.)
- Make (optional, for using Makefile)

## Compilation

### Using Make (Recommended)
```bash
make
```

### Manual Compilation
```bash
g++ -Wall -Wextra -std=c++11 -o calculator calculator.cpp
```

## Usage

### Run the Calculator
```bash
./calculator
```

Or using Make:
```bash
make run
```

### Example Usage

```
========================================
        C++ CALCULATOR APP
========================================
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Power (^)
6. Square Root (√)
7. Modulus (%)
8. Exit
========================================
Enter your choice (1-8): 1
Enter first number: 10
Enter second number: 5

Result: 10.00 + 5.00 = 15.00
```

## Operations Guide

1. **Addition**: Adds two numbers
2. **Subtraction**: Subtracts the second number from the first
3. **Multiplication**: Multiplies two numbers
4. **Division**: Divides the first number by the second (checks for division by zero)
5. **Power**: Raises the first number to the power of the second
6. **Square Root**: Calculates the square root of a number (checks for negative numbers)
7. **Modulus**: Calculates the remainder of division (checks for modulus by zero)
8. **Exit**: Closes the calculator application

## Error Handling

The calculator includes robust error handling for:
- Division by zero
- Square root of negative numbers
- Modulus by zero
- Invalid input (non-numeric values)

## Technical Details

- **Language**: C++11
- **Architecture**: Object-Oriented (using a Calculator class)
- **Input Validation**: Comprehensive input checking with error recovery
- **Output Format**: Fixed-point notation with 2 decimal places

## Clean Up

To remove the compiled executable:
```bash
make clean
```

## Code Structure

The application is structured using a `Calculator` class with:
- Private member functions for each operation
- Public methods for menu display and operation execution
- Input validation and error handling methods
- Main run loop for continuous operation

## License

This calculator app is provided as-is for educational and practical use.
