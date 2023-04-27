import React from 'react';
import {Button} from 'material-table';
import MaterialTable from 'material-table';
import {useState} from 'react';
import { forwardRef } from 'react';
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
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import styles from './Table.module.css';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';


const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function PatchedPagination(props: TablePaginationProps) {
  const {
    ActionsComponent,
    onChangePage,
    onChangeRowsPerPage,
    ...tablePaginationProps
  } = props;

  return (
    <TablePagination
      {...tablePaginationProps}
      // @ts-expect-error onChangePage was renamed to onPageChange
      onPageChange={onChangePage}
      onRowsPerPageChange={onChangeRowsPerPage}
      ActionsComponent={(subprops) => {
        const { onPageChange, ...actionsComponentProps } = subprops;
        return (
          // @ts-expect-error ActionsComponent is provided by material-table
          <ActionsComponent
            {...actionsComponentProps}
            onChangePage={onPageChange}
          />
        );
      }}
    />
  );
}

const api = axios.create({
  baseURL: `http://localhost:8000/api`
})

  function Tablic() {
    const [data, setData] = React.useState([]);
    const [columns, setColumns] = useState([
      {title: "id", field: "id", hidden: true},
      { title: "Name", field: "name",},
      { title: "Surname", field: "surname"},
      { title: "Phone", field: "phone_number" },
      { title: "Acc", field: "status",render: rowData => rowData.status ? rowData="Manager" :rowData="Client",
      lookup:{false:"Client",true:"Manager"}
      },
      { title: "Tariff", field: "season_ticket_name",type: '',render: rowData => rowData.season_ticket_name,
      lookup:{"basic":"Basic","basic_plus":"Basic+","unlimited":"unlimited"} 
      }

    ]);

    const [iserror, setIserror] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])
  React.useEffect(() => { 
    api.get("/organizer")
        .then(res => {              
            setData(res.data)
         })
         .catch(error=>{
             console.log("Error")
         })
  }, [])

  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = []
    if(newData.name === ""){
      errorList.push("Please enter name")
    }
    if(newData.surname === ""){
      errorList.push("Please enter surname")
    }
    if(newData.phone_number === ""){
      errorList.push("Please enter a valid phone")
    }
    if(newData.season_ticket_name === ""){
      errorList.push("Please enter a valid season ticket")
    }

    if(errorList.length < 1){
      api.put("/organizer/"+newData.id, newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve()
        setIserror(false)
        setErrorMessages([])
      })
      .catch(error => {
        setErrorMessages(["Update failed! Server error"])
        setIserror(true)
        resolve()
        
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()

    }
    
  }

  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []
    if(newData.name === ""){
      errorList.push("Please enter name")
    }
    if(newData.surname === ""){
      errorList.push("Please enter surname")
    }
    if(newData.phone_number === ""){
      errorList.push("Please enter a valid phone")
    }
    if(newData.season_ticket_name === ""){
      errorList.push("Please enter a valid season ticket")
    }

    if(errorList.length < 1){ //no error
      api.post("/organizer", newData)
      .then(res => {
        let dataToAdd = [...data];
        dataToAdd.push(newData.name,newData.surname, newData.phone_number,newData.season_ticket_name, 1);
        setData(dataToAdd);
        resolve()
        setErrorMessages([])
        setIserror(false)
      })
      .catch(error => {
        setErrorMessages(["Cannot add data. Server error!"])
        setIserror(true)
        resolve()
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }

    
  }

  const handleRowDelete = (oldData, resolve) => {
    
    api.delete("/organizer/"+oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }

    return (     
      <MaterialTable
      icons={tableIcons}
        title=''
        columns={columns}
        data={data}
        components={{
          Pagination: PatchedPagination,
        }}
        options={{
          pageSize: 12,
          pageSizeOptions: [12, 15, 25, 50],

      }}
        editable={{
          
          
          onRowAdd: (newData) =>
          new Promise((resolve) => {
            handleRowAdd(newData, resolve)
            console.log(newData);
          }),
            onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
                handleRowUpdate(newData, oldData, resolve);
                
            }),
            onRowDelete: (oldData) =>
            new Promise((resolve) => {
              handleRowDelete(oldData, resolve)
            }),
        }}
      />
      
    )
  }
export default Tablic