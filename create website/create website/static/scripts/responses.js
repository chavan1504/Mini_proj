function getBotResponse(input) {
    // Rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Expense handling queries
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "How can I create a budget that works for me?") {
        return "Creating a budget involves understanding your income, categorizing your expenses, and setting realistic spending limits. You can start by tracking your expenses and identifying areas where you can cut back.";
    } else if (input == "What are some effective ways to track my expenses?") {
        return "You can track your expenses manually using a notebook or spreadsheet, or you can use budgeting apps that automatically categorize your spending. Whichever method you choose, consistency is key.";
    } else if (input == "How can I reduce my monthly expenses?") {
        return "To reduce monthly expenses, consider renegotiating bills, cutting subscriptions or memberships you don't use, meal planning to reduce food costs, and finding ways to save on utilities.";
    } else if (input == "How can I increase my income to cover my expenses?") {
        return "Consider seeking a raise or promotion, starting a side hustle, freelancing, or investing in your education or skills to increase your earning potential.";
    } else if (input == "What are some common mistakes people make when managing their expenses, and how can I avoid them?") {
        return "Common mistakes include overspending, not budgeting, ignoring debt, and failing to plan for the future. To avoid these, create a budget, track your expenses, prioritize savings, and regularly review your financial situation.";
    } else if (input == "Should I invest my money instead of spending it on certain expenses?") {
        return "Investing can help grow your wealth over time, but it's important to balance investing with covering essential expenses and paying off high-interest debt. Consider consulting with a financial advisor to develop an investment strategy.";
    } else if (input == "What are the best practices for prioritizing my expenses based on my financial goals?") {
        return "Start by identifying your financial goals, whether it's paying off debt, saving for a house, or investing for retirement. Then, allocate your resources accordingly, focusing on high-priority goals while still covering essential expenses.";
    } else {
        return "Try asking something else!";
    }
}
