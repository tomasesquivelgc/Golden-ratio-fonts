function FontList({biggestNumber, calculatedNumbers}) {
  return(
    <div className="w-gr1 h-full bg-white overflow-y-scroll">
            <ul>
              <li style={{ fontSize: biggestNumber }}>Font Size {biggestNumber}px</li>
              {calculatedNumbers.map((number, index) => (
                <li key={index} style={{ fontSize: number }}>
                  Font Size {number}px
                </li>
              ))}
            </ul>
          </div>
  )
}

export default FontList;