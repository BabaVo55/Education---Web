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
        <div className="w-full mt-4 border flex">
            <thead className="">
                <tr className="text-left text-gray-500 text-sm">
                    {columns.map((col) => (
                        <th key={col.accessor}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{data.map(item => renderRow(item))}</tbody>
        </div>
    )
}

export default Table;               