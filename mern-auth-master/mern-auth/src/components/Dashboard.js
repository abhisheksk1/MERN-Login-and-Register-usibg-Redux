import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import icon from "../img/user.png";
import EnhancedTable from "./EnhancedTable";

const Dashboard = ({ auth: { user } }) => {
	return (
		<div style={{ marginTop: "5rem", textAlign: "center" }}>
			<h1>Welcome, {user && user.name}</h1>
			<EnhancedTable/>
		</div>
	);
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
