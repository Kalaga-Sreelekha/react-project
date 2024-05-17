

const Card = ({children,bg='bg-gray-100'}) => {
  return (
    <div className={ `${bg} pg-6 rounded-lg shadow-mg`}>
        {children}
    </div>
  )
}

export default Card