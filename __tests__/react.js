import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import Profile from '../client/Pages/Profile/profile'
import SignUp from '../client/Pages/SignUp/signup'
import Login from '../client/Pages/Login/login'
import CreateEvent from '../client/Pages/CreateEvent/createEvent'
import EventBox from '../client/EventBox'
import { idleTimeoutMillis } from 'pg/lib/defaults';

describe('Unit Testing React Components', () => {
    describe('EventBox', () => {
        let event;
        const props = {
            title: 'yes',
            start_date: 'yes',
            end_date: 'no',
            activity: 'maybe',
            max_participants: 123,
            zip: 123
        };

        beforeEach(() => {
            event = render(<EventBox {...props}/>);
        });
        it('Event box should display a title, start, end, activity, max participants, and zip', () => {
            expect(event.getByText('Title:').nextSibling).toHaveTextContent(props.title);
            expect(event.getByText('Date:').nextSibling).toHaveTextContent(props.start_date);
            expect(event.getByText('End:').nextSibling).toHaveTextContent(props.end_date);
            expect(event.getByText('Activity:').nextSibling).toHaveTextContent(props.activity);
            expect(event.getByText('Number of Participants:').nextSibling).toHaveTextContent(props.max_participants);
            expect(event.getByText('Location:').nextSibling).toHaveTextContent(props.zip);

        })
    })
})