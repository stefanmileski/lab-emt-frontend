import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

export default function BooksList({ books, onDelete, onEdit }) { 

    function handlePageClick(data) {
        let selected = data.selected;
        setPage(selected);
    }

    function getBooksPage(offset, nextPageOffset) {
        return books.map((book, index) => {
            return (
            <tr key={book.id}>
                <td>{book.name}</td>
                <td>{book.category}</td>
                <td>{book.availableCopies}</td>
                <td>{book.author.name}</td>
                <td><Link to={`/books/${book.id}`} className='btn btn-success'>Details</Link></td>
                <td><button title='Delete' className='btn btn-danger' onClick={()=>onDelete(book.id)}>Delete</button></td>
                <td><Link to={`/books/edit/${book.id}`} onClick={()=>onEdit(book.id)} className='btn btn-warning'>Edit</Link></td>
            </tr>);
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(2);
    const offset = size * page;
    const nextPageOffset = offset + size;
    const pageCount = Math.ceil(books.length / size);
    const booksPaginated = getBooksPage(offset, nextPageOffset)

    return (
        <div className="container m-5">
            {/* <Link to={"/authors"} className='btn btn-primary mt-4 mb-4'>Authors</Link> */}
            <Link to={"/books/add"} className='btn btn-block btn-dark mb-4'>Add new Book</Link>
            <div>
                <div>
                    <table className='table-bordered table'>
                        <thead className='table-dark'>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Category</th>
                                <th scope='col'>Available copies</th>
                                <th scope='col'>Author</th>
                                <th scope='col'>Details</th>
                                <th scope='col'>Delete</th>
                                <th scope='col'>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booksPaginated}
                        </tbody>
                    </table>
                </div>
            </div>

            <ReactPaginate previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={<a href="/#">...</a>}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                className='pagination m-4 justify-content-center'
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'} />
        </div>
    );
}