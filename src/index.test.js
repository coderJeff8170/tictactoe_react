import React from 'react';
import { render, screen } from '@testing-library/react';

import Game from './Components/Game';

describe('Game', () => {
    test('renders App component', () => {
    render(<Game />);
    });

    test('X should be displayed when first box clicked', async () => {
        render(<Game />);

        const square1 = screen.getByTestId(0);
        // console.log(square1);

        await square1.click();

        expect(square1.textContent).toBe('X');
    });

    test('renders next player verbiage', () => {
        render(<Game />);
        const element = screen.getByText(/Next player:/i);
        expect(element).toBeInTheDocument;
    });

    test('selected move becomes last move when square clicked after move selected', async () => {
        render(<Game />);
        //make six moves
        //create an element for each move
        const square1 = screen.getByTestId(0);
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
        //or verify that the last move is the square clicked on step 3.
        const listItems = screen.getAllByRole('listitem');
        // expect(square6.textContent).toBe('O');
        // expect(move3).toBeInTheDocument;
        // expect(move3.textContent).toContain('')
        expect(listItems.length).toBe(4);
    })
});




