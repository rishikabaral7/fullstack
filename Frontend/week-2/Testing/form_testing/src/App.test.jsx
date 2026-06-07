import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';


test("Show success message after login", async () => {
    render(<App />);
    const button = screen.getByRole('button');
await userEvent.click(button);

expect(screen.getByText('Success')).toBeInTheDocument();

});