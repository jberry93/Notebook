/**
 * These are my answers to the Implementation challenges under Algorithms
 * on HackerRank. These may not be the best answers but I do shoot for
 * 100% completion on every challenge ;)
 */

// Grading Students
/**
 * Cite: https://stackoverflow.com/questions/3254047/round-number-up-to-the-nearest-multiple-of-3
 */
function gradingStudents(grades) {
    let gradeIndex = 0, // Grades array index number
    nextMultiple = 0, // Grab next multiple of 5
    parsedGrades = []; // Parsed grades after filtering through conditions and rounding

    for (gradeIndex; gradeIndex < grades.length; gradeIndex++) {
        nextMultiple = Math.ceil(grades[gradeIndex] / 5) * 5;

        if (grades[gradeIndex] >= 38 && (nextMultiple - grades[gradeIndex]) < 3) {
            parsedGrades = [...parsedGrades, nextMultiple];
        } else {
            parsedGrades = [...parsedGrades, grades[gradeIndex]];
        }
    }

    return parsedGrades;
}

// Apples and Oranges
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let caughtApples = 0,
        caughtOranges = 0,
        applesIndex = 0,
        orangesIndex = 0,
        appleDropPosition = 0,
        orangeDropPosition = 0;

    for (applesIndex; applesIndex < apples.length; applesIndex++) {
        appleDropPosition = a + apples[applesIndex];

        if (appleDropPosition >= s && appleDropPosition <= t) {
            caughtApples++;
        }
    }

    for (orangesIndex; orangesIndex < oranges.length; orangesIndex++) {
        orangeDropPosition = b + oranges[orangesIndex];

        if (orangeDropPosition >= s && orangeDropPosition <= t) {
            caughtOranges++;
        }
    }

    console.log(caughtApples + "\n" + caughtOranges);
}