import { forwardRef } from 'react';
const Input = forwardRef(
	(
		props: {
			label: string;
			input: { id: string; type: 'text' | 'number'; min: string; max: string; step: string; defaultValue: string };
		},
		ref: React.Ref<HTMLInputElement>
	) => {
		return (
			<div className='flex items-center justify-between mb-3'>
				<label className='font-bold' htmlFor={props.input.id}>
					{props.label}
				</label>
				<input className='shadow w-2/6 pl-2 border rounded' {...props.input} ref={ref} />
			</div>
		);
	}
);

export default Input;
