import React, {useMemo} from 'react';
import {useQueryClient} from "react-query";


import {
    Container,
    Background,
    Title,
    EventContainer,
    EventTitle,
    EventDescription,
    EventPlace,
    EventBottomRow, EventTime, STag
} from "./Popup.styled";
import {getFormattedDate} from "../../libs/helpers";

function Popup({ top, left, maxHeight, onBGClick, eventIds }) {
    const queryClient = useQueryClient();
    const cachedEvents = useMemo(() => {
        const events = queryClient.getQueryData(['EVENTS']);
        if (!events) {
            return [];
        }
        return events.filter((event) => eventIds.includes(event.id));
    }, [queryClient, eventIds]);
    const cachedTags = useMemo(() => {
        const tags = queryClient.getQueryData(['TAGS']);
        if (!tags) {
            return [];
        }
        return tags;
    }, [queryClient]);


    return (
        <>
            <Background onClick={onBGClick} />
            <Container top={top} left={left} maxHeight={maxHeight}>
                <Title>Events</Title>
                {
                    cachedEvents.map(event => (
                        <EventContainer key={`event-${event.id}`}>
                            <EventTitle>{event.name}</EventTitle>
                            <EventDescription>{event.description}</EventDescription>
                            <EventPlace>{event.place}</EventPlace>
                            <EventBottomRow>
                                <EventTime type={event.type}>
                                    {getFormattedDate(event.date)}
                                </EventTime>
                                {
                                    cachedTags.filter((t) => t.type === event.type).map((t, i) => <STag key={`tag-${i}`} type={t.type} text={t.text} />)
                                }
                            </EventBottomRow>
                        </EventContainer>
                    ))
                }
            </Container>
        </>
    )
}

export default Popup;
