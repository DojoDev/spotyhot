import React from 'react';
import {render,waitForElement,fireEvent} from '@testing-library/react';
import SearchBar from'./SearchBar';

describe('Tests for SearchBar component', ()=>{
    it('Should search new term for track music has been submitted',async ()=>{
        // renderizar o component
        const {getByTestId} = render(<SearchBar/>)
        // buscar o input
        const fieldNode = await waitForElement(
            ()=> getByTestId('form-field')
        )
        console.log(fieldNode)
        //digital no input
        const newPlaytist = 'testing';
        fireEvent.change(
            fieldNode,{
                target:{value:newPlaytist}
            }
        )
        // buscar albúns
        expect(fieldNode.value).toEqual(newPlaytist)

        //buscar botão
        const btnNode = await waitForElement(
            ()=> getByTestId('form-btn')
        )
      
       
    })
})