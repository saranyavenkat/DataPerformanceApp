import { createStore, persist } from 'easy-peasy';
import { action } from 'easy-peasy';

const pageRenderModel = persist({
  items: [],
  addPageRender: action((state:any, payload:any) => {
    state.items.push(payload);
  })
});

const testDataRenderModel = persist({
  items:[],
  addTestDataRender: action((state:any, payload:any) => {
    state.items.push(payload);
  })
});

const testDataModel = persist({
  items:[],
  addAll: action((state:any, payload:any) => {
    state.items=payload;
  }),
  addTestData: action((state:any, payload:any) => {
    state.items.push(payload);
  })
});

const storeModel = {
  pageRender: pageRenderModel,
  testDataRender: testDataRenderModel,
  testData:  testDataModel
};

const store = createStore(storeModel);

export default store;
