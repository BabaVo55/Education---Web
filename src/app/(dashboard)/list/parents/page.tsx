import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, parentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";



const columns = [
    {
        header:"Info",
        accessor: "info",
    },
    {
        header:"Student Name", 
        accessor: "studentName", 
        className: "hidden md:table-cell"
    },
    {
        header:"Phone",
        accessor: "phone",
        className: "hidden md:table-cell"
    },
    {
        header:"Address", 
        accessor: "address", 
        className: "hidden md:table-cell"
    },
    {
        header:"Actions", 
        accessor: "actions", 
        className: "hidden lg:table-cell"
    }
]

type Parents = {
    id:number;
    name:string;
    students:[];
    email?:string;
    phone:string;
    address:string; 
}

export default function ParentsListPage(){

    const renderRow = (item:Parents) => {
        return (
        <tr key={item.id} className="border-b border-gray-200 text-sm even:bg-slate-50 hover:odd:bg-ethemPurpleLight">
            <td className="flex items-center gap-4 p-4">
                <div className="flex flex-col">
                    <span  className="font-semibold">{item.name}</span>
                    <p className="text-xs text-gray-400">{item.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.students}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td className="">
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-ethemSky">
                            <Image src="/view.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role == 'admin' && <button className="w-7 h-7 flex items-center justify-center rounded-full bg-ethemPurple">
                        <Image src="/delete.png" alt="" width={16} height={16} />
                    </button>}
                </div>
            </td>
        </tr>
    )}

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
             {/* Top section */}
            <div className="flex justify-between"> 
                <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
                <div className="flex flex-col md:flex-row  items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="flex w-8 h-8 items-center justify-center rounded-full bg-ethemYellow">
                            <Image src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        <button className="flex w-8 h-8 items-center justify-center rounded-full bg-ethemYellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>
                       {role == 'admin' && <button className="flex w-8 h-8 items-center justify-center rounded-full bg-ethemYellow">
                            <Image src="/plus.png" alt="" width={14} height={14} />
                        </button>}
                    </div>
                </div>
            </div>
             {/* List section */}
            <Table columns={columns} renderRow={renderRow} data={parentsData}/>
             {/* Pagination section */}
            <Pagination />
        </div>
    )
}   