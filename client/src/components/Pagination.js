/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = ({
    showingUntil,
    showingFrom,
    totalResults,
    totalPagesNum,
    currentPage,
    onButtonClick,
}) => {
    const paginationPages = [];
    for (let i = 1; i <= totalPagesNum; i++) {
        paginationPages.push(
            <button
                key={i}
                disabled={currentPage === i}
                onClick={(e) => {
                    e.preventDefault();
                    if (currentPage === i) return;
                    onButtonClick(i);
                }}
            >
                {i}
            </button>
        );
    }

    return (
        <div className="bg-dark px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <button
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-dark hover:bg-gray-50"
                >
                    Previous
        </button>
                <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-dark hover:bg-gray-50"
                >
                    Next
        </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-blue">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">97</span> results
            </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                            disabled={currentPage === 1}
                            onClick={(e) => {
                                e.preventDefault();
                                if (currentPage === 1) return;
                                onButtonClick(currentPage - 1);
                            }}

                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-dark text-sm font-medium text-green hover:bg-drk-ring"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-dark border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        <a
                            href="#"
                            aria-current="page"
                            className="z-10 bg-drk-ring  border-green text-green relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            1
            </a>
                        <a
                            href="#"
                            className="bg-dark border-gray-300 text-green hover:bg-drk-ring relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            2
            </a>
                        <a
                            href="#"
                            className="bg-dark border-gray-300 text-green hover:bg-drk-ring hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        >
                            3
            </a>
                        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-dark text-sm font-medium text-green">
                            ...
            </span>
                        <a
                            href="#"
                            className="bg-dark border-gray-300 text-green hover:bg-drk-ring hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        >
                            8
            </a>
                        <a
                            href="#"
                            className="bg-dark border-gray-300 text-green hover:bg-drk-ring relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            9
            </a>
                        <a
                            href="#"
                            className="bg-dark border-gray-300 text-green hover:bg-drk-ring relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            10
            </a>
                        <button
                            disabled={currentPage === totalPagesNum}
                            onClick={(e) => {
                                e.preventDefault();
                                if (currentPage === totalPagesNum) return;
                                onButtonClick(currentPage + 1);
                            }}
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-dark text-sm font-medium text-green hover:bg-drk-ring"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                    <span className="pagination__info">
                        {showingFrom} - {showingUntil} of {totalResults} articles
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Pagination;

// return (
//     <div className="pagination">
//         <div className="pagination__buttons">
//             <button
//     disabled={currentPage === 1}
//     className={`pagination__prev ${currentPage === 1 ? "pagination__button--disabled" : ""
//         } `}
//     onClick={(e) => {
//         e.preventDefault();
//         if (currentPage === 1) return;
//         onButtonClick(currentPage - 1);
//     }}
// >
//                 <img src="./prev-icon.svg" alt="left arrow" />
//             </button>
//             <div className="pagination__pages">{paginationPages}</div>
{/* <button
    disabled={currentPage === totalPagesNum}
    className={`pagination__next ${currentPage === totalPagesNum ? "pagination__button--disabled" : ""
        } `}
    onClick={(e) => {
        e.preventDefault();
        if (currentPage === totalPagesNum) return;
        onButtonClick(currentPage + 1);
    }}
>
    <img src="./next-icon.svg" alt="right arrow" />
</button> */}
//         </div>
    //     <span className="pagination__info">
    //         {showingFrom} - {showingUntil} of {totalResults} articles
    //   </span>
//     </div>
// );
// };