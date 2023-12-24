import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritarState = {
  favoritos: Produto[]
}

const initialState: FavoritarState = {
  favoritos: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.favoritos.find((favorito) => favorito.id === product.id)) {
        const favoritosSemProduto = state.favoritos.filter(
          (p) => p.id !== product.id
        )
        state.favoritos = favoritosSemProduto
      } else {
        state.favoritos.push(product)
      }
    }
  }
})

export const { favoritar } = favoritarSlice.actions
export default favoritarSlice.reducer
