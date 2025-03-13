const questions = {
    "Number Ninjas": [
        { 
            question: "A whole number N leaves remainders 4 and 5 when divided by 5 and 7 respectively. What is the smallest possible value of N?",
            answer: "19"
        },
        {
            question: "The product of two primes is 899. What is the larger prime?",
            answer: "31"
        },
        {
            question: "Find the smallest positive integer k such that 126k is a perfect cube.",
            answer: "294"
        },
        {
            question: "How many positive divisors does 360 have?",
            answer: "24"
        },
        {
            question: "The sum of two primes is 100. If one is twice the other plus 9, what is the larger prime?",
            answer: "67"
        }
    ],
    "Algebraic Adventures": [
        {
            question: "If 3 less than 5 times a number equals 17, what is the number?",
            answer: "4"
        },
        {
            question: "The sum of three consecutive odd numbers is 141. What is the largest number?",
            answer: "49"
        },
        {
            question: "When 15 is subtracted from 4 times a number, the result is 89. What is the number?",
            answer: "26"
        },
        {
            question: "A number squared plus 7 equals 88. What is the number?",
            answer: "9"
        },
        {
            question: "If 2/3 of a number is 14 more than 1/6 of it, what is the number?",
            answer: "28"
        }
    ],
    "Geometry Geniuses": [
        {
            question: "A cube has a surface area of 150 cm². What is its volume?",
            answer: "125"
        },
        {
            question: "The diagonal of a square is 10√2 cm. What is its area?",
            answer: "100"
        },
        {
            question: "A circle's area is 64π. What is the circumference?",
            answer: "16π"
        },
        {
            question: "A rectangular prism has dimensions 3x4x12. What is its space diagonal length?",
            answer: "13"
        },
        {
            question: "A triangle has sides 7, 24, and x. If it's a right triangle, what is x?",
            answer: "25"
        }
    ],
    "Time Travelers": [
        {
            question: "A clock loses 5 minutes every hour. If it shows 3:00 PM now, what actual time will it show after 12 hours?",
            answer: "2:00 PM"
        },
        {
            question: "How many degrees does the hour hand move from 9:15 AM to 1:45 PM?",
            answer: "135"
        },
        {
            question: "If it is 5:20 PM now, what time will it be when the minute hand catches up to the hour hand?",
            answer: "6:00 PM"
        },
        {
            question: "A meeting started at 10:45 AM and lasted 2 hours 55 minutes. When did it end?",
            answer: "1:40 PM"
        },
        {
            question: "How many times do clock hands overlap between noon and midnight?",
            answer: "11"
        }
    ],
    "Probability Pioneers": [
        {
            question: "Two dice are rolled. What is the probability the sum is prime?",
            answer: "5/12"
        },
        {
            question: "A jar has 4 red, 5 blue, and 6 green marbles. Probability of drawing red or green?",
            answer: "2/3"
        },
        {
            question: "Three coins are flipped. Probability of exactly two heads?",
            answer: "3/8"
        },
        {
            question: "A card is drawn from a deck. Probability it’s a face card or a heart?",
            answer: "11/26"
        },
        {
            question: "Probability a random 2-digit number has digits summing to 10?",
            answer: "9/100"
        }
    ],
    "Fraction Fanatics": [
        {
            question: "If 1/4 of a number is 12, what is 3/8 of the number?",
            answer: "18"
        },
        {
            question: "A recipe uses 2¾ cups flour. Tripling it requires how many cups?",
            answer: "8.25"
        },
        {
            question: "What is 5/6 divided by 10/3 in simplest form?",
            answer: "1/4"
        },
        {
            question: "A tank is 3/5 full. Adding 12 gallons fills it. What’s the capacity?",
            answer: "30"
        },
        {
            question: "2/3 of students play sports. 1/4 of those play soccer. What fraction play soccer?",
            answer: "1/6"
        }
    ],
    "Puzzle Masters": [
        {
            question: "A two-digit number is 9 times the sum of its digits. What is the number?",
            answer: "81"
        },
        {
            question: "How many 1x1x1 cubes are in a 3x4x5 rectangular prism?",
            answer: "60"
        },
        {
            question: "A bat and ball cost \$1.10 total. The bat costs \$1 more than the ball. What’s the ball’s cost?",
            answer: "0.05"
        },
        {
            question: "If 3 hens lay 3 eggs in 3 days, how many eggs do 9 hens lay in 9 days?",
            answer: "27"
        },
        {
            question: "A man is twice as old as his son was when the man was the son’s age. If their ages sum to 84, how old is the son?",
            answer: "24"
        }
    ],
    "Equation Explorers": [
        {
            question: "Solve: 5(x - 3) = 2x + 9",
            answer: "8"
        },
        {
            question: "Find x: 2^(x+1) = 16",
            answer: "3"
        },
        {
            question: "If 3x + 2y = 20 and x - y = 4, find y.",
            answer: "1.6"
        },
        {
            question: "The sum of three consecutive integers is 81. Find the smallest.",
            answer: "26"
        },
        {
            question: "If √(x + 5) = 7, what is x?",
            answer: "44"
        }
    ],
    "Logic Legends": [
        {
            question: "A number leaves remainder 3 when divided by 4 and 2 when divided by 5. What’s the smallest such number?",
            answer: "18"
        },
        {
            question: "If today is Monday, what day is 100 days from now?",
            answer: "Wednesday"
        },
        {
            question: "How many 3-digit numbers have all digits distinct?",
            answer: "648"
        },
        {
            question: "A number is 4 more than its square. What is the number?",
            answer: "2"
        },
        {
            question: "How many squares are on a chessboard?",
            answer: "204"
        }
    ],
    "Data Detectives": [
        {
            question: "The average of 5 numbers is 12. Adding what number makes the average 13?",
            answer: "18"
        },
        {
            question: "Median of {7, 3, 0, 2, 12, 5}?",
            answer: "4"
        },
        {
            question: "Mode of {red, blue, red, green, blue, red}?",
            answer: "red"
        },
        {
            question: "Range of 15, 2, 8, 22, 7?",
            answer: "20"
        },
        {
            question: "A store starts with 100 items in stock. Each morning, a shipment comes in adding 50% more items, and they sell 20 per day. What is the number of items remaining after two days?",
            answer: "175"
        }
    ],
    "Ratio Rangers": [
        {
            question: "The ratio of boys to girls in a class is 3:5. If there are 24 boys, how many girls are there?",
            answer: "40"
        },
        {
            question: "A map scale is 1:50,000. How many kilometers does 3 cm on the map represent?",
            answer: "1.5"
        },
        {
            question: "Paint is mixed red to blue in a 2:3 ratio. How many liters of red paint are needed to make 15 liters of mixture?",
            answer: "6"
        },
        {
            question: "If 4 apples cost $2, how much do 10 apples cost?",
            answer: "5"
        },
        {
            question: "A car travels 240 km in 3 hours. What is its average speed in km/h?",
            answer: "80"
        }
    ],
    "Decimal Dynamos": [
        {
            question: "Calculate: 2.5 × 0.4",
            answer: "1"
        },
        {
            question: "Subtract 3.78 from 10.",
            answer: "6.22"
        },
        {
            question: "Divide 1.2 by 0.06.",
            answer: "20"
        },
        {
            question: "Convert 0.75 to a fraction in simplest form.",
            answer: "3/4"
        },
        {
            question: "Add 4.5 and 2.35.",
            answer: "6.85"
        }
    ],
    "Percentage Pros": [
        {
            question: "What is 30% of 150?",
            answer: "45"
        },
        {
            question: "A shirt costs $40 and is discounted by 15%. What is the new price?",
            answer: "34"
        },
        {
            question: "25 is what percentage of 200?",
            answer: "12.5%"
        },
        {
            question: "Increase 80 by 25%.",
            answer: "100"
        },
        {
            question: "A town’s population grows from 2,000 to 2,500. What is the percentage increase?",
            answer: "25%"
        }
    ],
    "Measurement Magicians": [
        {
            question: "Convert 5 feet to inches.",
            answer: "60"
        },
        {
            question: "Find the area of a triangle with a base of 10 cm and height of 8 cm.",
            answer: "40"
        },
        {
            question: "Convert 2.5 liters to milliliters.",
            answer: "2500"
        },
        {
            question: "A square has an area of 49 m². What is its perimeter?",
            answer: "28"
        },
        {
            question: "How many minutes are in 3 hours and 45 minutes?",
            answer: "225"
        }
    ],
    "Pattern Prodigies": [
        {
            question: "What is the next number in the sequence: 2, 5, 10, 17, ___?",
            answer: "26"
        },
        {
            question: "What is the nth term of the sequence: 3, 6, 9, 12...?",
            answer: "3n"
        },
        {
            question: "What shape comes next: △, □, ○, △, □, ___?",
            answer: "○"
        },
        {
            question: "Complete the Fibonacci sequence: 1, 1, 2, 3, 5, ___",
            answer: "8"
        },
        {
            question: "What is the missing number: 64, 32, 16, 8, ___?",
            answer: "4"
        }
    ],
    "Word Problem Warriors": [
        {
            question: "Tom has twice as many stamps as Sam. Together they have 18 stamps. How many does Tom have?",
            answer: "12"
        },
        {
            question: "A train leaves Station A at 3 PM traveling 60 mph. Another leaves Station B at 4 PM traveling 80 mph. When will they meet?",
            answer: "7 PM"
        },
        {
            question: "A rectangle’s length is 3 times its width. Its perimeter is 48. What is its area?",
            answer: "108"
        },
        {
            question: "10 years ago, Alice was half Bob’s age. Alice is now 30. How old is Bob?",
            answer: "50"
        },
        {
            question: "A phone costs $300 after 20% tax. What was its pre-tax price?",
            answer: "250"
        }
    ],
    "Integer Innovators": [
        {
            question: "Calculate: |-5| + |3|",
            answer: "8"
        },
        {
            question: "Solve: -7 + 12",
            answer: "5"
        },
        {
            question: "Multiply: 4 × (-3)",
            answer: "-12"
        },
        {
            question: "Subtract: (-10) - (-5)",
            answer: "-5"
        },
        {
            question: "What is the additive inverse of -9?",
            answer: "9"
        }
    ],
    "Coordinate Cartographers": [
        {
            question: "What is the midpoint of (2, 3) and (8, 7)?",
            answer: "(5, 5)"
        },
        {
            question: "Find the slope of the line through (0, 4) and (3, 0).",
            answer: "-4/3"
        },
        {
            question: "Reflect the point (-2, 5) over the y-axis.",
            answer: "(2, 5)"
        },
        {
            question: "Calculate the distance between (1, 1) and (4, 5).",
            answer: "5"
        },
        {
            question: "In which quadrant is (-3, -2) located?",
            answer: "III"
        }
    ],
    "Expression Experts": [
        {
            question: "Simplify: 3x + 2y - x + 4y",
            answer: "2x + 6y"
        },
        {
            question: "Expand and simplify: 4(a + 3) - 2a",
            answer: "2a + 12"
        },
        {
            question: "Expand: (x + 5)(x - 3)",
            answer: "x² + 2x - 15"
        },
        {
            question: "Factor completely: 6x + 9",
            answer: "3(2x + 3)"
        },
        {
            question: "Evaluate 2x² - 3x + 5 when x = 2.",
            answer: "7"
        }
    ],
    "Function Finders": [
        {
            question: "If f(x) = 2x + 1, find f(3).",
            answer: "7"
        },
        {
            question: "What is the domain of f(x) = 1/(x - 2)?",
            answer: "All real numbers except 2"
        },
        {
            question: "Is y = 3x - 2 a linear function? (Yes/No)",
            answer: "Yes"
        },
        {
            question: "Find the y-intercept of y = 4x - 5.",
            answer: "-5"
        },
        {
            question: "If g(x) = x², what is g(-4)?",
            answer: "16"
        }
    ]
};