import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';

export const Cardlist = props => (
    <div className="card-list">
        {props.monsters.map(mon => (
            <Card key={mon.id} monster = {mon} />
        ) )}
    </div>   
);