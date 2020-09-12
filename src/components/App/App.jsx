import React, {useEffect, useState} from 'react'
import { Wrapper, Container } from '../App/App.styles';
import AppHeader from '../AppHeader/AppHeader';
import AppContainer from '../AppContainer/AppContainer';
import LineChart from '../../shared/LineChart/LineChart';
import ShoppingList from '../ShoppingList/ShoppingList';
import productMocks from '../../mocks/productsList.json';
import extractPercentage from '../../utils/extractPercentage'

function App(){

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const [products, setProducts] = useState(productMocks.products)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let newSelectedProducts = products.filter(p => p.checked)
        setSelectedProducts(newSelectedProducts)
    }, [products])

    useEffect(() =>{
        const total = selectedProducts.map(p => p.price)
                                      .reduce((a, b) => a + b, 0)

        setTotalPrice(total)
    }, [selectedProducts])

    function handleToggle(id){
        const newProducts = products.map(product =>
            product.id === id ? {...product, checked: !product.checked} : product
        )

        setProducts(newProducts)
    }

    return <Wrapper>
                <Container>
                    <AppHeader/>
                    <AppContainer
                        left={ 
                            <ShoppingList 
                                title="available products"
                                products={products}
                                onToggle={handleToggle}
                            />
                             }
                        center={ 
                            <ShoppingList 
                                title="your shopping list"
                                products={selectedProducts}
                                onToggle={handleToggle}
                            /> 
                               }
                        right={
                            <div>
                                <LineChart 
                                    title={"Healthy"} 
                                    color={colors[0]}  
                                    percentage={
                                            extractPercentage(selectedProducts.length, selectedProducts.filter(sp => sp.tags.includes('healthy')).length)
                                        }
                                /> 
                                <LineChart 
                                    title={"Junk"} 
                                    color={colors[1]}  
                                    percentage={
                                        extractPercentage(selectedProducts.length, selectedProducts.filter(sp => sp.tags.includes('junk')).length)
                                    }
                                /> 
                                <LineChart 
                                    title={"Cleaning"} 
                                    color={colors[2]} 
                                    percentage={
                                        extractPercentage(selectedProducts.length, selectedProducts.filter(sp => sp.tags.includes('cleaning')).length)
                                    } />
                                <LineChart 
                                    title={"Others"} 
                                    color={colors[3]} 
                                    percentage={
                                        extractPercentage(selectedProducts.length, selectedProducts.filter(sp => sp.tags.includes('others')).length)
                                    } />

                        <       div style={{ marginTop: 12 }}>
                                    <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
                                        total price:
                                    </h2>
                                    <div style={{ fontSize: 24 }}>
                                        { totalPrice.toLocaleString('en-us', {
                                            minimumFractionDigits: 2,
                                            style: 'currency',
                                            currency: 'USD'
                                        }) }
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </Container>
            </Wrapper>
}

export default App;