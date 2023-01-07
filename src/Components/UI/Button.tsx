const Button = (props: { children: React.ReactNode; className: string }) => {
	return (
		<button
			className={`bg-primary hover:bg-secondary transition-all text-white rounded-3xl py-2 font-bold ${props.className}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
