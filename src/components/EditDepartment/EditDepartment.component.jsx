import { useState } from "react";
import { toast } from "react-toastify";
import {
	Button,
	Col,
	FormInput,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "shards-react";
import { apiCall } from "../../api/ApiCall";
import "./EditDepartment.styles.css";
const EditDepartment = ({ toggle, open, id, name, fetch, setFetch }) => {
	const [deptName, setDeptName] = useState(name);

	const handleUpdate = () => {
		toast.promise(
			apiCall(
				"put",
				{
					deptName: deptName,
				},
				`/department/${id}`,
				onSuccess,
				onFaileure
			),
			{
				pending: "Saving ...",
			}
		);
		toggle();
	};
	const onFaileure = (error) => {
		console.log(error);
	};

	const onSuccess = (data) => {
		console.log("here is response", data);
		setFetch(!fetch);
	};
	return (
		<Modal open={open} toggle={toggle} centered={true} size='md'>
			<ModalHeader>Edit {name} Department</ModalHeader>

			<ModalBody>
				<Col md='12' className='form-group mb-4'>
					<FormInput
						md='6'
						id='feDepartment'
						placeholder='Department Name'
						name='deptname'
						value={deptName}
						onChange={(e) => setDeptName(e.target.value)}
					/>
				</Col>
			</ModalBody>
			<ModalFooter>
				<Button
					theme='success'
					style={{ zIndex: "99999999999" }}
					onClick={handleUpdate}
				>
					Update
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default EditDepartment;
