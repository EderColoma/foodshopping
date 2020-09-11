import React, {useState} from 'react'
import { Wrapper, Container } from '../App/App.styles';
import AppHeader from '../AppHeader/AppHeader';
import AppContainer from '../AppContainer/AppContainer';
import Checkbox from '../../shared/Checkbox/Checkbox';

function App(){

    const [lettuce, setLettuce] = useState(false);

    return <Wrapper>
                <Container>
                    <AppHeader/>
                    <AppContainer
                        left={ 
                            <Checkbox title="Lettuce" 
                                value={lettuce}
                                onClick={() => setLettuce(!lettuce)}/> 
                        }
                        center={ "Selecionados" }
                        right={ "X" }
                    />
                </Container>
            </Wrapper>
}

export default App;