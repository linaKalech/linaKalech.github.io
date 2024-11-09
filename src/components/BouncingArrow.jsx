import React, { useEffect, useState } from 'react';

const BouncingArrow = () => {
  const [isGray, setIsGray] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGray((prev) => !prev);
    }, 1000); // Toggle every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <svg
      width="38"
      height="68"
      viewBox="0 0 46 68"
      xmlns="http://www.w3.org/2000/svg"
      className={`bouncing ${isGray ? 'fill-gray' : 'fill-white'}`}
      style={{ transition: 'fill 0.5s ease' }} // Smooth color transition
    >
      <path
        d="M20.8787 67.1213C22.0503 68.2929 23.9497 68.2929 25.1213 67.1213L44.2132 48.0294C45.3848 46.8579 45.3848 44.9584 44.2132 43.7868C43.0416 42.6152 41.1421 42.6152 39.9706 43.7868L23 60.7574L6.02944 43.7868C4.85786 42.6152 2.95837 42.6152 1.7868 43.7868C0.615223 44.9584 0.615223 46.8579 1.7868 48.0294L20.8787 67.1213ZM20 0L20 65H26L26 0L20 0Z"
      />
    </svg>
  );
};

export default BouncingArrow;
