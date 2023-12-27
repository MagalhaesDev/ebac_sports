import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favoritar'
import { RootReducer } from '../../store'
import { Produto } from '../../App'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

interface ProdutoComponentProps {
  produto: Produto
}

const ProdutoComponent = ({ produto }: ProdutoComponentProps) => {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootReducer) => state.favoritar.favoritos)

  const productsIsFavorite = itens.find((item) => item.id === produto.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(favoritar(produto))} type="button">
        {productsIsFavorite
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
