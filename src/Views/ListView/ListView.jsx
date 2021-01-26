import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import List from '../../Shared/List/List';

const ListView = props => {
  const [on, set] = useState(true);
  const animate = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
  return (
    <div key={on} onClick={() => set(!on)}>
      <animated.div style={animate}>
        <List />
      </animated.div>
    </div>
  );
};

export default ListView;