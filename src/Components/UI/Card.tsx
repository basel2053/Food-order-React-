const Card = (props: { children: React.ReactNode; className: string }) => {
	return <div className={`p-4 shadow-2xl rounded-xl ${props.className}`}>{props.children}</div>;
};

export default Card;
