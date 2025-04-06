
interface cardInputs {
    title: string,
    info: string,
    photo: string
}

export const Card = ({title, info, photo}:cardInputs)=>{
    return (
      <li className="flex pb-11 md:flex-col md:items-center md:mx-6">
        <div className="mr-4 md:pb-8">
          <img src={photo} alt="" width={"48px"} />
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <h2 className="pb-2">{title}</h2>
          <p className="pt-4 font-normal md:text-center">
            {info}
          </p>
        </div>
      </li>
    );
}