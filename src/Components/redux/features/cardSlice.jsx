import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    // add to cart
    addToCards: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.cards.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        state.cards[itemIndex].qnty += 1;
      } else {
        state.cards.push({ ...action.payload, qnty: 1 });
      }
    },
    // Delete Card
    deleteCards: (state, action) => {
      state.cards = state.cards.filter((item) => item.id !== action.payload);
  },
    // RemoveSingleCards
    RemoveSingleCards: (state, action) => {
      const { id } = action.payload;
      const itemIndex_Dec = state.cards.findIndex((item) => item.id === id);
      if (state.cards[itemIndex_Dec].qnty >=1) {
        state.cards[itemIndex_Dec].qnty -= 1
  }
},
    // RemoveSingleCards
    RemoveAllCards: (state) => {
      state.cards = []
    
  },
},
});

//   addToCards: (state, action) => {
//     const itemIndex = state.cards.findIndex((item) => item.id === action.payload.id);
//     if (itemIndex >= 0) {
//       state.cards[itemIndex].qnty += 1;
//     } else {
//       const newItem = { ...action.payload, qnty: 1 };
//       state.cards.push(newItem);
//     }
//   },
// },
// });

export const { addToCards, deleteCards, RemoveSingleCards, RemoveAllCards } = cardsSlice.actions;

export default cardsSlice.reducer;
