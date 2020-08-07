import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/first Name/i)
    const lastName = screen.getByLabelText(/last Name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    fireEvent.change(firstName, {target: {value: 'Stacey'}})
    fireEvent.change(lastName, {target: {value: 'Test'}})
    fireEvent.change(address, {target: {value: '123 main street'}})
    fireEvent.change(city, {target: {value: 'New York'}})
    fireEvent.change(state, {target: {value: 'NY'}})
    fireEvent.change(zip, {target: {value: '10000'}})

    const checkout = screen.getAllByText(/checkout/i);
    const button = checkout[1]
    fireEvent.click(button)

    const success = screen.getAllByTestId('successMessage')
    expect(success).toBeInTheDocument;
});
