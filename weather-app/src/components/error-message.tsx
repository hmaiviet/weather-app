
type Props = {
    error: string
}

//Functional component to render a simple error message
export const ErrorMessage = ({ error }: Props) => {
    return (
        <div className='flex flex-col max-w-[400px] text-white font-sans items-start'>
            {error}
            </div>
    )
}