/** @format */

import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
	return (
		<div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
			<div className='flex mb-3 '>
				<PriorityDisplay />
				<div className='ml-auto'>
					<DeleteBlock />
				</div>
			</div>
			<h4>Ticket Title</h4>
			<hr className='h-px border-0 bg-page mb-2' />
			<p className='whitespace-pre-wrap'>this is the ticket description.</p>
			{/* below line will ensure that ticket cards are of same size regardless of their content length*/}
			<div className='flex-grow'></div>
			<div className='flex mt-2'>
				<div className='flex flex-col'>
					<p className='text-xs my-1'>12/17/2023 6:06PM</p>

					<ProgressDisplay />
				</div>
				<div className='ml-auto flex-items-end'>
					<StatusDisplay />
				</div>
			</div>
		</div>
	);
};

export default TicketCard;