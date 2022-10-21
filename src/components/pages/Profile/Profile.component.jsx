// import Table from "../../features/Table/Table.component";
import Breadcrumb from "../../features/Breadcrumb/Breadcrumb.component";
import CourseTable from "../../features/Table/Table.component";

export default function Profile() {
    return ( 
        <>
        <Breadcrumb title='profile'/>
        {/* <Table/> */}
        <div className="profile-table"><CourseTable/></div>
        <div className='end-margin'></div>
        </>
     );
};