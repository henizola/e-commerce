import React, { useEffect, useState } from "react";
import {
	Button,
	Col,
	FormInput,
	InputGroup,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "shards-react";
import "./TimeSelector.styles.css";
const TimeSelector = ({
	toggle,
	open,
	handleChange,
	date,
	setDate,
	fetch,
	setFetch,
}) => {
	const [valid, setValid] = useState(false);
	const [startTime, setStartTime] = useState(`${new Date().getHours()}:00`);
	const [endTime, setEndTime] = useState(`${new Date().getHours()}:30`);

	useEffect(() => {
		if (startTime > endTime) {
			setValid(false);
		} else {
			setValid(true);
		}
	}, [startTime, endTime]);

	const handleAdd = () => {
		let newSlot = {
			startHour: {
				hour: startTime.substring(0, 2),
				minute: startTime.substring(3, 5),
			},
			endHour: {
				hour: endTime.substring(0, 2),
				minute: endTime.substring(3, 5),
			},
		};
		handleChange(newSlot);

		toggle();
	};

	return (
		<Modal open={open} toggle={toggle} centered={true} size='md'>
			<ModalHeader>Edit Regular Schedule</ModalHeader>

			<ModalBody style={{ height: "fit-content" }}>
				{date && (
					<Col md='12' className='form-group mb-4'>
						<FormInput
							type='date'
							id='feBirthDate'
							placeholder='specialization'
							name='birthDate'
							onChange={(e) => setDate(new Date(e.target.value))}
						/>
					</Col>
				)}
				<InputGroup className='time-modal'>
					<label htmlFor='start' style={{ padding: "10px 20px" }}>
						Start Time
					</label>
					<FormInput
						placeholder='time'
						type='time'
						className='time-selector'
						id='start'
						value={startTime}
						onChange={(e) => setStartTime(e.target.value)}
					/>
					<label htmlFor='start' style={{ padding: "10px 20px" }}>
						End Time
					</label>
					<FormInput
						placeholder='time'
						value={endTime}
						type='time'
						id='end'
						className='time-selector'
						onChange={(e) => setEndTime(e.target.value)}
					/>
				</InputGroup>
			</ModalBody>
			<ModalFooter>
				{valid && (
					<Button
						theme='success'
						style={{ zIndex: "99999999999" }}
						onClick={handleAdd}
					>
						Add
					</Button>
				)}{" "}
			</ModalFooter>
		</Modal>
	);
};

export default TimeSelector;
