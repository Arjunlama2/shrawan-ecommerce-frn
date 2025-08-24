import React from 'react'
import { MdDashboard } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { Link } from 'react-router';

const menu = [{
    title: "Dashboard",
    path: "/admin",
    icon: <MdDashboard />
},
{
    title: "Product",
    path: "/admin/product",
    icon: <CiShop />
},
{
    title: "Orders",
    path: "/admin/orders",
    icon: <CiShop />
}
]

function Sidebar() {
    return (
        <div>
            {
                menu.map(el => {
                    return (
                        <Link  to={el.path} className='flex gap-5 items-center '>
                            {
                                el.icon
                            }
                            <p>{el.title}</p>

                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Sidebar