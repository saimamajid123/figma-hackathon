export default function MissionStatement() {
    return (
      <div className="flex flex-col items-center bg-white py-16">
        {/* Title */}
        <h2 className="text-4xl font-light text-gray-300 mb-12">Main Focus/Mission Statement</h2>
  
        {/* Focus Points */}
        <div className="grid grid-cols-2 gap-8 w-4/5">
          {/* Focus Point 1 */}
          <div className="flex space-x-4 items-start">
            <span className="text-7xl font-bold text-gray-200">1</span>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed efficitur, lectus et facilisis placerat.
            </p>
          </div>
  
          {/* Focus Point 2 */}
          <div className="flex space-x-4 items-start">
            <span className="text-7xl font-bold text-gray-200">2</span>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </div>
    );
  }
  