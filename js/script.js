"use strict";

/* Show Movie Recommendation */
function showRecommendation() {
    const recommendations = [
        "You should watch Inception (2010) - a mind-bending sci-fi thriller.",
        "Try The Matrix (1999) - a classic that redefined action and philosophy.",
        "Check out Parasite (2019) - a powerful story with unexpected twists.",
        "Watch Mad Max: Fury Road (2015) - nonstop action with incredible visuals.",
        "Consider The Grand Budapest Hotel (2014) - a visually unique and witty film."
    ];

    const textElement = document.getElementById("recommendation-text");

    if (!textElement) return;

    const randomIndex = Math.floor(Math.random() * recommendations.length);

    textElement.textContent = recommendations[randomIndex];
}
