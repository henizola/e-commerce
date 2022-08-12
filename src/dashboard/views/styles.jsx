import styled from "styled-components";

export const CustomContainer = styled.div`
	:root {
		--blue: #15558d;
		--indigo: #674eec;
		--purple: #8445f7;
		--pink: #ff4169;
		--red: #c4183c;
		--orange: #fb7906;
		--yellow: #ffb400;
		--green: #17c671;
		--teal: #1adba2;
		--cyan: #00b8d8;
		--white: #fff;
		--gray: #868e96;
		--gray-dark: #343a40;
		--primary: #15558d;
		--secondary: #5a6169;
		--success: #17c671;
		--info: #00b8d8;
		--warning: #ffb400;
		--danger: #c4183c;
		--light: #fbfbfb;
		--dark: #212529;
		--breakpoint-xs: 0;
		--breakpoint-sm: 576px;
		--breakpoint-md: 768px;
		--breakpoint-lg: 992px;
		--breakpoint-xl: 1200px;
		--font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, "Helvetica Neue", Arial, sans-serif;
		--font-family-monospace: "Roboto Mono", Menlo, Monaco, Consolas,
			"Liberation Mono", "Courier New", monospace;
	}

	@media (max-width: 575.98px) {
		html {
			font-size: 15px;
		}
	}

	body {
		font-size: 1rem;
		font-weight: 300;
		color: #5a6169;
		background-color: #fff;
	}

	a {
		color: #15558d;
		text-decoration: none;
	}
	a:hover {
		color: #0056b3;
		text-decoration: underline;
	}

	b,
	strong {
		font-weight: 500;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 0;
		margin-bottom: 0.5rem;
	}

	.h1,
	.h2,
	.h3,
	.h4,
	.h5,
	.h6 {
		display: block;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	.h1,
	.h2,
	.h3,
	.h4,
	.h5,
	.h6 {
		margin-bottom: 0.75rem;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, sans-serif;
		font-weight: 400;
		color: #3d5170;
	}

	h1,
	.h1 {
		font-size: 3.052rem;
		letter-spacing: -0.0625rem;
		line-height: 3rem;
	}

	h2,
	.h2 {
		font-size: 2.441rem;
		letter-spacing: -0.0625rem;
		line-height: 2.25rem;
	}

	h3,
	.h3 {
		font-size: 1.953rem;
		line-height: 2.25rem;
	}

	h4,
	.h4 {
		font-size: 1.563rem;
		line-height: 2rem;
	}

	h5,
	.h5 {
		font-size: 1.25rem;
		line-height: 1.5rem;
	}

	h6,
	.h6 {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.lead {
		line-height: 1.875rem;
	}

	.display-1,
	.display-2,
	.display-3,
	.display-4 {
		margin-bottom: 0.75rem;
	}

	.display-1 {
		font-size: 7.451rem;
		line-height: 1;
	}

	.display-2 {
		font-size: 5.96rem;
		line-height: 1;
	}

	.display-3 {
		font-size: 4.768rem;
		line-height: 1;
	}

	.display-4 {
		font-size: 3.815rem;
		line-height: 1;
	}

	p {
		margin-bottom: 1.75rem;
	}

	hr {
		margin-top: 1.125rem;
		margin-bottom: 1.125rem;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	small,
	.small {
		font-size: 80%;
		font-weight: 300;
	}

	mark,
	.mark {
		padding: 0.2em;
		background-color: #fff09e;
	}

	.blockquote {
		margin-bottom: 0.75rem;
		font-size: 1.5rem;
	}

	.blockquote-footer {
		font-size: 1.125rem;
	}

	.img-thumbnail {
		padding: 0;
		border: none;
		background-color: #fff;
		border-radius: 0.375rem;
		box-shadow: none;
	}

	.figure-img {
		margin-bottom: 0.75rem;
	}

	.figure-caption {
		font-size: 1rem;
		color: #868e96;
	}

	code,
	kbd,
	pre,
	samp {
		font-family: "Roboto Mono", Menlo, Monaco, Consolas, "Liberation Mono",
			"Courier New", monospace;
	}

	code {
		font-size: 0.75rem;
		padding: 0.1875rem 1.5rem;
	}

	kbd {
		padding: 0.1875rem 1.5rem;
		font-size: 0.75rem;
		color: #fff;
		background-color: #212529;
		border-radius: 0.625rem;
		box-shadow: none;
	}
	kbd kbd {
		font-weight: 500;
	}

	pre {
		margin-bottom: 0.75rem;
		font-size: 0.75rem;
		color: #212529;
		line-height: 1.375rem;
	}

	.pre-scrollable {
		max-height: 340px;
	}

	.table {
		background-color: transparent;
	}
	.table th,
	.table td {
		padding: 0.75rem;
	}
	.table .table {
		background-color: #fff;
	}

	.table-sm th,
	.table-sm td {
		padding: 0.3rem;
	}

	.table-primary,
	.table-primary > th,
	.table-primary > td {
		background-color: #b8daff;
	}

	.table-hover .table-primary:hover {
		background-color: #9fcdff;
	}
	.table-hover .table-primary:hover > td,
	.table-hover .table-primary:hover > th {
		background-color: #9fcdff;
	}

	.table-secondary,
	.table-secondary > th,
	.table-secondary > td {
		background-color: #d1d3d5;
	}

	.table-hover .table-secondary:hover {
		background-color: #c4c6c9;
	}
	.table-hover .table-secondary:hover > td,
	.table-hover .table-secondary:hover > th {
		background-color: #c4c6c9;
	}

	.table-success,
	.table-success > th,
	.table-success > td {
		background-color: #beefd7;
	}

	.table-hover .table-success:hover {
		background-color: #aaeaca;
	}
	.table-hover .table-success:hover > td,
	.table-hover .table-success:hover > th {
		background-color: #aaeaca;
	}

	.table-info,
	.table-info > th,
	.table-info > td {
		background-color: #b8ebf4;
	}

	.table-hover .table-info:hover {
		background-color: #a2e5f1;
	}
	.table-hover .table-info:hover > td,
	.table-hover .table-info:hover > th {
		background-color: #a2e5f1;
	}

	.table-warning,
	.table-warning > th,
	.table-warning > td {
		background-color: #ffeab8;
	}

	.table-hover .table-warning:hover {
		background-color: #ffe29f;
	}
	.table-hover .table-warning:hover > td,
	.table-hover .table-warning:hover > th {
		background-color: #ffe29f;
	}

	.table-danger,
	.table-danger > th,
	.table-danger > td {
		background-color: #eebec8;
	}

	.table-hover .table-danger:hover {
		background-color: #e9aab7;
	}
	.table-hover .table-danger:hover > td,
	.table-hover .table-danger:hover > th {
		background-color: #e9aab7;
	}

	.table-light,
	.table-light > th,
	.table-light > td {
		background-color: #fefefe;
	}

	.table-hover .table-light:hover {
		background-color: #f1f1f1;
	}
	.table-hover .table-light:hover > td,
	.table-hover .table-light:hover > th {
		background-color: #f1f1f1;
	}

	.table-dark,
	.table-dark > th,
	.table-dark > td {
		background-color: #c1c2c3;
	}

	.table-hover .table-dark:hover {
		background-color: #b4b5b6;
	}
	.table-hover .table-dark:hover > td,
	.table-hover .table-dark:hover > th {
		background-color: #b4b5b6;
	}

	.table-active,
	.table-active > th,
	.table-active > td {
		background-color: rgba(0, 0, 0, 0.075);
	}

	.table-hover .table-active:hover {
		background-color: rgba(0, 0, 0, 0.075);
	}
	.table-hover .table-active:hover > td,
	.table-hover .table-active:hover > th {
		background-color: rgba(0, 0, 0, 0.075);
	}

	.table .thead-dark th {
		color: #fff;
		background-color: #212529;
		border-color: #32383e;
	}

	.table .thead-light th {
		color: #495057;
		background-color: #e9ecef;
		border-color: #dee2e6;
	}

	.table-dark {
		color: #fff;
		background-color: #212529;
	}
	.table-dark th,
	.table-dark td,
	.table-dark thead th {
		border-color: #32383e;
	}
	.table-dark.table-striped tbody tr:nth-of-type(odd) {
		background-color: rgba(255, 255, 255, 0.05);
	}
	.table-dark.table-hover tbody tr:hover {
		background-color: rgba(255, 255, 255, 0.075);
	}

	.form-control {
		height: auto;
		padding: 0.4375rem 0.75rem;
		font-size: 1.5rem;
		line-height: 1.5;
		color: #495057;
		background-color: #fff;
		border: 1px solid #e1e5eb;
		font-weight: 300;
		will-change: border-color, box-shadow;
		border-radius: 0.25rem;
		box-shadow: none;
		transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
			border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}
	.form-control:hover {
		border-color: #b3bdcc;
	}
	.form-control:focus {
		color: #495057;
		background-color: #fff;
		border-color: #15558d;
		box-shadow: 0 0.313rem 0.719rem rgba(0, 123, 255, 0.1),
			0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
	}
	.form-control:focus:hover {
		border-color: #15558d;
	}
	.form-control::placeholder {
		color: #868e96;
	}
	.form-control:disabled,
	.form-control[readonly] {
		background-color: #f5f6f7;
	}
	.form-control:disabled:hover,
	.form-control[readonly]:hover {
		border-color: #e1e5eb;
		cursor: not-allowed;
	}
	.form-control[readonly]:not(:disabled):focus {
		box-shadow: none;
		border-color: #e1e5eb;
	}

	select.form-control:not([size]):not([multiple]) {
		height: calc(2.09375rem + 2px);
	}

	select.form-control:focus::-ms-value {
		color: #495057;
		background-color: #fff;
	}

	select.form-control:hover {
		cursor: pointer;
	}

	form label:hover {
		cursor: pointer;
	}

	.col-form-label {
		padding-top: calc(0.4375rem + 1px);
		padding-bottom: calc(0.4375rem + 1px);
		line-height: 1.5;
	}

	.col-form-label-lg {
		padding-top: calc(1.5rem + 1px);
		padding-bottom: calc(1.5rem + 1px);
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.col-form-label-sm {
		padding-top: calc(0.4286rem + 1px);
		padding-bottom: calc(0.4286rem + 1px);
		font-size: 0.6875rem;
		line-height: 1.5;
	}

	.form-control-plaintext {
		padding-top: 0.4375rem;
		padding-bottom: 0.4375rem;
		line-height: 1.5;
		font-weight: 300;
	}

	.form-control-sm,
	.input-group-sm > .form-control,
	.input-group-sm > .input-group-prepend > .input-group-text,
	.input-group-sm > .input-group-middle > .input-group-text,
	.input-group-sm > .input-group-append > .input-group-text,
	.input-group-sm > .input-group-prepend > .btn,
	.input-group-sm > .input-group-append > .btn {
		padding: 0.4286rem 0.625rem;
		font-size: 0.6875rem;
		line-height: 1.5;
		border-radius: 0.25rem;
	}

	select.form-control-sm:not([size]):not([multiple]),
	.input-group-sm > select.form-control:not([size]):not([multiple]),
	.input-group-sm
		> .input-group-prepend
		> select.input-group-text:not([size]):not([multiple]),
	.input-group-sm
		> .input-group-middle
		> select.input-group-text:not([size]):not([multiple]),
	.input-group-sm
		> .input-group-append
		> select.input-group-text:not([size]):not([multiple]),
	.input-group-sm
		> .input-group-prepend
		> select.btn:not([size]):not([multiple]),
	.input-group-sm
		> .input-group-append
		> select.btn:not([size]):not([multiple]) {
		height: calc(1.88845rem + 2px);
	}

	.form-control-lg,
	.input-group-lg > .form-control,
	.input-group-lg > .input-group-prepend > .input-group-text,
	.input-group-lg > .input-group-middle > .input-group-text,
	.input-group-lg > .input-group-append > .input-group-text,
	.input-group-lg > .input-group-prepend > .btn,
	.input-group-lg > .input-group-append > .btn {
		padding: 1.5rem 1.5rem;
		font-size: 0.875rem;
		line-height: 1.5;
		border-radius: 0.375rem;
	}

	select.form-control-lg:not([size]):not([multiple]),
	.input-group-lg > select.form-control:not([size]):not([multiple]),
	.input-group-lg
		> .input-group-prepend
		> select.input-group-text:not([size]):not([multiple]),
	.input-group-lg
		> .input-group-middle
		> select.input-group-text:not([size]):not([multiple]),
	.input-group-lg
		> .input-group-append
		> select.input-group-text:not([size]):not([multiple]),
	.input-group-lg
		> .input-group-prepend
		> select.btn:not([size]):not([multiple]),
	.input-group-lg
		> .input-group-append
		> select.btn:not([size]):not([multiple]) {
		height: calc(2.9375rem + 2px);
	}

	.form-group {
		margin-bottom: 1rem;
	}

	.form-text {
		margin-top: 0.25rem;
	}

	.form-check {
		padding-left: 1.25rem;
	}

	.form-check-input {
		margin-top: 0.313rem;
		margin-left: -1.25rem;
	}
	.form-check-input:disabled ~ .form-check-label {
		color: #868e96;
	}

	.form-check-inline {
		margin-right: 0.75rem;
	}
	.form-check-inline .form-check-input {
		margin-right: 0.3125rem;
	}

	.valid-feedback {
		margin-top: 0.25rem;
		font-size: 80%;
		color: #17c671;
	}

	.valid-tooltip {
		background-color: rgba(23, 198, 113, 0.8);
	}

	.was-validated .form-control:valid,
	.form-control.is-valid,
	.was-validated .custom-select:valid,
	.custom-select.is-valid {
		border-color: #17c671;
		box-shadow: 0 5px 11.5px rgba(23, 198, 113, 0.1);
	}
	.was-validated .form-control:valid:focus,
	.form-control.is-valid:focus,
	.was-validated .custom-select:valid:focus,
	.custom-select.is-valid:focus {
		box-shadow: 0 5px 11.5px rgba(23, 198, 113, 0.1),
			0 1px 1px 0.1rem rgba(23, 198, 113, 0.2);
	}
	.was-validated .form-control:valid:hover,
	.form-control.is-valid:hover,
	.was-validated .custom-select:valid:hover,
	.custom-select.is-valid:hover {
		border-color: #17c671;
	}

	.was-validated .form-check-input:valid ~ .form-check-label,
	.form-check-input.is-valid ~ .form-check-label {
		color: #17c671;
	}

	.was-validated .custom-control-input:valid ~ .custom-control-label,
	.custom-control-input.is-valid ~ .custom-control-label {
		color: #17c671;
	}
	.was-validated .custom-control-input:valid ~ .custom-control-label::before,
	.custom-control-input.is-valid ~ .custom-control-label::before {
		background-color: #57eca4;
		border-color: #2ae68b;
	}

	.was-validated
		.custom-control-input:valid:checked
		~ .custom-control-label::before,
	.custom-control-input.is-valid:checked ~ .custom-control-label::before {
		background-color: #2ae68b;
	}

	.was-validated
		.custom-control-input:valid:focus
		~ .custom-control-label::before,
	.custom-control-input.is-valid:focus ~ .custom-control-label::before {
		box-shadow: 0 0.313rem 0.719rem rgba(23, 198, 113, 0.1),
			0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
	}

	.was-validated .custom-file-input:valid ~ .custom-file-label,
	.custom-file-input.is-valid ~ .custom-file-label {
		color: #17c671;
		border-color: #17c671;
	}
	.was-validated .custom-file-input:valid ~ .custom-file-label::after,
	.custom-file-input.is-valid ~ .custom-file-label::after {
		background-color: #b3f6d5;
		border-color: #2ae68b;
		color: #17c671;
	}

	.was-validated .custom-file-input:focus:valid ~ .custom-file-label,
	.custom-file-input:focus.is-valid ~ .custom-file-label {
		border-color: #17c671;
		box-shadow: 0 5px 11.5px rgba(23, 198, 113, 0.1),
			0 1px 1px 0.1rem rgba(23, 198, 113, 0.2);
	}

	.was-validated .custom-file-input:hover:valid ~ .custom-file-label,
	.custom-file-input:hover.is-valid ~ .custom-file-label {
		border-color: #17c671;
	}

	.was-validated
		.custom-toggle
		.custom-control-input:not(:checked):valid
		~ .custom-control-label::before,
	.custom-toggle
		.custom-control-input:not(:checked).is-valid
		~ .custom-control-label::before {
		background-color: #fff;
	}

	.was-validated
		.custom-toggle
		.custom-control-input:valid
		~ .custom-control-label::before,
	.custom-toggle
		.custom-control-input.is-valid
		~ .custom-control-label::before {
		background-color: #17c671;
	}

	.was-validated
		.custom-toggle
		.custom-control-input:invalid
		~ .custom-control-label::after,
	.custom-toggle
		.custom-control-input.is-invalid
		~ .custom-control-label::after {
		background-color: #eb8c95;
	}

	.was-validated
		.custom-toggle
		.custom-control-input:invalid:focus
		~ .custom-control-label::before,
	.custom-toggle
		.custom-control-input.is-invalid:focus
		~ .custom-control-label::before {
		box-shadow: 0 0.313rem 0.719rem rgba(23, 198, 113, 0.1),
			0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
	}

	.invalid-feedback {
		margin-top: 0.25rem;
		font-size: 80%;
		color: #c4183c;
	}

	.invalid-tooltip {
		background-color: rgba(196, 24, 60, 0.8);
	}

	.was-validated .form-control:invalid,
	.form-control.is-invalid,
	.was-validated .custom-select:invalid,
	.custom-select.is-invalid {
		border-color: #c4183c;
		box-shadow: 0 5px 11.5px rgba(196, 24, 60, 0.1);
	}
	.was-validated .form-control:invalid:focus,
	.form-control.is-invalid:focus,
	.was-validated .custom-select:invalid:focus,
	.custom-select.is-invalid:focus {
		box-shadow: 0 5px 11.5px rgba(196, 24, 60, 0.1),
			0 1px 1px 0.1rem rgba(196, 24, 60, 0.2);
	}
	.was-validated .form-control:invalid:hover,
	.form-control.is-invalid:hover,
	.was-validated .custom-select:invalid:hover,
	.custom-select.is-invalid:hover {
		border-color: #c4183c;
	}

	.was-validated .form-check-input:invalid ~ .form-check-label,
	.form-check-input.is-invalid ~ .form-check-label {
		color: #c4183c;
	}

	.was-validated .custom-control-input:invalid ~ .custom-control-label,
	.custom-control-input.is-invalid ~ .custom-control-label {
		color: #c4183c;
	}
	.was-validated .custom-control-input:invalid ~ .custom-control-label::before,
	.custom-control-input.is-invalid ~ .custom-control-label::before {
		background-color: #ea5876;
		border-color: #e52a51;
	}

	.was-validated
		.custom-control-input:invalid:checked
		~ .custom-control-label::before,
	.custom-control-input.is-invalid:checked ~ .custom-control-label::before {
		background-color: #e52a51;
	}

	.was-validated
		.custom-control-input:invalid:focus
		~ .custom-control-label::before,
	.custom-control-input.is-invalid:focus ~ .custom-control-label::before {
		box-shadow: 0 0.313rem 0.719rem rgba(196, 24, 60, 0.1),
			0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
	}

	.was-validated .custom-file-input:invalid ~ .custom-file-label,
	.custom-file-input.is-invalid ~ .custom-file-label {
		color: #c4183c;
		border-color: #c4183c;
	}
	.was-validated .custom-file-input:invalid ~ .custom-file-label::after,
	.custom-file-input.is-invalid ~ .custom-file-label::after {
		background-color: #f6b2c0;
		border-color: #e52a51;
		color: #c4183c;
	}

	.was-validated .custom-file-input:focus:invalid ~ .custom-file-label,
	.custom-file-input:focus.is-invalid ~ .custom-file-label {
		border-color: #c4183c;
		box-shadow: 0 5px 11.5px rgba(196, 24, 60, 0.1),
			0 1px 1px 0.1rem rgba(196, 24, 60, 0.2);
	}

	.was-validated .custom-file-input:hover:invalid ~ .custom-file-label,
	.custom-file-input:hover.is-invalid ~ .custom-file-label {
		border-color: #c4183c;
	}

	.was-validated
		.custom-toggle
		.custom-control-input:not(:checked):invalid
		~ .custom-control-label::before,
	.custom-toggle
		.custom-control-input:not(:checked).is-invalid
		~ .custom-control-label::before {
		background-color: #fff;
	}

	.was-validated
		.custom-toggle
		.custom-control-input:valid
		~ .custom-control-label::before,
	.custom-toggle
		.custom-control-input.is-valid
		~ .custom-control-label::before {
		background-color: #17c671;
	}

	.was-validated
		.custom-toggle
		.custom-control-input:invalid
		~ .custom-control-label::after,
	.custom-toggle
		.custom-control-input.is-invalid
		~ .custom-control-label::after {
		background-color: #eb8c95;
	}

	.was-validated
		.custom-toggle
		.custom-control-input:invalid:focus
		~ .custom-control-label::before,
	.custom-toggle
		.custom-control-input.is-invalid:focus
		~ .custom-control-label::before {
		box-shadow: 0 0.313rem 0.719rem rgba(196, 24, 60, 0.1),
			0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
	}

	@media (min-width: 576px) {
		.form-inline .form-check-input {
			margin-right: 0.313rem;
		}
	}

	.btn {
		font-weight: 400;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, sans-serif;
		border: 1px solid transparent;
		padding: 0.5625rem 1rem;
		font-size: 0.75rem;
		line-height: 1.125;
		border-radius: 0.25rem;
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}
	.btn:hover,
	.btn.hover {
		cursor: pointer;
	}
	.btn:focus,
	.btn.focus {
		box-shadow: none;
	}
	.btn:not([disabled]):not(.disabled):active,
	.btn:not([disabled]):not(.disabled).active {
		background-image: none;
		box-shadow: none;
	}
	.btn.btn-squared {
		border-radius: 0;
	}
	.btn.btn-pill {
		border-radius: 50px;
	}

	.btn-primary {
		color: #fff;
		border-color: #15558d;
		background-color: #15558d;
		box-shadow: none;
	}
	.btn-primary:hover {
		color: #fff;
		background-color: #1c73bf;
		border-color: #1c73bf;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(0, 123, 255, 0.25);
	}
	.btn-primary:focus,
	.btn-primary.focus {
		box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15),
			0 3px 15px rgba(0, 123, 255, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-primary.disabled,
	.btn-primary:disabled {
		background-color: #15558d;
		border-color: #15558d;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-primary:not(:disabled):not(.disabled):active,
	.btn-primary:not(:disabled):not(.disabled).active,
	.show > .btn-primary.dropdown-toggle {
		color: #fff;
		background-color: #1c73bf;
		border-color: #0062cc;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-secondary {
		color: #fff;
		border-color: #5a6169;
		background-color: #5a6169;
		box-shadow: none;
	}
	.btn-secondary:hover {
		color: #fff;
		background-color: #4e545b;
		border-color: #4e545b;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(90, 97, 105, 0.25);
	}
	.btn-secondary:focus,
	.btn-secondary.focus {
		box-shadow: 0 0 0 3px rgba(90, 97, 105, 0.15),
			0 3px 15px rgba(90, 97, 105, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-secondary.disabled,
	.btn-secondary:disabled {
		background-color: #5a6169;
		border-color: #5a6169;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-secondary:not(:disabled):not(.disabled):active,
	.btn-secondary:not(:disabled):not(.disabled).active,
	.show > .btn-secondary.dropdown-toggle {
		color: #fff;
		background-color: #4e545b;
		border-color: #42484e;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-success {
		color: #fff;
		border-color: #17c671;
		background-color: #17c671;
		box-shadow: none;
	}
	.btn-success:hover {
		color: #fff;
		background-color: #14af64;
		border-color: #14af64;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(23, 198, 113, 0.25);
	}
	.btn-success:focus,
	.btn-success.focus {
		box-shadow: 0 0 0 3px rgba(23, 198, 113, 0.15),
			0 3px 15px rgba(23, 198, 113, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-success.disabled,
	.btn-success:disabled {
		background-color: #17c671;
		border-color: #17c671;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-success:not(:disabled):not(.disabled):active,
	.btn-success:not(:disabled):not(.disabled).active,
	.show > .btn-success.dropdown-toggle {
		color: #fff;
		background-color: #14af64;
		border-color: #129857;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-info {
		color: #fff;
		border-color: #00b8d8;
		background-color: #00b8d8;
		box-shadow: none;
	}
	.btn-info:hover {
		color: #fff;
		background-color: #00a2bf;
		border-color: #00a2bf;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(0, 184, 216, 0.25);
	}
	.btn-info:focus,
	.btn-info.focus {
		box-shadow: 0 0 0 3px rgba(0, 184, 216, 0.15),
			0 3px 15px rgba(0, 184, 216, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-info.disabled,
	.btn-info:disabled {
		background-color: #00b8d8;
		border-color: #00b8d8;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-info:not(:disabled):not(.disabled):active,
	.btn-info:not(:disabled):not(.disabled).active,
	.show > .btn-info.dropdown-toggle {
		color: #fff;
		background-color: #00a2bf;
		border-color: #008da5;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-warning {
		color: #212529;
		border-color: #ffb400;
		background-color: #ffb400;
		box-shadow: none;
	}
	.btn-warning:hover {
		color: #212529;
		background-color: #e6a200;
		border-color: #e6a200;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(255, 180, 0, 0.25);
	}
	.btn-warning:focus,
	.btn-warning.focus {
		box-shadow: 0 0 0 3px rgba(255, 180, 0, 0.15),
			0 3px 15px rgba(255, 180, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-warning.disabled,
	.btn-warning:disabled {
		background-color: #ffb400;
		border-color: #ffb400;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-warning:not(:disabled):not(.disabled):active,
	.btn-warning:not(:disabled):not(.disabled).active,
	.show > .btn-warning.dropdown-toggle {
		color: #212529;
		background-color: #e6a200;
		border-color: #cc9000;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-danger {
		color: #fff;
		border-color: #c4183c;
		background-color: #c4183c;
		box-shadow: none;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #ad1535;
		border-color: #ad1535;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(196, 24, 60, 0.25);
	}
	.btn-danger:focus,
	.btn-danger.focus {
		box-shadow: 0 0 0 3px rgba(196, 24, 60, 0.15),
			0 3px 15px rgba(196, 24, 60, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-danger.disabled,
	.btn-danger:disabled {
		background-color: #c4183c;
		border-color: #c4183c;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-danger:not(:disabled):not(.disabled):active,
	.btn-danger:not(:disabled):not(.disabled).active,
	.show > .btn-danger.dropdown-toggle {
		color: #fff;
		background-color: #ad1535;
		border-color: #97122e;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-light {
		color: #212529;
		border-color: #fbfbfb;
		background-color: #fbfbfb;
		box-shadow: none;
	}
	.btn-light:hover {
		color: #212529;
		background-color: #eeeeee;
		border-color: #eeeeee;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(251, 251, 251, 0.25);
	}
	.btn-light:focus,
	.btn-light.focus {
		box-shadow: 0 0 0 3px rgba(251, 251, 251, 0.15),
			0 3px 15px rgba(251, 251, 251, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-light.disabled,
	.btn-light:disabled {
		background-color: #fbfbfb;
		border-color: #fbfbfb;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-light:not(:disabled):not(.disabled):active,
	.btn-light:not(:disabled):not(.disabled).active,
	.show > .btn-light.dropdown-toggle {
		color: #212529;
		background-color: #eeeeee;
		border-color: #e2e2e2;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-dark {
		color: #fff;
		border-color: #212529;
		background-color: #212529;
		box-shadow: none;
	}
	.btn-dark:hover {
		color: #fff;
		background-color: #16181b;
		border-color: #16181b;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(33, 37, 41, 0.25);
	}
	.btn-dark:focus,
	.btn-dark.focus {
		box-shadow: 0 0 0 3px rgba(33, 37, 41, 0.15),
			0 3px 15px rgba(33, 37, 41, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-dark.disabled,
	.btn-dark:disabled {
		background-color: #212529;
		border-color: #212529;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-dark:not(:disabled):not(.disabled):active,
	.btn-dark:not(:disabled):not(.disabled).active,
	.show > .btn-dark.dropdown-toggle {
		color: #fff;
		background-color: #16181b;
		border-color: #0a0c0d;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-white {
		color: #212529;
		border-color: #fff;
		background-color: #fff;
		box-shadow: none;
	}
	.btn-white:hover {
		color: #212529;
		background-color: #f2f2f2;
		border-color: #f2f2f2;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(255, 255, 255, 0.25);
	}
	.btn-white:focus,
	.btn-white.focus {
		box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.15),
			0 3px 15px rgba(255, 255, 255, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-white.disabled,
	.btn-white:disabled {
		background-color: #fff;
		border-color: #fff;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-white:not(:disabled):not(.disabled):active,
	.btn-white:not(:disabled):not(.disabled).active,
	.show > .btn-white.dropdown-toggle {
		color: #212529;
		background-color: #f2f2f2;
		border-color: #e6e6e6;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-black {
		color: #fff;
		border-color: #000;
		background-color: #000;
		box-shadow: none;
	}
	.btn-black:hover {
		color: #fff;
		background-color: black;
		border-color: black;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 0, 0, 0.25);
	}
	.btn-black:focus,
	.btn-black.focus {
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.15), 0 3px 15px rgba(0, 0, 0, 0.2),
			0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-black.disabled,
	.btn-black:disabled {
		background-color: #000;
		border-color: #000;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-black:not(:disabled):not(.disabled):active,
	.btn-black:not(:disabled):not(.disabled).active,
	.show > .btn-black.dropdown-toggle {
		color: #fff;
		background-color: black;
		border-color: black;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-outline-primary {
		background-color: transparent;
		background-image: none;
		border-color: #15558d;
		color: #15558d;
	}
	.btn-outline-primary:hover {
		color: #fff;
		background-color: #15558d;
		border-color: #15558d;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(0, 123, 255, 0.25);
	}
	.btn-outline-primary:focus,
	.btn-outline-primary.focus {
		box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15),
			0 3px 15px rgba(0, 123, 255, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-primary.disabled,
	.btn-outline-primary:disabled {
		color: #15558d;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-primary:not(:disabled):not(.disabled):active,
	.btn-outline-primary:not(:disabled):not(.disabled).active,
	.show > .btn-outline-primary.dropdown-toggle {
		color: #fff;
		background-color: #15558d;
		border-color: #15558d;
	}
	.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
	.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-primary.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-outline-secondary {
		background-color: transparent;
		background-image: none;
		border-color: #5a6169;
		color: #5a6169;
	}
	.btn-outline-secondary:hover {
		color: #fff;
		background-color: #5a6169;
		border-color: #5a6169;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(90, 97, 105, 0.25);
	}
	.btn-outline-secondary:focus,
	.btn-outline-secondary.focus {
		box-shadow: 0 0 0 3px rgba(90, 97, 105, 0.15),
			0 3px 15px rgba(90, 97, 105, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-secondary.disabled,
	.btn-outline-secondary:disabled {
		color: #5a6169;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-secondary:not(:disabled):not(.disabled):active,
	.btn-outline-secondary:not(:disabled):not(.disabled).active,
	.show > .btn-outline-secondary.dropdown-toggle {
		color: #fff;
		background-color: #5a6169;
		border-color: #5a6169;
	}
	.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
	.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-secondary.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-outline-success {
		background-color: transparent;
		background-image: none;
		border-color: #17c671;
		color: #17c671;
	}
	.btn-outline-success:hover {
		color: #fff;
		background-color: #17c671;
		border-color: #17c671;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(23, 198, 113, 0.25);
	}
	.btn-outline-success:focus,
	.btn-outline-success.focus {
		box-shadow: 0 0 0 3px rgba(23, 198, 113, 0.15),
			0 3px 15px rgba(23, 198, 113, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-success.disabled,
	.btn-outline-success:disabled {
		color: #17c671;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-success:not(:disabled):not(.disabled):active,
	.btn-outline-success:not(:disabled):not(.disabled).active,
	.show > .btn-outline-success.dropdown-toggle {
		color: #fff;
		background-color: #17c671;
		border-color: #17c671;
	}
	.btn-outline-success:not(:disabled):not(.disabled):active:focus,
	.btn-outline-success:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-success.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-outline-info {
		background-color: transparent;
		background-image: none;
		border-color: #00b8d8;
		color: #00b8d8;
	}
	.btn-outline-info:hover {
		color: #fff;
		background-color: #00b8d8;
		border-color: #00b8d8;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(0, 184, 216, 0.25);
	}
	.btn-outline-info:focus,
	.btn-outline-info.focus {
		box-shadow: 0 0 0 3px rgba(0, 184, 216, 0.15),
			0 3px 15px rgba(0, 184, 216, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-info.disabled,
	.btn-outline-info:disabled {
		color: #00b8d8;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-info:not(:disabled):not(.disabled):active,
	.btn-outline-info:not(:disabled):not(.disabled).active,
	.show > .btn-outline-info.dropdown-toggle {
		color: #fff;
		background-color: #00b8d8;
		border-color: #00b8d8;
	}
	.btn-outline-info:not(:disabled):not(.disabled):active:focus,
	.btn-outline-info:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-info.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-outline-warning {
		background-color: transparent;
		background-image: none;
		border-color: #ffb400;
		color: #ffb400;
	}
	.btn-outline-warning:hover {
		color: #212529;
		background-color: #ffb400;
		border-color: #ffb400;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(255, 180, 0, 0.25);
	}
	.btn-outline-warning:focus,
	.btn-outline-warning.focus {
		box-shadow: 0 0 0 3px rgba(255, 180, 0, 0.15),
			0 3px 15px rgba(255, 180, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-warning.disabled,
	.btn-outline-warning:disabled {
		color: #ffb400;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-warning:not(:disabled):not(.disabled):active,
	.btn-outline-warning:not(:disabled):not(.disabled).active,
	.show > .btn-outline-warning.dropdown-toggle {
		color: #212529;
		background-color: #ffb400;
		border-color: #ffb400;
	}
	.btn-outline-warning:not(:disabled):not(.disabled):active:focus,
	.btn-outline-warning:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-warning.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-outline-danger {
		background-color: transparent;
		background-image: none;
		border-color: #c4183c;
		color: #c4183c;
	}
	.btn-outline-danger:hover {
		color: #fff;
		background-color: #c4183c;
		border-color: #c4183c;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(196, 24, 60, 0.25);
	}
	.btn-outline-danger:focus,
	.btn-outline-danger.focus {
		box-shadow: 0 0 0 3px rgba(196, 24, 60, 0.15),
			0 3px 15px rgba(196, 24, 60, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-danger.disabled,
	.btn-outline-danger:disabled {
		color: #c4183c;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-danger:not(:disabled):not(.disabled):active,
	.btn-outline-danger:not(:disabled):not(.disabled).active,
	.show > .btn-outline-danger.dropdown-toggle {
		color: #fff;
		background-color: #c4183c;
		border-color: #c4183c;
	}
	.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
	.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-danger.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-outline-light {
		background-color: transparent;
		background-image: none;
		border-color: #fbfbfb;
		color: #212529;
	}
	.btn-outline-light:hover {
		color: #212529;
		background-color: #fbfbfb;
		border-color: #fbfbfb;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(251, 251, 251, 0.25);
	}
	.btn-outline-light:focus,
	.btn-outline-light.focus {
		box-shadow: 0 0 0 3px rgba(251, 251, 251, 0.15),
			0 3px 15px rgba(251, 251, 251, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-light.disabled,
	.btn-outline-light:disabled {
		color: #fbfbfb;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-light:not(:disabled):not(.disabled):active,
	.btn-outline-light:not(:disabled):not(.disabled).active,
	.show > .btn-outline-light.dropdown-toggle {
		color: #212529;
		background-color: #fbfbfb;
		border-color: #fbfbfb;
	}
	.btn-outline-light:not(:disabled):not(.disabled):active:focus,
	.btn-outline-light:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-light.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-outline-dark {
		background-color: transparent;
		background-image: none;
		border-color: #212529;
		color: #212529;
	}
	.btn-outline-dark:hover {
		color: #fff;
		background-color: #212529;
		border-color: #212529;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(33, 37, 41, 0.25);
	}
	.btn-outline-dark:focus,
	.btn-outline-dark.focus {
		box-shadow: 0 0 0 3px rgba(33, 37, 41, 0.15),
			0 3px 15px rgba(33, 37, 41, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-dark.disabled,
	.btn-outline-dark:disabled {
		color: #212529;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-dark:not(:disabled):not(.disabled):active,
	.btn-outline-dark:not(:disabled):not(.disabled).active,
	.show > .btn-outline-dark.dropdown-toggle {
		color: #fff;
		background-color: #212529;
		border-color: #212529;
	}
	.btn-outline-dark:not(:disabled):not(.disabled):active:focus,
	.btn-outline-dark:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-dark.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-outline-white {
		background-color: transparent;
		background-image: none;
		border-color: #fff;
		color: #212529;
		color: #fff;
	}
	.btn-outline-white:hover {
		color: #212529;
		background-color: #fff;
		border-color: #fff;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(255, 255, 255, 0.25);
	}
	.btn-outline-white:focus,
	.btn-outline-white.focus {
		box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.15),
			0 3px 15px rgba(255, 255, 255, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-white.disabled,
	.btn-outline-white:disabled {
		color: #fff;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-white:not(:disabled):not(.disabled):active,
	.btn-outline-white:not(:disabled):not(.disabled).active,
	.show > .btn-outline-white.dropdown-toggle {
		color: #212529;
		background-color: #fff;
		border-color: #fff;
	}
	.btn-outline-white:not(:disabled):not(.disabled):active:focus,
	.btn-outline-white:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-white.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}
	.btn-outline-white:not(:disabled):not(.disabled):active,
	.btn-outline-white:not(:disabled):not(.disabled).active {
		color: #000;
	}

	.btn-outline-black {
		background-color: transparent;
		background-image: none;
		border-color: #000;
		color: #000;
		color: #000;
	}
	.btn-outline-black:hover {
		color: #fff;
		background-color: #000;
		border-color: #000;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 0, 0, 0.25);
	}
	.btn-outline-black:focus,
	.btn-outline-black.focus {
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.15), 0 3px 15px rgba(0, 0, 0, 0.2),
			0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-black.disabled,
	.btn-outline-black:disabled {
		color: #000;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-black:not(:disabled):not(.disabled):active,
	.btn-outline-black:not(:disabled):not(.disabled).active,
	.show > .btn-outline-black.dropdown-toggle {
		color: #fff;
		background-color: #000;
		border-color: #000;
	}
	.btn-outline-black:not(:disabled):not(.disabled):active:focus,
	.btn-outline-black:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-black.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}
	.btn-outline-black:not(:disabled):not(.disabled):active,
	.btn-outline-black:not(:disabled):not(.disabled).active {
		color: #fff;
	}

	.btn-link {
		font-weight: 300;
		color: #15558d;
	}
	.btn-link:hover {
		color: #0056b3;
		text-decoration: underline;
	}
	.btn-link:focus,
	.btn-link.focus {
		text-decoration: underline;
	}
	.btn-link:disabled {
		color: #868e96;
	}

	.btn-lg,
	.btn-group-lg > .btn {
		padding: 0.75rem 1.75rem;
		font-size: 1.125rem;
		line-height: 1.5;
		border-radius: 0.5rem;
	}

	.btn-sm,
	.btn-group-sm > .btn {
		padding: 0.4286rem 0.875rem;
		font-size: 0.6875rem;
		line-height: 1.5;
		border-radius: 0.25rem;
	}

	.btn-block + .btn-block {
		margin-top: 0.5rem;
	}

	.fade {
		transition: opacity 200ms ease-in-out;
	}

	.collapsing {
		transition: height 350ms ease-in-out;
	}

	i.material-icons {
		font-size: inherit;
		position: relative;
		top: 2px;
	}

	.dropdown-menu {
		z-index: 1000;
		min-width: 10rem;
		padding: 10px 0;
		margin: 0 0 0;
		font-size: 1rem;
		color: #5a6169;
		background-color: #fff;
		border: 1px solid rgba(0, 0, 0, 0.05);
		border-radius: 0.375rem;
		box-shadow: 0 0.5rem 4rem rgba(0, 0, 0, 0.11),
			0 10px 20px rgba(0, 0, 0, 0.05), 0 2px 3px rgba(0, 0, 0, 0.06);
	}
	.dropdown-menu-small {
		box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.11),
			0 3px 10px rgba(0, 0, 0, 0.05), 0 2px 3px rgba(0, 0, 0, 0.06);
		padding: 0.25rem 0;
		font-size: 0.813rem;
	}
	.dropdown-menu-small .dropdown-item {
		padding: 0.375rem 0.875rem;
		font-size: 0.813rem;
	}
	.dropdown-menu-small .dropdown-divider {
		margin: 0.25rem 0;
	}

	.dropup .dropdown-menu {
		margin-bottom: 0;
	}

	.dropright .dropdown-menu {
		margin-left: 0;
	}

	.dropleft .dropdown-menu {
		margin-right: 0;
	}

	.dropdown-divider {
		height: 0;
		margin: 0.75rem 0;
		overflow: hidden;
		border-top: 1px solid #e9ecef;
	}

	.dropdown-item {
		padding: 0.5rem 1.25rem;
		font-weight: 300;
		color: #212529;
		font-size: 0.9375rem;
		transition: background-color 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
			color 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}
	.dropdown-item:hover,
	.dropdown-item:focus {
		color: #16181b;
		background-color: #eceeef;
	}
	.dropdown-item.active,
	.dropdown-item:active {
		color: #fff;
		background-color: #c3c7cc;
	}
	.dropdown-item.disabled,
	.dropdown-item:disabled {
		color: #868e96;
	}
	.dropdown-item.disabled:hover,
	.dropdown-item:disabled:hover {
		background: none;
		cursor: not-allowed;
	}

	.dropdown-header {
		padding: 10px 1.25rem;
		font-size: 0.6875rem;
		color: #868e96;
	}

	.btn-group .btn + .btn,
	.btn-group .btn + .btn-group,
	.btn-group .btn-group + .btn,
	.btn-group .btn-group + .btn-group,
	.btn-group-vertical .btn + .btn,
	.btn-group-vertical .btn + .btn-group,
	.btn-group-vertical .btn-group + .btn,
	.btn-group-vertical .btn-group + .btn-group {
		margin-left: -1px;
	}

	.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
	.btn-group > .btn-group:not(:last-child) > .btn {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.btn-group > .btn:not(:first-child),
	.btn-group > .btn-group:not(:first-child) > .btn {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.dropdown-toggle-split {
		padding-right: 0.75rem;
		padding-left: 0.75rem;
	}

	.btn-sm + .dropdown-toggle-split,
	.btn-group-sm > .btn + .dropdown-toggle-split {
		padding-right: 0.65625rem;
		padding-left: 0.65625rem;
	}

	.btn-lg + .dropdown-toggle-split,
	.btn-group-lg > .btn + .dropdown-toggle-split {
		padding-right: 1.3125rem;
		padding-left: 1.3125rem;
	}

	.btn-group.show .dropdown-toggle {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
	}
	.btn-group.show .dropdown-toggle.btn-link {
		box-shadow: none;
	}

	.btn-group-vertical > .btn + .btn,
	.btn-group-vertical > .btn + .btn-group,
	.btn-group-vertical > .btn-group + .btn,
	.btn-group-vertical > .btn-group + .btn-group {
		margin-top: -1px;
	}

	.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
	.btn-group-vertical > .btn-group:not(:last-child) > .btn {
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	.btn-group-vertical > .btn:not(:first-child),
	.btn-group-vertical > .btn-group:not(:first-child) > .btn {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	.input-group > .form-control + .form-control,
	.input-group > .form-control + .custom-select,
	.input-group > .form-control + .custom-file,
	.input-group > .custom-select + .form-control,
	.input-group > .custom-select + .custom-select,
	.input-group > .custom-select + .custom-file,
	.input-group > .custom-file + .form-control,
	.input-group > .custom-file + .custom-select,
	.input-group > .custom-file + .custom-file {
		margin-left: -1px;
	}

	.input-group > .form-control:not(:last-child),
	.input-group > .custom-select:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.input-group > .form-control:not(:first-child),
	.input-group > .custom-select:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.input-group > .custom-file:not(:last-child) .custom-file-label,
	.input-group > .custom-file:not(:last-child) .custom-file-label::after {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.input-group > .custom-file:not(:first-child) .custom-file-label,
	.input-group > .custom-file:not(:first-child) .custom-file-label::after {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.input-group.input-group-seamless > .form-control {
		border-radius: 0.25rem;
	}

	.input-group.input-group-seamless > .input-group-append,
	.input-group.input-group-seamless > .input-group-prepend {
		position: absolute;
		top: 0;
		bottom: 0;
		z-index: 4;
	}
	.input-group.input-group-seamless > .input-group-append .input-group-text,
	.input-group.input-group-seamless > .input-group-prepend .input-group-text {
		padding: 0.75rem 0.625rem;
		background: transparent;
		border: none;
	}

	.input-group.input-group-seamless > .input-group-append {
		right: 0;
	}

	.input-group.input-group-seamless > .input-group-middle {
		right: 0;
		left: 0;
	}

	.input-group.input-group-seamless > .input-group-prepend {
		left: 0;
	}

	.input-group.input-group-seamless > .form-control:not(:last-child),
	.input-group.input-group-seamless > .custom-select:not(:last-child) {
		padding-right: 40px;
	}

	.input-group.input-group-seamless > .form-control:not(:first-child),
	.input-group.input-group-seamless > .custom-select:not(:first-child) {
		padding-left: 40px;
	}

	.input-group-prepend .btn + .btn,
	.input-group-prepend .btn + .input-group-text,
	.input-group-prepend .input-group-text + .input-group-text,
	.input-group-prepend .input-group-text + .btn,
	.input-group-append .btn + .btn,
	.input-group-append .btn + .input-group-text,
	.input-group-append .input-group-text + .input-group-text,
	.input-group-append .input-group-text + .btn {
		margin-left: -1px;
	}

	.input-group-prepend {
		margin-right: -1px;
	}

	.input-group-append {
		margin-left: -1px;
	}

	.input-group-text {
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.5;
		color: #abb6bf;
		background-color: white;
		border: 1px solid #e1e5eb;
		border-radius: 0.25rem;
	}

	.input-group > .input-group-prepend > .btn,
	.input-group > .input-group-prepend > .input-group-text,
	.input-group > .input-group-append:not(:last-child) > .btn,
	.input-group > .input-group-append:not(:last-child) > .input-group-text,
	.input-group
		> .input-group-append:last-child
		> .btn:not(:last-child):not(.dropdown-toggle),
	.input-group
		> .input-group-append:last-child
		> .input-group-text:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.input-group > .input-group-append > .btn,
	.input-group > .input-group-append > .input-group-text,
	.input-group > .input-group-prepend:not(:first-child) > .btn,
	.input-group > .input-group-prepend:not(:first-child) > .input-group-text,
	.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
	.input-group
		> .input-group-prepend:first-child
		> .input-group-text:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.input-group > .input-group-middle > .btn,
	.input-group > .input-group-middle > .input-group-text {
		border-left: 0;
		border-right: 0;
		border-radius: 0;
	}

	.input-group-middle {
		display: flex;
	}

	.custom-control {
		min-height: 1.5rem;
		padding-left: 1.688rem;
	}
	.custom-control:hover {
		cursor: pointer;
	}
	.custom-control .custom-control-label:before {
		pointer-events: all;
	}

	.custom-control-inline {
		margin-right: 1rem;
	}

	.custom-control-input:checked ~ .custom-control-label::before {
		color: #fff;
		border-color: transparent;
		background-color: #15558d;
		box-shadow: none;
	}

	.custom-control-input:focus ~ .custom-control-label::before {
		box-shadow: 0 0.313rem 0.719rem rgba(0, 123, 255, 0.1),
			0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
	}

	.custom-control-input:active ~ .custom-control-label::before {
		color: #fff;
		background-color: #b3d7ff;
		box-shadow: none;
	}

	.custom-control-input:disabled ~ .custom-control-label {
		color: #868e96;
	}
	.custom-control-input:disabled ~ .custom-control-label:hover {
		cursor: not-allowed;
	}
	.custom-control-input:disabled ~ .custom-control-label::before {
		background-color: #e9ecef;
	}

	.custom-control-label {
		position: static;
	}
	.custom-control-label:hover {
		cursor: pointer;
	}
	.custom-control-label::before {
		top: 0.1875rem;
		left: 0;
		width: 1.125rem;
		height: 1.125rem;
		background-color: #fff;
		border: 1px solid #e1e5eb;
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
		box-shadow: none;
	}
	.custom-control-label::after {
		top: 0.1875rem;
		width: 1.125rem;
		height: 1.125rem;
		background-size: 50% 50%;
	}

	.custom-checkbox .custom-control-label::before {
		border-radius: 2px;
	}

	.custom-checkbox .custom-control-label::after {
		content: "";
		position: absolute;
		top: 5px;
		left: 7px;
		width: 5px;
		height: 11px;
		opacity: 0;
		transform: rotate(45deg) scale(0);
		border-right: 2px solid #fff;
		border-bottom: 2px solid #fff;
		transition: transform 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
			border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
		transition-delay: 100ms;
	}

	.custom-checkbox
		.custom-control-input:checked
		~ .custom-control-label::before {
		background-image: none;
	}

	.custom-checkbox
		.custom-control-input:checked
		~ .custom-control-label::after {
		opacity: 1;
		transform: rotate(45deg) scale(1);
		background-image: none;
	}

	.custom-checkbox
		.custom-control-input:indeterminate
		~ .custom-control-label::before {
		border: none;
		background-color: #15558d;
		box-shadow: none;
	}

	.custom-checkbox
		.custom-control-input:indeterminate
		~ .custom-control-label::after {
		content: "";
		position: absolute;
		transform: scale(1);
		background-image: none;
		background-color: #fff;
		border: none;
		width: 10px;
		height: 2px;
		top: 11px;
		left: 4px;
		opacity: 1;
		transition: none;
	}

	.custom-checkbox
		.custom-control-input:disabled:checked
		~ .custom-control-label::before {
		background: #e9ecef;
		border-color: #e1e5eb;
	}

	.custom-checkbox
		.custom-control-input:disabled:checked
		~ .custom-control-label::after {
		border-color: #e1e5eb;
	}

	.custom-radio .custom-control-label::before {
		border-radius: 50%;
	}

	.custom-radio .custom-control-label::after {
		content: "";
		border-radius: 50%;
		transform: scale(0);
		background-image: none !important;
		position: absolute;
		background: #fff;
		width: 8px;
		height: 8px;
		top: 8px;
		left: 5px;
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
		transition-delay: 0.1s;
		opacity: 0;
		transform: scale(0);
	}

	.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
		background-color: #15558d;
	}

	.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
		opacity: 1;
		transform: scale(1);
	}

	.custom-radio
		.custom-control-input:disabled:checked
		~ .custom-control-label::before {
		background-color: #a8aeb4;
	}

	.custom-radio
		.custom-control-input:disabled:checked
		~ .custom-control-label::before {
		background: #e9ecef;
		border-color: #e1e5eb;
	}

	.custom-radio
		.custom-control-input:disabled:checked
		~ .custom-control-label::after {
		background: #e1e5eb;
	}

	.custom-select {
		height: calc(2.09375rem + 2px);
		padding: 0.375rem 1.75rem 0.375rem 0.75rem;
		line-height: 1.5;
		color: #495057;
		background: #fff
			url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
			no-repeat right 0.75rem center;
		background-size: 8px 10px;
		border: 1px solid #e1e5eb;
		font-weight: 300;
		font-size: 1.5rem;
		transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
			border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
		border-radius: 0.25rem;
	}
	.custom-select:focus {
		border-color: #15558d;
		box-shadow: 0 0.313rem 0.719rem rgba(0, 123, 255, 0.1),
			0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
	}
	.custom-select:focus::-ms-value {
		color: #495057;
		background-color: #fff;
	}
	.custom-select:hover:not(:focus):not(:disabled) {
		cursor: pointer;
		border-color: #b3bdcc;
	}
	.custom-select[multiple],
	.custom-select[size]:not([size="1"]) {
		padding-right: 0.75rem;
	}
	.custom-select:disabled {
		color: #868e96;
		background-color: #e9ecef;
	}

	.custom-select-sm {
		height: calc(1.88845rem + 2px);
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
		font-size: 0.75rem;
	}

	.custom-select-lg {
		height: calc(2.9375rem + 2px);
		font-size: 1.25rem;
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
	}

	.custom-file {
		height: calc(2.0625rem + 2px);
		font-size: 1.5rem;
		transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
			border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}

	.custom-file-input {
		min-width: 14rem;
		height: calc(2.0625rem + 2px);
	}
	.custom-file-input:focus ~ .custom-file-label {
		border-color: #15558d;
		color: #495057;
		box-shadow: 0 0.313rem 0.719rem rgba(0, 123, 255, 0.1),
			0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
	}
	.custom-file-input:focus ~ .custom-file-label::after {
		border-color: #15558d;
		color: #15558d;
		background: #e6f2ff;
	}
	.custom-file-input:focus ~ .custom-file-label:hover {
		border-color: #15558d;
	}
	.custom-file-input:lang(en) ~ .custom-file-label::after {
		content: "Browse";
	}
	.custom-file-input:not(:disabled):hover {
		cursor: pointer;
	}
	.custom-file-input:not(:disabled):hover ~ .custom-file-label,
	.custom-file-input:not(:disabled):hover ~ .custom-file-label:before {
		border-color: #b3bdcc;
	}
	.custom-file-input:disabled + .custom-file-label {
		color: #868e96;
		background-color: #f8f9fa;
	}

	.custom-file-label {
		height: calc(2.0625rem + 2px);
		padding: 0.5rem 1rem;
		line-height: 1.5;
		color: #495057;
		background-color: #fff;
		border: 1px solid #e1e5eb;
		font-weight: 300;
		box-shadow: none;
		transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
			border-color 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
		border-radius: 0.25rem;
	}
	.custom-file-label::after {
		padding: 0.5rem 1rem;
		height: calc(calc(2.0625rem + 2px) - 1px * 2);
		line-height: 1.5;
		color: #495057;
		border-left: 1px solid #e1e5eb;
		background-color: #e9ecef;
		border-radius: 0 0.25rem 0.25rem 0;
	}

	.custom-toggle {
		position: relative;
		padding-left: 3.75rem;
	}
	.custom-toggle .custom-control-label::before {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 3.125rem;
		height: 1.75rem;
		background: #fff;
		border-radius: 100px;
		border: 0.0625rem solid #e1e5eb;
	}
	.custom-toggle .custom-control-label::after {
		content: "";
		position: absolute;
		top: 0.25rem;
		left: 0.25rem;
		width: 1.25rem;
		height: 1.25rem;
		background: #e1e5eb;
		border-radius: 6.25rem;
		transition: 350ms;
	}
	.custom-toggle .custom-control-input:checked ~ .custom-control-label::before {
		background: #17c671;
		border-color: #17c671;
	}
	.custom-toggle .custom-control-input:checked ~ .custom-control-label::after {
		left: 2.875rem;
		transform: translateX(-100%);
		background: #fff;
	}
	.custom-toggle
		.custom-control-input:checked:disabled
		~ .custom-control-label::before {
		background: #e9ecef;
		border-color: #e1e5eb;
	}
	.custom-toggle
		.custom-control-input:checked:disabled
		~ .custom-control-label::after {
		background: #e1e5eb;
	}
	.custom-toggle
		.custom-control-input:active:not(:disabled)
		~ .custom-control-label::after {
		width: 1.625rem;
	}
	.custom-toggle
		.custom-control-input:active:not(:checked)
		~ .custom-control-label::before {
		background-color: #fff;
	}
	.custom-toggle
		.custom-control-input:disabled:active
		~ .custom-control-label::before {
		background-color: #e9ecef;
	}
	.custom-toggle .custom-control-input:focus ~ .custom-control-label::before {
		box-shadow: 0 0.313rem 0.719rem rgba(23, 198, 113, 0.1),
			0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
	}
	.custom-toggle
		.custom-control-input:focus:not(:checked)
		~ .custom-control-label::before {
		box-shadow: 0 0.313rem 0.719rem rgba(0, 123, 255, 0.1),
			0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
	}
	.custom-toggle.custom-toggle-sm {
		padding-left: 2.625rem;
	}
	.custom-toggle.custom-toggle-sm .custom-control-label::before {
		top: 0.1875rem;
		position: absolute;
		display: block;
		width: 2.1875rem;
		height: 1.125rem;
		background: #fff;
		border-radius: 100px;
		border: 0.0625rem solid #e1e5eb;
	}
	.custom-toggle.custom-toggle-sm .custom-control-label::after {
		content: "";
		position: absolute;
		top: 0.375rem;
		left: 0.1875rem;
		width: 0.75rem;
		height: 0.75rem;
	}
	.custom-toggle.custom-toggle-sm
		.custom-control-input:checked
		~ .custom-control-label::after {
		left: 1.9375rem;
	}
	.custom-toggle.custom-toggle-sm
		.custom-control-input:active:not(:disabled)
		~ .custom-control-label::after {
		width: 1rem;
	}

	.nav {
		font-size: 0.875rem;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, sans-serif;
	}

	.nav-link {
		padding: 0.625rem 0.625rem;
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}
	.nav-link.disabled {
		color: #868e96;
	}

	.nav-tabs {
		border-bottom: 1px solid #d1d4d8;
	}
	.nav-tabs .nav-item {
		margin-bottom: -1px;
	}
	.nav-tabs .nav-link {
		border: 1px solid transparent;
		border-top-left-radius: 0.375rem;
		border-top-right-radius: 0.375rem;
	}
	.nav-tabs .nav-link:hover,
	.nav-tabs .nav-link:focus {
		border-color: #e9ecef;
	}
	.nav-tabs .nav-link.disabled {
		color: #868e96;
	}
	.nav-tabs .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}
	.nav-tabs .nav-link:hover {
		border-color: #e7e9ea;
	}
	.nav-tabs .nav-link.active,
	.nav-tabs .nav-item.show .nav-link {
		color: #495057;
		background-color: #fff;
		border-color: #ddd;
	}
	.nav-tabs .dropdown-menu {
		margin-top: -1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	.nav-pills .nav-link {
		border-radius: 0.375rem;
	}

	.nav-pills .nav-link.active,
	.nav-pills .show > .nav-link {
		color: #fff;
		background-color: #15558d;
	}

	.nav-pills:hover {
		background-color: #fdfdfd;
	}

	.nav-outlined-pills .nav-link {
		border-radius: 0.375rem;
		border: 1px solid transparent;
	}
	.nav-outlined-pills .nav-link.active,
	.show > .nav-outlined-pills .nav-link {
		background: none;
		color: #15558d;
		border-color: #15558d;
	}
	.nav-outlined-pills .nav-link:hover {
		border-color: #e7e9ea;
	}

	.nav-blue .nav-link.active {
		background-color: #15558d;
		border-color: #0074f0;
		color: #fff;
	}

	.nav-blue .nav-link.disabled {
		color: #868e96;
	}
	.nav-blue .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-blue .nav-link {
		color: #15558d;
	}

	.nav-blue.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #3395ff;
		color: #15558d;
	}
	.nav-blue.nav-outlined-pills .nav-link.active:hover {
		border-color: #3395ff;
	}

	.nav-blue.nav-outlined-pills .nav-link {
		color: #15558d;
	}

	.nav-indigo .nav-link.active {
		background-color: #674eec;
		border-color: #5b40eb;
		color: #fff;
	}

	.nav-indigo .nav-link.disabled {
		color: #868e96;
	}
	.nav-indigo .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-indigo .nav-link {
		color: #674eec;
	}

	.nav-indigo.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #8f7cf1;
		color: #674eec;
	}
	.nav-indigo.nav-outlined-pills .nav-link.active:hover {
		border-color: #8f7cf1;
	}

	.nav-indigo.nav-outlined-pills .nav-link {
		color: #674eec;
	}

	.nav-purple .nav-link.active {
		background-color: #8445f7;
		border-color: #7a36f6;
		color: #fff;
	}

	.nav-purple .nav-link.disabled {
		color: #868e96;
	}
	.nav-purple .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-purple .nav-link {
		color: #8445f7;
	}

	.nav-purple.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #a476f9;
		color: #8445f7;
	}
	.nav-purple.nav-outlined-pills .nav-link.active:hover {
		border-color: #a476f9;
	}

	.nav-purple.nav-outlined-pills .nav-link {
		color: #8445f7;
	}

	.nav-pink .nav-link.active {
		background-color: #ff4169;
		border-color: #ff325d;
		color: #fff;
	}

	.nav-pink .nav-link.disabled {
		color: #868e96;
	}
	.nav-pink .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-pink .nav-link {
		color: #ff4169;
	}

	.nav-pink.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #ff7491;
		color: #ff4169;
	}
	.nav-pink.nav-outlined-pills .nav-link.active:hover {
		border-color: #ff7491;
	}

	.nav-pink.nav-outlined-pills .nav-link {
		color: #ff4169;
	}

	.nav-red .nav-link.active {
		background-color: #c4183c;
		border-color: #b61638;
		color: #fff;
	}

	.nav-red .nav-link.disabled {
		color: #868e96;
	}
	.nav-red .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-red .nav-link {
		color: #c4183c;
	}

	.nav-red.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #e52a51;
		color: #c4183c;
	}
	.nav-red.nav-outlined-pills .nav-link.active:hover {
		border-color: #e52a51;
	}

	.nav-red.nav-outlined-pills .nav-link {
		color: #c4183c;
	}

	.nav-orange .nav-link.active {
		background-color: #fb7906;
		border-color: #ee7204;
		color: #fff;
	}

	.nav-orange .nav-link.disabled {
		color: #868e96;
	}
	.nav-orange .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-orange .nav-link {
		color: #fb7906;
	}

	.nav-orange.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #fc9438;
		color: #fb7906;
	}
	.nav-orange.nav-outlined-pills .nav-link.active:hover {
		border-color: #fc9438;
	}

	.nav-orange.nav-outlined-pills .nav-link {
		color: #fb7906;
	}

	.nav-yellow .nav-link.active {
		background-color: #ffb400;
		border-color: #f0a900;
		color: #212529;
	}

	.nav-yellow .nav-link.disabled {
		color: #868e96;
	}
	.nav-yellow .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-yellow .nav-link {
		color: #ffb400;
	}

	.nav-yellow.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #ffc333;
		color: #ffb400;
	}
	.nav-yellow.nav-outlined-pills .nav-link.active:hover {
		border-color: #ffc333;
	}

	.nav-yellow.nav-outlined-pills .nav-link {
		color: #ffb400;
	}

	.nav-green .nav-link.active {
		background-color: #17c671;
		border-color: #15b869;
		color: #fff;
	}

	.nav-green .nav-link.disabled {
		color: #868e96;
	}
	.nav-green .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-green .nav-link {
		color: #17c671;
	}

	.nav-green.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #2ae68b;
		color: #17c671;
	}
	.nav-green.nav-outlined-pills .nav-link.active:hover {
		border-color: #2ae68b;
	}

	.nav-green.nav-outlined-pills .nav-link {
		color: #17c671;
	}

	.nav-teal .nav-link.active {
		background-color: #1adba2;
		border-color: #18cd98;
		color: #212529;
	}

	.nav-teal .nav-link.disabled {
		color: #868e96;
	}
	.nav-teal .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-teal .nav-link {
		color: #1adba2;
	}

	.nav-teal.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #40e8b7;
		color: #1adba2;
	}
	.nav-teal.nav-outlined-pills .nav-link.active:hover {
		border-color: #40e8b7;
	}

	.nav-teal.nav-outlined-pills .nav-link {
		color: #1adba2;
	}

	.nav-cyan .nav-link.active {
		background-color: #00b8d8;
		border-color: #00abc9;
		color: #fff;
	}

	.nav-cyan .nav-link.disabled {
		color: #868e96;
	}
	.nav-cyan .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-cyan .nav-link {
		color: #00b8d8;
	}

	.nav-cyan.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #0cdbff;
		color: #00b8d8;
	}
	.nav-cyan.nav-outlined-pills .nav-link.active:hover {
		border-color: #0cdbff;
	}

	.nav-cyan.nav-outlined-pills .nav-link {
		color: #00b8d8;
	}

	.nav-white .nav-link.active {
		background-color: #fff;
		border-color: #f7f7f7;
		color: #212529;
	}

	.nav-white .nav-link.disabled {
		color: #868e96;
	}
	.nav-white .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-white .nav-link {
		color: #fff;
	}

	.nav-white.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: white;
		color: #fff;
	}
	.nav-white.nav-outlined-pills .nav-link.active:hover {
		border-color: white;
	}

	.nav-white.nav-outlined-pills .nav-link {
		color: #fff;
	}

	.nav-gray .nav-link.active {
		background-color: #868e96;
		border-color: #7e868f;
		color: #fff;
	}

	.nav-gray .nav-link.disabled {
		color: #868e96;
	}
	.nav-gray .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-gray .nav-link {
		color: #868e96;
	}

	.nav-gray.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #a1a8ae;
		color: #868e96;
	}
	.nav-gray.nav-outlined-pills .nav-link.active:hover {
		border-color: #a1a8ae;
	}

	.nav-gray.nav-outlined-pills .nav-link {
		color: #868e96;
	}

	.nav-gray-dark .nav-link.active {
		background-color: #343a40;
		border-color: #2d3238;
		color: #fff;
	}

	.nav-gray-dark .nav-link.disabled {
		color: #868e96;
	}
	.nav-gray-dark .nav-link.disabled:hover {
		cursor: not-allowed;
		border-color: transparent;
	}

	.nav-gray-dark .nav-link {
		color: #343a40;
	}

	.nav-gray-dark.nav-outlined-pills .nav-link.active {
		background: transparent;
		border-color: #4b545c;
		color: #343a40;
	}
	.nav-gray-dark.nav-outlined-pills .nav-link.active:hover {
		border-color: #4b545c;
	}

	.nav-gray-dark.nav-outlined-pills .nav-link {
		color: #343a40;
	}

	.navbar {
		padding: 0.75rem 1.5rem;
	}

	.navbar-brand {
		padding-top: 0.7rem;
		padding-bottom: 0.7rem;
		margin-right: 1.5rem;
		font-size: 0.9rem;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, sans-serif;
		font-weight: 400;
	}

	.navbar-text {
		padding-top: 0.625rem;
		padding-bottom: 0.625rem;
	}

	.navbar-toggler {
		padding: 0.5rem 0.5rem;
		font-size: 1rem;
		background: #fff;
		border: 1px solid transparent;
		border-radius: 0.25rem;
	}

	@media (min-width: 576px) {
		.navbar-expand-sm .navbar-nav .nav-link {
			padding-right: 0.625rem;
			padding-left: 0.625rem;
		}
	}

	@media (min-width: 768px) {
		.navbar-expand-md .navbar-nav .nav-link {
			padding-right: 0.625rem;
			padding-left: 0.625rem;
		}
	}

	@media (min-width: 992px) {
		.navbar-expand-lg .navbar-nav .nav-link {
			padding-right: 0.625rem;
			padding-left: 0.625rem;
		}
	}

	@media (min-width: 1200px) {
		.navbar-expand-xl .navbar-nav .nav-link {
			padding-right: 0.625rem;
			padding-left: 0.625rem;
		}
	}

	.navbar-expand .navbar-nav .nav-link {
		padding-right: 0.625rem;
		padding-left: 0.625rem;
	}

	.navbar-light .navbar-brand {
		color: rgba(0, 0, 0, 0.9);
	}
	.navbar-light .navbar-brand:hover,
	.navbar-light .navbar-brand:focus {
		color: rgba(0, 0, 0, 0.9);
	}

	.navbar-light .navbar-nav .nav-link {
		color: rgba(0, 0, 0, 0.5);
	}
	.navbar-light .navbar-nav .nav-link:hover,
	.navbar-light .navbar-nav .nav-link:focus {
		color: rgba(0, 0, 0, 0.7);
	}
	.navbar-light .navbar-nav .nav-link.disabled {
		color: rgba(0, 0, 0, 0.3);
	}

	.navbar-light .navbar-nav .show > .nav-link,
	.navbar-light .navbar-nav .active > .nav-link,
	.navbar-light .navbar-nav .nav-link.show,
	.navbar-light .navbar-nav .nav-link.active {
		color: rgba(0, 0, 0, 0.9);
	}

	.navbar-light .navbar-toggler {
		color: rgba(0, 0, 0, 0.5);
		border-color: rgba(0, 0, 0, 0.1);
		background: none;
	}

	.navbar-light .navbar-toggler-icon {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
	}

	.navbar-light .navbar-text {
		color: rgba(0, 0, 0, 0.5);
	}
	.navbar-light .navbar-text a {
		color: rgba(0, 0, 0, 0.9);
	}
	.navbar-light .navbar-text a:hover,
	.navbar-light .navbar-text a:focus {
		color: rgba(0, 0, 0, 0.9);
	}

	.navbar-dark .navbar-brand {
		color: white;
	}
	.navbar-dark .navbar-brand:hover,
	.navbar-dark .navbar-brand:focus {
		color: white;
	}

	.navbar-dark .navbar-nav .nav-link {
		color: rgba(255, 255, 255, 0.5);
	}
	.navbar-dark .navbar-nav .nav-link:hover,
	.navbar-dark .navbar-nav .nav-link:focus {
		color: rgba(255, 255, 255, 0.75);
	}
	.navbar-dark .navbar-nav .nav-link.disabled {
		color: rgba(255, 255, 255, 0.25);
	}

	.navbar-dark .navbar-nav .show > .nav-link,
	.navbar-dark .navbar-nav .active > .nav-link,
	.navbar-dark .navbar-nav .nav-link.show,
	.navbar-dark .navbar-nav .nav-link.active {
		color: white;
	}

	.navbar-dark .navbar-toggler {
		color: rgba(255, 255, 255, 0.5);
		border-color: rgba(255, 255, 255, 0.1);
		background: none;
	}

	.navbar-dark .navbar-toggler-icon {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
	}

	.navbar-dark .navbar-text {
		color: rgba(255, 255, 255, 0.5);
	}
	.navbar-dark .navbar-text a {
		color: white;
	}
	.navbar-dark .navbar-text a:hover,
	.navbar-dark .navbar-text a:focus {
		color: white;
	}

	.card {
		background-color: #fff;
		border: none;
		border-radius: 0.625rem;
		box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
			0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
			0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
			0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
	}
	.card > .list-group:first-child .list-group-item:first-child {
		border-top-left-radius: 0.625rem;
		border-top-right-radius: 0.625rem;
	}
	.card > .list-group:last-child .list-group-item:last-child {
		border-bottom-right-radius: 0.625rem;
		border-bottom-left-radius: 0.625rem;
	}
	.card .list-group-item {
		padding: 1.5rem 1.875rem;
	}
	.card .card-text {
		margin-bottom: 1.5625rem;
	}
	.card a:hover {
		text-decoration: none;
	}
	.card-small {
		box-shadow: 0 2px 0 rgba(90, 97, 105, 0.11),
			0 4px 8px rgba(90, 97, 105, 0.12), 0 10px 10px rgba(90, 97, 105, 0.06),
			0 7px 70px rgba(90, 97, 105, 0.1);
	}
	.card-small .card-header,
	.card-small .card-body,
	.card-small .card-footer {
		padding: 1rem 1rem;
	}

	.card-body {
		padding: 1.875rem;
	}
	.card-body > p:last-child {
		margin-bottom: 0;
	}

	.card-title {
		font-weight: 500;
		margin-bottom: 0.75rem;
	}

	.card-subtitle {
		margin-top: -1.09375rem;
	}

	.card-link {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, sans-serif;
	}
	.card-link + .card-link {
		margin-left: 1.875rem;
	}

	.card-header {
		padding: 1.09375rem 1.875rem;
		background-color: #fff;
		border-bottom: none;
	}
	.card-header:first-child {
		border-radius: 0.625rem 0.625rem 0 0;
	}

	.card-footer {
		padding: 1.09375rem 1.875rem;
		background-color: #fff;
		border-top: none;
	}
	.card-footer:last-child {
		border-radius: 0 0 0.625rem 0.625rem;
	}

	.card-header-tabs {
		margin-bottom: -1rem;
		border-bottom: 0;
	}
	.card-header-tabs .nav-link,
	.card-header-tabs .nav-link:hover {
		border-bottom: transparent;
	}

	.card-header-pills {
		margin-right: -0.9375rem;
		margin-left: -0.9375rem;
	}
	.card-header-pills:hover {
		background: transparent;
	}

	.card-img-overlay {
		padding: 1.875rem 2.1875rem;
		background: rgba(90, 97, 105, 0.5);
		border-radius: 0.625rem;
	}
	.card-img-overlay .card-title {
		color: #fff;
	}

	.card-img {
		border-radius: 0.625rem;
	}

	.card-img-top {
		border-top-left-radius: 0.625rem;
		border-top-right-radius: 0.625rem;
	}

	.card-img-bottom {
		border-bottom-right-radius: 0.625rem;
		border-bottom-left-radius: 0.625rem;
	}

	.card-deck .card {
		margin-bottom: 0.9375rem;
	}

	@media (min-width: 576px) {
		.card-deck {
			margin-right: -0.9375rem;
			margin-left: -0.9375rem;
		}
		.card-deck .card {
			margin-right: 0.9375rem;
			margin-left: 0.9375rem;
		}
	}

	.card-group > .card {
		box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
			0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
			0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
			0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
	}
	.card-group > .card:last-child .card-body,
	.card-group > .card:last-child .card-footer {
		border-right: none;
	}

	.card-group .card-body,
	.card-group .card-footer {
		border-right: 1px solid #e7e9ea;
	}

	@media (min-width: 576px) {
		.card-group {
			box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
				0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
				0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
				0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
			border-radius: 0.625rem;
		}
		.card-group > .card {
			box-shadow: none;
		}
		.card-group > .card:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
		.card-group > .card:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
		.card-group > .card:only-child {
			border-radius: 0.625rem;
		}
		.card-group > .card:only-child .card-img-top,
		.card-group > .card:only-child .card-header {
			border-top-left-radius: 0.625rem;
			border-top-right-radius: 0.625rem;
		}
		.card-group > .card:only-child .card-img-bottom,
		.card-group > .card:only-child .card-footer {
			border-bottom-right-radius: 0.625rem;
			border-bottom-left-radius: 0.625rem;
		}
		.card-group > .card:not(:first-child):not(:last-child):not(:only-child) {
			border-radius: 0;
		}
		.card-group
			> .card:not(:first-child):not(:last-child):not(:only-child)
			.card-img-top,
		.card-group
			> .card:not(:first-child):not(:last-child):not(:only-child)
			.card-img-bottom,
		.card-group
			> .card:not(:first-child):not(:last-child):not(:only-child)
			.card-header,
		.card-group
			> .card:not(:first-child):not(:last-child):not(:only-child)
			.card-footer {
			border-radius: 0;
		}
	}

	.card-columns .card {
		margin-bottom: 2.1875rem;
	}

	@media (min-width: 576px) {
		.card-columns {
			column-count: 3;
			column-gap: 1.25rem;
		}
	}

	.pagination {
		padding-left: 0;
		list-style: none;
		border-radius: 0.375rem;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, sans-serif;
		font-size: 0.875rem;
	}

	.page-link {
		padding: 0.5rem 0.75rem;
		line-height: 1.25;
		color: #15558d;
		background-color: #fff;
		border: none;
		margin: 0;
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}
	.page-link:hover,
	.page-link:focus {
		color: #0056b3;
		background-color: #f5f5f6;
		border-color: #dfe1e3;
	}

	.page-item {
		box-shadow: 0 0.125rem 0.9375rem rgba(90, 97, 105, 0.1),
			0 0.125rem 0.1875rem rgba(90, 97, 105, 0.15);
	}
	.page-item:first-child {
		border-top-left-radius: 0.375rem;
		border-bottom-left-radius: 0.375rem;
		overflow: hidden;
	}
	.page-item:last-child {
		border-top-right-radius: 0.375rem;
		border-bottom-right-radius: 0.375rem;
		overflow: hidden;
	}
	.page-item:last-child .page-link {
		border-right: none;
	}
	.page-item.active .page-link {
		color: #fff;
		background-color: #15558d;
		border-color: #15558d;
	}
	.page-item.disabled .page-link {
		color: #a8aeb4;
		background-color: #fff;
		border-color: #dfe1e3;
	}

	.pagination-lg .page-link {
		padding: 0.9375rem 1.5625rem;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.pagination-lg .page-item:first-child .page-link {
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
	}

	.pagination-lg .page-item:last-child .page-link {
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}

	.pagination-sm .page-link {
		padding: 0.25rem 0.6875rem;
		font-size: 0.6875rem;
		line-height: 1.5;
	}

	.pagination-sm .page-item:first-child .page-link {
		border-top-left-radius: 0.35rem;
		border-bottom-left-radius: 0.35rem;
	}

	.pagination-sm .page-item:last-child .page-link {
		border-top-right-radius: 0.35rem;
		border-bottom-right-radius: 0.35rem;
	}

	.badge {
		padding: 0.375rem 0.5rem;
		font-size: 75%;
		font-weight: 500;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, sans-serif;
		color: #fff;
		border-radius: 0.375rem;
	}

	a.badge {
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}

	.badge-pill {
		padding-right: 0.5rem;
		padding-left: 0.5rem;
		border-radius: 10rem;
	}

	.badge-squared {
		border-radius: 0;
	}

	.badge-primary {
		color: #fff;
		background-color: #15558d;
	}
	.badge-primary[href]:hover,
	.badge-primary[href]:focus {
		color: #fff;
		text-decoration: none;
		background-color: #0062cc;
	}

	.badge-outline-primary {
		background: none;
		border: 1px solid #15558d;
		color: #15558d;
	}

	.badge-secondary {
		color: #fff;
		background-color: #5a6169;
	}
	.badge-secondary[href]:hover,
	.badge-secondary[href]:focus {
		color: #fff;
		text-decoration: none;
		background-color: #42484e;
	}

	.badge-outline-secondary {
		background: none;
		border: 1px solid #5a6169;
		color: #5a6169;
	}

	.badge-success {
		color: #fff;
		background-color: #17c671;
	}
	.badge-success[href]:hover,
	.badge-success[href]:focus {
		color: #fff;
		text-decoration: none;
		background-color: #129857;
	}

	.badge-outline-success {
		background: none;
		border: 1px solid #17c671;
		color: #17c671;
	}

	.badge-info {
		color: #fff;
		background-color: #00b8d8;
	}
	.badge-info[href]:hover,
	.badge-info[href]:focus {
		color: #fff;
		text-decoration: none;
		background-color: #008da5;
	}

	.badge-outline-info {
		background: none;
		border: 1px solid #00b8d8;
		color: #00b8d8;
	}

	.badge-warning {
		color: #212529;
		background-color: #ffb400;
	}
	.badge-warning[href]:hover,
	.badge-warning[href]:focus {
		color: #212529;
		text-decoration: none;
		background-color: #cc9000;
	}

	.badge-outline-warning {
		background: none;
		border: 1px solid #ffb400;
		color: #ffb400;
	}

	.badge-danger {
		color: #fff;
		background-color: #c4183c;
	}
	.badge-danger[href]:hover,
	.badge-danger[href]:focus {
		color: #fff;
		text-decoration: none;
		background-color: #97122e;
	}

	.badge-outline-danger {
		background: none;
		border: 1px solid #c4183c;
		color: #c4183c;
	}

	.badge-light {
		color: #212529;
		background-color: #fbfbfb;
	}
	.badge-light[href]:hover,
	.badge-light[href]:focus {
		color: #212529;
		text-decoration: none;
		background-color: #e2e2e2;
	}

	.badge-outline-light {
		background: none;
		border: 1px solid #fbfbfb;
		color: #fbfbfb;
		color: #212529;
	}

	.badge-dark {
		color: #fff;
		background-color: #212529;
	}
	.badge-dark[href]:hover,
	.badge-dark[href]:focus {
		color: #fff;
		text-decoration: none;
		background-color: #0a0c0d;
	}

	.badge-outline-dark {
		background: none;
		border: 1px solid #212529;
		color: #212529;
	}

	.jumbotron {
		padding: 38px 42px;
		margin-bottom: 2rem;
		background-color: #eceeef;
		border-radius: 0.5rem;
	}
	@media (min-width: 576px) {
		.jumbotron {
			padding: 4rem 2rem;
		}
	}

	.alert {
		padding: 0.75rem 1.25rem;
		margin-bottom: 1rem;
		border: none;
		border-radius: 0;
	}

	.alert-link {
		font-weight: 500;
	}

	.alert-dismissible .close {
		top: 0;
		right: 0;
		padding: 0.75rem 1.25rem;
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}
	.alert-dismissible .close:hover {
		cursor: pointer;
	}

	.alert-primary {
		color: #f5faff;
		background-color: #15558d;
	}
	.alert-primary .alert-link {
		color: #f5faff;
	}

	.alert-secondary {
		color: #d9dcdf;
		background-color: #5a6169;
	}
	.alert-secondary .alert-link {
		color: #d9dcdf;
	}

	.alert-success {
		color: #d7fae9;
		background-color: #17c671;
	}
	.alert-success .alert-link {
		color: #d7fae9;
	}

	.alert-info {
		color: #cef8ff;
		background-color: #00b8d8;
	}
	.alert-info .alert-link {
		color: #cef8ff;
	}

	.alert-warning {
		color: #fffcf5;
		background-color: #ffb400;
	}
	.alert-warning .alert-link {
		color: #fffcf5;
	}

	.alert-danger {
		color: #fad7de;
		background-color: #c4183c;
	}
	.alert-danger .alert-link {
		color: #fad7de;
	}

	.alert-light {
		color: white;
		background-color: #fbfbfb;
		color: #212529;
	}
	.alert-light .alert-link {
		color: white;
	}
	.alert-light .alert-link {
		color: #212529;
	}

	.alert-dark {
		color: #959faa;
		background-color: #212529;
	}
	.alert-dark .alert-link {
		color: #959faa;
	}

	.progress-wrapper {
		position: relative;
		color: #5a6169;
	}
	.progress-wrapper .progress-label {
		font-size: 1.5rem;
	}
	.progress-wrapper .progress-value {
		position: absolute;
		top: 6px;
		right: 0;
		color: #5a6169;
	}

	.progress {
		height: 0.625rem;
		font-size: 0.625rem;
		line-height: 0.625rem;
		background-color: #f5f5f6;
		margin-top: 6px;
		border-radius: 1.25rem;
		box-shadow: inset 0 0.1rem 0.1rem rgba(90, 97, 105, 0.15);
	}

	.progress-sm {
		height: 0.3125rem;
	}

	.progress-lg {
		height: 0.9375rem;
	}
	.progress-lg .progress-bar {
		height: 0.9375rem;
	}

	.progress-bar {
		height: 0.625rem;
		line-height: 0.625rem;
		color: #fff;
		background-color: #15558d;
		transition: width 0.6s ease;
	}

	.progress-bar-striped {
		background-image: linear-gradient(
			45deg,
			rgba(255, 255, 255, 0.15) 25%,
			transparent 25%,
			transparent 50%,
			rgba(255, 255, 255, 0.15) 50%,
			rgba(255, 255, 255, 0.15) 75%,
			transparent 75%,
			transparent
		);
		background-size: 0.625rem 0.625rem;
	}

	.progress-bar-animated {
		animation: progress-bar-stripes 1s linear infinite;
	}

	.list-group-small .list-group-item {
		padding: 0.625rem 1rem;
		font-size: 1.5rem;
	}

	.list-group-item-action {
		color: #5a6169;
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}
	.list-group-item-action:hover,
	.list-group-item-action:focus {
		color: #5a6169;
		background-color: #f7f8f8;
	}
	.list-group-item-action:active {
		color: #5a6169;
		background-color: #eceeef;
	}

	.list-group-item {
		padding: 0.75rem 1.25rem;
		margin-bottom: -1px;
		background-color: #fff;
		border: 1px solid rgba(0, 0, 0, 0.125);
		font-weight: 300;
	}
	.list-group-item:first-child {
		border-top-left-radius: 0.375rem;
		border-top-right-radius: 0.375rem;
	}
	.list-group-item:last-child {
		border-bottom-right-radius: 0.375rem;
		border-bottom-left-radius: 0.375rem;
	}
	.list-group-item.disabled,
	.list-group-item:disabled {
		color: #868e96;
		background-color: #fff;
	}
	.list-group-item.active {
		color: #fff;
		background-color: #15558d;
		border-color: #15558d;
	}

	.list-group-item-primary {
		color: #004085;
		background-color: #b8daff;
	}

	a.list-group-item-primary,
	button.list-group-item-primary {
		color: #004085;
	}
	a.list-group-item-primary:hover,
	a.list-group-item-primary:focus,
	button.list-group-item-primary:hover,
	button.list-group-item-primary:focus {
		color: #004085;
		background-color: #9fcdff;
	}
	a.list-group-item-primary.active,
	button.list-group-item-primary.active {
		background-color: #004085;
		border-color: #004085;
	}

	.list-group-item-secondary {
		color: #2f3237;
		background-color: #d1d3d5;
	}

	a.list-group-item-secondary,
	button.list-group-item-secondary {
		color: #2f3237;
	}
	a.list-group-item-secondary:hover,
	a.list-group-item-secondary:focus,
	button.list-group-item-secondary:hover,
	button.list-group-item-secondary:focus {
		color: #2f3237;
		background-color: #c4c6c9;
	}
	a.list-group-item-secondary.active,
	button.list-group-item-secondary.active {
		background-color: #2f3237;
		border-color: #2f3237;
	}

	.list-group-item-success {
		color: #0c673b;
		background-color: #beefd7;
	}

	a.list-group-item-success,
	button.list-group-item-success {
		color: #0c673b;
	}
	a.list-group-item-success:hover,
	a.list-group-item-success:focus,
	button.list-group-item-success:hover,
	button.list-group-item-success:focus {
		color: #0c673b;
		background-color: #aaeaca;
	}
	a.list-group-item-success.active,
	button.list-group-item-success.active {
		background-color: #0c673b;
		border-color: #0c673b;
	}

	.list-group-item-info {
		color: #006070;
		background-color: #b8ebf4;
	}

	a.list-group-item-info,
	button.list-group-item-info {
		color: #006070;
	}
	a.list-group-item-info:hover,
	a.list-group-item-info:focus,
	button.list-group-item-info:hover,
	button.list-group-item-info:focus {
		color: #006070;
		background-color: #a2e5f1;
	}
	a.list-group-item-info.active,
	button.list-group-item-info.active {
		background-color: #006070;
		border-color: #006070;
	}

	.list-group-item-warning {
		color: #855e00;
		background-color: #ffeab8;
	}

	a.list-group-item-warning,
	button.list-group-item-warning {
		color: #855e00;
	}
	a.list-group-item-warning:hover,
	a.list-group-item-warning:focus,
	button.list-group-item-warning:hover,
	button.list-group-item-warning:focus {
		color: #855e00;
		background-color: #ffe29f;
	}
	a.list-group-item-warning.active,
	button.list-group-item-warning.active {
		background-color: #855e00;
		border-color: #855e00;
	}

	.list-group-item-danger {
		color: #660c1f;
		background-color: #eebec8;
	}

	a.list-group-item-danger,
	button.list-group-item-danger {
		color: #660c1f;
	}
	a.list-group-item-danger:hover,
	a.list-group-item-danger:focus,
	button.list-group-item-danger:hover,
	button.list-group-item-danger:focus {
		color: #660c1f;
		background-color: #e9aab7;
	}
	a.list-group-item-danger.active,
	button.list-group-item-danger.active {
		background-color: #660c1f;
		border-color: #660c1f;
	}

	.list-group-item-light {
		color: #838383;
		background-color: #fefefe;
	}

	a.list-group-item-light,
	button.list-group-item-light {
		color: #838383;
	}
	a.list-group-item-light:hover,
	a.list-group-item-light:focus,
	button.list-group-item-light:hover,
	button.list-group-item-light:focus {
		color: #838383;
		background-color: #f1f1f1;
	}
	a.list-group-item-light.active,
	button.list-group-item-light.active {
		background-color: #838383;
		border-color: #838383;
	}

	.list-group-item-dark {
		color: #111315;
		background-color: #c1c2c3;
	}

	a.list-group-item-dark,
	button.list-group-item-dark {
		color: #111315;
	}
	a.list-group-item-dark:hover,
	a.list-group-item-dark:focus,
	button.list-group-item-dark:hover,
	button.list-group-item-dark:focus {
		color: #111315;
		background-color: #b4b5b6;
	}
	a.list-group-item-dark.active,
	button.list-group-item-dark.active {
		background-color: #111315;
		border-color: #111315;
	}

	.close {
		font-size: 1.5rem;
		font-weight: 500;
		color: #8c949d;
		text-shadow: none;
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}
	.close:hover,
	.close:focus {
		color: #8c949d;
	}

	.modal {
		z-index: 1050;
	}

	.modal-dialog {
		margin: 0.625rem;
	}
	.modal.fade .modal-dialog {
		transition: transform 0.3s ease-out;
	}

	.modal-dialog-centered {
		min-height: calc(100% - (0.625rem * 2));
	}

	.modal-content {
		background-color: #fff;
		border: none;
		border-radius: 0.5rem;
		box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
			0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
			0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
			0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
	}

	.modal-backdrop {
		z-index: 1040;
		background-color: #5a6169;
	}
	.modal-backdrop.show {
		opacity: 0.12;
	}

	.modal-header {
		padding: 0.9375rem 2.1875rem;
		border-bottom: 1px solid #dfe1e3;
	}

	.modal-title {
		line-height: 1.5;
	}

	.modal-body {
		padding: 1.875rem 2.1875rem;
	}

	.modal-footer {
		padding: 0.9375rem 2.1875rem;
		border-top: 1px solid #dfe1e3;
	}

	@media (min-width: 576px) {
		.modal-dialog {
			max-width: 500px;
			margin: 1.875rem auto;
		}
		.modal-dialog-centered {
			min-height: calc(100% - (1.875rem * 2));
		}
		.modal-content {
			box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
				0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
				0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
				0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
		}
		.modal-sm {
			max-width: 300px;
		}
	}

	@media (min-width: 992px) {
		.modal-lg {
			max-width: 800px;
		}
	}

	.tooltip {
		z-index: 1070;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, sans-serif;
		font-style: normal;
		font-weight: 300;
		line-height: 1.5;
		text-align: left;
		text-align: start;
		text-decoration: none;
		text-shadow: none;
		text-transform: none;
		letter-spacing: normal;
		word-break: normal;
		word-spacing: normal;
		white-space: normal;
		line-break: auto;
		font-size: 0.6875rem;
	}
	.tooltip.show {
		opacity: 1;
	}
	.tooltip .arrow {
		width: 5px;
		height: 5px;
	}

	.bs-tooltip-top,
	.bs-tooltip-auto[x-placement^="top"] {
		padding: 5px 0;
	}
	.bs-tooltip-top .arrow::before,
	.bs-tooltip-auto[x-placement^="top"] .arrow::before {
		border-width: 5px 2.5px 0;
		border-top-color: #fff;
	}

	.bs-tooltip-right,
	.bs-tooltip-auto[x-placement^="right"] {
		padding: 0 5px;
	}
	.bs-tooltip-right .arrow,
	.bs-tooltip-auto[x-placement^="right"] .arrow {
		width: 5px;
		height: 5px;
	}
	.bs-tooltip-right .arrow::before,
	.bs-tooltip-auto[x-placement^="right"] .arrow::before {
		border-width: 2.5px 5px 2.5px 0;
		border-right-color: #fff;
	}

	.bs-tooltip-bottom,
	.bs-tooltip-auto[x-placement^="bottom"] {
		padding: 5px 0;
	}
	.bs-tooltip-bottom .arrow::before,
	.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
		border-width: 0 2.5px 5px;
		border-bottom-color: #fff;
	}

	.bs-tooltip-left,
	.bs-tooltip-auto[x-placement^="left"] {
		padding: 0 5px;
	}
	.bs-tooltip-left .arrow,
	.bs-tooltip-auto[x-placement^="left"] .arrow {
		width: 5px;
		height: 5px;
	}
	.bs-tooltip-left .arrow::before,
	.bs-tooltip-auto[x-placement^="left"] .arrow::before {
		border-width: 2.5px 0 2.5px 5px;
		border-left-color: #fff;
	}

	.tooltip-inner {
		max-width: 200px;
		padding: 7px 13px;
		color: #5a6169;
		background-color: #fff;
		box-shadow: 0 3px 15px rgba(90, 97, 105, 0.1),
			0 2px 3px rgba(90, 97, 105, 0.2);
		border-radius: 0.375rem;
	}

	.popover {
		z-index: 1060;
		max-width: 276px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, sans-serif;
		font-style: normal;
		font-weight: 300;
		line-height: 1.5;
		text-align: left;
		text-align: start;
		text-decoration: none;
		text-shadow: none;
		text-transform: none;
		letter-spacing: normal;
		word-break: normal;
		word-spacing: normal;
		white-space: normal;
		line-break: auto;
		font-size: 0.6875rem;
		background-color: #fff;
		border: none;
		padding: 0;
		border-radius: 0.5rem;
		box-shadow: 0 3px 15px rgba(90, 97, 105, 0.1),
			0 2px 3px rgba(90, 97, 105, 0.2);
	}
	.popover .arrow {
		width: 10px;
		height: 5px;
		margin: 0 0.5rem;
	}
	.popover .arrow::before {
		border-width: 11px;
	}
	.popover .arrow::after {
		border-width: 11px;
	}

	.bs-popover-top,
	.bs-popover-auto[x-placement^="top"] {
		margin-bottom: 5px;
	}
	.bs-popover-top .arrow,
	.bs-popover-auto[x-placement^="top"] .arrow {
		bottom: calc((5px + 1px) * -1);
	}
	.bs-popover-top .arrow::before,
	.bs-popover-auto[x-placement^="top"] .arrow::before,
	.bs-popover-top .arrow::after,
	.bs-popover-auto[x-placement^="top"] .arrow::after {
		border-width: 5px 5px 0;
	}
	.bs-popover-top .arrow::before,
	.bs-popover-auto[x-placement^="top"] .arrow::before {
		border-top-color: rgba(0, 0, 0, 0.05);
	}
	.bs-popover-top .arrow::after,
	.bs-popover-auto[x-placement^="top"] .arrow::after {
		bottom: 1px;
		border-top-color: #fff;
	}

	.bs-popover-right,
	.bs-popover-auto[x-placement^="right"] {
		margin-left: 5px;
	}
	.bs-popover-right .arrow,
	.bs-popover-auto[x-placement^="right"] .arrow {
		left: calc((5px + 1px) * -1);
		width: 5px;
		height: 10px;
		margin: 0.5rem 0;
	}
	.bs-popover-right .arrow::before,
	.bs-popover-auto[x-placement^="right"] .arrow::before,
	.bs-popover-right .arrow::after,
	.bs-popover-auto[x-placement^="right"] .arrow::after {
		border-width: 5px 5px 5px 0;
	}
	.bs-popover-right .arrow::before,
	.bs-popover-auto[x-placement^="right"] .arrow::before {
		border-right-color: rgba(0, 0, 0, 0.05);
	}
	.bs-popover-right .arrow::after,
	.bs-popover-auto[x-placement^="right"] .arrow::after {
		left: 1px;
		border-right-color: #fff;
	}

	.bs-popover-bottom,
	.bs-popover-auto[x-placement^="bottom"] {
		margin-top: 5px;
	}
	.bs-popover-bottom .arrow,
	.bs-popover-auto[x-placement^="bottom"] .arrow {
		top: calc((5px + 1px) * -1);
	}
	.bs-popover-bottom .arrow::before,
	.bs-popover-auto[x-placement^="bottom"] .arrow::before,
	.bs-popover-bottom .arrow::after,
	.bs-popover-auto[x-placement^="bottom"] .arrow::after {
		border-width: 0 5px 5px 5px;
	}
	.bs-popover-bottom .arrow::before,
	.bs-popover-auto[x-placement^="bottom"] .arrow::before {
		border-bottom-color: rgba(0, 0, 0, 0.05);
	}
	.bs-popover-bottom .arrow::after,
	.bs-popover-auto[x-placement^="bottom"] .arrow::after {
		top: 1px;
		border-bottom-color: #fff;
	}
	.bs-popover-bottom .popover-header::before,
	.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
		width: 10px;
		margin-left: -5px;
		border-bottom: 1px solid #f5f5f6;
	}

	.bs-popover-left,
	.bs-popover-auto[x-placement^="left"] {
		margin-right: 5px;
	}
	.bs-popover-left .arrow,
	.bs-popover-auto[x-placement^="left"] .arrow {
		right: calc((5px + 1px) * -1);
		width: 5px;
		height: 10px;
		margin: 0.5rem 0;
	}
	.bs-popover-left .arrow::before,
	.bs-popover-auto[x-placement^="left"] .arrow::before,
	.bs-popover-left .arrow::after,
	.bs-popover-auto[x-placement^="left"] .arrow::after {
		border-width: 5px 0 5px 5px;
	}
	.bs-popover-left .arrow::before,
	.bs-popover-auto[x-placement^="left"] .arrow::before {
		border-left-color: rgba(0, 0, 0, 0.05);
	}
	.bs-popover-left .arrow::after,
	.bs-popover-auto[x-placement^="left"] .arrow::after {
		right: 1px;
		border-left-color: #fff;
	}

	.popover-header {
		padding: 14px 20px;
		font-size: 1rem;
		color: #3d5170;
		line-height: 14px;
		background-color: #f5f5f6;
		border-bottom: 1px solid #e7e9ea;
		border-top-left-radius: calc(0.5rem - 1px);
		border-top-right-radius: calc(0.5rem - 1px);
	}

	.popover-body {
		padding: 15px 20px;
		color: #5a6169;
	}

	.carousel {
		box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
			0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
			0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
			0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
	}

	.carousel-item {
		transition: transform 0.6s ease;
	}

	.carousel-control-prev,
	.carousel-control-next {
		width: 15%;
		color: #fff;
		opacity: 0.5;
	}
	.carousel-control-prev:hover,
	.carousel-control-prev:focus,
	.carousel-control-next:hover,
	.carousel-control-next:focus {
		color: #fff;
	}

	.carousel-control-prev-icon,
	.carousel-control-next-icon {
		width: 20px;
		height: 20px;
	}

	.carousel-control-prev-icon {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
	}

	.carousel-control-next-icon {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
	}

	.carousel-indicators {
		margin-right: 15%;
		margin-left: 15%;
	}
	.carousel-indicators li {
		width: 30px;
		height: 3px;
		margin-right: 3px;
		margin-left: 3px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 3px;
	}
	.carousel-indicators .active {
		background-color: #fff;
	}

	.carousel-caption {
		right: 15%;
		left: 15%;
		color: #fff;
	}

	.noUi-target,
	.noUi-target * {
		-webkit-touch-callout: none;
		-webkit-tap-highlight-color: transparent;
		-webkit-user-select: none;
		-ms-touch-action: none;
		touch-action: none;
		-ms-user-select: none;
		-moz-user-select: none;
		user-select: none;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.noUi-target {
		position: relative;
		direction: ltr;
		background: #eceeef;
		border-radius: 5px;
		box-shadow: inset 0 1px 2px rgba(90, 97, 105, 0.1);
		margin: 35px 0;
	}
	.noUi-target:focus {
		outline: 0;
		box-shadow: 0 0 8px rgba(0, 123, 255, 0.65),
			0 3px 15px rgba(90, 97, 105, 0.1), 0 2px 3px rgba(90, 97, 105, 0.2);
	}

	.noUi-base,
	.noUi-connects {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 1;
	}

	.noUi-connects {
		overflow: hidden;
		z-index: 0;
	}

	.noUi-connect,
	.noUi-origin {
		position: absolute;
		will-change: transform;
		z-index: 1;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		-ms-transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
	}
	.noUi-connect:focus,
	.noUi-origin:focus {
		outline: 0;
	}

	.noUi-connect {
		background: #15558d;
		border-radius: 5px;
	}

	html:not([dir="rtl"]) .noUi-horizontal .noUi-origin {
		left: auto;
		right: 0;
	}

	html:not([dir="rtl"]) .noUi-horizontal .noUi-handle {
		right: -17px;
		left: auto;
	}

	.noUi-rtl .noUi-value-horizontal {
		-webkit-transform: translate(50%, 50%);
		transform: translate(50%, 50%);
	}

	.noUi-rtl .noUi-value-vertical {
		-webkit-transform: translate(0, 50%);
		transform: translate(0, 50%);
	}

	.noUi-vertical {
		width: 5px;
	}
	.noUi-vertical .noUi-origin {
		width: 0;
	}
	.noUi-vertical .noUi-handle {
		left: -10px;
		top: -11.5px;
	}
	.noUi-vertical .noUi-handle:before,
	.noUi-vertical .noUi-handle:after {
		width: 14px;
		height: 1px;
		left: 6px;
		top: 14px;
	}
	.noUi-vertical .noUi-handle:after {
		top: 17px;
	}
	.noUi-vertical .noUi-tooltip {
		-webkit-transform: translate(0, -50%);
		transform: translate(0, -50%);
		top: 50%;
		right: 30px;
	}
	.noUi-vertical .noUi-draggable {
		cursor: ns-resize;
	}

	.noUi-horizontal {
		height: 5px;
	}
	.noUi-horizontal .noUi-origin {
		height: 0;
	}
	.noUi-horizontal .noUi-handle {
		left: -11.5px;
		top: -10px;
	}
	.noUi-horizontal .noUi-tooltip {
		-webkit-transform: translate(-50%, 0);
		transform: translate(-50%, 0);
		left: 50%;
		bottom: 30px;
	}

	.noUi-handle {
		position: absolute;
		border: 1px solid #e7e9ea;
		border-radius: 50%;
		width: 23px;
		height: 23px;
		box-shadow: 0 3px 15px rgba(90, 97, 105, 0.1),
			0 2px 3px rgba(90, 97, 105, 0.2);
		background: #fff;
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
	}
	.noUi-handle:hover {
		cursor: grab;
		cursor: -webkit-grab;
		cursor: -moz-grab;
	}
	.noUi-handle:active {
		cursor: grabbing;
		cursor: -webkit-grabbing;
		cursor: -moz-grabbing;
	}
	.noUi-handle:focus {
		outline: 0;
		box-shadow: 0 0 8px rgba(0, 123, 255, 0.65),
			0 3px 15px rgba(90, 97, 105, 0.1), 0 2px 3px rgba(90, 97, 105, 0.2);
	}
	.noUi-handle:after {
		left: 17px;
	}

	.noUi-state-tap .noUi-connect,
	.noUi-state-tap .noUi-origin {
		-webkit-transition: transform 0.3s;
		transition: transform 0.3s;
	}

	.noUi-state-drag * {
		cursor: inherit !important;
	}

	.noUi-connects {
		border-radius: 5px;
	}

	.noUi-draggable {
		cursor: ew-resize;
	}

	.noUi-active {
		transform: scale(1.1);
	}

	[disabled] .noUi-connect {
		background: #b8b8b8;
	}

	[disabled].noUi-target,
	[disabled].noUi-handle,
	[disabled] .noUi-handle {
		cursor: not-allowed;
	}

	[disabled] .noUi-handle {
		background: #f2f3f4;
	}
	[disabled] .noUi-handle:focus {
		box-shadow: 0 3px 15px rgba(90, 97, 105, 0.1),
			0 2px 3px rgba(90, 97, 105, 0.2);
	}

	.noUi-pips,
	.noUi-pips * {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.noUi-pips {
		position: absolute;
		color: #a8aeb4;
		font-size: 12px;
	}

	.noUi-value {
		position: absolute;
		white-space: nowrap;
		text-align: center;
	}

	.noUi-value-sub {
		color: #a8aeb4;
		font-size: 10px;
	}

	.noUi-marker {
		position: absolute;
		background: #a8aeb4;
	}

	.noUi-marker-sub {
		background: #a8aeb4;
	}

	.noUi-marker-large {
		background: #a8aeb4;
	}

	.noUi-pips-horizontal {
		padding: 10px 0;
		height: auto;
		top: 100%;
		left: 0;
		width: 100%;
	}

	.noUi-value-horizontal {
		transform: translate3d(-50%, 50%, 0);
	}

	.noUi-marker-horizontal.noUi-marker {
		margin-left: -1px;
		width: 1px;
		height: 4px;
	}

	.noUi-marker-horizontal.noUi-marker-sub {
		height: 5px;
	}

	.noUi-marker-horizontal.noUi-marker-large {
		height: 7px;
	}

	.noUi-pips-vertical {
		padding: 0 10px;
		height: 100%;
		top: 0;
		left: 100%;
	}

	.noUi-value-vertical {
		transform: translate3d(0, -50%, 0);
		padding-left: 15px;
	}

	.noUi-marker-vertical.noUi-marker {
		width: 4px;
		height: 1px;
		margin-top: -1px;
	}

	.noUi-marker-vertical.noUi-marker-sub {
		width: 10px;
	}

	.noUi-marker-vertical.noUi-marker-large {
		width: 7px;
	}

	.noUi-tooltip {
		display: block;
		position: absolute;
		text-align: center;
		white-space: nowrap;
		border-radius: 0.375rem;
		border-radius: 0.375rem;
		background: #fff;
		color: #5a6169;
		box-shadow: 0 3px 15px rgba(90, 97, 105, 0.1),
			0 2px 3px rgba(90, 97, 105, 0.2);
		font-size: 0.75rem;
		padding: 5px 10px;
	}

	.slider-primary .noUi-connect {
		background: #15558d;
	}

	.slider-secondary .noUi-connect {
		background: #5a6169;
	}

	.slider-success .noUi-connect {
		background: #17c671;
	}

	.slider-info .noUi-connect {
		background: #00b8d8;
	}

	.slider-warning .noUi-connect {
		background: #ffb400;
	}

	.slider-danger .noUi-connect {
		background: #c4183c;
	}

	.slider-light .noUi-connect {
		background: #fbfbfb;
	}

	.slider-dark .noUi-connect {
		background: #212529;
	}

	.datepicker {
		border-radius: 0.625rem;
		direction: ltr;
	}
	.datepicker-inline {
		width: 220px;
	}
	.datepicker-rtl {
		direction: rtl;
	}
	.datepicker-rtl.dropdown-menu {
		left: auto;
	}
	.datepicker-rtl table tr td span {
		float: right;
	}
	.datepicker-dropdown {
		top: 0;
		left: 0;
		padding: 20px 22px;
	}
	.datepicker-dropdown:before,
	.datepicker-dropdown:after {
		content: "";
		display: inline-block;
		border-top: 0;
		position: absolute;
	}
	.datepicker-dropdown:before {
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-bottom: 7px solid #c3c7cc;
		border-bottom-color: rgba(0, 0, 0, 0.2);
	}
	.datepicker-dropdown:after {
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-bottom: 6px solid #fff;
	}
	.datepicker-dropdown.datepicker-orient-left:before {
		left: 6px;
	}
	.datepicker-dropdown.datepicker-orient-left:after {
		left: 7px;
	}
	.datepicker-dropdown.datepicker-orient-right:before {
		right: 6px;
	}
	.datepicker-dropdown.datepicker-orient-right:after {
		right: 7px;
	}
	.datepicker-dropdown.datepicker-orient-bottom:before {
		top: -7px;
	}
	.datepicker-dropdown.datepicker-orient-bottom:after {
		top: -6px;
	}
	.datepicker-dropdown.datepicker-orient-top:before {
		bottom: -7px;
		border-bottom: 0;
		border-top: 7px solid #c3c7cc;
	}
	.datepicker-dropdown.datepicker-orient-top:after {
		bottom: -6px;
		border-bottom: 0;
		border-top: 6px solid #fff;
	}
	.datepicker table {
		margin: 0;
		-webkit-touch-callout: none;
		user-select: none;
	}
	.datepicker table tr td {
		border-radius: 50%;
	}
	.datepicker table tr th {
		border-radius: 0.375rem;
		font-weight: 500;
	}
	.datepicker table tr td,
	.datepicker table tr th {
		transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
		width: 36px;
		height: 36px;
		border: none;
		text-align: center;
	}
	.table-striped .datepicker table tr td,
	.table-striped .datepicker table tr th {
		background-color: transparent;
	}
	.datepicker table tr td.old,
	.datepicker table tr td.new {
		color: #c3c7cc;
	}
	.datepicker table tr td.day:hover,
	.datepicker table tr td.focused {
		background: #eceeef;
		cursor: pointer;
	}
	.datepicker table tr td.disabled,
	.datepicker table tr td.disabled:hover {
		background: none;
		color: #e7e9ea;
		cursor: default;
	}
	.datepicker table tr td.highlighted {
		border-radius: 0;
	}
	.datepicker table tr td.highlighted.focused {
		background: #15558d;
	}
	.datepicker table tr td.highlighted.disabled,
	.datepicker table tr td.highlighted.disabled:active {
		background: #15558d;
		color: #5a6169;
	}
	.datepicker table tr td.today {
		background: #e6f2ff;
	}
	.datepicker table tr td.today.focused {
		background: #f5f5f6;
	}
	.datepicker table tr td.today.disabled,
	.datepicker table tr td.today.disabled:active {
		background: #f5f5f6;
		color: #868e96;
	}
	.datepicker table tr td.range {
		background: #15558d;
		color: #fff;
		border-radius: 0;
	}
	.datepicker table tr td.range.focused {
		background: #0067d6;
	}
	.datepicker table tr td.range.disabled,
	.datepicker table tr td.range.disabled:active,
	.datepicker table tr td.range.day.disabled:hover {
		background: #0062cc;
		color: #3395ff;
	}
	.datepicker table tr td.range.highlighted.focused {
		background: #cbd3da;
	}
	.datepicker table tr td.range.highlighted.disabled,
	.datepicker table tr td.range.highlighted.disabled:active {
		background: #e9ecef;
		color: #e7e9ea;
	}
	.datepicker table tr td.range.today.disabled,
	.datepicker table tr td.range.today.disabled:active {
		background: #15558d;
		color: #fff;
	}
	.datepicker table tr td.day.range-start {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	.datepicker table tr td.day.range-end {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.datepicker table tr td.day.range-start.range-end {
		border-radius: 50%;
	}
	.datepicker table tr td.selected,
	.datepicker table tr td.selected.highlighted,
	.datepicker table tr td.selected:hover,
	.datepicker table tr td.selected.highlighted:hover,
	.datepicker table tr td.day.range:hover {
		background: #15558d;
		color: #fff;
	}
	.datepicker table tr td.active,
	.datepicker table tr td.active.highlighted,
	.datepicker table tr td.active:hover,
	.datepicker table tr td.active.highlighted:hover {
		background: #15558d;
		color: #fff;
	}
	.datepicker table tr td span {
		display: block;
		width: 23%;
		height: 54px;
		line-height: 54px;
		float: left;
		margin: 1%;
		cursor: pointer;
		border-radius: 4px;
	}
	.datepicker table tr td span:hover,
	.datepicker table tr td span.focused {
		background: #e9ecef;
	}
	.datepicker table tr td span.disabled,
	.datepicker table tr td span.disabled:hover {
		background: none;
		color: #e7e9ea;
		cursor: default;
	}
	.datepicker table tr td span.active,
	.datepicker table tr td span.active:hover,
	.datepicker table tr td span.active.disabled,
	.datepicker table tr td span.active.disabled:hover {
		text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
	}
	.datepicker table tr td span.old,
	.datepicker table tr td span.new {
		color: #868e96;
	}
	.datepicker .datepicker-switch {
		width: 145px;
	}
	.datepicker .datepicker-switch,
	.datepicker .prev,
	.datepicker .next,
	.datepicker tfoot tr th {
		cursor: pointer;
	}
	.datepicker .datepicker-switch:hover,
	.datepicker .prev:hover,
	.datepicker .next:hover,
	.datepicker tfoot tr th:hover {
		background: #e9ecef;
	}
	.datepicker .prev.disabled,
	.datepicker .next.disabled {
		visibility: hidden;
	}
	.datepicker .cw {
		font-size: 10px;
		width: 12px;
		padding: 0 2px 0 5px;
		vertical-align: middle;
	}

	.input-daterange input {
		text-align: center;
	}

	.bg-primary {
		background-color: #15558d !important;
	}
	.bg-primary.card .card-title,
	.bg-primary.card .card-body,
	.bg-primary.card .card-header,
	.bg-primary.card .card-footer {
		background-color: #0062cc !important;
	}
	.bg-primary.card .card-header,
	.bg-primary.card .card-footer {
		background: #0074f0;
	}

	a.bg-primary:hover,
	a.bg-primary:focus {
		background-color: #0062cc !important;
	}

	.bg-secondary {
		background-color: #5a6169 !important;
	}
	.bg-secondary.card .card-title,
	.bg-secondary.card .card-body,
	.bg-secondary.card .card-header,
	.bg-secondary.card .card-footer {
		background-color: #42484e !important;
	}
	.bg-secondary.card .card-header,
	.bg-secondary.card .card-footer {
		background: #535961;
	}

	a.bg-secondary:hover,
	a.bg-secondary:focus {
		background-color: #42484e !important;
	}

	.bg-success {
		background-color: #17c671 !important;
	}
	.bg-success.card .card-title,
	.bg-success.card .card-body,
	.bg-success.card .card-header,
	.bg-success.card .card-footer {
		background-color: #129857 !important;
	}
	.bg-success.card .card-header,
	.bg-success.card .card-footer {
		background: #15b869;
	}

	a.bg-success:hover,
	a.bg-success:focus {
		background-color: #129857 !important;
	}

	.bg-info {
		background-color: #00b8d8 !important;
	}
	.bg-info.card .card-title,
	.bg-info.card .card-body,
	.bg-info.card .card-header,
	.bg-info.card .card-footer {
		background-color: #008da5 !important;
	}
	.bg-info.card .card-header,
	.bg-info.card .card-footer {
		background: #00abc9;
	}

	a.bg-info:hover,
	a.bg-info:focus {
		background-color: #008da5 !important;
	}

	.bg-warning {
		background-color: #ffb400 !important;
	}
	.bg-warning.card .card-title,
	.bg-warning.card .card-body,
	.bg-warning.card .card-header,
	.bg-warning.card .card-footer {
		background-color: #cc9000 !important;
	}
	.bg-warning.card .card-header,
	.bg-warning.card .card-footer {
		background: #f0a900;
	}

	a.bg-warning:hover,
	a.bg-warning:focus {
		background-color: #cc9000 !important;
	}

	.bg-danger {
		background-color: #c4183c !important;
	}
	.bg-danger.card .card-title,
	.bg-danger.card .card-body,
	.bg-danger.card .card-header,
	.bg-danger.card .card-footer {
		background-color: #97122e !important;
	}
	.bg-danger.card .card-header,
	.bg-danger.card .card-footer {
		background: #b61638;
	}

	a.bg-danger:hover,
	a.bg-danger:focus {
		background-color: #97122e !important;
	}

	.bg-light {
		background-color: #fbfbfb !important;
	}
	.bg-light.card .card-title,
	.bg-light.card .card-body,
	.bg-light.card .card-header,
	.bg-light.card .card-footer {
		background-color: #e2e2e2 !important;
	}
	.bg-light.card .card-header,
	.bg-light.card .card-footer {
		background: #f3f3f3;
	}

	a.bg-light:hover,
	a.bg-light:focus {
		background-color: #e2e2e2 !important;
	}

	.bg-dark {
		background-color: #212529 !important;
	}
	.bg-dark.card .card-title,
	.bg-dark.card .card-body,
	.bg-dark.card .card-header,
	.bg-dark.card .card-footer {
		background-color: #0a0c0d !important;
	}
	.bg-dark.card .card-header,
	.bg-dark.card .card-footer {
		background: #1a1d21;
	}

	a.bg-dark:hover,
	a.bg-dark:focus {
		background-color: #0a0c0d !important;
	}

	.border {
		border: 1px solid #e1e5eb !important;
	}

	.border-top {
		border-top: 1px solid #e1e5eb !important;
	}

	.border-right {
		border-right: 1px solid #e1e5eb !important;
	}

	.border-bottom {
	}

	.border-left {
		border-left: 1px solid #e1e5eb !important;
	}

	.border-primary {
		border-color: #15558d !important;
	}

	.border-secondary {
		border-color: #5a6169 !important;
	}

	.border-success {
		border-color: #17c671 !important;
	}

	.border-info {
		border-color: #00b8d8 !important;
	}

	.border-warning {
		border-color: #ffb400 !important;
	}

	.border-danger {
		border-color: #c4183c !important;
	}

	.border-light {
		border-color: #fbfbfb !important;
	}

	.border-dark {
		border-color: #212529 !important;
	}

	.rounded {
		border-radius: 0.375rem !important;
	}

	.rounded-top {
		border-top-left-radius: 0.375rem !important;
		border-top-right-radius: 0.375rem !important;
	}

	.rounded-right {
		border-top-right-radius: 0.375rem !important;
		border-bottom-right-radius: 0.375rem !important;
	}

	.rounded-bottom {
		border-bottom-right-radius: 0.375rem !important;
		border-bottom-left-radius: 0.375rem !important;
	}

	.rounded-left {
		border-top-left-radius: 0.375rem !important;
		border-bottom-left-radius: 0.375rem !important;
	}

	.text-monospace {
		font-family: "Roboto Mono", Menlo, Monaco, Consolas, "Liberation Mono",
			"Courier New", monospace;
	}

	.font-weight-normal {
		font-weight: 300;
	}

	.font-weight-bold {
		font-weight: 500;
	}

	.text-primary {
		color: #15558d !important;
	}

	a.text-primary:hover,
	a.text-primary:focus {
		color: #0062cc !important;
	}

	.text-secondary {
		color: #5a6169 !important;
	}

	a.text-secondary:hover,
	a.text-secondary:focus {
		color: #42484e !important;
	}

	.text-success {
		color: #17c671 !important;
	}

	a.text-success:hover,
	a.text-success:focus {
		color: #129857 !important;
	}

	.text-info {
		color: #00b8d8 !important;
	}

	a.text-info:hover,
	a.text-info:focus {
		color: #008da5 !important;
	}

	.text-warning {
		color: #ffb400 !important;
	}

	a.text-warning:hover,
	a.text-warning:focus {
		color: #cc9000 !important;
	}

	.text-danger {
		color: #c4183c !important;
	}

	a.text-danger:hover,
	a.text-danger:focus {
		color: #97122e !important;
	}

	.text-light {
		color: #fbfbfb !important;
	}

	a.text-light:hover,
	a.text-light:focus {
		color: #e2e2e2 !important;
	}

	.text-dark {
		color: #212529 !important;
	}

	a.text-dark:hover,
	a.text-dark:focus {
		color: #0a0c0d !important;
	}

	.text-body {
		color: #5a6169 !important;
	}

	a.text-white:hover,
	a.text-white:focus {
		color: #e6e6e6 !important;
	}

	.text-black {
		color: #000;
	}

	a.text-black:hover,
	a.text-black:focus {
		color: black !important;
	}

	.text-muted {
		color: #868e96 !important;
	}

	.with-shadows {
		box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
			0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
			0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
			0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
	}

	/* Shards Dashboards Lite Styles */
	html {
		font-size: 16px;
		font-weight: 500;
	}
	@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) {
		html {
			font-size: 16px;
			font-weight: 400;
		}
	}

	body {
		background: #f5f6f8;
		font-size: 15px;
		font-weight: 500;
	}
	@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
		body {
			font-size: 13px;
			font-weight: 400;
		}
	}

	a {
		color: #15558d;
	}
	a:hover {
		color: #0056b3;
	}

	label {
		font-weight: 400;
	}

	.datepicker {
		font-size: 0.75rem;
		padding: 0.625rem;
	}
	.datepicker table tr td,
	.datepicker table tr th {
		width: 1.875rem;
		height: 1.875rem;
	}

	.btn-white:not([disabled]):not(.disabled):active,
	.btn-white:not([disabled]):not(.disabled).active,
	.btn-black:not([disabled]):not(.disabled):active,
	.btn-black:not([disabled]):not(.disabled).active {
		box-shadow: none !important;
		background-color: #15558d;
		border-color: #15558d;
		color: #fff;
	}
	.btn-white:not([disabled]):not(.disabled):active + .btn,
	.btn-white:not([disabled]):not(.disabled).active + .btn,
	.btn-black:not([disabled]):not(.disabled):active + .btn,
	.btn-black:not([disabled]):not(.disabled).active + .btn {
		border-left: 1px solid #15558d;
	}

	.btn-white:hover,
	.btn-black:hover {
		background: #fff;
		border-color: #fff;
		box-shadow: 0px 0.125rem 0.625rem rgba(129, 142, 163, 0.2),
			0 0.0625rem 0.125rem rgba(129, 142, 163, 0.3);
	}

	.btn.btn-white {
		border: 1px solid #e1e5eb;
		color: #3d5170;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-primary.active,
	.btn.btn-white:not([disabled]):not(.disabled).active-primary:active {
		background-color: #15558d;
		border-color: #15558d;
		color: #fff;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-primary.active + .btn,
	.btn.btn-white:not([disabled]):not(.disabled).active-primary:active + .btn {
		border-left: 1px solid red;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-secondary.active,
	.btn.btn-white:not([disabled]):not(.disabled).active-secondary:active {
		background-color: #5a6169;
		border-color: #5a6169;
		color: #fff;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-secondary.active + .btn,
	.btn.btn-white:not([disabled]):not(.disabled).active-secondary:active + .btn {
		border-left: 1px solid red;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-success.active,
	.btn.btn-white:not([disabled]):not(.disabled).active-success:active {
		background-color: #17c671;
		border-color: #17c671;
		color: #fff;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-success.active + .btn,
	.btn.btn-white:not([disabled]):not(.disabled).active-success:active + .btn {
		border-left: 1px solid red;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-info.active,
	.btn.btn-white:not([disabled]):not(.disabled).active-info:active {
		background-color: #00b8d8;
		border-color: #00b8d8;
		color: #fff;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-info.active + .btn,
	.btn.btn-white:not([disabled]):not(.disabled).active-info:active + .btn {
		border-left: 1px solid red;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-warning.active,
	.btn.btn-white:not([disabled]):not(.disabled).active-warning:active {
		background-color: #ffb400;
		border-color: #ffb400;
		color: #212529;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-warning.active + .btn,
	.btn.btn-white:not([disabled]):not(.disabled).active-warning:active + .btn {
		border-left: 1px solid red;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-danger.active,
	.btn.btn-white:not([disabled]):not(.disabled).active-danger:active {
		background-color: #c4183c;
		border-color: #c4183c;
		color: #fff;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-danger.active + .btn,
	.btn.btn-white:not([disabled]):not(.disabled).active-danger:active + .btn {
		border-left: 1px solid red;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-light.active,
	.btn.btn-white:not([disabled]):not(.disabled).active-light:active {
		background-color: #fbfbfb;
		border-color: #fbfbfb;
		color: #212529;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-light.active + .btn,
	.btn.btn-white:not([disabled]):not(.disabled).active-light:active + .btn {
		border-left: 1px solid red;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-dark.active,
	.btn.btn-white:not([disabled]):not(.disabled).active-dark:active {
		background-color: #212529;
		border-color: #212529;
		color: #fff;
	}
	.btn.btn-white:not([disabled]):not(.disabled).active-dark.active + .btn,
	.btn.btn-white:not([disabled]):not(.disabled).active-dark:active + .btn {
		border-left: 1px solid red;
	}

	.btn-accent {
		color: #fff;
		border-color: #15558d;
		background-color: #15558d;
		box-shadow: none;
	}
	.btn-accent:hover {
		color: #fff;
		background-color: #1c73bf;
		border-color: #1c73bf;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(0, 123, 255, 0.25);
	}
	.btn-accent:focus,
	.btn-accent.focus {
		box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15),
			0 3px 15px rgba(0, 123, 255, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.btn-accent.disabled,
	.btn-accent:disabled {
		background-color: #15558d;
		border-color: #15558d;
		box-shadow: none;
		cursor: not-allowed;
	}
	.btn-accent:not(:disabled):not(.disabled):active,
	.btn-accent:not(:disabled):not(.disabled).active,
	.show > .btn-accent.dropdown-toggle {
		color: #fff;
		background-color: #1c73bf;
		border-color: #0062cc;
		background-image: none;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-outline-accent {
		background-color: transparent;
		background-image: none;
		border-color: #15558d;
		color: #15558d;
	}
	.btn-outline-accent:hover {
		color: #fff;
		background-color: #15558d;
		border-color: #15558d;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
			0 4px 10px rgba(0, 123, 255, 0.25);
	}
	.btn-outline-accent:focus,
	.btn-outline-accent.focus {
		box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15),
			0 3px 15px rgba(0, 123, 255, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1) !important;
	}
	.btn-outline-accent.disabled,
	.btn-outline-accent:disabled {
		color: #15558d;
		background-color: transparent;
		box-shadow: none;
	}
	.btn-outline-accent:not(:disabled):not(.disabled):active,
	.btn-outline-accent:not(:disabled):not(.disabled).active,
	.show > .btn-outline-accent.dropdown-toggle {
		color: #fff;
		background-color: #15558d;
		border-color: #15558d;
	}
	.btn-outline-accent:not(:disabled):not(.disabled):active:focus,
	.btn-outline-accent:not(:disabled):not(.disabled).active:focus,
	.show > .btn-outline-accent.dropdown-toggle:focus {
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important;
	}

	.btn-group-sm i {
		transform: scale(1.3);
	}

	.navbar-light .navbar-brand {
		font-weight: 500;
		color: #3d5170;
	}

	.nav-link {
		font-size: 1.5rem;
		font-weight: 400;
	}
	.nav-link-icon {
		color: #818ea3;
	}
	.nav-link-icon:hover,
	.nav-link-icon:focus {
		color: #66748b;
	}
	.nav-link-icon__wrapper {
		position: relative;
	}
	.nav-link-icon i {
		font-size: 1.25rem;
	}
	.nav-link-icon i.material-icons {
		font-size: 1.5625rem;
	}

	.badge-accent {
		color: #fff;
		background-color: #15558d;
	}
	.badge-accent[href]:hover,
	.badge-accent[href]:focus {
		color: #fff;
		text-decoration: none;
		background-color: #0062cc;
	}

	.badge-outline-accent {
		background: none;
		border: 1px solid #15558d;
		color: #15558d;
	}

	.alert-accent {
		color: #f5faff;
		background-color: #15558d;
	}
	.alert-accent .alert-link {
		color: #f5faff;
	}

	.alert-dismissible .close {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.input-group {
		min-width: 7.5rem;
	}

	.input-group-text {
		font-size: 1.5rem;
	}

	.input-group.input-group-seamless > .form-control:not(:first-child),
	.input-group.input-group-seamless > .custom-select:not(:first-child) {
		padding-left: 1.875rem;
	}

	.input-group-text i {
		transform: scale(1.1);
	}
	.input-group-text i.fa {
		font-size: 0.75rem;
	}
	.input-group-text i.material-icons {
		top: 0;
		font-size: 1.5rem;
	}

	.custom-select-sm {
		font-size: 0.6875rem;
		border-radius: 0.25rem;
	}

	.custom-select-lg {
		border-radius: 0.25rem;
	}

	.custom-control {
		line-height: 1.5rem;
	}

	.custom-checkbox
		.custom-control-input:disabled:checked
		~ .custom-control-label::after {
		border-color: #becad6;
	}

	.custom-radio
		.custom-control-input:disabled:checked
		~ .custom-control-label::after {
		background: #becad6;
	}

	.custom-toggle
		.custom-control-input:checked:disabled
		~ .custom-control-label::after {
		background: #becad6;
	}

	.slider-accent .noUi-connect {
		background: #15558d;
	}

	.noUi-pips {
		font-size: 0.625rem;
	}

	.noUi-tooltip {
		font-size: 0.75rem;
		padding: 5px 10px;
	}

	.noUi-horizontal .noUi-tooltip {
		bottom: 1.625rem;
	}

	.noUi-horizontal .noUi-handle {
		left: -0.625rem;
		top: -0.5rem;
	}

	.noUi-handle {
		width: 23px;
		height: 23px;
	}

	.thumbnail {
		border: 1px solid #d4d4d4;
	}

	i.material-icons {
		top: 2px;
	}

	.dropdown .fa,
	.dropdown .material-icons {
		color: #c3c7cc;
		margin-right: 0.25rem;
	}

	.dropdown .dropdown-item:hover {
		background-color: #fafafb;
	}

	.card-header h1,
	.card-header h2,
	.card-header h3,
	.card-header h4,
	.card-header h5,
	.card-header h6 {
		font-weight: 500;
	}

	.card .view-report {
		margin-top: auto;
		margin-bottom: auto;
		font-size: 0.75rem;
	}
	.card .view-report a {
		color: #3d5170;
	}
	.card .view-report a:hover {
		color: #15558d;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	.overflow-visible {
		overflow: visible;
	}

	.overflow-scroll {
		overflow: scroll;
	}

	.overflow-auto {
		overflow: auto;
	}

	.no-shadow {
		box-shadow: none !important;
	}

	.text-fiord-blue {
		color: #3d5170 !important;
	}

	a.text-fiord-blue:hover,
	a.text-fiord-blue:focus {
		color: #2b394f !important;
	}

	.text-shuttle-gray {
		color: #5a6169 !important;
	}

	a.text-shuttle-gray:hover,
	a.text-shuttle-gray:focus {
		color: #42484e !important;
	}

	.text-reagent-gray {
		color: #818ea3 !important;
	}

	a.text-reagent-gray:hover,
	a.text-reagent-gray:focus {
		color: #66748b !important;
	}

	.text-mischka {
		color: #cacedb !important;
	}

	a.text-mischka:hover,
	a.text-mischka:focus {
		color: #acb2c6 !important;
	}

	.text-athens-gray {
		color: #e9ecef !important;
	}

	a.text-athens-gray:hover,
	a.text-athens-gray:focus {
		color: #cbd3da !important;
	}

	.text-accent {
		color: #15558d !important;
	}

	a.text-accent:hover,
	a.text-accent:focus {
		color: #0062cc !important;
	}

	.text-light {
		color: #818ea3 !important;
	}

	.text-semibold {
		font-weight: 400;
	}

	.border {
		border: 1px solid #e1e5eb !important;
	}

	.border-top {
		border-top: 1px solid #e1e5eb !important;
	}

	.border-right {
		border-right: 1px solid #e1e5eb !important;
	}

	.border-bottom {
		border-bottom: 1px solid #e1e5eb !important;
	}

	.border-left {
		border-left: 1px solid #e1e5eb !important;
	}

	.rounded {
		border-radius: 5px !important;
	}

	.rounded-top {
		border-top-left-radius: 5px !important;
		border-top-right-radius: 5px !important;
	}

	.rounded-right {
		border-top-right-radius: 5px !important;
		border-bottom-right-radius: 5px !important;
	}

	.rounded-bottom {
		border-bottom-right-radius: 5px !important;
		border-bottom-left-radius: 5px !important;
	}

	.rounded-left {
		border-top-left-radius: 5px !important;
		border-bottom-left-radius: 5px !important;
	}

	.border-accent {
		border-color: #15558d !important;
	}

	.main-navbar .navbar {
		height: 3.75rem;
	}
	.main-navbar .navbar > * {
		display: flex;
	}
	.main-navbar .navbar .nav-link {
		min-width: 3.75rem;
	}
	.main-navbar .navbar .notifications {
		position: relative;
	}
	@media (max-width: 767.98px) {
		.main-navbar .navbar .notifications {
			position: static;
		}
		.main-navbar .navbar .notifications .dropdown-menu {
			min-width: 100% !important;
			border-left: none;
		}
	}
	.main-navbar .navbar .notifications .badge {
		position: absolute;
		padding: 0.25rem 0.375rem;
		font-size: 0.5rem;
		left: 50%;
		top: 50%;
	}
	.main-navbar .navbar .notifications .dropdown-menu {
		padding: 0;
		min-width: 25rem;
		border-right: 0;
		left: auto;
	}
	@media (max-width: 767.98px) {
		.main-navbar .navbar .notifications .dropdown-menu {
			left: 0;
			right: 0;
		}
	}
	.main-navbar .navbar .notifications .dropdown-menu .dropdown-item {
		white-space: normal;
		display: flex;
		flex-flow: row;
		padding-top: 0.625rem;
		padding-bottom: 0.625rem;
	}
	.main-navbar .navbar .notifications .dropdown-menu .dropdown-item:last-child {
		border-bottom: 0;
	}
	.main-navbar
		.navbar
		.notifications
		.dropdown-menu
		.notification__icon-wrapper {
		display: flex;
		padding: 0 5px;
	}
	.main-navbar .navbar .notifications .dropdown-menu .notification__icon {
		background-color: #f5f6f8;
		box-shadow: 0 0 0 1px white, inset 0 0 3px rgba(0, 0, 0, 0.2);
		width: 2.1875rem;
		height: 2.1875rem;
		line-height: 0;
		display: block;
		text-align: center;
		margin: auto;
		border-radius: 50%;
	}
	.main-navbar .navbar .notifications .dropdown-menu .notification__icon i {
		color: #818ea3;
		line-height: 2.0625rem;
		font-size: 1.0625rem;
		margin: 0;
	}
	.main-navbar .navbar .notifications .dropdown-menu .notification__content {
		padding: 0 0.625rem;
	}
	.main-navbar .navbar .notifications .dropdown-menu .notification__content p {
		margin: 0;
		line-height: 1.5;
		font-size: 0.75rem;
	}
	.main-navbar .navbar .notifications .dropdown-menu .notification__category {
		font-size: 0.5625rem;
		color: #818ea3;
		letter-spacing: 0.0938rem;
		display: inline-block;
		text-transform: uppercase;
		margin-bottom: 5px;
		font-weight: 500;
	}
	.main-navbar .navbar .notifications .dropdown-menu .notification__all {
		display: block;
		font-weight: 500;
		font-size: 11px;
		border-bottom-left-radius: 0.375rem;
		border-bottom-right-radius: 0.375rem;
	}
	.main-navbar .navbar .user-avatar {
		max-width: 2.5rem;
	}
	.main-navbar .navbar .navbar-nav .dropdown-menu {
		position: absolute;
		right: 0;
		width: 100%;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-top: none;
	}
	.main-navbar .navbar .nav-link-icon i {
		line-height: 2.5rem;
	}

	.main-content > .main-navbar,
	.main-content .header-navbar {
		box-shadow: 0 0.125rem 0.625rem rgba(90, 97, 105, 0.12);
	}

	.main-sidebar {
		top: 0;
		position: fixed;
		height: calc(100vh);
		background: #fff;
		z-index: 1070;
		will-change: transform;
		transition: transform 200ms ease-in-out;
		box-shadow: 0 0.125rem 9.375rem rgba(90, 97, 105, 0.1),
			0 0.25rem 0.5rem rgba(90, 97, 105, 0.12),
			0 0.9375rem 1.375rem rgba(90, 97, 105, 0.1),
			0 0.4375rem 2.1875rem rgba(165, 182, 201, 0.1);
	}
	@media (max-width: 767.98px) {
		.main-sidebar {
			transform: translateX(-100%);
			box-shadow: none;
		}
	}
	.main-sidebar.open {
		transform: translateX(0);
		box-shadow: 0 0.125rem 9.375rem rgba(90, 97, 105, 0.1),
			0 0.25rem 0.5rem rgba(90, 97, 105, 0.12),
			0 0.9375rem 1.375rem rgba(90, 97, 105, 0.1),
			0 0.4375rem 2.1875rem rgba(165, 182, 201, 0.1);
	}
	.main-sidebar .toggle-sidebar {
		position: absolute;
		right: 0;
		height: 100%;
		padding: 1.25rem;
		font-size: 1.25rem;
		border-left: 1px solid #e1e5eb;
	}
	.main-sidebar .toggle-sidebar:hover {
		cursor: pointer;
	}
	.main-sidebar .navbar-brand {
		overflow: hidden;
		height: 3.75rem;
		font-size: 1rem;
	}
	@media (max-width: 991.98px) {
		.main-sidebar .navbar-brand {
			font-size: 90%;
		}
	}
	.main-sidebar .nav-wrapper {
		overflow-y: auto;
		overflow-x: hidden;
		height: calc(100vh - 3.75rem - 1px);
	}
	.main-sidebar .nav .nav-item,
	/* .main-sidebar .nav .nav-link {
		white-space: nowrap;
		min-width: 100%;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, sans-serif;
		will-change: background-color, box-shadow, color;
		transition: box-shadow 200ms ease, color 200ms ease,
			background-color 200ms ease;
		font-size: 0.85rem;
	} */
	.main-sidebar .nav .nav-item .nav-link {
		font-weight: 400;
		color: #3d5170;
		padding: 0.9375rem 1.5625rem;
	}
	.main-sidebar .nav .nav-item .nav-link i {
		min-width: 1.25rem;
		font-size: 90%;
		text-align: center;
		vertical-align: middle;
		will-change: color;
		color: #cacedb;
		transition: color 200ms ease;
		margin-right: 0.375rem;
	}
	.main-sidebar .nav .nav-item .nav-link i.material-icons {
		font-size: 1.125rem;
		top: -1px;
	}
	.main-sidebar .nav .nav-item.active,
	.main-sidebar .nav .nav-item .nav-link.active,
	.main-sidebar .nav .nav-item:hover,
	.main-sidebar .nav .nav-item .nav-link:hover {
		box-shadow: inset 0.1875rem 0 0 #15558d;
		background-color: #fbfbfb;
		color: #15558d;
	}
	.main-sidebar .nav .nav-item.active i,
	.main-sidebar .nav .nav-item .nav-link.active i,
	.main-sidebar .nav .nav-item:hover i,
	.main-sidebar .nav .nav-item .nav-link:hover i {
		color: #15558d;
	}
	.main-sidebar .nav--no-borders .nav-item .nav-link {
		border-bottom: 0;
	}
	.main-sidebar .nav--no-borders .dropdown-menu {
		box-shadow: inset 0 0 0.4375rem rgba(61, 81, 112, 0.2);
	}
	.main-sidebar .nav--no-borders .dropdown-menu .dropdown-item:first-child {
		border-top: 1px solid #e1e5eb;
	}
	.main-sidebar .dropdown-menu {
		position: static !important;
		transform: translate(0) !important;
		box-shadow: none;
		border-radius: 0;
		width: 100%;
		border: none;
		padding: 0;
		box-shadow: inset 0 -0.1875rem 0.1875rem rgba(61, 81, 112, 0.08);
	}
	.main-sidebar .dropdown-menu .dropdown-item {
		padding: 0.75rem 1.75rem;
		border-bottom: 1px solid #f0f2f5;
		color: #3d5170;
		font-size: 1.5rem;
		font-weight: 400;
	}
	@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) {
		.main-sidebar .dropdown-menu .dropdown-item {
			font-weight: 300;
		}
	}
	.main-sidebar .dropdown-menu .dropdown-item:hover,
	.main-sidebar .dropdown-menu .dropdown-item.active {
		color: #15558d;
	}
	.main-sidebar .dropdown-menu .dropdown-item:hover {
		background: none;
	}
	.main-sidebar .dropdown-menu .dropdown-item.active {
		background-color: #fbfbfb;
	}
	.main-sidebar .dropdown-menu .dropdown-item:last-of-type {
		border-bottom: 1px solid #e1e5eb;
	}
	.main-sidebar .dropdown-menu .dropdown-divider {
		margin: 0;
	}
	.main-sidebar .dropdown-toggle {
		position: relative;
	}
	.main-sidebar .dropdown-toggle::after {
		background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTcuNDEgNy44NEwxMiAxMi40Mmw0LjU5LTQuNThMMTggOS4yNWwtNiA2LTYtNnoiLz4gICAgPHBhdGggZD0iTTAtLjc1aDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+);
		background-position: center center;
		width: 0.875rem;
		height: 0.5625rem;
		transition: transform 250ms ease-in-out;
		border: none;
		position: absolute;
		top: 50%;
		right: 0.625rem;
		transform: translateY(-50%);
		opacity: 0.1;
		will-change: transform;
	}
	.main-sidebar .dropdown.show .dropdown-toggle::after {
		transform: translateY(-50%) rotateZ(180deg);
	}
	@media (max-width: 767.98px) {
		.main-sidebar__search {
			box-sizing: border-box;
			border-right: 0 !important;
			padding: 0.625rem 0;
			border-bottom: 1px solid #e1e5eb;
		}
		.main-sidebar__search .input-group {
			margin: 0 !important;
		}
	}

	.main-navbar__search .input-group-prepend .input-group-text,
	.main-sidebar__search .input-group-prepend .input-group-text {
		font-size: 0.6875rem;
		padding: 0.75rem 1.0625rem;
	}

	.main-navbar__search input.form-control,
	.main-sidebar__search input.form-control {
		border: none;
		font-size: 1.5rem;
		border-radius: 0;
	}
	.main-navbar__search input.form-control:hover,
	.main-navbar__search input.form-control:focus,
	.main-sidebar__search input.form-control:hover,
	.main-sidebar__search input.form-control:focus {
		box-shadow: none;
	}

	.main-content > .main-content-container.container-fluid {
		min-height: calc(100vh - 7.5rem);
	}

	.main-footer {
		height: 3.75rem;
	}
	.main-footer .copyright {
		color: #818ea3;
	}
	@media (max-width: 767.98px) {
		.main-footer {
			display: block !important;
			height: auto;
		}
		.main-footer .nav {
			width: 100%;
			display: block;

			padding-bottom: 0.75rem;
		}
		.main-footer .copyright {
			display: inline-block;
			width: 100%;
			padding: 1rem;
			text-align: center;
		}
	}

	.page-header .page-title {
		font-size: 1.625rem;
		font-weight: 500;
		line-height: 1;
		margin: 0;
		padding: 0;
	}
	@media (max-width: 767.98px) {
		.page-header .page-title {
			font-size: 2rem;
		}
	}

	.page-header .page-subtitle {
		letter-spacing: 0.125rem;
		color: #818ea3;
		font-size: 0.625rem;
	}
	@media (max-width: 767.98px) {
		.page-header .page-subtitle {
			font-size: 1.5rem;
			font-weight: 400;
		}
	}

	.stats-small {
		min-height: 8.7rem;
		overflow: hidden !important;
	}
	.stats-small canvas {
		position: absolute;
		bottom: 0;
	}
	.stats-small__data {
		flex: 1;
		display: flex;
		justify-content: center;
		flex-flow: column;
		max-width: 50%;
		z-index: 1;
	}
	.stats-small__label {
		font-size: 0.625rem;
		letter-spacing: 0.0625rem;
		color: #818ea3;
	}
	.stats-small__value {
		font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
			"Helvetica Neue", Arial, sans-serif;
		font-size: 1.5rem;
		font-weight: 500;
	}
	.stats-small__percentage {
		position: relative;
		display: table;
		margin-left: auto;
		padding-left: 0.9375rem;
	}
	.stats-small__percentage--increase,
	.stats-small__percentage--decrease {
		font-size: 0.75rem;
	}
	.stats-small__percentage--increase::before,
	.stats-small__percentage--decrease::before {
		content: "";
		width: 0.75rem;
		height: 0.375rem;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		background-position: center center;
		background-repeat: no-repeat;
	}
	.stats-small__percentage--increase {
		color: #17c671;
	}
	.stats-small__percentage--increase::before {
		background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTdjNjcxIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTcgMTRsNS01IDUgNXoiLz4gPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiA8L3N2Zz4=);
	}
	.stats-small__percentage--decrease {
		color: #c4183c;
	}
	.stats-small__percentage--decrease::before {
		background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYzQxODNjIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);
	}
	.stats-small--1 .stats-small__data {
		max-width: 100%;
	}
	.stats-small--1 .stats-small__percentage {
		margin: 0 auto;
	}
	.stats-small--1 .stats-small__value {
		font-size: 2.0625rem;
	}
	.stats-small--1 .stats-small__label {
		font-size: 0.75rem;
	}
	.stats-small--1 .stats-small__percentage {
		font-size: 0.75rem;
	}
	.stats-small--1 canvas {
		opacity: 0.5;
	}

	.card-group .stats-small {
		position: relative;
		overflow: hidden;
	}

	.quick-post-form {
		display: flex;
		flex-flow: column;
		flex: 1;
	}
	.quick-post-form .form-group:nth-child(2) {
		display: flex;
		flex: 1;
	}
	.quick-post-form textarea {
		resize: none;
		min-height: 100px;
	}

	.blog-comments__avatar img {
		width: 3.125rem;
		height: 3.125rem;
		border-radius: 0.25rem;
	}

	.blog-comments__item {
		padding: 0;
	}
	.blog-comments__item:last-child {
		border: 0;
	}

	.blog-comments__actions {
		font-size: 95%;
	}
	.blog-comments__actions .btn-group button {
		padding: 0.25rem 0.5625rem;
	}

	.add-new-post__editor {
		min-height: 400px;
	}

	html .ql-container.ql-snow,
	html .ql-toolbar.ql-snow {
		border-color: #e1e5eb;
	}

	html .ql-container {
		border-bottom-left-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
	}

	html .ql-editor strong,
	html .ql-editor b {
		font-weight: 600;
	}

	html .ql-toolbar {
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		color: #3d5170 !important;
	}
	html .ql-toolbar .ql-fill,
	html .ql-toolbar .ql-stroke.ql-fill {
		fill: #818ea3;
	}
	html .ql-toolbar .ql-stroke {
		stroke: #818ea3;
	}
	html .ql-toolbar button:hover .ql-fill,
	html .ql-toolbar button:hover .ql-stroke.ql-fill,
	html .ql-toolbar button:active .ql-fill,
	html .ql-toolbar button:active .ql-stroke.ql-fill,
	html .ql-toolbar button:focus .ql-fill,
	html .ql-toolbar button:focus .ql-stroke.ql-fill {
		fill: #15558d !important;
	}
	html .ql-toolbar button:hover .ql-stroke,
	html .ql-toolbar button:active .ql-stroke,
	html .ql-toolbar button:focus .ql-stroke {
		stroke: #15558d !important;
	}
	html .ql-toolbar .ql-picker .ql-picker-item:hover {
		color: #15558d !important;
	}
	html .ql-toolbar .ql-picker .ql-picker-options {
		padding: 6px 20px;
		border: 0 !important;
		box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
			0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
			0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
			0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
		border-radius: 0.375rem;
	}

	.card-post .card-body {
		padding: 1.5625rem 1.5625rem;
	}

	.card-post .card-footer,
	.card-post .card-header {
		padding-left: 1.5625rem;
		padding-right: 1.5625rem;
	}

	.card-post__image {
		position: relative;
		min-height: 10.3125rem;
		border-top-left-radius: 0.625rem;
		border-top-right-radius: 0.625rem;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.w100 {
		border: 2px solid red !important;
	}
	.card-post__author-avatar {
		width: 2.8125rem;
		height: 2.8125rem;
		box-shadow: 0 0 0 0.125rem #fff,
			0 0.1875rem 0.4375rem rgba(90, 97, 105, 0.5);
		display: block;
		background-position: center;
		background-size: cover;
		border-radius: 50%;
		text-indent: -9999px;
	}
	.card-post__author-avatar--small {
		width: 2.1875rem;
		height: 2.1875rem;
	}

	.card-post__author-name {
		font-weight: 500;
	}

	.card-post--aside {
		display: flex;
		flex-flow: row;
	}
	.card-post--aside .card-post__image {
		border-top-right-radius: 0;
		border-top-left-radius: 0.625rem;
		border-bottom-left-radius: 0.625rem;
		min-width: 180px;
	}

	.card-post--1 .card-post__author,
	.card-post--1 .card-post__category {
		position: absolute;
	}

	.card-post--1 .card-post__author {
		transform: translateY(50%);
		margin-left: 1.5625rem;
		position: absolute;
		bottom: 0;
	}

	.card-post--1 .card-post__category {
		top: 0.9375rem;
		right: 0.9375rem;
		position: absolute;
		text-transform: uppercase;
	}

	.card-post--1 .card-body {
		padding-top: 2.1875rem;
	}

	.card-post--1.card-post--aside .card-body {
		padding: 1.5625rem 1.5625rem;
	}

	.card-post--1.card-post--aside .card-post__author {
		left: 0.9375rem;
		bottom: 0.9375rem;
		transform: none;
		margin: 0;
	}

	.card-post--1.card-post--aside .card-post__category {
		right: initial;
		top: 0.9375rem;
		left: 0.9375rem;
	}

	.error {
		height: calc(100vh - 3.75rem);
		display: flex;
	}
	.error__content {
		padding: 0 0.9375rem;
		display: flex;
		flex-flow: column;
		margin: auto;
		align-items: center;
		text-align: center;
	}
	.error__content h2 {
		color: #cacedb;
		font-weight: 700;
		font-size: 3.75rem;
		margin-bottom: 1.5625rem;
	}
	.error__content h3 {
		font-weight: 500;
		font-size: 2.1875rem;
		margin-bottom: 0.625rem;
	}
	.error__content p {
		color: #818ea3;
	}
	nav {
		background-color: transparent !important;
	}
`;
