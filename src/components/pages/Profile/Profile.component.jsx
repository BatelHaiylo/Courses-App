// import Table from "../../features/Table/Table.component";
import Breadcrumb from "../../features/Breadcrumb/Breadcrumb.component";
import CourseTable from "../../features/Table/Table.component";

export default function Profile() {
    return ( 
        <>
        <Breadcrumb title='profile'/>
        {/* <Table/> */}
        <CourseTable/>
        <div className='end-margin'></div>
        </>
     );
};