
type Props = {
    onClick: () => {} | null
}

//Functional component to render a the submit button when looking up weather data
export const SubmitButton = ({ onClick }: Props) => {
    return (
        <div className='flex mt-[30px] min-w-[165px] min-h-[40px] bg-[#2131b3] mb-[20px]
         rounded-md text-white font-bold font-sans  hover:cursor-pointer justify-center items-center' onClick={onClick}>Check weather</div>
    )
}