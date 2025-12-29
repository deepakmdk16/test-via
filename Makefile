# Makefile for C++ Calculator

CXX = g++
CXXFLAGS = -Wall -Wextra -std=c++11
TARGET = calculator
SRC = calculator.cpp

all: $(TARGET)

$(TARGET): $(SRC)
	$(CXX) $(CXXFLAGS) -o $(TARGET) $(SRC)

clean:
	rm -f $(TARGET)

run: $(TARGET)
	./$(TARGET)

.PHONY: all clean run
