import React, { useEffect, useState } from 'react';
import { useStoreState } from 'easy-peasy';
import BreadCrumbs from '../components/BreadCrumbs';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import AccessTime from '@material-ui/icons/AccessTime';
import Timer from '@material-ui/icons/Timer';

const PerformanceDetails = (props: any) => {
    const testDataitems = useStoreState(state => state.testDataRender.items);
    const [visitId] = useState(props.match.params.id);
    const [performanceData, setPerformanceData] = useState({
        visit: '', action: '', startTime: '',
        endTime: '', duration: ''
    });
    
    useEffect(() => {
        const performanceData = testDataitems.find((row: any) => {
           return parseInt(row.visit) === parseInt(visitId);
        });
        setPerformanceData(performanceData);
    }, [visitId, testDataitems])
    return (
        <div>
            <BreadCrumbs label='Performance Details' showPerformance={true} />
            <h3>Performance Details </h3>
            {performanceData &&
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Visit Id" secondary={performanceData.visit} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Action" secondary={performanceData.action} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccessTime />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Start time" secondary={performanceData.startTime} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccessTime />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="End time" secondary={performanceData.endTime} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Timer/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Duration time" secondary={performanceData.duration} />
                </ListItem>
            </List>
            }
        </div>
    );
}

export default PerformanceDetails;
