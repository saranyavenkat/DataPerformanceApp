import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Snackbar from '@material-ui/core/Snackbar';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useStoreActions, useStoreState } from 'easy-peasy';
import axios from 'axios';
import moment from 'moment';
const handleClose = (reason: any, notification: any, setNotification: any) => {
  setNotification({ type: notification.type, messages: [] });
};

const getNotifMessage = (messages: any) => {
  return messages;
};

const tableIcons: any = {
  Add: React.forwardRef((props, ref) => <AddBox innerRef={ref} />),
  Check: React.forwardRef((props, ref) => <Check innerRef={ref} />),
  Clear: React.forwardRef((props, ref) => <Clear {...props} innerRef={ref} />),
  Delete: React.forwardRef((props, ref) => <DeleteOutline {...props} innerRef={ref} />),
  DetailPanel: React.forwardRef((props, ref) => <ChevronRight {...props} innerRef={ref} />),
  Edit: React.forwardRef((props, ref) => <Edit {...props} innerRef={ref} />), 
  Filter: React.forwardRef((props, ref) => <FilterList {...props} innerRef={ref} />),
  FirstPage: React.forwardRef((props, ref) => <FirstPage {...props} innerRef={ref} />),
  LastPage: React.forwardRef((props, ref) => <LastPage {...props} innerRef={ref} />),
  NextPage: React.forwardRef((props, ref) => <ChevronRight {...props} innerRef={ref} />),
  PreviousPage: React.forwardRef((props, ref) => <ChevronLeft {...props} innerRef={ref} />),
  ResetSearch: React.forwardRef((props, ref) => <Clear {...props} innerRef={ref} />),
  Search: React.forwardRef((props, ref) => <Search {...props} innerRef={ref} />),
  SortArrow: React.forwardRef((props, ref) => <ArrowUpward {...props} innerRef={ref} />),
  ThirdStateCheck: React.forwardRef((props, ref) => <Remove {...props} innerRef={ref} />),
  ViewColumn: React.forwardRef((props, ref) => <ViewColumn {...props} innerRef={ref} />)
};

const EditableTable = (props: any) => {
  const [data, setData] = useState([{
    "postId": '',
    "id": '',
    "name": "",
    "email": "",
    "body": ""
  }]);
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({ type: 'error', messages: '' });
  const addTestDataRender = useStoreActions((actions: any) => actions.testDataRender.addTestDataRender);
  const testDataRenderItems =  useStoreState(state => state.testDataRender.items.length + 1);
  async function getTestData() {
    let response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return response.data;
  }

  const findDuration = (action: any, startTime: any) => {
    var endTime = moment().format('YYYY-MM-DD, h:mm:ss:SSSSSSSSS a');
    let duration = moment.duration(moment(endTime, 'YYYY-MM-DD, h:mm:ss:SSSSSSSSS a').diff(moment(startTime, 'YYYY-MM-DD, h:mm:ss:SSSSSSSSS a')));
    let diff = moment.utc(duration.asMilliseconds()).format('HH:mm:ss:SSSSSSSSS');
    addTestDataRender({visit:testDataRenderItems, action: action, startTime: startTime, endTime: endTime, duration: diff })
  }

  useEffect(() => {    
    var startTime = moment().format('YYYY-MM-DD, h:mm:ss:SSSSSSSSS a');
    getTestData().then(result => {
      if (result) {
        setData(result);
      } else {
        setData([]);
      }
      findDuration('get test data', startTime);
    });
  }, []);
  
  return (
    <div>
      <MaterialTable icons={tableIcons}
        title={'Test Data'}
        columns={props.columns}
        data={data}
        options={{
          pageSize: 10,
          headerStyle: { background: '#1976d2' },
          rowStyle: { background: 'inherit' },
          maxBodyHeight: '340px',
        }}
        editable={{
          onRowAdd: (newData: any) =>
            new Promise((resolve: any, reject: any) => {
              var startTime = moment().format('YYYY-MM-DD, h:mm:ss:SSSSSSSSS a');
              setOpen(true);
              setNotification({ type: 'success', messages: 'Successfully Added' });
              let testData: any = data;
              testData.push(newData);
              setData([...testData]);
              findDuration('add test data', startTime);
              resolve();
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              var startTime = moment().format('YYYY-MM-DD, h:mm:ss:SSSSSSSSS a');
              setOpen(true);
              setNotification({ type: 'success', messages: 'Successfully updated' });
              setTimeout(() => {
                const dataUpdate: any = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData(dataUpdate);
                findDuration('updated test data', startTime);
                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              var startTime = moment().format('YYYY-MM-DD, h:mm:ss:SSSSSSSSS a');
              setOpen(true);
              setNotification({ type: 'success', messages: 'Successfully deleted' });
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                findDuration('deleted test data', startTime);
                resolve();
              }, 1000);
            })
        }}
      />
      <Snackbar
        onClose={(_, reason) => {
          setOpen(false);
          handleClose(reason, notification, setNotification);
        }}
        open={open}
        message={getNotifMessage(notification.messages)}
      />
    </div>
  );
};



export default EditableTable;
