const Button = (props: {
	children: React.ReactNode;
	className: string;
	onClick?: React.MouseEventHandler;
	type?: 'button' | 'submit';
}) => {
	return (
		<button
			className={`bg-primary hover:bg-secondary transition-all text-white rounded-3xl py-1  ${props.className}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
