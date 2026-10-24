// const recipeData = [
//   // Weight Loss
//   {
//       id: 1,
//       name: "Oats & Greek Yogurt Bowl",
//       category: "Weight Loss",
//       calories: 250,
//       protein: 18,
//       carbs: 32,
//       fat: 6,
//       rating: 4.8,
//       image:'./images/Oats & Greek Yogurt Bowl.webp',
//       share: 125,
//       pros: ["Filling breakfast", "Provides protein", "Supports portion control"]
//   },
//   {
//       id: 2,
//       name: "Moong Dal Chilla",
//       category: "Weight Loss",
//       calories: 235,
//       protein: 14,
//       carbs: 28,
//       fat: 7,
//       rating: 4.6,
//       image:'./images/Moong Dal Chilla.webp',
//       share: 98,
//       pros: ["Plant protein", "Contains fiber", "Helps with fullness"]
//   },
//   {
//       id: 3,
//       name: "Grilled Chicken Salad",
//       category: "Weight Loss",
//       calories: 265,
//       protein: 32,
//       carbs: 12,
//       fat: 9,
//       rating: 4.9,
//       image:'./images/Grilled Chicken Salad.webp',
//       share: 210,
//       pros: ["High protein", "Relatively low in carbs"]
//   },
//   {
//       id: 4,
//       name: "Tofu Vegetable Stir-Fry",
//       category: "Weight Loss",
//       calories: 245,
//       protein: 20,
//       carbs: 18,
//       fat: 10,
//       rating: 4.5,
//       image:'./images/Tofu Vegetable Stir-Fry.jpg',
//       share: 76,
//       pros: ["Plant protein", "Nutrient-rich vegetables"]
//   },
//   {
//       id: 5,
//       name: "Sprouts & Chickpea Chaat",
//       category: "Weight Loss",
//       calories: 215,
//       protein: 12,
//       carbs: 30,
//       fat: 5,
//       rating: 4.7,
//       image:'./images/Sprouts & Chickpea Chaat.jpg',
//       share: 143,
//       pros: ["Fiber-rich", "Filling snack"]
//   },

//   // Blood Pressure-Friendly
//   {
//       id: 6,
//       name: "Vegetable Oats Porridge",
//       category: "Blood Pressure-Friendly",
//       calories: 205,
//       protein: 8,
//       carbs: 30,
//       fat: 6,
//       rating: 4.6,
//       share: 87,
//       image:'./images/Vegetable Oats Porridge.webp',
//       pros: ["Whole grains", "Provides fiber"]
//   },
//   {
//       id: 7,
//       name: "Lemon Herb Grilled Fish",
//       category: "Blood Pressure-Friendly",
//       calories: 204,
//       protein: 28,
//       carbs: 5,
//       fat: 8,
//       rating: 4.9,
//       share: 175,
//       image:'./images/Lemon Herb Grilled Fish.png',
//       pros: ["Lean protein", "Can be made with little added salt"]
//   },
//   {
//       id: 8,
//       name: "Low-Salt Moong Dal",
//       category: "Blood Pressure-Friendly",
//       calories: 184,
//       protein: 12,
//       carbs: 25,
//       fat: 4,
//       rating: 4.5,
//       share: 65,
//       image:'./images/Low-Salt Moong Dal.avif',
//       pros: ["Plant protein", "Low added sodium"]
//   },
//   {
//       id: 9,
//       name: "Beetroot Chickpea Salad",
//       category: "Blood Pressure-Friendly",
//       calories: 231,
//       protein: 10,
//       carbs: 32,
//       fat: 7,
//       rating: 4.7,
//       share: 112,
//       image:'./images/Beetroot Chickpea Salad.webp',
//       pros: ["Fiber", "Provides potassium"]
//   },
//   {
//       id: 10,
//       name: "Vegetable Millet Khichdi",
//       category: "Blood Pressure-Friendly",
//       calories: 230,
//       protein: 9,
//       carbs: 35,
//       fat: 6,
//       rating: 4.6,
//       share: 91,
//       image:'./images/Vegetable Millet Khichdi.jpg',
//       pros: ["Whole grains", "Vegetables and fiber"]
//   },

//   // Diabetic-Friendly
//   {
//       id: 11,
//       name: "Moong Dal Chilla",
//       category: "Diabetic-Friendly",
//       calories: 235,
//       protein: 14,
//       carbs: 28,
//       fat: 7,
//       rating: 4.8,
//       image:'./images/Moong Dal Chilla.webp',
//       share: 156,
//       pros: ["Protein and fiber", "Balanced meal option"]
//   },
//   {
//       id: 12,
//       name: "Vegetable Oats Upma",
//       category: "Diabetic-Friendly",
//       calories: 215,
//       protein: 8,
//       carbs: 30,
//       fat: 7,
//       rating: 4.5,
//       image:'./images/Vegetable Oats Upma.webp',
//       share: 83,
//       pros: ["Whole grains", "Vegetables provide fiber"]
//   },
//   {
//       id: 13,
//       name: "Paneer Bhurji with Whole-Wheat Roti",
//       category: "Diabetic-Friendly",
//       calories: 326,
//       protein: 20,
//       carbs: 30,
//       fat: 14,
//       rating: 4.7,
//       image:'./images/Paneer Bhurji with Whole-Wheat Roti.webp',
//       share: 134,
//       pros: ["Protein-rich", "Balanced carbohydrate portions"]
//   },
//   {
//       id: 14,
//       name: "Chickpea Cucumber Salad",
//       category: "Diabetic-Friendly",
//       calories: 194,
//       protein: 10,
//       carbs: 25,
//       fat: 6,
//       rating: 4.6,
//       share: 102,
//       image:'./images/Chickpea Cucumber Salad.webp',
//       pros: ["Dietary fiber", "Plant protein"]
//   },
//   {
//       id: 15,
//       name: "Grilled Fish with Vegetables",
//       category: "Diabetic-Friendly",
//       calories: 232,
//       protein: 28,
//       carbs: 12,
//       fat: 8,
//       rating: 4.9,
//       image:'./images/Grilled Fish with Vegetables.webp',
//       share: 189,
//       pros: ["Protein-rich", "Relatively low in carbs"]
//   },

//   // High-Protein
//   {
//       id: 16,
//       name: "Greek Yogurt Protein Bowl",
//       category: "High-Protein",
//       calories: 245,
//       protein: 25,
//       carbs: 25,
//       fat: 5,
//       rating: 4.8,
//       image:'./images/Greek Yogurt Protein Bowl.webp',
//       share: 201,
//       pros: ["High protein", "Supports muscle recovery"]
//   },
//   {
//       id: 17,
//       name: "Grilled Chicken Breast",
//       category: "High-Protein",
//       calories: 223,
//       protein: 35,
//       carbs: 5,
//       fat: 7,
//       rating: 4.9,
//       image:'./images/Grilled Chicken Breast.png',
//       share: 246,
//       pros: ["Lean protein", "Supports muscle repair"]
//   },
//   {
//       id: 18,
//       name: "Tofu Protein Bowl",
//       category: "High-Protein",
//       calories: 267,
//       protein: 22,
//       carbs: 20,
//       fat: 11,
//       rating: 4.6,
//       image:'./images/Tofu Protein Bowl.webp',
//       share: 118,
//       pros: ["Plant-based protein", "Suitable for vegetarian diets"]
//   },
//   {
//       id: 19,
//       name: "Egg White & Spinach Omelette",
//       category: "High-Protein",
//       calories: 166,
//       protein: 24,
//       carbs: 4,
//       fat: 6,
//       rating: 4.7,
//       image:'./images/Egg White & Spinach Omelette.jpeg',
//       share: 97,
//       pros: ["Protein-rich breakfast", "Contains vegetables"]
//   },
//   {
//       id: 20,
//       name: "Lentil Quinoa Bowl",
//       category: "High-Protein",
//       calories: 304,
//       protein: 18,
//       carbs: 40,
//       fat: 8,
//       rating: 4.5,
//       image:'./images/Lentil Quinoa Bowl.jpg',
//       share: 109,
//       pros: ["Plant protein", "Provides complex carbohydrates"]
//   },

//   // Muscle Gain
//   {
//       id: 21,
//       name: "Peanut Butter Banana Oats",
//       category: "Muscle Gain",
//       calories: 484,
//       protein: 20,
//       carbs: 65,
//       fat: 16,
//       rating: 4.8,
//       image:'./images/Peanut Butter Banana Oats.webp',
//       share: 223,
//       pros: ["Energy-dense", "Protein and carbohydrates"]
//   },
//   {
//       id: 22,
//       name: "Chicken & Brown Rice Bowl",
//       category: "Muscle Gain",
//       calories: 462,
//       protein: 38,
//       carbs: 55,
//       fat: 10,
//       rating: 4.9,
//       image:'./images/Chicken & Brown Rice Bowl.webp',
//       share: 287,
//       pros: ["High protein", "Supports workout recovery"]
//   },
//   {
//       id: 23,
//       name: "Paneer Rice Bowl",
//       category: "Muscle Gain",
//       calories: 482,
//       protein: 25,
//       carbs: 55,
//       fat: 18,
//       rating: 4.7,
//       image:'./images/Paneer Rice Bowl.jpg',
//       share: 164,
//       pros: ["Protein and energy", "Vegetarian meal option"]
//   },
//   {
//       id: 24,
//       name: "Salmon with Sweet Potato",
//       category: "Muscle Gain",
//       calories: 432,
//       protein: 32,
//       carbs: 40,
//       fat: 16,
//       rating: 4.8,
//       image:'./images/Salmon with Sweet Potato.webp',
//       share: 192,
//       pros: ["Protein-rich", "Provides healthy fats"]
//   },
//   {
//       id: 25,
//       name: "Banana Milk Protein Smoothie",
//       category: "Muscle Gain",
//       calories: 410,
//       protein: 30,
//       carbs: 50,
//       fat: 10,
//       rating: 4.6,
//       image:'./images/Banana Milk Protein Smoothie.webp',
//       share: 147,
//       pros: ["Convenient post-workout drink", "Provides protein and energy"]
//   }
// ];
let recipeData = [];
let filter_data = [];

async function getRecipeData() {
    try {
        const response = await fetch("./category.json");

        if (!response.ok) {
            throw new Error("Failed to load JSON file");
        }

        recipeData = await response.json();
        filter_data = [...recipeData];
        displayRecipes(recipeData);

        return recipeData;

    } catch (error) {
        console.error("Error:", error);
    }
}

getRecipeData();
const recipeList = document.getElementById("recipe-list");

async function displayRecipes(recipeData) {
    if(!recipeList) return;
    recipeList.innerHTML = "";

    if (recipeData.length === 0) {
        recipeList.innerHTML = "<p>No results found.</p>";
        return;
    }
  
    recipeData.forEach(recipe => {
        recipeList.innerHTML +=`
        <div class="recipe-card">
          <div class="recipe-image">
            <img src="${recipe?.image }" alt="${recipe.name}" />
          </div>
          <h3 class="recipe-name">${recipe.name}</h3>
          <div class="nutrition-info">
              <div class="nutrition-item">
                  <h5>${recipe.calories ?? 0}</h5>
                  <p>calories</p>
              </div>
          
              <div class="nutrition-item">
                  <h5>${recipe.protein ?? 0}g</h5>
                  <p>protein</p>
              </div>
          
              <div class="nutrition-item">
                  <h5>${recipe.carbs ?? 0}g</h5>
                  <p>carbs</p>
              </div>
          
              <div class="nutrition-item">
                  <h5>${recipe.fat ?? 0}g</h5>
                  <p>fat</p>
              </div>
          </div>
          ${recipe.pros ? `<div class="recipe-description">${recipe.pros}</div>` : ''}
          <div class="recipe-rating"><p><span class="star">★</span> ${recipe.rating ?? 4.8}</p></div>
        </div>
      `;
    });
}

document.querySelectorAll(".select-box").forEach((box) => {
    const button = box.querySelector(".select-btn");
    const menu = box.querySelector(".select-menu");
    const label = button.querySelector("span");
  
    button.addEventListener("click", () => {
      document.querySelectorAll(".select-box").forEach((other) => {
        if (other !== box) other.classList.remove("open");
      });
  
      box.classList.toggle("open");
    });
  
    menu.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", () => {
        label.textContent = item.textContent;

        menu.querySelectorAll("li").forEach((li) => {
          li.classList.remove("active");
        });
  
        item.classList.add("active");
        box.dataset.value = item.dataset.value;
        box.classList.remove("open");
      });
    });
  });
  
  document.addEventListener("click", (event) => {
    document.querySelectorAll(".select-box").forEach((box) => {
      if (!box.contains(event.target)) {
        box.classList.remove("open");
      }
    });
  });
  
  const selectBoxes = document.querySelectorAll(".select-box");

selectBoxes.forEach((box) => {
  const button = box.querySelector(".select-btn");
  const menu = box.querySelector(".select-menu");
  const label = button.querySelector("span");

  menu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      const value = item.dataset.value;
      const filter = box.dataset.filter;

      label.textContent = item.textContent;

      menu.querySelectorAll("li").forEach((li) => {
        li.classList.remove("active");
      });

      item.classList.add("active");
      box.classList.remove("open");

      filterBy(filter,value);
    });
  });
});

const searchInputField = document.querySelector("#category-search");
if(searchInputField){
    searchInputField.addEventListener("input", (event) => {
        const searchText = event.target.value.trim().toLowerCase();
    
        const filteredRecipes = recipeData.filter((recipe) => {
            return recipe.name.toLowerCase().includes(searchText);
        });
        filter_data = filteredRecipes;
        displayRecipes(filteredRecipes);
    });
}
// filter data
function filterBy(type, filterData) {

    var filteredRecipes= [];
    if(type == ''){
      displayRecipes(recipeData);
      return;
    }
  
    if(type == 'sort'){
      filteredRecipes = recipeData.sort((a, b) =>{
          if(filterData == 'low-high')
              return a.price - b.price
  
          return b.price-a.price
      });
    }else{
      filteredRecipes = recipeData.filter(recipe => {
          if(type == 'category'){
            return filterData === "All" || recipe.category == filterData;
          }else{
            return recipe
          }
        });
    }
    filter_data = filteredRecipes;
    displayRecipes(filteredRecipes);
  }
const restFilter = document.getElementById('reset_filter');
if(restFilter){
    restFilter.addEventListener('click', () =>{
        document.getElementById('category-search').value = '';
        document.querySelectorAll(".select-box").forEach((box) => {
            resetSelectBox(box);
        });
        document.querySelectorAll(".description-filter").forEach((checkbox) => {
            checkbox.checked = false;
        });    
        filterBy('','');
        filter_data = recipeData;
    })
}

function resetSelectBox(box) {
    const button = box.querySelector(".select-btn");
    const menu = box.querySelector(".select-menu");
    const label = button.querySelector("span");
    
    // Reset button text
    label.textContent = label.dataset.default;

    // Reset active item
    menu.querySelectorAll("li").forEach((li) => {
        li.classList.remove("active");
    });

    // Set default option active
    const defaultItem = menu.querySelector(
        `[data-value="${box.dataset.valueDefault || "all"}"]`
    );

    if (defaultItem) {
        defaultItem.classList.add("active");
        box.dataset.value = defaultItem.dataset.value;
    }

    box.classList.remove("open");
}
