
type Props = {
    error: string
}

export const ErrorMessage = ({ error }: Props) => {
    return (
        <div className='flex flex-col max-w-[400px] text-white font-sans items-start'>
            {error}
            </div>
    )
}