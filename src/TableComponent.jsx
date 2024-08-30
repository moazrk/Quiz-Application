import React from "react";

const TableComponent = ({ mcq ,anscheck}) => {


    return (

        <>
            <table>
                <thead>
                    <tr>

                        <th>Question</th>
                        <th>Status</th>
                    </tr>
                </thead>


                <tbody>

                    {mcq.map((item) => {
                        const correctAnswer = anscheck.find(moaz=>moaz.id===item.id)
                     return   <tr>

                            <td> {item.question}</td>
                            <td>
                                {correctAnswer?"correct":"wrong"}
                            </td>
                               

                        </tr>

})}



                </tbody>
            </table>









        </>

    )
}
export default TableComponent















