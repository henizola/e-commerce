import React from "react";
import { Link } from "react-router-dom";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Collapse,
	NavItem,
	NavLink,
} from "shards-react";

export default class UserActions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
		};

		this.toggleUserActions = this.toggleUserActions.bind(this);
	}

	toggleUserActions() {
		this.setState({
			visible: !this.state.visible,
		});
	}

	render() {
		return (
			<NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
				<DropdownToggle caret tag={NavLink} className='text-nowrap px-3'>
					<img
						className='user-avatar rounded-circle mr-2'
						src={
							// this.props.user.picture
							//   ? this.props.user.picture
							//   :
							require("../../../../images/avatars/1.png")
						}
						alt='User Avatar'
					/>{" "}
					<span className='d-none d-md-inline-block'>
						{this.props.user.name}
					</span>
				</DropdownToggle>
				<Collapse tag={DropdownMenu} right small open={this.state.visible}>
					<DropdownItem
						tag={Link}
						to={`${
							this.props.user.role === "Doctor"
								? "/doc/profile"
								: "/admin/profile"
						}`}
					>
						<i className='material-icons'>&#xE8B8;</i> Edit Profile
					</DropdownItem>
					<DropdownItem tag={Link} to={`/admin/change-password`}>
						<i className='material-icons'>&#xE8B8;</i> Change Password
					</DropdownItem>

					<DropdownItem divider />
					<DropdownItem
						tag={Link}
						to='/'
						className='text-danger'
						onClick={this.props.onLogout}
					>
						<i className='material-icons text-danger'>&#xE879;</i> Logout
					</DropdownItem>
				</Collapse>
			</NavItem>
		);
	}
}
