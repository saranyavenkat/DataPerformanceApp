import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { useStoreActions } from 'easy-peasy';
import EditableTable from '../components/EditableTable';
const columns = [
    { title: 'Id', field: 'id', required: true, searchable: true, editable: 'onAdd' },
    { title: 'Post Id', field: 'postId', required: true, searchable: true },
    { title: 'Name', field: 'name', required: true, searchable: true },
    { title: 'Email', field: 'email', required: true, searchable: true },
    { title: 'Comments', field: 'body', required: true, searchable: true }
];

const TestDataPage: React.FunctionComponent<{}> = () => {

    const addPageRender = useStoreActions((actions: any) => actions.pageRender.addPageRender);

    const onRenderCallback = (id: any,
        phase: any,
        actualDuration: any,
        baseDuration: any,
        startTime: any,
        commitTime: any,
        interactions: any
    ) => {
        addPageRender({ id: id, phase: phase, actualDuration: actualDuration, baseDuration: baseDuration, startTime: startTime, commitTime: commitTime });
    }
    return (
        <React.Profiler id='testDataPage' onRender={onRenderCallback}>
            <div>
                <BreadCrumbs label='Test Data' />
                <h3>Test data grid</h3>
                <EditableTable columns={columns} />
            </div>
        </React.Profiler >
    );
}

export default TestDataPage;
