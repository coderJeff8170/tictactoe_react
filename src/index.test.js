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

        const square1 = screen.getByTestId('square0');
        await square1.click();

        expect(square1.textContent).toBe('X');
    });

    test('renders default status message', () => {
        render(<Game />);
        const status = screen.getByTestId('status')
        expect(status.innerHTML).toContain('Next player:');
    });

    test('on prior move selection and new move, old moves are removed', async () => {
        render(<Game />);
        //make six moves
        //create an element for each move
        const square1 = screen.getByTestId('square0'); //should these be set up before each test?
        const square2 = screen.getByTestId('square1');
        const square3 = screen.getByTestId('square2');
        const square4 = screen.getByTestId('square3');
        const square5 = screen.getByTestId('square4');
        const square6 = screen.getByTestId('square5');
        
        //click each
        await square1.click();
        await square2.click();
        await square3.click();
        await square4.click();
        await square5.click();
        await square6.click();

        //get two of the resulting moves from the list
        const move2 = screen.getByTestId("move2");
        // const move6 = screen.getByTestId("move6");

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

        const square1 = screen.getByTestId('square0');
        const square2 = screen.getByTestId('square1');
        const square3 = screen.getByTestId('square2');
        const square4 = screen.getByTestId('square3');
        const square7 = screen.getByTestId('square6');
        
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
        setTimeout(() => {
            expect(square1).toHaveStyle('border: 2px solid red');
            expect(square4).toHaveStyle('border: 2px solid red');
            expect(square7).toHaveStyle('border: 2px solid red');
        }, 200);
        
    });

    test('status should show O has won when O has won', async () => {
        render(<Game />);

        const square1 = screen.getByTestId('square0');
        const square2 = screen.getByTestId('square1');
        const square3 = screen.getByTestId('square2');
        const square5 = screen.getByTestId('square4');
        const square4 = screen.getByTestId('square3');
        const square8 = screen.getByTestId('square7');
        
        //click so that O wins 1,2,3,5,4,8
        await square1.click();
        await square2.click();
        await square3.click();
        await square5.click();
        await square4.click();
        await square8.click();

        //verify that O has won
        const listItems = screen.getByTestId('status');
        expect(listItems.innerHTML).toBe('O has won!');
    })


});




