import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";

export default class Confirmation extends React.Component {
	render() {
		const { open, close, callback, id } = this.props;
		const confirm = () => {
			close();
			callback(id);
		};

		return (
			<div>
				<Modal size='md' open={open} centered={true}>
					<ModalHeader>
						This action can not be undone, Are you sure?
					</ModalHeader>
					<ModalBody>
						<Button theme='success' onClick={confirm}>
							Yes
						</Button>
						<Button
							theme='danger'
							onClick={close}
							style={{ marginLeft: "20px" }}
						>
							Close
						</Button>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
