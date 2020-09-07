import React from 'react';
import { useStoreState } from 'easy-peasy';

import BreadCrumbs from '../components/BreadCrumbs';
import MaterialTable from '../components/MaterialTable';

const columns = [
    { title: 'Visit Id', field: 'visit'},
    { title: 'Action', field: 'action'},
    { title: 'Start time', field: 'startTime' },
    { title: 'End time', field: 'endTime'},
    { title: 'Duration in seconds', field: 'duration'}
 ];
 
 const renderColumns = [ 
    { title: 'Id', field: 'id'},
    { title: 'Phase', field: 'phase'},
    { title: 'actualDuration', field: 'actualDuration'},
    { title: 'baseDuration', field: 'baseDuration'},
    { title: 'startTime', field: 'startTime'},
    { title: 'commitTime', field: 'commitTime'},

];

const PerformancePage = () => {
        const testDataitems =  useStoreState(state => state.testDataRender.items);
        const pageDataitems = useStoreState(state => state.pageRender.items);
        // const addProductToBasket = useStoreActions((actions:any) => actions.basket.addProduct);
  return (
    <div>   
        <BreadCrumbs label='Performance Data'/>
        <h3>Test data loading Performance</h3>
        <MaterialTable testData={testDataitems}  columns={columns}/>
        <h3>Component loading Performance</h3>
        <MaterialTable testData={pageDataitems}  columns={renderColumns}/>
    </div>
  );
}

export default PerformancePage;
