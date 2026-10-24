// 1. Master Menu Database with Detailed Step-by-Step Cooking Instructions
var masterMenu = [
  // BREAKFAST
  { 
    id: 'm1', 
    name: 'Pancakes', 
    category: 'Breakfast', 
    time: '15 mins', 
    items: ['Flour', 'Milk', 'Eggs', 'Sugar', 'Butter'],
    steps: '1. Mix flour, milk, sugar, and eggs in a bowl until smooth.\n2. Heat a buttered pan on medium flame.\n3. Pour batter, flip when bubbles form, and cook until golden brown.'
  },
  { 
    id: 'm2', 
    name: 'Avocado Toast', 
    category: 'Breakfast', 
    time: '5 mins', 
    items: ['Bread', 'Avocado', 'Egg', 'Pepper', 'Salt'],
    steps: '1. Toast bread slices until crisp.\n2. Mash ripe avocado with salt and pepper.\n3. Spread over toast and top with a sunny-side-up egg.'
  },
  { 
    id: 'm3', 
    name: 'Masala Dosa', 
    category: 'Breakfast', 
    time: '20 mins', 
    items: ['Dosa Batter', 'Potato', 'Onion', 'Oil', 'Spices'],
    steps: '1. Spread batter thin on a hot tawa in circular motion.\n2. Add oil and roast till golden and crisp.\n3. Fill cooked spiced potato masala inside and fold.'
  },

  // LUNCH
  { 
    id: 'm4', 
    name: 'Tomato Pasta', 
    category: 'Lunch', 
    time: '20 mins', 
    items: ['Pasta', 'Tomatoes', 'Garlic', 'Olive Oil', 'Herbs'],
    steps: '1. Boil pasta in salted water until al dente, then drain.\n2. Saute garlic and fresh tomato puree in olive oil for 5 mins.\n3. Toss pasta into the tomato sauce and sprinkle herbs.'
  },
  { 
    id: 'm5', 
    name: 'Paneer Masala', 
    category: 'Lunch', 
    time: '25 mins', 
    items: ['Paneer', 'Butter', 'Tomatoes', 'Onion', 'Cream'],
    steps: '1. Lightly saute paneer cubes in butter.\n2. Prepare tomato-onion gravy with Indian spices and simmer.\n3. Add paneer cubes and cream, cook for 3 mins and serve.'
  },
  { 
    id: 'm6', 
    name: 'Lemon Rice', 
    category: 'Lunch', 
    time: '15 mins', 
    items: ['Cooked Rice', 'Lemon Juice', 'Peanuts', 'Mustard Seeds', 'Turmeric'],
    steps: '1. Heat oil, splutter mustard seeds, curry leaves, and roast peanuts.\n2. Add turmeric powder and fresh lemon juice off the heat.\n3. Mix cooked rice gently until evenly yellow.'
  },

  // DINNER
  { 
    id: 'm7', 
    name: 'Veg Stir Fry', 
    category: 'Dinner', 
    time: '15 mins', 
    items: ['Broccoli', 'Carrots', 'Capsicum', 'Soy Sauce', 'Garlic'],
    steps: '1. Chop broccoli, carrots, and capsicum into bite-size pieces.\n2. Stir-fry garlic and veggies on high flame for 5 minutes.\n3. Add soy sauce, toss well, and serve hot.'
  },
  { 
    id: 'm8', 
    name: 'Mushroom Rice', 
    category: 'Dinner', 
    time: '30 mins', 
    items: ['Rice', 'Mushrooms', 'Cheese', 'Garlic', 'Butter'],
    steps: '1. Saute sliced mushrooms and garlic in butter until soft.\n2. Add washed rice and water, cook till fluffy.\n3. Stir in cheese until rich and creamy.'
  },
  { 
    id: 'm9', 
    name: 'Chapati & Dal', 
    category: 'Dinner', 
    time: '25 mins', 
    items: ['Wheat Flour', 'Yellow Lentils', 'Tomatoes', 'Ghee', 'Cumin'],
    steps: '1. Roll wheat dough into thin circles and cook on hot tawa.\n2. Boil lentils with turmeric and tomatoes.\n3. Temper dal with cumin seeds roasted in ghee.'
  },

  // SNACKS
  { 
    id: 'm10', 
    name: 'Chicken Salad', 
    category: 'Snacks', 
    time: '20 mins', 
    items: ['Grilled Chicken', 'Lettuce', 'Tomatoes', 'Cucumber', 'Olive Oil'],
    steps: '1. Chop grilled chicken, fresh lettuce, and tomatoes.\n2. Toss ingredients in a bowl with olive oil and pepper.\n3. Garnish with cucumber slices and serve chilled.'
  },
  { 
    id: 'm11', 
    name: 'Egg Omelette', 
    category: 'Snacks', 
    time: '10 mins', 
    items: ['Eggs', 'Cheese', 'Onions', 'Green Chilies', 'Butter'],
    steps: '1. Whisk eggs with chopped onions, chilies, and salt.\n2. Pour onto a heated buttered pan.\n3. Add cheese in center, fold in half when cooked, and serve.'
  },
  { 
    id: 'm12', 
    name: 'French Fries', 
    category: 'Snacks', 
    time: '15 mins', 
    items: ['Potatoes', 'Oil', 'Salt', 'Paprika'],
    steps: '1. Cut potatoes into strips and dry thoroughly.\n2. Deep fry in hot oil until golden and crispy.\n3. Sprinkle salt and paprika immediately while hot.'
  }
];

// 2. Days & Categories Setup
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

// weeklySchedule object to store assigned dishes
var weeklySchedule = {};
for (var i = 0; i < days.length; i++) {
  weeklySchedule[days[i]] = { Breakfast: null, Lunch: null, Dinner: null, Snacks: null };
}

// 3. Render Center Master Menu List with Instructions
function renderMasterMenu() {
  var container = document.getElementById('master-menu-container');
  var html = '';

  for (var c = 0; c < categories.length; c++) {
    var cat = categories[c];
    html += '<div class="bg-orange-50/60 p-3 rounded-xl border border-orange-200 mb-3">';
    html += '<h3 class="font-bold text-xs text-orange-900 uppercase mb-2">✨ ' + cat + '</h3>';
    html += '<div class="space-y-2.5">';

    for (var m = 0; m < masterMenu.length; m++) {
      var dish = masterMenu[m];
      if (dish.category === cat) {
        html += '<div draggable="true" ondragstart="drag(event)" id="' + dish.id + '" class="bg-white p-3 rounded-xl border border-orange-200 shadow-sm cursor-grab active:cursor-grabbing hover:shadow transition">';
        html += '<div class="flex justify-between items-center mb-1">';
        html += '<p class="font-bold text-xs text-gray-900">' + dish.name + '</p>';
        html += '<span class="text-[10px] bg-orange-100 text-orange-800 font-bold px-2 py-0.5 rounded-lg">⏱️ ' + dish.time + '</span>';
        html += '</div>';
        html += '<p class="text-[10px] text-gray-500 mb-1">🛒 Ingredients: ' + dish.items.join(', ') + '</p>';
        html += '<p class="text-[10px] text-gray-600 bg-orange-50/50 p-2 rounded-lg border border-orange-100 whitespace-pre-line font-medium">📝 <b>Instructions:</b>\n' + dish.steps + '</p>';
        html += '</div>';
      }
    }
    html += '</div></div>';
  }
  container.innerHTML = html;
}

// 4. Render Left Calendar (Monday to Sunday)
function renderCalendar() {
  var container = document.getElementById('calendar-container');
  container.innerHTML = '';

  for (var d = 0; d < days.length; d++) {
    var day = days[d];
    var dayCard = document.createElement('div');
    dayCard.className = "bg-indigo-50/60 border border-indigo-200 rounded-2xl p-3 shadow-sm";

    var html = '<div class="flex justify-between items-center cursor-pointer" onclick="toggleDetails(\'' + day + '\')">';
    html += '<span class="font-bold text-xs text-indigo-900">📌 ' + day + ' (Click to view/hide)</span>';
    html += '<span class="text-[10px] bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded font-bold">Expand</span>';
    html += '</div>';

    // Day slots container
    html += '<div id="details-' + day + '" class="hidden mt-3 space-y-2.5 pt-2 border-t border-indigo-200 text-xs">';

    for (var c = 0; c < categories.length; c++) {
      var type = categories[c];
      var assignedDish = weeklySchedule[day][type];

      html += '<div ondragover="allowDrop(event)" ondrop="drop(event, \'' + day + '\', \'' + type + '\')" class="bg-white p-2.5 rounded-xl border border-indigo-100 min-h-[55px] flex flex-col justify-between">';
      html += '<div class="flex justify-between items-center"><span class="font-bold text-[11px] text-indigo-800">' + type + '</span>';
      if (assignedDish) {
        html += '<button onclick="removeDish(\'' + day + '\', \'' + type + '\')" class="text-red-500 text-[10px] font-bold hover:underline">Remove</button>';
      }
      html += '</div>';

      if (assignedDish) {
        html += '<div class="mt-1">';
        html += '<div class="flex justify-between items-center"><span class="font-bold text-xs text-orange-600">' + assignedDish.name + '</span><span class="text-[9px] text-gray-500 font-semibold">⏱️ ' + assignedDish.time + '</span></div>';
        html += '<p class="text-[10px] text-gray-500 mt-1">🛒 Ingredients: ' + assignedDish.items.join(', ') + '</p>';
        html += '<p class="text-[10px] text-gray-600 mt-1 bg-amber-50 p-1.5 rounded border border-amber-100 whitespace-pre-line">📝 <b>Instructions:</b>\n' + assignedDish.steps + '</p>';
        html += '</div>';
      } else {
        html += '<p class="text-[10px] text-gray-400 italic mt-0.5">Drag & drop dish here</p>';
      }

      html += '</div>';
    }

    html += '</div>';
    dayCard.innerHTML = html;
    container.appendChild(dayCard);
  }
}

// 5. Toggle Day Details Accordion
function toggleDetails(day) {
  var box = document.getElementById('details-' + day);
  box.classList.toggle('hidden');
}

// 6. Drag and Drop Helper Functions
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev, day, mealType) {
  ev.preventDefault();
  var dishId = ev.dataTransfer.getData("text");

  var foundDish = null;
  for (var i = 0; i < masterMenu.length; i++) {
    if (masterMenu[i].id === dishId) {
      foundDish = masterMenu[i];
      break;
    }
  }

  if (foundDish) {
    weeklySchedule[day][mealType] = foundDish;
    renderCalendar();
    document.getElementById('details-' + day).classList.remove('hidden');
    updateGroceryList();
  }
}

// 7. Remove Specific Dish from Slot
function removeDish(day, mealType) {
  weeklySchedule[day][mealType] = null;
  renderCalendar();
  document.getElementById('details-' + day).classList.remove('hidden');
  updateGroceryList();
}

// 8. Auto-Generate Right Side Grocery List
function updateGroceryList() {
  var allItems = [];

  for (var d = 0; d < days.length; d++) {
    var dayData = weeklySchedule[days[d]];
    for (var c = 0; c < categories.length; c++) {
      var dish = dayData[categories[c]];
      if (dish && dish.items) {
        for (var k = 0; k < dish.items.length; k++) {
          var item = dish.items[k];
          if (allItems.indexOf(item) === -1) {
            allItems.push(item);
          }
        }
      }
    }
  }

  var container = document.getElementById('grocery-list-container');
  if (allItems.length > 0) {
    var html = '';
    for (var i = 0; i < allItems.length; i++) {
      html += '<li class="flex items-center gap-2 bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-xs font-semibold text-amber-900">';
      html += '<input type="checkbox" class="w-3.5 h-3.5 cursor-pointer"> 🛒 ' + allItems[i];
      html += '</li>';
    }
    container.innerHTML = html;
  } else {
    container.innerHTML = '<li class="italic text-gray-400">No meals scheduled yet. Drag dishes to calendar!</li>';
  }
}

// Initial Run on Page Load
renderMasterMenu();
renderCalendar();