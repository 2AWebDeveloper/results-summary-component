"use strict";

const scoreWrapper = document.querySelector(".score-wrapper");

const getScore = async function() {
    try {
        const response = await fetch("./json/data.json");
        if (!response.ok) return;
        const data = await response.json();
        setScore(data);
    } catch(error) {
        console.log(error);
    }
};
const setScore = function(scores) {
    scores.forEach(item => {
        const scoreElement = `
            <div class="score-item flex items-center justify-between p-3.5 rounded-xl">
                <div class="flex items-center gap-3">
                    <img src="${item.icon}" alt="${item.category}-icon">
                    <span class="score-title font-medium md:text-lg">${item.category}</span>
                </div>
                <div class="flex items-center gap-1.5 font-medium text-dark-gray-blue md:text-lg">
                    <span class="font-medium">${item.score}</span>
                    <span class="opacity-50">/</span>
                    <span class="opacity-50">100</span>
                </div>
            </div>
        `;
        scoreWrapper.insertAdjacentHTML("beforeend", scoreElement);
    });
};
window.addEventListener("DOMContentLoaded", getScore);