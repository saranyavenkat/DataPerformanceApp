import React from 'react';
import BreadcrumbsMat from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BreadCrumbs = (props:any) => {
    return (
        <div>
            <BreadcrumbsMat separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" href="/home"> Home</Link>
                {props.showPerformance &&
                <Link color="inherit" href="/performance"> Performance Data</Link>
                }
                <Typography color="textPrimary">{props.label}</Typography>
            </BreadcrumbsMat>
        </div>
    );
}

export default BreadCrumbs;
