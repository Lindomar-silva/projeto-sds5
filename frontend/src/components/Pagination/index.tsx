import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: Props) => {

    return (
        <div className="pagination justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)} >Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
        // <nav aria-label="Page navigation example">
        //     <ul className="pagination justify-content-center">
        //         <li className="page-item disabled">
        //             <a className="page-link">Previous</a>
        //         </li>
        //         <li className="page-item"><a className="page-link" href="#">1</a></li>
        //         <li className="page-item"><a className="page-link" href="#">2</a></li>
        //         <li className="page-item"><a className="page-link" href="#">3</a></li>
        //         <li className="page-item">
        //             <a className="page-link" href="#">Next</a>
        //         </li>
        //     </ul>
        // </nav>
    )
}

export default Pagination;