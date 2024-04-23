function NumberList({calculatedNumbers}) {
  return (
    <div className="w-full h-gr1 bg-mikadoYellow">
      <ul>
        {calculatedNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  )
}

export default NumberList;