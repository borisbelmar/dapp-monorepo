export default function Highlights() {
  return (
    <div className="mb-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 gap-2">
          <div className="flex items-center mb-4 gap-2">
            <div className="flex-1 bg-gray-900 rounded p-4 ">
              <h4 className="text-sm font-bold">Total Minted</h4>
              <p className="text-2xl font-bold">35</p>
            </div>
            <div className="flex-1 bg-gray-900 rounded p-4 ">
              <h4 className="text-sm font-bold">Total Solds</h4>
              <p className="text-2xl font-bold">74</p>
            </div>
            <div className="flex-1 bg-gray-900 rounded p-4 ">
              <h4 className="text-sm font-bold">Total Profit</h4>
              <p className="text-2xl font-bold">$34,456 USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
