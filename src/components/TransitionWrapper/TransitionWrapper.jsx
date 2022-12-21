import PropType from 'prop-types';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';

export default function TransitionWrapper({
  children,
  in: show,
  duration = 300,
  transitionStyles,
}) {
  const nodeRef = useRef(null);
  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
  };
  const styles = transitionStyles || {
    entering: { opacity: 1, zIndex: 5 },
    entered: { opacity: 1, zIndex: 5 },
    exiting: { opacity: 0, zIndex: 5 },
    exited: { opacity: 0, zIndex: 0 },
  };

  return (
    <Transition nodeRef={nodeRef} in={show} timeout={duration} unmountOnExit>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...styles[state],
          }}>
          {children}
        </div>
      )}
    </Transition>
  );
}

TransitionWrapper.propsTypes = {
  children: PropType.node.isRequired,
  show: PropType.bool.isRequired,
};
