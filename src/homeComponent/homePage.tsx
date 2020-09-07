import React from 'react';
import { Paper, Button } from '@material-ui/core';

const homePage: React.FunctionComponent<{}> = () => {
    return (
        <div className="align-middle">
            <div><h1>Welcome</h1></div>
            <div>Lets analyze the performance of test data </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
                <Paper style={{margin:'10px'}}>
                    <div style={{margin:'10px'}}>
                        <Button variant="contained" color="primary" href='/testData'>
                            Click here to see the test data.
                        </Button>
                    </div>
                    <div style={{margin:'10px'}}>
                        <Button variant="contained" color="primary" href='/performance'>
                            Click here to see the rendering performance of test data.
                        </Button>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default homePage;
