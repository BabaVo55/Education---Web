    import React from "react";

    // type Column = {
    // header: string;
    // accessor: string;
    // className?: string;
    // };

    // type RenderRow = (item: any) => React.ReactNode;

    // type Data = any[]

    // type TableProps = {
    // columns: Column[];
    // renderRow: RenderRow;
    // data: Data;
    // };

    // const Table = ({ columns, renderRow, data }: TableProps) => {
    // return (
    //     <table className="w-full mt-4 ml-4">
    //     <thead>
    //         <tr className="text-left text-gray-500 text-sm">
    //         {columns.map((col) => (
    //             <th className={col.className} key={col.accessor}>
    //             {col.header}
    //             </th>
    //         ))}
    //         </tr>
    //     </thead>
    //     <tbody>{data.map(item => renderRow(item))}</tbody>
    //     </table>
    // );
    // };

    // export default Table;


// // ----------------------------------------------------------------------------


// type Columns = {
//     header:string;
//     accessor:string;
//     className?:string;
// }[];

// type RenderRow = (item:any) => React.ReactNode;

// type Data = any[];


// const Table = ({ columns, renderRow, data }: {
//     columns: Columns;
//     renderRow: RenderRow;
//     data: Data;
//   }) => {
// return (
//     <table className="w-full mt-4 ml-4">
//         <thead>
//             <tr className="text-left text-gray-500 text-sm">
//                 {columns.map((col) => (
//                     <th className={col.className} key={col.accessor}>
//                         {col.header}
//                     </th>
//                 ))}
//             </tr>
//         </thead>
//         <tbody>{data.map(item => renderRow(item))}</tbody>
        
//     </table>
// )
// }

// export default Table;     


// ----------------------------------------------------------------------------


const Table = ({columns, renderRow, data}:{
    columns:{
        header:string;
        accessor:string;
        className?:string;
    }[];
    renderRow: (item:any) => React.ReactNode;
    data:any[];
}) => {
    return (
        <table className="w-full mt-4 ml-4">
            <thead>
                <tr className="text-left text-gray-500 text-sm">
                    {columns.map((col) => (
                        <th className={col.className} key={col.accessor}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{data.map(item => renderRow(item))}</tbody>
        </table>
    )
}

export default Table;  