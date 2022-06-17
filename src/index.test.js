import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Game from './Components/Game';

describe('Game', () => {

    test('renders App component', () => {
    render(<Game />);
    });

    test('X should be displayed when first box clicked', async () => {
        render(<Game />);

        const square1 = screen.getByTestId(0);
        await square1.click();

        expect(square1.textContent).toBe('X');
    });

    test('renders default status message', () => {
        render(<Game />);
        const element = screen.getByText(/Next player:/i);
        expect(element).toBeInTheDocument;
    });

    test('on prior move selection and new move, old moves are removed', async () => {
        render(<Game />);
        //make six moves
        //create an element for each move
        const square1 = screen.getByTestId(0); //should these be set up before each test?
        const square2 = screen.getByTestId(1);
        const square3 = screen.getByTestId(2);
        const square4 = screen.getByTestId(3);
        const square5 = screen.getByTestId(4);
        const square6 = screen.getByTestId(5);
        
        //click each
        await square1.click();
        await square2.click();
        await square3.click();
        await square4.click();
        await square5.click();
        await square6.click();

        //get two of the resulting moves from the list
        const move2 = screen.getByTestId("move2");
        const move6 = screen.getByTestId("move6");

        //click the third move
        await move2.click();
        
        //then click an empty square
        await square6.click();

        //verify that the length of moves has been reduced to four
        const listItems = screen.getAllByRole('listitem');

        expect(listItems.length).toBe(4);
    });

    test('winning squares should be highlighted', async () => {
        render(<Game />);

        const square1 = screen.getByTestId(0);
        const square2 = screen.getByTestId(1);
        const square3 = screen.getByTestId(2);
        const square4 = screen.getByTestId(3);
        const square7 = screen.getByTestId(6);
        
        
        //click so that X wins
        await square1.click();
        await square2.click();
        await square4.click();
        await square3.click();
        await square7.click();



        //verify that X has won
        const listItems = screen.getByTestId('status');
        expect(listItems.innerHTML).toBe('X has won!');

        //verfiy that the winning squares are highlighted, eg: that their border has changed to red
        expect(square7).toHaveStyle('border: 2px solid red');

        
    });
});




